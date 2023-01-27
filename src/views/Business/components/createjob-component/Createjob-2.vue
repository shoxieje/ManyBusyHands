<template>
    <b-container class="container-job-ad">
        <b-form id="create-job-form2" class="text-primary">
            <!-- YOUR DETAILS -->
            <div class="create-job-box">
                <br />
                <h3 class="subtitle" style="margin-left: 0 !important">
                    Select an ad type
                </h3>
                <div class="ad-type-box__container">
                    <b-button
                        id="ad-basic"
                        variant="light"
                        :class="adBasicClass"
                        @click="selectBasic"
                    >
                        <div class="ad-style ad-type">Basic</div>
                        <div class="ad-style ad-price">$149.45</div>
                        <div class="ad-style ad-text sub">
                            Find great candidates with our basic ad
                        </div>
                        <b-button
                            id="ad-basic-btn"
                            :class="adBasicBtnClass"
                            variant="light"
                            @click="selectBasic"
                            >Select</b-button
                        >
                        <div class="ad-style ad-text point">
                            <ul>
                                <li>30 days listing</li>
                                <li>
                                    Your job ad emailed to relevant candidates
                                </li>
                            </ul>
                        </div>
                    </b-button>
                    <b-button
                        id="ad-premium"
                        variant="light"
                        :class="adPremiumClass"
                        @click="selectPremium"
                    >
                        <div class="ad-style ad-type">Premium</div>
                        <div class="ad-style ad-price">$249.95</div>
                        <div class="ad-style ad-text sub">
                            Attract more candidates with a featured listing!
                        </div>
                        <b-button
                            id="ad-premium-btn"
                            :class="adPremiumBtnClass"
                            variant="light"
                            @click="selectPremium"
                            >Select</b-button
                        >
                        <div class="ad-style ad-text point">
                            <ul>
                                <li>30 days listing</li>
                                <li>
                                    Your job ad emailed to relevant candidates
                                </li>
                                <li>Priority listing in search</li>
                                <li>Priority listing in candidate emails</li>
                                <li>Get candidates faster</li>
                            </ul>
                        </div>
                    </b-button>
                    <b-button
                        id="ad-ultra"
                        variant="light"
                        :class="adUltraClass"
                        @click="selectUltra"
                    >
                        <div class="ad-style ad-type">Ultra</div>
                        <div class="ad-style ad-price">$399.95</div>
                        <div class="ad-style ad-text sub">
                            Guaranteed to hire the best candidate!
                        </div>
                        <b-button
                            id="ad-ultra-btn"
                            :class="adUltraBtnClass"
                            variant="light"
                            @click="selectUltra"
                            >Select</b-button
                        >
                        <div class="ad-style ad-text point">
                            <ul>
                                <li>Guaranteed to hire the best candidate</li>
                                <li>
                                    Your job ad emailed to relevant candidates
                                </li>
                                <li>Priority listing in search</li>
                                <li>Priority listing in candidate emails</li>
                                <li>Get candidates faster</li>
                            </ul>
                        </div>
                    </b-button>
                </div>

                <br />
            </div>
        </b-form>
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            adType: "",
            adBasicClass: "ad-type-box",
            adBasicBtnClass: "ad-style ad-btn",
            adPremiumClass: "ad-type-box",
            adPremiumBtnClass: "ad-style ad-btn",
            adUltraClass: "ad-type-box",
            adUltraBtnClass: "ad-style ad-btn",
        };
    },
    props: ["type", "data"],
    components: {},
    methods: {
        emitAdType() {
            if (this.adType.length != 0) {
                this.$emit("adType", this.adType);
            }
        },
        selectBasic() {
            var basic = document.getElementById("ad-basic");
            var basicBtn = document.getElementById("ad-basic-btn");
            var premium = document.getElementById("ad-premium");
            var premiumBtn = document.getElementById("ad-premium-btn");
            var ultra = document.getElementById("ad-ultra");
            var ultraBtn = document.getElementById("ad-ultra-btn");
            basic.classList.add("selected");
            basicBtn.classList.add("selected");
            premium.classList.remove("selected");
            premiumBtn.classList.remove("selected");
            ultra.classList.remove("selected");
            ultraBtn.classList.remove("selected");
            this.adType = "basic";
            this.emitAdType();
        },
        selectPremium() {
            var basic = document.getElementById("ad-basic");
            var basicBtn = document.getElementById("ad-basic-btn");
            var premium = document.getElementById("ad-premium");
            var premiumBtn = document.getElementById("ad-premium-btn");
            var ultra = document.getElementById("ad-ultra");
            var ultraBtn = document.getElementById("ad-ultra-btn");
            basic.classList.remove("selected");
            basicBtn.classList.remove("selected");
            premium.classList.add("selected");
            premiumBtn.classList.add("selected");
            ultra.classList.remove("selected");
            ultraBtn.classList.remove("selected");
            this.adType = "premium";
            this.emitAdType();
        },
        selectUltra() {
            var basic = document.getElementById("ad-basic");
            var basicBtn = document.getElementById("ad-basic-btn");
            var premium = document.getElementById("ad-premium");
            var premiumBtn = document.getElementById("ad-premium-btn");
            var ultra = document.getElementById("ad-ultra");
            var ultraBtn = document.getElementById("ad-ultra-btn");
            basic.classList.remove("selected");
            basicBtn.classList.remove("selected");
            premium.classList.remove("selected");
            premiumBtn.classList.remove("selected");
            ultra.classList.add("selected");
            ultraBtn.classList.add("selected");
            this.adType = "ultra";
            this.emitAdType();
        },
        fillData() {
            if (this.type === "edit") {
                if (this.data.adType === "basic") {
                    this.adBasicClass += " selected";
                    this.adBasicBtnClass += " selected";
                }
                if (this.data.adType === "premium") {
                    this.adPremiumClass += " selected";
                    this.adPremiumBtnClass += " selected";
                }
                if (this.data.adType === "ultra") {
                    this.adUltraClass += " selected";
                    this.adUltraBtnClass += " selected";
                }
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
@import '../../../../assets/styles/custom-variables.sass'

.ad-style.ad-text.point
	margin-left: 1.5rem

.ad-type-box__container
	display: flex
	justify-content: space-between

.ad-type-box
	background-color: $mbh-white
	// background-color: pink
	width: 32%
	// min-height: 400px
	padding: 2.5rem 3%
	border-style: solid
	border-color: $mbh-gray-0
	border-width: 1px
	box-shadow: 1px 2px #888888
	display: flex
	flex-direction: column

.ad-style.ad-text.sub
	min-height: 75px

.ad-style
	font-weight: bold
	text-align: left
	margin: 0.5rem 0
	width: 100%

.ad-type
	font-size: large

.ad-price
	font-size: xx-large

.ad-btn
	// margin: 1rem 0
	font-size: large
	text-align: center
	border-style: solid
	border-color: $mbh-blue-2
	border-width: 3px

.ad-text
	font-size: medium
	font-weight: 300

.ad-type-box.selected
	background-color: $mbh-white-3
	border-color: $mbh-blue-1
	border-width: 3px

.ad-btn.selected
	background-color: $mbh-blue-2
	color: $mbh-white

@media only screen and (max-width: $tablet-max)
	.ad-type-box__container
		display: flex
		flex-wrap: wrap
	.ad-type-box
		width: 100%
		padding: 1rem 1.5rem
		// max-width: 300px !important
	.ad-style
		margin: 0.2rem 0
	.ad-style.ad-text.sub
		min-height: unset
	ul
		margin-left: 0
	li::marker
		display: none !important
	.ad-price
		font-size: x-large
	.ad-text
		font-size: small
	.ad-btn
		font-size: medium
		padding: 0
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
