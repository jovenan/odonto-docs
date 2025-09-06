<script setup>
import VuePdfEmbed from 'vue-pdf-embed'
const { modifiedPdfUrl, downloadPDF, clearPrescription } = usePrescription()
</script>
<template>
  <div class="bg-surface rounded-lg border border-neutral-200 p-6 h-full flex flex-col">
    <div class="flex items-center justify-between mb-4 gap-2">
      <h2 class="text-xl font-semibold ">Preview do Receituário</h2>
      <div class="flex items-center gap-2">
        <UButton v-if="modifiedPdfUrl !== null" color="primary" size="sm" @click="clearPrescription">
          <UIcon name="material-symbols:download" class="w-4 h-4 mr-1" />
          Limpar
        </UButton>
        <UButton v-if="modifiedPdfUrl !== null" color="primary" size="sm" @click="downloadPDF">
          <UIcon name="material-symbols:download" class="w-4 h-4 mr-1" />
          Download
        </UButton>
      </div>
    </div>

    <div>
    </div>
    <div class="flex-1 bg-card rounded border border-neutral-300 overflow-hidden">
      <ClientOnly v-if="modifiedPdfUrl !== null">
        <VuePdfEmbed 
          :key="modifiedPdfUrl"
          :source="modifiedPdfUrl"
          class="h-full"
        >
          Your browser doesn't support PDF viewing.
        </VuePdfEmbed>
      </ClientOnly>
      <div v-else class="flex items-center justify-center h-full text-muted">
        <UIcon name="material-symbols:description" class="w-8 h-8 mr-2" />
        Loading PDF...
      </div>
    </div>
  </div>
</template>

