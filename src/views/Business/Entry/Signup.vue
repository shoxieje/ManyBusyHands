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
                        <v-card class="mb-12" color="grey lighten-1">
                            <BusinessSignup1
                                ref="firstPage"
                                @registerEmail="getEmail"
                                @registerPassword="getPassword"
                        /></v-card>

                        <div class="stepper-btn-container">
                            <v-btn
                                class="stepper-btn-primary"
                                @click="firstRegister"
                            >
                                Register
                            </v-btn>
                        </div>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                        <v-card class="mb-12" color="grey lighten-1"
                            ><BusinessSignup2
                                ref="secondPage"
                                @firstName="getFn"
                                @lastName="getLn"
                                @role="getRole"
                                @businessName="getBn"
                                @abn="getABN"
                                @address="getAddress"
                                @landlineNumber="getLandline"
                                @mobileNumber="getMobile"
                                @title="getTitle"
                                @website="getWebsite"
                                @faxNumber="getFax"
                        /></v-card>

                        <div class="stepper-btn-container">
                            <v-btn
                                class="stepper-btn-primary"
                                @click="secondRegister"
                            >
                                Continue
                            </v-btn>
                        </div>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                        <v-card class="mb-12" color="grey lighten-1"
                            ><BusinessSignup3
                                ref="thirdPage"
                                @activity_1="getActivity1"
                                @activity_2="getActivity2"
                                @activity_3="getActivity3"
                                @activity_4="getActivity4"
                                @activity_5="getActivity5"
                                @activity_description="getActivityDescription"
                                @images="getImages"
                                @busiest_months="getMonths"
                        /></v-card>

                        <div class="stepper-btn-container">
                            <v-btn
                                text
                                class="stepper-btn-secondary"
                                @click="e1 = 2"
                            >
                                Back
                            </v-btn>
                            <v-btn
                                class="stepper-btn-primary"
                                @click="finalRegister"
                            >
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
import BusinessSignup1 from "../components/signup-component/Signup-1.vue";
import BusinessSignup2 from "../components/signup-component/Signup-2.vue";
import BusinessSignup3 from "../components/signup-component/Signup-3.vue";
import { config } from "../../../utils/constant.js";
import axios from "axios";
import bcrypt from "bcryptjs";

export default {
    name: "Signup",
    components: {
        BusinessSignup1,
        BusinessSignup2,
        BusinessSignup3,
    },
    data() {
        return {
            email: "",
            password: "",
            title: "",
            firstName: "",
            lastName: "",
            role: "",
            businessName: "",
            abn: "",
            address: "",
            landlineNumber: "",
            mobileNumber: "",
            faxNumber: "",
            website: "",
            activity_1: "",
            activity_2: "",
            activity_3: "",
            activity_4: "",
            activity_5: "",
            activityDescription: "",
            images: [],
            imagesName: [],
            months: [],
            monthsValue: [],
            e1: 1,
        };
    },

    created() {},

    methods: {
        // ------------------ GET DATA FROM CHILD -----------------------------
        getEmail(value) {
            this.email = value;
        },
        getPassword(value) {
            this.password = value;
        },
        getFn(value) {
            this.firstName = value;
        },
        getLn(value) {
            this.lastName = value;
        },
        getRole(value) {
            this.role = value;
        },
        getBn(value) {
            this.businessName = value;
        },
        getABN(value) {
            this.abn = value;
        },
        getAddress(value) {
            this.address = value;
        },
        getLandline(value) {
            this.landlineNumber = value;
        },
        getMobile(value) {
            this.mobileNumber = value;
        },
        getTitle(value) {
            this.title = value;
        },
        getWebsite(value) {
            this.website = value;
        },
        getActivity1(value) {
            this.activity_1 = value;
        },
        getActivity2(value) {
            this.activity_2 = value;
        },
        getActivity3(value) {
            this.activity_3 = value;
        },
        getActivity4(value) {
            this.activity_4 = value;
        },
        getActivity5(value) {
            this.activity_5 = value;
        },
        getActivityDescription(value) {
            this.activityDescription = value;
        },
        getMonths(value) {
            this.months = value;
        },
        getImages(value) {
            this.images = value;
        },
        getFax(value) {
            this.faxNumber = value;
        },

        // -----------------------------------------------------------------------------------------

        validEmail() {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                this.email
            );
        },

        // Computed boolean variable that returns whether the 'password' input is more than or equal to 5 chars
        validPassword() {
            if (this.password.length < 6) return false;
            return true;
        },

        firstRegister() {
            this.$refs.firstPage.emailOnBlur();
            this.$refs.firstPage.passwordOnBlur();

            if (this.validEmail() && this.validPassword()) {
                this.hashedPassword = bcrypt.hashSync(this.password, 10);
                // find if email exist
                axios
                    .get(
                        `http://localhost:8081/user/searchByEmail/${this.email}`
                    )
                    .then((result) => {
                        if (result.data.length > 0) {
                            this.$refs.firstPage.setSignUpError(
                                true,
                                "This email is already registered. Sign in or use a different email."
                            );
                        } else {
                            this.$refs.firstPage.setSignUpError(false, "");
                            this.e1 = 2;
                        }
                    });
            }
        },
        secondRegister() {
            this.$refs.secondPage.firstNameOnBlur();
            this.$refs.secondPage.lastNameOnBlur();
            this.$refs.secondPage.roleOnBlur();
            this.$refs.secondPage.businessNameOnBlur();
            this.$refs.secondPage.ABNOnBlur();
            this.$refs.secondPage.addressOnBlur();
            this.$refs.secondPage.emitTitle();

            if (
                !this.checkEmpty(this.title) &&
                !this.checkEmpty(this.firstName) &&
                !this.checkEmpty(this.lastName) &&
                !this.checkEmpty(this.role) &&
                !this.checkEmpty(this.businessName) &&
                !this.checkEmpty(this.abn) &&
                !this.checkEmpty(this.address)
            ) {
                this.e1 = 3;
            }
        },

        checkEmpty(value) {
            return value.length === 0;
        },

        finalRegister() {
            this.$refs.thirdPage.emitActivity1();
            this.$refs.thirdPage.emitActivity2();
            this.$refs.thirdPage.emitActivity3();
            this.$refs.thirdPage.emitActivity4();
            this.$refs.thirdPage.emitActivity5();

            for (let month of this.months)
                this.monthsValue.push(parseInt(month.split("-")[1]));

            this.monthsValue.sort(function (a, b) {
                return a - b;
            });

            // get image name
            for (let x of this.images) {
                let fileName = x.getAll("filename")[0];
                this.imagesName.push(fileName);

                let config = {
                    method: "post",
                    maxBodyLength: Infinity,
                    url: `http://localhost:8081/business_user/${this.email}/images/${fileName}`,
                    headers: {
                        "Content-Type": `multipart/form-data; boundary=${x._boundary}`,
                    },
                    data: x,
                };
                axios(config);
            }

            axios
                .post(
                    `http://localhost:8081/user`,
                    new URLSearchParams({
                        userEmail: this.email,
                        userPassword: this.hashedPassword,
                        userType: "BUSINESS",
                    }),
                    config
                )
                .then(
                    axios
                        .get(
                            `http://localhost:8081/user/searchByEmail/${this.email}`
                        )
                        .then((results) => {
                            console.log(results);
                        }),

                    // second call
                    axios.post(
                        `http://localhost:8081/businessUser`,
                        new URLSearchParams({
                            userEmail: this.email,
                            firstName: this.firstName,
                            lastName: this.lastName,
                            businessName: this.businessName,
                            ABN: this.abn,
                            title: this.title,
                            address: this.address,
                            userRole: this.role,
                            landlineNumber: this.landlineNumber,
                            phoneNumber: this.mobileNumber,
                            website: this.website,
                            activity1: this.activity_1 + 1,
                            activity2: this.activity_2 + 1,
                            activity3: this.activity_3 + 1,
                            activity4: this.activity_4 + 1,
                            activity5: this.activity_5 + 1,
                            mainActivities: this.activityDescription,
                            photos: this.imagesName,
                            busiestMonths: this.monthsValue,
                        }),
                        config.headers
                    )
                )
                .then(
                    axios
                        .get(
                            `http://localhost:8081/businessUser/searchByEmail/${this.userEmail}`
                        )
                        .then(
                            this.$store.dispatch("setUserData", this.email),
                            this.$store.dispatch("authUserLoggingIn", true),
                            this.$router.push("/")
                        )
                );
        },
    },
};
</script>

