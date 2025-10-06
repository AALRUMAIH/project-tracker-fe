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
       data-aos="fade"
  data-aos-duration="1200"
  data-aos-easing="ease-in-out"
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
          <h1 class="m-0 sm:p-0 p-4 text-4xl sm:text-5xl leading-tight text-[#071a2a] font-black tracking-tight "

          >
            <span 
    class="inline-block overflow-hidden"
    style="min-height: 4rem; min-width: 20ch; text-align:left;"
  >
            <span ref="typeEl" aria-live="polite" />
            </span>
            <span class="sr-only">typewriter headline</span>
          </h1>
          <p class="m-0 p-0 text-slate-500 sm:max-w-[780px] w-[300px] text-sm sm:text-base break-words whitespace-pre-line">
            Our project is a Web and Desktop application designed to manage and track projects, helping teams stay organized and productive.
          </p>
        </div>
      </section>

      <!-- Features -->
      <section
      data-aos="fade-up"
       data-aos-duration="800"
        id="section2"
        class="relative rounded-xl bg-white shadow-[0_18px_50px_rgba(9,30,63,0.06)]
               overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 p-5 sm:p-12"
      >
        <svg viewBox="0 0 1200 380" class="absolute left-1/2 -translate-x-1/2 -top-36 w-[1200px] h-[380px] opacity-15 pointer-events-none rotate-180">
          <path d="M10,300 C280,60 920,60 1190,300" fill="none" stroke="#0a5b72" stroke-width="2" stroke-linecap="round" />
        </svg>

        <div  data-aos="fade-up" class="basis-full md:basis-[48%] space-y-2 text-center md:text-left">
          <h2 data-aos="zoom-in" class="m-0 text-xl sm:text-2xl text-[#071a2a] font-extrabold">✨ Key Features</h2>
          <p data-aos="fade-left" class="m-0 text-slate-500 text-[14px] sm:text-[15px] leading-relaxed">
            Core capabilities designed to make project management smarter, faster, and more reliable — web & desktop in perfect sync.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
          <div data-aos="zoom-in" data-aos-delay="200" class="bg-gradient-to-b from-[#fbfdff] to-[#f7fbff] rounded-xl p-4 text-center shadow-[0_8px_30px_rgba(9,30,63,0.04)] space-y-3">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a66c2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-8 w-8 text-primary" data-lov-id="src/pages/Index.tsx:135:20" data-lov-name="feature.icon" data-component-path="src/pages/Index.tsx" data-component-line="135" data-component-file="Index.tsx" data-component-name="feature.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-primary%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
            <h3 class="m-0 text-[15px] text-[#052233] font-extrabold">Project &amp; Task Management</h3>
            <p class="m-0 text-slate-600 text-[13px] leading-snug">Create projects, assign members and track progress with clarity.</p>
          </div>

          <div data-aos="zoom-in" data-aos-delay="400" class="rounded-xl p-4 text-center shadow-[0_8px_30px_rgba(9,30,63,0.04)] space-y-3 bg-blue-50">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a66c2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column h-8 w-8 text-primary" data-lov-id="src/pages/Index.tsx:135:20" data-lov-name="feature.icon" data-component-path="src/pages/Index.tsx" data-component-line="135" data-component-file="Index.tsx" data-component-name="feature.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-primary%22%7D"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
            <h3 class="m-0 text-[15px] text-[#052233] font-extrabold">Smart Dashboard</h3>
            <p class="m-0 text-slate-600 text-[13px] leading-snug">Overview of projects and completion metrics for fast decisions.</p>
          </div>

          <div data-aos="zoom-in" data-aos-delay="600" class="rounded-xl p-4 text-center shadow-[0_8px_30px_rgba(9,30,63,0.04)] space-y-3 bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a66c2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap h-8 w-8 text-primary" data-lov-id="src/pages/Index.tsx:135:20" data-lov-name="feature.icon" data-component-path="src/pages/Index.tsx" data-component-line="135" data-component-file="Index.tsx" data-component-name="feature.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-primary%22%7D"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            <h3 class="m-0 text-[15px] text-[#052233] font-extrabold">AI-Powered Insights</h3>
            <p class="m-0 text-slate-600 text-[13px] leading-snug">Auto summaries, progress % and deadline predictions for admins.</p>
          </div>

          <div data-aos="zoom-in" data-aos-delay="800" class="bg-gradient-to-b from-[#fbfdff] to-[#f7fbff] rounded-xl p-4 text-center shadow-[0_8px_30px_rgba(9,30,63,0.04)] space-y-3">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a66c2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-8 w-8 text-primary" data-lov-id="src/pages/Index.tsx:135:20" data-lov-name="feature.icon" data-component-path="src/pages/Index.tsx" data-component-line="135" data-component-file="Index.tsx" data-component-name="feature.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-primary%22%7D"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <h3 class="m-0 text-[15px] text-[#052233] font-extrabold">Seamless Integration</h3>
            <p class="m-0 text-slate-600 text-[13px] leading-snug">Real-time sync between web and desktop keeps users up-to-date.</p>
          </div>
        </div>
      </section>

      <!-- Tour -->
      <section id="section3" class="rounded-xl bg-white shadow-[0_8px_30px_rgba(16,42,67,0.06)] p-1 ">
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
        <section>
        <sectiontech/>
        </section>
      <!-- Footer -->
      <TeamFooter :members="team" class="mt-0 text-amber-950 " />
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
import sectiontech from './sectiontech.vue'

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
  { name: 'Abdulmajeed Alromaih', role: 'Full-Stack Engineer', linkedin: 'https://www.linkedin.com/in/abdulmajeed-alromaih-054891297/', github: 'https://github.com/AALRUMAIH' },
  { name: 'Fahad Alqahtani', role: 'Full-Stack Engineer', linkedin: 'https://www.linkedin.com/in/fahd-alghtani246/', github: 'https://github.com/fahadalghtni' },
  { name: 'Abdullah Alzubaidi', role: 'Full-Stack Engineer',  linkedin: 'https://www.linkedin.com/in/abdullah-alzubaidii?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', github: 'https://github.com/AbdullahAli1999' },
  { name: 'Ali Almutiri', role: 'Full-Stack Engineer',    linkedin: 'https://www.linkedin.com/in/ali-almutairi-971590277/', github: 'https://github.com/Aliz1010' }
]

/* --- Typewriter (loop + cleanup) --- */
const typeEl = ref(null)
const phrases = [
  'Our project',
  'Stay organized ',
  'Manage projects'
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

</style>

