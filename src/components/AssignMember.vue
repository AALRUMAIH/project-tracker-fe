<template>
  <div class="min-h-screen bg-gradient-to-tr from-blue-50 to-white p-4 relative overflow-hidden">
    <button 
      @click="logout"
      class="fixed top-6 right-6 z-50 px-2 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
      </svg>
      <span>Logout</span>
    </button>

    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px); background-size: 50px 50px;"></div>
      
      <div class="absolute top-20 left-10 w-32 h-20 bg-green-100 opacity-20 rounded-lg transform rotate-12 animate-pulse"></div>
      <div class="absolute top-40 right-20 w-24 h-16 bg-green-200 opacity-15 rounded-lg transform -rotate-6"></div>
      <div class="absolute bottom-40 left-1/4 w-28 h-18 bg-green-100 opacity-25 rounded-lg transform rotate-3"></div>
      <div class="absolute bottom-20 right-1/3 w-20 h-24 bg-green-200 opacity-20 rounded-lg transform -rotate-12"></div>
      
      <div class="absolute top-60 left-1/3 w-36 h-14 bg-green-50 opacity-30 rounded-lg transform rotate-45"></div>
      <div class="absolute top-80 right-10 w-16 h-28 bg-green-100 opacity-18 rounded-lg transform -rotate-24"></div>
      <div class="absolute bottom-60 left-20 w-22 h-32 bg-green-200 opacity-22 rounded-lg transform rotate-18"></div>
      <div class="absolute top-32 left-2/3 w-26 h-20 bg-green-150 opacity-16 rounded-lg transform -rotate-8"></div>
      <div class="absolute bottom-32 right-1/4 w-30 h-22 bg-green-100 opacity-24 rounded-lg transform rotate-30"></div>
      <div class="absolute top-96 left-1/2 w-18 h-26 bg-green-200 opacity-19 rounded-lg transform -rotate-15"></div>
      
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-200 to-transparent opacity-10 transform rotate-12"></div>
      <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-200 to-transparent opacity-10 transform -rotate-12"></div>
    </div>

    <div class="max-w-4xl mx-auto relative z-10 pt-12">
      <div class="fixed top-4 left-4 z-20 group">
        <div class="relative">
          <div class="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl animate-bounce-slow">
            <div class="flex items-center space-x-2">
              <div class="w-5 h-5 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-pulse">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <span class="text-xs font-medium">
                {{ userEmail }}
              </span>
            </div>
          </div>
          
          <div class="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          <div class="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" style="animation-delay: 0.5s;"></div>
          
          <div class="absolute top-full left-0 mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Currently logged in
            <div class="absolute -top-1 left-4 w-2 h-2 bg-gray-800 transform rotate-45"></div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-bold text-gray-800">Project Creation Workflow</h2>
          <span class="text-sm text-gray-500">Step 3 of 3</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              ✓
            </div>
            <span class="ml-2 text-sm text-green-600 font-medium">Project Created</span>
          </div>
          <div class="flex-1 h-1 bg-green-200 rounded"></div>
          
          <div class="flex items-center">
            <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              ✓
            </div>
            <span class="ml-2 text-sm text-green-600 font-medium">Tasks Created</span>
          </div>
          <div class="flex-1 h-1 bg-green-200 rounded"></div>
          
          <div class="flex items-center">
            <div class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              3
            </div>
            <span class="ml-2 text-sm text-emerald-600 font-medium">Assign Members</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Assign Team Members</h1>
        <p class="text-gray-600">Add team members to your project for collaboration</p>
        <div v-if="selectedProject" class="mt-4 p-3 bg-emerald-50 rounded-lg">
          <p class="text-sm text-emerald-700">
            <strong>Project:</strong> {{ selectedProject.projectTitle }}
          </p>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-6">
        <form @submit.prevent="submit" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Select Project</label>
            <select 
              v-model="form.projectId" 
              @change="onProjectChange"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200"
              required
            >
              <option value="">Choose a project...</option>
              <option v-for="project in availableProjects" :key="project.id" :value="project.id">
                {{ project.projectTitle }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Select Team Member</label>
            <select 
              v-model="form.userId" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200"
              required
            >
              <option value="">Choose a member...</option>
              <option v-for="user in availableUsers" :key="user.id" :value="user.id">
                {{ user.fullName }} - {{ user.email }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Assign Role</label>
            <select 
              v-model="form.role" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200"
            >
              <option value="member">Team Member</option>
              <option value="lead">Team Lead</option>
              <option value="reviewer">Reviewer</option>
              <option value="observer">Observer</option>
            </select>
          </div>

          <div class="flex justify-between pt-4">
            <button 
              type="button" 
              @click="finishWorkflow"
              class="px-6 py-3 bg-gray-400 text-white font-medium rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
            >
              Finish Later
            </button>
            <div class="flex space-x-4">
              <button 
                type="submit" 
                :disabled="loading"
                class="px-6 py-3 bg-gradient-to-r from-emerald-400 to-green-500 text-white font-medium rounded-lg hover:from-emerald-500 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {{ loading ? 'Assigning...' : 'Assign Member' }}
              </button>
              <button 
                type="button" 
                @click="completeWorkflow"
                class="px-6 py-3 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-medium rounded-lg hover:from-blue-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Complete Setup
              </button>
            </div>
          </div>
        </form>

        <div v-if="assignedMembers.length > 0" class="mt-8">
          <h3 class="text-lg font-bold text-gray-800 mb-4">Assigned Members</h3>
          <div class="space-y-3">
            <div v-for="member in assignedMembers" :key="member.id" class="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between">
              <div>
                <h4 class="font-semibold text-emerald-800">{{ member.userFullName }}</h4>
                <p class="text-emerald-600 text-sm">{{ member.email }} - {{ member.role }}</p>
                <p class="text-emerald-500 text-xs">Project: {{ member.projectName }}</p>
              </div>
              <div class="flex items-center space-x-2">
                <span class="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">{{ member.role }}</span>
                <button 
                  @click="removeMember(member.id)"
                  class="text-red-500 hover:text-red-700 transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="result" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-green-700 font-medium">
              Successfully assigned {{ result.userFullName }} to {{ result.projectName }}!
            </span>
          </div>
        </div>

        <div v-if="error" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-red-700 font-medium">{{ error }}</span>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-8 pb-4">
        <p class="text-xs text-gray-400 italic">
          "Great teams build great projects - Bring your vision to life together! 🤝✨"
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

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

const form = ref({
  projectId: '',
  userId: '',
  role: 'member'
})

const result = ref(null)
const error = ref(null)
const loading = ref(false)
const availableProjects = ref([])
const availableUsers = ref([])
const assignedMembers = ref([])
const selectedProject = ref(null)

const userEmail = computed(() => {
  if (authStore.token) {
    try {
      const payload = JSON.parse(atob(authStore.token.split('.')[1]))
      return payload.email || 'Unknown User'
    } catch (e) {
      return 'Unknown User'
    }
  }
  return 'Not logged in'
})

onMounted(async () => {
  try {
    const projectId = route.query.projectId
    if (projectId) {
      form.value.projectId = projectId
      await onProjectChange()
    }
    
    availableProjects.value = [
      { id: 1, projectTitle: 'Website Redesign' },
      { id: 2, projectTitle: 'Mobile App Development' },
      { id: 3, projectTitle: 'Database Migration' }
    ]
    
    // Load available users
    availableUsers.value = [
      { id: 1, fullName: 'Ahmed Ali', email: 'ahmed@company.com' },
      { id: 2, fullName: 'Sarah Mohammed', email: 'sarah@company.com' },
      { id: 3, fullName: 'Omar Hassan', email: 'omar@company.com' },
      { id: 4, fullName: 'Fatima Abdullah', email: 'fatima@company.com' }
    ]
  } catch (err) {
    console.error('Failed to load data:', err)
  }
})

const onProjectChange = () => {
  selectedProject.value = availableProjects.value.find(p => p.id == form.value.projectId)
}

const submit = async () => {
  loading.value = true
  error.value = null
  result.value = null
  
  try {
    const res = await projectManagerService.assignMember({
      projectId: form.value.projectId,
      userId: form.value.userId,
      role: form.value.role
    })
    
    result.value = res.data
    
    
    const user = availableUsers.value.find(u => u.id == form.value.userId)
    const project = availableProjects.value.find(p => p.id == form.value.projectId)
    
    assignedMembers.value.push({
      id: Date.now(), 
      userFullName: user?.fullName || 'Unknown User',
      email: user?.email || '',
      projectName: project?.projectTitle || 'Unknown Project',
      role: form.value.role
    })
    
    form.value.userId = ''
    form.value.role = 'member'
    
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to assign member'
  } finally {
    loading.value = false
  }
}

const removeMember = (memberId) => {
  assignedMembers.value = assignedMembers.value.filter(m => m.id !== memberId)
}

const finishWorkflow = () => {
  router.push('/projects')
}

const completeWorkflow = () => {
  if (form.value.projectId) {
    router.push(`/projects/${form.value.projectId}`)
  } else {
    router.push('/projects')
  }
}

function logout() {
  router.push('/logout')
}
</script>

<style scoped>
.floating-shape {
  animation: float 6s ease-in-out infinite;
}

.floating-shape:nth-child(2) {
  animation-delay: -2s;
}

.floating-shape:nth-child(3) {
  animation-delay: -4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.glass-card {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glassmorphism {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.step-indicator {
  transition: all 0.3s ease;
}

.step-indicator.active {
  transform: scale(1.1);
}

.assigned-members-card {
  max-height: 300px;
  overflow-y: auto;
}

.assigned-members-card::-webkit-scrollbar {
  width: 6px;
}

.assigned-members-card::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.assigned-members-card::-webkit-scrollbar-thumb {
  background: rgba(34, 197, 94, 0.5);
  border-radius: 3px;
}

.assigned-members-card::-webkit-scrollbar-thumb:hover {
  background: rgba(34, 197, 94, 0.7);
}

.member-card {
  transition: all 0.3s ease;
}

.member-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(34, 197, 94, 0.15);
}

@media (max-width: 768px) {
  .floating-shape {
    display: none;
  }
  
  .step-indicator {
    transform: scale(0.9);
  }
  
  .assigned-members-card {
    max-height: 200px;
  }
}
</style>