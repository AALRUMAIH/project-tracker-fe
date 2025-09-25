// src/api/tasks.js
import { api } from '../axios'

export function updateTaskStatus(taskId, status) {
 
  return api.patch(
    `/employee/task/${taskId}/status`,
    null,
    { params: { status }}
  )
}

export function fetchCommentsByTask(taskId) {
  return api.get(`/employee/task/${taskId}/comments`)
}


export function postComment(taskId, text) {
  return api.post(`/employee/task/${taskId}/comments`, { text })
}


