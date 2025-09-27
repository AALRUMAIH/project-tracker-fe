<template>
  <div class="min-h-screen bg-gradient-to-tr from-blue-50 to-white p-4 relative overflow-hidden">
    <!-- Logout Button -->
    <button
      @click="logout"
      class="fixed top-6 right-6 z-50 px-2 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
      </svg>
      <span>Logout</span>
    </button>

    <!-- Background decorations -->
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
      <!-- Email chip -->
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

      <!-- Project header card -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div class="flex items-center mb-4">
          <button @click="goBack" class="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 group">
            <svg class="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span class="text-sm font-medium">Projects</span>
          </button>
          <svg class="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span class="text-sm text-gray-600 font-medium">{{ project.projectTitle }}</span>
        </div>

        <div class="flex items-center justify-between mb-2">
          <h1 class="text-3xl font-bold text-gray-800">{{ project.projectTitle }}</h1>
          <span class="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200">
            {{ project.status }}
          </span>
        </div>
        <p class="text-gray-600">{{ project.description }}</p>

        <!-- Dates strip -->
        <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <!-- Start -->
          <div class="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-3 py-2">
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span class="text-xs text-gray-600">Start</span>
            </div>
            <span class="text-sm font-medium text-green-800">{{ formatDateOnly(project.startProject) }}</span>
          </div>

          <!-- End -->
          <div class="flex items-center justify-between bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span class="text-xs text-gray-600">End</span>
            </div>
            <span class="text-sm font-medium text-red-800">{{ formatDateOnly(project.endProject) }}</span>
          </div>

          <!-- Created -->
          <div class="flex items-center justify-between bg-purple-50 border border-purple-200 rounded-lg px-3 py-2">
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-xs text-gray-600">Created</span>
            </div>
            <span class="text-sm font-medium text-purple-800">{{ formatDateOnly(project.createdAt) }}</span>
          </div>
        </div>
      </div>

      <!-- Tasks Section -->
      <div class="bg-white rounded-2xl shadow-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Tasks</h2>
        <p v-if="error" class="text-red-500 bg-red-50 border border-red-200 rounded-lg p-3 mb-4">{{ error }}</p>

        <div v-if="tasks.length" class="space-y-6">
          <!-- Task Navigation -->
          <div class="flex items-center justify-between mb-6">
            <button
              @click="previousTask"
              :disabled="currentTaskIndex === 0"
              class="flex items-center px-4 py-2 rounded-lg shadow-sm bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition"
            >
              <span class="mr-2">‹</span> Previous Task
            </button>

            <div class="text-sm text-gray-500">
              Task {{ currentTaskIndex + 1 }} of {{ tasks.length }}
            </div>

            <button
              @click="nextTask"
              :disabled="currentTaskIndex === tasks.length - 1"
              class="flex items-center px-4 py-2 rounded-lg shadow-sm bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next Task <span class="ml-2">›</span>
            </button>
          </div>

          <!-- Task header: left title/desc, right assigned + status -->
          <div class="mb-4 flex items-start justify-between">
            <div class="pr-4">
              <div class="text-xs text-gray-500 mb-1">Task</div>
              <h3 class="text-2xl font-semibold text-gray-900 mb-1">{{ currentTask.title }}</h3>
              <p class="text-gray-600">{{ currentTask.description }}</p>
            </div>

            <div class="ml-4 shrink-0 flex flex-col items-end gap-2">
              <span class="text-sm text-gray-600">
                Assigned:
                <span
                  class="text-blue-600 font-medium truncate max-w-[260px] inline-block align-bottom"
                  :title="assignedToDisplay(currentTask)"
                >
                  {{ assignedToDisplay(currentTask) }}
                </span>
              </span>

             <!-- Status: clickable chip -->
<div class="relative" ref="statusMenuEl">
  <button
    type="button"
    @click.stop="toggleStatusMenu"
    class="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full border shadow-sm hover:shadow transition"
    :class="statusChipClass(currentTask.status)"
    :title="'Change status'"
  >
    {{ statusLabel(currentTask.status) }}
    <svg class="w-3 h-3 opacity-70" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.177l3.71-3.946a.75.75 0 111.08 1.04l-4.24 4.51a.75.75 0 01-1.08 0l-4.24-4.51a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
    </svg>
  </button>

  <!-- Dropdown -->
  <div
    v-if="statusMenuOpen"
    class="absolute right-0 mt-2 w-44 bg-white rounded-xl border border-gray-200 shadow-lg p-1 z-20"
  >
    <button
      v-for="s in TASK_STATUSES"
      :key="s"
      type="button"
      @click.stop="changeStatus(currentTask, s)"
      class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-gray-50"
      :class="currentTask.status === s ? 'font-semibold' : ''"
    >
      <span>{{ statusLabel(s) }}</span>
      <span
        class="inline-block h-2 w-2 rounded-full"
        :class="statusChipClass(s).split(' ')[0].replace('bg-','bg-')"
        aria-hidden="true"
      ></span>
    </button>
  </div>
