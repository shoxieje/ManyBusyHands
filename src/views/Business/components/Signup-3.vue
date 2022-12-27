<template>
    <section class="signup-top">
        <b-form id="business-signup-form2" class="text-primary">
            <b-container class="container-signup">
                <!-- <h2 class="title-signup">Register your business account</h2> -->
                <!-- MORE ABOUT BUSINESS -->
                <div class="business-signup-box">
                    <h3 class="subtitle-signup">
                        We would like to hear more about your business
                    </h3>
                    <b-form id="business-signup-form3" class="text-primary">
                        <!-- INPUTS -->
                        <b-row class="my-1">
                            <b-col sm="3">
                                <label for="activities"
                                    >What are the main activities in your
                                    business?
                                </label>
                            </b-col>
                            <b-col sm="9">
                                <b-form-input
                                    id="activity_1"
                                    class="my-2"
                                    type="text"
                                    v-model="activity_1"
                                    placeholder="Main activity 1. Enter at least 1 activity"
                                ></b-form-input>
                                <b-form-input
                                    id="activity_2"
                                    class="my-2"
                                    type="text"
                                    v-model="activity_2"
                                    placeholder="Main activity 2"
                                ></b-form-input>
                                <b-form-input
                                    id="activity_3"
                                    class="my-2"
                                    type="text"
                                    v-model="activity_3"
                                    placeholder="Main activity 3"
                                ></b-form-input>
                                <b-form-input
                                    id="activity_4"
                                    class="my-2"
                                    type="text"
                                    v-model="activity_4"
                                    placeholder="Main activity 4"
                                ></b-form-input>
                                <b-form-input
                                    id="activity_5"
                                    class="my-2"
                                    type="text"
                                    v-model="activity_5"
                                    placeholder="Main activity 5"
                                ></b-form-input>
                                <b-form-textarea
                                    id="activities"
                                    type="text"
                                    rows="4"
                                    max-rows="8"
                                    v-model="activities"
                                    :placeholder="activityPlaceholder"
                                ></b-form-textarea>
                            </b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="3">
                                <label for="photos"
                                    >Upload your business photos
                                </label>
                            </b-col>
                            <b-col sm="9">
                                <!-- https://www.npmjs.com/package/vue-upload-multiple-image -->
                                <vue-upload-multiple-image
                                    @upload-success="uploadImageSuccess"
                                    @before-remove="beforeRemove"
                                    @edit-image="editImage"
                                    :data-images="images"
                                ></vue-upload-multiple-image>
                            </b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="3">
                                <label for="monthPickers"
                                    >What months are the busiest or the peak
                                    work times in your business year?
                                </label>
                            </b-col>
                            <b-col sm="9">
                                <v-date-picker
                                    id="monthPickers"
                                    type="month"
                                    v-model="months"
                                    color="black"
                                    :no-title="true"
                                    :show-current="false"
                                    multiple
                                    dark
                                    class="theme"
                                ></v-date-picker>
                            </b-col>
                        </b-row>
                    </b-form>
                </div>
            </b-container>
        </b-form>
    </section>
</template>

<script>
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import axios from "axios";
import { config } from "../../../utils/constant";
import VueUploadMultipleImage from "vue-upload-multiple-image";
const bcrypt = require("bcryptjs");

export default {
    components: { VueUploadMultipleImage },
    data() {
        return {
            images: [],
            activities: "",
            activityPlaceholder:
                "E.g it could be 'Flour Miller' another could be Angus cattle, merino sheep, wool, grains and mention if you are a stud stock producer. Write about your business in 500 words.",
            months: [],
            photos: "",
            casualLabors: "",
            promotion: "",
            postJob: "",
            ariaDescribedby: "",
            checked: true,
            activity_1: "",
            activity_2: "",
            activity_3: "",
            activity_4: "",
            activity_5: "",
            businessPhotos: null,
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

        uploadPhotos() {
            this.businessPhotos = this.$refs.file.files[0];
        },

        getAddressData(addressData, placeResultData, id) {
            this.address = addressData;
            console.log(this.address);
        },

        // ^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$
        checkLandlineNumber() {},

        registerBtn() {
            if (this.checked) {
                // hash the password
                let salt = bcrypt.genSaltSync(10);
                let hashedPassword = bcrypt.hashSync(this.password, salt);

                console.log(hashedPassword);

                // create user in database
                axios.post(
                    `http://localhost:8081/user`,
                    new URLSearchParams({
                        userEmail: this.email,
                        userPassword: hashedPassword,
                        userType: "BUSINESS",
                    }),
                    config
                );

                // // create user details
                axios.post(
                    `http://localhost:8081/businessUser`,
                    new URLSearchParams({
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
                    }),
                    config
                );
            }
        },
    },
};
</script>

<style>
/* Image uploader */
.text-small.mark-text-primary.cursor-pointer {
    display: none;
}
.image-primary.display-flex.align-items-center {
    display: none;
}
.image-icon-info {
    display: none;
}
.image-icon-drag {
    margin-top: 2rem;
    width: 6rem !important;
    height: 6rem !important;
}
.drag-text {
    display: none;
}
.browse-text {
    display: none;
}
/* Date Picker Edits*/
.v-btn__content {
    font-size: 1rem !important;
}
.v-date-picker-header {
    display: none;
}
.theme--dark.v-picker__body {
    /* blue mbh-blue-2 */
    background: #29648a !important;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
