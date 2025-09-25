import api from './api'

export const projectService = {
  async getAll() {
    const response = await api.get('/ADMIN/projects')
    return response.data
  },

  async getById(id) {
    const response = await api.get(`/projects/${id}`)
    return response.data
  },

  async create(projectData) {
    const response = await api.post('/projects', projectData)
    return response.data
  },

  async update(id, updates) {
    const response = await api.patch(`/projects/${id}`, updates)
    return response.data
  },

  async updateStatus(id, status) {
    const response = await api.patch(`/projects/${id}/status`, { status })
    return response.data
  },

  async delete(id) {
    const response = await api.delete(`/projects/${id}`)
    return response.data
  }
}
