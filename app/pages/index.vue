<template>
  <div class="lg:h-screen flex flex-col overflow-hidden">
    <div class="flex-shrink-0 p-6 pb-0">
      <div class="flex items-center gap-3 mb-2">
        <div class="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center relative">
          <div class="w-6 h-7 bg-white rounded-t-full rounded-b-sm relative">
            <div class="absolute top-2 left-1 w-1 h-1 bg-primary-700 rounded-full"/>
            <div class="absolute top-2 right-1 w-1 h-1 bg-primary-700 rounded-full"/>
          </div>
        </div>
        <h1 class="text-2xl font-bold text-default">Odonto Docs</h1>
      </div>
      <p class="text-muted mt-2">Sistema de receituário odontológico digital</p>
    </div>
    
    <div class="flex flex-col md:flex-row gap-6 p-6 pt-4 h-full min-h-0">
      <div class="w-full md:w-1/2 min-h-0 bg-white">
        <ConfigPanel />
      </div>
      
      <div class="w-full md:w-1/2 min-h-0 bg-white">
        <PDFPreview />
      </div>
    </div>
  </div>
</template>