import api from './api'

export const adminService = {
  // 1) fetch all users
  async getAllUsers() {
    const { data } = await api.get('/ADMIN/users')
    return data
  },

  // 2) change a user’s role
  async changeUserRole(userId, role) {
    const { data } = await api.put(`/ADMIN/change-role/${userId}`, { role })
    return data
  },

  // 3) toggle active/inactive
  async updateUserStatus(userId, isActive) {
    const { data } = await api.put(`/ADMIN/user-status/${userId}`, { active: isActive })
    return data
  }
}
