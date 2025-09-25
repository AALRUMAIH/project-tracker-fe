import { defineStore } from 'pinia'
import { dashboardService } from '@/services/dashboard.service'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    stats: {
      totalProjects: 0,
      tasksReviewed: 0,
      tasksProgress: 0,
      tasksToDo:0,
      tasksCompleted: 0,
      projectCompleted:0,
      projectInProgress:0,
      newProject:0,
      totalTasks:0
    },
    recentProjects: [],
    recentTasks: [],
    isLoading: false
  }),

  actions: {
    async fetchDashboardData() {
      this.isLoading = true
      try {
        const data = await dashboardService.getDashboardData()
        this.stats = data
        console.log(this.stats.totalProjects);
        this.recentProjects = data.recentProjects
        this.recentTasks = data.recentTasks
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        this.isLoading = false
      }
    }
  }
})
