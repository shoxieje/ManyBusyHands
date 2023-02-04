<template>
    <b-navbar type="primary" variant="light" sticky>
        <!-- BRANDING -->
        <b-navbar-brand :to="{ name: 'Landing' }">
            <img
                class="ManyBusyHands-logo"
                src="@/assets/img/logo2.png"
                alt="ManyBusyHands Logo"
            />
        </b-navbar-brand>
        <!-- PUBLIC NAVBAR -->

        <b-navbar-nav
            id="publicNavbar"
            class="header-container hdr-main"
            v-show="!isUserLoggingIn"
            state="background-color: red"
        >
            <b-nav-item class="nav-item" id="header-home-btn" :to="{ name: 'Landing' }"
                ><span style="color: #29648a !important">Home</span></b-nav-item
            >
            <b-nav-item class="nav-item" id="header-jobs-btn" :to="{ name: 'ManageJob' }" 
                ><span style="color: #29648a !important">Jobs</span></b-nav-item
            >
            <b-nav-item
                class="nav-item"
                id="header-analytics-btn"
                to="/analytics"
                ><span style="color: #29648a !important"
                    >Analytics</span
                ></b-nav-item
            >
        </b-navbar-nav>

        <b-navbar-nav
            class="ml-auto hdr-main"
            v-show="!isUserLoggingIn && !getUser"
        >
            <b-button class="nav-btn" variant="light" :to="{ name: 'BusinessSignin' }"
                >Sign in</b-button
            >

            <b-button
                class="nav-btn ml-2"
                variant="primary"
                :to="{ name: 'BusinessSignup' }"
                >Sign up</b-button
            >
        </b-navbar-nav>

        <b-navbar-nav
            class="ml-auto hdr-main"
            v-show="!isUserLoggingIn && getUser"
        >

            <b-dropdown 
                id="dropdown-right-logged-in"
                class="dropdown-right m-2"
                right
                :text="user.business_name"
                variant="light"
            >
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    ><strong>{{ user.business_name }}</strong></b-dropdown-item
                >
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    >{{ user.first_name }} {{ user.last_name }}</b-dropdown-item
                >
                <div class="bottom-border-1"></div>
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    >Account details</b-dropdown-item
                >
                <b-dropdown-item class="dropdown-right-menu" href="/invoices"
                    >Invoices history</b-dropdown-item
                >
                <div class="bottom-border-1"></div>
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    >Contact us</b-dropdown-item
                >
                <b-dropdown-item class="dropdown-right-menu" @click="signOut"
                    >Sign out</b-dropdown-item
                >
            </b-dropdown>


        </b-navbar-nav>

        <b-navbar-nav class="ml-auto hdr-secondary">
            <b-dropdown
                id="dropdown-right"
                class="dropdown-right m-2"
                right
                text="Menu"
                variant="light"
            >
                <b-dropdown-item class="dropdown-right-menu" :to="{ name: 'Landing' }"
                    >Home</b-dropdown-item
                >
                <b-dropdown-item class="dropdown-right-menu" :to="{ name: 'ManageJob' }"
                    >Jobs</b-dropdown-item
                >
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    >Ads</b-dropdown-item
                >
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    >Seasonality</b-dropdown-item
                >
                <div class="bottom-border-1"></div>
                <b-dropdown-item class="dropdown-right-menu" :to="{ name: 'BusinessSignin' }"
                    >Sign in</b-dropdown-item
                >
                <b-dropdown-item class="dropdown-right-menu" :to="{ name: 'BusinessSignup' }"
                    >Sign up</b-dropdown-item
                >
            </b-dropdown>
        </b-navbar-nav>

        <b-button
            variant="light"
            class="ml-auto hdr-tertiary"
            v-b-toggle.sidebar-1
        >
            <img
                class="drop-down-menu"
                src="@/assets/img/icons/dropdown-menu-navy-icon.png"
                alt="Dropdown menu"
        /></b-button>

        <div class="slide-menu-tertiary">
            <b-sidebar
                class="slide-window"
                id="sidebar-1"
                title="Menu"
                right
                shadow
            >
                <div class="px-3 py-2">
                    <div class="bottom-border-1"></div>
                    <br />
                    <b-button
                        :to="{ name: 'Landing' }"
                        variant="light"
                        class="slide-button"
                        >H o m e</b-button
                    >
                    <b-button :to="{ name: 'ManageJob' }" variant="light" class="slide-button"
                        >J o b s</b-button
                    >
                    <b-button to="/ads" variant="light" class="slide-button"
                        >A d s</b-button
                    >
                    <b-button
                        to="/seasonality"
                        variant="light"
                        class="slide-button"
                        >S e a s o n a l i t y</b-button
                    ><br />
                    <br />
                    <div class="bottom-border-1"></div>
                    <br />
                    <b-button variant="light" class="slide-button" :to="{ name: 'BusinessSignin' }"
                        >S i g n I n</b-button
                    >
                    <b-button variant="light" class="slide-button" :to="{ name: 'BusinessSignup' }"
                        >S i g n U p</b-button
                    ><br />
                    <br />
                    <div class="bottom-border-1"></div>
                </div>
            </b-sidebar>
        </div>

        <!-- drop down -> business name -> link -->
    </b-navbar>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import VueCookies  from 'vue-cookies'
    export default {
        name: "Header",
        
        computed: {

            ...mapGetters({
                user: 'getUserData'
            }),

            isUserLoggingIn() {
                return this.$route.name == 'BusinessSignin' || this.$route.name == 'BusinessSignup'
            },

            getUser() {
                return Object.keys(this.user).length !== 0
            }

        },

        methods: {
            
            signOut() {
                VueCookies.remove("mbh_session_token");
                
                this.$store.dispatch("clearUserData")
                this.$router.push('/')
            }
            // This method calls the vuex store action 'logoutUser' to remove the login details
            // and then redirects to the home/landing page
        },
    };
