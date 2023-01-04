<template>
    <b-container class="container-job">
        <b-form id="create-job-form" class="text-primary">
            <div class="create-job-box">
                <br />
                <h3 class="subtitle">Write your job description</h3>
                <b-row class="my-1">
                    <b-col sm="12">
                        <label for="jobSummary" class="required-field"
                            >Job Summary</label
                        >
                        <b-form-textarea
                            id="jobSummary"
                            type="text"
                            rows="3"
                            max-rows="3"
                            v-model="jobSummary"
                            style="resize: none"
                            placeholder="Write an interesting statement about your role to attract candidates to look at your ad!"
                        ></b-form-textarea>
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col sm="12">
                        <label for="jobDescription" class="required-field"
                            >Job description
                        </label>
                        <b-form-textarea
                            id="jobDescription"
                            type="text"
                            rows="12"
                            max-rows="12"
                            v-model="jobDescription"
                            style="resize: none"
                            placeholder="Enter your job description"
                        ></b-form-textarea>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="12">
                        <label for="video" class="">Video </label>
                        <b-form-input
                            id="video"
                            type="text"
                            v-model="video"
                            placeholder="Add a video to your ad"
                        ></b-form-input>
                    </b-col>
                </b-row>
            </div>
        </b-form>
    </b-container>
</template>
<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import Multiselect from "vue-multiselect";
import { mapGetters } from "vuex";
const bcrypt = require("bcryptjs");

export default {
    components: {
        VueGoogleAutocomplete,
        Multiselect,
    },
    data() {
        return {
            jobSummary: "",
            jobDescription: "",
            video: "",
        };
    },
    methods: {
        getLocationData(addressData, placeResultData, id) {
            this.location = locationData;
        },
        emitCategory() {},
        restrictDecimal() {
            this.contract = this.contract.match(/^\d+\.?\d{0,2}/);
        },
    },
};
</script>
<style></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
