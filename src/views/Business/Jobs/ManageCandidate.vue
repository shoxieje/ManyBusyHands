<template>
    <div class="manage-candidate-top">
        <div class="manage-candidate-header mw-60">
            <h1 class="title">
                Candidates for {{ job_ad.title }} at
                {{ job_ad.suburb + " " + job_ad.postcode + " " + job_ad.state }}
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
import axios from "axios";
import CandidateCard from "../components/card__component/Candidate-card.vue";
import { mapGetters } from "vuex";

export default {
    name: "ManageCandidate",
    components: { CandidateCard },
    data() {
        return {
            job_ad: {},
            normalCandidates: [],
            favoriteCandidates: [],
        };
    },

    methods: {},

    computed: {
        ...mapGetters({
            activeJobList: "getActiveJobAd",
            inactiveJobList: "getInactiveJobAd",
            draftJobList: "getDraftJobAd",
        }),
    },

    async created() {
        this.$wait.start("loading data");
        let jobID = this.$route.params.id;

        // if state is loaded
        if (
            this.activeJobList.length !== 0 ||
            this.inactiveJobList.length !== 0
        ) {
            // check active ad
            for (let x of this.activeJobList) {
                if (x.random_url_job_id == jobID) this.job_ad = x;
            }

            // if candidate is not from active ad -> check inactive ad, cannot be draft

            if (Object.keys(this.job_ad).length === 0) {
                for (let y of this.inactiveJobList) {
                    if (y.random_url_job_id == jobID) this.job_ad = y;
                }
            }
        } else {
            // state is not loaded
            await axios
                .get(`http://localhost:8081/jobAd/getJobAdByUUID/${jobID}`)
                .then((result) => {
                    this.job_ad = result.data[0];
                });
        }

        await axios
            .get(`http://localhost:8081/candidate/${jobID}`)
            .then((result) => {
                for (const candidate of result.data) {
                    axios
                        .get(
                            `http://localhost:8081/jobSeekerUser/searchByEmail/${candidate.user_email}`
                        )
                        .then((result) => {
                            let x = result.data[0];

                            candidate.firstName = x.first_name;
                            candidate.lastName = x.last_name;
                            let yob = parseInt(x.dob.split("-")[0]);
                            candidate.age = new Date().getFullYear() - yob;
                            candidate.introduction = x.introduction;
                            candidate.phoneNumber = x.phone_number;

                            if (candidate.isFavorite == "YES") {
                                this.favoriteCandidates.push(candidate);
                            } else {
                                this.normalCandidates.push(candidate);
                            }
                        });
                }
            });

        this.$wait.end("loading data");
    },
};
</script>

<style lang="sass">
@import '../../../assets/styles/custom-variables.sass'
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
