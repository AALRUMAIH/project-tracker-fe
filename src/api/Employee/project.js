// src/api/projects.js
import { api } from '../axios'


export function fetchProjectsPaged({ page = 0, size = 5, q = null, status = null } = {}) {
  const params = { page, size }
  if (q) params.q = q
  if (status) params.status = status
  return api.get('/employee/project/my', { params })
}

export function fetchTasksByProject(projectId) {
  return api.get(`/employee/project/${projectId}/tasks`)
}

export function fetchProjectById(projectId) { // NEW
  return api.get(`/employee/project/${projectId}/tasks`) // NEW
}