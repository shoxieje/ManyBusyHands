<template>
    <div class="acc-details-top text-primary mw-60">
        <h1 class="title">Edit your account details</h1>
        <div class="acc-details__container mw-60">
            <!-- First -->
            <b-container class="acc-details-box">
                <h2 class="acc-details-title">Your details</h2>
                <div class="bottom-border"></div>
                <br />
                <!-- Title -->
                <b-row>
                    <b-col class="acc-details-label" sm="3"> Title </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <b-button
                            v-if="!inputTitle"
                            variant="light"
                            class="acc-details-text"
                            @click="toggleInputTitle"
                            >{{ businessData.title }}</b-button
                        >
                        <multiselect
                            v-if="inputTitle"
                            style="border: 1px solid #ced4da"
                            placeholder="Select a title"
                            v-model="title"
                            :options="options"
                            :show-labels="false"
                            :searchable="false"
                        >
                        </multiselect>
                    </b-col>
                </b-row>

                <!-- FN -->
                <b-row>
                    <b-col class="acc-details-label" sm="3"> First Name </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <b-button
                            v-if="!inputFirstName"
                            variant="light"
                            class="acc-details-text"
                            @click="toggleInputFirstName"
                            >{{ this.firstName }}</b-button
                        >
                        <b-form-input
                            v-if="inputFirstName"
                            type="text"
                            @blur="firstNameOnBlur"
                            aria-describedby="input-wrong-first-name"
                            v-model="firstName"
                            :state="checkedFirstName"
                        ></b-form-input>
                        <b-form-invalid-feedback id="input-wrong-first-name">
                            {{ errFirstName }}
                        </b-form-invalid-feedback>
                    </b-col>
                </b-row>

                <!-- LN -->
                <b-row>
                    <b-col class="acc-details-label" sm="3"> Last Name </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <b-button
                            v-if="!inputLastName"
                            variant="light"
                            class="acc-details-text"
                            @click="toggleInputLastName"
                            >{{ this.lastName }}</b-button
                        >
                        <b-form-input
                            v-if="inputLastName"
                            type="text"
                            @blur="lastNameOnBlur"
                            aria-describedby="input-wrong-last-name"
                            v-model="lastName"
                            :state="checkedLastName"
                        ></b-form-input>
                        <b-form-invalid-feedback id="input-wrong-last-name">
                            {{ errLastName }}
                        </b-form-invalid-feedback>
                    </b-col>
                </b-row>
            </b-container>

            <!-- Second -->
            <b-container class="acc-details-box">
                <h2 class="acc-details-title">Business details</h2>
                <div class="bottom-border"></div>
                <br />
                <!-- BName -->
                <b-row>
                    <b-col class="acc-details-label" sm="3">
                        Business Name
                    </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <b-button
                            v-if="!inputBusinessName"
                            variant="light"
                            class="acc-details-text"
                            @click="toggleInputBusinessName"
                            >{{ this.businessName }}</b-button
                        >
                        <b-form-input
                            v-if="inputBusinessName"
                            type="text"
                            @blur="businessNameOnBlur"
                            aria-describedby="input-wrong-business-name"
                            v-model="businessName"
                            :state="checkedBusinessName"
                        ></b-form-input>
                        <b-form-invalid-feedback id="input-wrong-business-name">
                            {{ errBusinessName }}
                        </b-form-invalid-feedback>
                    </b-col>
                </b-row>

                <!-- ABN -->
                <b-row>
                    <b-col class="acc-details-label" sm="3"> ABN </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <b-button
                            v-if="!inputabn"
                            variant="light"
                            class="acc-details-text"
                            @click="toggleInputabn"
                            >{{ this.abn }}</b-button
                        >
                        <b-form-input
                            v-if="inputabn"
                            type="text"
                            @blur="abnOnBlur"
                            aria-describedby="input-wrong-abn"
                            v-model="abn"
                            :state="checkedabn"
                        ></b-form-input>
                        <b-form-invalid-feedback id="input-wrong-abn">
                            {{ errabn }}
                        </b-form-invalid-feedback>
                    </b-col>
                </b-row>

                <!-- Address -->
                <b-row>
                    <b-col class="acc-details-label" sm="3">
                        <label for="addressId" class="required-field"
                            >Business address
                        </label>
                    </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <b-button
                            v-if="!inputAddress"
                            variant="light"
                            class="acc-details-text"
                            @click="toggleInputAddress"
                            >{{ this.address }}</b-button
                        >
                        <vue-google-autocomplete
                            ref="address"
                            v-if="inputAddress"
                            id="addressId"
                            classname="form-control"
                            placeholder="Enter your business address"
                            @blur="addressOnBlur"
                            v-on:placechanged="getAddressData"
                            :country="['au']"
                        >
                        </vue-google-autocomplete>

                        <!-- radd = required address -->
                        <div id="radd" style="color: #dc3545; display: none">
                            Business Address is required
                        </div>
                    </b-col>
                </b-row>

                <!-- Landline Number -->
                <b-row>
                    <b-col class="acc-details-label" sm="3">
                        <label for="landlineNumber"
                            >Business Landline Number
                        </label>
                    </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <b-button
                            v-if="!inputLandlineNumber"
                            variant="light"
                            class="acc-details-text"
                            @click="toggleInputLandlineNumber"
                            >{{ this.landlineNumber }}</b-button
                        >
                        <VuePhoneNumberInput
                            v-if="inputLandlineNumber"
                            @phone-number-blur="landlineNumberOnBlur"
                            default-country-code="AU"
                            valid-color="#4b8a54"
                            v-model="landlineNumber"
                            placeholder="Landline Number"
                        />
                    </b-col>
                </b-row>

                <!-- Phone Number -->
                <b-row>
                    <b-col class="acc-details-label" sm="3">
                        <label for="phoneNumber">Business Phone Number </label>
                    </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <b-button
                            v-if="!inputPhoneNumber"
                            variant="light"
                            class="acc-details-text"
                            @click="toggleInputPhoneNumber"
                            >{{ this.phoneNumber }}</b-button
                        >
                        <VuePhoneNumberInput
                            v-if="inputPhoneNumber"
                            @phone-number-blur="phoneNumberOnBlur"
                            default-country-code="AU"
                            valid-color="#4b8a54"
                            v-model="phoneNumber"
                            placeholder="Phone Number"
                        />
                    </b-col>
                </b-row>

                <!-- WEBSITE -->
                <b-row>
                    <b-col class="acc-details-label" sm="3">
                        Business Website
                    </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <b-button
                            v-if="!inputBusinessWebsite"
                            variant="light"
                            class="acc-details-text"
                            @click="toggleInputBusinessWebsite"
                            >{{ this.businessWebsite }}</b-button
                        >
                        <b-form-input
                            v-if="inputBusinessWebsite"
                            type="text"
                            @blur="businessWebsiteOnBlur"
                            aria-describedby="input-wrong-business-website"
                            v-model="businessWebsite"
                            :state="checkedBusinessWebsite"
                        ></b-form-input>
                        <b-form-invalid-feedback
                            id="input-wrong-business-website"
                        >
                            {{ errBusinessWebsite }}
                        </b-form-invalid-feedback>
                    </b-col>
                </b-row>
            </b-container>

            <!-- Third -->
            <b-container class="acc-details-box">
                <h2 class="acc-details-title">Other details</h2>
                <div class="bottom-border"></div>
                <br />

                <!-- Main Activities -->
                <b-row>
                    <b-col class="acc-details-label" sm="3">
                        Main Activity
                    </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <b-button
                            v-if="!inputMainActivity"
                            variant="light"
                            class="acc-details-text"
                            @click="toggleInputMainActivity"
                            >{{ this.main_activity }}</b-button
                        >

                        <multiselect
                            v-if="inputMainActivity"
                            style="border: 1px solid #ced4da"
                            id="main_activity"
                            class="my-2"
                            placeholder="Main activity. Enter at least 1 activity"
                            v-model="main_activity"
                            :options="activities"
                            :show-labels="false"
                            @input="toggleInputMainActivity"
                        >
                        </multiselect>
                    </b-col>
                </b-row>

                <!-- Activities -->
                <b-row>
                    <b-col class="acc-details-label" sm="3"> Activities </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <b-button
                            v-if="!inputActivity1"
                            variant="light"
                            class="acc-details-text"
                            @click="toggleInputActivity1"
                            >{{ this.activity_1 }}</b-button
                        >

                        <multiselect
                            v-if="inputActivity1"
                            style="border: 1px solid #ced4da"
                            id="activity_1"
                            class="my-2"
                            placeholder="Main activity 1. Enter at least 1 activity"
                            v-model="activity_1"
                            :options="activities"
                            :show-labels="false"
                            @input="toggleInputActivity1"
                        >
                        </multiselect>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="acc-details-label" sm="3"> </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <b-button
                            v-if="!inputActivity2"
                            variant="light"
                            class="acc-details-text"
                            @click="toggleInputActivity2"
                            >{{ this.activity_2 }}</b-button
                        >

                        <multiselect
                            v-if="inputActivity2"
                            style="border: 1px solid #ced4da"
                            id="activity_2"
                            class="my-2"
                            placeholder="Main activity 2. Enter at least 1 activity"
                            v-model="activity_2"
                            :options="activities"
                            :show-labels="false"
                            @input="toggleInputActivity2"
                        >
                        </multiselect>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="acc-details-label" sm="3"> </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <b-button
                            v-if="!inputActivity3"
                            variant="light"
                            class="acc-details-text"
                            @click="toggleInputActivity3"
                            >{{ this.activity_3 }}</b-button
                        >
                        <multiselect
                            v-if="inputActivity3"
                            style="border: 1px solid #ced4da"
                            id="activity_3"
                            class="my-2"
                            placeholder="Main activity 3. Enter at least 1 activity"
                            v-model="activity_3"
                            :options="activities"
                            :show-labels="false"
                            @input="toggleInputActivity3"
                        >
                        </multiselect>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="acc-details-label" sm="3"> </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <b-button
                            v-if="!inputActivity4"
                            variant="light"
                            class="acc-details-text"
                            @click="toggleInputActivity4"
                            >{{ this.activity_4 }}</b-button
                        >
                        <multiselect
                            v-if="inputActivity4"
                            style="border: 1px solid #ced4da"
                            id="activity_4"
                            class="my-2"
                            placeholder="Main activity 4. Enter at least 1 activity"
                            v-model="activity_4"
                            :options="activities"
                            :show-labels="false"
                            @input="toggleInputActivity4"
                        >
                        </multiselect>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="acc-details-label" sm="3"> </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <b-button
                            v-if="!inputActivity5"
                            variant="light"
                            class="acc-details-text"
                            @click="toggleInputActivity5"
                            >{{ this.activity_5 }}</b-button
                        >

                        <multiselect
                            v-if="inputActivity5"
                            style="border: 1px solid #ced4da"
                            id="activity_5"
                            class="my-2"
                            placeholder="Main activity 5. Enter at least 1 activity"
                            v-model="activity_5"
                            :options="activities"
                            :show-labels="false"
                            @input="toggleInputActivity5"
                        >
                        </multiselect>
                    </b-col>
                </b-row>
            </b-container>

            <!-- Fourth -->
            <b-container class="acc-details-box">
                <h2 class="acc-details-title">Photos</h2>
                <div class="bottom-border"></div>
                <br />
                <!-- Images -->
                <b-row>
                    <b-col class="acc-details-label" sm="3">
                        <label for="photos">Business photos </label>
                    </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <vue-upload-multiple-image
                            @upload-success="uploadImageSuccess"
                            @before-remove="beforeRemove"
                            @edit-image="editImage"
                            :data-images="images"
                        ></vue-upload-multiple-image>
                    </b-col>
                </b-row>
                <!-- Date Picker -->
                <b-row>
                    <b-col class="acc-details-label" sm="3">
                        <label for="monthPickers"
                            >What months are the busiest or the peak work times
                            in your business year?
                        </label>
                    </b-col>
                    <b-col class="acc-details-text" sm="9">
                        <v-date-picker
                            width="240"
                            id="monthPickers"
                            type="month"
                            v-model="months"
                            @input="printMonths"
                            color="black"
                            :no-title="true"
                            :show-current="false"
                            multiple
                            dark
                            class="theme"
                        ></v-date-picker>
                    </b-col>
                </b-row>
            </b-container>

            <!-- FIFTH -->
            <b-container class="acc-details-box">
                <br />
                <b-row
                    class="save-container"
                    style="
                        border-style: solid none none none;
                        border-color: #b7b9be;
                        border-width: 1px;
                    "
                >
                    <b-button
                        variant="primary"
                        class="text-white save-btn"
                        @click="saveData"
                        >S A V E</b-button
                    >
                </b-row>
            </b-container>
        </div>
    </div>
