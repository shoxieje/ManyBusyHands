<template>
    <div class="manage-job-top">
        <h1 class="title">Manage your job ads</h1>
        <div class="job-preview__container">
            <div class="job-preview-button__container mw-60">
                <b-button
                    id="job-active-btn"
                    class="job-preview-btn selected"
                    variant="light"
                    @click="selectActive"
                    style="border-radius: 8px 0 0 0 !important"
                    >Active</b-button
                >
                <b-button
                    id="job-disable-btn"
                    class="job-preview-btn"
                    variant="light"
                    @click="selectDisable"
                    style="border-radius: 0 0 0 0 !important"
                    >Disable</b-button
                >
                <b-button
                    id="job-draft-btn"
                    class="job-preview-btn"
                    variant="light"
                    @click="selectDraft"
                    style="border-radius: 0 8px 0 0 !important"
                    >Draft</b-button
                >
            </div>
            <div class="manage-job-box mw-60">
                <div
                    v-if="showActiveJobList"
                    class="job-preview-card__container"
                >
                    <div v-for="(job, key) in activeJobList">
                        <JobCard :job="job" :key="key" type="active" />
                    </div>
                </div>
                <div
                    v-if="showDisableJobList"
                    class="job-preview-card__container"
                >
                    <div v-for="(job, key) in disabledJobList">
                        <JobCard :job="job" :key="key" type="disabled" />
                    </div>
                </div>
                <div
                    v-if="showDraftJobList"
                    class="job-preview-card__container"
                >
                    <div v-for="(job, key) in draftJobList">
                        <JobCard :job="job" :key="key" type="draft" />
                    </div>
                </div>
            </div>
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
            showActiveJobList: true,
            showDisableJobList: false,
            showDraftJobList: false,
        };
    },
    methods: {
        passMockData() {
            this.activeJobList = activeJobList;
            this.draftJobList = draftJobList;
            this.disabledJobList = disabledJobList;
        },
        selectActive() {
            var activeBtn = document.getElementById("job-active-btn");
            var disableBtn = document.getElementById("job-disable-btn");
            var draftBtn = document.getElementById("job-draft-btn");
            activeBtn.classList.add("selected");
            disableBtn.classList.remove("selected");
            draftBtn.classList.remove("selected");
            this.showActiveJobList = true;
            this.showDisableJobList = false;
            this.showDraftJobList = false;
        },
        selectDisable() {
            var activeBtn = document.getElementById("job-active-btn");
            var disableBtn = document.getElementById("job-disable-btn");
            var draftBtn = document.getElementById("job-draft-btn");
            activeBtn.classList.remove("selected");
            disableBtn.classList.add("selected");
            draftBtn.classList.remove("selected");
            this.showActiveJobList = false;
            this.showDisableJobList = true;
            this.showDraftJobList = false;
        },
        selectDraft() {
            var activeBtn = document.getElementById("job-active-btn");
            var disableBtn = document.getElementById("job-disable-btn");
            var draftBtn = document.getElementById("job-draft-btn");
            activeBtn.classList.remove("selected");
            disableBtn.classList.remove("selected");
            draftBtn.classList.add("selected");
            this.showActiveJobList = false;
            this.showDisableJobList = false;
            this.showDraftJobList = true;
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
.job-preview-button__container
    text-align: left
.job-preview-btn
    font-size: x-large
    min-width: 150px
    border-color: $mbh-gray-0
    border-style: solid
    border-width: 1px
    border-radius: 10px
.job-preview-btn.selected
    background-color: $mbh-blue-2
    color: $mbh-white
.manage-job-box
    background-color: $mbh-white-2
    padding: 1rem
    border-color: $mbh-gray-0
    border-style: solid
    border-width: 1px
    border-radius: 10px
@media only screen and (max-width: $laptop-max)
    .b-tab-title
        font-size: medium !important
    .job-preview-btn
        font-size: large
        min-width: 120px
@media only screen and (max-width: $tablet-max)
    .job-preview-btn
        font-size: medium
        min-width: 100px
@media only screen and (max-width: $mobile-max)
    .job-preview-btn
        font-size: medium
        min-width: 80px
    .title
        font-size: x-large
</style>
