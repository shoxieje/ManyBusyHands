<template>
    <div class="manage-candidate-top text-primary">
        <div class="manage-candidate-header mw-60">
            <h1 class="title">
                Candidates for {{ job.jobTitle }} at {{ job.location }}
            </h1>
            <div class="subtitle">
                Review and manage your candidate applications
            </div>
        </div>
        <div class="bottom-border"></div>
        <div class="manage-candidate-container mw-60">
            <div
                class="candidate-container"
                v-for="(candidate, key) in favoriteCandidates"
                :key="key"
            >
                <CandidateCard
                    :number="key"
                    :candidate="candidate"
                    type="favorite"
                />
            </div>
            <div
                class="candidate-container"
                v-for="(candidate, key) in normalCandidates"
                :key="key + 100"
            >
                <CandidateCard
                    :number="key + 100"
                    :candidate="candidate"
                    type="normal"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { config } from "../../utils/constant";
import CandidateCard from "./components/Candidate-card.vue";
const job = config.mockData.activeJoblist[0];
const favoriteCandidates = job.candidates.favorite;
const normalCandidates = job.candidates.normal;
export default {
    name: "ManageCandidate",
    components: { CandidateCard },
    data() {
        return {
            showBottomBar: false,
            favorite: false,
        };
    },
    methods: {
        passMockData() {
            this.job = job;
            this.favoriteCandidates = favoriteCandidates;
            this.normalCandidates = normalCandidates;
        },
        toggleBar() {
            this.showBottomBar = !this.showBottomBar;
            var arrowBtn = document.getElementById("btn-arrow");
            this.showBottomBar
                ? arrowBtn.classList.add("rotated")
                : arrowBtn.classList.remove("rotated");
        },
        toggleFavorite() {
            this.favorite = !this.favorite;
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
.subtitle
    font-size: x-large

.manage-candidate-top
    margin-inline: auto

.manage-candidate-header
    padding: 1rem

.manage-candidate-container
    padding: 0 1rem

.candidate-container



@media only screen and (max-width: $tablet-max)
    .title
        font-size: x-large
        padding-bottom: 0
    .subtitle
        font-size: large !important
@media only screen and (max-width: $mobile-max)
    .title
        font-size: large
    .subtitle
        font-size: medium !important
</style>
