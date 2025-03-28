import './assets/main.css'

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import * as Vue from 'vue' // in Vue 3

import axiosPlugin from './plugins/vue-axios'

const app = Vue.createApp(App)


app.use(createPinia())
app.use(router)
app.use(axiosPlugin, {})

app.mount('#app')
