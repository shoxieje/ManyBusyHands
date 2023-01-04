<template>
    <section class="create-job-top">
        <div class="stepper-container mw-60">
            <h1 class="title">Post a job ad</h1>

            <v-stepper v-model="e1">
                <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1">
                        Role
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 2" step="2">
                        Ad Types
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 3" step="3">
                        Description
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 4" step="4">
                        Manage
                    </v-stepper-step>
                </v-stepper-header>

                <v-stepper-items class="mw-60">
                    <v-stepper-content step="1">
                        <v-card class="mb-12" color="grey lighten-1">
                            <Createjob1 />
                        </v-card>
                        <div class="stepper-btn-container">
                            <v-btn class="stepper-btn-primary">
                                Save Draft
                            </v-btn>
                            <div>
                                <v-btn
                                    class="stepper-btn-primary"
                                    @click="e1 = 2"
                                >
                                    Continue
                                </v-btn>
                            </div>
                        </div>
                    </v-stepper-content>
                </v-stepper-items>

                <v-stepper-items class="mw-60">
                    <v-stepper-content step="2">
                        <v-card class="mb-12" color="grey lighten-1">
                            <Createjob2 />
                        </v-card>
                        <div class="stepper-btn-container">
                            <v-btn class="stepper-btn-primary">
                                Save Draft
                            </v-btn>
                            <div>
                                <v-btn
                                    class="stepper-btn-secondary"
                                    @click="e1 = 1"
                                >
                                    Back
                                </v-btn>
                                <v-btn
                                    class="stepper-btn-primary"
                                    @click="e1 = 3"
                                >
                                    Continue
                                </v-btn>
                            </div>
                        </div>
                    </v-stepper-content>
                </v-stepper-items>

                <v-stepper-items class="mw-60">
                    <v-stepper-content step="3">
                        <v-card class="mb-12" color="grey lighten-1">
                            <Createjob3 />
                        </v-card>
                        <div class="stepper-btn-container">
                            <v-btn class="stepper-btn-primary">
                                Save Draft
                            </v-btn>
                            <div>
                                <v-btn
                                    class="stepper-btn-secondary"
                                    @click="e1 = 2"
                                >
                                    Back
                                </v-btn>
                                <v-btn
                                    class="stepper-btn-primary"
                                    @click="e1 = 4"
                                >
                                    Continue
                                </v-btn>
                            </div>
                        </div>
                    </v-stepper-content>
                </v-stepper-items>

                <v-stepper-items class="mw-60">
                    <v-stepper-content step="4">
                        <v-card class="mb-12" color="grey lighten-1">
                            <Createjob4 />
                        </v-card>
                        <div class="stepper-btn-container">
                            <v-btn class="stepper-btn-primary">
                                Save Draft
                            </v-btn>
                            <div>
                                <v-btn
                                    class="stepper-btn-secondary"
                                    @click="e1 = 3"
                                >
                                    Back
                                </v-btn>
                                <v-btn class="stepper-btn-primary">
                                    Create a job ad
                                </v-btn>
                            </div>
                        </div>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </div>
    </section>
</template>

<script>
import Createjob1 from "./components/createjob-component/Createjob-1.vue";
import Createjob2 from "./components/createjob-component/Createjob-2.vue";
import Createjob3 from "./components/createjob-component/Createjob-3.vue";
import Createjob4 from "./components/createjob-component/Createjob-4.vue";
// import { config } from "../../utils/constant";

// const radioQuestions = config.mockData.radioQuestions;
// const checkBoxQuestions = config.mockData.checkBoxQuestions;
export default {
    components: {
        Createjob1,
        Createjob2,
        Createjob3,
        Createjob4,
    },
    name: "CreateJob",
    data() {
        return {
            e1: 1,
            jobTitle: "",
            location: "",
            payRangeTo: 0,
            payRangeFrom: 0,
            category: "",
            categories: ["Mr", "Mrs", "Miss", "Ms", "Dr", "Others"],
            adType: "",
            jobSummary: "",
            jobDescription: "",
            video: "",
            radioQuestion0: "",
            radioQuestion1: "",
            radioQuestion2: "",
            radioQuestion3: "",
            radioQuestion4: "",
            radioQuestion5: "",
            radioQuestion6: "",
            radioQuestion7: "",
            radioQuestion8: "",
            radioQuestion9: "",
            checkBoxQuestion0: "",
            checkBoxQuestion1: "",
            checkBoxQuestion2: "",
            checkBoxQuestion3: "",
            checkBoxQuestion4: "",
            checkBoxQuestion6: "",
            checkBoxQuestion6: "",
            checkBoxQuestion7: "",
            checkBoxQuestion8: "",
            checkBoxQuestion9: "",
        };
    },
    methods: {
        // passMockData() {
        //     this.checkBoxQuestions = checkBoxQuestions;
        //     this.radioQuestions = radioQuestions;
        // },
    },
    created() {
        const notUserLoggingIn = async () => {
            this.$store.dispatch("authUserLoggingIn", false);
        };

        notUserLoggingIn();
        this.passMockData();
    },
};
</script>
<style lang="sass">
@import '../../assets/styles/custom-variables.sass'





/* Stepper */

.v-stepper__label
	font-size: 20px !important
	margin-left: 1rem

.stepper-container
	padding: 3rem
	margin-inline: auto

.stepper-btn-container
	border-style: solid none none none
	border-color: $mbh-gray-0
	border-width: 2px
	display: flex
	justify-content: space-between
	padding: 0 2rem 2rem

.stepper-btn-primary
	background-color: $mbh-blue-2 !important
	color: white !important

.stepper-btn-secondary
	color: $mbh-navy !important

.v-sheet.v-card:not(.v-sheet--outlined)
	box-shadow: none !important

.v-btn:not(.v-btn--round).v-size--default
	min-width: 120px !important

.v-stepper__content
	padding: 0 !important


/*Post*/
.create-job-top
	text-align: center
	// background-color: pink
.container-job
	text-align: left
	padding: 0 3rem
	// background-color: yellow

.container-job-ad
	text-align: left
	padding: 0 15%

.create-job-box
	// background-color: #f1f1f1
	// border-radius: 10px
	// padding: 1rem
	margin: 1rem 0

.title
	color: $mbh-navy
	padding-bottom: 1rem
	text-align: left

.subtitle
	color: $mbh-blue-2
	font-size: 1.5rem
	padding-bottom: 1rem

.required-field::after
	content: "*"
	color: red
	margin-left: 2px
</style>
