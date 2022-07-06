import { createApp } from 'vue'
import App from './App.vue'
import {createRouter , createWebHashHistory} from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Main from './components/Main.vue'

const routes = [
    {path: '/', component: Main},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
