import { PDFDocument, rgb } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'
import type { Medication } from './useMedications'

interface PrescribedMedication extends Medication {
  addedAt: Date
}

export const usePrescription = () => {
  const prescribedMedications = useState<PrescribedMedication[]>('prescribedMedications', () => [])
  const pdfBytes = useState<Uint8Array | null>('pdfBytes', () => null)
  const modifiedPdfUrl = useState<string | null>('modifiedPdfUrl', () => null)

  const addMedication = async (medication: Medication) => {
    const existingMedication = prescribedMedications.value.find(med => med.id === medication.id)
    if (existingMedication) {
      return
    }
    
    prescribedMedications.value.push({
      id: medication.id,
      name: medication.name,
      dosage: medication.dosage,
      description: medication.description,
      addedAt: new Date()
    })
    await updatePDF()
  }

  const removeMedication = async (medicationId: string) => {
    const index = prescribedMedications.value.findIndex(med => med.id === medicationId)
    if (index > -1) {
      prescribedMedications.value.splice(index, 1)
      await updatePDF()
    }
  }

  const clearPrescription = async () => {
    prescribedMedications.value = []
    await updatePDF()
  }

  const updatePDF = async (): Promise<void> => {
    try {
      // Load the original PDF
      const response = await fetch('/assets/receituario.pdf')
      const originalPdfBytes = await response.arrayBuffer()
      // Create a new PDF document from the original
      const pdfDoc = await PDFDocument.load(originalPdfBytes)
      
      // Register fontkit to support custom fonts
      pdfDoc.registerFontkit(fontkit)
      
      const pages = pdfDoc.getPages()
      const firstPage = pages[0]
      if (!firstPage) {
        throw new Error('PDF has no pages')
      }
      
      // Load Questrial font from Google Fonts
      const fontResponse = await fetch('https://fonts.gstatic.com/s/questrial/v18/QdVUSTchPBm7nuUeVf70viFluW44JQ.woff2')
      const fontBytes = await fontResponse.arrayBuffer()
      const font = await pdfDoc.embedFont(fontBytes)
      // Initial position to write medications (adjust according to PDF layout)
      const initialYPosition = 650 // Initial height (adjust as needed)
      const leftColumnX = 50   // Left margin first column
      const rightColumnX = 350 // X position second column
      const lineHeight = 20  // Line spacing
      const maxMedicationsPerColumn = 9
      
      // Add each prescribed medication
      prescribedMedications.value.forEach((medication, index) => {
        const columnIndex = Math.floor(index / maxMedicationsPerColumn)
        const positionInColumn = index % maxMedicationsPerColumn
        
        const xPosition = columnIndex === 0 ? leftColumnX : rightColumnX
        const yPosition = initialYPosition - (positionInColumn * lineHeight * 2)
        
        const text = `${index + 1}. ${medication.name}`
        const dosageText = `   ${medication.dosage}`
        
        // Medication name
        firstPage.drawText(text, {
          x: xPosition,
          y: yPosition,
          size: 12,
          font: font,
          color: rgb(0, 0, 0)
        })
        // Dosage
        firstPage.drawText(dosageText, {
          x: xPosition,
          y: yPosition - 15,
          size: 10,
          font: font,
          color: rgb(0.2, 0.2, 0.2)
        })
      })
      
      // Serialize the modified PDF
      const modifiedPdfBytes = await pdfDoc.save()
      pdfBytes.value = modifiedPdfBytes
      
      // Create blob URL for display
      const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' })
      
      // Revoke previous URL if it exists
      if (modifiedPdfUrl.value) {
        URL.revokeObjectURL(modifiedPdfUrl.value)
      }
      
      modifiedPdfUrl.value = URL.createObjectURL(blob)
      
    } catch (error) {
      throw new Error(`Error modifying PDF: ${error}`)
    }
  }

  const downloadPDF = (): void => {
    if (pdfBytes.value) {
      const blob = new Blob([pdfBytes.value], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'receituario-preenchido.pdf'
      link.click()
      URL.revokeObjectURL(url)
    }
  }

  // Initialize with original PDF
  onMounted(async () => {
    await updatePDF()
  })

  // Cleanup URLs when component is unmounted
  onUnmounted(() => {
    if (modifiedPdfUrl.value) {
      URL.revokeObjectURL(modifiedPdfUrl.value)
    }
  })

  return {
    prescribedMedications: readonly(prescribedMedications),
    modifiedPdfUrl: readonly(modifiedPdfUrl),
    addMedication,
    removeMedication,
    clearPrescription,
    downloadPDF
  }
}