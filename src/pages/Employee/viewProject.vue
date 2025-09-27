<template>
  <div class="min-h-screen bg-gradient-to-tr from-blue-50 to-white p-4 relative overflow-hidden">
    <!-- Logout -->
    <button
      @click="logout"
      class="fixed top-6 right-6 z-50 px-2 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
      </svg>
      <span>Logout</span>
    </button>

    <!-- Background (unchanged) -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(59,130,246,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.5) 1px, transparent 1px); background-size: 50px 50px;"></div>
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
      <div class="absolute bottom-80 left-3/4 w-24 h-18 bg-blue-50 opacity-28 rounded-lg transform rotate-6"></div>
      <div class="absolute top-44 right-1/2 w-20 h-30 bg-blue-100 opacity-17 rounded-lg transform -rotate-20"></div>
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-10 transform rotate-12"></div>
      <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-10 transform -rotate-12"></div>
    </div>

    <div class="max-w-4xl mx-auto relative z-10 pt-12">
      <!-- Logged-in email badge -->
      <div class="fixed top-4 left-4 z-20 group">
        <div class="relative">
          <div class="bg-gradient-to-r from-blue-400 to-sky-500 text-white px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl animate-bounce-slow">
            <div class="flex items-center space-x-2">
              <div class="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <span class="text-xs font-medium">{{ userEmail }}</span>
            </div>
          </div>
          <div class="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          <div class="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" style="animation-delay:.5s;"></div>
          <div class="absolute top-full left-0 mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Currently logged in
            <div class="absolute -top-1 left-4 w-2 h-2 bg-gray-800 transform rotate-45"></div>
          </div>
        </div>

      </div>

      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">My Projects</h1>
        <p class="text-gray-600">List of projects assigned to you</p>
      </div>

      <!-- Projects w/ filters + paging -->
      <div class="bg-white rounded-2xl shadow-lg p-6">
        <p v-if="error" class="text-red-500 bg-red-50 border border-red-200 rounded-lg p-3 mb-4">{{ error }}</p>

        <!-- Filters -->
        <div class="flex flex-wrap items-end gap-3 mb-4">
          <div class="flex-1 min-w-[220px]">
            <label class="block text-sm text-gray-600 mb-1">Search</label>
            <input
              v-model.trim="q"
              @keydown.enter.prevent="applyQuickSearch"
              placeholder="Search by name..."
              class="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label class="block text-sm text-gray-600 mb-1">Status</label>
            <select v-model="status" class="border rounded-lg px-3 py-2">
              <option :value="''">All</option>
              <option v-for="s in STATUSES" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>

          <button @click="clearFilters" class="px-3 py-2 border rounded-lg text-sm hover:bg-gray-50">
            Clear
          </button>
        </div>

        <!-- Top bar: total + page size -->
        <div class="flex items-center justify-between mb-4">
          <div class="text-sm text-gray-600">
            <span v-if="totalElements">Total: {{ totalElements }} projects</span>
          </div>
        
        </div>

        <!-- Loading skeleton -->
        <div v-if="loading" class="space-y-3">
          <div class="animate-pulse h-20 bg-gray-100 rounded-xl"></div>
          <div class="animate-pulse h-20 bg-gray-100 rounded-xl"></div>
          <div class="animate-pulse h-20 bg-gray-100 rounded-xl"></div>
        </div>

        <!-- List -->
        <div v-else>
          <div v-if="projects.length" class="space-y-4">
            <div
              v-for="proj in projects"
              :key="proj.id"
              class="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <router-link :to="`/projects/${proj.id}`" class="block">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ proj.projectTitle }}</h3>
                    <p class="text-gray-600">Click to view project details and tasks</p>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-50 to-sky-100 text-sky-700 border border-sky-200">
                      {{ proj.status }}
                    </span>
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </router-link>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <div class="text-sm text-gray-500">
                Page {{ page + 1 }} of {{ Math.max(totalPages, 1) }}
              </div>
              <div class="flex items-center gap-2">
                <button
                  @click="prevPage"
                  :disabled="isFirst || loading"
                  class="px-3 py-1.5 rounded-lg border text-sm disabled:opacity-50 hover:bg-gray-50"
                >
                  ‹ Prev
                </button>
                <button
                  @click="nextPage"
                  :disabled="isLast || loading"
                  class="px-3 py-1.5 rounded-lg border text-sm disabled:opacity-50 hover:bg-gray-50"
                >
                  Next ›
                </button>
              </div>
            </div>
          </div>

          <div v-else class="text-center py-8">
            <p class="text-gray-500 text-lg">No projects assigned to you yet.</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-8 pb-4">
        <p class="text-xs text-gray-400 italic">
          "Stay organized, stay motivated - Your success starts with completing today's tasks ⭐"
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { fetchProjectsPaged } from '../../api/Employee/project' // keep your path

