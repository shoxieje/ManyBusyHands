<template>
    <section class="business-home-top text-primary">
        <!-- HEADER SECTION -->
        <div class="bottom-border">
            <div class="business-home-header mw-80">
                <div class="business-home-header__left">
                    <h2>Hi, {{ businessData.businessName }}</h2>
                    <strong class="bh-header-text">
                        <p v-if="!activeJobList.length && !draftJobList.length">
                            Get started by creating your first job ad!
                        </p>

                        <p v-if="draftJobList.length">
                            You left a job ad unfinished,
                            <span class="text-red">{{
                                draftJobList[0].jobTitle
                            }}</span>
                            at
                            <span class="text-red">{{
                                draftJobList[0].location
                            }}</span
                            >. <a href="#">Continue draft?</a>
                        </p>

                        <p v-if="activeJobList.length && !draftJobList.length">
                            Check the best candidates for your active job ads!
                        </p>
                    </strong>
                </div>
                <div class="business-home-header__right">
                    <div class="float-ver">
                        <b-button
                            v-if="draftJobList.length"
                            class="nav-btn text-white"
                            variant="warning"
                            to="#"
                            style="margin: 0.5rem 1rem"
                            >Continue Draft</b-button
                        ><b-button
                            class="nav-btn text-white"
                            variant="primary"
                            to="/jobs/manage/create"
                            style="margin: 0.5rem 1rem"
                            >Create a job ad</b-button
                        >
                    </div>
                </div>
            </div>
        </div>

        <!-- FIND ROLE SECTION -->
        <div class="business-home-find-role">
            <div class="business-home-find-role__container mw-80">
                <h2>Find the person for your role</h2>
                <div class="bh-find-role__container">
                    <b-button
                        variant="light"
                        class="bh-find-role__content text-primary"
                        to="jobs/manage/create"
                    >
                        <img
                            class="find-role-icon"
                            src="@/assets/img/icons/post-2-icon.png"
                            alt="Create job ad icon"
                        />
                        <h4>Create a job ad</h4>
                        Creating your job ad was never this easy!
                    </b-button>
                    <b-button
                        variant="light"
                        class="bh-find-role__content text-primary"
                    >
                        <img
                            class="find-role-icon"
                            src="@/assets/img/icons/choose-ads-2-icon.png"
                            alt="Choose ad icon"
                        />
                        <h4>Choose your ad type</h4>
                        Choose the perfect type for your job ad!
                    </b-button>
                    <b-button
                        variant="light"
                        class="bh-find-role__content text-primary"
                    >
                        <img
                            class="find-role-icon"
                            src="@/assets/img/icons/candidate-2-icon-no-stroke.png"
                            alt="Manage candidate icon"
                        />
                        <h4>Manage candidates</h4>

                        Identify the best candidates applying for your role!
                    </b-button>
                </div>
            </div>
        </div>

        <!-- ACTIVE JOB LIST SECTION -->
        <div class="business-home-job-list mw-80">
            <h2>My active job ads</h2>
            <carousel
                :per-page="1"
                :navigate-to="someLocalProperty"
                :mouse-drag="false"
            >
                <slide
                    class="carousel-slide"
                    v-for="(job, key) in activeJobList.slice(0, 5)"
                    :key="key"
                >
                    <div class="carousel-image__container">
                        <img
                            src="@/assets/img/icons/grapes-picking.jpg"
                            alt="Share icon"
                            class="carousel-image"
                        />
                        <!-- <img :src="job.jobImageSrc" alt="Share icon" /> -->
                    </div>
                    <div class="carousel-content__container">
                        <div class="carousel-content">
                            <div class="carousel-content-text">
                                <h4>
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
                                {{ job.payRange }} <br />
                            </div>
                            <div
                                variant="light"
                                class="carousel-right text-primary"
                                href="#"
                            >
                                <b-button
                                    variant="light"
                                    class="share-button text-primary"
                                    to="#"
                                >
                                    <img
                                        src="@/assets/img/icons/share-icon.png"
                                        alt="Share icon"
                                        class="open-link-icon"
                                    />
                                    Share</b-button
                                >
                            </div>
                        </div>
                        <div class="carousel-content-btn-container">
                            <b-button
                                class="carousel-button"
                                variant="primary text-white"
                                >Manage this job ad</b-button
                            >
                            <b-button class="carousel-button" variant="light"
                                >Edit this job ad</b-button
                            >
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>

        <!-- MANAGE JOBS BUTTONS -->
        <div class="bh-job-list__manage-job mw-80">
            <b-button
                variant="primary"
                class="manage-job-btn"
                to="/jobs/manage"
            >
                <img
                    class="manage-job-icon text-white"
                    src="@/assets/img/icons/active-2-icon.png"
                    alt="Manage active job ads"
                />
                <h5 class="bh-job-btn">Manage active job ads</h5>
            </b-button>
            <b-button
                variant="light"
                class="manage-job-btn text-primary"
                to="/jobs/manage"
            >
                <img
                    class="manage-job-icon"
                    src="@/assets/img/icons/disable-2-icon.png"
                    alt="Manage disabled job ads"
                />
                <h5 class="bh-job-btn">Manage disabled job ads</h5>
            </b-button>
            <b-button
                variant="secondary"
                class="manage-job-btn text-white"
                to="/jobs/manage"
            >
                <img
                    class="manage-job-icon"
                    src="@/assets/img/icons/draft-1-icon.png"
                    alt="Manage draft job ads"
                />
                <h5 class="bh-job-btn">Manage drafts</h5>
            </b-button>
        </div>

        <!-- PANEL SECTION -->
        <!-- v-if="!activeJobList.length" -->
        <div class="business-home-info">
            <div class="business-home-info__container mw-80">
                <div
                    class="bh-info__container"
                    style="background-color: #25274d"
                >
                    <img
                        class="info-icon"
                        src="@/assets/img/icons/question-3-icon.png"
                        alt="Question icon"
                    />
                    <div class="bh-info__content">
                        <div>
                            <h2 class="text-white bh-info-title">
                                Why join us?
                            </h2>
                            <div class="text-white bh-info-text">
                                You will find this website is an excellent,
                                efficient, and interactive facility at your
                                service, where you can view Jobseeker’s profiles
                                and they your business’ profile. You can connect
                                with each other directly.
                            </div>
                        </div>
                        <b-button
                            class="nav-btn bh-info-btn"
                            variant="light"
                            to=""
                            >Button Placeholder</b-button
                        >
                    </div>
                </div>

                <div
                    class="bh-info__container"
                    style="background-color: #fff4da"
                >
                    <img
                        class="info-icon"
                        src="@/assets/img/icons/question-2-icon.png"
                        alt="Question icon"
                    />
                    <div class="bh-info__content">
                        <div>
                            <h2 class="bh-info-title">First JOB AD is FREE</h2>
                            <div class="text-primary bh-info-text">
                                Post your seasonal work – be Authentic –
                                Transparent – Visible – Verifiable - Locatable –
                                Contactable. We will help you get the right
                                people into the right place at the right time.
                            </div>
                        </div>
                        <b-button
                            class="nav-btn text-white bh-info-btn"
                            variant="primary"
                            to="/jobs/manage/create"
                            >Create a job ad</b-button
                        >
                    </div>
                </div>
            </div>
        </div>

        <!-- VIDEO SECTION -->
        <div class="business-home-video">
            <div class="business-home-video__container mw-80">
                <h2>Advice Videos</h2>
                <div class="bh-video__container">
                    <b-button
                        class="bh-video-card"
                        variant="light"
                        href="https://www.youtube.com/watch?v=_1ep-8FtRdk"
                    >
                        <img
                            class="bh-video-image"
                            alt="Video 1"
                            src="@/assets/img/icons/Video-1.jpg"
                        />
                        <div class="bh-video-content text-primary">
                            <h4 class="bh-video-title">
                                Employer's Obligations in the Australian
                                Workplace
                            </h4>
                            <p style="text-align: justify">
                                Employer's Obligations in the Australian
                                Workplace During a lockdown, a lot of Small
                                Businesses may be forced to close. So what are
                                your legal obligations as an employer?
                            </p>
                        </div>
                    </b-button>
                    <b-button
                        class="bh-video-card"
                        variant="light"
                        href="https://www.youtube.com/watch?v=TkzxeydaZP8"
                    >
                        <img
                            class="bh-video-image"
                            alt="Video 2"
                            src="@/assets/img/icons/Video-2.jpg"
                        />
                        <div class="bh-video-content text-primary">
                            <h4 class="bh-video-title">
                                Types of Employment Contracts in Australia
                            </h4>
                            <p style="text-align: justify">
                                One of the best ways to ensure you’re providing
                                your employees with the right entitlements is to
                                establish individual written employment
                                contracts.
                            </p>
                        </div>
                    </b-button>
                    <b-button
                        class="bh-video-card"
                        variant="light"
                        href="https://www.youtube.com/watch?v=_1ep-8FtRdk"
                    >
                        <img
                            class="bh-video-image"
                            alt="Video 1"
                            src="@/assets/img/icons/Video-3.jpg"
                        />

                        <div class="bh-video-content text-primary">
                            <h4 class="bh-video-title">
                                Employer's Obligations in the Australian
                                Workplace
                            </h4>
                            <p style="text-align: justify">
                                Employer's Obligations in the Australian
                                Workplace During a lockdown, a lot of Small
                                Businesses may be forced to close. So what are
                                your legal obligations as an employer?
                            </p>
                        </div>
                    </b-button>
                </div>
            </div>
        </div>

        <!-- SUPPORT -->
        <div class="business-home-support">
            <div class="business-home-support__container mw-80">
                <h2 class="bh-support-title">
                    We either support or are thankful for support from the
                    following
                </h2>
                <div class="bh-support__container">
                    <img
                        class="bh-support__logo"
                        src="@/assets/img/logos/FairFarms-Logo-Colour.png"
                        alt="Fair Farms Logo"
                        height="35%"
                        width="35%"
                    />
                    <img
                        class="bh-support__logo"
                        src="@/assets/img/logos/VEC Supporter logo inline.jpg"
                        alt="VEC Logo"
                        height="25%"
                        width="25%"
                    />
                    <img
                        class="bh-support__logo"
                        src="@/assets/img/logos/YTNSW Brand assets2.jpg"
                        alt="YTNSW Logo"
                        height="25%"
                        width="25%"
                    />
                </div>
                <div class="bh-support__container">
                    <img
                        class="bh-support__logo"
                        src="@/assets/img/logos/SRI.png"
                        alt="SRI Logo"
                        height="18%"
                        width="18%"
                    />
                    <img
                        class="bh-support__logo"
                        src="@/assets/img/logos/JobsforNSWlogo.png"
                        alt="Jobs for NSW Logo"
                        height="35%"
                        width="35%"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { config } from "../../utils/constant";
