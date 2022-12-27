<template>
    <section class="signup-top">
        <b-container class="container-signup">
            <b-form id="business-signup-form2" class="text-primary"></b-form>
            <!-- <h2 class="title-signup">
                Enter your details and business details
            </h2> -->
            <!-- YOUR DETAILS -->
            <div class="business-signup-box">
                <h3 class="subtitle-signup">Your Details</h3>
                <b-form id="business-signup-form2" class="text-primary">
                    <!-- INPUTS -->
                    <b-row class="my-1">
                        <b-col sm="3">
                            <label for="title" class="required-field"
                                >Title</label
                            >
                        </b-col>
                        <b-col sm="9">
                            <multiselect
                                id="title"
                                v-model="title"
                                :options="options"
                                :show-labels="false"
                            >
                            </multiselect>
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
                                v-model="firstName"
                            ></b-form-input>
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
                                v-model="lastName"
                            ></b-form-input>
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
                                type="text"
                                v-model="role"
                                placeholder="Enter your role in the business"
                            ></b-form-input>
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
                                v-model="businessName"
                            ></b-form-input>
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
                                v-model="abn"
                            ></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="3">
                            <label for="address" class="required-field"
                                >Your address
                            </label>
                        </b-col>
                        <b-col sm="9">
                            <vue-google-autocomplete
                                id="address"
                                classname="form-control"
                                placeholder="Enter your address"
                                v-on:placechanged="getAddressData"
                            >
                            </vue-google-autocomplete>
                        </b-col>
                    </b-row>
                </b-form>

                <b-row class="my-1">
                    <b-col sm="3">
                        <label for="phoneNumber" class="text-primary"
                            >Business Phone Number
                        </label>
                    </b-col>
                    <b-col sm="9">
                        <VuePhoneNumberInput
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
import { config } from "../../../utils/constant";
import VueGoogleAutocomplete from "vue-google-autocomplete";
const bcrypt = require("bcryptjs");

export default {
    data() {
        return {
            title: "",
            options: ["Mr", "Mrs", "Miss", "Ms", "Dr", "Others"],
            firstName: "",
            lastName: "",
            role: "",
            businessName: "",
            abn: "",
            address: "",
            phoneNumber: "",
            businessWebsite: "",
        };
    },
    components: {
        VuePhoneNumberInput,
        Multiselect,
        VueGoogleAutocomplete,
    },
};
</script>

<style></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
