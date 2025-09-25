<template>
  <div class="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
    <div class="flex justify-between items-start mb-2">
      <h4 class="font-medium text-gray-900">{{ task.title }}</h4>
      <TaskStatusBadge :status="task.status" />
    </div>
    
    <p class="text-sm text-gray-600 mb-3">{{ task.description }}</p>
    
    <div class="flex justify-between items-center text-sm text-gray-500">
      <span>Assigned to: {{ task.assignedToEmail }}</span>
      
      <select
        v-if="canUpdateTask"
        @change="updateStatus($event.target.value)"
        :value="task.status"
        class="text-xs border border-gray-300 rounded px-2 py-1"
      >
        <option value="TO_DO">To Do</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="REVIEWED">Reviewed</option>
        <option value="COMPLETED">Completed</option>
      </select>
    </div>
  </div>
</template>

<script>
import TaskStatusBadge from './TaskStatusBadge.vue'
import { useAuthStore } from '@/store/modules/auth'
import { useTasksStore } from '@/store/modules/tasks'
import { computed } from 'vue'

export default {
  name: 'TaskCard',
  components: {
    TaskStatusBadge
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  emits: ['status-updated'],
  setup(props, { emit }) {
    const authStore = useAuthStore()
    const tasksStore = useTasksStore()

    // Mock team members - in real app, fetch from API
    const teamMembers = [
      { id: 2, name: 'John Doe' },
      { id: 3, name: 'Jane Smith' },
      { id: 4, name: 'Mike Johnson' }
    ]

    const canUpdateTask = computed(() => {
      return authStore.isProjectManager || props.task.assignedTo === authStore.user?.id
    })

    const getUserName = (userId) => {
      const user = teamMembers.find(u => u.id === userId)
      return user ? user.name : 'Unassigned'
    }

    const updateStatus = async (newStatus) => {
      try {
        await tasksStore.updateTaskStatus(props.task.id, newStatus)
        emit('status-updated')
      } catch (error) {
        console.error('Error updating task status:', error)
      }
    }

    return {
      canUpdateTask,
      getUserName,
      updateStatus
    }
  }
}
</script>
