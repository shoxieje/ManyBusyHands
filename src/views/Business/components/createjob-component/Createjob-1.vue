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
                            @blur="emitJobTitle"
                            @input="emitJobTitle"
                            aria-describedby="input-wrong-JT"
                            v-model="jobTitle"
                            :state="checkedJobTitle"
                        ></b-form-input>

                        <b-form-invalid-feedback id="input-wrong-JT">
                            {{ errJobTitle }}
                        </b-form-invalid-feedback>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="12">
                        <label for="activity" class="required-field"
                            >Activity
                        </label>

                        <!-- replace line 42 with code below
                            :options="Activities" 
                        -->
                        <multiselect
                            style="border: 1px solid #ced4da"
                            placeholder="Select an activity"
                            v-model="activity"
                            :options="mockActivities"
                            :show-labels="false"
                            :searchable="true"
                            @input="emitActivity"
                        >
                        </multiselect>
                        <!-- rt = required activity -->
                        <div id="rc" style="color: #dc3545; display: none">
                            Activity is required
                        </div>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="4">
                        <label for="location" class="required-field"
                            >States
                        </label>
                        <!-- <vue-google-autocomplete
                            id="location"
                            classname="form-control"
                            placeholder="Enter your work location"
                            @blur="locationOnBlur"
                            @inputChange="emitLocation"
                            v-on:placechanged="getLocationData"
                            :country="['au']"
                        >
                        </vue-google-autocomplete> -->

                        <b-form-input
                            id="locState"
                            type="text"
                            @blur="emitLocState"
                            @input="emitLocState"
                            aria-describedby="rloc-state"
                            v-model="locState"
                            :state="checkedLocState"
                        ></b-form-input>

                        <b-form-invalid-feedback id="rloc-state">
                            {{ errLocState }}
                        </b-form-invalid-feedback>
                    </b-col>
                    <b-col sm="4">
                        <label for="location" class="required-field"
                            >Suburb
                        </label>

                        <b-form-input
                            id="locSuburb"
                            type="text"
                            @blur="emitLocSuburb"
                            @input="emitLocSuburb"
                            aria-describedby="rloc-suburb"
                            v-model="locSuburb"
                            :state="checkedLocSuburb"
                        ></b-form-input>

                        <b-form-invalid-feedback id="rloc-suburb">
                            {{ errLocSuburb }}
                        </b-form-invalid-feedback>
                    </b-col>
                    <b-col sm="4">
                        <label for="location" class="required-field"
                            >Postcode
                        </label>

                        <b-form-input
                            id="locPostcode"
                            type="text"
                            @blur="emitLocPostcode"
                            @input="emitLocPostcode"
                            aria-describedby="rloc-postcode"
                            v-model="locPostcode"
                            :state="checkedLocPostcode"
                        ></b-form-input>

                        <b-form-invalid-feedback id="rloc-postcode">
                            {{ errLocPostcode }}
                        </b-form-invalid-feedback>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="12">
                        <label for="payRange">Pay range </label>
                        <b-row>
                            <b-col sm="6">
                                <label for="payRangeFrom" class="required-field"
                                    >From</label
                                >
                                <b-form-input
                                    id="payRangeFrom"
                                    type="text"
                                    placeholder="Enter minimum pay"
                                    @blur="payRangeFromOnBlur"
                                    @input="emitPayRangeFrom"
                                    v-model="payRangeFrom"
                                    aria-describedby="input-wrong-PRF"
                                    :state="checkedPayRangeFrom"
                                >
                                </b-form-input>
                                <b-form-invalid-feedback id="input-wrong-PRF">
                                    {{ errPayRangeFrom }}
                                </b-form-invalid-feedback>
                            </b-col>
                            <b-col sm="6">
                                <label for="payRangeTo" class="required-field"
                                    >To
                                </label>
                                <b-form-input
                                    id="payRangeTo"
                                    type="text"
                                    placeholder="Enter maximum pay"
                                    @blur="payRangeToOnBlur"
                                    @input="emitPayRangeTo"
                                    v-model="payRangeTo"
                                    aria-describedby="input-wrong-PRT"
                                    :state="checkedPayRangeTo"
                                >
                                </b-form-input
                                ><b-form-invalid-feedback id="input-wrong-PRT">
                                    {{ errPayRangeTo }}
                                </b-form-invalid-feedback>
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
import Vue from "vue";
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
            activity: "",
            mockActivities: ["Grape", "Strawberry"],
            locState: "",
            locSuburb: "",
            locPostcode: "",
            location: "",
            payRangeFrom: 0.0,
            payRangeTo: 0.0,

            // firstOnBlurJt: false,
            // firstOnBlurPRF: false,
            // firstOnBlurPRT: false,

            errJobTitle: "",
            errPayRangeFrom: "",
            errPayRangeTo: "",
            errLocState: "",
            errLocSuburb: "",
            errLocPostcode: "",

            checkedJobTitle: null,
            checkedPayRangeFrom: null,
            checkedPayRangeTo: null,
            checkedLocState: null,
            checkedLocSuburb: null,
            checkedLocPostcode: null,
        };
    },
    computed: {
        ...mapGetters({
            activities: "getActivityData",
        }),
    },
    methods: {
        // ----- Job Title validation -----------
        
        // jobTitleOnBlur() {
        //     this.firstOnBlurJt = true;
        //     this.emitJobTitle();
        // },

        emitJobTitle() {
            // if (this.firstOnBlurJt) {
            if (this.jobTitle.length === 0) {
                this.checkedJobTitle = false;
                this.errJobTitle = "Job Title is required";
            } else {
                this.checkedJobTitle = null;
                this.$emit("jobTitle", this.jobTitle);
            }
            // }
        },

        // ----- Activity validation -----------
        emitActivity() {
            if (this.checkEmpty(this.activity)) {
                document.getElementsByClassName("multiselect")[0].style.border =
                    "1px solid #dc3545";
                document.getElementById("rc").style.display = "block";
            } else {
                document.getElementsByClassName("multiselect")[0].style.border =
                    "1px solid #ced4da";
                document.getElementById("rc").style.display = "none";
                this.$emit("activity", this.activity);
            }
        },

        // ----- location validation -----------

        // getLocationData(locationData, placeResultData, id) {
        //     this.location = locationData;
        // },

        // locationOnBlur() {
        //     if (this.checkEmpty(document.getElementById("location").value)) {
        //         this.styleToRequiredField("rloc", "location");
        //     } else {
        //         this.styleToNormal("rloc", "location");
        //     }
        // },

        // emitLocation() {
        //     if (this.checkEmpty(document.getElementById("location").value)) {
        //         this.styleToRequiredField("rloc", "location");
        //     } else {
        //         this.styleToNormal("rloc", "location");
        //         this.$emit(
        //             "location",
        //             document.getElementById("location").value
        //         );
        //     }
        // },

        emitLocState() {
            if (this.checkEmpty(this.locState)) {
                this.checkedLocState = false;
                this.errLocState = "State is required";
            } else {
                this.checkedLocState = null;
                this.emitLocation();
            }
        },

        emitLocPostcode() {
            if (this.checkEmpty(this.locPostcode)) {
                this.checkedLocPostcode = false;
                this.errLocPostcode = "Postcode is required";
            } else {
                this.checkedLocPostcode = null;
                this.emitLocation();
            }
        },

        emitLocSuburb() {
            if (this.checkEmpty(this.locSuburb)) {
                this.checkedLocSuburb = false;
                this.errLocSuburb = "Suburb is required";
            } else {
                this.checkedLocSuburb = null;
                this.emitLocation();
            }
        },

        emitLocation() {
            this.location =
                this.locSuburb + ", " + this.locState + ", " + this.locPostcode;
            if (
                !this.checkEmpty(this.locSuburb) &&
                !this.checkEmpty(this.locState) &&
                !this.checkEmpty(this.locPostcode)
            ) {
                this.$emit("location", this.location);
            }
        },

        // ----- pay range validation -----------

        // Restricts input for the given textbox to the given inputFilter.
        setInputFilter(textbox, inputFilter, errMsg) {
            [
                "input",
                "keydown",
                "keyup",
                "mousedown",
                "mouseup",
                "select",
                "contextmenu",
                "drop",
                "focusout",
            ].forEach(function (event) {
                textbox.addEventListener(event, function (e) {
                    if (inputFilter(this.value)) {
                        // Accepted value
                        if (
                            ["keydown", "mousedown", "focusout"].indexOf(
                                e.type
                            ) >= 0
                        ) {
                            this.classList.remove("input-error");
                            this.setCustomValidity("");
                        }
                        this.oldValue = this.value;
                        this.oldSelectionStart = this.selectionStart;
                        this.oldSelectionEnd = this.selectionEnd;
                    } else if (this.hasOwnProperty("oldValue")) {
                        // Rejected value - restore the previous one
                        this.classList.add("input-error");
                        this.setCustomValidity(errMsg);
                        this.reportValidity();
                        this.value = this.oldValue;
                        this.setSelectionRange(
                            this.oldSelectionStart,
                            this.oldSelectionEnd
                        );
                    } else {
                        // Rejected value - nothing to restore
                        this.value = "";
                    }
                });
            });
        },

        payRangeFromOnBlur() {
            this.setInputFilter(
                document.getElementById("payRangeFrom"),
                function (value) {
                    return /^-?\d*[.,]?\d{0,2}$/.test(value);
                },
                "Must be a currency value"
            );

            // Minimum pay must be greater than $0.
            // Minimum pay must be lesser than Maximum pay
            // Minimum pay and Maximum pay differences should not be more than 10$ diff

            var min = this.payRangeFrom;
            var max = this.payRangeTo;

            // this.payRangeToOnBlur();

            if (min == 0 || min == 0.0) {
                this.errPayRangeFrom = "Minimum pay is required";
                this.styleToRequiredField("input-wrong-PRF", "payRangeFrom");
            } else if (min < 0) {
                this.errPayRangeFrom = "Minimum pay must be greather than $0";
                this.styleToRequiredField("input-wrong-PRF", "payRangeFrom");
            } else if (max - min > 10.0) {
                this.errPayRangeFrom =
                    "The differences between minimum payrange and maximum payrange should not be more than $10.";
                this.styleToRequiredField("input-wrong-PRF", "payRangeFrom");
            } else if (min > max || max - min < 0.0) {
                this.errPayRangeFrom =
                    "Minimum pay must be lesser than maximum pay.";
                this.styleToRequiredField("input-wrong-PRF", "payRangeFrom");
            } else {
                this.styleToNormal("input-wrong-PRF", "payRangeFrom");
                // this.firstOnBlurPRF = true;
                this.emitPayRangeFrom;
            }
        },

        emitPayRangeFrom() {
            var min = this.payRangeFrom;
            // if (this.firstOnBlurPRF) {
            if (min == 0 || min == 0.0) {
                this.checkedPayRangeFrom = false;
                this.errPayRangeFrom = "Minimum payrange is required";
            } else {
                this.checkedPayRangeFrom = null;
                this.$emit("payRangeFrom", this.payRangeFrom);
            }
            // }
        },

        payRangeToOnBlur() {
            this.setInputFilter(
                document.getElementById("payRangeTo"),
                function (value) {
                    return /^-?\d*[.,]?\d{0,2}$/.test(value);
                },
                "Must be a currency value"
            );

            // Maximum pay must be greater than $0.
            // Maximum pay must be greater than minimum pay
            // Minimum pay and Maximum pay differences should not be more than 10$ diff
            var min = this.payRangeFrom;
            var max = this.payRangeTo;

            // this.payRangeFromOnBlur();

            if (max == 0 || max == 0.0) {
                this.errPayRangeTo = "Maximum pay is required";
                this.styleToRequiredField("input-wrong-PRT", "payRangeTo");
            } else if (max < 0) {
                this.errPayRangeTo = "Maximum pay must be greather than $0";
                this.styleToRequiredField("input-wrong-PRT", "payRangeTo");
            } else if (max - min > 10.0 || max - min > 10) {
                this.errPayRangeTo =
                    "The differences between minimum payrange and maximum payrange should not be more than $10.";
                this.styleToRequiredField("input-wrong-PRT", "payRangeTo");
            } else if (min >= max || max - min <= 0.0) {
                this.errPayRangeTo =
                    "Maximum pay must be greater than maximum pay.";
                this.styleToRequiredField("input-wrong-PRT", "payRangeTo");
            } else {
                this.styleToNormal("input-wrong-PRT", "payRangeTo");
                // this.firstOnBlurPRT = true;
                this.emitPayRangeTo;
            }
        },

        emitPayRangeTo() {
            var max = this.payRangeTo;
            // if (this.firstOnBlurPRF) {
            if (max == 0 || max == 0.0) {
                this.checkedPayRangeTo = false;
                this.errPayRangeTo = "Max payrange is required";
            } else {
                this.checkedPayRangeTo = null;
                this.$emit("payRangeTo", this.payRangeTo);
            }
            // }
        },

        // ------------ METHODS ------------

        styleToRequiredField(rid, sid) {
            document.getElementById(rid).style.display = "block";
            document.getElementById(sid).style.border = "1px solid #dc3545";
        },
        styleToNormal(rid, sid) {
            document.getElementById(rid).style.display = "none";
            document.getElementById(sid).style.border = "1px solid #ced4da";
        },

        checkEmpty(value) {
            return value.length === 0;
        },
        restrictDecimal() {
            this.contract = this.contract.match(/^\d+\.?\d{0,2}/);
        },
    },
};
</script>
<style></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
