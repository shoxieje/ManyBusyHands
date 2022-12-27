<template>
    <section class="signup-top">
        <b-container class="container-signup">
            <h2 class="title-signup">Choose an account to get started</h2>
            <b-row>
                <b-col>
                    <b-card
                        title="Job Seeker"
                        img-src="../assets/img/signup/job-seeker.jpg"
                        img-alt="Job Seeker"
                        img-top
                        tag="article"
                        class="mb-2 card-signup"
                    >
                        <b-card-text>
                            Join thousands of MBH users today. Find Rural And
                            Regional Jobs- Australia Wide By State & Territory.
                        </b-card-text>

                        <b-button href="#" variant="primary"
                            ><router-link
                                to="/JobSeeker-Signup"
                                class="text-white card-signup-btn"
                            >
                                Join as Job Seeker
                            </router-link></b-button
                        >
                    </b-card>
                </b-col>

                <b-col>
                    <b-card
                        title="Business"
                        img-src="../assets/img/signup/business.jpg"
                        img-alt="Business"
                        img-top
                        tag="article"
                        class="mb-2 card-signup"
                    >
                        <b-card-text>
                            Locate Rural And Regional Workers For Seasonal Work.
                            Sign up with us today to improve your supply chain
                            efficiency, lower your production costs and lower
                            food costs.
                        </b-card-text>

                        <b-button href="#" variant="secondary"
                            ><router-link
                                to="/Business-Signup"
                                class="text-white card-signup-btn"
                                >Register your business
                            </router-link></b-button
                        >
                    </b-card>
                </b-col>

                <b-col>
                    <b-card
                        title="Accommodation Providers"
                        img-src="../assets/img/signup/business.jpg"
                        img-alt="Accommodation Providers"
                        img-top
                        tag="article"
                        class="mb-2 card-signup"
                    >
                        <b-card-text>
                            Hostile, caravan, contactable camping rounds and
                            some country pubs
                        </b-card-text>
                        <b-button href="#" variant="primary"
                            ><router-link
                                to="/Business-Signup"
                                class="text-white card-signup-btn"
                                >Join as Accommodation Provider
                            </router-link></b-button
                        >
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    name: "Signup",

    data() {
        return {};
    },
};
</script>

<style>
.container-signup {
    padding-top: 5rem;
    padding-bottom: 5rem;
    text-align: center;
}
.title-signup {
    /* $mbh-navy */
    color: #25274d;
    padding-bottom: 3rem;
}
.card-signup {
    min-width: 15rem;
    max-width: 20rem;
    height: 100%;
    text-align: justify;
    margin-inline: auto;
    /* $mbh-navy */
    color: #25274d;
}

.signup-top {
    max-width: 1600px;
    margin-inline: auto;
}
</style>
