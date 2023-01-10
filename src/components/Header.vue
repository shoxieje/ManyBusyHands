<template>
    <b-navbar type="primary" variant="light" sticky>
        <!-- BRANDING -->
        <b-navbar-brand :to="{ name: 'BusinessHome' }">
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
            v-show="!this.$store.state.isUserLoggingIn"
            state="background-color: red"
        >
            <b-nav-item class="nav-item" to="/business">Home</b-nav-item>
            <b-nav-item class="nav-item" to="/jobs">Jobs</b-nav-item>
            <b-nav-item class="nav-item" to="/ads">Ads</b-nav-item>
            <b-nav-item class="nav-item" to="/seasonality"
                >Seasonality</b-nav-item
            >

            <!-- <div class="header-button">
                    
                </div> -->
        </b-navbar-nav>

        <b-navbar-nav
            class="ml-auto hdr-main"
            v-show="!this.$store.state.isUserLoggingIn"
        >
            <b-button class="nav-btn" variant="light" to="/business/signin"
                >Sign in</b-button
            >

            <b-button
                class="nav-btn ml-2"
                variant="primary"
                to="/Business/Signup"
                >Sign up</b-button
            >
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto hdr-secondary">
            <b-dropdown
                id="dropdown-right"
                class="dropdown-right m-2"
                right
                text="Menu"
                variant="light"
            >
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    >Home</b-dropdown-item
                >
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    >Jobs</b-dropdown-item
                >
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    >Ads</b-dropdown-item
                >
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    >Seasonality</b-dropdown-item
                >
                <div class="bottom-border"></div>
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    >Sign in</b-dropdown-item
                >
                <b-dropdown-item class="dropdown-right-menu" href="#"
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
                    <div class="bottom-border"></div>
                    <br />
                    <b-button
                        to="/business"
                        variant="light"
                        class="slide-button"
                        >H o m e</b-button
                    >
                    <b-button to="/jobs" variant="light" class="slide-button"
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
                    <div class="bottom-border"></div>
                    <br />
                    <b-button variant="light" class="slide-button"
                        >S i g n I n</b-button
                    >
                    <b-button variant="light" class="slide-button"
                        >S i g n U p</b-button
                    ><br />
                    <br />
                    <div class="bottom-border"></div>
                </div>
            </b-sidebar>
        </div>

        <!-- drop down -> business name -> link -->
    </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "Header",

    computed: {},

    methods: {
        // This method calls the vuex store action 'logoutUser' to remove the login details
        // and then redirects to the home/landing page
    },
};
</script>

<style lang="sass">
@import '../assets/styles/custom-variables.sass'
.ManyBusyHands-logo
    width: 450px
    height: auto

.nav-item a
    color: $mbh-navy !important
    font-weight: bold
    font-size: 22px !important

.nav-item
    margin: auto
    padding: 1em

.nav-btn
    font-size: 24px !important
    font-weight: bold

.drop-down-menu
    width: 20px
    height: auto

.dropdown-right
// btn dropdown-toggle btn-light

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

.hdr-secondary
    display: none !important

.hdr-tertiary
    display: none !important
    padding: 0

@media only screen and (max-width: $screen-max)
    .hdr-main
        display: none !important
    .hdr-secondary
        display: block !important

@media only screen and (max-width: $tablet-max)
    .ManyBusyHands-logo
        width: 300px
    .dropdown-toggle
        font-size: 16px !important
    .dropdown-right-menu
        font-size: 16px

@media only screen and (max-width: $mobile-max)
    .ManyBusyHands-logo
        width: 200px
    .hdr-secondary
        display: none !important
    .hdr-tertiary
        display: block !important
</style>
