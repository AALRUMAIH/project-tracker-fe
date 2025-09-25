<template>
  <div v-if="show" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl max-w-sm w-full mx-4">
      <div class="p-6">
        <div class="flex items-center mb-4">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <i class="fas fa-exclamation-triangle text-red-600"></i>
          </div>
        </div>
        
        <div class="text-center">
          <h3 class="text-lg font-medium text-gray-900 mb-2">{{ title }}</h3>
          <p class="text-sm text-gray-500 mb-6">{{ message }}</p>
        </div>
        
        <div class="flex space-x-3">
          <button
            @click="$emit('cancel')"
            class="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            @click="$emit('confirm')"
            class="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Confirm Action'
    },
    message: {
      type: String,
      default: 'Are you sure you want to proceed?'
    },
    confirmText: {
      type: String,
      default: 'Confirm'
    }
  },
  emits: ['confirm', 'cancel']
}
</script>
