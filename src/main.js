import './assets/main.css'
import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'


import Home from './pages/Home.vue'
import BlogList from './pages/BlogList.vue'
import BlogDetails from './pages/BlogDetails.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/BlogList', name: 'BlogList', component: BlogList },
    { path: '/BlogList/post/:id', name: 'BlogDetails', component: BlogDetails, props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
