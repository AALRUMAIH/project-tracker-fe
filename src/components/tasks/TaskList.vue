<template>
  <div v-if="tasksStore.isLoading" class="flex justify-center py-8">
    <LoadingSpinner />
  </div>
  
  <div v-else class="bg-white rounded-lg shadow-sm border overflow-hidden">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Task
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Project
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Assigned To
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="task in tasksStore.tasks" :key="task.id">
          <td class="px-6 py-4 whitespace-nowrap">
            <div>
              <div class="text-sm font-medium text-gray-900">{{ task.title }}</div>
              <div class="text-sm text-gray-500">{{ task.description }}</div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {{ getProjectName(task.projectId) }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {{ getUserName(task.assignedTo) }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <TaskStatusBadge :status="task.status" />
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <select
              v-if="canUpdateTask(task)"
              @change="updateTaskStatus(task, $event.target.value)"
              :value="task.status"
              class="text-sm border border-gray-300 rounded px-2 py-1"
            >
              <option value="TO_DO">To Do</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="REVIEWED">Reviewed</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useTasksStore } from '@/store/modules/tasks'
import { useProjectsStore } from '@/store/modules/projects'
import { useAuthStore } from '@/store/modules/auth'
import TaskStatusBadge from './TaskStatusBadge.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'

export default {
  name: 'TaskList',
  components: {
    TaskStatusBadge,
    LoadingSpinner
  },
  setup() {
    const tasksStore = useTasksStore()
    const projectsStore = useProjectsStore()
    const authStore = useAuthStore()

    // Mock team members - in real app, fetch from API
    const teamMembers = [
      { id: 2, name: 'John Doe' },
      { id: 3, name: 'Jane Smith' },
      { id: 4, name: 'Mike Johnson' }
    ]

    const getProjectName = (projectId) => {
      const project = projectsStore.projects.find(p => p.id === projectId)
      return project ? project.title : 'Unknown Project'
    }

    const getUserName = (userId) => {
      const user = teamMembers.find(u => u.id === userId)
      return user ? user.name : 'Unassigned'
    }

    const canUpdateTask = (task) => {
      return authStore.isProjectManager || task.assignedTo === authStore.user?.id
    }

    const updateTaskStatus = async (task, newStatus) => {
      try {
        await tasksStore.updateTaskStatus(task.id, newStatus)
      } catch (error) {
        console.error('Error updating task status:', error)
      }
    }

    return {
      tasksStore,
      getProjectName,
      getUserName,
      canUpdateTask,
      updateTaskStatus
    }
  }
}
</script>
