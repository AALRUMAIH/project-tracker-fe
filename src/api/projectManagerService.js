import { api } from './axios' // Your configured axios instance

export const projectManagerService = {
  createProject(data) {
    return api.post('/api/project-manager/projects', data)
  },

  // call: assignMember(projectId, email, config?)
  assignMember(projectId, email, config = {}) {
    return api.post(`/projects/${projectId}/members`, { email }, config)
  },
  
  createTask(data) {
    return api.post('/api/project-manager/projects/tasks', data)
  },
   getAllUsers() {
    return api.get('/users')
  },
  getProjectMembers(projectId) {
    return api.get(`/projects/${projectId}/members`)
  }

}