</div>

            </div>
          </div>

          <!-- Comments card -->
          <div class="bg-white rounded-xl p-4 border border-gray-100">
            <!-- Header + count -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <h4 class="text-lg font-semibold text-gray-900">Comments</h4>
                <span class="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-full shadow-sm">
                  {{ commentCount }} {{ commentCount === 1 ? 'comment' : 'comments' }}
                </span>
              </div>
            </div>

            <!-- List -->
            <div class="max-h-64 overflow-y-auto pr-2 space-y-3 custom-scroll">
              <div
                v-for="c in sortedComments"
                :key="c.id"
                class="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3"
              >
                <div class="flex items-center justify-between mb-1">
                  <strong class="text-sm text-gray-900">{{ c.createdBy }}</strong>
                  <em class="text-xs text-gray-500">{{ formatDateStamp(c.createdAt) }}</em>
                </div>
                <p class="text-sm text-gray-700">{{ c.text }}</p>
              </div>

              <div v-if="sortedComments.length === 0" class="text-sm text-gray-500">
                No comments yet.
              </div>
            </div>

            <!-- Input row -->
            <div class="mt-4 flex items-center gap-3">
              <input
                v-model="newComments[currentTask.id]"
                type="text"
                placeholder="Add a comment..."
                class="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
              />
              <button
                @click="addComment(currentTask.id)"
                :disabled="adding[currentTask.id]"
                class="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium shadow-sm hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {{ adding[currentTask.id] ? 'Posting…' : 'Post' }}
              </button>
              
            </div>
          </div>
        </div>

        <div v-else class="text-center py-8">
          <p class="text-gray-500 text-lg">No tasks assigned to you in this project.</p>
        </div>
      </div>

      <div class="text-center mt-8 pb-4">
        <p class="text-xs text-gray-400 italic">
          "Complete your tasks today to stay ahead of tomorrow's challenges ✨"
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchProjectById, fetchTasksByProject, fetchProjectsPaged } from '../../api/Employee/project'
import { postComment } from '../../api/Employee/Tasks'
import { updateTaskStatus } from '../../api/Employee/Tasks'

const route = useRoute()
const router = useRouter()
const projectId = Number(route.params.id)

const project = ref({})
const tasks = ref([])
const error = ref(null)
const userEmail = ref('user@example.com')

const currentTaskIndex = ref(0)
const newComments = reactive({})
const adding = reactive({})
function statusLabel (s) {
  const map = {
    TO_DO: 'TO DO',
    IN_PROGRESS: 'IN PROGRESS',
    REVIEW: 'REVIEW',
    COMPLETED: 'COMPLETED',
  }
  return map[s] || String(s).replace(/_/g, ' ').toUpperCase()
}

function statusChipClass (s) {
  switch (s) {
    case 'TO_DO':        return 'bg-slate-50 text-slate-700 border-slate-200'
    case 'IN_PROGRESS':  return 'bg-blue-50 text-blue-700 border-blue-200'
    case 'REVIEW':       return 'bg-amber-50 text-amber-700 border-amber-200'
    case 'COMPLETED':    return 'bg-emerald-50 text-emerald-700 border-emerald-200'
    default:             return 'bg-gray-50 text-gray-700 border-gray-200'
  }
}

const statusMenuOpen = ref(false)
const statusMenuEl = ref(null)

// the 4 statuses you allow
const TASK_STATUSES = ['TO_DO', 'IN_PROGRESS', 'REVIEW', 'COMPLETED']

function toggleStatusMenu () {
  statusMenuOpen.value = !statusMenuOpen.value
}

async function changeStatus (task, newStatus) {
  if (!task || task.status === newStatus) {
    statusMenuOpen.value = false
    return
  }
  const prev = task.status
  // optimistic UI
  task.status = newStatus
  statusMenuOpen.value = false
  try {
    await updateTaskStatus(task.id, newStatus)
    // success: nothing else to do (you already updated UI)
  } catch (e) {
    // revert on failure
    task.status = prev
    error.value = e?.response?.data?.error || 'Failed to update status.'
  }
}

// close on outside click
function onDocClick (e) {
  if (!statusMenuEl.value) return
  if (!statusMenuEl.value.contains(e.target)) statusMenuOpen.value = false
}
onMounted(() => document.addEventListener('click', onDocClick))
onUnmounted(() => document.removeEventListener('click', onDocClick))


const currentTask = computed(() => tasks.value[currentTaskIndex.value] || {})
const sortedComments = computed(() => {
  if (!currentTask.value?.comments) return []
  return [...currentTask.value.comments].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
})
const commentCount = computed(() => currentTask.value?.comments?.length || 0)

function nextTask () {
  if (currentTaskIndex.value < tasks.value.length - 1) currentTaskIndex.value++
}
function previousTask () {
  if (currentTaskIndex.value > 0) currentTaskIndex.value--
}
function goBack () { router.push('/projects') }
function logout () { router.push('/logout') }

