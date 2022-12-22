<template>
    <section class="login-top">

        <b-container>
            <b-row align-v="center">
                <b-col>
                    <b-card
                        title="Job Seeker"
                        img-src="../assets/img/signup/job-seeker.jpg"
                        img-alt="Job Seeker"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        Join thousands of MBH users today. Find Rural And Regional Jobs- Australia Wide By State & Territory.
                        </b-card-text>

                        <b-button href="#" variant="primary"><router-link to="/JobSeeker-Signup" class="text-white" style="text-decoration: none; color: inherit"> Join as Job Seeker </router-link></b-button>
                    </b-card>
                </b-col>

                <b-col>
                    <b-card
                        title="Business"
                        img-src="../assets/img/signup/business.jpg"
                        img-alt="Business"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                            Locate Rural And Regional Workers For Seasonal Work. Sign up with us today to improve your supply chain efficiency, lower your production costs and lower food costs.
                        </b-card-text>

                        <b-button href="#" variant="primary"><router-link to="/Business-Signup" class="text-white" style="text-decoration: none; color: inherit">Register your business </router-link></b-button>
                    </b-card>
                </b-col>

                <b-col>
                    <b-card
                        title="Accommodation Providers"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Accommodation Providers"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        Hostile, caravan, contactable camping rounds and some country pubs
                        </b-card-text>

                        <b-button href="#" variant="primary">Join as Accommodation Provider</b-button>
                    </b-card>
                </b-col>


            </b-row>
        </b-container>


    </section>
    
</template>

<script>

    export default {
        name: 'Signup',

        data () {
            return {}
        }
    }

</script>