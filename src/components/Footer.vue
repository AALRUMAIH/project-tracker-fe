<template>
  <footer class="mt-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-5 py-8 sm:py-10">
      <!-- Heading -->
      <div class="flex items-center justify-between flex-wrap gap-3 mb-4 sm:mb-6">
        <div>
          <h3 class="text-xl font-extrabold text-[#0a66c2]">Our Team</h3>
          <p class="text-black text-sm">The people who built ProjectTracker</p>
        </div>
      </div>

      <!-- Cards: 2 cols on mobile, 4 on desktop -->
      <div
        class="grid gap-8 grid-cols-2 md:grid-cols-4"
        role="list"
        aria-label="Project team members"
      >
        <article
          v-for="m in safeMembers"
          :key="m.name"
          role="listitem"
          class="group rounded-xl border bg-white/80 backdrop-blur p-3 sm:p-4 shadow transition
                 hover:shadow-lg hover:-translate-y-0.5"
        >
          <!-- Top row -->
          <div class="flex items-center  gap-2 sm:gap-3">
            <div
              class=" w-10 h-10 sm:w-12 sm:h-12 rounded-xl grid place-items-center text-sm  font-bold text-white
                     bg-gradient-to-br from-blue-500 to-cyan-500 overflow-hidden"
              :title="m.name"
            >
              <img
                v-if="m.avatar"
                :src="m.avatar"
                :alt="`${m.name} avatar`"
                class="w-full h-full object-cover"
              />
              <span v-else>{{ initials(m.name) }}</span>
            </div>

            <div class="min-w-0">
              <h4 class="font-semibold text-slate-900  truncate text-xs sm:text-base">{{ m.name }}</h4>
              <p class="text-slate-500 text-[11px] sm:text-xs truncate">{{ m.role }}</p>
            </div>
          </div>

          <div class="mt-3 sm:mt-4 flex items-center justify-center w-full gap-2">
            <a
              v-if="m.linkedin"
              :href="m.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`LinkedIn of ${m.name}`"
              class="inline-flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-sm font-medium
                     rounded-lg border hover:bg-blue-50 hover:border-blue-200
                     text-slate-700 transition"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" class="w-4 h-4 shrink-0" aria-hidden="true">
                <path fill="currentColor"
                      d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0V8.98zM8.98 8.98H14v2.05h.07c.7-1.33 2.4-2.73 4.94-2.73 5.28 0 6.25 3.48 6.25 8.01V24h-5v-6.67c0-1.59-.03-3.63-2.21-3.63-2.22 0-2.56 1.73-2.56 3.51V24h-5V8.98z"/>
              </svg>
              <span class="sr-only">LinkedIn</span>
              <span class="hidden sm:inline">LinkedIn</span>
            </a>

            <a
              v-if="m.github"
              :href="m.github"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`GitHub of ${m.name}`"
              class="inline-flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-sm font-medium
                     rounded-lg border hover:bg-slate-50 hover:border-slate-300
                     text-slate-700 transition"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" class="w-4 h-4 shrink-0" aria-hidden="true">
                <path fill="currentColor"
                      d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.94c.58.1.8-.25.8-.56v-2.1c-3.2.7-3.87-1.37-3.87-1.37-.53-1.36-1.3-1.72-1.3-1.72-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.1-.77.41-1.28.75-1.57-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.57.23 2.73.11 3.02.75.81 1.2 1.85 1.2 3.11 0 4.43-2.71 5.4-5.29 5.69.42.36.8 1.07.8 2.16v3.2c0 .31.21.67.81.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/>
              </svg>
              <span class="sr-only">GitHub</span>
              <span class="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </article>
      </div>

      <!-- Bottom line -->
      <div class="mt-6 sm:mt-8 flex items-center justify-between flex-wrap gap-3 text-sm text-slate-500">
        <span>Made with by the ProjectTracker team</span>
        <span>© {{ new Date().getFullYear() }} ProjectTracker</span>
      </div>
    </div>
  </footer>
</template>


<script setup>
import { computed } from 'vue'


const props = defineProps({
  members: {
    type: Array,
    default: () => ([])
  }
})


const fallback = [
  {
    name: 'Abdulmajeed Alromaih',
    role: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/'
  },
  {
    name: 'Sara AlHarbi',
    role: 'Frontend Engineer',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/'
  },
  {
    name: 'Nasser AlOtaibi',
    role: 'Backend Engineer',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/'
  },
  {
    name: 'Lama AlQahtani',
    role: 'Product Designer',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/'
  }
]

const safeMembers = computed(() => props.members.length ? props.members : fallback)

function initials(name = '') {
  const parts = name.trim().split(/\s+/)
  return parts.slice(0, 2).map(p => p[0]?.toUpperCase() || '').join('')
}
</script>

<style scoped>
/* no extra styles needed; Tailwind handles layout */
</style>
