<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <component
    v-if="story"
    :is="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
  />
</template>

<script lang="ts" setup>
const story = await useStoryblok('home', { version: 'draft' });
</script>