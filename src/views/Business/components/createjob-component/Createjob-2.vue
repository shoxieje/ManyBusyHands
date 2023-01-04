<template>
    <b-container class="container-job-ad">
        <b-form id="create-job-form2" class="text-primary">
            <!-- YOUR DETAILS -->
            <div class="create-job-box">
                <br />
                <h3 class="subtitle">Select an ad type</h3>
                <div class="ad-type-box__container">
                    <b-button
                        id="ad-basic"
                        variant="light"
                        class="ad-type-box"
                        @click="selectBasic"
                    >
                        <div class="ad-style ad-type">Basic</div>
                        <div class="ad-style ad-price">$149.45</div>
                        <div class="ad-style ad-text">
                            Find great candidates with our basic ad
                        </div>
                        <b-button
                            id="ad-basic-btn"
                            class="ad-style ad-btn"
                            variant="light"
                            >Select</b-button
                        >
                        <div class="ad-style ad-text">
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
                        class="ad-type-box"
                        @click="selectPremium"
                    >
                        <div class="ad-style ad-type">Premium</div>
                        <div class="ad-style ad-price">$249.95</div>
                        <div
                            class="ad-style ad-text text-red"
                            style="font-weight: bold"
                        >
                            Attract more candidates with a featured listing!
                        </div>
                        <b-button
                            id="ad-premium-btn"
                            class="ad-style ad-btn"
                            variant="light"
                            >Select</b-button
                        >
                        <div class="ad-style ad-text">
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
                </div>
                <br />
            </div>
        </b-form>
    </b-container>
</template>
<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import Multiselect from "vue-multiselect";

export default {
    data() {
        return {
            adType: "",
        };
    },
    components: {
        VueGoogleAutocomplete,
        Multiselect,
    },
    methods: {
        selectBasic() {
            var basic = document.getElementById("ad-basic");
            var basicBtn = document.getElementById("ad-basic-btn");
            var premium = document.getElementById("ad-premium");
            var premiumBtn = document.getElementById("ad-premium-btn");
            basic.classList.add("selected");
            basicBtn.classList.add("selected");
            premium.classList.remove("selected");
            premiumBtn.classList.remove("selected");
        },
        selectPremium() {
            var basic = document.getElementById("ad-basic");
            var basicBtn = document.getElementById("ad-basic-btn");
            var premium = document.getElementById("ad-premium");
            var premiumBtn = document.getElementById("ad-premium-btn");
            basic.classList.remove("selected");
            basicBtn.classList.remove("selected");
            premium.classList.add("selected");
            premiumBtn.classList.add("selected");
        },
    },
};
</script>
<style lang="sass">
@import '../../../../assets/styles/custom-variables.sass'

ul
	margin-left: 1.5rem

.ad-type-box__container
	display: flex
	justify-content: space-between

.ad-type-box
	background-color: $mbh-white-2
	// background-color: pink
	width: 42%
	// min-height: 400px
	padding: 2.5rem 5%
	border-style: solid
	border-color: $mbh-gray-0
	border-width: 1px
	box-shadow: 1px 2px #888888
	display: flex
	flex-direction: column


.ad-style
	font-weight: bold
	text-align: left
	margin: 0.5rem 0
	width: 100%
.ad-type
	font-size: 1.2rem
.ad-price
	font-size: 2rem
.ad-btn
	margin: 1rem 0
	font-size: 1.2rem
	text-align: center
	border-style: solid
	border-color: $mbh-blue-2
	border-width: 0.5px


.ad-text
	font-size: 1rem
	font-weight: 300


.ad-type-box.selected
	background-color: $mbh-orange-1

.ad-btn.selected
	background-color: $mbh-blue-2
	color: $mbh-white
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