import Vue from "vue";
import { Carousel, Slide } from "vue-carousel";

const businessData = config.mockData.businessDetails;
const activeJobList = config.mockData.activeJoblist;
const draftJobList = config.mockData.draftJoblist;
const disabledJobList = config.mockData.disabledJoblist;

export default {
    name: "BusinessHome",
    data() {
        return {
            activeJobList: [],
            draftJobList: [],
            disabledJobList: [],
            businessData: {},
        };
    },
    components: {
        Carousel,
        Slide,
    },
    methods: {
        passMockData() {
            this.activeJobList = activeJobList;
            this.draftJobList = draftJobList;
            this.disabledJobList = disabledJobList;
            this.businessData = businessData;
        },
    },
    created() {
        const notUserLoggingIn = async () => {
            console.log();
            this.$store.dispatch("authUserLoggingIn", false);
        };

        notUserLoggingIn();

        this.passMockData();
    },
};
</script>

<style lang="sass">
@import '../../assets/styles/custom-variables.sass'

h2
    margin: 0
    padding: 1rem 0

//-----  Header Section  -----
.business-home-top
    // background-color: $mbh-blue-1
    margin-inline: auto

.business-home-header
    // background-color: pink
    display: flex
    justify-content: space-between

.business-home-header__left
    // background-color: cyan
    padding-top: 1rem
    max-width: 60%

