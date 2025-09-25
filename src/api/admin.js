import api from './axios'

// list all users
export const fetchUsers = () => api.get('/api/admin/users')

// create a new user
export const createUser = dto => api.post('/api/admin/users', dto)