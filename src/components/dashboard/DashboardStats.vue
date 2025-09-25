<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div class="flex items-center">
        <div class="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow mr-4 border border-blue-300">
          <svg class="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-600 mb-1">Total Projects</p>
          <p class="text-2xl font-bold text-gray-900">
            {{ dashboardStore.stats.totalProjects }}
          </p>
        </div>
      </div>
      <div class="mt-4 h-1 bg-gradient-to-r from-blue-400 to-sky-500 rounded-full opacity-60"></div>
    </div>

    <div class="bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div class="flex items-center">
        <div class="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow mr-4 border border-green-300" style="animation-delay: 0.5s;">
          <svg class="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-600 mb-1">Completed Projects</p>
          <p class="text-2xl font-bold text-gray-900">
            {{ dashboardStore.stats.projectCompleted }}
          </p>
        </div>
      </div>
      <div class="mt-4 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-60"></div>
    </div>

    <div class="bg-white rounded-2xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div class="flex items-center">
        <div class="w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow mr-4 border border-orange-300" style="animation-delay: 1s;">
          <svg class="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-600 mb-1">Projects in Progress</p>
          <p class="text-2xl font-bold text-gray-900">
            {{ dashboardStore.stats.projectInProgress }}
          </p>
        </div>
      </div>
      <div class="mt-4 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-60"></div>
    </div>

    <div class="bg-white rounded-2xl shadow-lg p-6 border border-indigo-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div class="flex items-center">
        <div class="w-12 h-12 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow mr-4 border border-indigo-300" style="animation-delay: 1.5s;">
          <svg class="w-7 h-7 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-600 mb-1">New Projects</p>
          <p class="text-2xl font-bold text-gray-900">
            {{ dashboardStore.stats.newProject }}
          </p>
        </div>
      </div>
      <div class="mt-4 h-1 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full opacity-60"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDashboardStore } from '@/store/modules/dashboard'

const dashboardStore = useDashboardStore()

onMounted(() => {
  dashboardStore.fetchDashboardData()
})
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

.hover\:-translate-y-1:hover {
  transform: translateY(-4px);
}

* {
  transition: all 0.2s ease-in-out;
}
</style>
