<template>
  <button
    class="font-bold text-sm bg-shrimp-500 text-white rounded-full px-3 py-1.5"
    :class="blok.type === 'solid' 
    ? 'bg-shrimp-500 text-white border-transparent'
    : 'bg-white text-shrimp-500 border-shrimp-500'"
  >
    {{ blok.label }}
  </button>
</template>

<script lang="ts" setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({}), 
  }
})
</script>