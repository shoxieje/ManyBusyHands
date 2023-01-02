<template>
    <section class="business-home-top text-primary">
        <!-- HEADER SECTION -->
        <div class="bottom-border">
            <div class="business-home-header mw-80">
                <div class="business-home-header__left">
                    <h3>Hi, {{ businessData.businessName }}</h3>

                    <p v-if="!activeJobList.length && !draftJobList.length">
                        Get started by creating your first job ad!
                    </p>

                    <p v-if="!activeJobList.length && draftJobList.length">
                        You are almost there! Continue your job ad draft!
                    </p>
                    <p v-if="activeJobList.length">
                        Check the best candidates for your active job ads!
                    </p>
                </div>
                <div class="business-home-header__right">
                    <div class="float-ver">
                        <b-button
                            class="nav-btn text-white"
                            variant="primary"
                            to="/Job/ManageJob/Create"
                            >Post a job ad</b-button
                        >
                    </div>
                </div>
            </div>
        </div>

        <!-- FIND ROLE SECTION -->
        <div class="business-home-find-role">
            <div class="business-home-find-role__container mw-80">
                <h3>Find the person for your role</h3>
                <div class="bh-find-role__container">
                    <b-button
                        variant="light"
                        class="bh-find-role__content text-primary"
                        to="/Job/ManageJob/Create"
                    >
                        <img
                            class="find-role-icon"
                            src="@/assets/img/icons/post-2-icon.png"
                            alt="Post job ad icon"
                        />
                        <h4>Post a job ad</h4>
                        <p>Posting your job ad was never this easy!</p>
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
                        <p>Choose the perfect type for your job ad!</p>
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
                        <p>
                            Identify the best candidates applying for your role!
                        </p>
                    </b-button>
                </div>
            </div>
        </div>

        <!-- ACTIVE JOB LIST SECTION -->
        <div v-if="activeJobList.length" class="business-home-job-list">
            <div class="business-home-job-list__container mw-80">
                <h3 class="background-gray-0">My active job ads</h3>

                <div class="bh-job-list__container">
                    <div
                        v-for="(job, key) in activeJobList.slice(0, 5)"
                        v-bind:class="[
                            pageItemClass,
                            key % 2 == 1 ? 'background-gray-0' : '',
                        ]"
                    >
                        <div class="bh-job-card">
                            <div class="bh-job-card__content">
                                <div class="bh-job-card__status">
                                    <div
                                        class="status-active"
                                        v-bind:class="[
                                            pageItemClass,
                                            key % 2 == 1
                                                ? 'background-white-2'
                                                : '',
                                        ]"
                                    >
                                        {{ job.status }}
                                    </div>
                                </div>
                                <div class="">
                                    <h5>{{ job.jobTitle }}</h5>
                                    <div>
                                        {{ job.location }} <br />
                                        <!-- {{ job.category }} <br />
                                    {{ job.hourlyRate }} <br /> -->
                                    </div>
                                </div>
                            </div>
                            <div class="bh-job-card__btn-container">
                                <b-button
                                    class="bh-job-card__btn text-white"
                                    variant="primary"
                                    >Edit job ad</b-button
                                >
                                <b-button
                                    class="bh-job-card__btn"
                                    variant="light"
                                    style="
                                        border-style: solid;
                                        border-color: #b7b9be;
                                    "
                                    >Disable ad</b-button
                                >
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <p
                    style="font-size: 20px !important"
                    v-if="activeJobList.length > 1"
                >
                    <a href="#" style="color: #29648a">Click here</a>
                    to see more of your active job ads!
                </p>
            </div>
        </div>

        <!-- DISABLED JOB LIST SECTION -->

        <div v-if="disabledJobList.length" class="business-home-job-list">
            <div class="business-home-job-list__container mw-80">
                <h3 class="background-gray-0">My disabled job ads</h3>
                <div class="bh-job-list__container">
                    <div
                        v-for="(job, key) in disabledJobList.slice(0, 5)"
                        v-bind:class="[
                            pageItemClass,
                            key % 2 == 1 ? 'background-gray-0' : '',
                        ]"
                    >
                        <div class="bh-job-card">
                            <div class="bh-job-card__content">
                                <div class="bh-job-card__status">
                                    <div
                                        class="status-active"
                                        v-bind:class="[
                                            pageItemClass,
                                            key % 2 == 1
                                                ? 'background-white-2'
                                                : '',
                                        ]"
                                    >
                                        {{ job.status }}
                                    </div>
                                </div>
                                <div class="">
                                    <h5>{{ job.jobTitle }}</h5>
                                    <div>
                                        {{ job.location }} <br />
                                        <!-- {{ job.category }} <br />
                                    {{ job.hourlyRate }} <br /> -->
                                    </div>
                                </div>
                            </div>
                            <div class="bh-job-card__btn-container">
                                <b-button
                                    class="bh-job-card__btn text-white"
                                    variant="primary"
                                    >Edit job ad</b-button
                                >
                                <b-button
                                    class="bh-job-card__btn"
                                    variant="light"
                                    style="
                                        border-style: solid;
                                        border-color: #b7b9be;
                                    "
                                    >Enable ad</b-button
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <p
                    style="font-size: 20px !important"
                    v-if="activeJobList.length > 1"
                >
                    <a href="#" style="color: #29648a">Click here</a>
                    to see more of your disabled job ads!
                </p>
            </div>
        </div>

        <!-- DRAFT JOB LIST SECTION -->
        <div v-if="draftJobList.length" class="business-home-job-list">
            <div class="business-home-job-list__container mw-80">
                <h3 class="background-gray-0">My draft job ads</h3>
                <div class="bh-job-list__container">
                    <div
                        v-for="(job, key) in draftJobList.slice(0, 5)"
                        v-bind:class="[
                            pageItemClass,
                            key % 2 == 1 ? 'background-gray-0' : '',
                        ]"
                    >
                        <div class="bh-job-card">
                            <div class="bh-job-card__content">
                                <div class="bh-job-card__status">
                                    <div
                                        class="status-active"
                                        v-bind:class="[
                                            pageItemClass,
                                            key % 2 == 1
                                                ? 'background-white-2'
                                                : '',
                                        ]"
                                    >
                                        {{ job.status }}
                                    </div>
                                </div>
                                <div class="">
                                    <h5>{{ job.jobTitle }}</h5>
                                    <div>
                                        {{ job.location }} <br />
                                        <!-- {{ job.category }} <br />
                                    {{ job.hourlyRate }} <br /> -->
                                    </div>
                                </div>
                            </div>
                            <div class="bh-job-card__btn-container">
                                <!-- <b-button
                                    class="bh-job-card__btn text-white"
                                    variant="primary"
                                    >Edit job ad</b-button
                                > -->
                                <b-button
                                    class="bh-job-card__btn"
                                    variant="light"
                                    style="
                                        border-style: solid;
                                        border-color: #b7b9be;
                                    "
                                    >Edit draft</b-button
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <p
                    style="font-size: 20px !important"
                    v-if="activeJobList.length > 1"
                >
                    <a href="#" style="color: #29648a">Click here</a>
                    to see more of your draft job ad!
                </p>
            </div>
        </div>

        <!-- PANEL SECTION -->
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
                            <h3 class="text-white">Why join us?</h3>
                            <p class="text-white" style="text-align: justify">
                                You will find this website is an excellent,
                                efficient, and interactive facility at your
                                service, where you can view Jobseeker’s profiles
                                and they your business’ profile. You can connect
                                with each other directly.
                            </p>
                        </div>
                        <b-button class="nav-btn" variant="light" to=""
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
                            <h3>First JOB AD is FREE</h3>
                            <p style="text-align: justify">
                                Post your seasonal work – be Authentic –
                                Transparent – Visible – Verifiable - Locatable –
                                Contactable. We will help you get the right
                                people into the right place at the right time.
                            </p>
                        </div>
                        <b-button
                            class="nav-btn text-white"
                            variant="primary"
                            to=""
                            >Button Placeholder</b-button
                        >
                    </div>
                </div>
            </div>
        </div>

        <!-- VIDEO SECTION -->
        <div class="business-home-video">
            <div class="business-home-video__container mw-80">
                <h3>Advice Videos</h3>
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
                            <h5>
                                Employer's Obligations in the Australian
                                Workplace
                            </h5>
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
                            <h5>Types of Employment Contracts in Australia</h5>
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
                            <h5>
                                Employer's Obligations in the Australian
                                Workplace
                            </h5>
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
                <h3>
                    We either support or are thankful for support from the
                    following
                </h3>
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
const businessData = config.mockData.businessDetails;
const activeJobList = config.mockData.activeJoblist;
const draftJobList = config.mockData.draftJoblist;
const disabledJobList = config.mockData.disabledJoblist;
console.log(activeJobList);

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
            this.$store.dispatch("authUserLoggingIn", false);
        };

        notUserLoggingIn();

        this.passMockData();
    },
};
</script>

