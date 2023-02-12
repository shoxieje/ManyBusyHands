<template>
    <section class="signup-top">
        <b-form class="text-primary">
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
                                <multiselect
                                    style="border: 1px solid #ced4da"
                                    id="activity_1"
                                    class="my-2"
                                    placeholder="Main activity 1. Enter at least 1 activity"
                                    v-model="activity_1"
                                    :options="activities"
                                    :show-labels="false"
                                    @input="emitActivity1"
                                >
                                </multiselect>

                                <multiselect
                                    style="border: 1px solid #ced4da"
                                    id="activity_2"
                                    class="my-2"
                                    placeholder="Main activity 2"
                                    v-model="activity_2"
                                    :options="activities"
                                    :show-labels="false"
                                    @input="emitActivity2"
                                >
                                </multiselect>
                                
                                <multiselect
                                    style="border: 1px solid #ced4da"
                                    id="activity_3"
                                    class="my-2"
                                    placeholder="Main activity 3"
                                    v-model="activity_3"
                                    :options="activities"
                                    :show-labels="false"
                                    @input="emitActivity3"
                                >
                                </multiselect>

                                <multiselect
                                    style="border: 1px solid #ced4da"
                                    id="activity_4"
                                    class="my-2"
                                    placeholder="Main activity 4"
                                    v-model="activity_4"
                                    :options="activities"
                                    :show-labels="false"
                                    @input="emitActivity4"
                                >
                                </multiselect>

                                <multiselect
                                    style="border: 1px solid #ced4da"
                                    id="activity_5"
                                    class="my-2"
                                    placeholder="Main activity 5"
                                    v-model="activity_5"
                                    :options="activities"
                                    :show-labels="false"
                                    @input="emitActivity5"
                                >
                                </multiselect>

                                <b-form-textarea
                                    id="activities"
                                    type="text"
                                    rows="4"
                                    max-rows="8"
                                    v-model="activityDescription"
                                    @blur="emitActivityDescription"
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

                        <!-- <b-row class="my-1">
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
                                    @input="emitMonths"
                                    color="black"
                                    :no-title="true"
                                    :show-current="false"
                                    multiple
                                    dark
                                    class="theme"
                                ></v-date-picker>
                            </b-col>
                        </b-row> -->
                    </b-form>
                </div>
            </b-container>
        </b-form>
    </section>
</template>

<script>

    import "vue-phone-number-input/dist/vue-phone-number-input.css";
    import axios from "axios";
    // import { config } from "../../../utils/constant";
    import VueUploadMultipleImage from "vue-upload-multiple-image";
    const bcrypt = require("bcryptjs");
    import Multiselect from "vue-multiselect";
    import { mapGetters } from 'vuex'

    export default {
        components: { 
            VueUploadMultipleImage,
            Multiselect
        },
        data() {
            return {
                images: [],
                upload_images: [],
                activityDescription: "",
                activityPlaceholder:
                    `E.g it could be 'Flour Miller' another could be Angus cattle, merino sheep, wool, grains and mention if you are a stud stock producer. Write about your business in 500 words.`,
                activity_1: "",
                activity_2: "",
                activity_3: "",
                activity_4: "",
                activity_5: "",
                months: [],

            };
        },

        computed: {

            ...mapGetters({
                activities: 'getActivityData',
            }),

        },

        methods: {

            addDateToFileName(x) {
                var regExFileName = /([\w\d_-]*)\.?[^\\\/]*$/i,
                    regExFileNameExtension =/\.[0-9a-z]{1,5}$/i,
                    fileNameBase = x.match(regExFileName)[1],
                    fileNameExtension = x.match(regExFileNameExtension)[0];
                    //build a dynamic file name using Date.now()
                return fileNameBase + '_' + Date.now() + fileNameExtension;
            },

            uploadImageSuccess(formData, index, fileList) {

                let fileName = this.addDateToFileName(fileList[index].name)

                formData.append('filename', fileName)
                this.upload_images.push(formData)
                this.emitImages();
                
            },

            beforeRemove(index, done, fileList) {
                this.upload_images.splice(index, 1)

                done()
            },

            editImage(formData, index, fileList) {
                formData.append('filename', fileList[index].name)
                this.upload_images.push(formData)

                this.emitImages();
            },

            emitActivity1() {
                if(this.activity_1 == null || this.activity_1 == "") {
                    this.$emit('activity_1', 0);
                } else {
                    this.$emit('activity_1', this.activities.indexOf(this.activity_1) + 1);
                }
                
            },

            emitActivity2() {
                if(this.activity_2 == null || this.activity_2 == "") {
                    this.$emit('activity_2', 0);
                } else {
                    this.$emit('activity_2', this.activities.indexOf(this.activity_2) + 1);
                }
                
            },

            emitActivity3() {
                if(this.activity_3 == null || this.activity_3 == "") {
                    this.$emit('activity_3', 0);
                } else {
                    this.$emit('activity_3', this.activities.indexOf(this.activity_3) + 1);
                }
            },

            emitActivity4() {
                if(this.activity_4 == null || this.activity_4 == "") {
                    this.$emit('activity_4', 0);
                } else {
                    this.$emit('activity_4', this.activities.indexOf(this.activity_4) + 1);
                }
            },

            emitActivity5() {
                if(this.activity_5 == null || this.activity_5 == "") {
                    this.$emit('activity_5', 0);
                } else {
                    this.$emit('activity_5', this.activities.indexOf(this.activity_5) + 1);
                }
            },

            emitActivityDescription() {
                this.$emit('activity_description', this.activityDescription)
            },

            emitImages() {
                this.$emit('images', this.upload_images)
            },

            emitMonths() {
                this.$emit('busiest_months', this.months)
            }

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
