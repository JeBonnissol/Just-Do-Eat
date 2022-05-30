import { createWebHistory, createRouter } from "vue-router"

import LoginPage from "@/pages/LoginPage.vue"
import RecettePage from "@/pages/RecettePage.vue"
import CarteRecettePage from "@/pages/CarteRecettePage.vue"
import RecetteContenu from "@/pages/RecetteContenu.vue"


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
    },

    { 
    path: "/recettes",
    name: "Recettes",
    component: CarteRecettePage
    },

    { 
        path: "/page-recette",
        name: "page-recette",
        component: RecetteContenu
    },
    {
        path:"/page-recette/:id",
        name:"reciepe",
        component:RecetteContenu
    },

]

const ROUTER = createRouter({
    history: createWebHistory(),
    routes,
});

export default ROUTER;