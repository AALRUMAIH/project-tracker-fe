<template>
  <div class="bg-white rounded-lg shadow-sm border">
    <div class="px-6 py-4 border-b border-gray-200">
      <h3 class="text-lg font-medium text-gray-900">Task Summary</h3>
    </div>

    <div class="p-6">
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-gray-600">To Do</span>
          <span class="text-sm font-semibold text-gray-900">
            {{ dashboardStore.stats.tasksToDo }}
          </span>
        </div>

        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-gray-600">In Progress</span>
          <span class="text-sm font-semibold text-blue-600">
            {{ dashboardStore.stats.tasksProgress }}
          </span>
        </div>

        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-gray-600">Under Review</span>
          <span class="text-sm font-semibold text-yellow-600">
            {{ dashboardStore.stats.tasksReviewed }}
          </span>
        </div>

        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-gray-600">Completed</span>
          <span class="text-sm font-semibold text-green-600">
            {{ dashboardStore.stats.tasksCompleted }}
          </span>
        </div>
      </div>

      <div class="mt-6 pt-4 border-t border-gray-200">
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-gray-900">Progress</span>
          <span class="text-sm font-semibold text-gray-900">
            {{ progressPercentage }}%
          </span>
        </div>
        <div class="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div
            class="bg-blue-600 h-2 rounded-full transition-all duration-300"
            :style="{ width: `${progressPercentage}%` }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useDashboardStore } from '@/store/modules/dashboard'

const dashboardStore = useDashboardStore()
onMounted(() => {
  dashboardStore.fetchDashboardData()
})

const progressPercentage = computed(() => {
  const total = dashboardStore.stats.totalTasks
  const complete = dashboardStore.stats.tasksCompleted
  if (!total) return 0
  return Math.round((complete / total) * 100)
})
</script>
