<template>
  <div class="min-h-screen bg-gradient-to-tr from-blue-50 to-white p-6 relative overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px); background-size: 50px 50px;"></div>
      <div class="absolute top-20 left-10 w-32 h-20 bg-blue-100 opacity-20 rounded-lg transform rotate-12 animate-pulse"></div>
      <div class="absolute top-40 right-20 w-24 h-16 bg-blue-200 opacity-15 rounded-lg transform -rotate-6"></div>
      <div class="absolute bottom-40 left-1/4 w-28 h-18 bg-blue-100 opacity-25 rounded-lg transform rotate-3"></div>
      <div class="absolute bottom-20 right-1/3 w-20 h-24 bg-blue-200 opacity-20 rounded-lg transform -rotate-12"></div>
      <div class="absolute top-60 left-1/3 w-36 h-14 bg-blue-50 opacity-30 rounded-lg transform rotate-45"></div>
      <div class="absolute top-80 right-10 w-16 h-28 bg-blue-100 opacity-18 rounded-lg transform -rotate-24"></div>
      <div class="absolute bottom-60 left-20 w-22 h-32 bg-blue-200 opacity-22 rounded-lg transform rotate-18"></div>
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-10 transform rotate-12"></div>
      <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-10 transform -rotate-12"></div>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow mr-4 border border-indigo-300">
              <svg class="w-7 h-7 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-bold text-gray-800">Users Management</h2>
              <p class="text-gray-600 mt-1">Manage user roles and status efficiently</p>
            </div>
          </div>

          <!-- Add User -->
          <button
            @click="showAddUserModal = true"
            class="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium py-1 px-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              New User
            </div>
          </button>
        </div>
        <div class="mt-4 h-1 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full opacity-60"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
            </div>
            <div>
              <p class="text-2xl font-bold text-gray-900">{{ users.length }}</p>
              <p class="text-sm text-gray-600">Total Users</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <p class="text-2xl font-bold text-gray-900">{{ activeUsers }}</p>
              <p class="text-sm text-gray-600">Active Users</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.5-1.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </div>
            <div>
              <p class="text-2xl font-bold text-gray-900">{{ adminUsers }}</p>
              <p class="text-sm text-gray-600">Admins</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div class="space-y-0">
          <div 
            v-for="(user, index) in users" 
            :key="user.id"
            class="p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-all duration-200 group"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="relative">
                  <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                    {{ getInitials(user.firstName, user.lastName) }}
                  </div>
                  <div class="absolute -top-1 -right-1 w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {{ index + 1 }}
                  </div>
                </div>

                <div>
                  <h3 class="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {{ user.firstName }} {{ user.lastName }}
                  </h3>
                  <p class="text-gray-600 text-sm">{{ user.email }}</p>
                  
                  <div class="flex items-center space-x-2 mt-1">
                    <span 
                      class="px-2 py-0.5 text-xs font-medium rounded-full"
                      :class="{
                        'bg-green-100 text-green-800': user.active,
                        'bg-red-100 text-red-800': !user.active
                      }"
                    >
                      {{ user.active ? 'Active' : 'Inactive' }}
                    </span>
                    <span 
                      class="px-2 py-0.5 text-xs font-medium rounded-full"
                      :class="{
                        'bg-purple-100 text-purple-800': user.newRole === 'ADMIN',
                        'bg-blue-100 text-blue-800': user.newRole === 'TEAM_MEMBER',
                        'bg-orange-100 text-orange-800': user.newRole === 'PROJECT_MANAGER'
                      }"
                    >
                      {{ formatRole(user.newRole) }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <div class="min-w-0">
                  <label class="block text-xs font-medium text-gray-500 mb-1">Role</label>
                  <div class="relative">
                    <select 
                      v-model="user.newRole" 
                      @change="changeRole(user)"
                      class="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors w-36"
                    >
                      <option value="ADMIN">Admin</option>
                      <option value="TEAM_MEMBER">Team Member</option>
                      <option value="PROJECT_MANAGER">Project Manager</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-medium text-gray-500 mb-1">Status</label>
                  <button 
                    @click="toggleStatus(user)"
                    class="font-medium py-1.5 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md text-sm"
                    :class="{
                      'bg-red-100 hover:bg-red-200 text-red-700 border border-red-200': user.active,
                      'bg-green-100 hover:bg-green-200 text-green-700 border border-green-200': !user.active
                    }"
                  >
                    <div class="flex items-center justify-center">
                      <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="user.active" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728"></path>
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {{ user.active ? 'Disable' : 'Enable' }}
                    </div>
                  </button>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="users.length === 0" class="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No Users Found</h3>
        <p class="text-gray-500">No users are currently registered in the system.</p>
      </div>

      <div class="text-center mt-8 pb-4">
        <p class="text-xs text-blue-400 italic">
          "Great teams are built with great people! 👥"
        </p>
      </div>
    </div>

    <!-- Add User Modal -->
    <div v-if="showAddUserModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        @click="showAddUserModal = false"
        class="bg-white/50 backdrop-blur-sm fixed inset-0 z-10"
      ></div>

      <div class="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 z-10">
        <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center mr-3 shadow-md">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Add New User</h3>
          </div>
          <button
            @click="showAddUserModal = false"
            class="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <form @submit.prevent="addNewUser" class="space-y-5">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
            <input
              v-model="newUser.firstName"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-gray-50 hover:bg-white"
              placeholder="Enter first name"
            >
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
            <input
              v-model="newUser.lastName"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-gray-50 hover:bg-white"
              placeholder="Enter last name"
            >
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              v-model="newUser.email"
              type="email"
              required
              :aria-invalid="!!errors.email"
              :aria-describedby="errors.email ? 'email-error' : null"
              @input="errors.email = ''"
              class="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-colors bg-gray-50 hover:bg-white border"
              :class="errors.email ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-gray-300 focus:ring-green-500 focus:border-green-500'"
              placeholder="Enter email address"
            >
            <p v-if="errors.email" id="email-error" class="mt-2 text-sm text-red-600">
              {{ errors.email }}
            </p>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input
              v-model="newUser.password"
              type="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-gray-50 hover:bg-white"
              placeholder="Enter password"
            >
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Role</label>
            <select
              v-model="newUser.role"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-gray-50 hover:bg-white"
            >
              <option value="TEAM_MEMBER">Team Member</option>
              <option value="PROJECT_MANAGER">Project Manager</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <div class="flex space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              @click="showAddUserModal = false"
              class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all duration-200 border border-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-sm py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Popup -->
    <div v-if="showPopup" class="fixed top-4 right-4 z-50">
      <div 
        class="px-3 py-2 rounded-lg shadow-lg text-white"
        :class="{ 'bg-green-500': popupType === 'success', 'bg-red-500': popupType === 'error' }"
      >
        {{ popupMessage }}
        <button @click="showPopup = false" class="ml-3 text-xl">×</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { adminService } from '../../api/adminService'
