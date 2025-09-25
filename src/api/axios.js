// src/api/axios.js
import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://project.faisalalthuwaini.sa',
  timeout: 20000,
})

// Always attach token from localStorage (survives refresh)
api.interceptors.request.use((cfg) => {
  const token = localStorage.getItem('token')
  if (token) {
    cfg.headers.Authorization = `Bearer ${token}`
  }
  return cfg
})

// Optional helper if you later add refresh-tokens (kept here for reference)
function isJwtExpired(token) {
  try {
    const [, b64] = token.split('.')
    const payload = JSON.parse(atob(b64.replace(/-/g, '+').replace(/_/g, '/')))
    if (!payload?.exp) return false
    const nowSec = Math.floor(Date.now() / 1000)
    return payload.exp < (nowSec - 5)
  } catch {
    return false
  }
}

// IMPORTANT: Do NOT wipe localStorage on 401.
// If you need to redirect, do it in route guards after checking token validity.
api.interceptors.response.use(
  (res) => res,
  (err) => {
    // Just pass the error up; let views/guards decide.
    return Promise.reject(err)
  }
)
