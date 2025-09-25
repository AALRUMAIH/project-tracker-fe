<template>
  <div class="min-h-screen bg-gradient-to-tr from-blue-50 to-white p-4 relative overflow-hidden">
    <!-- Logout Button - Fixed at top right -->
    <button 
      @click="logout"
      class="fixed top-6 right-6 z-50 px-2 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
      </svg>
      <span>Logout</span>
    </button>

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
      <div class="absolute bottom-80 left-3/4 w-24 h-18 bg-blue-50 opacity-28 rounded-lg transform rotate-6"></div>
      <div class="absolute top-44 right-1/2 w-20 h-30 bg-blue-100 opacity-17 rounded-lg transform -rotate-20"></div>
      
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-10 transform rotate-12"></div>
      <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-10 transform -rotate-12"></div>
    </div>

    <div class="max-w-4xl mx-auto relative z-10 pt-12">
      <div class="fixed top-4 left-4 z-20 group">
        <div class="relative">
   <div class="fixed top-4 left-4 z-20">
      
      <div class="bg-gradient-to-r from-blue-400 to-sky-500 text-white px-4 py-2 rounded-full shadow-lg">
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
          </svg>
          <span class="text-sm font-medium">{{ userEmail }}</span>
        </div>
      </div>
    </div>
          
          <!-- Floating particles effect -->
          <div class="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          <div class="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" style="animation-delay: 0.5s;"></div>
          
          <!-- Tooltip on hover -->
          <div class="absolute top-full left-0 mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Currently logged in
            <div class="absolute -top-1 left-4 w-2 h-2 bg-gray-800 transform rotate-45"></div>
          </div>
        </div>
      </div>

      <!-- Header Card -->     <button 
              @click="$router.back()"
              class="flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Dashboard
            </button>
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
        
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Create New Project</h1>
        <p class="text-gray-600">Fill in the details below to create a new project</p>
      </div>

      <!-- Create Project Form Section -->
      <div class="bg-white rounded-2xl shadow-lg p-6">
        <form @submit.prevent="submitProject" class="space-y-6">
          <!-- Project Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
            <input 
              v-model="form.name" 
              placeholder="Enter project name..." 
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <!-- Project Title -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
            <input 
              v-model="form.projectTitle" 
              placeholder="Enter project title..." 
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <!-- Description -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea 
              v-model="form.description" 
              placeholder="Enter project description..." 
              rows="4"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 resize-none"
              required
            ></textarea>
          </div>

          <!-- Date Range -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input 
                type="date" 
                v-model="form.startProject" 
                 :min="today"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input 
                type="date" 
                v-model="form.endProject" 
                 :min="form.startProject || today" 
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
          </div>

        
          
          <!-- Team Members Block -->
<div class="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
  <label class="block text-sm font-medium text-gray-700">Team Members</label>

  <!-- Select users -->
  <select v-model="selectedUser" @change="addMember" class="w-full border border-gray-300 rounded-lg p-2">
    <option disabled value="">Select a user...</option>
    <option v-for="u in users" :key="u" :value="u">{{ u }}</option>
  </select>

  <!-- Chips for selected members -->
  <div class="flex flex-wrap gap-2 mt-2">
    <span
      v-for="(m, idx) in selectedMembers"
      :key="idx"
      class="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2"
    >
      <span>{{ m }}</span>
      <button type="button" @click="removeMember(idx)" class="ml-1 text-sky-600 hover:text-sky-800">✕</button>
    </span>
  </div>
</div>


      <div class="flex justify-between">

        
        <!-- Success Message -->
        <div v-if="response" class=" p- bg-emerald-50 border border-emerald-200 rounded-lg w-full">
          <div class="flex items-start">
            <svg class="w-5 h-5 text-emerald-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <div class="flex-1">
              <div class="text-emerald-700 font-semibold mb-2">
              Project created successfully : <div class="text-emerald-900 font-bold inline-block tracking-wide text-lg">
  {{ response.projectTitle }}
