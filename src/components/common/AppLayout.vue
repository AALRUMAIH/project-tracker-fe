<!-- src/components/common/AppLayout.vue -->
<template>
  <div class="flex h-screen bg-gray-100">
    <AppSidebar />
    <div class="flex-1 overflow-auto">
      <AppHeader />
      <main class="flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import AppSidebar from './AppSidebar.vue'
import AppHeader from './AppHeader.vue'
export default { name: 'AppLayout', components: { AppSidebar, AppHeader } }
</script>
