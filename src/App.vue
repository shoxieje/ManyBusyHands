<template>
    <div>
        <!-- APP VIEW -->
        <Header class="header"/>
        <body class="body">
            <div class="page-container">
                <!-- LANDING BACKGROUND IMAGE CAROUSEL -->
                <router-view class="main-content"></router-view>
            </div>
        </body>
        <Footer class="footer"/>
    </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";
export default {
    name: "AppFrame",

    components: { Header, Footer },

    data() {
        return {
        //     // Array of page names that specify which sites a NON LOGGED IN VISITOR can visit (router protection)
        //     publicSites: [
        //         "Landing",
        //         "Login",
        //         "AboutUs",
        //         "ContactUs",
        //         "TermsAndConditions",
        //         "BusinessSignup",
        //         "JobSeekerSignup",
        //         "AccommodationSignup",
        //         "Subscribe",
        //         "Signup"
        //     ],

        //     // Array of page names that specify which sites a LOGGED IN USER (JobSeeker) can visit (router protection)
        //     jobSeekerSites: [
        //         "Landing",
        //         "AboutUs",
        //         "ContactUs",
        //         "TermsAndConditions",
        //         "Search",
        //         "Seasonality",
        //         "MyAccount",
        //         "ResetPassword",
        //         "Subscribe",
        //         "JobSeekerPayment",
        //         "BusinessView",
        //     ],

        //     // Array of page names that specify which sites a LOGGED IN USER (Business) can visit (router protection)
        //     businessSites: [
        //         "Landing",
        //         "AboutUs",
        //         "ContactUs",
        //         "TermsAndConditions",
        //         "Search",
        //         "Seasonality",
        //         "MyAccount",
        //         "MyCompanies",
        //         "ResetPassword",
        //         "AddCompany",
        //         "Subscribe",
        //         "BusinessView",
        //     ],

        //     // Array of page names that specify which sites a LOGGED IN USER (Accommodation) can visit (router protection)
        //     accommodationSites: [
        //         "Landing",
        //         "AboutUs",
        //         "ContactUs",
        //         "TermsAndConditions",
        //         "Search",
        //         "Seasonality",
        //         "MyAccount",
        //         "MyCompanies",
        //         "ResetPassword",
        //         "AddCompany",
        //         "Subscribe",
        //         "BusinessView",
        //     ],
        };
    },

    computed: {
        // Computed value that returns the current route page name
        // pageName() {
        //     return this.$route.name;
        // },

        // // Computed boolean value that determines if the current page is the 'Landing' page (used for background image carousel)
        // isLandingPage() {
        //     return this.pageName == "Landing";
        // },

        // // Computed boolean value returning whether or not this page is publicly accessible for non-logged in vistors
        // isPublicPage() {
        //     return this.publicSites.indexOf(this.pageName) !== -1;
        // },

        // ...mapGetters(["loggedInUser", "accountType"]),
    },

    methods: {
        // Function to redirect user/visitor back to the Landing/Home page
        rerouteHome() {
            this.$router.push("/");
        },
    },
};
</script>
