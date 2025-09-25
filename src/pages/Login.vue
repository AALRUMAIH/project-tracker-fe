<template>
  <div class="min-h-screen bg-gradient-to-tr from-blue-50 to-white flex items-center justify-center p-4 bg-gray-100">
        <div class="absolute top-10 left-10 w-50 h-50 bg-blue-200 opacity-30 rounded-full z-0 animate-pulse "></div>
    <div class="absolute top-10 left-35 w-50 h-50 bg-blue-200 opacity-30 rounded-full z-0 animate-pulse"></div>
    <div class="absolute top-35 left-20 w-50 h-50 bg-blue-200 opacity-30 rounded-full z-0 animate-pulse"></div>

    <div class="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg relative">
      <img src="/src/assets/تصميم بدون عنوان.png" alt=""class="mr-auto ml-0 mb-4 w-35 h-35 rounded-full">
      <div class="flex flex-col items-center mt-6">
        <h1 class="mt-4 text-2xl font-semibold">Welcome</h1>
        <p class="mt-2 text-sm text-gray-500 text-center">
          Please enter your email and password to login
        </p>
      </div>
      <form @submit.prevent="submit" class="mt-6 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Email <span class="text-red-500">*</span>
          </label>
          <input
            v-model="email"
            type="email"
            placeholder="example@gmail.com"
            required
            class="block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Password <span class="text-red-500">*</span>
          </label>
          <input
            v-model="password"
            type="password"
            placeholder="••••••••"
            required
            class="block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          :disabled="loading"
          class="w-full mt-4 py-3 border border-gray-800 rounded-full flex items-center justify-center text-gray-900 hover:bg-blue-100 transition"
        >
          <span>{{ loading ? 'Loading...' : 'Login' }}</span>
        </button>
        <p v-if="error" class="text-red-500 text-center mt-2">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const email    = ref('')
const password = ref('')
const loading  = ref(false)
const error    = ref(null)

const auth   = useAuthStore()
const router = useRouter()

async function submit() {
  loading.value = true
  error.value   = null
  try {
    await auth.login({ email: email.value, password: password.value })
    
    if (auth.role === 'PROJECT_MANAGER') {
      router.push('/pm/dashboard')
    } else if (auth.role === 'TEAM_MEMBER') {
      router.push('/projects')
    } else if (auth.role === 'ADMIN') {
      router.push('/admin/users')
    } else {
      router.push('/projects') // default
    }
  } catch (e) {
    error.value = e.response?.data?.error || 'Login failed'
  } finally {
    loading.value = false
  }
}
</script>
