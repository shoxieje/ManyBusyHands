<template>
    <section class="login-top">

        <b-container>

            <b-row class="pb-3">
                <h3 class="mx-auto">
                    REGISTER AS JOB SEEKER
                </h3>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="title">Title </label>
                </b-col>
                <b-col sm="9">
                    <multiselect id="title" v-model="title" :options="options" :show-labels="false"> </multiselect>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="firstName">First Name </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="firstName" type="text" v-model="firstName"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="lastName">Last Name </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="lastName" type="text" v-model="lastName"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="email">Email </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="email" type="email" v-model="email"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="password">Password </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="password" type="password" v-model="password"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="confirmEmail">Confirm your password </label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="confirmPassword" type="password" v-model="confirmPassword"></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="address">Your address </label>
                </b-col>
                <b-col sm="9">
                    <vue-google-autocomplete id="address" classname="form-control" placeholder="Enter your address" v-on:placechanged="getAddressData">
                    </vue-google-autocomplete>

                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="phoneNumber">Phone Number </label>
                </b-col>
                <b-col sm="9">
                    <VuePhoneNumberInput default-country-code="AU" valid-color="#4b8a54" v-model="phoneNumber" />
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="datePicker">Date of birth</label>
                </b-col>
                <b-col sm="9">
                    <v-date-picker id="datePicker" v-model="date" color="black" :show-current="false" dark></v-date-picker>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="activities">What is your nationality?</label>
                </b-col>
                <b-col sm="9">
                    <country-select v-model="country" :country="country" topCountry="AU" class="form-control"/>
                </b-col>
            </b-row>


            <b-row class="my-1">
                <b-col sm="3">
                    <b-form-group for="visa" v-slot="{ ariaDescribedby }">Visa Status</b-form-group>
                </b-col>
                <b-col sm="9">
                    <b-form-radio v-model="visa" :aria-describedby="ariaDescribedby" name="visa" value="AU">Australian / Australian resident</b-form-radio>
                    <b-form-radio v-model="visa" :aria-describedby="ariaDescribedby" name="visa" value="NZ">New Zealander</b-form-radio>
                    <b-form-radio v-model="visa" :aria-describedby="ariaDescribedby" name="visa" value="Tourist">I am on a tourist visa</b-form-radio>
                    <b-form-radio v-model="visa" :aria-describedby="ariaDescribedby" name="visa" value="417">I am on a Working Holiday Maker 417 visa</b-form-radio>
                    <b-form-radio v-model="visa" :aria-describedby="ariaDescribedby" name="visa" value="462">I am on a Work and Holiday 462 visa</b-form-radio>
                    <b-form-radio v-model="visa" :aria-describedby="ariaDescribedby" name="visa" value="International Student">I am an international student</b-form-radio>
                    <b-form-radio v-model="visa" :aria-describedby="ariaDescribedby" name="visa" value="Other">Other</b-form-radio>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="education">So as to provide information to a prospective employer / host please indicate your education achievements?</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="education" type="text" v-model="education" placeholder="Education achievements"></b-form-input>
                </b-col>
            </b-row>


            <b-row class="my-1">
                <b-col sm="3">
                    <label for="interests">What are your interests? As other people often like to know about your interests. </label>
                </b-col>
                <b-col sm="9">
                    <b-form-textarea id="interests" type="text" rows="4" max-rows="8" v-model="interests" placeholder="Tell us about your interests"></b-form-textarea>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="work_experiences">What is your work experience as this can often assist you in seeking work? </label>
                </b-col>
                <b-col sm="9">
                    <b-form-textarea id="work_experiences" type="text" rows="4" max-rows="8" v-model="work_experiences" :placeholder=work_experiences_placeholder></b-form-textarea>
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="photo">Upload your photos</label>
                </b-col>
                <b-col sm="9">
                    <input id="photo" type="file" @change="uploadPhotos" ref="file">
                </b-col>
            </b-row>

            <b-row class="my-1">
                <b-col sm="3">
                    <label for="resume">Upload your resume</label>
                </b-col>
                <b-col sm="9">
                    <input id="resume" type="file" @change="uploadResume" ref="file">
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
    import vueCountryRegionSelect from 'vue-country-region-select'



    export default {
        name: 'JobSeekerSignup',
        components: {
            VuePhoneNumberInput,
            Multiselect,
            vueCountryRegionSelect,
            VueGoogleAutocomplete
        },

        data() {
            return {
                    email: "",
                    password: "",
                    confirmPassword: "",
                    title: "",
                    options: ['Mr', 'Mrs', 'Miss', 'Dr', 'Others'],
                    firstName: "",
                    lastName: "",
                    phoneNumber: "",
                    interests: "",
                    work_experiences_placeholder: `Tell an employer or host a little bit about you (500 words) for example where you have worked and what experience you have - when you apply for a job you will be able to uploadyour resume / CV. If you have written references in English from prior employers then it is a good idea to include these when you submit an application.`,
                    date: "",
                    visa: "",
                    ariaDescribedby: "",
                    address: "",
                    checked: true,
                    country: "",
                    education: "",
                    work_experiences: "",
                    photo: "",
                    resume: "",
                    imagePhotos: null,
                    resumeProfile: null
                }
            },

            methods: {
                uploadPhotos() {
                    this.imagePhotos = this.$refs.file.files[0];
                },

                uploadResume() {
                    this.resumeProfile = this.$refs.file.files[0];
                },

                getAddressData(addressData, placeResultData, id) {
                    this.address = addressData;
                    console.log(this.address)
                },

                registerBtn() {
                    if(this.checked) {

                        // create user in database
                        axios.post(`http://localhost:8081/user`, new URLSearchParams({

                            userEmail: this.email,
                            userPassword: this.password,
                            userType: 'JOB SEEKER'

                        }), config)

                        // create user details
                        // axios.post(`http://localhost:8081/businessUser`, new URLSearchParams({

                        //     userEmail: this.email,
                        //     firstName: this.firstName,
                        //     lastName: this.lastName,
                        //     businessName: this.businessName,
                        //     ABN: this.abn,
                        //     title: this.title,
                        //     address: this.street,
                        //     userRole: this.role,
                        //     phoneNumber: this.phoneNumber,
                        //     website: this.businessWebsite,
                        //     mainActivities: this.activities,
                        //     photos: this.photos,
                        //     busiestMonths: this.months,
                        //     casualLabors: this.casualLabors,
                        //     promotion: this.promotion,
                        //     postJob: this.postJob,

                        // }), config)
                        
                        console.log("COMPLETE")
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