<template>
  <div class="min-h-screen bg-gradient-to-tr from-blue-50 to-white p-4 relative overflow-hidden">
    <!-- Background decorative patterns -->
    <div class="absolute inset-0 z-0">
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px); background-size: 50px 50px;"></div>
      
      <!-- Floating rectangles -->
      <div class="absolute top-20 left-10 w-32 h-20 bg-blue-100 opacity-20 rounded-lg transform rotate-12 animate-pulse"></div>
      <div class="absolute top-40 right-20 w-24 h-16 bg-blue-200 opacity-15 rounded-lg transform -rotate-6"></div>
      <div class="absolute bottom-40 left-1/4 w-28 h-18 bg-blue-100 opacity-25 rounded-lg transform rotate-3"></div>
      <div class="absolute bottom-20 right-1/3 w-20 h-24 bg-blue-200 opacity-20 rounded-lg transform -rotate-12"></div>
      
      <!-- Additional floating rectangles -->
      <div class="absolute top-60 left-1/3 w-36 h-14 bg-blue-50 opacity-30 rounded-lg transform rotate-45"></div>
      <div class="absolute top-80 right-10 w-16 h-28 bg-blue-100 opacity-18 rounded-lg transform -rotate-24"></div>
      <div class="absolute bottom-60 left-20 w-22 h-32 bg-blue-200 opacity-22 rounded-lg transform rotate-18"></div>
      <div class="absolute top-32 left-2/3 w-26 h-20 bg-blue-150 opacity-16 rounded-lg transform -rotate-8"></div>
      <div class="absolute bottom-32 right-1/4 w-30 h-22 bg-blue-100 opacity-24 rounded-lg transform rotate-30"></div>
      <div class="absolute top-96 left-1/2 w-18 h-26 bg-blue-200 opacity-19 rounded-lg transform -rotate-15"></div>
      
      <!-- Diagonal lines -->
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-10 transform rotate-12"></div>
      <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-10 transform -rotate-12"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header Section -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
            <p class="text-gray-600">Welcome back! Here's what's happening with your projects.</p>
          </div>
        </div>
      </div>

      <!-- Dashboard Stats Section -->
      <div class="mb-8">
        <DashboardStats />
      </div>

      <!-- Task Summary Section -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mt-8">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow mr-3 border border-blue-300">
            <!-- SVG Icon with better size and color -->
            <svg class="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-gray-800">Task Summary</h2>
        </div>
        
        <TaskSummary />
      </div>
      
      <!-- Motivational Footer -->
      <div class="text-center mt-8 pb-4">
        <p class="text-xs text-blue-400 italic">
          "Success is the sum of small efforts repeated day in and day out! 📊"
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppLayout from '../components/common/AppLayout.vue'
import DashboardStats from '../components/dashboard/DashboardStats.vue'
import TaskSummary from '../components/dashboard/TaskSummary.vue'
import { onMounted } from 'vue'
import { useDashboardStore } from '../store/modules/dashboard'

const dashboardStore = useDashboardStore()
onMounted(() => {
  dashboardStore.fetchDashboardData()
})
</script>

<style scoped>
/* Custom animations */
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

/* Custom gradient colors for floating rectangles */
.bg-blue-150 {
  background-color: rgb(196, 219, 253);
}

/* Smooth transitions for all interactive elements */
* {
  transition: all 0.2s ease-in-out;
}

/* Enhanced hover effects */
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
