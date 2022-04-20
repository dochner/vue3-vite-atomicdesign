# Molecules

As in nature, are groups of atoms linked together. In our application, molecules are the smallest components composed of one or more repeated atoms, always simple combinations built for reuse.

Having composed a molecule by several atoms already made, make us work with "do one thing and do it well" mentality. Both atoms and molecules encourage the creation of independent and reusable components.

Now, let's apply it to a case study. Imagine what we could do with the atoms we have created, what combinations without too much complexity we can create and reuse? Well, a list of links would be good for both the header and the footer and, also, we can create a card combining title and text atoms.

Let's take a look at the examples we have created:

## Links.vue

In this case, we have created a list with the tags ul, li and, to represent the link, we have imported the Link and used it as a component.

```html
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

```

## Card.vue

In this molecule, to form the card, we have used the Title and Text, both added to the div that gives the style to the card.

```html
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

```

## Banner.vue

For the Banner that will appear under the header we have needed both Title and Text, and also the Button.

```html
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

```
