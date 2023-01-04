<template>
    <b-container class="container-job">
        <b-form id="create-job-form" class="text-primary">
            <div class="create-job-box">
                <br />
                <h3 class="subtitle">Role information</h3>
                <b-row class="my-1">
                    <b-col sm="12">
                        <label for="jobTitle" class="required-field"
                            >Job Title
                        </label>
                        <b-form-input
                            id="jobTitle"
                            type="text"
                            v-model="jobTitle"
                        ></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="12">
                        <label for="category" class="required-field"
                            >Category
                        </label>
                        <multiselect
                            style="border: 1px solid #ced4da"
                            placeholder="Select a category"
                            v-model="category"
                            :options="categories"
                            :show-labels="false"
                            :searchable="true"
                            @input="emitCategory"
                        >
                        </multiselect>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="12">
                        <label for="location" class="required-field"
                            >Location
                        </label>
                        <vue-google-autocomplete
                            id="location"
                            classname="form-control"
                            placeholder="Enter your work location"
                            v-on:placechanged="getLocationData"
                        >
                        </vue-google-autocomplete>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="12">
                        <label for="payRange">Hourly rate </label>
                        <b-row>
                            <b-col sm="6">
                                <label for="payRangeFrom">From</label>
                                <b-form-input
                                    id="payRangeFrom"
                                    type="number"
                                    v-model="payRangeFrom"
                                    @input="restrictDecimal"
                                >
                                </b-form-input>
                            </b-col>
                            <b-col sm="6">
                                <label for="payRangeTo">To </label>
                                <b-form-input
                                    id="payRangeTo"
                                    type="number"
                                    v-model="payRangeTo"
                                    @input="restrictDecimal"
                                >
                                </b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col sm="9"> </b-col>
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
            jobTitle: "",
            location: "",
            payRangeTo: 0,
            payRangeFrom: 0,
            category: "",
            categories: ["Mr", "Mrs", "Miss", "Ms", "Dr", "Others"],
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
