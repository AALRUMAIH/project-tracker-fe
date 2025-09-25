import { api } from './axios' // Ensure your axios base config is correct

export const projectService = {
  getProjectById(projectId) {
    return api.get(`/projects/${projectId}`)
  },

  updateProjectStatus(projectId, status) {
    return api.patch(`/projects/${projectId}/status`, { status })
  },

  // Get all projects for Project Manager
  getAllProjectsForPM() {
    return api.get('/projects/all/pm')
  },

  // Get single project details for Project Manager
  getProjectDetailsForPM(projectId) {
    return api.get(`/projects/all/pm`)
  },

  patchProject(projectId, payload) {
    
    return api.patch(`/projects/${projectId}`, payload);
  },
  getMemberEmails(projectId) {
    return api.get(`/projects/geet/${projectId}`)
  },

  addMember(projectId, email) {
  
    return api.post(`/projects/${projectId}/members`, { email })
  },

  removeMember(projectId, email, deleteUser = false) {
  
    return api.delete(`/projects/${projectId}/del/by-email`, {
      params: { email, deleteUser }
    })
  },

  
  suggestUsers(query) {
    return api.get(`/users/suggest`, { params: { q: query } })
  }
}
