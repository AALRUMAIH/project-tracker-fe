// src/api/taskService.js
import { api } from './axios'

export const taskService = {
  assignTask(taskId, userId) {
    return api.post(`/tasks/${taskId}/assign`, { userId })
  },
  updateStatus(taskId, status) {
    return api.patch(`/tasks/${taskId}/status`, { status })
  },
  getTasksByProject(projectId) {
    return api.get(`/projects/${projectId}/tasks`)
  },
  deleteTask(taskId) {
    return api.delete(`api/task/delete/${taskId}`)
  },
  getProjectDetails(projectId) {
    return api.get(`/api/task/${projectId}/details`)
  },
  createTask(payload) {
    
    return api.post('/api/project-manager/projects/tasks', payload)
  },
   getTaskById(taskId) {
    return api.get(`/api/task/${taskId}`)
  },
}
