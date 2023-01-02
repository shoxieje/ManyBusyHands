<template>
    <b-container class="container-post">
        <b-form id="business-post-form" class="text-primary">
            <!-- YOUR DETAILS -->
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
                                :options="options"
                                :show-labels="false"
                            >
                            </multiselect>
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
            options: ["Full-time", "Part-time", "Contract", "Casual"],
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
