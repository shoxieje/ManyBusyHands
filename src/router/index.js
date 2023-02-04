import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
    {
        path: "/business/signin",
        name: "BusinessSignin",
        component: () => import("../views/Business/Entry/Signin.vue"),
    },
    {
        path: "/business/signup",
        name: "BusinessSignup",
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
        component: () => import('../views/Business/Jobs/CreateJob.vue'),
    },
    {
        path: "/jobs/manage",
        name: "ManageJob",
        component: () => import("../views/Business/Jobs/ManageJob.vue"),
    },
    {
        path: "/jobs/manage/:id/candidates",
        name: "ManageCandidate",
        component: () => import("../views/Business/Jobs/ManageCandidate.vue"),
    },
    {
        path: "/jobs/manage/:id/edit",
        name: "EditJob",
        component: () => import("../views/Business/Jobs/EditJob.vue"),
    },
    {
        path: "/business/forget-password",
        name: "BusinessForgetPassword",
        component: () => import("../views/Business/Entry/ForgetPassword.vue"),
    },
    {
        path: "/business/reset-password",
        name: "BusinessResetPassword",
        component: () => import("../views/Business/Entry/ResetPassword.vue"),
    },
    {
        path: "/invoices",
        name: "Invoices",
        component: () => import("../views/Business/Details/Invoices.vue"),
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
    // Make sure browser resets to top position every page change
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

export default router;
