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
    import VueCookies  from 'vue-cookies'
    import axios from "axios";
    
    
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

            this.$wait.start('loading data');

            const retrieveActivityData = async () => {
                this.$store.dispatch("setActivityData");
            }

            retrieveActivityData();

            // get the info from cookie
            const setUserData = async (email) => {
                await this.$store.dispatch("setUserData", email)
            }

            let session_id = VueCookies.get("mbh_session_token")

            if(session_id == null) {
                console.log("not cookie")
            } else {
                axios.get(`http://localhost:8081/sessionToken/getToken/${session_id}`).then(
                    result => {
                        let userEmail = result.data[0].user_name;
                        setUserData(userEmail)
                    },
                    // this.$router.
                )
            }

            this.$wait.end('loading data')

            

            // retrieve postcode
            // const retrievePostcode = async () => {
            //     this.$store.dispatch("setPostcodesData")
            // }

            // retrievePostcode();

        },

        methods: {
            // Function to redirect user/visitor back to the Landing/Home page
            rerouteHome() {
                this.$router.push("/");
            },
        },
    };
</script>
