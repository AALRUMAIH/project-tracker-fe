import api from './api'

export const taskService = {
   /**
   * Fetch all tasks for a given projectId.
   * @param {number|string} projectId
   */
  async getAll(projectId) {
    const response = await api.get(`/employee/project/${projectId}/tasks`)
    return response.data
  },

  async getById(id) {
    const response = await api.get(`/tasks/${id}`)
    return response.data
  },

  async create(taskData) {
    const response = await api.post('/tasks', taskData)
    return response.data
  },

  async update(id, updates) {
    const response = await api.patch(`/tasks/${id}`, updates)
    return response.data
  },

  async updateStatus(id, status) {
    const response = await api.patch(`/tasks/${id}/status`, { status })
    return response.data
  },

  async assign(id, userId) {
    const response = await api.post(`/tasks/${id}/assign`, { userId })
    return response.data
  },

  async delete(id) {
    const response = await api.delete(`/tasks/${id}`)
    return response.data
  }
}
