<script setup>
const { modifiedPdfUrl } = usePrescription()
</script>
<template>
  <div class="bg-surface rounded-lg border border-neutral-200 p-6 h-full flex flex-col">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-semibold text-default">Preview do Receituário</h2>
    </div>

    <div class="flex-1 bg-card rounded border border-neutral-300 overflow-hidden">
      <iframe 
        v-if="modifiedPdfUrl"
        :key="modifiedPdfUrl"
        :src="modifiedPdfUrl"
        class="w-full h-full min-h-[500px]"
        frameborder="0"
      >
        Your browser doesn't support PDF viewing.
      </iframe>
      <div v-else class="flex items-center justify-center h-full text-muted">
        <UIcon name="material-symbols:description" class="w-8 h-8 mr-2" />
        Loading PDF...
      </div>
    </div>
  </div>
</template>