.bh-header-text
    font-size: large

.business-home-header__right
    // background-color: yellow
    // max-width: 40%
    // background-color: red
    display: flex
    flex-direction: column
    justify-content: space-around

.float-ver
    display: flex
    justify-content: right
    flex-wrap: wrap


@media only screen and (max-width: $screen-max)
    .business-home-header__right
        color: red !important
    .business-home-header__left
        padding-left: 1rem

@media only screen and (max-width: $tablet-max)
    .business-home-header__left
    h2
        font-size: 1.5rem
    .bh-header-text
        font-size: small
    .nav-btn
        font-size: small !important

@media only screen and (max-width: $mobile-max)
    .business-home-header__left
    h2
        font-size: 1.2rem



//-----  Find-Role Section  -----
.business-home-find-role
    background-color: $mbh-white

.business-home-find-role__container
    padding: 2rem 0
    text-align: center

.bh-find-role__container
    margin: 2rem 0 0 0
    // background-color: red
    display: flex
    justify-content: space-around
    flex-wrap: wrap

.bh-find-role__content
    border-style: none
    background-color: $mbh-white
    padding: 1rem
    width: 30%
    min-width: 300px
    text-align: center
    margin: 0

.find-role-icon
    width: 40%
    height: auto
    margin: 1rem


