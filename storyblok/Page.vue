<template>
  <div v-editable="blok">
    <StoryblokComponent 
      v-for="bl in blok.body"
      :key="bl._uid"
      :blok="bl"
    />
  </div>

</template>
<script lang="ts" setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({}), 
  }
})
</script>