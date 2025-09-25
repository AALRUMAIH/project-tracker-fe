<!-- src/components/TaskActions.vue -->
<template>
  <div class="space-y-4">
    <div>
      <label>User ID to Assign:</label>
      <input v-model="userId" class="border p-2" type="number" />
      <button @click="assignTask" class="bg-blue-500 text-white px-4 py-2 rounded ml-2">Assign</button>
    </div>

    <div>
      <label>Change Status:</label>
      <select v-model="status" class="border p-2">
        <option value="TO_DO">TO_DO</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="REVIEW">REVIEW</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>
      <button @click="updateStatus" class="bg-green-500 text-white px-4 py-2 rounded ml-2">Update</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { taskService } from '@/api/taskService'

// taskId can be passed via props
const props = defineProps({
  taskId: Number
})

const userId = ref('')
const status = ref('TO_DO')

const assignTask = async () => {
  try {
    const res = await taskService.assignTask(props.taskId, parseInt(userId.value))
    alert(`Assigned to: ${res.data.assignedToUserName}`)
  } catch (e) {
    alert('Failed to assign task')
  }
}

const updateStatus = async () => {
  try {
    const res = await taskService.updateStatus(props.taskId, status.value)
    alert(`Updated to status: ${res.data.status}`)
  } catch (e) {
    alert('Failed to update status')
  }
}
</script>
