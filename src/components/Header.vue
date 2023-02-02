<!-- HEADER SIGNED IN -->
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
            <b-nav-item class="nav-item" id="header-home-btn" to="/business"
                ><span style="color: #29648a !important">Home</span></b-nav-item
            >
            <b-nav-item class="nav-item" id="header-jobs-btn" to="/jobs"
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
            class="ml-auto hdr-main-secondary"
            v-show="!this.$store.state.isUserLoggingIn"
        >
            <b-dropdown
                id="dropdown-right-logged-in"
                class="dropdown-right m-2"
                right
                :text="username"
                variant="light"
            >
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    ><strong>{{ username }}</strong></b-dropdown-item
                >
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    >{{ firstName }} {{ lastName }}</b-dropdown-item
                >
                <div class="bottom-border"></div>
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    >Account details</b-dropdown-item
                >
                <b-dropdown-item class="dropdown-right-menu" href="/invoices"
                    >Invoices history</b-dropdown-item
                >
                <div class="bottom-border"></div>
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    >Contact us</b-dropdown-item
                >
                <b-dropdown-item class="dropdown-right-menu" href="#"
                    >Sign out</b-dropdown-item
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
                    <b-button
                        to="/analytics"
                        variant="light"
                        class="slide-button"
                        >A n a l y t i c s</b-button
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
    data() {
        return {
            username: "ManyBusyHands",
            firstName: "Your",
            lastName: "Name",
        };
    },

    methods: {
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
