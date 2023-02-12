<template>
    <div :id="'job-card-' + type + '-' + number">
        <div class="job-preview-card">
            <!-- IMAGE CONTAINER -->
            <!-- :src="'@/assets/job_ad/' + job.random_url_job_id + '/images/' + job.image" -->
            <div class="sr-image__container">
                <img
                    :src="require(`@/assets/job_ad/${job.random_url_job_id}/images/${job.image}`)"
                    alt="Share icon"
                    class="sr-image"
                />
            </div>
            <!-- CONTENT CONTAINER -->
            <div class="sr-content__container">
                <div class="sr-content">
                    <!-- CONTENT -->
                    <div>
                        <h4 style="font-size: 1.1rem !important">
                            {{ job.title }}
                        </h4>
                        {{ job.suburb + " " + job.postcode + " " + job.state }} <br />
                        {{ job.industry }} <br />
                        ${{ job.pay_from }} - ${{ job.pay_to }}
                        per hour
                        <br />
                    </div>
                </div>
            </div>
            <!-- BUTTON CONTAINER-->
            <div class="preview-button__container">
                <b-button
                    v-if="!showBottomBar"
                    class="preview-button"
                    variant="primary text-white"
                    @click="toggleBar"
                    >Manage</b-button
                >
            </div>
        </div>
        <transition name="slide">
            <div v-if="showBottomBar" class="pop-up-btn__container">
                <div class="pop-up-btn__container--left">
                    <b-button
                        class="pop-up-btn text-white"
                        variant="primary"
                        :to="'manage/' + job.random_url_job_id + '/edit'"
                    >
                        <span class="pop-up-text">Edit</span>
                        <img
                            src="@/assets/img/icons/edit-w-icon.png"
                            alt="Edit"
                            class="pop-up-icon"
                        />
                    </b-button>
                    <b-button
                        v-if="type == 'active' || type == 'draft'"
                        class="pop-up-btn text-white"
                        variant="primary"
                        @click="disablePrompt"
                    >
                        <span class="pop-up-text">Inactive</span>
                        <img
                            src="@/assets/img/icons/disable-w-icon.png"
                            alt="Disable"
                            class="pop-up-icon"
                        />
                    </b-button>
                    <b-button
                        v-if="type == 'inactive'"
                        class="pop-up-btn text-white"
                        variant="primary"
                        @click="enablePrompt"
                    >
                        <span class="pop-up-text">Enable</span>
                        <img
                            src="@/assets/img/icons/check-w-icon.png"
                            alt="Enable"
                            class="pop-up-icon"
                        />
                    </b-button>
                    <b-button
                        class="pop-up-btn text-white"
                        variant="primary"
                        :to="'manage/' + job.random_url_job_id + '/candidates'"
                    >
                        <span class="pop-up-text">Candidate</span>
                        <img
                            src="@/assets/img/icons/candidate-w-icon.png"
                            alt="Candidate"
                            class="pop-up-icon"
                        />
                    </b-button>
                    <b-button
                        class="pop-up-btn text-white"
                        variant="primary"
                        @click="deletePrompt"
                    >
                        <span class="pop-up-text">Delete</span>
                        <img
                            src="@/assets/img/icons/trash-w-icon.png"
                            alt="Delete"
                            class="pop-up-icon"
                        />
                    </b-button>
                </div>
                <div class="pop-up-btn__container--right">
                    <b-button
                        class="pop-up-btn r text-white"
                        variant="primary"
                        @click="toggleBar"
                        ><img
                            src="@/assets/img/icons/close-w-icon.png"
                            alt="Close"
                            class="pop-up-icon r"
                    /></b-button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        props: ["job", "type", "number", "isInactive"],
        components: {},
        data() {
            return {
                showBottomBar: false,
            };
        },

        computed: {

        },

        methods: {

            toggleBar() {
                this.showBottomBar = !this.showBottomBar;
            },
            deleteCurrentJobCard() {
                const element = document.getElementById(
                    "job-card-" + this.type + "-" + this.number
                );
                element.style.display = "none";
            },
            deletePrompt() {
                this.$vToastify
                    .prompt({
                        body: "Are you sure you want to delete this job ad?",
                        answers: { Yes: true, No: false },
                    })
                    .then((value) => {
                        if (value) {
                            this.deleteCurrentJobCard();

                            //Delete from database
                            //Refresh
                        }
                    });
            },

            disablePrompt() {
                this.$vToastify
                    .prompt({
                        body: "Are you sure you want to disable this job ad?",
                        answers: { Yes: true, No: false },
                    })
                    .then((value) => {
                        if (value) {
                            this.deleteCurrentJobCard();

                            let index = this.$store.state.active_job_ad.findIndex(x => x.random_url_job_id === this.job.random_url_job_id)
                            this.$store.dispatch("pushInactiveAd", [this.job, index])
                            //Change status from active to inactive in database
                            //Refresh

                            let d = new Date();

                            let currentDate = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-"
                                                + ("0" + d.getDate()).slice(-2)

                            axios.put(`http://localhost:8081/jobAd/inactivateJobAd`, new URLSearchParams({

                                date: currentDate,
                                id: this.job.random_url_job_id

                            })).then(this.$vToastify.success("Inactive job ad successfully"))

                        }
                    });
            },
            enablePrompt() {
                this.deleteCurrentJobCard();

                //Change status from inactive to active in database
                //Refresh
            },
        },
        
        mounted() {


        },
    };
