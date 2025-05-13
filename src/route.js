import {createRouter, createWebHashHistory} from "vue-router"

import main from "./components/main.vue"
import catalog from "./components/catalog.vue"
import pageproduct from "./components/pageproduct.vue"
import contact from "./components/contact.vue"
import basket from "./components/basket.vue"
import account from "./components/account.vue"
import regestration from "./components/regestration.vue"
import authorization from "./components/authorization.vue"
import about from "./components/about.vue"


const routes = [
    {path: '/', component: main, name: 'main'},
    {path: '/catalog', component: catalog, name: 'catalog'},
    {path: '/pageproduct/:id', component: pageproduct, name: 'pageproduct'},
    {path: '/contact', component: contact, name: 'contact'},
    {path: '/basket', component: basket, name: 'basket'},
    {path: '/account', component: account, name: 'account'},
    {path: '/regestration', component: regestration, name: 'regestration'},
    {path: '/authorization', component: authorization, name: 'authorization'},
    {path: '/about', component: about, name: 'about'},
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
    
})