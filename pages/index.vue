<template>
  <main role="main">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>

<script lang="ts" setup>
const story = await useStoryblok('home', { version: 'draft' });
</script>