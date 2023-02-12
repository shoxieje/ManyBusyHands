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
                        >
                            <span class="span-hidden">Job Details</span>
                            <img
                                v-if="!showJobDetails"
                                src="@/assets/img/icons/details-b-icon.png"
                                class="stepper-btn-icon"
                            />
                            <img
                                v-if="showJobDetails"
                                id="jd-icon"
                                src="@/assets/img/icons/details-w-icon.png"
                                class="stepper-btn-icon"
                            />
                        </b-button>
                        <b-button
                            id="card-btn"
                            class="job-preview-btn"
                            variant="light"
                            @click="selectSr"
                            style="border-radius: 0 8px 0 0 !important"
                        >
                            <span class="span-hidden">Search Result</span>
                            <img
                                v-if="!showSearchResult"
                                src="@/assets/img/icons/magnifying-glass-b-icon.png"
                                class="stepper-btn-icon"
                            />
                            <img
                                v-if="showSearchResult"
                                src="@/assets/img/icons/magnifying-glass-w-icon.png"
                                class="stepper-btn-icon"
                            />
                        </b-button>
                    </div>

                    <!-- JOB DETAILS -->
                    <div
                        v-if="showJobDetails"
                        class="job-preview-card__container"
                    >
                        <div class="job-details">
                            <div class="job-details__container">
                                <div class="job-details-title__container">
                                    <div class="job-details-title">
                                        {{ jobTitle }}
                                        <img
                                            src="@/assets/img/icons/open-link-icon.png"
                                            alt="Open job icon"
                                            class="open-link-icon"
                                        />
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
                                            <span class="span-hidden-2"
                                                >Share</span
                                            ></b-button
                                        >
                                    </div>
                                </div>
                                {{ headline }}<br />
                                {{ location }}<br />
                                {{ activity }}<br />
                                ${{ payRangeFrom }} - ${{ payRangeTo }} per hour
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
                            <div class="bottom-border"></div>
                        </div>
                        <div class="job-description">
                            {{ jobDescription }}
                            <br />
                            <img 
                                v-if="hasImage"
                                :src="this.image[1]"
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
                                    v-if="hasImage"
                                    :src="this.image[1]"
                                    alt="Share icon"
                                    class="sr-image"
                                />
                            </div>
                            <div class="sr-content__container">
                                <div>
                                    <div class="search-result-title__container">
                                        <div class="search-result-title">
                                            {{ jobTitle }}
                                            <img
                                                src="@/assets/img/icons/open-link-icon.png"
                                                alt="Open job icon"
                                                class="open-link-icon"
                                            />
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
                                                <span class="span-hidden-2"
                                                    >Share</span
                                                ></b-button
                                            >
                                        </div>
                                    </div>
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
            "headline",
            "jobDescription",
            "image"
        ],
        components: {},
        data() {
            return {
                showJobDetails: true,
                showSearchResult: false,
            };
        },

        computed: {

            hasImage() {

                if(this.image) {
                    return true
                } return false
                // return this.image.length !== 0

            }

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
        flex-direction: column
        width: 100%

    .job-details-title__container
        width: 100%
        font-weight: bold
        display: flex
        justify-content: space-between

    .job-details-title
        font-size: x-large
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
        background-color: $black-mbh-0
        color: $mbh-white

    //SEARCH RESULT
    .search-result
        padding: 2rem
        display: flex
        border-radius: 10px
        justify-content: space-between
        background-color: $mbh-white
        text-align: left
        // background: green

    .search-result-title__container
        width: 100%
        font-weight: bold
        display: flex
        justify-content: space-between

    .search-result-title
        font-size: x-large

    .sr-image__container
        // width: 15%
        min-width: 150px
        background: pink
        text-align: center
        margin-top: auto
        margin-bottom: auto

    .sr-image
        width: 150px
        height: 150px
        object-fit: cover

    .sr-content__container
        // min-width: 300px
        display: flex
        justify-content: space-between
        width: 75%
        padding: 0 0 0 1rem
        display: flex
        flex-direction: column
        justify-content: space-between

    .sr-details-title
        font-size: x-large

    .preview-button__container
        padding: 1rem 0 0 0

    .preview-button
        margin-right: 1rem
        min-width: 8rem

    .share-btn-right__container
        min-width: 50px

    .open-link-icon
        width: 20px
        height: 20px

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

    @media only screen and (max-width: $tablet-max)
        .span-hidden-2
            display: none
        .preview-button
            min-width: unset
            width: 100%
            margin: 0.1rem 0
        .search-result-title
            font-size: large
        .job-details-title
            font-size: large

    @media only screen and (max-width: 600px)
        .job-details
            padding: 10px
        .job-preview-card__container
            padding: 0
        .sr-image__container
            min-width: unset
            margin-inline: auto
        .sr-image
            width: 100px
            height: 100px
        .sr-content__container
            width: 100%
            padding: 0
        .search-result
            flex-wrap: wrap
            padding: 0.5rem
        .job-preview-btn
            min-width: 80px
        .search-result-title
            font-size: medium
        .job-details-title
            font-size: medium
        .job-details__container
            font-size: small
        .sr-content__container
            font-size: small

    @media only screen and (max-width: 350px)
        .job-preview-btn
            min-width: 50px
        .sr-image
            width: 80px
            height: 80px
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
