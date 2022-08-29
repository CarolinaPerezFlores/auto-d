import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router);

const router =  new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    mode: 'history',
    routes: [

        {
            path: '/',
            name: 'home',
            component: () => import('../views/home/index.vue'),
        },
    ]
});

export default router;