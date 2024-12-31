import './assets/main.css'
import 'vuestic-ui/css';
import "material-design-icons-iconfont/dist/material-design-icons.min.css";


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuestic, createIconsConfig } from 'vuestic-ui';

import App from './App.vue'
import router from './router'

const app = createApp(App)

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
    })
  },
}))

app.mount('#app')
