<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
      <div class="px-6 py-4 border-b border-gray-200">
        <h3 class="text-lg font-medium text-gray-900">
          {{ task ? 'Edit Task' : 'Create New Task' }}
        </h3>
      </div>
      
      <form @submit.prevent="handleSubmit" class="p-6 space-y-4">
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {{ error }}
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            v-model="form.title"
            type="text"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            v-model="form.description"
            rows="3"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        
        <div v-if="!projectId">
          <label class="block text-sm font-medium text-gray-700 mb-1">Project</label>
          <select
            v-model="form.projectId"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Project</option>
            <option v-for="project in projectsStore.projects" :key="project.id" :value="project.id">
              {{ project.title }}
            </option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Assign To</label>
          <select
            v-model="form.assignedTo"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Team Member</option>
            <option v-for="user in teamMembers" :key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>
        </div>
        
        <div class="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            @click="$emit('close')"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            :disabled="isLoading"
            class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {{ isLoading ? 'Saving...' : (task ? 'Update' : 'Create') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useTasksStore } from '@/store/modules/tasks'
import { useProjectsStore } from '@/store/modules/projects'
import { reactive, ref, onMounted } from 'vue'

export default {
  name: 'TaskForm',
  props: {
    task: {
      type: Object,
      default: null
    },
    projectId: {
      type: Number,
      default: null
    }
  },
  emits: ['close', 'created', 'updated'],
  setup(props, { emit }) {
    const tasksStore = useTasksStore()
    const projectsStore = useProjectsStore()
    const isLoading = ref(false)
    const error = ref('')
    
    const form = reactive({
      title: '',
      description: '',
      projectId: props.projectId || '',
      assignedTo: ''
    })

    // Mock team members - in real app, fetch from API
    const teamMembers = ref([
      { id: 2, name: 'John Doe' },
      { id: 3, name: 'Jane Smith' },
      { id: 4, name: 'Mike Johnson' }
    ])

    const handleSubmit = async () => {
      error.value = ''
      isLoading.value = true
      
      try {
        if (props.task) {
          await tasksStore.updateTask(props.task.id, form)
          emit('updated')
        } else {
          await tasksStore.createTask(form)
          emit('created')
        }
      } catch (err) {
        error.value = err.response?.data?.message || 'Operation failed'
      } finally {
        isLoading.value = false
      }
    }

    onMounted(() => {
      if (props.task) {
        Object.assign(form, props.task)
      }
      if (!projectsStore.projects.length) {
        projectsStore.fetchProjects()
      }
    })

    return {
      form,
      error,
      isLoading,
      teamMembers,
      projectsStore,
      handleSubmit
    }
  }
}
</script>
