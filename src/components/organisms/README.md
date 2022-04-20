# Organisms

Are groups of molecules joined together to form a relatively complex, distinct section of an interface, as the header and the footer.

Now, we can see the final interface beginning to take shape. As in molecules with atoms, organisms can consist of similar and/or different molecule types.

As in the previous sections, we will see the possibilities we have to create the organisms. Let's have a look directly on each one:

## Header.vue

In order to create the Header organism we need the logo, a list of links, to navigate through the application, and a button for registration, for example. In that case we need the Logo and Button atoms and the Links molecule.

```html
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

```

## Grid.vue

To represent several cards on the same grid we create the Grid, which will contain Card inside a v-for and that will be shape it with flex. Let’s check the code:

```html
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

```

## Footer.vue

As the previous cases, we just need the molecule we want to use. But, in this case, applying a class to the molecule we are using we can represent it vertically, now Links is using flex-col (flex-direction: column).

```html
<script setup>
import Links from '@/components/molecules/Links.vue'

defineProps({
  columnOneLinks: Array,
  columnTwoLinks: Array,
})
</script>

<template>
  <footer class="flex flex-wrap text-white">
    <div class="w-full md:w-1/4 bg-gray-900 p-4 md:p-12">
      <Links class="flex flex-col" :links="columnOneLinks" />
    </div>
    <div class="w-full md:w-3/4 bg-blue-900 p-4 md:p-12">
      <Links class="flex flex-col" :links="columnTwoLinks" />
    </div>
  </footer>
</template>

```
