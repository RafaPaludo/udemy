import './assets/main.css'
import './assets/tailwind.css'
import "material-design-icons-iconfont/dist/material-design-icons.min.css";
import 'vuestic-ui/styles/essential.css';
import 'vuestic-ui/styles/typography.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuestic, createIconsConfig } from 'vuestic-ui';
import config from '../vuestic.config.js'

import App from './App.vue'
import router from './router'

import DefaultLayout from './layout/DefaultLayout.vue';
import LoginLayout from './layout/LoginLayout.vue';

const app = createApp(App)

app.component('default-layout', DefaultLayout)
app.component('login-layout', LoginLayout)
app.use(createPinia())
app.use(router)
app.use(createVuestic({
  config: {
    icons: createIconsConfig({
      aliases: [
        {
          name: "bell",
          color: "#FFD43A",
          to: "fa4-bell",
        },
        {
          name: "ru",
          to: "flag-icon-ru small",
        },
      ],
      fonts: [
        {
          name: "fa4-{iconName}",
          resolve: ({ iconName }) => ({ class: `fa fa-${iconName}` }),
        },
        {
          name: "flag-icon-{countryCode} {flagSize}",
          resolve: ({ countryCode, flagSize }) => ({
            class: `flag-icon flag-icon-${countryCode} flag-icon-${flagSize}`,
          }),
        },
      ],
    }),
    colors: config.colors,
    breakpoint: config.breakpoints
  },
}))

app.mount('#app')
