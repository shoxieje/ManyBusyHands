<template>
    <section class="login-top">

        <b-container>

            <b-row class="pb-3">
                <h3 class="mx-auto">
                    REGISTER YOUR BUSINESS

                </h3>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="businessName" class="required-field">Business Name </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="businessName" type="text" v-model="businessName"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="email" class="required-field">Email </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="email" type="email" v-model="email"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="password" class="required-field">Password</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="password" type="password" v-model="password"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="confirmPassword" class="required-field">Confirm your password </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="confirmPassword" type="password" v-model="confirmPassword"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="abn" class="required-field">ABN </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="abn" type="text" v-model="abn"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="title" class="required-field">Title</label>
                </b-col>
                <b-col sm="9">
                    <multiselect id="title" v-model="title" :options="options" :show-labels="false"> </multiselect>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="firstName" class="required-field">First Name </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="firstName" type="text" v-model="firstName"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="lastName" class="required-field">Last Name </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="lastName" type="text" v-model="lastName"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="address" class="required-field">Your address </label>
                </b-col>
                <b-col sm="9">
                
                    <vue-google-autocomplete id="address" classname="form-control" placeholder="Enter your address" v-on:placechanged="getAddressData">
                    </vue-google-autocomplete>

                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="role" class="required-field">Your Role </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="role" type="text" v-model="role" placeholder="Enter your role in the business"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="phoneNumber">Business Phone Number </label>
                </b-col>
                <b-col sm="9">
                    <VuePhoneNumberInput default-country-code="AU" valid-color="#4b8a54" v-model="phoneNumber" />
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="landlineNumber">Landline Number </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="landlineNumber" type="text" v-model="landlineNumber"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="faxNumber">Fax Number </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="faxNumber" type="text" v-model="faxNumber"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="businessWebsite">Business Website </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="businessWebsite" type="text" v-model="businessWebsite"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="activities">What are the main activities in your business? </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="activity_1" class="my-2" type="text" v-model="activity_1" placeholder="Main activity 1. Enter at least 1 activity"></b-form-input>
                    <b-form-input id="activity_2" class="my-2" type="text" v-model="activity_2" placeholder="Main activity 2"></b-form-input>
                    <b-form-input id="activity_3" class="my-2" type="text" v-model="activity_3" placeholder="Main activity 3"></b-form-input>
                    <b-form-input id="activity_4" class="my-2" type="text" v-model="activity_4" placeholder="Main activity 4"></b-form-input>
                    <b-form-input id="activity_5" class="my-2" type="text" v-model="activity_5" placeholder="Main activity 5"></b-form-input>
                    <b-form-textarea id="activities" type="text" rows="4" max-rows="8" v-model="activities" :placeholder=activityPlaceholder></b-form-textarea>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="photos">Upload your business photos </label>
                </b-col>
                <b-col sm="9">
                    <input id="photos" type="file" @change="uploadPhotos" ref="file">
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="monthPickers">What months are the busiest or the peak work times in your business year? </label>
                </b-col>
                <b-col sm="9">
                    <v-date-picker id="monthPickers" type="month" v-model="months" color="black" :no-title="true" :show-current="false" multiple dark></v-date-picker>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <b-form-group for="casualLabors" v-slot="{ ariaDescribedby }">Do you employ casual labour to cover these periods?</b-form-group>
                </b-col>
                <b-col sm="9">
                    <b-form-radio v-model="casualLabors" :aria-describedby="ariaDescribedby" name="casualLabors" value="yes">Yes</b-form-radio>
                    <b-form-radio v-model="casualLabors" :aria-describedby="ariaDescribedby" name="casualLabors" value="no">No</b-form-radio>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <b-form-group for="postJob" v-slot="{ ariaDescribedby }">Would you like to post a job?</b-form-group>
                </b-col>
                <b-col sm="9">
                    <b-form-radio v-model="postJob" :aria-describedby="ariaDescribedby" name="postJob" value="yes">Yes</b-form-radio>
                    <b-form-radio v-model="postJob" :aria-describedby="ariaDescribedby" name="postJob" value="no">No</b-form-radio>
                </b-col>
            </b-row>
            
            <b-row>
                <b-button variant="primary" id="registerBusinessBtn" @click="registerBtn" >REGISTER YOUR BUSINESS</b-button>
            </b-row>

        </b-container>


    </section>
        
</template>
<script>

    import VuePhoneNumberInput from 'vue-phone-number-input'
    import 'vue-phone-number-input/dist/vue-phone-number-input.css'
    import Multiselect from 'vue-multiselect'
    import {onMounted, onUnmounted, ref} from "vue"
    import axios from 'axios'
    import { config } from '../utils/constant'
    import VueGoogleAutocomplete from "vue-google-autocomplete";
    const bcrypt = require('bcryptjs')


    export default {
        name: 'BusinessSignup',
        components: {
            VuePhoneNumberInput,
            Multiselect,
            VueGoogleAutocomplete
        },

        data() {
            return {
                    businessName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    abn: "",
                    title: "",
                    options: ['Mr', 'Mrs', 'Miss', 'Ms' , 'Dr', 'Others'],
                    firstName: "",
                    lastName: "",
                    role: "",
                    phoneNumber: "",
                    businessWebsite: "",
                    activities: "",
                    activityPlaceholder: "E.g it could be 'Flour Miller' another could be Angus cattle, merino sheep, wool, grains and mention if you are a stud stock producer. Write about your business in 500 words.",
                    months: [],
                    photos: "",
                    casualLabors: "",
                    promotion: "",
                    postJob: "",
                    ariaDescribedby: "",
                    address: "",
                    landlineNumber: "",
                    faxNumber: "",
                    checked: true,
                    activity_1: "",
                    activity_2: "",
                    activity_3: "",
                    activity_4: "",
                    activity_5: "",
                    businessPhotos: null
                }
            },
            
            methods: {
                uploadPhotos() {
                    this.businessPhotos = this.$refs.file.files[0];
                },

                getAddressData(addressData, placeResultData, id) {
                    this.address = addressData;
                    console.log(this.address)
                },

                // ^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$
                checkLandlineNumber() {
                    
                },  
                
                registerBtn() {
                    if(this.checked) {

                        // hash the password
                        let salt = bcrypt.genSaltSync(10);
                        let hashedPassword = bcrypt.hashSync(this.password, salt);
                        
                        console.log(hashedPassword)

                        // create user in database
                        axios.post(`http://localhost:8081/user`, new URLSearchParams({

                            userEmail: this.email,
                            userPassword: hashedPassword,
                            userType: 'BUSINESS'

                        }), config)

                        // // create user details
                        axios.post(`http://localhost:8081/businessUser`, new URLSearchParams({

                            userEmail: this.email,
                            firstName: this.firstName,
                            lastName: this.lastName,
                            businessName: this.businessName,
                            ABN: this.abn,
                            title: this.title,
                            address: this.street,
                            userRole: this.role,
                            phoneNumber: this.phoneNumber,
                            website: this.businessWebsite,
                            mainActivities: this.activities,
                            // photos: this.photos,
                            photos: "test",
                            busiestMonths: this.months,
                            casualLabors: this.casualLabors,
                            promotion: this.promotion,
                            postJob: this.postJob,

                        }), config)
                    
                    }
                }

            }
        }
            

</script>

<style>
    .required-field::after {
        content: "*";
        color: red;
        margin-left: 2px
    }


</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>