const router = useRouter()

const projects  = ref([])
const error     = ref(null)
const userEmail = ref('user@example.com')
const loading   = ref(false)

// server-side paging state
const page            = ref(0)  // 0-based
const size            = ref(5)
const totalPages      = ref(0)
const totalElements   = ref(0)
const isFirst         = ref(true)
const isLast          = ref(true)

// filters
const q        = ref(null)   // search text
const status   = ref('')     // '' = All (no status param)
const STATUSES = ['COMPLETED', 'IN_PROGRESS', 'NEW']

function logout() { router.push('/logout') }
function getUserEmailFromToken() {
  try {
    const token = localStorage.getItem('token')
    if (!token) return 'user@example.com'
    const payload = JSON.parse(atob(token.split('.')[1]))
    return payload.email || payload.sub || 'user@example.com'
  } catch { return 'user@example.com' }
}

let reqSeq = 0 // ignore stale responses
async function loadProjects(requestedPage = page.value, requestedSize = size.value) {
  const myReq = ++reqSeq
  loading.value = true
  error.value = null
  try {
    const { data } = await fetchProjectsPaged({
      page: requestedPage,
      size: requestedSize,
      q: (q.value && q.value.length ? q.value : null),
      status: (status.value && status.value.length ? status.value : null)
    })

    if (myReq !== reqSeq) return

    const returnedPage = (data.page ?? data.number ?? requestedPage)
    const returnedSize = (data.size ?? requestedSize)

    projects.value      = data.content || []
    page.value          = returnedPage
    size.value          = returnedSize
    totalPages.value    = data.totalPages ?? 0
    totalElements.value = data.totalElements ?? 0
    isFirst.value       = !!data.first
    isLast.value        = !!data.last
  } catch (e) {
    if (myReq !== reqSeq) return
    error.value = e?.response?.data?.error || e?.message || 'Could not load your projects.'
  } finally {
    if (myReq === reqSeq) loading.value = false
  }
}

async function nextPage() {
  if (isLast.value || loading.value) return
  await loadProjects(page.value + 1, size.value)
}
async function prevPage() {
  if (isFirst.value || loading.value) return
  await loadProjects(page.value - 1, size.value)
}
async function changePageSize(newSize) {
  if (loading.value) return
  await loadProjects(0, Number(newSize)) // reset to first page
}

// Filters helpers
function applyQuickSearch() {
  page.value = 0
  loadProjects(0, size.value)
}
function clearFilters() {
  q.value = null
  status.value = ''
  page.value = 0
  loadProjects(0, size.value)
}

// Debounce search input
let searchDebounce
watch(q, () => {
  clearTimeout(searchDebounce)
  searchDebounce = setTimeout(() => {
    page.value = 0
    loadProjects(0, size.value)
  }, 400)
})

// Status changes → immediate fetch
watch(status, () => {
  page.value = 0
  loadProjects(0, size.value)
})

onMounted(async () => {
  userEmail.value = getUserEmailFromToken()
  await loadProjects()
})
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-6px); }
  60% { transform: translateY(-3px); }
}
.animate-bounce-slow { animation: bounce-slow 3s infinite; }
</style>
