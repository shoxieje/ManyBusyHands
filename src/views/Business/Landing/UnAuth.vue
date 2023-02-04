<template>
    <section class="business-landing-top text-primary">
        <!-- HEADER SECTION -->
        <div class="bottom-border">
            <div class="business-landing-header mw-80">
                <div class="business-landing-header__left">
                    <h2>Welcome, business owner</h2>
                    <strong class="bl-header-text">
                        <p>
                            Get started by
                            <span class="text-red">registering</span> your
                            business!
                        </p>
                    </strong>
                </div>
                <div class="business-landing-header__right">
                    <div class="float-ver">
                        <b-button
                            class="nav-btn text-white"
                            variant="warning"
                            to="/business/signup"
                            style="margin: 0.5rem 0.5rem"
                            >Sign up</b-button
                        >
                        <!-- <b-button
                            class="nav-btn text-white"
                            variant="primary"
                            to="business/signin"
                            style="margin: 0.5rem 0.5rem"
                            >Sign in</b-button
                        > -->
                    </div>
                </div>
            </div>
        </div>

        <!-- REGISTER SECTION -->
        <div class="business-landing-register">
            <div class="business-landing__container mw-80">
                <div class="business-landing__container--40 hidden">
                    <img
                        class="business-landing-icon"
                        src="@/assets/img/icons/interview.png"
                        alt="Interview image"
                    />
                </div>
                <div class="business-landing__container--60">
                    <h3 class="subtitle">
                        Finding the person for your role was never this easy!
                    </h3>
                    We can help you find the right person and watch your
                    business succeed.<br /><br />
                    Get in touch with us
                    <span class="text-secondary">1300 109 292</span> <br />
                    Or email us at
                    <a
                        class="text-secondary"
                        href="mailto: admin@manybusyhands.com"
                        >admin@manybusyhands.com</a
                    >
                    <br />
                    <b-button
                        class="nav-btn text-white reg-btn"
                        variant="primary"
                        to="/business/signin"
                        style="margin: 1rem 0; width: 200px"
                        >Create a job ad</b-button
                    ><br />
                </div>
                <div class="business-landing__container--40 display">
                    <img
                        class="business-landing-icon"
                        src="@/assets/img/icons/interview.png"
                        alt="Interview image"
                    />
                </div>
            </div>
        </div>

        <!-- WHY JOIN US SECTION -->
        <div class="business-landing-why-join">
            <div class="business-landing__container mw-80">
                <div class="business-landing__container--40">
                    <img
                        class="business-landing-icon--sm"
                        src="@/assets/img/icons/question-2-icon2.png"
                        alt="Interview image"
                    />
                </div>
                <div class="business-landing__container--60 align-right">
                    <h3 class="subtitle">Why join us?</h3>
                    You will find this website is an excellent, efficient, and
                    interactive facility at your service, where you can view
                    Jobseeker’s profiles and they your business’ profile. You
                    can connect with each other directly. <br />
                    <b-button
                        class="nav-btn text-white reg-btn"
                        variant="primary"
                        to="/business/signup"
                        style="margin: 1rem 0; width: 200px"
                        >Join us</b-button
                    >
                </div>
            </div>
        </div>

        <!-- ADS SECTION -->
        <div class="business-landing-ads">
            <div class="business-landing__container mw-80">
                <div class="business-landing__container--40 hidden">
                    <img
                        class="business-landing-icon--sm"
                        src="@/assets/img/icons/ads-icon.png"
                        alt="Interview image"
                    />
                </div>
                <div class="business-landing__container--60">
                    <h3 class="subtitle">First job ad is free</h3>
                    You will find this website is an excellent, efficient, and
                    interactive facility at your service, where you can view
                    Jobseeker’s profiles and they your business’ profile. You
                    can connect with each other directly. <br />
                    <b-button
                        class="nav-btn text-white reg-btn"
                        variant="primary"
                        to="/business/signup"
                        style="margin: 1rem 0; width: 200px"
                        >Get started</b-button
                    >
                </div>
                <div class="business-landing__container--40 display">
                    <img
                        class="business-landing-icon--sm"
                        src="@/assets/img/icons/ads-icon.png"
                        alt="Interview image"
                    />
                </div>
            </div>
        </div>

        <!-- BEST JOB ADS SECTION - variation 1-->
        <div
            class="1rembusiness-landing-best-job-ads"
            style="background-color: #2e9cca"
        >
            <div class="business-landing__container mw-80">
                <div class="business-landing__container--40">
                    <img
                        class="business-landing-icon"
                        src="@/assets/img/icons/job-seeker.png"
                        alt="Interview image"
                    />
                </div>
                <div class="business-landing__container--60 align-right">
                    <img
                        class="business-landing-icon--xs"
                        src="@/assets/img/icons/best-job-ads-2.png"
                        alt="Interview image"
                    />
                </div>
            </div>
        </div>

        <!-- BEST JOB ADS SECTION - variation 2-->
        <div
            class="1rembusiness-landing-best-job-ads"
            style="background-color: #f7f8fb"
        >
            <div class="business-landing__container mw-80">
                <div class="business-landing__container--40">
                    <img
                        class="business-landing-icon"
                        src="@/assets/img/icons/job-seeker.png"
                        alt="Interview image"
                    />
                </div>
                <div class="business-landing__container--60 align-right">
                    <img
                        class="business-landing-icon--xs"
                        src="@/assets/img/icons/best-job-ads.png"
                        alt="Interview image"
                    />
                </div>
            </div>
        </div>

        <!-- VIDEO SECTION -->
        <div class="business-landing-video">
            <div class="business-landing-video__container mw-80">
                <h2>Advice Videos</h2>
                <div class="bl-video__container">
                    <b-button
                        class="bl-video-card"
                        variant="light"
                        href="https://www.youtube.com/watch?v=_1ep-8FtRdk"
                    >
                        <img
                            class="bl-video-image"
                            alt="Video 1"
                            src="@/assets/img/icons/Video-1.jpg"
                        />
                        <div class="bl-video-content text-primary">
                            <h4 class="bl-video-title">
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
                        class="bl-video-card"
                        variant="light"
                        href="https://www.youtube.com/watch?v=TkzxeydaZP8"
                    >
                        <img
                            class="bl-video-image"
                            alt="Video 2"
                            src="@/assets/img/icons/Video-2.jpg"
                        />
                        <div class="bl-video-content text-primary">
                            <h4 class="bl-video-title">
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
                        class="bl-video-card"
                        variant="light"
                        href="https://www.youtube.com/watch?v=_1ep-8FtRdk"
                    >
                        <img
                            class="bl-video-image"
                            alt="Video 1"
                            src="@/assets/img/icons/Video-3.jpg"
                        />

                        <div class="bl-video-content text-primary">
                            <h4 class="bl-video-title">
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
        <div class="business-landing-support">
            <div class="business-landing-support__container mw-80">
                <h2 class="bl-support-title">
                    We either support or are thankful for support from the
                    following
                </h2>
                <div class="bl-support__container">
                    <img
                        class="bl-support__logo"
                        src="@/assets/img/logos/FairFarms-Logo-Colour.png"
                        alt="Fair Farms Logo"
                        height="35%"
                        width="35%"
                    />
                    <img
                        class="bl-support__logo"
                        src="@/assets/img/logos/VEC Supporter logo inline.jpg"
                        alt="VEC Logo"
                        height="25%"
                        width="25%"
                    />
                    <img
                        class="bl-support__logo"
                        src="@/assets/img/logos/YTNSW Brand assets2.jpg"
                        alt="YTNSW Logo"
                        height="25%"
                        width="25%"
                    />
                </div>
                <div class="bl-support__container">
                    <img
                        class="bl-support__logo"
                        src="@/assets/img/logos/SRI.png"
                        alt="SRI Logo"
                        height="18%"
                        width="18%"
                    />
                    <img
                        class="bl-support__logo"
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
    import { Carousel, Slide } from "vue-carousel";

    export default {
        name: "UnauthorizeLanding",
        data() {
            return {

            };
        },
        components: {
            Carousel,
            Slide,
        },
        methods: {

        },
        created() {
            
        },
    };
