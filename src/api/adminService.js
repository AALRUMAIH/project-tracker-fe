// src/api/adminService.js
import { api } from './axios'  

export const adminService = {
  getAllUsers() {
    return api.get('/ADMIN/users')
  },
  getAllProjects() {
    return api.get('/ADMIN/projects')
  },
  getProjectDetails(projectId) {
    return api.get(`/ADMIN/projects/${projectId}/details`)
  },
  changeUserRole(userId, role) {
    return api.put(`/ADMIN/change-role/${userId}`, { role })
  },
  updateUserStatus(userId, active) {
    return api.put(`/ADMIN/user-status/${userId}`, { active })
  }
}

