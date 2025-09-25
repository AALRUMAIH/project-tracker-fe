<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="bg-white p-6 rounded-lg shadow-sm border" v-for="(value, label) in stats" :key="label">
      <p class="text-sm font-medium text-gray-600">{{ formatLabel(label) }}</p>
      <p class="text-2xl font-semibold text-gray-900">{{ value }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { dashboardService } from '../api/dashboardService'

const stats = ref({})

onMounted(async () => {
  const res = await dashboardService.getStats()
  stats.value = res.data
})

const formatLabel = (label) => {
  const map = {
    totalProjects: 'Total Projects',
    tasksCompleted: 'Tasks Completed',
    tasksPending: 'Tasks Pending',
    tasksInProgress: 'Tasks In Progress'
  }
  return map[label] || label
}
</script>
