<script setup>
import Logo from '@/components/atoms/Logo.vue'
import Button from '@/components/atoms/Button.vue'
import Links from '@/components/molecules/Links.vue'

defineProps({
  links: Array,
})
</script>

<template>
  <header class="absolute left-0 right-0 inset-x-0 text-gray-100 py-4 items-center">
    <div class="container mx-auto px-4 pb-4 md:pb-0 flex items-center justify-between">
      <Logo />
      <Links :links="links" />
    </div>
  </header>
</template>
