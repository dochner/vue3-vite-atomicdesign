<script setup>
defineProps({
  content: String,
  tag: String,
})
</script>

<template>
  <component :is="tag" class="text-3xl font-serif pb-2">
    {{ content }}
  </component>
</template>
