<template>
  <AppLayout>
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-semibold text-gray-900">Tasks</h1>
          <p class="mt-1 text-sm text-gray-600">
            Manage and track your tasks
          </p>
        </div>
        <button
          v-if="authStore.isProjectManager"
          @click="showCreateModal = true"
          class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <i class="fas fa-plus mr-2"></i>
          New Task
        </button>
      </div>

      <TaskList />

      <TaskForm
        v-if="showCreateModal"
        @close="showCreateModal = false"
        @created="handleTaskCreated"
      />
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from '@/components/common/AppLayout.vue'
import TaskList from '@/components/tasks/TaskList.vue'
import TaskForm from '@/components/tasks/TaskForm.vue'
import { useAuthStore } from '@/store/modules/auth'
import { useTasksStore } from '@/store/modules/tasks'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Tasks',
  components: {
    AppLayout,
    TaskList,
    TaskForm
  },
  setup() {
    const authStore = useAuthStore()
    const tasksStore = useTasksStore()
    const showCreateModal = ref(false)
    const route = useRoute() 
    const projectId = route.params.id

    const handleTaskCreated = () => {
      showCreateModal.value = false
      tasksStore.fetchTasks()
    }

  onMounted(() => {
  tasksStore.fetchTasks(projectId)
})

    return {
      authStore,
      tasksStore,
      showCreateModal,
      handleTaskCreated
    }
  }
}
</script>
