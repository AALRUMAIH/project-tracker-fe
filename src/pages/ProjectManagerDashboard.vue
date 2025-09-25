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
      
      <div class="absolute top-20 left-10 w-32 h-20 bg-blue-100 opacity-20 rounded-lg transform rotate-12 animate-pulse"></div>
      <div class="absolute top-40 right-20 w-24 h-16 bg-blue-200 opacity-15 rounded-lg transform -rotate-6"></div>
      <div class="absolute bottom-40 left-1/4 w-28 h-18 bg-blue-100 opacity-25 rounded-lg transform rotate-3"></div>
      <div class="absolute bottom-20 right-1/3 w-20 h-24 bg-blue-200 opacity-20 rounded-lg transform -rotate-12"></div>
      
      <div class="absolute top-60 left-1/3 w-36 h-14 bg-blue-50 opacity-30 rounded-lg transform rotate-45"></div>
      <div class="absolute top-80 right-10 w-16 h-28 bg-blue-100 opacity-18 rounded-lg transform -rotate-24"></div>
      <div class="absolute bottom-60 left-20 w-22 h-32 bg-blue-200 opacity-22 rounded-lg transform rotate-18"></div>
      <div class="absolute top-32 left-2/3 w-26 h-20 bg-blue-150 opacity-16 rounded-lg transform -rotate-8"></div>
      <div class="absolute bottom-32 right-1/4 w-30 h-22 bg-blue-100 opacity-24 rounded-lg transform rotate-30"></div>
      <div class="absolute top-96 left-1/2 w-18 h-26 bg-blue-200 opacity-19 rounded-lg transform -rotate-15"></div>
      
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-10 transform rotate-12"></div>
      <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-10 transform -rotate-12"></div>
      
    </div>
    

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
    <div class="max-w-7xl mx-auto relative z-10 pt-12">
    

      <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-800 mb-4">Project Dashboard</h1>
            <p class="text-gray-600">Manage and monitor all your projects</p>
          </div>
          <router-link 
            to="/pm/create-project"
            class="px-6 py-3 bg-gradient-to-r from-blue-400 to-sky-500 text-white font-medium rounded-lg hover:from-blue-500 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <span>Create New Project</span>
          </router-link>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-6 mt-8">
        <div v-if="error" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-red-700 font-medium">{{ error }}</span>
          </div>
        </div>

        <div v-if="loading" class="text-center py-8">
          <div class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-blue-500 bg-blue-100">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading projects...
          </div>
        </div>

        <div v-else-if="projects.length" class="relative">
          <button 
            v-if="canScrollLeft"
            @click="scrollLeft"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
          >
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button 
            v-if="canScrollRight"
            @click="scrollRight"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
          >
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <div 
            ref="projectsContainer"
            class="overflow-x-auto scrollbar-hide"
            @scroll="updateScrollButtons"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-fit">
              <div 
                v-for="project in pageItems" 
                :key="project.id"
                class="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-300 min-w-80 h-80 flex flex-col justify-between"
              >
                <div>
                  <div class="flex items-start justify-between mb-4">
                    <div class="flex-1">
                      <h3 class="text-xl font-bold text-gray-800 mb-1 line-clamp-2">{{ project.projectTitle || project.name }}</h3>
                      <p class="text-sm text-gray-500">Project ID: #{{ project.id }}</p>
                    </div>
                    <div class="ml-4">
                      <span class="inline-flex px-3 py-1 text-xs font-medium rounded-full" :class="getStatusClass(project.status)">
                        {{ project.status || 'Active' }}
                      </span>
                    </div>
                  </div>

                  <div class="space-y-3 mb-4">
                    <div class="flex items-center text-sm text-gray-600">
                      <svg class="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span>Start: {{ formatDate(project.startProject) }}</span>
                    </div>
                    <div v-if="project.endProject" class="flex items-center text-sm text-gray-600">
                      <svg class="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span>End: {{ formatDate(project.endProject) }}</span>
                    </div>
                    <div class="flex items-center text-sm text-gray-600">
                      <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                      </svg>
                      <span>By: {{ project.projectManager.email }}</span>
                    </div>
                  </div>
                </div>

                <div class="mt-auto">
                  <router-link 
                    :to="`/pm/projects/${project.id}`"
                    class="w-full text-center block px-4 py-2 bg-gradient-to-r from-blue-400 to-sky-500 text-white text-sm font-medium rounded-lg hover:from-blue-500 hover:to-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    View Details
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div v-else class="text-center py-12">
          <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <h3 class="text-lg font-medium text-gray-800 mb-2">No projects yet</h3>
          <p class="text-gray-500 mb-6">Get started by creating your first project</p>
          <router-link 
            to="/pm/create-project"
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 to-sky-500 text-white font-medium rounded-lg hover:from-blue-500 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Create Your First Project
          </router-link>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between">
  <div class="text-sm text-gray-500">
    Page {{ page + 1 }} of {{ totalPages }}
  </div>
  <div class="flex items-center gap-2">
    <button @click="prevPage" :disabled="page===0" class="px-3 py-1.5 rounded-lg border text-sm disabled:opacity-50 hover:bg-gray-50">‹ Prev</button>
    <button @click="nextPage" :disabled="page>=totalPages-1" class="px-3 py-1.5 rounded-lg border text-sm disabled:opacity-50 hover:bg-gray-50">Next ›</button>
  </div>
