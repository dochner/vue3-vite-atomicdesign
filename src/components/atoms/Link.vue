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
  <component :is="componentIs" v-bind="componentAttrs" class="font-thin text-lg leading-loose px-4 py-1 transition-all duration-150 hover:underline underline-2 decoration-offset-2">
    {{ link.name }}
  </component>
</template>
