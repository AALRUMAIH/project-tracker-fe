// src/api/taskService.js
import { api } from './axios'

export function addUser(userInfo) {
    return api.post('/auth/register', userInfo)

 
}
export function deleteUser(userId) {
    return api.delete(`/auth/users/${userId}`)
} 