<template>
  <section class="recipes-list w-full">
    <div class="container mx-auto">
      <h2 class="text-shrimp-500 font-display text-3xl font-bold my-8 w-2/3">
        {{ blok.title }}
      </h2>
      <pre>{{  recipes }}</pre>
    </div>
  </section>
</template>
<script lang="ts" setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})

const { recipes, fetchRecipes } = useRecipes();

await fetchRecipes();
</script>