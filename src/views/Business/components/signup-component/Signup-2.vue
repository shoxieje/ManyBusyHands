<template>
    <section class="signup-top">
        <b-container class="container-signup">
            <!-- <h2 class="title-signup">
                Enter your details and business details
            </h2> -->
            <!-- YOUR DETAILS -->
            <div class="business-signup-box">
                <h3 class="subtitle-signup">Your Details</h3>
                <b-form id="business-signup-form1" class="text-primary">
                    <!-- INPUTS -->
                    <b-row class="my-1">
                        <b-col sm="3">
                            <label for="title" class="required-field"
                                >Title</label
                            >
                        </b-col>
                        <b-col sm="9">
                            <multiselect
                                style="border: 1px solid #ced4da"
                                placeholder="Select a title"
                                v-model="title"
                                :options="options"
                                :show-labels="false"
                                :searchable="false"
                                @input="emitTitle"

                            >
                            </multiselect>

                            <!-- rt = required title -->
                            <div id="rt" style="color: red; display: none;">Title is required</div>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="3">
                            <label for="firstName" class="required-field"
                                >First Name
                            </label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-input
                                id="firstName"
                                type="text"
                                @blur="firstNameOnBlur"
                                @input="emitFirstName"
                                aria-describedby="input-wrong-first-name"
                                v-model="firstName"
                                :state="checkedFirstName"
                            ></b-form-input>

                            <b-form-invalid-feedback id="input-wrong-first-name">
                                {{ errFirstName }}
                            </b-form-invalid-feedback>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="3">
                            <label for="lastName" class="required-field"
                                >Last Name
                            </label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-input
                                id="lastName"
                                type="text"
                                @blur="lastNameOnBlur"
                                @input="emitLastName"
                                v-model="lastName"
                                aria-describedby="input-wrong-last-name"
                                :state="checkedLastName"
                            ></b-form-input>

                            <b-form-invalid-feedback id="input-wrong-last-name">
                                {{ errLastName }}
                            </b-form-invalid-feedback>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="3">
                            <label for="role" class="required-field"
                                >Your Role
                            </label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-input
                                id="role"
                                @blur="roleOnBlur"
                                @input="emitRole"
                                type="text"
                                v-model="role"
                                placeholder="Enter your role in the business"
                                aria-describedby="input-wrong-role"
                                :state="checkedRole"
                            ></b-form-input>

                            <!-- rr = required role -->
                            <b-form-invalid-feedback id="input-wrong-role">
                                Your Role is required 
                            </b-form-invalid-feedback>
                        </b-col>
                    </b-row>
                </b-form>
            </div>

            <!-- BUSINESS DETAILS -->
            <div class="business-signup-box">
                <h3 class="subtitle-signup">Business Details</h3>
                <b-form id="business-signup-form2" class="text-primary">
                    <!-- INPUTS -->

                    <b-row class="my-1">
                        <b-col sm="3">
                            <label for="businessName" class="required-field"
                                >Business Name
                            </label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-input
                                id="businessName"
                                type="text"
                                @blur="businessNameOnBlur"
                                @input="emitBusinessName"
                                v-model="businessName"
                                aria-describedby="input-wrong-business-name"
                                :state="checkedBusinessName"
                            ></b-form-input>

                            <b-form-invalid-feedback id="input-wrong-business-name">
                                Business Name is required 
                            </b-form-invalid-feedback>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="3">
                            <label for="abn" class="required-field">ABN </label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-input
                                id="abn"
                                type="text"
                                @blur="ABNOnBlur"
                                @input="emitABN"
                                v-model="abn"
                                aria-describedby="input-wrong-abn"
                                :state="checkedABN"
                            ></b-form-input>

                            <b-form-invalid-feedback id="input-wrong-abn">
                                ABN is required 
                            </b-form-invalid-feedback>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="3">
                            <label for="address" class="required-field"
                                >Business address
                            </label>
                        </b-col>
                        <b-col sm="9">
                            <vue-google-autocomplete
                                id="address"
                                classname="form-control"
                                placeholder="Enter your business address"
                                @blur="addressOnBlur"
                                @inputChange="emitAddress"
                                v-on:placechanged="getAddressData"
                                :country="['au']"
                            >
                            </vue-google-autocomplete>

                            <!-- radd = required address -->
                            <div id="radd" style="color: red; display: none;">Business Address is required</div>
                        </b-col>
                    </b-row>
                </b-form>

                <b-row class="my-1">
                    <b-col sm="3">
                        <label for="landlineNumber" class="text-primary"
                            >Business Landline Number
                        </label>
                    </b-col>
                    <b-col sm="9">
                        <VuePhoneNumberInput
                            @phone-number-blur="emitLandlineNumber"
                            default-country-code="AU"
                            valid-color="#4b8a54"
                            v-model="landlineNumber"
                            placeholder="Landline Number"
                        />
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="3">
                        <label for="phoneNumber" class="text-primary"
                            >Business Phone Number
                        </label>
                    </b-col>
                    <b-col sm="9">
                        <VuePhoneNumberInput
                            @phone-number-blur="emitPhoneNumber"
                            default-country-code="AU"
                            valid-color="#4b8a54"
                            v-model="phoneNumber"
                        />
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="3">
                        <label for="businessWebsite" class="text-primary"
                            >Business Website
                        </label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input
                            id="businessWebsite"
                            type="text"
                            @blur="emitWebsite"
                            v-model="businessWebsite"
                        ></b-form-input>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </section>
