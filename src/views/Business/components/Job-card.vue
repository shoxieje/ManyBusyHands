<template>
    <div>
        <div class="job-preview-card">
            <!-- IMAGE CONTAINER -->
            <div class="sr-image__container">
                <img
                    src="@/assets/img/icons/grapes-picking.jpg"
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
                            <a href="#"
                                >{{ job.jobTitle }}
                                <img
                                    src="@/assets/img/icons/open-link-icon.png"
                                    alt="Open job icon"
                                    class="open-link-icon"
                            /></a>
                        </h4>
                        {{ job.location }} <br />
                        {{ job.activity }} <br />
                        ${{ job.payRangeFrom }} - ${{ job.payRangeTo }}
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
                    variant="warning text-white"
                    @click="toggleBar"
                    >Manage</b-button
                >
            </div>
        </div>
        <div v-if="showBottomBar" class="pop-up-btn__container">
            <div class="pop-up-btn__container-2">
                <div class="pop-up-btn__container-3">
                    <b-button class="pop-up-btn text-white" variant="secondary"
                        >Edit</b-button
                    >
                    <b-button
                        class="pop-up-btn"
                        variant="quaternary"
                        @click="toast"
                        >{{
                            type == "disabled" ? "Enable" : "Disable"
                        }}</b-button
                    >
                </div>
                <div class="pop-up-btn__container-3">
                    <b-button class="pop-up-btn text-white" variant="tertiary"
                        >Candidate</b-button
                    >
                    <b-button
                        class="pop-up-btn"
                        variant="warning"
                        @click="toastPrompt"
                        >Delete</b-button
                    >
                </div>
            </div>
            <b-button
                class="pop-up-btn sm text-white"
                variant="primary"
                @click="toggleBar"
                >X</b-button
            >
        </div>
    </div>
</template>

<script>
export default {
    props: ["job", "type"],
    components: {},
    data() {
        return {
            showBottomBar: false,
        };
    },
    methods: {
        toggleBar() {
            this.showBottomBar
                ? (this.showBottomBar = false)
                : (this.showBottomBar = true);
        },
        toast() {
            this.type == "disabled"
                ? this.$vToastify.success("Job has been enabled.")
                : this.$vToastify.success("Job has been disabled.");
        },
        toastPrompt() {
            this.$vToastify.prompt({
                body: "Are you sure you want to delete this job ad?",
                answers: { Yes: true, No: false },
            });
        },
    },
    created() {},
};
</script>

<style lang="sass">
@import '../../../assets/styles/custom-variables.sass'
.job-preview-card
    margin : 0.5rem 0
    padding: 1rem
    display: flex
    // border-radius: 10px
    // border-style: solid
    // border-color: black
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
.pop-up-btn__container-2
    display: flex
    width: 100%
.pop-up-btn__container-3
    width: 50%
.pop-up-btn
    width: 50%
    min-width: 90px
.pop-up-btn.sm
    max-width: 40px
    min-width: 30px

@media only screen and (max-width: $tablet-max)
    .sr-content__container
        font-size: small
    .pop-up-btn
        font-size: small

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
    .pop-up-btn__container-2
        flex-wrap: wrap
    .pop-up-btn__container-3
        width: 100%
@media only screen and (max-width: 300px)
    .pop-up-btn
        width: 100%


@media only screen and (max-width: 400px)
    .sr-content__container
        margin-top: 1rem
        width: 100%
        padding: 0
</style>
