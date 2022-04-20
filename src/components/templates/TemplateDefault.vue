<script setup>
import Header from '@/components/organisms/Header.vue'
import Footer from '@/components/organisms/Footer.vue'
import Banner from '@/components/molecules/Banner.vue'
import Grid from '@/components/organisms/Grid.vue'

const links = ref([
  { url: '/', name: 'Home' },
  { url: 'https://google.com', name: 'Google' },
])

const cards = ref([
  {
    title: 'Card 1',
    text: 'Sed gravida libero sem, sed ornare arcu venenatis at.',
  },
  {
    title: 'Card 2',
    text:
            'Etiam in arcu lectus. Nulla facilisi. Nunc viverra vehicula nunc eu tristique.',
  },
  {
    title: 'Card 3',
    text: 'Sed gravida libero sem, etiam in arcu lectus.',
  },
])

const columnOneLinks = ref([
  { name: 'Footer column 1', url: '#' },
  { name: 'Footer column 1', url: '#' },
])

const columnTwoLinks = ref([
  { name: 'Footer column 2', url: '#' },
  { name: 'Footer column 2', url: '#' },
])
</script>

<template>
  <section class="flex flex-col min-h-screen">
    <Header :links="links" />
    <div class="flex-auto flex flex-wrap bg-white">
      <Banner class="flex-grow text-center md:text-left" />
      <div class="container px-4 py-8 mx-auto md:py-16">
        <Grid :cards="cards" />
      </div>
    </div>
    <Footer :column-one-links="columnOneLinks" :column-two-links="columnTwoLinks" />
  </section>
</template>