@media only screen and (max-width: $tablet-max)
    h4
        font-size: 1rem
    .bh-find-role__container
        padding: 0
        margin: unset
    .bh-find-role__content
        padding: 0.5rem
        min-width: 200px
        font-size: small
    .find-role-icon
        // width: 35%



//----- JOB LIST -----
.business-home-job-list
    text-align: center

.open-link-icon
    width: 20px
    height: auto

.carousel-slide
    padding: 2rem
    display: flex
    border-radius: 1rem
    justify-content: space-between
    background-color: $mbh-white
    text-align: left


.carousel-image__container
    width: 30%
    min-width: 300px
    text-align: center
    margin-top: auto
    margin-bottom: auto

.carousel-image
    // max-width: 500px
    // min-width: 300px
    width: 100%
    height: auto
    object-fit: cover

.carousel-content__container
    height: 100%
    display: flex
    justify-content: space-between
    width: 67%
    min-width: 50%
    padding: 0 0 0 1rem
    flex-direction: column

.carousel-content
    display: flex
    justify-content: space-between

.carousel-content-text
    font-size: large
    background-color: white

.carousel-content-btn-container
    margin: 1rem 0 0 0

.carousel-right
    min-width: 50px

.carousel-button
    margin-right: 1rem
    min-width: 9rem

.share-button
    background-color: $mbh-white
    border-style: none
    padding: 0


@media only screen and (max-width: $laptop-max)
    .carousel-image__container
        min-width: 250px
    .carousel-content-text
        font-size: medium
    .carousel-button
        font-size: medium
    .share-button
        font-size: small


@media only screen and (max-width: $tablet-max)
    .VueCarousel-slide.carousel-slide
        padding: 1.5rem
    .carousel-image__container
        min-width: 200px
    .carousel-content-text
        font-size: small
    .carousel-button
        font-size: small
        min-width: 8rem
        margin-bottom: 0.5rem
        margin-right: 0.5rem
    .open-link-icon
        width: 15px
    .share-button
        font-size: small

