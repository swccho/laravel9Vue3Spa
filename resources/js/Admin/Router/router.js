
import {createRouter,createWebHistory } from "vue-router";
//=====================
// Pages
//=====================


const ROOT_URL = '/admin';
const routes = [
    {
        path:ROOT_URL+'/',
        name:"Home",
        component:()=>import('../Layout/Layout.vue'),
        children: [
            { path: ROOT_URL + '/', name: 'Dashboard', component:()=> import('../Pages/Dashboard/Dashboard.vue')},
            { path: ROOT_URL + '/about-us', name: 'AboutUs', component:()=> import('../Pages/AboutUs/AboutUs.vue')},
            { path: ROOT_URL + '/contact-us', name: 'ContactUs', component:()=> import('../Pages/ContactUs/ContactUs.vue')},
        ]
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
/*// Middlewares
router.beforeEach((to, from, next) => {
    if (to.meta.RequireAuth !== undefined) {
        const access_token = store.getters.GetAccessToken;
        if (access_token === undefined || access_token === null) {
            next({name: 'Login'});
        } else {
            next();
        }
    } else if (to.meta.AuthLess !== undefined) {
        const access_token = store.getters.GetAccessToken;
        if (access_token !== undefined && access_token !== null) {
            next({name: 'Dashboard'});
        } else {
            next();
        }
    } else {
        next();
    }
})*/

export default router;
