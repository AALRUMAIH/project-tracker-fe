<template>
  <div class="min-h-screen bg-gradient-to-tr from-blue-50 to-white flex items-center justify-center p-4 bg-gray-100">
    <div class="absolute top-10 left-10 w-50 h-50 bg-blue-200 opacity-30 rounded-full z-0 animate-pulse"></div>
    <div class="absolute top-10 left-35 w-50 h-50 bg-blue-200 opacity-30 rounded-full z-0 animate-pulse"></div>
    <div class="absolute top-35 left-20 w-50 h-50 bg-blue-200 opacity-30 rounded-full z-0 animate-pulse"></div>

    <div class="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg relative text-center">
      <img src="/src/assets/تصميم بدون عنوان.png" alt=""class="mr-auto ml-0 mb-4 w-35 h-35 rounded-full">
      
      <div class="flex justify-center mb-6">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
      </div>

      <h1 class="text-2xl font-semibold text-gray-800 mb-4">Successfully Signed Out</h1>
     

      <button
        @click="goToLogin"
        class="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
        </svg>
        <span>Go to Login</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

function goToLogin() {
  auth.logout()             
  router.replace('/login')    
}

onMounted(() => {
  auth.logout()               
  router.replace('/login')    
})
</script>
