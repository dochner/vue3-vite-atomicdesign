<script setup>
import Title from '@/components/atoms/Title.vue'
import Text from '@/components/atoms/Text.vue'

defineProps({
  card: {
    type: Object,
    default: () => ({
      title: '',
      text: '',
    }),
  },
})
</script>

<template>
  <div class="p-4 border border-blue-200 shadow rounded-sm bg-blue-100 text-blue-800">
    <Title tag="h2" :content="card.title" />
    <Text :text="card.text" />
  </div>
</template>
