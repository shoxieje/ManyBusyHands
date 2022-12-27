<template>
    <section class="signup-top">
        <div class="stepper-container mw-60">
            <h1 class="title-signup">Register your business account</h1>
            <v-stepper v-model="e1">
                <!-- HEADER -->
                <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1">
                        Register your account
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 2" step="2">
                        Enter your details
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3">
                        More about your business details
                    </v-stepper-step>
                </v-stepper-header>

                <!-- CONTENT -->
                <v-stepper-items class="mw-60">
                    <v-stepper-content step="1">
                        <v-card class="mb-12" color="grey lighten-1"
                            ><BusinessSignup1
                        /></v-card>

                        <div class="stepper-btn-container">
                            <v-btn text class="stepper-btn-secondary">
                                Cancel
                            </v-btn>
                            <v-btn class="stepper-btn-primary" @click="e1 = 2">
                                Continue
                            </v-btn>
                        </div>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                        <v-card class="mb-12" color="grey lighten-1"
                            ><BusinessSignup2
                        /></v-card>

                        <div class="stepper-btn-container">
                            <v-btn
                                text
                                class="stepper-btn-secondary"
                                @click="e1 = 1"
                            >
                                Back
                            </v-btn>
                            <v-btn class="stepper-btn-primary" @click="e1 = 3">
                                Continue
                            </v-btn>
                        </div>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                        <v-card class="mb-12" color="grey lighten-1"
                            ><BusinessSignup3
                        /></v-card>

                        <div class="stepper-btn-container">
                            <v-btn
                                text
                                class="stepper-btn-secondary"
                                @click="e1 = 2"
                            >
                                Back
                            </v-btn>
                            <v-btn class="stepper-btn-primary" @click="e1 = 1">
                                Register
                            </v-btn>
                        </div>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </div>
    </section>
</template>

<script>
import BusinessSignup1 from "./components/Signup-1.vue";
import BusinessSignup2 from "./components/Signup-2.vue";
import BusinessSignup3 from "./components/Signup-3.vue";
export default {
    components: {
        BusinessSignup1,
        BusinessSignup2,
        BusinessSignup3,
    },
    data() {
        return {
            e1: 1,
        };
    },
};
</script>
<style>
.mw-60 {
    max-width: 60rem;
    margin-inline: auto;
}

/* Stepper */
.stepper-container {
    padding: 3rem;
}
.stepper-btn-container {
    text-align: right;
}
.stepper-btn-primary {
    /* blue mbh-blue-2 */
    background-color: #29648a !important;
    color: white !important;
}
.stepper-btn-secondary {
    /* navy mbh-navy */
    color: #25274d !important;
}

/*Sign up*/
.container-signup {
    text-align: left;
}
.business-signup-box {
    background-color: #f1f1f1;
    border-radius: 10px;
    padding: 3rem;
    margin: 1rem 0;
}
.title-signup {
    /* $mbh-navy */
    color: #25274d;
    padding-bottom: 1rem;
}
.subtitle-signup {
    /* $mbh-blue-2 */
    color: #29648a;
    font-size: 1.5rem;
    padding-bottom: 1rem;
}
.business-signup-btn {
    color: white;
    font-weight: bold;
    font-size: 20px !important;
}
.required-field::after {
    content: "*";
    color: red;
    margin-left: 2px;
}
</style>
