<template>
  <AppLayout>
    <div class="p-6">
      <div v-if="projectsStore.isLoading" class="flex justify-center py-8">
        <LoadingSpinner />
      </div>
      
      <div v-else-if="project" class="space-y-6">
        <!-- Project Header -->
        <div class="bg-white rounded-lg shadow-sm border p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h1 class="text-2xl font-semibold text-gray-900">{{ project.title }}</h1>
              <p class="text-gray-600 mt-2">{{ project.description }}</p>
            </div>
            <TaskStatusBadge :status="project.status" />
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div>
              <p class="text-sm font-medium text-gray-500">Start Date</p>
              <p class="text-sm text-gray-900">{{ formatDate(project.startProject) }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500">End Date</p>
              <p class="text-sm text-gray-900">{{ formatDate(project.endProject) }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500">Created By</p>
              <p class="text-sm text-gray-900">{{project.createdByName || 'Unknown' }}</p>
            </div>
          </div>
        </div>

        <!-- Project Tasks -->
        <div class="bg-white rounded-lg shadow-sm border">
          <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 class="text-lg font-medium text-gray-900">Tasks</h3>
            <button
              v-if="authStore.isProjectManager"
              @click="showCreateTask = true"
              class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
            >
              <i class="fas fa-plus mr-2"></i>
              Add Task
            </button>
          </div>
          
          <div class="p-6">
            <div v-if="projectTasks.length === 0" class="text-center py-8 text-gray-500">
              No tasks found for this project.
            </div>
            
            <div v-else class="space-y-4">
              <TaskCard
                v-for="task in projectTasks"
                :key="task.id"
                :task="task"
                @status-updated="tasksStore.fetchTasks(projectId)"
              />
            </div>
          </div>
        </div>
      </div>

      <TaskForm
        v-if="showCreateTask"
        :project-id="projectId"
        @close="showCreateTask = false"
        @created="handleTaskCreated"
      />
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from '@/components/common/AppLayout.vue'
import TaskStatusBadge from '@/components/tasks/TaskStatusBadge.vue'
import TaskCard from '@/components/tasks/TaskCard.vue'
import TaskForm from '@/components/tasks/TaskForm.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import { useProjectsStore } from '@/store/modules/projects'
import { useTasksStore } from '@/store/modules/tasks'
import { useAuthStore } from '@/store/modules/auth'
import { formatDate } from '@/utils/helpers'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'ProjectDetails',
  components: {
    AppLayout,
    TaskStatusBadge,
    TaskCard,
    TaskForm,
    LoadingSpinner
  },
  setup() {
  
    const route = useRoute()
    const projectsStore = useProjectsStore()
    const tasksStore = useTasksStore()
    const authStore = useAuthStore()
    const showCreateTask = ref(false)
    
    const projectId = computed(() => parseInt(route.params.id))
    const project = computed(() => projectsStore.currentProject)
    const projectTasks = computed(() => tasksStore.tasksByProject(projectId.value))

    console.log("project" +project)
    

    const handleTaskStatusUpdate = () => {
      tasksStore.fetchTasks()
      projectsStore.fetchProject(projectId.value)
    }

    const handleTaskCreated = () => {
      showCreateTask.value = false
      tasksStore.fetchTasks()
    }

    onMounted(() => {
      projectsStore.fetchProject(projectId.value)
      tasksStore.fetchTasks(projectId.value)
    })

    return {
      projectsStore,
      tasksStore,
      authStore,
      project,
      projectTasks,
      projectId,
      showCreateTask,
      formatDate,
      handleTaskStatusUpdate,
      handleTaskCreated
    }
  }
}
</script>
