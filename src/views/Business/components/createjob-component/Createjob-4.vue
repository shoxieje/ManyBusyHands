<template>
    <b-container class="container-job">
        <b-form id="create-job-form4" class="text-primary">
            <div class="create-job-box">
                <br />
                <h3 class="subtitle">Preview</h3>
                <div class="job-preview__container">
                    <div class="job-preview-button__container">
                        <b-button
                            id="jd-btn"
                            class="job-preview-btn selected"
                            variant="light"
                            @click="selectJd"
                            style="border-radius: 8px 0 0 0 !important"
                            >Job details</b-button
                        >
                        <b-button
                            id="card-btn"
                            class="job-preview-btn"
                            variant="light"
                            @click="selectSr"
                            style="border-radius: 0 8px 0 0 !important"
                            >Search result</b-button
                        >
                    </div>

                    <!-- JOB DETAILS -->
                    <div
                        v-if="showJobDetails"
                        class="job-preview-card__container"
                    >
                        <div class="job-details">
                            <div class="job-details__container">
                                <div>
                                    <h4>
                                        {{ jobTitle }}
                                        <img
                                            src="@/assets/img/icons/open-link-icon.png"
                                            alt="Open job icon"
                                            class="open-link-icon"
                                        />
                                    </h4>
                                    {{ jobSummary }}<br />
                                    {{ location }}<br />
                                    {{ activity }}<br />
                                    ${{ payRangeFrom }} - ${{ payRangeTo }} per
                                    hour
                                    <!-- {{ adType }}<br /> -->
                                    <div class="preview-button__container">
                                        <b-button
                                            class="preview-button"
                                            variant="warning text-white"
                                            disabled
                                            >Quick apply</b-button
                                        >
                                        <b-button
                                            class="preview-button"
                                            variant="light"
                                            disabled
                                            >Save</b-button
                                        >
                                    </div>
                                </div>

                                <div
                                    variant="light"
                                    class="share-btn-right__container text-primary"
                                    href="#"
                                >
                                    <b-button
                                        variant="light"
                                        class="share-button text-primary sm"
                                        style="background-color: white"
                                        disabled
                                    >
                                        <img
                                            src="@/assets/img/icons/share-icon.png"
                                            alt="Share icon"
                                            class="open-link-icon sm"
                                        />
                                        Share</b-button
                                    >
                                </div>
                            </div>
                            <div class="bottom-border"></div>
                        </div>
                        <div class="job-description">
                            {{ jobDescription }}
                            <br />
                            <img
                                src="@/assets/img/icons/grapes-picking.jpg"
                                alt="Share icon"
                                class="job-preview-image"
                            />
                        </div>
                    </div>

                    <!-- SEARCH RESULT -->
                    <div
                        v-if="showSearchResult"
                        class="job-preview-card__container"
                    >
                        <div class="search-result">
                            <div class="sr-image__container">
                                <img
                                    src="@/assets/img/icons/grapes-picking.jpg"
                                    alt="Share icon"
                                    class="sr-image"
                                />
                            </div>
                            <div class="sr-content__container">
                                <div class="sr-content">
                                    <div>
                                        <h4
                                            style="font-size: 1.1rem !important"
                                        >
                                            {{ jobTitle }}
                                            <img
                                                src="@/assets/img/icons/open-link-icon.png"
                                                alt="Open job icon"
                                                class="open-link-icon"
                                            />
                                        </h4>
                                        {{ location }} <br />
                                        {{ activity }} <br />
                                        ${{ payRangeFrom }} - ${{ payRangeTo }}
                                        per hour
                                        <br />
                                    </div>
                                    <div class="preview-button__container">
                                        <b-button
                                            class="preview-button"
                                            variant="warning text-white"
                                            disabled
                                            >Quick apply</b-button
                                        >
                                        <b-button
                                            class="preview-button"
                                            variant="light"
                                            disabled
                                            >Save</b-button
                                        >
                                    </div>
                                </div>
                                <div
                                    variant="light"
                                    class="share-btn-right__container text-primary"
                                    href="#"
                                >
                                    <b-button
                                        variant="light"
                                        class="share-button text-primary sm"
                                        disabled
                                        style="background-color: white"
                                    >
                                        <img
                                            src="@/assets/img/icons/share-icon.png"
                                            alt="Share icon"
                                            class="open-link-icon sm"
                                            disabled
                                        />
                                        Share</b-button
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-form>
    </b-container>
</template>
<script>
export default {
    props: [
        "jobTitle",
        "activity",
        "location",
        "payRangeFrom",
        "payRangeTo",
        "adType",
        "jobSummary",
        "jobDescription",
    ],
    components: {},
    data() {
        return {
            showJobDetails: true,
            showSearchResult: false,
        };
    },
    methods: {
        selectJd() {
            var jdBtn = document.getElementById("jd-btn");
            var srBtn = document.getElementById("card-btn");
            jdBtn.classList.add("selected");
            srBtn.classList.remove("selected");
            this.showJobDetails = true;
            this.showSearchResult = false;
        },
        selectSr() {
            var jdBtn = document.getElementById("jd-btn");
            var srBtn = document.getElementById("card-btn");
            jdBtn.classList.remove("selected");
            srBtn.classList.add("selected");
            this.showJobDetails = false;
            this.showSearchResult = true;
        },
    },
    created() {},
};
</script>
<style lang="sass">
@import '../../../../assets/styles/custom-variables.sass'

.subtitle
    padding-bottom: 0 !important
.container-job
    // background-color: orange
.create-job-box
    // background-color: yellow
.job-preview__container
    // background-color: blue
    padding: 2rem 0
.job-preview-button__container
    // background-color: green
.job-preview-btn
    min-width: 150px
    // background-color: pink !important
.job-preview-card__container
    background-color: $mbh-white-2
    border-style: solid
    border-color: $mbh-gray-0
    border-width: 2px
    border-radius: 10px
    padding: 1rem

//JOB DETAILS
.job-details
    background-color: $mbh-white
    // background-color: pink
    padding: 2rem
    border-radius: 10px

.job-details__container
    // background-color: yellow
    display: flex
    justify-content: space-between

.bottom-border
    padding: 1rem

.job-description
    background-color: $mbh-white
    // background-color: pink
    text-align: justify
    padding: 0 2rem

.job-preview-image
    width: 100%
    padding: 2rem 0

.job-preview-btn.selected
    background-color: $mbh-blue-2
    color: $mbh-white

//SEARCH RESULT
.search-result
    padding: 2rem
    display: flex
    border-radius: 10px
    flex-wrap: wrap
    justify-content: space-between
    background-color: $mbh-white
    text-align: left
    // background: green

.sr-image__container
    // background-color: pink
    // width: 15%
    min-width: 150px
    background: pink
    text-align: center
    margin-top: auto
    margin-bottom: auto

.sr-image
    // background-color: pink
    width: 150px
    height: 150px
    object-fit: cover

.sr-content__container
    // min-width: 300px
    // background: yellow
    display: flex
    justify-content: space-between
    width: 75%
    min-width: 50%
    padding: 0 0 0 1rem

.sr-content
    // background-color: yellow
    display: flex
    flex-direction: column
    justify-content: space-between

.preview-button__container
    padding: 1rem 0 0 0

.preview-button
    margin-right: 1rem
    min-width: 8rem

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

.disabled
    opacity: 1 !important
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
