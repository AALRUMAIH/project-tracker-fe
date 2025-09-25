<template>
  <span :class="['px-2 py-1 text-xs font-medium rounded-full', statusColor]">
    {{ status }}
  </span>
</template>

<script>
import { computed } from 'vue'
import { getStatusColor } from '@/utils/helpers'

export default {
  name: 'TaskStatusBadge',
  props: {
    status: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const statusColor = computed(() => getStatusColor(props.status))

    return {
      statusColor
    }
  }
}
</script>
