<template>
    <section class="business-home-top text-primary">
        <!-- HEADER SECTION -->
        <div class="bottom-border">
            <div class="business-home-header mw-80">
                <div class="business-home-header__left">
                    <h2>Hi, {{ businessData.businessName }}</h2>
                    <strong style="font-size: 18px">
                        <p v-if="!activeJobList.length && !draftJobList.length">
                            Get started by creating your first job ad!
                        </p>

                        <p v-if="draftJobList.length">
                            You left a job ad unfinished.
                            <a href="#" class="text-red">Continue draft?</a>
                        </p>

                        <p v-if="activeJobList.length && !draftJobList.length">
                            Check the best candidates for your active job ads!
                        </p>
                    </strong>
                </div>
                <div class="business-home-header__right">
                    <div class="float-ver">
                        <b-button
                            class="nav-btn text-white"
                            variant="primary"
                            to="/jobs/manage/create"
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
                        <p>Creating your job ad was never this easy!</p>
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
                <h2
                    style="
                        border-style: solid;
                        border-width: 1px;
                        border-color: #29648a;
                    "
                    class="background-inverse text-white border-primary"
                >
                    My active job ads
                </h2>

                <div class="bh-job-list__container">
                    <div
                        v-for="(job, key) in activeJobList.slice(0, 5)"
                        v-bind:class="[
                            job,
                            key % 2 == 1
                                ? 'background-inverse text-white border-primary'
                                : '',
                        ]"
                    >
                        <div class="bh-job-card border-primary">
                            <div class="bh-job-card__content">
                                <div class="bh-job-card__status">
                                    <div
                                        class="status-active"
                                        v-bind:class="[
                                            job,
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
                                    <div>{{ job.location }} <br /></div>
                                </div>
                            </div>

                            <div class="bh-job-card__btn-container">
                                <b-button
                                    class="bh-job-card__btn"
                                    variant="primary"
                                    v-bind:class="[
                                        job,
                                        key % 2 == 1
                                            ? 'background-white-2 text-dark'
                                            : 'text-white',
                                    ]"
                                    >Manage job ad</b-button
                                >
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <br />
                <p
                    style="font-size: 20px !important"
                    v-if="activeJobList.length > 1"
                >
                    <a href="#" class="text-red">Click here</a>
                    to see more of your active job ads!
                </p> -->

                <br />
                <div class="bh-job-list__manage-job mw-80">
                    <b-button variant="primary" class="manage-job-btn" to="#">
                        <img
                            class="manage-job-icon text-white"
                            src="@/assets/img/icons/active-2-icon.png"
                            alt="Manage active job ads"
                        />
                        <h5>Manage active<br />job ads</h5>
                    </b-button>
                    <b-button
                        variant="light"
                        class="manage-job-btn text-primary"
                        to="#"
                    >
                        <img
                            class="manage-job-icon"
                            src="@/assets/img/icons/disable-2-icon.png"
                            alt="Manage disabled job ads"
                        />
                        <h5>Manage disabled<br />job ads</h5>
                    </b-button>
                    <b-button
                        variant="secondary"
                        class="manage-job-btn text-white"
                        to="#"
                    >
                        <img
                            class="manage-job-icon"
                            src="@/assets/img/icons/draft-1-icon.png"
                            alt="Manage draft job ads"
                        />
                        <h5>Manage<br />drafts</h5>
                    </b-button>
                </div>
            </div>
        </div>

        <!-- PANEL SECTION -->
        <div v-if="!activeJobList.length" class="business-home-info">
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
                            <h2 class="text-white">Why join us?</h2>
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
                            <h2>First JOB AD is FREE</h2>
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
                            <h4>
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
                            <h4>Types of Employment Contracts in Australia</h4>
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
                            <h4>
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
                <h2>
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


//----- JOB LIST -----
.business-home-job-list
    background-color: $mbh-white-2
    padding: 4rem 0

.business-home-job-list__container
    text-align: center
    border-radius: 2rem
    background-color: $mbh-white
    // background-color: $mbh-orange-4
    padding: 4rem 4rem 2rem 4rem

.bh-job-list__container
    background-color: $mbh-white
    // margin: 1rem 0


.bh-job-card
    text-align: left
    display: flex
    justify-content: space-between
    padding: 0.5rem 0

.border-primary
    border-style: none solid solid solid
    border-width: 1px
    border-color: $mbh-blue-2

.background-inverse
    background-color: $mbh-blue-2 !important

.background-white-2
    background-color: $mbh-white-2 !important

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
    min-width: 150px
    margin-inline: 15px
    width: 100%

//----- Manage ads -----

.bh-job-list__manage-job
    display: flex
    justify-content: space-evenly

.manage-job-btn
    margin: 1rem 0
    width: 15rem
    border-radius: 1rem

.manage-job-icon
    width: 30%
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
    margin: auto 0
</style>
