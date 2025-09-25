<template>
  <div v-if="projectsStore.isLoading" class="flex justify-center py-8">
    <LoadingSpinner />
  </div>
  
  <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProjectCard
      v-for="project in projectsStore.projects"
      :key="project.id"
      :project="project"
      @view="viewProject"
    />
  </div>
</template>

<script>
import { useProjectsStore } from '@/store/modules/projects'
import { useRouter } from 'vue-router'
import ProjectCard from './ProjectCard.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import { onMounted } from 'vue'

export default {
  name: 'ProjectList',
  components: {
    ProjectCard,
    LoadingSpinner
  },
  setup() {
    const projectsStore = useProjectsStore()
    const router = useRouter()

    const viewProject = (project) => {
      router.push(`/projects/${project.id}`)
    }
    onMounted(() => {
    projectsStore.fetchProjects()
  })

    return {
      projectsStore,
      viewProject
    }
  }
}
</script>
