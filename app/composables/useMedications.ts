export interface Medication {
  id: string
  name: string
  dosage: string
  description: string
}

export interface MedicationCategory {
  id: string
  name: string
  icon: string
  medications: Medication[]
}

export const useMedications = () => {
  const medications = useState<MedicationCategory[]>('medications', () => [
    {
      id: 'antibioticos',
      name: 'Antibióticos',
      icon: 'material-symbols:medication',
      medications: [
        {
          id: 'amoxicilina',
          name: 'Amoxicilina 500 mg',
          dosage: '1 cápsula a cada 8h, por 7 dias',
          description: 'Antibiótico para infecções bacterianas'
        },
        {
          id: 'amoxicilina-clavulanato',
          name: 'Amoxicilina + Clavulanato 875/125 mg',
          dosage: '1 comprimido a cada 12h, por 7 dias',
          description: 'Antibiótico de amplo espectro'
        },
        {
          id: 'clindamicina',
          name: 'Clindamicina 300 mg',
          dosage: '1 cápsula a cada 8h, por 7 dias',
          description: 'Quando alérgico a penicilina'
        },
        {
          id: 'azitromicina',
          name: 'Azitromicina 500 mg',
          dosage: '1 comprimido 1x ao dia, por 3 dias',
          description: 'Antibiótico de amplo espectro'
        }
      ]
    },
    {
      id: 'analgesicos',
      name: 'Analgésicos',
      icon: 'material-symbols:healing',
      medications: [
        {
          id: 'dipirona',
          name: 'Dipirona sódica',
          dosage: '1g VO, a cada 6h, se dor',
          description: 'Analgésico e antitérmico'
        },
        {
          id: 'paracetamol',
          name: 'Paracetamol',
          dosage: '500mg VO, a cada 6h por 5 dias',
          description: 'Analgésico e antitérmico'
        },
        {
          id: 'paracetamol-codeina',
          name: 'Paracetamol + Codeína',
          dosage: 'Paracetamol 500 mg + Codeína 30 mg, a cada 6h por 3 dias',
          description: 'Analgésico com opioide'
        }
      ]
    },
    {
      id: 'anti-inflamatorios',
      name: 'Anti-inflamatórios',
      icon: 'material-symbols:water-drop',
      medications: [
        {
          id: 'ibuprofeno',
          name: 'Ibuprofeno',
          dosage: '600 mg VO, a cada 8h, por 3 dias',
          description: 'Anti-inflamatório não esteroidal'
        },
        {
          id: 'naproxeno',
          name: 'Naproxeno sódico',
          dosage: '500 mg VO, a cada 12h, por 3 dias',
          description: 'Anti-inflamatório de longa duração'
        },
        {
          id: 'diclofenaco',
          name: 'Diclofenaco potássico',
          dosage: '50 mg VO, a cada 8h, por 3 dias',
          description: 'Anti-inflamatório potente'
        },
        {
          id: 'maxulid',
          name: 'Maxulid® 500 mg',
          dosage: '1 comprimido via oral, 1 vez ao dia, após refeição, por 3 dias',
          description: 'Anti-inflamatório'
        }
      ]
    },
    {
      id: 'corticoides',
      name: 'Corticoides',
      icon: 'material-symbols:medical-services',
      medications: [
        {
          id: 'dexametasona',
          name: 'Dexametasona',
          dosage: '4 mg VO, a cada 12h, por 3 dias',
          description: 'Corticosteroide potente'
        },
        {
          id: 'prednisona',
          name: 'Prednisona',
          dosage: '20 mg VO, 1x ao dia, por 3 dias',
          description: 'Corticosteroide oral'
        }
      ]
    },
    {
      id: 'ansioliticos',
      name: 'Ansiolíticos',
      icon: 'material-symbols:self-care',
      medications: [
        {
          id: 'diazepam',
          name: 'Diazepam 5 mg',
          dosage: '1 comprimido VO, 1 hora antes do procedimento',
          description: 'Não dirigir nem operar máquinas após o uso. Evitar álcool.'
        },
        {
          id: 'lorazepam',
          name: 'Lorazepam 1 mg',
          dosage: '1 comprimido VO, 1 hora antes do procedimento',
          description: 'Dose pode ser ajustada até 2 mg. Monitorar sonolência.'
        },
        {
          id: 'alprazolam',
          name: 'Alprazolam 0,25 mg',
          dosage: '1 comprimido VO, 1 hora antes do procedimento',
          description: 'Ansiolítico pré-operatório'
        },
        {
          id: 'midazolam',
          name: 'Midazolam 7,5 mg',
          dosage: '1 comprimido VO, 30–60 minutos antes do procedimento',
          description: 'Sedativo pré-operatório'
        }
      ]
    },
    {
      id: 'antisepticos',
      name: 'Antissépticos',
      icon: 'material-symbols:clean-hands',
      medications: [
        {
          id: 'periogard',
          name: 'PerioGard® (Clorexidina 0,12%)',
          dosage: '15 ml (1 tampa) 2x ao dia após escovação por 7 dias',
          description: 'Manter 30s-1min na boca. Uso máximo 7 dias consecutivos.'
        }
      ]
    },
    {
      id: 'parestesia',
      name: 'Parestesia',
      icon: 'material-symbols:touch-app',
      medications: [
        {
          id: 'etna',
          name: 'ETNA® (Citidina + Uridina + B12)',
          dosage: '2 cápsulas VO, 3 vezes ao dia, por 30 a 60 dias',
          description: 'Regeneração nervosa'
        },
        {
          id: 'tiamina',
          name: 'Vitamina B1 (Tiamina) 100 mg',
          dosage: '1 comprimido VO, 1x ao dia, por 1–3 meses',
          description: 'Regeneração nervosa'
        },
        {
          id: 'piridoxina',
          name: 'Vitamina B6 (Piridoxina) 50 mg',
          dosage: '1 comprimido VO, 1x ao dia, por 1–3 meses',
          description: 'Regeneração nervosa'
        },
        {
          id: 'cianocobalamina',
          name: 'Vitamina B12 (Cianocobalamina) 1000 mcg',
          dosage: '1 injeção IM, 1x por semana, por 4–6 semanas',
          description: 'Regeneração nervosa'
        }
      ]
    }
  ])

  return {
    medications,
  }
}