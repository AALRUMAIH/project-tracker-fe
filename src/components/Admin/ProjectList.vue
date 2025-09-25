<template>
  <div class="min-h-screen bg-gradient-to-tr from-blue-50 to-white p-6 relative overflow-hidden">
    <div class="max-w-4xl mx-auto relative z-10">

      <!-- Loading -->
      <div v-if="loading" class="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
        <h3 class="text-lg font-medium text-gray-900 mb-2">Loading project details…</h3>
        <p class="text-gray-500">Please wait while we fetch the project information.</p>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4">
        {{ error }}
      </div>

      <!-- Content -->
      <div v-else-if="project">
        <!-- Header -->
        <div class="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100 relative">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mr-4 border border-green-300">
              <svg class="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h2 class="text-3xl font-bold text-gray-800">{{ project.projectName }}</h2>
              <p class="text-gray-600 mt-1">{{ project.projectDescription }}</p>
            </div>
          </div>

          <!-- Status badge in top-right corner -->
          <div class="absolute top-6 right-6">
            <span class="px-3 py-1 text-sm font-medium rounded-full shadow-sm" :class="statusBadgeClass">
              {{ statusLabel }}
            </span>
          </div>

          <div class="h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-60 mt-4"></div>
        </div>

        <!-- People (Manager + Members) -->
        <div class="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <div class="flex items-center justify-between mb-5">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a5 5 0 100-10 5 5 0 000 10z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800">People</h3>
            </div>
            <span class="text-xs text-gray-500">Team overview</span>
          </div>

          <!-- Manager card -->
          <div class="rounded-xl border border-gray-100 p-4 mb-4 bg-gradient-to-br from-gray-50 to-white">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center font-bold text-emerald-700">
                {{ initials(project.projectManager?.fullName || project.projectManager?.email) }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 flex-wrap">
                  <p class="font-medium text-gray-900 truncate">{{ project.projectManager?.fullName || '—' }}</p>
                  <span class="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">Manager</span>
                </div>
                <div class="text-sm text-gray-600 truncate">
                  <a class="hover:underline" :href="'mailto:' + (project.projectManager?.email || '')">
                    {{ project.projectManager?.email || '—' }}
                  </a>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button
                  @click="copy(project.projectManager?.email)"
                  class="px-3 py-1.5 text-sm rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  :disabled="!project.projectManager?.email"
                  title="Copy email"
                >
                  Copy
                </button>
                <a
                  :href="'mailto:' + (project.projectManager?.email || '')"
                  class="px-3 py-1.5 text-sm rounded-lg border border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                  :class="!project.projectManager?.email ? 'pointer-events-none opacity-50' : ''"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          <!-- Members grid -->
          <div>
            <p class="text-sm font-medium text-gray-700 mb-3">Members</p>

            <div v-if="hasMembers" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div v-for="(m, i) in project.projectMembers" :key="m.id || i"
                   class="rounded-xl border border-gray-100 p-3 bg-white hover:shadow-sm transition">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center font-semibold text-sky-700">
                    {{ initials(m.fullName || m.email) }}
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900 truncate">{{ m.fullName || '—' }}</p>
                    <a :href="'mailto:' + (m.email || '')" class="text-xs text-gray-600 hover:underline truncate">
                      {{ m.email || '—' }}
                    </a>
                  </div>
                  <button
                    @click="copy(m.email)"
                    class="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50"
                    :disabled="!m.email"
                    title="Copy email"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>

            <div v-else class="rounded-xl border border-dashed border-gray-200 p-6 text-center text-gray-500">
              No members added yet.
            </div>
          </div>
        </div>

        <!-- Progress -->
        <div class="grid grid-cols-1 md:grid-cols-1 gap-6 mb-6">
          <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div class="flex items-center mb-3">
              <div class="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mr-3 border border-indigo-200">
                <svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800">Progress</h3>
            </div>
            <div class="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-900">{{ project.percentCompleted }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div class="bg-gradient-to-r from-blue-400 to-sky-500 h-3 rounded-full transition-all duration-500"
                     :style="{ width: project.percentCompleted + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tasks: To do + In Progress + Review + Completed -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- To Do (fixed v-for source) -->
          <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 border border-gray-200">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800">To Do</h3>
            </div>

            <div v-if="project.tasksToDo?.length" class="space-y-2">
              <div v-for="(title, idx) in project.tasksToDo" :key="'td-' + idx"
                   class="bg-gray-50 rounded-lg p-3 border border-gray-100">
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span class="text-sm text-gray-800">{{ title }}</span>
                </div>
              </div>
            </div>
            <div v-else class="bg-gray-50 rounded-lg p-4 text-center border border-gray-100">
              <p class="text-sm text-gray-500">No tasks in To Do</p>
            </div>
          </div>

          <!-- In Progress -->
          <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mr-3 border border-yellow-200">
                <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800">In Progress</h3>
            </div>

            <div v-if="project.tasksInProgress?.length" class="space-y-2">
              <div v-for="(title, idx) in project.tasksInProgress" :key="'ip-' + idx"
                   class="bg-yellow-50 rounded-lg p-3 border border-yellow-100">
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span class="text-sm text-gray-800">{{ title }}</span>
                </div>
              </div>
            </div>
            <div v-else class="bg-gray-50 rounded-lg p-4 text-center border border-gray-100">
              <p class="text-sm text-gray-500">No tasks in progress</p>
            </div>
          </div>

          <!-- Review -->
          <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3 border border-blue-200">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800">Review</h3>
            </div>

            <div v-if="project.tasksReview?.length" class="space-y-2">
              <div v-for="(title, idx) in project.tasksReview" :key="'rv-' + idx"
                   class="bg-blue-50 rounded-lg p-3 border border-blue-100">
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span class="text-sm text-gray-800">{{ title }}</span>
                </div>
              </div>
            </div>
            <div v-else class="bg-gray-50 rounded-lg p-4 text-center border border-gray-100">
              <p class="text-sm text-gray-500">No tasks in review</p>
            </div>
          </div>

          <!-- Completed -->
          <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 lg:col-span-3">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mr-3 border border-green-200">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800">Completed</h3>
            </div>

            <div v-if="project.tasksCompleted?.length" class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div v-for="(title, idx) in project.tasksCompleted" :key="'c-' + idx"
                   class="bg-green-50 rounded-lg p-3 border border-green-100">
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-sm text-gray-800">{{ title }}</span>
                </div>
              </div>
            </div>
            <div v-else class="bg-gray-50 rounded-lg p-4 text-center border border-gray-100">
              <p class="text-sm text-gray-500">No completed tasks yet</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-8 pb-4">
          <p class="text-xs text-blue-400 italic">"Great projects are built one task at a time! 📋"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { adminService } from '../../api/adminService'

const route = useRoute()
const project = ref(null)
const loading = ref(true)
const error = ref('')

const loadProjectDetails = async () => {
  try {
    const res = await adminService.getProjectDetails(route.params.id)
    project.value = res.data
  } catch (e) {
    error.value = 'Failed to load project details.'
  } finally {
    loading.value = false
  }
}
onMounted(loadProjectDetails)

/** Helpers */
const hasMembers = computed(() => Array.isArray(project.value?.projectMembers) && project.value.projectMembers.length > 0)

const initials = (nameOrEmail) => {
  if (!nameOrEmail) return '—'
  const s = String(nameOrEmail).trim()
  // If looks like an email, take local part's first 2 letters
  if (s.includes('@')) {
    const local = s.split('@')[0]
    return local.slice(0, 2).toUpperCase()
  }
  // Otherwise use first letters of up to two words
  const parts = s.split(/\s+/).filter(Boolean)
  const first = parts[0]?.[0] || ''
  const second = parts[1]?.[0] || ''
  return (first + second).toUpperCase() || s.slice(0, 2).toUpperCase()
}

const copy = async (text) => {
  if (!text) return
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    // Fallback
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.focus()
    ta.select()
    try { document.execCommand('copy') } catch {}
    document.body.removeChild(ta)
  }
}

/** Badge text + color */
const statusLabel = computed(() => {
  if (!project.value?.status) return 'UNKNOWN'
  return project.value.status.replaceAll('_', ' ')
})
const statusBadgeClass = computed(() => {
  const s = project.value?.status
  return {
    'bg-green-100 text-green-800': s === 'COMPLETED',
    'bg-yellow-100 text-yellow-800': s === 'IN_PROGRESS',
    'bg-blue-100 text-blue-800': s === 'REVIEW',
    'bg-gray-100 text-gray-800': s === 'TO_DO'
  }
})
</script>
