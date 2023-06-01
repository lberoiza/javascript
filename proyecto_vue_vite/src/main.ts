import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App);

// Adding Router
app.use(router);
app.mount('#app')
