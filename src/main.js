import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './assets/css/main.css'
import App from './App.vue'
import 'primeicons/primeicons.css'

import { api } from './api/axios'
import { useAuthStore } from './stores/auth'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mixin({
  mounted() {
    AOS.init({
      duration: 800,   // مدة الحركة بالمللي ثانية
      once: true,      // الحركة تصير مرة وحدة فقط
      easing: 'ease-in-out',
    })
  },
})

const auth = useAuthStore(pinia)
const t = localStorage.getItem('token')
if (t) {
  auth.token = t
  api.defaults.headers.common.Authorization = `Bearer ${t}`
}
auth.role = localStorage.getItem('role') || ''

app.mount('#app')
