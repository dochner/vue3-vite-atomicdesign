<script setup>
import Link from '@/components/atoms/Link.vue'

defineProps({
  links: Array,
})
</script>

<template>
  <ul class="flex">
    <li v-for="(link, index) in links" :key="link.name + index">
      <Link :link="link" />
    </li>
  </ul>
</template>
