import { api } from './axios'


export function login({ email, password }) {
  return api.post('/auth/login', { email, password })
}

export function register(dto) {
  return api.post('/auth/register', dto)
}