</script>

<style lang="sass">
    @import '../../../assets/styles/custom-variables.sass'

    h2, h3
        margin: 0
        padding: 1rem 0

    .subtitle
        font-size: x-large !important

    //-----  Header Section  -----
    .business-landing-top
        margin-inline: auto

    .business-landing-header
        display: flex
        justify-content: space-between

    .business-landing-header__left
        padding-top: 1rem
        max-width: 60%

    .bl-header-text
        font-size: large

    .business-landing-header__right
        display: flex
        flex-direction: column
        justify-content: space-around

    .float-ver
        display: flex
        justify-content: right
        flex-wrap: wrap

    @media only screen and (max-width: $screen-max)
        .business-landing-header__right
            color: red !important
        .business-landing-header__left
            padding-left: 1rem

    @media only screen and (max-width: $tablet-max)
        h2
            font-size: 1.5rem
        .bl-header-text
            font-size: small
        .nav-btn
            font-size: small !important

    @media only screen and (max-width: $mobile-max)
        h2
            font-size: 1.2rem


    //----- Register ------
    .business-landing-register
        background: $mbh-white
    .business-landing__container
        display: flex
    .business-landing__container--60
        margin-top: auto
        margin-bottom: auto
        padding: 2rem 1rem
        width: 60%
    .business-landing__container--60.align-right
        display: block
        text-align: right

    .align-center
        display: flex
        justify-content: center
    .business-landing__container--40
        padding: 2rem 1rem
        width: 40%
        display: flex
        justify-content: center
    // .business-landing__container--40.display
    .business-landing__container--40.hidden
        display: none
    .business-landing-icon
        max-height: 270px
        margin: auto
    .business-landing-icon--sm
        max-height: 200px
        margin: auto
    .business-landing-icon--xs
        max-height: 150px
        margin: auto
    .reg-btn
        margin: 1rem 0
        width: 200px
    @media only screen and (max-width: $laptop-max)
        .business-landing-icon--xs
            max-height: 120px
    @media only screen and (max-width: $tablet-max)
        .business-landing__container--60
            text-align: center
            width: 100%
        .business-landing__container--60.align-right
            text-align: center
        .business-landing__container--40
            width: 100%
            text-align: center
        .business-landing__container--40.display
            display: none
        .business-landing__container--40.hidden
            display: flex
        .business-landing-icon
            height: 270px
        .business-landing-icon--sm
            height: 170px
        .business-landing-icon--xs
            height: 100px
        .business-landing__container
            flex-wrap: wrap
        .subtitle
            font-size: large !important
    @media only screen and (max-width: $mobile-max)
        .business-landing-icon
            height: 200px
        .reg-btn
            width: 100% !important
        .business-landing-icon--xs
            height: 70px
        .business-landing__container--60
            padding: 1rem
        .business-landing__container--40
            padding: 1rem

    //----- Why join -----
    // .business-landing-why-join

    //----- ads -----
    .business-landing-ads
        background: $mbh-white

    //------ best job ads ------


    //----- Video -----
    .business-landing-video
        padding: 4rem
        // background-color: $mbh-white

    .business-landing-video__container
        text-align: center

    .bl-video__container
        display: flex
        justify-content: space-between
        flex-wrap: wrap

    .bl-video-card
        min-width: 250px
        background-color: $mbh-white
        width: 30%
        padding: 0
        margin-top: 1rem
        margin-bottom: 1rem

    .bl-video-content
        padding: 1rem

    .bl-video-image
        width: 100%

    @media only screen and (max-width: $screen-max)
        .bl-video-title
            font-size: large

    @media only screen and (max-width: 900px)
        .bl-video__container
            justify-content: space-around
        .bl-video-title
            font-size: large
        .bl-video-card
            width: 45%


    @media only screen and (max-width: 650px)
        .bl-video-card
            width: 100%
        .bl-video-title
            font-size: medium
        .bl-video-content p
            font-size: small

    //----- Logo -----
    .business-landing-support
        background-color: $mbh-white
        text-align: center
        padding: 2rem

    .bl-support__container
        padding: 1rem
        display: flex
        justify-content: space-evenly
        flex-wrap: wrap

    .bl-support__logo
        min-width: 250px
        margin: auto 0

    @media only screen and (max-width: $tablet-max)
        .bl-support__logo
            min-width: 150px
</style>