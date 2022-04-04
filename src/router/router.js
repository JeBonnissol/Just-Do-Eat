import { createWebHistory, createRouter } from "vue-router"

import LoginPage from "@/pages/LoginPage.vue"
import RecettePage from "@/pages/RecettePage.vue"

const routes = [
    { 
    path: "/",
    name: "Login",
    component: LoginPage
    },

    { 
    path: "/recette",
    name: "Recette",
    component: RecettePage
    }
]

const ROUTER = createRouter({
    history: createWebHistory(),
    routes,
});

export default ROUTER;