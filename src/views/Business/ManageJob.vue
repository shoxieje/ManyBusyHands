<template>
    <div class="manage-job-top">
        <h1 class="title">Manage your job ads</h1>
        <div class="job-preview__container mw-60">
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
                    id="job-inactive-btn"
                    class="job-preview-btn"
                    variant="light"
                    @click="selectInactive"
                    style="border-radius: 0 0 0 0 !important"
                    >Inactive</b-button
                >
                <b-button
                    id="job-draft-btn"
                    class="job-preview-btn"
                    variant="light"
                    @click="selectDraft"
                    style="border-radius: 0 8px 0 0 !important"
                    >Draft</b-button
                >
                <div class="search-bar__container">
                    <b-form-input
                        class="search-bar"
                        id="search"
                        type="text"
                        placeholder="Search.."
                        v-model="search"
                    ></b-form-input>
                    <img
                        src="@/assets/img/icons/magnifying-glass-icon.png"
                        class="search-bar-icon"
                    />
                </div>
            </div>
            <div class="manage-job-box mw-60">
                <div
                    v-if="showActiveJobList"
                    class="job-preview-card__container"
                >
                    <div v-for="(job, key) in activeJobList">
                        <JobCard :job="job" :number="key" type="active" />
                    </div>
                </div>
                <div
                    v-if="showInactiveJobList"
                    class="job-preview-card__container"
                >
                    <div v-for="(job, key) in inactiveJobList">
                        <JobCard :job="job" :number="key" type="inactive" />
                    </div>
                </div>
                <div
                    v-if="showDraftJobList"
                    class="job-preview-card__container"
                >
                    <div v-for="(job, key) in draftJobList">
                        <JobCard :job="job" :number="key" type="draft" />
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
const inactiveJobList = config.mockData.inactiveJoblist;
export default {
    name: "ManageJob",
    components: { JobCard },
    data() {
        return {
            search: "",
            showActiveJobList: true,
            showInactiveJobList: false,
            showDraftJobList: false,
        };
    },
    methods: {
        passMockData() {
            this.activeJobList = activeJobList;
            this.draftJobList = draftJobList;
            this.inactiveJobList = inactiveJobList;
        },
        selectActive() {
            var activeBtn = document.getElementById("job-active-btn");
            var inactiveBtn = document.getElementById("job-inactive-btn");
            var draftBtn = document.getElementById("job-draft-btn");
            activeBtn.classList.add("selected");
            inactiveBtn.classList.remove("selected");
            draftBtn.classList.remove("selected");
            this.showActiveJobList = true;
            this.showInactiveJobList = false;
            this.showDraftJobList = false;
        },
        selectInactive() {
            var activeBtn = document.getElementById("job-active-btn");
            var inactiveBtn = document.getElementById("job-inactive-btn");
            var draftBtn = document.getElementById("job-draft-btn");
            activeBtn.classList.remove("selected");
            inactiveBtn.classList.add("selected");
            draftBtn.classList.remove("selected");
            this.showActiveJobList = false;
            this.showInactiveJobList = true;
            this.showDraftJobList = false;
        },
        selectDraft() {
            var activeBtn = document.getElementById("job-active-btn");
            var inactiveBtn = document.getElementById("job-inactive-btn");
            var draftBtn = document.getElementById("job-draft-btn");
            activeBtn.classList.remove("selected");
            inactiveBtn.classList.remove("selected");
            draftBtn.classList.add("selected");
            this.showActiveJobList = false;
            this.showInactiveJobList = false;
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

.manage-job-box
    background-color: $mbh-white-2
    padding: 1rem
    border-color: $mbh-gray-0
    border-style: solid none none none
    border-width: 1px
    border-radius: 0 0 10px 10px

.job-preview-card__container
    background-color: $mbh-white-2
    padding: 1rem

.job-preview__container
    border-radius: 8px 8px 0 0
    border-color: #b7b9be
    border-style: solid
    border-width: 1px
    border-radius: 10px

.job-preview-button__container
    display: flex

.search-bar__container
    width: 55%
    display: flex
    align-items: center
    justify-content: right

.search-bar
    width: 85%
    margin: 5px 15px

.search-bar-icon
    width: 20px
    height: 20px
    margin-right: 15px

.job-preview-btn
    font-size: x-large
    width: 15%
    border-color: $mbh-gray-0
    border-style: solid
    border-width: 1px
    border-radius: 10px
.job-preview-btn.selected
    background-color: $mbh-blue-2
    color: $mbh-white
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
    .search-bar__container
        display: none
    .job-preview-btn
        font-size: medium
        min-width: 80px
    .title
        font-size: x-large
</style>
