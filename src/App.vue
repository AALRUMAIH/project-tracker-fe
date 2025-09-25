<!-- src/App.vue -->
<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppLayout from '@/components/common/AppLayout.vue'

const route = useRoute()
const layout = computed(() =>
  route.meta.layout === 'admin' ? AppLayout : 'div'
)
</script>
