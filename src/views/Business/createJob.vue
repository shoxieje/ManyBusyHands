<template>
    <section class="create-job-top">
        <div class="stepper-container mw-60">
            <h1 class="title">Post a job ad</h1>
            <!-- HEADER -->
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

                    <v-stepper-step step="4"> Manage </v-stepper-step>
                </v-stepper-header>

                <!-- CONTENT -->
                <v-stepper-items class="mw-60">
                    <v-stepper-content step="1">
                        <v-card class="mb-12" color="grey lighten-1">
                            <Createjob1
                                ref="firstPage"
                                @jobTitle="getJobTitle"
                                @activity="getActivity"
                                @location="getLocation"
                                @payRangeFrom="getPayRangeFrom"
                                @payRangeTo="getPayRangeTo"
                            />
                        </v-card>
                        <div class="stepper-btn-container">
                            <v-btn class="stepper-btn-primary">
                                <span class="span-hidden">Save Draft</span>
                                <img
                                    src="@/assets/img/icons/save-w-icon.png"
                                    class="stepper-btn-icon"
                                />
                            </v-btn>
                            <div>
                                <v-btn
                                    class="stepper-btn-primary"
                                    @click="firstCreateJob"
                                >
                                    <span class="span-hidden">Continue</span>
                                    <img
                                        src="@/assets/img/icons/right-arrow-w-icon.png"
                                        class="stepper-btn-icon"
                                    />
                                </v-btn>
                            </div>
                        </div>
                    </v-stepper-content>
                </v-stepper-items>

                <v-stepper-items class="mw-60">
                    <v-stepper-content step="2">
                        <v-card class="mb-12" color="grey lighten-1">
                            <Createjob2 ref="secondPage" @adType="getAdType" />
                        </v-card>
                        <div class="stepper-btn-container">
                            <v-btn class="stepper-btn-primary">
                                <span class="span-hidden">Save Draft</span>
                                <img
                                    src="@/assets/img/icons/save-w-icon.png"
                                    class="stepper-btn-icon"
                                />
                            </v-btn>
                            <div>
                                <v-btn
                                    class="stepper-btn-secondary"
                                    @click="e1 = 1"
                                >
                                    <span class="span-hidden">Back</span>
                                    <img
                                        src="@/assets/img/icons/back-b-icon.png"
                                        class="stepper-btn-icon"
                                    />
                                </v-btn>
                                <v-btn
                                    class="stepper-btn-primary"
                                    @click="secondCreateJob"
                                >
                                    <span class="span-hidden">Continue</span>
                                    <img
                                        src="@/assets/img/icons/right-arrow-w-icon.png"
                                        class="stepper-btn-icon"
                                    />
                                </v-btn>
                            </div>
                        </div>
                    </v-stepper-content>
                </v-stepper-items>

                <v-stepper-items class="mw-60">
                    <v-stepper-content step="3">
                        <v-card class="mb-12" color="grey lighten-1">
                            <Createjob3
                                ref="thirdPage"
                                @jobSummary="getJobSummary"
                                @jobDescription="getJobDescription"
                                @jobImage="getJobImage"
                            />
                        </v-card>
                        <div class="stepper-btn-container">
                            <v-btn class="stepper-btn-primary">
                                <span class="span-hidden">Save Draft</span>
                                <img
                                    src="@/assets/img/icons/save-w-icon.png"
                                    class="stepper-btn-icon"
                                />
                            </v-btn>
                            <div>
                                <v-btn
                                    class="stepper-btn-secondary"
                                    @click="e1 = 2"
                                >
                                    <span class="span-hidden">Back</span>
                                    <img
                                        src="@/assets/img/icons/back-b-icon.png"
                                        class="stepper-btn-icon"
                                    />
                                </v-btn>
                                <v-btn
                                    class="stepper-btn-primary"
                                    @click="thirdCreateJob"
                                >
                                    <span class="span-hidden">Continue</span>
                                    <img
                                        src="@/assets/img/icons/right-arrow-w-icon.png"
                                        class="stepper-btn-icon"
                                    />
                                </v-btn>
                            </div>
                        </div>
                    </v-stepper-content>
                </v-stepper-items>

                <v-stepper-items class="mw-60">
                    <v-stepper-content step="4">
                        <v-card class="mb-12" color="grey lighten-1">
                            <Createjob4
                                ref="fourthPage"
                                :jobTitle="this.jobTitle"
                                :activity="this.activity"
                                :location="this.location"
                                :payRangeFrom="this.payRangeFrom"
                                :payRangeTo="this.payRangeTo"
                                :adType="this.adType"
                                :jobSummary="this.jobSummary"
                                :jobDescription="this.jobDescription"
                            />
                        </v-card>
                        <div class="stepper-btn-container">
                            <v-btn class="stepper-btn-primary">
                                <span class="span-hidden">Save Draft</span>
                                <img
                                    src="@/assets/img/icons/save-w-icon.png"
                                    class="stepper-btn-icon"
                                />
                            </v-btn>
                            <div>
                                <v-btn
                                    class="stepper-btn-secondary"
                                    @click="e1 = 3"
                                >
                                    <span class="span-hidden">Back</span>
                                    <img
                                        src="@/assets/img/icons/back-b-icon.png"
                                        class="stepper-btn-icon"
                                    />
                                </v-btn>
                                <v-btn class="stepper-btn-primary" @click="checkOut">
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
import axios from "axios";

