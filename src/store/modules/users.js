import { defineStore } from 'pinia'
import { adminService } from '@/services/admin.service'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
    isLoading: false,
    error: null
  }),

  actions: {
    async fetchUsers() {
      this.isLoading = true
      try {
        this.users = await adminService.getAllUsers()
      } catch (e) {
        this.error = e
      } finally {
        this.isLoading = false
      }
    },

    async setRole(userId, role) {
      await adminService.changeUserRole(userId, role)
      // reflect in local state:
      const u = this.users.find(u => u.id === userId)
      if (u) u.role = role
    },

    async setActive(userId, isActive) {
      await adminService.updateUserStatus(userId, isActive)
      const u = this.users.find(u => u.id === userId)
      if (u) u.active = isActive
    }
  }
})
