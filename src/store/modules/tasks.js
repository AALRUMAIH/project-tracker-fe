import { defineStore } from 'pinia'
import { taskService } from '@/services/task.service'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    isLoading: false
  }),

  getters: {
    completedTasks: (state) => state.tasks.filter(t => t.status === 'COMPLETED'),
    inProgressTasks: (state) => state.tasks.filter(t => t.status === 'IN_PROGRESS'),
    totalTasks: (state) => state.tasks.length,
    tasksByProject: (state) => (projectId) => {
  return state.tasks.filter(task => task.projectId === projectId)
}
  },

  actions: {
    async fetchTasks(projectId) {
      this.isLoading = true
      try {
       const fetched = await taskService.getAll(projectId)
    console.log('Fetched tasks:', fetched) // <-- ADD THIS LINE
    this.tasks = fetched
      } catch (error) {
        console.error('Error fetching tasks:', error)
      } finally {
        this.isLoading = false
      }
    },

    async createTask(taskData) {
      try {
        const newTask = await taskService.create(taskData)
        this.tasks.push(newTask)
        return newTask
      } catch (error) {
        throw error
      }
    },

    async updateTaskStatus(taskId, status) {
      try {
        const updatedTask = await taskService.updateStatus(taskId, status)
        const index = this.tasks.findIndex(t => t.id === taskId)
        if (index !== -1) {
          this.tasks[index] = updatedTask
        }
        return updatedTask
      } catch (error) {
        throw error
      }
    },

    async assignTask(taskId, userId) {
      try {
        const updatedTask = await taskService.assign(taskId, userId)
        const index = this.tasks.findIndex(t => t.id === taskId)
        if (index !== -1) {
          this.tasks[index] = updatedTask
        }
        return updatedTask
      } catch (error) {
        throw error
      }
    }
  }
})
