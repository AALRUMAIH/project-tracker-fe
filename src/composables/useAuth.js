import { useAuthStore } from '@/store/modules/auth'
import { computed } from 'vue'

export function useAuth() {
  const authStore = useAuthStore()

  const user = computed(() => authStore.user)
  const isAuthenticated = computed(() => authStore.isAuthenticated)
  const isProjectManager = computed(() => authStore.isProjectManager)
  const isTeamMember = computed(() => authStore.isTeamMember)

  const login = async (credentials) => {
    return await authStore.login(credentials)
  }

  const logout = async () => {
    return await authStore.logout()
  }

  const fetchUser = async () => {
    return await authStore.fetchUser()
  }

  return {
    user,
    isAuthenticated,
    isProjectManager,
    isTeamMember,
    login,
    logout,
    fetchUser
  }
}
