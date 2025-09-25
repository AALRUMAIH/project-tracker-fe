import { defineStore } from 'pinia'
import { projectService } from '@/services/project.service'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [],
    currentProject: null,
    isLoading: false
  }),

  getters: {
    completedProjects: (state) => state.projects.filter(p => p.status === 'COMPLETED'),
    inProgressProjects: (state) => state.projects.filter(p => p.status === 'IN_PROGRESS'),
    totalProjects: (state) => state.projects.length
  },

  actions: {
    async fetchProjects() {
      this.isLoading = true
      try {
        this.projects = await projectService.getAll()
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        this.isLoading = false
      }
    },

    async createProject(projectData) {
      try {
        const newProject = await projectService.create(projectData)
        this.projects.push(newProject)
        return newProject
      } catch (error) {
        throw error
      }
    },

    async updateProject(id, updates) {
      try {
        const updatedProject = await projectService.update(id, updates)
        const index = this.projects.findIndex(p => p.id === id)
        if (index !== -1) {
          this.projects[index] = updatedProject
        }
        return updatedProject
      } catch (error) {
        throw error
      }
    },

    async fetchProject(id) {
      try {
        this.currentProject = await projectService.getById(id)
        return this.currentProject
      } catch (error) {
        throw error
      }
    }
  }
})
