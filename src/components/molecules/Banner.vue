<script setup>
import Title from '../atoms/Title.vue'
import Text from '../atoms/Text.vue'
import Button from '../atoms/Button.vue'
</script>

<template>
  <div class="px-4 pt-40 pb-12 md:py-32 bg-blue-900 text-gray-100">
    <div class="container mx-auto">
      <Title tag="h1" content="Atomic Design in Vue.js" />
      <Text
        text="Etiam in arcu lectus. Nulla facilisi. Nunc viverra vehicula nunc eu tristique. Sed gravida libero sem, sed ornare arcu venenatis at."
      />
      <Button class="md:max-w-xs" :link="{ name: 'Button', url: '#' }" />
    </div>
  </div>
</template>
