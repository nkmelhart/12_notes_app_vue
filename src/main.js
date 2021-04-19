import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '../node_modules/animate.css/animate.min.css'

createApp(App).use(router).mount('#app')
