<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="px-6 py-4 flex justify-between items-center">
      <div>
        <h2 class="text-xl font-semibold text-gray-800 capitalize">
          {{ $route.name }}
        </h2>
      </div>
      
      <div class="flex items-center space-x-4">
        <div class="text-sm text-gray-600">
          Welcome, {{ authStore.user?.name }}
        </div>
        
        <div class="relative">
          <button
            @click="showProfileMenu = !showProfileMenu"
            class="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              {{ authStore.user?.name?.charAt(0) }}
            </div>
          </button>
          
          <div
            v-if="showProfileMenu"
            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
          >
            <router-link
              to="/profile"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </router-link>
            <button
              @click="logout"
              class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useAuthStore } from '../../stores/auth'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
  name: 'AppHeader',
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    const showProfileMenu = ref(false)

    const logout = async () => {
      await authStore.logout()
      router.push('/login')
    }

    return {
      authStore,
      showProfileMenu,
      logout
    }
  }
}
</script>