</div>
            </div>
            <p class="text-emerald-600 text-sm mb-4">
              Your project has been created. You can now add tasks .
            </p>
            
          </div>
        </div>
      </div>
    </div>
    
    <!-- Error Message -->
    <div v-if="error" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
      <div class="flex items-center">
        <svg class="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                      </svg>
                      <span class="text-red-700 font-medium">{{ error }}</span>
                    </div>
                  </div>
                  <div class="flex justify-end pt-4">
                    <button 
                    type="submit" 
                    :disabled="loading"
                    class="px-6 py-3 bg-gradient-to-r from-blue-400 to-sky-500 text-white font-medium rounded-lg hover:from-blue-500 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                    {{ loading ? 'Creating...' : 'Create Project' }}
                  </button>
                </div>
                </form>
              </div>
              
              <!-- Motivational Footer -->
              <div class="text-center mt-8 pb-4">
                <p class="text-xs text-gray-400 italic">
                  "Great projects start with great planning - Create something amazing today! 🚀"
                </p>
              </div>
            </div>
          </div>
        </template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { projectManagerService } from '../api/projectManagerService'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const users = ref([])
const selectedUser = ref('')
const selectedMembers = ref([])


const today = ref('')
const toYMD = (d) => {
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
  return local.toISOString().slice(0, 10)
}
const form = ref({
  name: '',
  projectTitle: '',
  description: '',
  startProject: '',
  endProject: ''
})

const response = ref(null)

const error = ref(null)
const loading = ref(false)


const userEmail = computed(() => {
  if (authStore.token) {
    try {
      const payload = JSON.parse(atob(authStore.token.split('.')[1]))
      return payload.email || payload.sub || 'user@example.com'
    } catch (e) {
      return 'user@example.com'
    }
  }
  return 'user@example.com'
})
const submitProject = async () => {
  loading.value = true
  error.value = null
  response.value = null

  try {
    // 1. إنشاء المشروع
    const res = await projectManagerService.createProject(form.value)
    response.value = res.data

    // 2. بعد الإنشاء، اربط الأعضاء المحددين
    if (selectedMembers.value.length > 0) {
      for (const email of selectedMembers.value) {
        await projectManagerService.assignMember(response.value.id, email, {
          headers: { Authorization: `Bearer ${authStore.token}` }
        })
      }
    }
    setTimeout(() => {
      const id = response.value?.id
      const title = response.value?.projectTitle || ''
      if (id) {
        router.push(`/pm/create-task?projectId=${id}&projectTitle=${encodeURIComponent(title)}`)
      } else {
        router.push('/pm/create-task')
      }
    }, 1000); 


    // 4. Reset form + clear members
    form.value = {
      name: '',
      projectTitle: '',
      description: '',
      startProject: '',
      endProject: ''
    }
    selectedMembers.value = []

  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to create project'
  } finally {
    loading.value = false
  }
}


const proceedToAddTasks = () => {
  if (response.value && response.value.id) {
    router.push(`/pm/create-task?projectId=${response.value.id}`)
  } else {
    router.push('/pm/create-task')
  }
}

onMounted(async () => {
  try {
    const res = await projectManagerService.getAllUsers()
    users.value = res.data

     today.value = toYMD(new Date())
    // أضف نفسك مباشرة
    if (userEmail.value && userEmail.value !== 'Unknown User' && !selectedMembers.value.includes(userEmail.value)) {
      selectedMembers.value.push(userEmail.value)
    }
  } catch (e) {
    error.value = '❌ Failed to load users'
  }
})
const addMember = () => {
  if (selectedUser.value && !selectedMembers.value.includes(selectedUser.value)) {
    selectedMembers.value.push(selectedUser.value)
  }
  selectedUser.value = '' // يفضي القائمة بعد ما تختار
}

// إضافة دالة الحذف
const removeMember = (idx) => {
  selectedMembers.value.splice(idx, 1)
}

// Logout function
function logout() {
  router.push('/logout')
}
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
  background-color: rgb(147, 197, 253);
}

/* Smooth transitions for all interactive elements */
* {
  transition: all 0.2s ease-in-out;
}

/* Custom focus states */
input:focus, textarea:focus, button:focus {
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1);
}

/* Loading state for button */
button:disabled {
  transform: none !important;
}
</style>
