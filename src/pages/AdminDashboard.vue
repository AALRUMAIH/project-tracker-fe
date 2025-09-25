<template>
  <div>
    <h1>Admin Dashboard</h1>
    <!---->
    <UserList />
    <hr />
    <ProjectList />
  </div>
</template>

<script setup>
import UserList from '@/components/UserList.vue'
import ProjectList from '@/components/ProjectList.vue'
</script>
