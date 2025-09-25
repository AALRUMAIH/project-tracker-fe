<template>
  <div class="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
    <div class="p-6">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-lg font-medium text-gray-900">{{ project.title }}</h4>
        <TaskStatusBadge :status="project.status" />
      </div>
      
      <p class="text-gray-600 mb-4 line-clamp-2">{{ project.description }}</p>
      
      <div class="text-sm text-gray-500 mb-4 space-y-1">
        <p>Start: {{ formatDate(project.startProject) }}</p>
        <p>End: {{ formatDate(project.endProject) }}</p>
      </div>
      
      <div class="flex justify-between items-center">
       
        <button
          @click="$emit('view', project)"
          class="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TaskStatusBadge from '@/components/tasks/TaskStatusBadge.vue'
import { formatDate } from '@/utils/helpers'

export default {
  name: 'ProjectCard',
  components: {
    TaskStatusBadge
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  emits: ['view'],
  setup() {
    return {
      formatDate
    }
  }
}
</script>
