<script setup>
const { medications } = useMedications()
const { addMedication: addToPrescription, prescribedMedications, removeMedication: removeFromPrescription } = usePrescription()

const activeAccordion = ref('0')

const accordionItems = computed(() => 
  medications.value.map((category, index) => ({
    value: index.toString(),
    label: category.name,
    icon: category.icon,
    slot: 'content',
    category
  }))
)

const addMedication = async (medication) => {
  try {
    await addToPrescription(medication)
  } catch (error) {
    console.error('Error adding medication:', error)
  }
}
const removeMedication = async (medicationId) => {
  try {
    await removeFromPrescription(medicationId)
  } catch (error) {
    console.error('Error removing medication:', error)
  }
}
</script>
<template>
  <div class="bg-card rounded-lg shadow-sm border border-neutral-200 p-6 h-full">
    <h2 class="text-xl font-semibold text-default mb-6">Medications by Category</h2>
    
    <div class="space-y-4 max-h-[600px] overflow-y-auto">
      <UAccordion 
        v-model="activeAccordion"
        :items="accordionItems"
        collapsible
        class="w-full"
      >
        <template #content="{ item }">
          <div class="space-y-2 p-2">
            <div 
              v-for="medication in item.category.medications" 
              :key="medication.id"
              class="flex items-center justify-between p-3 bg-surface rounded-lg border border-neutral-200 hover:border-primary-300 transition-colors"
            >
              <div class="flex-1">
                <h4 class="font-medium text-default">{{ medication.name }}</h4>
                <p class="text-sm text-muted mt-1">{{ medication.dosage }}</p>
                <p class="text-xs text-muted mt-1">{{ medication.description }}</p>
              </div>
              
              <UButton 
                v-if="prescribedMedications.find(m => m.id === medication.id)"
                color="primary"
                size="sm"
                class="ml-3"
                @click="removeMedication(medication.id)"
              >
                <UIcon name="material-symbols:remove" class="w-4 h-4" />
                Remover
              </UButton>
              <UButton 
                v-else
                color="primary"
                size="sm"
                class="ml-3"
                @click="addMedication(medication)"
              >
                <UIcon name="material-symbols:add" class="w-4 h-4" />
                Add
              </UButton>
            </div>
          </div>
        </template>
      </UAccordion>
      <div v-if="prescribedMedications.length > 0" class="mt-4 p-4 bg-primary-50 rounded-lg border border-primary-200">
        <h3 class="text-sm font-semibold text-primary-800 mb-2">Prescribed Medications:</h3>
        <div class="space-y-1">
          <div 
            v-for="(medication, index) in prescribedMedications" 
            :key="medication.id"
            class="flex items-center justify-between text-xs"
          >
            <span class="text-primary-700">{{ index + 1 }}. {{ medication.name }}</span>
            <UButton 
              color="red" 
              variant="ghost" 
              size="2xs"
              @click="removeMedication(medication.id)"
            >
              <UIcon name="material-symbols:close" class="w-3 h-3" />
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
