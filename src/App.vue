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
       
        };
    },

    computed: {

    },

    created() {
        const retrieveActivityData = async () => {
            this.$store.dispatch("setActivityData")
        }

        retrieveActivityData();
    },

    methods: {
        // Function to redirect user/visitor back to the Landing/Home page
        rerouteHome() {
            this.$router.push("/");
        },
    },
};
</script>
