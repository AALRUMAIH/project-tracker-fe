<template>
  <AppLayout>
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-semibold text-gray-900">Projects</h1>
          <p class="mt-1 text-sm text-gray-600">
            Manage and track your projects
          </p>
        </div>
        <button
          v-if="authStore.isProjectManager"
          @click="showCreateModal = true"
          class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <i class="fas fa-plus mr-2"></i>
          New Project
        </button>
      </div>

      <ProjectList />

      <ProjectForm
        v-if="showCreateModal"
        @close="showCreateModal = false"
        @created="handleProjectCreated"
      />
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from '@/components/common/AppLayout.vue'
import ProjectList from '@/components/projects/ProjectList.vue'
import ProjectForm from '@/components/projects/ProjectForm.vue'
import { useAuthStore } from '@/store/modules/auth'
import { useProjectsStore } from '@/store/modules/projects'
import { ref, onMounted } from 'vue'

export default {
  name: 'Projects',
  components: {
    AppLayout,
    ProjectList,
    ProjectForm
  },
  setup() {
    const authStore = useAuthStore()
    const projectsStore = useProjectsStore()
    const showCreateModal = ref(false)

    const handleProjectCreated = () => {
      showCreateModal.value = false
      projectsStore.fetchProjects()
    }

    onMounted(() => {
      projectsStore.fetchProjects()
    })

    return {
      authStore,
      projectsStore,
      showCreateModal,
      handleProjectCreated
    }
  }
}
</script>