<style lang="sass">
@import '../../assets/styles/custom-variables.sass'

h3
    margin: 0
    padding: 1rem 0

.background-gray-0
    background-color: $mbh-gray-0 !important
.background-white-2
    background-color: $mbh-white-2 !important

.business-home-job-list
    background-color: $mbh-white
    // padding: 1rem 0

.business-home-job-list__container
    text-align: center
    border-radius: 2rem
    // background-color: $mbh-white-2
    padding: 2rem

.bh-job-list__container
    background-color: $mbh-white-2
    // margin: 1rem 0

.bh-job-card
    text-align: left
    display: flex
    justify-content: space-between
    padding: 0.5rem 0

.bh-job-card__content
    display: flex

.bh-job-card__status
    display: flex
    justify-content: center
    margin: auto 0

.status-active
    margin-inline: 15px
    background-color: $mbh-gray-0
    font-weight: bold
    font-size: 18px
    width: 100px
    text-align: center
    border-radius: 10px
    padding: 2px 0
    font-style: italic
    color: $mbh-blue-2


.bh-job-card__btn-container
    display: flex
    justify-content: right
    margin: auto 0

.bh-job-card__btn
    min-width: 120px
    margin-inline: 5px
    width: 100%

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

.business-home-header__right
    // background-color: yellow

.float-ver
    display: flex
    align-items: center
    height: 100%


//-----  Find-Role Section  -----
.business-home-find-role
    background-color: $mbh-white

.business-home-find-role__container
    padding: 2rem 0 0 0
    text-align: center

.bh-find-role__container
    margin: 2rem 0 0 0
    // background-color: red
    display: flex
    justify-content: space-between
    flex-wrap: wrap

.bh-find-role__content
    border-style: none
    background-color: $mbh-white
    padding: 1rem
    width: 30%

    min-width: 300px
    text-align: center

.find-role-icon
    width: 40%
    height: auto
    margin: 1rem


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
    min-width: 300px
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

//----- Video -----
.business-home-video
    padding: 2rem
    // background-color: $mbh-white

.business-home-video__container
    // background-color: pink

.bh-video__container
    // background-color: yellow
    display: flex
    justify-content: space-between
    flex-wrap: wrap

.bh-video-card
    min-width: 300px
    background-color: $mbh-white
    max-width: 25rem
    padding: 0

.bh-video-content
    padding: 1rem

.bh-video-image
    width: 100%
    height: 50%

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
</style>
