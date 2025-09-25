<template>
  <div class="min-h-screen bg-gradient-to-tr from-blue-50 to-white relative">
    <!-- Sticky Nav -->
    <nav ref="navRef" class="sticky top-0 z-50 bg-white/70 backdrop-blur ">
  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
    <!-- particles, behind -->
    <div id="particles-js" class="absolute inset-0 -z-10 pointer-events-none"></div>

    <!-- Brand -->
    <router-link to="/" class="flex items-center gap-3 shrink-0 no-underline text-inherit">
      <img :src="logo" alt="logo" class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-[0_6px_18px_rgba(2,6,23,0.06)]" />
      <span class="font-extrabold text-lg sm:text-xl">ProjectTracker</span>
    </router-link>

    <!-- Desktop links -->
    <div class="hidden md:flex items-center gap-3 sm:gap-4">
      <button
        v-for="l in links"
        :key="l.id"
        @click="scrollTo(l.id)"
        class="relative px-3 py-1.5 font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        :class="activeSection === l.id ? 'text-blue-600' : ''"
      >
        <span>{{ l.label }}</span>
        <span
          class="absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300"
          :style="{ width: activeSection === l.id ? '100%' : '0' }"
        />
      </button>

      <router-link
        to="/login"
        class="inline-flex px-3 py-2 rounded-xl text-white font-bold bg-blue-500 hover:bg-blue-600 transition-colors text-sm sm:text-base"
      >Login</router-link>
    </div>

   <button
  @click="toggleMenu"
  class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg
         text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
  aria-label="Open menu"
  :aria-expanded="menuOpen ? 'true' : 'false'"
>
  
  <svg v-if="!menuOpen" viewBox="0 0 24 24" class="w-6 h-6" aria-hidden="true">
    <path d="M4 6h16M4 12h16M4 18h16"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>


  <svg v-else viewBox="0 0 24 24" class="w-6 h-6" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
</button>
  </div>

  <!-- Mobile panel -->
  <transition name="fade-slide">
    <div v-if="menuOpen" class="md:hidden border-t bg-white/95 backdrop-blur">
      <div class="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
        <button
          v-for="l in links"
          :key="l.id"
          @click="scrollTo(l.id)"
          class="text-left px-3 py-2 rounded-lg transition-colors"
          :class="activeSection === l.id ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'"
        >
          {{ l.label }}
        </button>

        <router-link
          to="/login"
          class="mt-2 inline-flex w-full justify-center px-3 py-2 rounded-xl text-white font-bold bg-blue-500 hover:bg-blue-600 transition-colors"
        >Login</router-link>
      </div>
    </div>
  </transition>
</nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-5 pt-7 pb-0 flex flex-col gap-5">
      <!-- Hero -->
      <section
        id="section1"
        class="relative min-h-[480px] sm:min-h-[520px] rounded-xl bg-white shadow-[0_18px_50px_rgba(9,30,63,0.06)]
               overflow-hidden grid md:grid-cols-2 place-items-center px-5"
      >
        <!-- Decorative lines -->
        <svg viewBox="0 0 1200 380" class="absolute left-1/2 -translate-x-1/2 -bottom-36 w-[1200px] h-[380px] opacity-15 pointer-events-none">
          <path d="M10,300 C280,60 920,60 1190,300" fill="none" stroke="#0a5b72" stroke-width="2" stroke-linecap="round" />
        </svg>
        <svg viewBox="0 0 1400 400" class="absolute left-[4%] top-[8%] w-16 h-16 opacity-90 pointer-events-none">
          <circle cx="30" cy="30" r="10" fill="#e6f2ff" stroke="#bfe1ff" stroke-width="2" />
        </svg>

        <!-- Image bubble -->
        <div class="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-b from-[#eaf6ff] to-white
                    flex items-center justify-center shadow-[0_26px_70px_rgba(6,43,79,0.10)]
                    border-[8px] sm:border-[10px] border-[rgba(6,43,79,0.04)]">
          <img :src="sec1" alt="sec1" class="w-[150px] h-[140px] sm:w-[170px] sm:h-[160px] rounded-[60px]" />
        </div>

        <!-- Copy -->
        <div class="relative z-10 max-w-3xl flex flex-col gap-3 sm:gap-4 text-left">
          <div class="text-[#0a66c2] font-bold tracking-wider text-xs sm:text-sm">Tracker</div>
          <h1 class="m-0 p-0 text-4xl sm:text-5xl leading-tight text-[#071a2a] font-black tracking-tight">
            <span ref="typeEl" aria-live="polite" />
            <span class="sr-only">typewriter headline</span>
          </h1>
          <p class="m-0 p-0 text-slate-500 max-w-[780px] text-sm sm:text-base">
            Our project is a Web and Desktop application designed to manage and track projects, helping teams stay organized and productive.
          </p>
        </div>
      </section>

      <!-- Features -->
      <section
        id="section2"
        class="relative rounded-xl bg-white shadow-[0_18px_50px_rgba(9,30,63,0.06)]
               overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 p-5 sm:p-12"
      >
        <svg viewBox="0 0 1200 380" class="absolute left-1/2 -translate-x-1/2 -top-36 w-[1200px] h-[380px] opacity-15 pointer-events-none rotate-180">
          <path d="M10,300 C280,60 920,60 1190,300" fill="none" stroke="#0a5b72" stroke-width="2" stroke-linecap="round" />
        </svg>

        <div class="basis-full md:basis-[48%] space-y-2 text-center md:text-left">
          <h2 class="m-0 text-xl sm:text-2xl text-[#071a2a] font-extrabold">✨ Key Features</h2>
          <p class="m-0 text-slate-500 text-[14px] sm:text-[15px] leading-relaxed">
            Core capabilities designed to make project management smarter, faster, and more reliable — web & desktop in perfect sync.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
          <div class="bg-gradient-to-b from-[#fbfdff] to-[#f7fbff] rounded-xl p-4 text-center shadow-[0_8px_30px_rgba(9,30,63,0.04)] space-y-3">
            <svg width="64" height="64" viewBox="0 0 64 64" class="mx-auto" aria-hidden>
              <circle cx="32" cy="32" r="29" stroke="#0a66c2" stroke-width="1.6" fill="none"/>
              <rect x="18" y="20" width="6" height="24" rx="1.5" fill="#0a66c2" opacity="0.95"/>
              <rect x="30" y="16" width="6" height="28" rx="1.5" fill="#60a5fa" opacity="0.95"/>
              <rect x="42" y="24" width="6" height="20" rx="1.5" fill="#7dd3fc" opacity="0.95"/>
            </svg>
            <h3 class="m-0 text-[15px] text-[#052233] font-extrabold">Project &amp; Task Management</h3>
            <p class="m-0 text-slate-600 text-[13px] leading-snug">Create projects, assign members and track progress with clarity.</p>
          </div>

          <div class="rounded-xl p-4 text-center shadow-[0_8px_30px_rgba(9,30,63,0.04)] space-y-3 bg-blue-50">
            <svg width="64" height="64" viewBox="0 0 64 64" class="mx-auto" aria-hidden>
              <circle cx="32" cy="32" r="29" stroke="#0a66c2" stroke-width="1.6" fill="none"/>
              <path d="M12 36 A20 20 0 0 1 52 36" stroke="#0a66c2" stroke-width="2" stroke-linecap="round" fill="none"/>
              <path d="M32 32 L44 24" stroke="#0a66c2" stroke-width="2" stroke-linecap="round" />
              <circle cx="32" cy="32" r="2.2" fill="#0a66c2"/>
            </svg>
            <h3 class="m-0 text-[15px] text-[#052233] font-extrabold">Smart Dashboard</h3>
            <p class="m-0 text-slate-600 text-[13px] leading-snug">Overview of projects and completion metrics for fast decisions.</p>
          </div>

          <div class="rounded-xl p-4 text-center shadow-[0_8px_30px_rgba(9,30,63,0.04)] space-y-3 bg-blue-50">
            <svg width="64" height="64" viewBox="0 0 64 64" class="mx-auto" aria-hidden>
              <circle cx="32" cy="32" r="29" stroke="#0a66c2" stroke-width="1.6" fill="none"/>
              <text x="32" y="38" text-anchor="middle" font-size="18" font-weight="700" fill="#0a66c2"
                    font-family="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial">AI</text>
            </svg>
            <h3 class="m-0 text-[15px] text-[#052233] font-extrabold">AI-Powered Insights</h3>
            <p class="m-0 text-slate-600 text-[13px] leading-snug">Auto summaries, progress % and deadline predictions for admins.</p>
          </div>

          <div class="bg-gradient-to-b from-[#fbfdff] to-[#f7fbff] rounded-xl p-4 text-center shadow-[0_8px_30px_rgba(9,30,63,0.04)] space-y-3">
            <svg width="64" height="64" viewBox="0 0 64 64" class="mx-auto" aria-hidden>
              <circle cx="32" cy="32" r="29" stroke="#0a66c2" stroke-width="1.6" fill="none"/>
              <path d="M44 20v6h-6" stroke="#0a66c2" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              <path d="M20 44v-6h6" stroke="#0a66c2" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              <path d="M46 18 A18 18 0 0 0 18 46" stroke="#0a66c2" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            </svg>
            <h3 class="m-0 text-[15px] text-[#052233] font-extrabold">Seamless Integration</h3>
            <p class="m-0 text-slate-600 text-[13px] leading-snug">Real-time sync between web and desktop keeps users up-to-date.</p>
          </div>
        </div>
      </section>

      <!-- Tour -->
      <section id="section3" class="rounded-xl bg-white shadow-[0_8px_30px_rgba(16,42,67,0.06)] p-5 ">
        <div class="flex gap-6 justify-center mb-5  ">
          <button
            @click="activeTab = 'desktop'"
            class="relative px-5 py-2 font-semibold transition-colors"
            :class="activeTab === 'desktop' ? 'text-blue-600' : 'text-slate-700 hover:text-slate-900'"
          >
            💻 Desktop
            <span class="absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300"
                  :style="{ width: activeTab === 'desktop' ? '100%' : '0' }" />
          </button>
          <button
            @click="activeTab = 'web'"
            class="relative px-5 py-2 font-semibold transition-colors"
            :class="activeTab === 'web' ? 'text-blue-600' : 'text-slate-700 hover:text-slate-900'"
          >
            🌐 Web
            <span class="absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300"
                  :style="{ width: activeTab === 'web' ? '100%' : '0' }" />
          </button>
        </div>

        <transition name="fade-slide" mode="out-in">
          <div :key="activeTab">
            <DesktopContent v-if="activeTab === 'desktop'" />
            <WebContent v-else />
          </div>
        </transition>
      </section>

      <!-- Footer -->
      <TeamFooter :members="team" class="mt-0" />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

