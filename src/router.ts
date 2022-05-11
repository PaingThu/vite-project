var rootPath = "vite-project-build"
// var rootPath = "testing-golf"

import { createRouter,createWebHistory } from 'vue-router';
import Home from "./pages/Home.vue";
import Vue3 from "./pages/Vue3.vue";
import Vite from "./pages/Vite.vue";
import Typescript from "./pages/Typescript.vue"
 
const routes = [
    { path: `/${rootPath}/`, name: 'home', component: Home },
    { path: `/${rootPath}/vue3`, name: 'vue3', component: Vue3 },
    { path: `/${rootPath}/vite`, name: 'vite', component: Vite },
    { path: `/${rootPath}/typescript`, name: 'typescript', component: Typescript },
]
 
const router = createRouter({
    history: createWebHistory(),
    routes,
})
 
export default router;