import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/personal',
        name: 'Personal',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "personal" */ '../views/Personal.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
