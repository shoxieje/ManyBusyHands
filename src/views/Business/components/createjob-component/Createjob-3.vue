<template>
    <b-container class="container-job">
        <b-form id="create-job-form3" class="text-primary">
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
                            @blur="emitJobSummary"
                            @input="emitJobSummary"
                            aria-describedby="input-wrong-JT"
                            v-model="jobSummary"
                            :state="checkedJobSummary"
                            style="resize: none"
                            placeholder="Write an interesting statement about your role to attract candidates to look at your ad!"
                        ></b-form-textarea>
                        <b-form-invalid-feedback id="input-wrong-JS">
                            {{ errJobSummary }}
                        </b-form-invalid-feedback>
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
                            @blur="emitJobDescription"
                            @input="emitJobDescription"
                            aria-describedby="input-wrong-JD"
                            v-model="jobDescription"
                            :state="checkedJobDescription"
                            style="resize: none"
                            placeholder="Enter your job description"
                        ></b-form-textarea>
                        <b-form-invalid-feedback id="input-wrong-JD">
                            {{ errJobDescription }}
                        </b-form-invalid-feedback>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="12">
                        <label for="image" class="">Image</label>
                        <div class="d-flex mb-3">
                            <b-form-file
                                v-model="image"
                                placeholder="Choose an image"
                                class="w-auto flex-grow-1"
                            ></b-form-file>
                            <b-button
                                v-if="hasImage"
                                variant="warning"
                                class="ml-3 text-white"
                                @click="clearImage"
                            >
                                <span class="span-hidden">Clear image</span>
                                <img
                                    src="@/assets/img/icons/close-w-icon.png"
                                    class="stepper-btn-icon"
                            /></b-button>
                        </div>
                    </b-col>
                    <b-col sm="12">
                        <b-img
                            v-if="hasImage"
                            :src="imageSrc"
                            class="image-preview"
                            fluid
                            block
                            rounded
                        ></b-img>
                    </b-col>
                </b-row>
            </div>
        </b-form>
    </b-container>
</template>
<script>
const base64Encode = (data) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

export default {
    props: ["type", "data"],
    components: {},
    data() {
        return {
            jobSummary: "",
            jobDescription: "",
            image: null,
            imageSrc: null,

            errJobSummary: "",
            errJobDescription: "",

            checkedJobSummary: null,
            checkedJobDescription: null,
            checkedJobImage: null,
        };
    },
    computed: {
        hasImage() {
            return !!this.image;
        },
    },

    watch: {
        image(newValue, oldValue) {
            if (newValue !== oldValue) {
                if (newValue) {
                    base64Encode(newValue)
                        .then((value) => {
                            this.imageSrc = value;
                        })
                        .catch(() => {
                            this.imageSrc = null;
                        });
                } else {
                    this.imageSrc = null;
                }
            }
        },
    },
    methods: {
        clearImage() {
            this.image = null;
        },

        onSubmit() {
            if (!this.image) {
                alert("Please select an image.");
                return;
            }

            alert("Form submitted!");
        },
        emitJobSummary() {
            if (this.jobSummary.length === 0) {
                this.checkedJobSummary = false;
                this.errJobSummary = "Job summary is required";
            } else {
                this.checkedJobSummary = null;
                this.$emit("jobSummary", this.jobSummary);
            }
        },
        emitJobDescription() {
            if (this.jobDescription.length === 0) {
                this.checkedJobDescription = false;
                this.errJobDescription = "Job description is required";
            } else {
                this.checkedJobDescription = null;
                this.$emit("jobDescription", this.jobDescription);
            }
        },
        emitJobImage() {
            //What to do??
            if (this.image != null && this.imageSrc != null) {
                // this.checkedJobImage = null;
                // this.$emit("jobImage", this.image);
                // this.$emit("jobImageSrc", this.imageSrc);
            }
        },
        fillData() {
            if (this.type === "edit") {
                this.jobSummary = this.data.jobSummary;
                this.jobDescription = this.data.jobDescription;
            }
        },
    },
    created() {
        const notUserLoggingIn = async () => {
            this.$store.dispatch("authUserLoggingIn", false);
        };

        notUserLoggingIn();

        this.fillData();
    },
};
</script>
<style lang="sass">
.image-preview
    width: 100%
    height: auto
</style>

<!-- https://codesandbox.io/s/bootstrapvue-image-preview-before-upload-xgj8s?file=/App.vue:352-440 -->