</template>
<script>
import { config } from "../../utils/constant";
import Multiselect from "vue-multiselect";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import VueUploadMultipleImage from "vue-upload-multiple-image";
const bcrypt = require("bcryptjs");

const businessData = config.mockData.businessDetails;
export default {
    name: "Template",
    props: ["", ""],
    components: {
        VueUploadMultipleImage,
        VuePhoneNumberInput,
        Multiselect,
        VueGoogleAutocomplete,
    },
    computed: {},
    data() {
        return {
            inputTitle: false,
            title: null,
            options: ["Mr", "Mrs", "Miss", "Ms", "Dr", "Others"],

            inputFirstName: false,
            firstName: "",
            checkedFirstName: null,
            errFirstName: "",

            inputLastName: false,
            lastName: "",
            checkedLastName: null,
            errLastName: "",

            inputBusinessName: false,
            businessName: "",
            checkedBusinessName: null,
            errBusinessName: "",

            inputabn: false,
            abn: "",
            checkedabn: null,
            errabn: "",

            inputAddress: false,
            address: "",
            checkedAddress: null,

            inputBusinessWebsite: false,
            businessWebsite: "",
            checkedBusinessWebsite: null,
            errBusinessWebsite: "",

            inputLandlineNumber: false,
            landlineNumber: "",

            inputPhoneNumber: false,
            phoneNumber: "",

            activities: ["Mr", "Mrs", "Miss", "Ms", "Dr", "Others"],

            main_activity: "",
            activity_1: "",
            activity_2: "",
            activity_3: "",
            activity_4: "",
            activity_5: "",

            inputMainActivity: false,
            inputActivity1: false,
            inputActivity2: false,
            inputActivity3: false,
            inputActivity4: false,
            inputActivity5: false,

            images: [],

            months: [],
        };
    },
    methods: {
        uploadImageSuccess(formData, index, fileList) {
            console.log("data", formData, index, fileList);
            // Upload image api
            // axios.post('http://your-url-upload', formData).then(response => {
            //   console.log(response)
            // })
        },
        beforeRemove(index, done, fileList) {
            console.log("index", index, fileList);
            var r = confirm("remove image");
            if (r == true) {
                done();
            } else {
            }
        },
        editImage(formData, index, fileList) {
            console.log("edit data", formData, index, fileList);
        },

        passMockData() {
            this.title = businessData.title;
            this.firstName = businessData.firstName;
            this.lastName = businessData.lastName;
            this.businessName = businessData.businessName;
            this.abn = businessData.abn;
            this.address = businessData.address;
            this.businessWebsite = businessData.businessWebsite;
            this.landlineNumber = businessData.landlineNumber;
            this.phoneNumber = businessData.phoneNumber;
            this.main_activity = businessData.main_activity;
            this.activity_1 = businessData.activity_1;
            this.activity_2 = businessData.activity_2;
            this.activity_3 = businessData.activity_3;
            this.activity_4 = businessData.activity_4;
            this.activity_5 = businessData.activity_5;
            this.images = businessData.images;
            this.months = businessData.months;
        },

        //TITLE
        toggleInputTitle() {
            this.inputTitle = !this.inputTitle;
        },

        //FN
        toggleInputFirstName() {
            this.inputFirstName = !this.inputFirstName;
        },
        firstNameOnBlur() {
            if (this.firstName.length === 0) {
                this.checkedFirstName = false;
                this.errFirstName = "First Name is required";
            } else if (this.firstName.length === 1) {
                this.checkedFirstName = false;
                this.errFirstName = "Must be between 2 and 50 characters";
            } else {
                this.checkedFirstName = null;
                this.toggleInputFirstName();
            }
        },

        //LN
        toggleInputLastName() {
            this.inputLastName = !this.inputLastName;
        },
        lastNameOnBlur() {
            if (this.lastName.length === 0) {
                this.checkedLastName = false;
                this.errLastName = "Last Name is required";
            } else if (this.lastName.length === 1) {
                this.checkedLastName = false;
                this.errLastName = "Must be between 2 and 50 characters";
            } else {
                this.checkedLastName = null;
                this.toggleInputLastName();
            }
        },

        //BN
        toggleInputBusinessName() {
            this.inputBusinessName = !this.inputBusinessName;
        },
        businessNameOnBlur() {
            if (this.businessName.length === 0) {
                this.checkedBusinessName = false;
                this.errBusinessName = "Business Name is required";
            } else {
                this.checkedBusinessName = null;
                this.toggleInputBusinessName();
            }
        },

        //ABN
        toggleInputabn() {
            this.inputabn = !this.inputabn;
        },
        abnOnBlur() {
            if (this.abn.length === 0) {
                this.checkedabn = false;
                this.errabn = "ABN is required";
            } else {
                this.checkedabn = null;
                this.toggleInputabn();
            }
        },

        //Business Website
        toggleInputBusinessWebsite() {
            this.inputBusinessWebsite = !this.inputBusinessWebsite;
        },
        businessWebsiteOnBlur() {
            this.toggleInputBusinessWebsite();
        },

        //Landline Number
        toggleInputLandlineNumber() {
            this.inputLandlineNumber = !this.inputLandlineNumber;
        },
        landlineNumberOnBlur() {
            this.landlineNumber = "+61 " + this.landlineNumber;
            this.toggleInputLandlineNumber();
        },

        //Landline Number
        toggleInputPhoneNumber() {
            this.inputPhoneNumber = !this.inputPhoneNumber;
        },
        phoneNumberOnBlur() {
            this.phoneNumber = "+61 " + this.phoneNumber;
            this.toggleInputPhoneNumber();
        },

        //Activities
        toggleInputMainActivity() {
            this.inputMainActivity = !this.inputMainActivity;
        },
        toggleInputActivity1() {
            this.inputActivity1 = !this.inputActivity1;
        },
        toggleInputActivity2() {
            this.inputActivity2 = !this.inputActivity2;
        },
        toggleInputActivity3() {
            this.inputActivity3 = !this.inputActivity3;
        },
        toggleInputActivity4() {
            this.inputActivity4 = !this.inputActivity4;
        },
        toggleInputActivity5() {
            this.inputActivity5 = !this.inputActivity5;
        },
        toggleInputImages() {
            this.inputImages = !this.inputImages;
        },
        printMonths() {
            console.log(this.months);
        },
        // ----- address validation -----------

        getAddressData(addressData, placeResultData, id) {
            this.address = addressData;
            console.log(this.address);
            this.address =
                addressData.street_number +
                " " +
                addressData.route +
                ", " +
                addressData.locality +
                " " +
                addressData.administrative_area_level_1 +
                ", " +
                addressData.country;
        },

        toggleInputAddress() {
            this.inputAddress = !this.inputAddress;
        },

        addressOnBlur() {
            if (this.checkEmpty(document.getElementById("addressId").value)) {
                this.styleToRequiredField("radd", "addressId");
            } else {
                this.styleToNormal("radd", "addressId");
                // this.inputAddress = !this.inputAddress;
            }
        },

        emitAddress() {
            if (this.checkEmpty(document.getElementById("address").value)) {
                this.styleToRequiredField("radd", "address");
            } else {
                this.styleToNormal("radd", "address");
                console.log("EMIT ADDRESS : " + this.address);
            }
        },

        styleToRequiredField(rid, sid) {
            document.getElementById(rid).style.display = "block";
            document.getElementById(sid).style.border = "1px solid red";
        },

        styleToNormal(rid, sid) {
            document.getElementById(rid).style.display = "none";
            document.getElementById(sid).style.border = "1px solid #ced4da";
        },

        checkEmpty(value) {
            return value.length === 0;
        },

        saveData() {
            console.log("Push new data to database");
            console.log(
                this.title,
                this.firstName,
                this.lastName,
                this.businessName,
                this.abn,
                this.address,
                this.businessWebsite,
                this.landlineNumber,
                this.phoneNumber,
                this.main_activity,
                this.activity_1,
                this.activity_2,
                this.activity_3,
                this.activity_4,
                this.activity_5,
                this.images,
                this.months
            );
        },
    },
    created() {
        this.businessData = businessData;
        this.passMockData();
    },
};
</script>
<style lang="sass">
@import '../../assets/styles/custom-variables.sass'

