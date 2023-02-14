import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/business/about-us",
        name: "AboutUs",
        component: () => import("../views/Business/AboutUs.vue"),
    },
    {
        path: "/business/terms-and-condition",
        name: "TermsAndConditions",
        component: () => import("../views/Business/T&C.vue"),
    },
    {
        path: "/business/signin",
        name: "Signin",
        component: () => import("../views/Business/Entry/Signin.vue"),
    },
    {
        path: "/business/signup",
        name: "Signup",
        component: () => import("../views/Business/Entry/Signup.vue"),
    },
    {
        path: "/",
        name: "Landing",
        component: () => import("../views/Business/Landing/Default.vue"),
    },
    {
        path: "/jobs/manage/create",
        name: "CreateJob",
        component: () => import("../views/Business/Jobs/CreateJob.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/jobs/manage",
        name: "ManageJob",
        component: () => import("../views/Business/Jobs/ManageJob.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/jobs/manage/:id/candidates",
        name: "ManageCandidate",
        component: () => import("../views/Business/Jobs/ManageCandidate.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/jobs/manage/:id/edit",
        name: "EditJob",
        component: () => import("../views/Business/Jobs/EditJob.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/business/forget-password",
        name: "BusinessForgetPassword",
        component: () => import("../views/Business/Entry/ForgetPassword.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/business/reset-password",
        name: "BusinessResetPassword",
        component: () => import("../views/Business/Entry/ResetPassword.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/invoices",
        name: "Invoices",
        component: () => import("../views/Business/Details/Invoices.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/account/details",
        name: "AccountDetails",
        component: () => import("../views/Business/AccountDetails.vue"),
        meta: {
            requiresAuth: true,
        },
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
    // Make sure browser resets to top position every page change
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

// router.beforeEach((to, from, next) => {

//     if(to.matched.some(record => record.meta.requiresAuth)) {

//         if(!store.getters.authUser) {
//             next({ name: 'Signin' })

//         } else {
//             next()
//         }
//     } else {
//         next()
//     }

// })

export default router;
