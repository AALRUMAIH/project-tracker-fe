<template>
  <AppLayout>
    <div class="p-6">
      <div class="max-w-2xl mx-auto">
        <div class="bg-white rounded-lg shadow-sm border">
          <div class="px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-medium text-gray-900">Profile Information</h3>
          </div>
          
          <div class="p-6 space-y-6">
            <div class="flex items-center space-x-6">
              <div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-medium">
                {{ authStore.user?.name?.charAt(0) }}
              </div>
              <div>
                <h4 class="text-xl font-medium text-gray-900">{{ authStore.user?.name }}</h4>
                <p class="text-gray-600">{{ authStore.user?.role }}</p>
              </div>
            </div>

            <form @submit.prevent="updateProfile" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <input
                  :value="authStore.user?.role"
                  type="text"
                  disabled
                  class="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
                />
              </div>

              <div class="pt-4">
                <button
                  type="submit"
                  class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from '@/components/common/AppLayout.vue'
import { useAuthStore } from '@/store/modules/auth'
import { reactive, onMounted } from 'vue'

export default {
  name: 'Profile',
  components: {
    AppLayout
  },
  setup() {
    const authStore = useAuthStore()
    
    const form = reactive({
      name: '',
      email: ''
    })

    const updateProfile = () => {
      // Implementation for updating profile
      console.log('Update profile:', form)
    }

    onMounted(() => {
      if (authStore.user) {
        form.name = authStore.user.name
        form.email = authStore.user.email
      }
    })

    return {
      authStore,
      form,
      updateProfile
    }
  }
}
</script>
