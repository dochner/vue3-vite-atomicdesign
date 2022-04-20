import '@unocss/reset/tailwind.css'
import './styles/main.css'
import './styles/load.css'
import 'uno.css'

import { ViteSSG } from 'vite-ssg'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import type { RouterScrollBehavior } from 'vue-router'
import App from './App.vue'

import routes from '~pages'

if (import.meta.env.DEV)
  // eslint-disable-next-line no-console
  console.log(routes)

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return {
      el: decodeURIComponent(to.hash),
      top: 120,
      behavior: 'smooth',
    }
  }
  else {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition)
          resolve(savedPosition)
        else
          resolve({ left: 0, top: 0 })
      }, 300)
    })
  }
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  (ctx) => {
    dayjs.extend(LocalizedFormat)

    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)
