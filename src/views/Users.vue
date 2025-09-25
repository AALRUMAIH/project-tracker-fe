<template>
  <AppLayout>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">User Management</h1>

      <div v-if="store.isLoading" class="text-center py-8">Loading users…</div>
      <div v-else>
        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="px-4 py-2">Name</th>
              <th class="px-4 py-2">Email</th>
              <th class="px-4 py-2">Role</th>
              <th class="px-4 py-2">Active</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="u in store.users" :key="u.id">
              <td class="border px-4 py-2">{{ u.firstName }} {{ u.lastName }}</td>
              <td class="border px-4 py-2">{{ u.email }}</td>
              <td class="border px-4 py-2">
                <select 
                  v-model="u.role" 
                  @change="store.setRole(u.id, u.role)"
                  class="border rounded px-2 py-1"
                >
                  <option>ADMIN</option>
                  <option>PROJECT_MANAGER</option>
                  <option>TEAM_MEMBER</option>
                </select>
              </td>
              <td class="border px-4 py-2 text-center">
                <input 
                  type="checkbox" 
                  :checked="u.active" 
                  @change="store.setActive(u.id, $event.target.checked)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUsersStore } from '@/store/modules/users'
import AppLayout from '@/components/common/AppLayout.vue'

const store = useUsersStore()

onMounted(() => {
  store.fetchUsers()
})

// optional “new project” stub:
function openProjectForm(userId) {
  // e.g. emit an event, or navigate to /projects/create?owner=…
  console.log('New project for user', userId)
}
</script>
