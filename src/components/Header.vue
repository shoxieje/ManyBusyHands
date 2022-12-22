<template>
    <b-navbar type="primary" variant="light" sticky>
            <!-- BRANDING -->
            <b-navbar-brand :to="{ name: '/Business' }">
                <img
                    src="@/assets/img/logo2.jpeg"
                    alt="ManyBusyHands Logo"
                />
            </b-navbar-brand>
            <!-- PUBLIC NAVBAR -->
            <b-navbar-nav id="publicNavbar" class="header-container">   
                <b-nav-item class="nav-item" to="/Business">Home</b-nav-item>
                <b-nav-item class="nav-item" to="/Jobs">Jobs</b-nav-item>
                <b-nav-item class="nav-item" to="/Ads">Ads</b-nav-item>
                <b-nav-item class="nav-item" to="/Seasonality">Seasonality</b-nav-item>

                <!-- <div class="header-button">
                    
                </div> -->
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-button class="nav-btn" variant="light" to="/Business/Signin">Sign in</b-button>
                <b-button class="nav-btn ml-2" variant="dark" to="/Business/Signup">Sign up</b-button>
            </b-navbar-nav>
    </b-navbar>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "Header",

    computed: {
        // Computed boolean variable returning if the user is logged in
        noLogin() {
            return !this.loggedInUser;
        },

        // Computed boolean variable returning if the user is logged in as a Jobseeker (USER)
        userLoggedIn() {
            return this.loggedInUser && this.accountType == "USER";
        },

        // Computed boolean variable returning if the user is logged in as a Business
        businessLoggedIn() {
            return this.loggedInUser && this.accountType == "BUSINESS";
        },

        // Computed boolean variable returning if the user is logged in as an Accommodation Provider
        accommodationLoggedIn() {
            return this.loggedInUser && this.accountType == "ACCOMMODATION";
        },

        ...mapGetters(["loggedInUser", "accountType", "accountId"]),
    },

    methods: {
        // This method calls the vuex store action 'logoutUser' to remove the login details
        // and then redirects to the home/landing page
        logout() {
            this.logoutUser();
            this.$router.push("/");
        },
        ...mapActions(["logoutUser"]),
    },
};
</script>

<style>
    .nav-item a {
        color: #1c1d1f !important;
        font-size: 16pt;
    }

    .nav-item {
        margin: auto;
        padding: 1em
    }
	

    .nav-btn {
        font-size: 16pt !important;
    }
    
</style>
