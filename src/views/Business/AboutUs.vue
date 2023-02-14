<template>
    <div class="about-us-top">
        <div class="about-us-title__container">
            <h1 class="about-us-title mw-80">About ManyBusyHands</h1>
        </div>

        <div class="about-us__container mw-80">
            <h2 class="about-us-subtitle">About Us</h2>
            <div class="bottom-border-1"></div>
            <br />
            <p>
                As a job seeker - whether a Grey Nomad, an Australian checking
                out their country, a guest in our country as a working
                holidaymaker (backpacker) or as an international student
                travelling across regional Australia - there is an enormous
                variety of work for you to experience, from which you will
                gather fantastic memories and gain lifelong skills.
            </p>
            <p>
                The variety of work available to you through ManyBusyHands runs
                across a spectrum ranging from aquaculture, whether it is pearls
                off the northwest coast, riverine oysters in New South Wales,
                salmon farms in Tasmania, land-based fish farms producing iconic
                native fish, Barramundi or Murray Cod, to Zoos and our wildlife
                conservation. Assisting people and their businesses still
                recovering from the terrible bushfires and now floods.
            </p>
            <p>
                If your work is harvesting vegetables, picking fruit, carting
                grain, working with livestock, it is all part of the amazing
                mosaic of Australian agriculture. You will be playing an
                important part in the production system to produce quality food
                and fibre used to make the clothes you wear, as well as the
                wholesome, nutritious, delicious food you eat.
            </p>
            <p>
                As much of our production is exported to many parts of the
                world, know that your work will be appreciated and those you
                work for will appreciate you and be thankful for your efforts.
            </p>
            <p>
                As you travel across regional Australia, you will meet and work
                with some amazing people. Our hope is that you make some
                lifelong Australian friends. Take time from work to rest and
                relax.
            </p>
            <p>
                When you return home, you will have our thanks for your
                contribution to our regional economy. When you walk the
                supermarket aisles in your hometown, seek out and buy quality
                Australian produce.
            </p>
            <img
                class="about-us-hero"
                src="@/assets/img/icons/Geoff-Quinn.jpeg"
                alt="Geoff Quinn hero"
            />
        </div>
        <div class="about-us__container mw-80">
            <h2 class="about-us-subtitle">Our Mission</h2>
            <div class="bottom-border-1"></div>
            <br />
            <p>
                ManyBusyHands’ aim is to help rural and regional businesses, to
                improve their supply chain efficiency. To highlight their
                excellence.
            </p>
            <p>
                Improve the flow of casual seasonal workers to rural and
                regional workplaces across Australia so we get the right workers
                in the right place at the right time.
            </p>
            <p>
                Greater workplace efficiency facilitates producers and
                businesses to get their produce, products and services to market
                and our exports to the world. Greater efficiency ensures people
                live affordably.
            </p>
            <p>
                Assist Jobseekers to use either their existing skills or to
                develop new lifelong skills. To find safe, well-rewarded work
                free from harassment. This benefits everyone and creates
                harmony.
            </p>
            <p>
                Importantly, for young guests to see and to experience, as you
                work and travel, the very best that we as rural and regional
                Australians have to offer. Make lifelong Australian bush
                friendships.
            </p>
            <img
                class="about-us-hero"
                src="@/assets/img/icons/Video-1.jpg"
                alt="Our mission hero"
            />
            <p></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutUs",
    props: ["", ""],
    components: {},
    computed: {},
    data() {
        return {
            page: 1,
        };
    },
    methods: {
        passMockData() {},
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
.about-us-title__container
    background-color: $blue-mbh-0
.about-us-title
    color: white
    padding: 2rem 0
    text-align: center
    margin: 0 auto
.about-us-subtitle
    font-size: xx-large
    text-align: left
p
    font-size: large
    text-align: justify
.about-us-top
    text-align: center
    background-color: $mbh-white-2
.about-us__container
    margin: 0 auto
    padding: 2rem
    background-color: $mbh-white
.about-us-hero
    width: 60%
    margin: 2rem
@media only screen and (max-width: $tablet-max)
    p
        font-size: medium
    .about-us-hero
        width: 100%
        margin: 0
@media only screen and (max-width: $mobile-max)
    .about-us-title
        font-size: x-large
</style>
