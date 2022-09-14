<template>
  <div class="hero">
    <div class="grid grid-cols-2 mx-auto container font-sans">
        <img v-if="blok.media" :src="blok.media.filename" :alt="blok.media.alt" :title="blok.media.title">
        <div>
          <h1 class="text-shrimp-600 font-display text-3xl font-extrabold mb-4">{{ blok.title }}</h1>
          <p class="text-xs text-gray-700 mb-8">{{ blok.text }}</p>
          <footer>
            <ul class="flex justify-end">
              <li v-for="action in blok.actions" class="mr-4">
                <StoryblokComponent :blok="action" />
              </li>
            </ul>
          </footer>
        </div>
    </div>
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