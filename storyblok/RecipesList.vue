<template>
  <section class="recipes-list w-full">
    <div class="container mx-auto">
      <h2 class="text-shrimp-500 font-display text-3xl font-bold my-8 w-2/3">
        {{ blok.title }}
      </h2>
      <h2>{{ category }}</h2>
      <pre>CategoriList: {{ categoryList }}</pre>
      <!-- <pre>{{  recipes }}</pre> -->
    </div>
  </section>
</template>
<script lang="ts" setup>
import { useCategoryStore } from '@/stores/CategoryStore';

defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})

const { recipes, fetchRecipes } = useRecipes();

const { category, categoryList } = useCategoryStore();
await fetchRecipes();
</script>