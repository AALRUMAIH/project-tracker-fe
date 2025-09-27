<!-- src/components/Projects.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-tr from-blue-50 to-white p-6 relative overflow-hidden">
    <!-- Background decorative patterns -->
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

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header Section -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow mr-4 border border-green-300">
            <svg class="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-800">All Projects</h2>
            <p class="text-gray-600 mt-1">Manage and monitor all your projects from here</p>
          </div>
        </div>
        <div class="mt-4 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-60"></div>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="project in pageItems" 
          :key="project.id"
          class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center shadow-md mr-3 border border-blue-300">
                <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
            </div>
            <div class="flex items-center">
              <span 
                class="px-3 py-1 text-xs font-medium rounded-full"
                :class="{
                  'bg-green-100 text-green-800': project.status === 'completed',
                  'bg-yellow-100 text-yellow-800': project.status === 'in-progress', 
                  'bg-blue-100 text-blue-800': project.status === 'pending',
                  'bg-red-100 text-red-800': project.status === 'cancelled',
                  'bg-gray-100 text-gray-800': !['completed', 'in-progress', 'pending', 'cancelled'].includes(project.status)
                }"
              >
                {{ project.status }}
              </span>
            </div>
          </div>

          <div class="mb-4">
            <h3 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
              {{ project.projectTitle }}
            </h3>
            <p class="text-gray-600 text-sm">
              Project ID: #{{ project.id }}
            </p>
          </div>

          <div class="space-y-3 mb-4">
            <div class="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-600">Create at :</span>
                <span class="text-sm font-medium text-gray-900 capitalize">{{ (project.createdAt || '').toString().split('T')[0] }}</span>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100">
            <router-link
              :to="{ name: 'AdminProjectDetails', params: { id: project.id } }"
              class="block"
            >
              <button class="w-full bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                <div class="flex items-center justify-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  View Details
                </div>
              </button>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-if="sortedProjects.length === 0" class="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No Projects Found</h3>
        <p class="text-gray-500">Get started by creating your first project.</p>
      </div>

      <!-- Pagination (same design) -->
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
          "Every great project starts with a single step! 🚀"
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { adminService } from '../api/adminService'

const projects = ref([]) // raw list from backend

onMounted(async () => {
  const res = await adminService.getAllProjects()
  projects.value = Array.isArray(res.data) ? res.data : []
})

// sort: newest id first
const sortedProjects = computed(() => {
  const copy = [...projects.value]
  return copy.sort((a, b) => Number(b?.id ?? 0) - Number(a?.id ?? 0))
})

// pagination (same style)
const page = ref(0)          // zero-based
const size = ref(6)          // 6 items per page (matches your design)
const totalPages = computed(() =>
  Math.max(1, Math.ceil(sortedProjects.value.length / size.value))
)
const pageItems = computed(() => {
  const start = page.value * size.value
  return sortedProjects.value.slice(start, start + size.value)
})
function nextPage () { if (page.value < totalPages.value - 1) page.value++ }
function prevPage () { if (page.value > 0) page.value-- }
</script>

<style scoped>
@keyframes bounce-slow { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
.bg-blue-150 { background-color: rgb(196, 219, 253); }
* { transition: all 0.2s ease-in-out; }
</style>
