import { useProjectsStore } from '@/store/modules/projects'
import { computed } from 'vue'

export function useProjects() {
  const projectsStore = useProjectsStore()

  const projects = computed(() => projectsStore.projects)
  const currentProject = computed(() => projectsStore.currentProject)
  const isLoading = computed(() => projectsStore.isLoading)
  const completedProjects = computed(() => projectsStore.completedProjects)
  const inProgressProjects = computed(() => projectsStore.inProgressProjects)

  const fetchProjects = async () => {
    return await projectsStore.fetchProjects()
  }

  const createProject = async (projectData) => {
    return await projectsStore.createProject(projectData)
  }

  const updateProject = async (id, updates) => {
    return await projectsStore.updateProject(id, updates)
  }

  const fetchProject = async (id) => {
    return await projectsStore.fetchProject(id)
  }

  return {
    projects,
    currentProject,
    isLoading,
    completedProjects,
    inProgressProjects,
    fetchProjects,
    createProject,
    updateProject,
    fetchProject
  }
}
