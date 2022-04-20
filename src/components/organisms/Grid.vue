<script setup>
import Card from '@/components/molecules/Card.vue'

defineProps({
  cards: Array,
})
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
    <div v-for="card in cards" :key="card.name">
      <Card class="h-full cursor-pointer" :card="card" />
    </div>
  </div>
</template>
