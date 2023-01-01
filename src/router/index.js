import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/Business",
        name: "BusinessHome",
        component: () => import("../views/Business/Home.vue"),
    },
    {
        path: "/Business/Signin",
        name: "BusinessSignin",
        component: () => import("../views/Business/Signin.vue"),
    },
    {
        path: "/Business/Signup",
        name: "BusinessSignup",
        component: () => import("../views/Business/Signup.vue"),
    },
    {
        path: "/Business/Post",
        name: "BusinessPost",
        component: () => import("../views/Business/Post.vue"),
    },
    {
        path: "/",
        name: "Landing",
        component: () => import("../views/Landing.vue"),
    },
    {
        path: "/Login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/Signup",
        name: "Signup",
        component: () => import("../views/Signup.vue"),
    },
    // {

    // },
    {
        path: "/About-Us",
        name: "AboutUs",
        component: () => import("../views/AboutUs.vue"),
    },
    {
        path: "/Contact-Us",
        name: "ContactUs",
        component: () => import("../views/ContactUs.vue"),
    },
    {
        path: "/Seasonality",
        name: "Seasonality",
        component: () => import("../views/Seasonality.vue"),
    },
    {
        path: "/Terms-and-Conditions",
        name: "TermsAndConditions",
        component: () => import("../views/TermsAndConditions.vue"),
    },
    {
        path: "/Business-Signup",
        name: "BusinessSignup",
        component: () => import("../views/BusinessSignup.vue"),
    },
    {
        path: "/JobSeeker-Signup",
        name: "JobSeekerSignup",
        component: () => import("../views/JobSeekerSignup.vue"),
    },
    {
        path: "/Search",
        name: "Search",
        component: () => import("../views/Search.vue"),
    },
    {
        path: "/Subscribe",
        name: "Subscribe",
        component: () => import("../views/Subscribe.vue"),
    },
    {
        path: "/JobSeeker-Payment",
        name: "JobSeekerPayment",
        component: () => import("../views/JobSeekerPayment.vue"),
    },
    {
        path: "/Add-Company",
        name: "AddCompany",
        component: () => import("../views/AddCompany.vue"),
    },
    {
        path: "/My-Companies",
        name: "MyCompanies",
        component: () => import("../views/MyCompanies.vue"),
    },
    {
        path: "/Business-View",
        name: "BusinessView",
        component: () => import("../views/BusinessView.vue"),
        props: true,
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
