<template>
  <section class="relative categories bg-shrimp-400 w-full h-600px mt-30">
    <img src="/tint-orange.png" class="absolute right-0 -top-30" alt="tint orange">

    <div class="z-10 absolute w-full">
      <div class="flex justify-between mx-auto container absolute font-sans z-10 p-4">
        <section class="flex flex-col w-2/3">
          <h2 class="text-white font-display text-2xl font-extrabold mb-4">
            {{ blok.title }}
          </h2>

          <ul class="grid grid-cols-3 gap-4 py-8">
            <li
              v-for="category in formatedCategories"
              :key="category.uuid"
            >
              <div class="bg-white shadow-lg rounded-lg p-3 flex flex-col items-center">
                <img
                  :src="category.icon.filename"
                  :alt="category.name"
                  class="w-76px w-76px"
                >
                <h3 class="text-shrimp-600 font-display text-xl font-bold my-1">{{ category.name }}</h3>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <img
            v-if="blok.media"
            class="h-xs"
            :src="blok.media.filename"
            :alt="blok.media.alt"
            :title="blok.media.title"
          >
        </section>

      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({}), 
  }
})

const { categories, fetchCategories, formatedCategories } = useCategories();

await fetchCategories()
</script>