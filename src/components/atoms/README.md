# Atoms

It is the smallest unit that composes our application, it is not useful by itself but it allows us to have more control over the application elements.

Imagine that you want to create a basic layout, in it there will be a header, a body and a footer. But, in addition, each of them is made up of smaller elements such as the links you can see in the header and also in the footer.

Well, we’re talking about the atoms being the HTML tags that will be reused throughout the application, as link, heading and svg, among others.

For this example we have defined five atoms that will be useful to us:

## Button.vue

As you can see, it's simply a button-style link that expects a property that will contain an object with the name and url of our link.

```html
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

```

## Link.vue

The atom that represents our link will be the same as the previous one but with the base style.

```html
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
```

## Logo.vue & Text.vue

For the logo we will add the SVG that represents it and for the text we will add the tag.

```html
<!-- Logo.vue -->
<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M19.22 4C19.5 4 19.75 4 19.96 4.05C20.13 5.44 19.94 8.3 16.66 11.58C14.96 13.29 12.93 14.6 10.65 15.47L8.5 13.37C9.42 11.06 10.73 9.03 12.42 7.34C15.18 4.58 17.64 4 19.22 4M19.22 2C17.24 2 14.24 2.69 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.62 17.27 10.13 17.5 10.66 17.5C10.89 17.5 11.13 17.44 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39S20.7 2 19.22 2M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z" /></svg>
</template>


<!-- Text.vue -->
<script setup>
defineProps({
  text: String,
})
</script>

<template>
  <p class="pb-6">
    {{ text }}
  </p>
</template>
```

## Title.vue

In this case, as the title can have more than one type of tag, h1, h2, ..., we have created a dynamic component to be able to represent the corresponding title introduced by the prop: tag.

```html
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
```

Now that we have reviewed all the atoms needed for our template, let's get on with the molecules
