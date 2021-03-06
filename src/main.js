import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/scss/style.scss"
import "./assets/js/index.esm.js"

createApp(App).use(store).use(router).mount('#app')
