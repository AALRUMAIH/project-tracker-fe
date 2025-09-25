<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
      <div class="px-6 py-4 border-b border-gray-200">
        <h3 class="text-lg font-medium text-gray-900">
          {{ project ? 'Edit Project' : 'Create New Project' }}
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
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
          <input
            v-model="form.startDate"
            type="date"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">End Date</label>
          <input
            v-model="form.endDate"
            type="date"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
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
            {{ isLoading ? 'Saving...' : (project ? 'Update' : 'Create') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useProjectsStore } from '@/store/modules/projects'
import { reactive, ref, onMounted } from 'vue'
import { validateDateRange } from '@/utils/validators'

export default {
  name: 'ProjectForm',
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  emits: ['close', 'created', 'updated'],
  setup(props, { emit }) {
    const projectsStore = useProjectsStore()
    const isLoading = ref(false)
    const error = ref('')
    
    const form = reactive({
      title: '',
      description: '',
      startDate: '',
      endDate: ''
    })

    const handleSubmit = async () => {
      error.value = ''
      
      if (!validateDateRange(form.startDate, form.endDate)) {
        error.value = 'End date must be after start date'
        return
      }
      
      isLoading.value = true
      
      try {
        if (props.project) {
          await projectsStore.updateProject(props.project.id, form)
          emit('updated')
        } else {
          await projectsStore.createProject(form)
          emit('created')
        }
      } catch (err) {
        error.value = err.response?.data?.message || 'Operation failed'
      } finally {
        isLoading.value = false
      }
    }

    onMounted(() => {
      if (props.project) {
        Object.assign(form, props.project)
      }
    })

    return {
      form,
      error,
      isLoading,
      handleSubmit
    }
  }
}
</script>
