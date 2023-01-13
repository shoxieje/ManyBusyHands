<template>
    <div class="manage-job-top">
        <h1 class="title">Manage your job ads</h1>
        <div class="manage-job-box mw-60" style="background-color: white">
            <b-card no-body>
                <b-tabs>
                    <b-tab>
                        <template #title
                            ><span class="b-tab-title">Active</span></template
                        >
                        <div class="job-preview-card__container">
                            <div v-for="(job, key) in activeJobList">
                                <JobCard :job="job" :key="key" type="active" />
                            </div>
                        </div>
                    </b-tab>
                    <b-tab>
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
                    <b-tab>
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
.job-preview-card__container
    background-color: $mbh-white-2
    padding: 1rem
@media only screen and (max-width: $laptop-max)
    .b-tab-title
        font-size: medium !important
</style>