import { addUser } from '../../api/User'

const users = ref([])

const showAddUserModal = ref(false)
const newUser = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: 'TEAM_MEMBER'
})

const showPopup = ref(false)
const popupMessage = ref('')
const popupType = ref('success')

const errors = ref({ email: '' })
const resetErrors = () => {
  errors.value = { email: '' }
}

const activeUsers = computed(() => users.value.filter(u => u.active).length)
const adminUsers = computed(() => users.value.filter(u => u.newRole === 'ADMIN').length)

onMounted(async () => {
  const res = await adminService.getAllUsers()
  users.value = res.data.map(user => ({
    ...user,
    active: user.active,
    newRole: user.role
  }))
})

const addNewUser = async () => {
  resetErrors()

  try {
    const res = await addUser(newUser.value)

    users.value.push({
      ...res.data,
      active: true,
      newRole: newUser.value.role
    })

    newUser.value = { firstName: '', lastName: '', email: '', password: '', role: 'TEAM_MEMBER' }
    showAddUserModal.value = false

    popupMessage.value = 'User added successfully!'
    popupType.value = 'success'
    showPopup.value = true
    setTimeout(() => (showPopup.value = false), 3000)

  } catch (error) {
    const status = error?.response?.status
    const data = error?.response?.data
    const apiMsg = (data?.message || data?.error || '').toString()

    if (status === 409 && (apiMsg.toLowerCase().includes('email') || data?.error === 'EMAIL_TAKEN')) {
      errors.value.email = 'Email is already registered'
      popupMessage.value = 'Email is already registered'
      popupType.value = 'error'
    } else if (status === 400 && data?.errors) {
      popupMessage.value = 'Please fix the highlighted errors'
      popupType.value = 'error'
    } else {
      popupMessage.value = 'Failed to add user'
      popupType.value = 'error'
    }

    showPopup.value = true
    setTimeout(() => (showPopup.value = false), 3000)
  }
}

const changeRole = async (user) => {
  await adminService.changeUserRole(user.id, user.newRole)
  popupMessage.value = 'Role updated!'
  popupType.value = 'success'
  showPopup.value = true
  setTimeout(() => { showPopup.value = false }, 3000)
}

const toggleStatus = async (user) => {
  await adminService.updateUserStatus(user.id, !user.active)
  user.active = !user.active
}

const getInitials = (firstName, lastName) => {
  if (!firstName && !lastName) return 'U'
  const first = firstName ? firstName.charAt(0) : ''
  const last = lastName ? lastName.charAt(0) : ''
  return (first + last).toUpperCase()
}

const formatRole = (role) => {
  switch (role) {
    case 'ADMIN': return 'Admin'
    case 'TEAM_MEMBER': return 'Team Member'
    case 'PROJECT_MANAGER': return 'Project Manager'
    default: return role
  }
}
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
* { transition: all 0.2s ease-in-out; }
</style>
