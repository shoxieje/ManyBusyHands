<template>
    <b-container class="container-post">
        <b-form id="business-post-form" class="text-primary">
            <!-- ROLE INFORMATION -->
            <div class="business-post-box">
                <h3 class="subtitle">Role information</h3>
                <b-form id="business-post-form2" class="text-primary">
                    <!-- INPUTS -->

                    <b-row class="my-1">
                        <b-col sm="3">
                            <label for="jobTitle" class="required-field"
                                >Job Title
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
                            <label for="location" class="required-field"
                                >Location
                            </label>
                        </b-col>
                        <b-col sm="9">
                            <vue-google-autocomplete
                                id="address"
                                classname="form-control"
                                placeholder="Enter your work address"
                                v-on:placechanged="getAddressData"
                            >
                            </vue-google-autocomplete>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="3">
                            <label for="workType" class="required-field"
                                >Work type</label
                            >
                        </b-col>
                        <b-col sm="9">
                            <multiselect
                                id="workType"
                                v-model="workType"
                                :options="workOptions"
                                :show-labels="false"
                            >
                            </multiselect>
                        </b-col>
                    </b-row>
                </b-form>
            </div>

            <!-- PAY DETAILS -->
            <div class="business-post-box">
                <h3 class="subtitle">Pay Details</h3>
                <b-form id="business-post-form2" class="text-primary">
                    <b-row class="my-1">
                        <b-col sm="3">
                            <label for="payType" class="required-field"
                                >Pay type</label
                            >
                        </b-col>
                        <b-col sm="9">
                            <multiselect
                                id="payType"
                                v-model="payType"
                                :options="payOptions"
                                :show-labels="false"
                            >
                            </multiselect>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="3">
                            <label for="payRange" class="required-field"
                                >Pay range
                            </label>
                            <p>From</p>
                            <br />
                            <p>To</p>
                        </b-col>
                        <b-col sm="9">
                            <label class="required-field"></label>
                            <b-form-input
                                id="payRangeMin"
                                type="number"
                                v-model="payRangeMin"
                            ></b-form-input>
                            <br />
                            <b-form-input
                                id="payRangeMax"
                                type="number"
                                v-model="payRangeMax"
                            ></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="2">
                            <label for="hideSalary" class="required-field"
                                >Hide salary on your ad
                            </label>
                        </b-col>
                        <b-col sm="1"></b-col>
                        <b-col sm="9"
                            ><b-form-checkbox
                                v-model="hideSalary"
                                name="hideSalary"
                                switch
                                size="lg" /></b-col
                    ></b-row>

                    <b-row class="my-1">
                        <b-col sm="3">
                            <label for="payShown" class="required-field"
                                >Pay shown
                            </label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-input
                                id="payShown"
                                type="number"
                                v-model="payShown"
                                placeholder="Pay shown on your ad (optional)"
                            ></b-form-input>
                            <p>E.g. $50,000 + annual bonus</p>
                        </b-col>
                    </b-row>
                </b-form>
            </div>
        </b-form>
    </b-container>
</template>
<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import Multiselect from "vue-multiselect";

export default {
    data() {
        return {
            jobTitle: "",
            location: "",
            workType: "",
            workOptions: ["Full-time", "Part-time", "Contract", "Casual"],
            payType: "",
            payOptions: [
                "Hourly rate",
                "Annual salary",
                "Annual plus commission",
            ],
            payRangeMax: 0,
            payRangeMin: 0,
            payShown: 0,
            hideSalary: false,
        };
    },
    components: {
        VueGoogleAutocomplete,
        Multiselect,
    },
};
</script>
<style></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