function formatDate(iso) { return new Date(iso).toLocaleString() }
function getUserEmailFromToken () {
  try {
    const token = localStorage.getItem('token')
    if (!token) return 'user@example.com'
    const payload = JSON.parse(atob(token.split('.')[1]))
    return payload.email || payload.sub || 'user@example.com'
  } catch { return 'user@example.com' }
}

async function load () {
  try {
    userEmail.value = getUserEmailFromToken()
    // load project via paged endpoint (as you do)
    const projRes = await fetchProjectsPaged({ page: 0, size: 100 })
    const d = projRes.data
    project.value = d?.content?.find(p => Number(p.id) === projectId) || {}
    if (!project.value.id) throw new Error('Project not found in paged list')

    const taskRes = await fetchTasksByProject(projectId)
    tasks.value = Array.isArray(taskRes.data) ? taskRes.data : (taskRes.data?.content || [])
    currentTaskIndex.value = 0
    tasks.value.forEach(t => { newComments[t.id] = ''; adding[t.id] = false })
  } catch (e) {
    error.value = e?.response?.data?.error || e?.message || 'Could not load project/tasks.'
  }
}

async function addComment (taskId) {
  const text = (newComments[taskId] || '').trim()
  if (!text) return
  adding[taskId] = true
  try {
    const res = await postComment(taskId, text)
    const idx = tasks.value.findIndex(t => t.id === taskId)
    if (idx !== -1) {
      const arr = tasks.value[idx].comments || []
      arr.push(res.data)
      tasks.value[idx].comments = arr
    }
    newComments[taskId] = ''
  } catch (e) {
    error.value = e?.response?.data?.error || 'Failed to post comment.'
  } finally {
    adding[taskId] = false
  }
}

/* date helpers for the top chips */
function parseDateSafe (ds) {
  if (!ds) return null
  try {
    const s = typeof ds === 'string' && ds.includes(' ') && !ds.includes('T') ? ds.replace(' ', 'T') : ds
    const d = new Date(s)
    return isNaN(d.getTime()) ? null : d
  } catch { return null }
}
function formatDateOnly (ds) {
  const d = parseDateSafe(ds)
  if (!d) return 'Not set'
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

/* display helpers for task header */
function assignedToDisplay (task) {
  if (!task) return 'Unassigned'
  return task.assignedToEmail || (task.assignedToId ? `User #${task.assignedToId}` : 'Unassigned')
}
function statusLabel (s) {
  if (!s) return '—'
  const map = {
    NEW: 'NEW',
    IN_PROGRESS: 'IN PROGRESS',
    REVIEW: 'REVIEW',
    COMPLETED: 'COMPLETED',
    ON_HOLD: 'ON HOLD',
    CANCELLED: 'CANCELLED'
  }
  return map[s] || String(s).replace(/_/g, ' ').toUpperCase()
}
function statusChipClass (s) {
  switch (s) {
    case 'NEW':         return 'bg-sky-50 text-sky-700 border-sky-200'
    case 'IN_PROGRESS': return 'bg-blue-50 text-blue-700 border-blue-200'
    case 'REVIEW':      return 'bg-orange-50 text-orange-700 border-orange-200'
    case 'COMPLETED':   return 'bg-green-50 text-green-700 border-green-200'
    case 'ON_HOLD':     return 'bg-yellow-50 text-yellow-700 border-yellow-200'
    case 'CANCELLED':   return 'bg-red-50 text-red-700 border-red-200'
    default:            return 'bg-gray-50 text-gray-700 border-gray-200'
  }
}

/* pretty timestamp for comments, like YYYY-MM-DD 9:01 am */
function formatDateStamp (iso) {
  if (!iso) return ''
  const d = new Date(iso)
  const date = d.toLocaleDateString('en-CA') // YYYY-MM-DD
  const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }).toLowerCase()
  return `${date} ${time}`
}

async function refreshComments () {
  try {
    const res = await fetchTasksByProject(projectId)
    const list = Array.isArray(res.data) ? res.data : (res.data?.content || [])
    const updated = list.find(t => t.id === currentTask.value.id)
    if (updated) {
      const idx = tasks.value.findIndex(t => t.id === updated.id)
      if (idx !== -1) tasks.value[idx].comments = updated.comments || []
    }
  } catch (e) {
    error.value = e?.response?.data?.error || 'Failed to refresh comments.'
  }
}

onMounted(load)
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-6px); }
  60% { transform: translateY(-3px); }
}
.animate-bounce-slow { animation: bounce-slow 3s infinite; }

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
.animate-float { animation: float 4s ease-in-out infinite; }

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.shimmer {
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.2) 50%, rgba(255,255,255,0) 100%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

/* nice thin scrollbar for comments list */
.custom-scroll { scrollbar-width: thin; scrollbar-color: rgba(148,163,184,.6) transparent; }
.custom-scroll::-webkit-scrollbar { width: 8px; height: 8px; }
.custom-scroll::-webkit-scrollbar-thumb { background: rgba(148,163,184,.6); border-radius: 9999px; }
.custom-scroll::-webkit-scrollbar-track { background: transparent; }
</style>
