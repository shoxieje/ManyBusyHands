<template>
    <div class="manage-job-top">
        <div class="manage-job-box mw-60" style="background-color: white">
            <b-card no-body>
                <b-tabs align="left">
                    <b-tab active>
                        <template #title
                            ><span class="b-tab-title">Active</span></template
                        >
                        <div class="job-preview-card__container">
                            <div v-for="(job, key) in activeJobList">
                                <JobCard :job="job" :key="key" type="active" />
                            </div>
                        </div>
                    </b-tab>
                    <b-tab active>
                        <template #title
                            ><span class="b-tab-title">Disabled</span></template
                        >
                        <div class="job-preview-card__container">
                            <div v-for="(job, key) in disabledJobList">
                                <JobCard
                                    :job="job"
                                    :key="key"
                                    type="disabled"
                                />
                            </div>
                        </div>
                    </b-tab>
                    <b-tab active>
                        <template #title
                            ><span class="b-tab-title">Draft</span></template
                        >
                        <div class="job-preview-card__container">
                            <div v-for="(job, key) in draftJobList">
                                <JobCard :job="job" :key="key" type="draft" />
                            </div></div
                    ></b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>
<script>
import { config } from "../../utils/constant";
import JobCard from "./components/Job-card.vue";
const activeJobList = config.mockData.activeJoblist;
const draftJobList = config.mockData.draftJoblist;
const disabledJobList = config.mockData.disabledJoblist;
export default {
    components: { JobCard },
    data() {
        return {
            activeJobList: [],
            draftJobList: [],
            disabledJobList: [],
        };
    },
    methods: {
        passMockData() {
            this.activeJobList = activeJobList;
            this.draftJobList = draftJobList;
            this.disabledJobList = disabledJobList;
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
.manage-job-top
    text-align: center
    padding: 2rem 0
// .nav-item
//     margin: unset
//     padding: 0
//     width: 15%
.job-preview-card__container
    background-color: $mbh-white-2
    padding: 1rem
@media only screen and (max-width: $laptop-max)
    // .nav-item
        // width: 33%
    .b-tab-title
        font-size: medium !important
    // .nav-link
    //     padding: 0.25rem
@media only screen and (max-width: $mobile-max)
    // .nav-link
    //     padding: 0
</style>