</script>

<style lang="sass">
    @import '../assets/styles/custom-variables.sass'
    #dropdown-right-logged-in
        text-decoration: underline
        text-decoration-color: $mbh-blue-2
    #header-home-btn
        text-align: center
        min-width: 80px
        margin-inline: 0.5rem
    #header-jobs-btn
        text-align: center
        min-width: 80px
        margin-inline: 0.5rem
    #header-analytics-btn
        text-align: center
        min-width: 80px
        margin-inline: 0.5rem
    .ManyBusyHands-logo
        width: 450px
        height: auto
    .nav-item a
        color: $mbh-navy !important
        font-weight: bold
        font-size: 22px !important
    .nav-btn
        font-size: 24px !important
        font-weight: bold
    .drop-down-menu
        width: 20px
        height: auto
    // .dropdown-right
    .dropdown-toggle
        font-size: 22px !important
        font-family: "Noticia Text", serif
        font-weight: bold !important
        color: $mbh-blue-2 !important
    .dropdown-right-menu
        font-size: 20px
    .b-sidebar.shadow.b-sidebar-right.bg-light.text-dark
        width: 100%
    .slide-button
        width: 100%
        text-align: right !important
        color: $mbh-blue-2 !important
        font-size: 14px !important
    .hdr-secondary
        display: none !important
    .hdr-tertiary
        display: none !important
        padding: 0
    @media only screen and (max-width: $screen-max)
        #dropdown-right-logged-in__BV_toggle_
            font-size: x-large !important
        .hdr-main
            display: none !important
        .hdr-secondary
            display: block !important
    @media only screen and (max-width: $tablet-max)
        #dropdown-right-logged-in__BV_toggle_
            display: none !important
        .ManyBusyHands-logo
            width: 300px
        .dropdown-toggle
            font-size: 16px !important
        .dropdown-right-menu
            font-size: 16px
        .hdr-secondary
            display: none !important
        .hdr-tertiary
            display: block !important
    @media only screen and (max-width: $mobile-max)
        .ManyBusyHands-logo
            width: 200px
</style>