<style lang="sass">
@import '../../../assets/styles/custom-variables.sass'
.mw-60
    max-width: 60rem
    margin-inline: auto

/* Stepper */
.stepper-container
    padding: 3rem

.stepper-btn-container
    text-align: right

.stepper-btn-primary
    background-color: $blue-mbh-0 !important
    color: white !important

.stepper-btn-secondary
    // color: $mbh-navy !important

/*Sign up*/
.container-signup
    text-align: left

.business-signup-box
    background-color: #f1f1f1
    border-radius: 10px
    padding: 3rem
    margin: 1rem 0

.title-signup
    // color: $mbh-navy
    padding-bottom: 1rem

.subtitle-signup
    color: $black-mbh-0
    font-size: 1.5rem
    padding-bottom: 1rem

.business-signup-btn
    color: white
    font-weight: bold
    font-size: 20px !important

.required-field::after
    content: "*"
    color: red
    margin-left: 2px

@media only screen and (max-width: $laptop-max)
    .v-stepper__step.v-stepper__step--inactive
        display: none !important
    .v-stepper__step.v-stepper__step--active
        width: 100%
        padding: 0
    .v-stepper__step.v-stepper__step--active div
        display: block !important
        font-weight: bolder
        color: $black-mbh-0 !important
    .v-stepper__step.v-stepper__step--complete
        display: none !important
    .stepper-btn-container
        flex-wrap: wrap
        padding: 0 0.5rem 1rem

@media only screen and (max-width: $mobile-max)
    .v-btn__content
        font-size: smaller !important
    .v-btn:not(.v-btn--round).v-size--default
        padding: 5px !important

@media only screen and (max-width: $tablet-max)
    .stepper-container
        padding: 3rem 0.5rem
    .v-stepper__content
        padding: 0.5rem
    .business-signup-box
        padding: 2rem 1rem
    .title-signup
        font-size: x-large
    .subtitle-signup
        font-size: large
        margin-left: -0.5rem !important
    label
        font-size: medium
    .col-sm-3
        padding: 3px !important
    .col-sm-9
        padding: 3px !important

    .col div
        padding: 3px !important

@media only screen and (max-width: 576px)
    .v-picker__body.v-picker__body--no-title.theme--dark
        width: unset !important
</style>