</template>

<script>
    import VuePhoneNumberInput from "vue-phone-number-input";
    import "vue-phone-number-input/dist/vue-phone-number-input.css";
    import Multiselect from "vue-multiselect";
    import { onMounted, onUnmounted, ref } from "vue";
    import axios from "axios";
    // import { config } from "../../../utils/constant";
    import VueGoogleAutocomplete from "vue-google-autocomplete";
    const bcrypt = require("bcryptjs");

    export default {
        data() {
            return {
                title: null,
                options: ["Mr", "Mrs", "Miss", "Ms", "Dr", "Others"],
                firstName: "",
                lastName: "",
                role: "",
                businessName: "",
                abn: "",
                address: "",
                phoneNumber: "",
                landlineNumber: "",
                businessWebsite: "",
                errFirstName: "",
                errLastName: "",
                firstOnBlurFn: false,
                firstOnBlurLn: false,
                firstOnBlurRole: false,
                firstOnBlurBusinessName: false,
                firstOnBlurABN: false,
                checkedFirstName: null,
                checkedLastName: null,
                checkedRole: null,
                checkedBusinessName: null,
                checkedABN: null
            };
        },

        components: {
            VuePhoneNumberInput,
            Multiselect,
            VueGoogleAutocomplete,
        },

        methods: {
            getAddressData(addressData, placeResultData, id) {
                this.address = addressData;
            },

            // ----- first name validation -----------
            firstNameOnBlur() {
                this.firstOnBlurFn = true;
                this.emitFirstName();
            },

            emitFirstName() {

                if(this.firstOnBlurFn) {
                    if(this.firstName.length === 0) {

                        this.checkedFirstName = false;
                        this.errFirstName = "First Name is required"

                    } else if(this.firstName.length === 1) {

                        this.checkedFirstName = false;
                        this.errFirstName = "Must be between 2 and 50 characters"

                    } else {

                        this.checkedFirstName = null;
                        this.$emit('firstName', this.firstName);

                    }
                }

            },

            // ----- last name validation -----------
            lastNameOnBlur() {
                this.firstOnBlurLn = true;
                this.emitLastName();
            },

            emitLastName() {

                if(this.firstOnBlurLn) {
                    if(this.lastName.length === 0) {

                        this.checkedLastName = false;
                        this.errLastName = "Last Name is required"

                    } else if(this.lastName.length === 1) {

                        this.checkedLastName = false;
                        this.errLastName = "Must be between 2 and 50 characters"

                    } else {

                        this.checkedLastName = null;
                        this.$emit('lastName', this.lastName);

                    }
                }

            },

            // ----- role validation -----------

            roleOnBlur() {
                this.firstOnBlurRole = true;
                this.emitRole();
            },

            emitRole() {

                if(this.firstOnBlurRole) {
                    if(this.checkEmpty(this.role)) {

                        this.checkedRole = false;

                    } else {

                        this.checkedRole = null;
                        this.$emit('role', this.role);

                    }
                }

            },

            // ----- business name validation -----------
            businessNameOnBlur() {
                this.firstOnBlurBusinessName = true;
                this.emitBusinessName();
            },

            emitBusinessName() {

                if(this.firstOnBlurBusinessName) {
                    if(this.checkEmpty(this.businessName)) {

                        this.checkedBusinessName = false;

                    } else {

                        this.checkedBusinessName = null;
                        this.$emit('businessName', this.businessName);

                    }
                }

            },
            
            // ----- abn validation -----------

            ABNOnBlur() {
                this.firstOnBlurABN = true;
                this.emitABN();
            },

            emitABN() {

                if(this.firstOnBlurABN) {
                    if(this.checkEmpty(this.abn)) {

                        this.checkedABN = false;

                    } else {

                        this.checkedABN = null;
                        this.$emit('abn', this.abn);

                    }
                }

            },
            
            // ----- address validation -----------

            addressOnBlur() {
                if(this.checkEmpty(document.getElementById("address").value)) {
                    this.styleToRequiredField("radd", "address")
                } else {
                    this.styleToNormal("radd", "address");
                }
            },

            emitAddress() {
                if(this.checkEmpty(document.getElementById("address").value)) {
                    this.styleToRequiredField("radd", "address")
                } else {
                    this.styleToNormal("radd", "address");
                    this.$emit('address', document.getElementById("address").value);
                }
            },

            emitLandlineNumber() {
                this.$emit('landlineNumber', this.landlineNumber);
            },

            emitPhoneNumber() {
                this.$emit('mobileNumber', this.phoneNumber);
            },

            emitWebsite() {
                this.$emit('website', this.businessWebsite);
            },

            emitTitle() {
            
                if(this.title === null) {
                    
                    document.getElementsByClassName("multiselect")[0].style.border = "1px solid red"
                    document.getElementById("rt").style.display = "block";

                } else {

                    document.getElementsByClassName("multiselect")[0].style.border = "1px solid #ced4da"
                    document.getElementById("rt").style.display = "none";
                    this.$emit('title', this.title);

                }
            },

            styleToRequiredField(rid, sid) {
                document.getElementById(rid).style.display = "block";
                document.getElementById(sid).style.border = "1px solid red"
            },
            styleToNormal(rid, sid) {
                document.getElementById(rid).style.display = "none";
                document.getElementById(sid).style.border = "1px solid #ced4da"
            },

            checkEmpty(value) {
                return value.length === 0
            },

        }
    };
</script>

<style>
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
