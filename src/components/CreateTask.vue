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
      
      <!-- Diagonal lines -->
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-10 transform rotate-12"></div>
      <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-10 transform -rotate-12"></div>
    </div>

    <div class="max-w-4xl mx-auto relative z-10 pt-12">
      <!-- User Email Display with Animation -->
      <div class="fixed top-4 left-4 z-20 group">
        <div class="relative">
          <!-- Main email container with gradient background -->
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
          
          <div class="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          <div class="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" style="animation-delay: 0.5s;"></div>
          
          <!-- Tooltip on hover -->
          <div class="absolute top-full left-0 mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Currently logged in
            <div class="absolute -top-1 left-4 w-2 h-2 bg-gray-800 transform rotate-45"></div>
          </div>
        </div>
      </div>

      <div class="flex items-center space-x-3">
          <button 
              @click="$router.back()"
              class="flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Dashboard
            </button> 

      
      </div>

      <!-- Navigation Steps -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-bold text-gray-800">Project Creation Workflow</h2>
          <span class="text-sm text-gray-500">Step 1 of 2</span>
        </div>
        <div class="flex items-center space-x-4">
          <!-- Step 1 - Complete -->
          <div class="flex items-center">
            <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              ✓
            </div>
            <span class="ml-2 text-sm text-green-600 font-medium">Project Created</span>
          </div>
          <div class="flex-1 h-1 bg-green-200 rounded"></div>
          
          <!-- Step 2 - Current -->
          <div class="flex items-center">
            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              2
            </div>
            <span class="ml-2 text-sm text-blue-600 font-medium">Create Tasks</span>
          </div>
          
        
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Create Project Tasks </h1>
        <p class="text-gray-600">Add tasks to organize your project workflow</p>
        <div v-if="selectedProject" class="mt-4 p-3 bg-blue-50 rounded-lg">
          <p class="text-sm text-blue-700">
            <strong>Project : </strong> {{ selectedProject.projectTitle }}
          </p>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-6">
        <form @submit.prevent="submit" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Task Title</label>
            <input 
              v-model="form.title" 
              placeholder="Enter task title..." 
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Task Description</label>
            <textarea 
              v-model="form.description" 
              placeholder="Describe the task details..." 
              rows="4"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 resize-none"
              required
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
            <input 
              type="date" 
              v-model="form.startProject" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Assign To</label>
              <select v-model="selectedAssigneeId" class="w-full p-3 border border-gray-300 rounded-lg">
                <option value="">-- Choose member (or leave empty) --</option>
                <option v-for="m in members" :key="m.id" :value="m.id">
                  {{ m.email }}
                </option>
              </select>
            </div>
            <div class="flex items-center space-x-2">
              <input id="all" type="checkbox" v-model="createForAll" class="h-4 w-4" />
              <label for="all" class="text-sm text-gray-700">Create task for all project members</label>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex justify-between pt-4">
           
            <div class="flex space-x-4">
              <button 
                type="submit" 
                :disabled="loading"
                class="px-6 py-3 bg-gradient-to-r from-blue-400 to-sky-500 text-white font-medium rounded-lg hover:from-blue-500 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {{ loading ? 'Creating...' : 'Create Task' }}
              </button>
        
            </div>
              <button
          @click="goDashboard"
          class="flex items-center px-4 py-2 border border-blue-600 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-300"
        >
        
          Go to Dashboard
        </button>
          </div>
        </form>


        <!-- Success Message -->
        <div v-if="created" class="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-emerald-700 font-medium">
              Task created successfully: {{ created.title }}
            </span>
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
      </div>
      
      <!-- Motivational Footer -->
      <div class="text-center mt-8 pb-4">
        <p class="text-xs text-gray-400 italic">
          "Break down your project into manageable tasks - Success follows structure! 📋✨"
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { projectManagerService } from '../api/projectManagerService'
import { useAuthStore } from '../stores/auth'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
 
const authStore = useAuthStore()

const form = ref({
  title: '',
  description: '',
  projectId: '',
  startProject: ''
})