</script>

<style lang="sass">
    @import '../../../../assets/styles/custom-variables.sass'
    .job-preview-card
        margin : 0.5rem 0
        padding: 1rem
        display: flex
        justify-content: space-between
        background-color: $mbh-white
        text-align: left

    .sr-image__container
        min-width: 150px
        text-align: center
        margin: auto

    .sr-image
        width: 150px
        height: 100px
        object-fit: cover

    .sr-content__container
        // min-width: 300px
        display: flex
        justify-content: space-between
        width: 40%
        min-width: 50%
        padding: 0 0 0 1rem

    .sr-content
        display: flex
        flex-direction: column
        justify-content: space-between

    .preview-button__container
        width: 35%
        display: flex
        flex-direction: column
        justify-content: space-around

    .preview-button
        margin-left: auto
        width: 100%
        max-width: 200px
        min-width: 90px

    .share-btn-right__container
        min-width: 50px

    .open-link-icon
        width: 20px
        height: auto

    .open-link-icon-sm
        width: 15px
        height: auto

    .share-button
        background-color: $mbh-white
        border-style: none

    .share-button.sm
        font-size: 0.8rem

    .pop-up-btn__container
        margin-top: -0.5rem
        display: flex
        justify-content: space-between
        // padding: 0 1rem

    .pop-up-btn__container--left
        width: 80%
        text-align: left

    .pop-up-btn__container--right
        width: 50px
        height: 40px

    .pop-up-btn
        height: 40px
        width: 24%
        margin: 0 2px 2px 2px
        border-radius: 0 0 8px 8px

    .pop-up-btn.r
        border-radius: 0 0 8px 8px
        width: 50px

    .pop-up-icon
        margin: 0 5px 5px 5px
        width: 20px
        height: 20px

    .pop-up-icon.r
        margin: 0

    @media only screen and (max-width: $tablet-max)
        .pop-up-text
            display: none
        .sr-content__container
            font-size: small
        .pop-up-btn
            font-size: small
            width:50px
        .pop-up-icon
            margin: 0

    @media only screen and (max-width: 550px)
        .job-preview-card
            flex-wrap: wrap
        .preview-button__container
            margin-top: 1rem
            width: 100%
        .preview-button
            max-width: unset
        .sr-image__container
            margin: unset
        .pop-up-btn
            height: 32px
            width: 40px
        .pop-up-btn.r
            height: 32px
            width: 40px
        .pop-up-icon
            width: 15px
            height: 15px

    @media only screen and (max-width: 400px)
        .sr-content__container
            margin-top: 1rem
            width: 100%
            padding: 0



    /* SLIDE ANIMATION*/
    .slide-enter-active
        -moz-transition-duration: 0.3s
        -webkit-transition-duration: 0.3s
        -o-transition-duration: 0.3s
        transition-duration: 0.3s
        -moz-transition-timing-function: ease-in
        -webkit-transition-timing-function: ease-in
        -o-transition-timing-function: ease-in
        transition-timing-function: ease-in

    .slide-leave-active
        -moz-transition-duration: 0.3s
        -webkit-transition-duration: 0.3s
        -o-transition-duration: 0.3s
        transition-duration: 0.3s
        -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1)
        -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1)
        -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1)
        transition-timing-function: cubic-bezier(0, 1, 0.5, 1)

    .slide-enter-to, .slide-leave
        max-height: 100px
        overflow: hidden

    .slide-enter, .slide-leave-to
        overflow: hidden
        max-height: 0
</style>