.acc-details-top
    text-align: left
    padding: 2rem 1rem

.acc-details__container
    text-align: left
    background-color: $mbh-white-2
    border-radius: 8px 8px 0 0
    border-color: #b7b9be
    border-style: solid
    border-width: 1px
    border-radius: 10px
    padding: 1rem 2rem

.acc-details-box
    padding: 1rem 0

.acc-details-label
    font-size: large !important
    font-weight: bold !important
    color: $mbh-navy
    margin: auto 0

.acc-details-text
    font-size: large !important
    width: 100%
    text-align: left

.save-container
    display: flex
    justify-content: right

.save-btn
    min-width: 200px
    font-size: large !important

@media only screen and (max-width: $tablet-max)
    .acc-details__container
        padding: 1rem

@media only screen and (max-width: 575px)
    .acc-details-title
        font-size: x-large !important
    .acc-details-label
        font-size: medium !important
    .acc-details-text
        font-size: medium !important
    .acc-details-label
        padding: 0 12px !important
    .acc-details-text
        padding: 0 12px !important
    .save-container
        justify-content: center
    .save-btn
        width: 100%

/* Image uploader */
.text-small.mark-text-primary.cursor-pointer
    display: none

.image-primary.display-flex.align-items-center
    display: none

.image-icon-info
    display: none

.image-icon-drag
    margin-top: 2rem
    width: 6rem !important
    height: 6rem !important

.drag-text
    display: none

.browse-text
    display: none

/* Date Picker Edits*/
.v-btn__content
    font-size: 1rem !important

.v-date-picker-header
    display: none

.theme--dark.v-picker__body
    background: $black-mbh-0 !important
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