const created = ref(null)
const error = ref(null)
const loading = ref(false)
const recentProjects = ref([])
const createdTasks = ref([])
const selectedProject = ref(null)
const members = ref([])
const selectedAssigneeId = ref('')
const createForAll = ref(false)

// Compute user email from JWT token

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

// Load recent projects on mount
onMounted(async () => {
  try {
 

    // إذا جا projectId أو projectTitle من CreateProject فعيّن الاختيار تلقائياً
    const qId = route.query.projectId
    const qTitle = route.query.projectTitle
    if (qId) {
      form.value.projectId = String(qId)
      if (qTitle) {
        selectedProject.value = { id: qId, projectTitle: String(qTitle) }
      } else {
        // optional: حاول جلب التفاصيل من السيرفر إذا تحتاج العنوان من الـ backend
        try {
          const res = await projectManagerService.getProjectDetails(qId)
          selectedProject.value = res.data
        } catch (e) {
          // fallback: عرض Project #id
          selectedProject.value = { id: qId, projectTitle: `Project #${qId}` }
        }
      }
    }
  } catch (err) {
    console.error('Failed to load projects:', err)
  }
})

// Load members when projectId present
onMounted(async () => {
  try {
    const qId = route.query.projectId
    // existing project title handling...
    if (qId) {
      form.value.projectId = String(qId)
      // fetch project members from backend
      try {
        const memRes = await projectManagerService.getProjectMembers(qId)
        members.value = memRes.data || []
      } catch (e) {
        console.warn('Failed to fetch project members', e)
        members.value = []
      }
    }
  } catch (err) {
    console.error('Failed to load projects:', err)
  }
})

const submit = async () => {
  loading.value = true
  error.value = null
  created.value = null

  try {
    if (createForAll.value) {
      // create one task per member
      for (const m of members.value) {
        const payload = {
          ...form.value,
          projectId: Number(form.value.projectId),
          assignedToId: m.id // backend CreateTaskRequest accepts assignedToId
        }
        const r = await projectManagerService.createTask(payload)
        createdTasks.value.push(r.data)
      }
      created.value = { title: `${form.value.title} (created for ${members.value.length} members)` }
    } else {
      // single task (optionally assigned)
      const payload = {
        ...form.value,
        projectId: Number(form.value.projectId)
      }
      if (selectedAssigneeId.value) payload.assignedToId = Number(selectedAssigneeId.value)
      const res = await projectManagerService.createTask(payload)
      created.value = res.data
      createdTasks.value.push(res.data)
    }

    // keep projectId but reset other form fields
    form.value.title = ''
    form.value.description = ''
    form.value.startProject = ''
    selectedAssigneeId.value = ''
    createForAll.value = false

  } catch (err) {
    error.value = err.response?.data?.message || err.message || 'Failed to create task'
  } finally {
    loading.value = false
  }
}

const skipTasks = () => {
  // Navigate to member assignment
  router.push('/assign-members')
}

const proceedToAssignment = () => {
  // Navigate to member assignment with project context
  const projectId = form.value.projectId || (selectedProject.value?.id)
  if (projectId) {
    router.push(`/pm/assign-member?projectId=${projectId}`)
  } else {
    router.push('/pm/assign-member')
  }
}

// Logout function
function logout() {
  router.push('/logout')
}

// direct navigation to PM dashboard
function goDashboard() {
  router.push('/pm/dashboard')
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
.bg-purple-150 {
  background-color: rgb(196, 181, 253);
}

/* Enhanced button hover effects */
button:hover {
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

/* Smooth transitions for all interactive elements */
* {
  transition: all 0.2s ease-in-out;
}

/* Custom focus states */
input:focus, textarea:focus, select:focus, button:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Loading state for button */
button:disabled {
  transform: none !important;
  box-shadow: none !important;
}

/* Enhanced task cards */
.space-y-3 > div {
  transition: all 0.3s ease;
}

.space-y-3 > div:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
}
</style>
