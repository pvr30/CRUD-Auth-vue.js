import HomeComponent from "./components/HomeComponent.vue"
import SignUpComponent from "./components/SignUpComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"
import AddComponent from "./components/AddComponent.vue"
import UpdateComponent from "./components/UpdateComponent.vue"

import {createRouter, createWebHistory} from "vue-router"


const routes = [
    {
        name: 'HomeComponent',
        path: "/",
        component: HomeComponent
    },
    {
        name: 'SignUpComponent',
        path: "/signup",
        component: SignUpComponent
    },
    {
        name: 'LoginComponent',
        path: "/login",
        component: LoginComponent
    },
    {
        name: 'AddComponent',
        path: "/add",
        component: AddComponent
    },
    {
        name: 'UpdateComponent',
        path: "/update/:id",
        component: UpdateComponent
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;