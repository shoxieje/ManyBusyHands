<template>
    <b-navbar type="primary" variant="light" sticky>
        <!-- BRANDING -->
        <b-navbar-brand :to="{ name: 'BusinessHome' }">
            <img src="@/assets/img/logo2.png" alt="ManyBusyHands Logo" />
        </b-navbar-brand>
        <!-- PUBLIC NAVBAR -->
        
        <b-navbar-nav id="publicNavbar" class="header-container" v-show="!this.$store.state.isUserLoggingIn">
            <b-nav-item class="nav-item" to="/business">Home</b-nav-item>
            <b-nav-item class="nav-item" to="/jobs">Jobs</b-nav-item>
            <b-nav-item class="nav-item" to="/ads">Ads</b-nav-item>
            <b-nav-item class="nav-item" to="/seasonality"
                >Seasonality</b-nav-item
            >

            <!-- <div class="header-button">
                    
                </div> -->
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto"  v-show="!this.$store.state.isUserLoggingIn">
            <b-button class="nav-btn" variant="light" to="/business/signin"
                >Sign in</b-button>
                
            <b-button
                class="nav-btn ml-2"
                variant="primary"
                to="/Business/Signup"
                >Sign up</b-button>
        </b-navbar-nav>

        <!-- drop down -> business name -> link -->
    </b-navbar>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "Header",

        computed: {

        },

        methods: {
            // This method calls the vuex store action 'logoutUser' to remove the login details
            // and then redirects to the home/landing page

        },
    };
</script>

<style>
    .nav-item a {
        /* color: #1c1d1f !important; */

        /* $mbh-navy */
        color: #25274d !important;
        font-weight: bold;
        font-size: 16pt;
    }

    .nav-item {
        margin: auto;
        padding: 1em;
    }

    .nav-btn {
        font-size: 16pt !important;
        font-weight: bold;
    }
</style>
