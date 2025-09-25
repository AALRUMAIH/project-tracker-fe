<template>
  <div class="w-64 bg-white shadow-lg relative overflow-hidden border-r border-gray-200 h-screen flex flex-col">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 opacity-[0.01]" style="background-image: linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px); background-size: 40px 40px;"></div>
    </div>

    <div class="p-6 relative z-10 border-b border-gray-100">
      <h1 class="text-xl font-bold text-gray-800">Project Tracker</h1>
      <p class="text-sm text-gray-500 mt-1">{{ authStore.user?.role }}</p>
    </div>
    
    <nav class="mt-4 relative z-10 px-3 flex-1">
      <router-link
        :to="{ name: 'AdminDashboard' }"
        class="flex items-center px-3 py-2.5 mb-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group"
        :class="{ 
          'bg-blue-50 text-blue-600 shadow-sm': $route.name === 'AdminDashboard' 
        }"
      >
        <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
          <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        </div>
        <span class="font-medium text-sm">Dashboard</span>
      </router-link>

      <router-link
        :to="{ name: 'AdminProjects' }"
        class="flex items-center px-3 py-2.5 mb-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200 group"
        :class="{ 
          'bg-green-50 text-green-600 shadow-sm': $route.name === 'AdminProjects' 
        }"
      >
        <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
        <span class="font-medium text-sm">Projects</span>
      </router-link>

      <router-link
        :to="{ name: 'AdminUsers' }"
        class="flex items-center px-3 py-2.5 mb-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-200 group"
        :class="{ 
          'bg-indigo-50 text-indigo-600 shadow-sm': $route.name === 'AdminUsers' 
        }"
      >
        <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
          <svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
          </svg>
        </div>
        <span class="font-medium text-sm">Users</span>
      </router-link>
    </nav>

    <div class="p-3 relative z-10 border-t border-gray-100">
      <button
        @click="logout"
        class="w-full flex items-center px-3 py-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
      >
        <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors">
          <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
        </div>
        <span class="font-medium text-sm">Logout</span>
      </button>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

export default {
  name: 'AppSidebar',
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()

    const logout = async () => {
      await authStore.logout()
      router.push('/login')
    }

    return {
      authStore,
      logout
    }
  }
}
</script>

<style scoped>
* {
  transition: all 0.2s ease-in-out;
}
</style>
