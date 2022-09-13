<template>
  <div>
    <component
    :is="blok.component"
    v-for="bl in blok.body"
    :key="blok._uid"
    :blok="blok"
  />
  </div>

</template>
<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>