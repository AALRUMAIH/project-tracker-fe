<template>
  <div v-if="project" class="space-y-4 p-4 bg-white rounded shadow">
    <h2 class="text-xl font-bold">{{ project.projectTitle }}</h2>
    <p class="text-gray-700">{{ project.description }}</p>
    <div class="text-sm text-gray-500">Status: {{ project.status }}</div>

    <div class="mt-4">
      <label for="status" class="block text-sm font-medium">Update Status</label>
      <select id="status" v-model="newStatus" class="mt-1 p-2 border rounded">
        <option value="NOT_STARTED">NOT_STARTED</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>
      <button @click="updateStatus" class="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Update
      </button>
    </div>
  </div>
  <div v-else class="text-center text-gray-500">Loading project...</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { projectService } from '../api/projectService'

const route = useRoute()
const projectId = route.params.id
const project = ref(null)
const newStatus = ref('')

const fetchProject = async () => {
  const res = await projectService.getProjectById(projectId)
  project.value = res.data
  newStatus.value = res.data.status
}

const updateStatus = async () => {
  await projectService.updateProjectStatus(projectId, newStatus.value)
  await fetchProject()
  alert('Project status updated')
}

onMounted(fetchProject)
</script>
