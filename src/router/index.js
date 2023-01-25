import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/business",
        name: "BusinessHome",
        component: () => import("../views/Business/Home.vue"),
    },
    {
        path: "/business/signin",
        name: "BusinessSignin",
        component: () => import("../views/Business/Signin.vue"),
    },
    {
        path: "/business/signup",
        name: "BusinessSignup",
        component: () => import("../views/Business/Signup.vue"),
    },
    {
        path: "/",
        name: "Landing",
        component: () => import("../views/Business/Home.vue"),
    },
    {
        path: "/jobs/manage/create",
        name: "CreateJob",
        component: () => import("../views/Business/CreateJob.vue"),
    },
    {
        path: "/jobs/manage",
        name: "ManageJob",
        component: () => import("../views/Business/ManageJob.vue"),
    },
    {
        path: "/jobs/manage/uuid/candidate",
        name: "ManageCandidate",
        component: () => import("../views/Business/ManageCandidate.vue"),
    },
    {
        path: "/jobs/manage/uuid/edit",
        name: "EditJob",
        component: () => import("../views/Business/EditJob.vue"),
    },
];

const router = new VueRouter({
    routes,
    // Make sure browser resets to top position every page change
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

export default router;