// import { config } from "../../utils/constant";

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
            activity: "",
            location: [],
            payRangeFrom: 0.0,
            payRangeTo: 0.0,
            adType: "",
            jobSummary: "",
            jobDescription: "",
            jobImage: "",
            jobImageSrc: "",
        };
    },
    methods: {
        // ---------------- GET DATA FROM CHILD --------------
        getJobTitle(value) {
            this.jobTitle = value;
        },
        getActivity(value) {
            this.activity = value;
        },
        getLocation(value) {
            this.location = value;
        },
        getPayRangeFrom(value) {
            this.payRangeFrom = value;
        },
        getPayRangeTo(value) {
            this.payRangeTo = value;
        },
        getAdType(value) {
            this.adType = value;
        },
        getJobSummary(value) {
            this.jobSummary = value;
        },
        getJobDescription(value) {
            this.jobDescription = value;
        },
        getJobImage(value) {
            this.jobImage = value;
        },
        getJobImageSrc(value) {
            this.jobImageSrc = value;
        },

        checkEmpty(value) {
            return value.length === 0;
        },

        // ---------------- BUTTON METHODS --------------
        firstCreateJob() {
            this.$refs.firstPage.emitJobTitle();
            this.$refs.firstPage.emitActivity();
            this.$refs.firstPage.emitLocState();
            this.$refs.firstPage.emitLocPostcode();
            this.$refs.firstPage.emitLocSuburb();
            this.$refs.firstPage.payRangeFromOnBlur();
            this.$refs.firstPage.payRangeToOnBlur();

            if (
                !this.checkEmpty(this.jobTitle) &&
                !this.checkEmpty(this.activity) &&
                !this.checkEmpty(this.location) &&
                this.payRangeFrom != 0 &&
                this.payRangeTo != 0
            ) {
                console.log("Move to 2nd page");
                console.log(
                    this.jobTitle +
                        ", " +
                        this.activity +
                        ", " +
                        this.location +
                        ", " +
                        this.payRangeFrom +
                        ", " +
                        this.payRangeTo
                );

                this.e1 = 2;
            }
        },

        secondCreateJob() {
            this.$refs.secondPage.emitAdType();
            if (!this.checkEmpty(this.adType)) {
                this.e1 = 3;
                console.log("Move to 3rd page");
                console.log("AdType = " + this.adType);
            }
        },

        thirdCreateJob() {
            this.$refs.thirdPage.emitJobSummary();
            this.$refs.thirdPage.emitJobDescription();
            this.$refs.thirdPage.emitJobImage();

            if (
                !this.checkEmpty(this.jobSummary) &&
                !this.checkEmpty(this.jobDescription)
                // && !this.checkEmpty(this.jobImage)
                // && !this.checkEmpty(this.jobImageSrc)
            ) {
                this.e1 = 4;
            }
        },

        checkOut() {
            axios.post(`http://localhost:8081/create-checkout-session`)
        }
    },
    
    created() {
        const notUserLoggingIn = async () => {
            this.$store.dispatch("authUserLoggingIn", false);
        };

        notUserLoggingIn();
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

.span-hidden
	margin: 2px

.stepper-btn-icon
	width: 20px
	height: 20px
	margin-inline: 5px


@media only screen and (max-width: 600px)
	.span-hidden
		display: none
	.v-btn:not(.v-btn--round).v-size--default
		min-width: unset !important
		margin-bottom: 0 !important
	.v-stepper__label
		margin-left: 0
		min-width: unset
	.v-stepper__step__step
		display: none

/*Post*/
.create-job-top
	text-align: center

.container-job
	text-align: left
	padding: 0 3rem

.container-job-ad
	text-align: left
	padding: 0 5%

.create-job-box
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

@media only screen and (max-width: $laptop-max)
	.title
		font-size: xx-large
		font-weight: bolder

	.subtitle
		font-size: large !important
		margin-left: -0.8rem

	span
		font-size: small !important

	label
		font-size: small

	input
		font-size: small !important

	.v-stepper__step.v-stepper__step--inactive
		display: none !important

	hr
		display: none !important

	.v-stepper__step.v-stepper__step--active
		width: 100%
		padding: 0

	.v-stepper__step.v-stepper__step--active div
		display: block !important
		font-weight: bolder
		color: $mbh-blue-2 !important

	.v-stepper__header

	.v-stepper__step.v-stepper__step--complete
		display: none !important

	.container-job
		padding: 0 2rem

	.col-sm-12
		padding: 0 !important

	.col-sm-4
		padding: 0 !important

	.stepper-btn-container
		flex-wrap: wrap
		padding: 0 0.5rem 1rem

@media only screen and (max-width: $mobile-max)
	.v-btn__content
		font-size: smaller !important

	.v-btn:not(.v-btn--round).v-size--default
		padding: 5px !important

@media only screen and (max-width: $tablet-max)
	.title
		font-size: large
</style>
