<script setup>
const props = defineProps({
  link: {
    type: Object,
    default: () => ({
      url: '',
      name: '',
    }),
  },
})

const isExternal = computed(() => props.link.url.startsWith('http'))

const componentIs = computed(() => isExternal.value ? 'a' : 'router-link')

const componentAttrs = computed(() => {
  const attrs = {}
  if (isExternal.value) {
    attrs.href = props.link.url
    attrs.target = '_blank'
  }
  else {
    attrs.to = props.link.url
  }
  return attrs
})
</script>

<template>
  <component
    :is="componentIs" v-bind="componentAttrs"
    class="block text-center py-1 px-4 bg-blue-100 text-blue-500 font-semibold rounded"
  >
    {{ link.name }}
  </component>
</template>
