import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/index.vue')
    },
    {
        path: '/personal',
        name: 'Personal',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "personal" */ '../views/personal/index.vue')
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: () => import('../views/detail/index.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
