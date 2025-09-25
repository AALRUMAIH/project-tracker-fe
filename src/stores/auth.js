// src/stores/auth.js
import { defineStore } from 'pinia'
import * as authAPI from '../api/auth'
import { api } from '../api/axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    role:  localStorage.getItem('role')  || ''
  }),
  actions: {
    hydrateFromStorage() {
      const t = localStorage.getItem('token')
      if (t) {
        this.token = t
        api.defaults.headers.common.Authorization = `Bearer ${t}`
      }
      this.role = localStorage.getItem('role') || ''
    },

    async login(creds) {
      const res = await authAPI.login(creds)
      this.token = res.data.token
      this.role  = res.data.role || 'TEAM_MEMBER'
      localStorage.setItem('token', this.token)
      localStorage.setItem('role', this.role)
      // ensure immediate header for subsequent calls in same tick
      api.defaults.headers.common.Authorization = `Bearer ${this.token}`
    },

    async register(dto) {
      const res = await authAPI.register(dto)
      this.token = res.data.token
      localStorage.setItem('token', this.token)
      api.defaults.headers.common.Authorization = `Bearer ${this.token}`
    },

    logout() {
      this.token = ''
      this.role  = ''
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      delete api.defaults.headers.common.Authorization
    }
  }
})