/* assets */
const logo = new URL('../assets/تصميم بدون عنوان.png', import.meta.url).href
const sec1  = new URL('../assets/section1.png', import.meta.url).href

import DesktopContent from '../pages/DesktopContent.vue'
import WebContent     from '../pages/WebContent.vue'
import TeamFooter     from '../components/Footer.vue'

/* --- Nav state --- */
const navRef = ref(null)
const menuOpen = ref(false)
const activeSection = ref('section1')
const links = [
  { id: 'section1', label: 'Home' },
  { id: 'section2', label: 'About' },
  { id: 'section3', label: 'Overview' },
]

function toggleMenu () {
  menuOpen.value = !menuOpen.value
}

/* smooth scroll that accounts for sticky nav height + close mobile menu */
function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const navH = navRef.value?.offsetHeight ?? 0
  const top = el.getBoundingClientRect().top + window.scrollY - (navH + 12)
  window.scrollTo({ top, behavior: 'smooth' })
  menuOpen.value = false
}

/* highlight active link */
let observer
function onResize() {
  if (window.innerWidth >= 768) menuOpen.value = false
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.isIntersecting && (activeSection.value = e.target.id))
  }, { threshold: 0.55 })

  links.forEach(l => {
    const sec = document.getElementById(l.id)
    if (sec) observer.observe(sec)
  })

  window.addEventListener('resize', onResize)

  // Particles (optional — requires CDN script in index.html)
  const cfg = {
    particles: {
      number: { value: 40, density: { enable: true, value_area: 300 } },
      color: { value: '#0a5b72' }, shape: { type: 'circle' }, opacity: { value: 0.3 },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 25, color: '#0a5b72', opacity: 0.3, width: 1 },
      move: { enable: true, speed: 1.2 }
    },
    interactivity: {
      events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
      modes: { repulse: { distance: 100 }, push: { particles_nb: 3 } }
    },
    retina_detect: true
  }
  if (window.particlesJS) window.particlesJS('particles-js', cfg)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('resize', onResize)
  clearInterval(typing)
  clearTimeout(pauseTm)
})

/* --- Tabs --- */
const activeTab = ref('desktop')

/* --- Team (footer) --- */
const team = [
  { name: 'Abdulmajeed Alromaih', role: 'Full-Stack Engineer', linkedin: 'https://www.linkedin.com/in/abdulmajeed-alromaih-054891297/', github: 'https://github.com/your-handle' },
  { name: 'Fahad Alqahtani', role: 'Full-Stack Engineer', linkedin: 'https://www.linkedin.com/in/fahd-alghtani246/', github: 'https://github.com/teammate2' },
  { name: 'Abdullah Alzubaidi', role: 'Full-Stack Engineer',  linkedin: 'https://www.linkedin.com/in/abdullah-alzubaidii?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', github: 'https://github.com/teammate3' },
  { name: 'Ali Almutiri', role: 'UI/UX Designer',    linkedin: 'https://www.linkedin.com/in/teammate4', github: 'https://github.com/teammate4' }
]

/* --- Typewriter (loop + cleanup) --- */
const typeEl = ref(null)
const phrases = [
  'Our project',
  'Manage & track projects',
  'Stay organized and productive'
]
let twIdx = 0, charIdx = 0, typing, pauseTm

function startTyping() {
  const el = typeEl.value
  if (!el) return
  el.textContent = ''
  typing = setInterval(() => {
    const phrase = phrases[twIdx]
    if (charIdx < phrase.length) {
      el.textContent += phrase.charAt(charIdx++)
    } else {
      clearInterval(typing)
      pauseTm = setTimeout(() => {
        const del = setInterval(() => {
          if (el.textContent.length) {
            el.textContent = el.textContent.slice(0, -1)
          } else {
            clearInterval(del)
            twIdx = (twIdx + 1) % phrases.length
            charIdx = 0
            startTyping()
          }
        }, 28)
      }, 900)
    }
  }, 65)
}

onMounted(() => { startTyping() })
</script>

<style scoped>
/* Section content transitions for tab switch */
.fade-slide-enter-active,
.fade-slide-leave-active { transition: all 0.35s ease; }
.fade-slide-enter-from { opacity: 0; transform: translateY(10px); }
.fade-slide-enter-to   { opacity: 1; transform: translateY(0); }
.fade-slide-leave-from { opacity: 1; transform: translateY(0); }
.fade-slide-leave-to   { opacity: 0; transform: translateY(-10px); }
</style>