</div>

      
      <div class="text-center mt-8 pb-4">
        <p class="text-xs text-blue-400 italic">
          "Great projects start with great planning - Lead your team to success! 🚀"
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { projectService } from '../api/projectService'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const projects = ref([])
const error = ref(null)
const loading = ref(true)
const projectsContainer = ref(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

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

onMounted(async () => {
  try {
    loading.value = true
    const response = await projectService.getAllProjectsForPM()
    projects.value = response.data.sort((a, b) => b.id - a.id)
    await nextTick()
    updateScrollButtons()
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to load projects'
    console.error('Failed to load projects:', err)
  } finally {
    loading.value = false
  }
})

const scrollLeft = () => {
  if (projectsContainer.value) {
    projectsContainer.value.scrollBy({ left: -320, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (projectsContainer.value) {
    projectsContainer.value.scrollBy({ left: 320, behavior: 'smooth' })
  }
}

const updateScrollButtons = () => {
  if (projectsContainer.value) {
    const container = projectsContainer.value
    canScrollLeft.value = container.scrollLeft > 0
    canScrollRight.value = container.scrollLeft < (container.scrollWidth - container.clientWidth)
  }
}

const getStatusClass = (status) => {
  switch (status?.toLowerCase()) {
    case 'completed':
      return 'bg-green-100 text-green-800 border border-green-200'
    case 'in progress':
    case 'active':
      return 'bg-blue-100 text-blue-800 border border-blue-200'
    case 'new':
      return 'bg-purple-100 text-purple-800 border border-purple-200'
    case 'on hold':
      return 'bg-yellow-100 text-yellow-800 border border-yellow-200'
    case 'cancelled':
      return 'bg-red-100 text-red-800 border border-red-200'
    default:
      return 'bg-gray-100 text-gray-800 border border-gray-200'
  }
}

const formatDate = (dateString) => {
  if (!dateString) return 'Not set'
  try {
    let date
    if (dateString.includes(' ')) {
      date = new Date(dateString.replace(' ', 'T'))
    } else {
      date = new Date(dateString)
    }
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } catch {
    return 'Invalid date'
  }
}

function logout() {
  router.push('/logout')
}
const page = ref(0)       
const size = ref(6)       
const totalPages = computed(() =>
  Math.max(1, Math.ceil((projects.value?.length || 0) / size.value))
)

const pageItems = computed(() => {
  const start = page.value * size.value
  return projects.value.slice(start, start + size.value)
})

function nextPage() { if (page.value < totalPages.value - 1) page.value++ }
function prevPage() { if (page.value > 0) page.value-- }

</script>

<style scoped>
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

.bg-blue-150 {
  background-color: rgb(196, 219, 253);
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

* {
  transition: all 0.2s ease-in-out;
}
</style>