@media only screen and (max-width: $mobile-max)
    .carousel-slide
        flex-wrap: wrap
        justify-content: center
    .carousel-image__container
        min-width: 200px
        margin-bottom: 1rem
        width: 100%
    .carousel-button
        width: 100%
        margin-bottom: 0.5rem
    .carousel-content__container
        width: unset
        height: unset


//-----  Info Section  -----
.business-home-info
    background-color: $mbh-white-2

.business-home-info__container
    padding: 2rem
    // background-color: yellow
    display: flex
    flex-wrap: wrap
    justify-content: space-between

.bh-info__container
    width: 48%
    min-width: 40px
    padding: 2rem 2rem
    display: flex
    justify-content: space-between

.info-icon
    width: 25%
    height: auto
    margin: auto 2rem auto 0

.bh-info__content
    width: 70%
    display: flex
    flex-direction: column
    justify-content: space-between
    // background-color: pink

.bh-info-text
    text-align: justify
    margin-bottom: 1rem

@media only screen and (max-width: $screen-max)
    .bh-info-title
        font-size: x-large
    .bh-info-text
        font-size: medium
    .bh-info-btn
        font-size: medium !important

@media only screen and (max-width: 800px)
    .bh-info__container
        width: 100%
    .bh-info-title
        font-size: large
    .bh-info-text
        font-size: small
    .bh-info-btn
        font-size: medium !important
    .info-icon
        width: 20%
        margin-inline: 1rem
    .bh-info__content
        width: 100%

@media only screen and (max-width: 480px)
    .bh-info__container
        flex-wrap: wrap
        text-align: center
    .info-icon
        width: 30%
        margin-inline: auto


//----- Manage ads -----

.bh-job-list__manage-job
    display: flex
    justify-content: space-evenly

.manage-job-btn
    margin: 1rem 0
    width: 30%
    border-radius: 1rem

.manage-job-icon
    width: 25%
    height: auto
    margin: 1rem

@media only screen and (max-width: $laptop-max)
    .manage-job-icon
        width: 20%
    .bh-job-btn
        font-size: medium

@media only screen and (max-width: $mobile-max)
    .manage-job-icon
        width: 10%
    .bh-job-list__manage-job
        flex-wrap: wrap
    .bh-job-btn
        font-size: small
    .manage-job-btn
        width: 80%
        margin: 0.5rem

//----- Video -----
.business-home-video
    padding: 4rem
    // background-color: $mbh-white

.business-home-video__container
    text-align: center
    // background-color: pink

.bh-video__container
    // background-color: yellow
    display: flex
    justify-content: space-between
    flex-wrap: wrap

.bh-video-card
    min-width: 250px
    background-color: $mbh-white
    // background-color: green
    width: 30%
    padding: 0
    margin-top: 1rem
    margin-bottom: 1rem

.bh-video-content
    padding: 1rem
    // background-color: pink

.bh-video-image
    width: 100%
    // height: 50%



@media only screen and (max-width: $screen-max)
    .bh-video-title
        font-size: large

@media only screen and (max-width: 900px)
    .bh-video__container
        justify-content: space-around
    .bh-video-title
        font-size: large
    .bh-video-card
        width: 45%


@media only screen and (max-width: 650px)
    .bh-video-card
        width: 100%
    .bh-video-title
        font-size: medium
    .bh-video-content p
        font-size: small

//----- Logo -----
.business-home-support
    background-color: $mbh-white
    text-align: center
    padding: 2rem

.bh-support__container
    padding: 1rem
    display: flex
    justify-content: space-evenly
    flex-wrap: wrap

.bh-support__logo
    min-width: 250px
    margin: auto 0

@media only screen and (max-width: $tablet-max)
    .bh-support__logo
        min-width: 150px
</style>
