import { createApp } from 'vue'
import { router } from './router'
import { pinia } from './store'
import './assets/css/tailwind.css'

import App from './App.vue'

const app = createApp(App)

app.use(pinia)

app.use(router)

app.mount('#vue_app')
