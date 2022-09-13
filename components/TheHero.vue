<template>
  <section class="hero w-full flex flex-col md:fle-row">
    <div class="w-full md:w-1/2">
      <img src="/sushi-and-chopstick.png" alt="Sushi graphics">
    </div>
    <div class="w-full md:w-1/2">
      <h1 class="font-display text-primary-400 font-bold font-4xl">{{ blok.headline }}</h1>
      <p>{{ blok.description }}</p>
      <footer class="w-full flex justify-end">
        <button class="btn">{{ blok.moreCtaLabel }}</button>
        <button class="btn">{{ blok.downloadCtaLabel }}</button>
      </footer>
    </div>
  </section>
</template>
<script>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>