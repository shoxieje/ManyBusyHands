import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/Business',
    name: 'BusinessHome',
    component: () => import('../views/Business/Home.vue')
  },
  {
    path: '/Business/Signin',
    name: 'BusinessSignin',
    component: () => import('../views/Business/Signin.vue')
  },
  {
    path: '/Business/Signup',
    name: 'BusinessSignup',
    component: () => import('../views/Business/Signup.vue')
  },
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/Business/Home.vue')
  }
]

const router = new VueRouter({
    routes,
    // Make sure browser resets to top position every page change
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

export default router;
