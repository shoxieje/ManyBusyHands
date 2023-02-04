import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { config } from "../utils/constant"

Vue.use(Vuex)

export default new Vuex.Store({
    
    state: {
        isUserLoggingIn: false,
        user: {},
        activity: [],
        // retrieve job ad in the preload
        active_job_ad: [],
        inactive_job_ad: [],
        draft_job_ad: [],
        // retrieve postcodes
        postcode: []

    },
    mutations: {
        SET_USER_LOGGING_IN(state, x) {
            state.isUserLoggingIn = x
        },
        SET_USER_DATA(state, x) {
            state.user = x
        },
        SET_ACTIVITY_DATA(state, x) {
            state.activity = x
        },
        SET_POSTCODE_DATA(state, x) {
            state.postcode = x
        },
        SET_ACTIVE_JOB_AD(state, x) {
            state.active_job_ad = x
        },
        SET_INACTIVE_JOB_AD(state, x) {
            state.inactive_job_ad = x
        },
        SET_DRAFT_JOB_AD(state, x) {
            state.draft_job_ad = x
        }

    },
    actions: {
        // This action commits the setLoggedInUser mutation, updating the store state with the 'account' object passed through
        authUserLoggingIn({commit}, value) {
            commit("SET_USER_LOGGING_IN", value)
        },

        setUserData({commit}, userEmail) {
            return axios.get(`http://localhost:8081/businessUser/searchByEmail/${userEmail}`).then(
                result => {
                    commit("SET_USER_DATA", result.data[0]);
                    commit("SET_USER_LOGGING_IN", true);
                }
            )
        },

        setActivityData({commit}) {
            axios.get(`http://localhost:8081/activity`).then(
                result => {

                    let activityName = [];
                    for(let x of result.data) {
                        activityName.push(x.activity_name)
                    }

                    activityName.shift();

                    commit("SET_ACTIVITY_DATA", activityName)
                }
            )
        },

        setPostcodesData({commit}) {

            axios.get(`http://localhost:8081/postcode`).then(

                result => {

                    let temp_postcode = []
                    for(let x of result.data) {
                        temp_postcode.push(x)
                    }

                    commit("SET_POSTCODE_DATA", temp_postcode)
                }
            )

        },

        async setActiveJobAd({commit}) {

            await axios.get(`http://localhost:8081/jobAd/getJobAdByType/ACTIVE/${this.state.user.user_email}`).then(

                result => {
                    
                    let temp_active_job_ad = []
                    for(let x of result.data) {
                        temp_active_job_ad.push(x)
                    }

                    commit("SET_ACTIVE_JOB_AD", temp_active_job_ad)

                    return result.data
                }
            )

        },

        setInactiveJobAd({commit}) {

            return axios.get(`http://localhost:8081/jobAd/getJobAdByType/INACTIVE/${this.state.user.user_email}`).then(

                result => {

                    let temp_inactive_job_ad = []
                    for(let x of result.data) {
                        temp_inactive_job_ad.push(x)
                    }

                    commit("SET_INACTIVE_JOB_AD", temp_inactive_job_ad)
                }
            )

        },

        setDraftJobAd({commit}) {

            return axios.get(`http://localhost:8081/jobAd/getJobAdByType/DRAFT/${this.state.user.user_email}`).then(

                result => {

                    let temp_draft_job_ad = []
                    for(let x of result.data) {
                        temp_draft_job_ad.push(x)
                    }

                    commit("SET_DRAFT_JOB_AD", temp_draft_job_ad)
                }
            )

        },

        clearUserData({commit}) {

            commit("SET_USER_LOGGING_IN", false);
            commit("SET_USER_DATA", {});
            commit("SET_ACTIVE_JOB_AD", []);
            commit("SET_INACTIVE_JOB_AD", []);
            commit("SET_DRAFT_JOB_AD", []);

        },
    },

    getters: {
        authUser: (state) => {
            return state.isUserLoggingIn
        },
        getUserData: (state) => {
            return state.user
        },
        getActivityData: (state) => {
            return state.activity
        },
        getPostcodeData: (state) => {
            return state.postcode
        },
        getActiveJobAd: (state) => {
            return state.active_job_ad
        },
        getInactiveJobAd: (state) => {
            return state.inactive_job_ad
        },
        getDraftJobAd: (state) => {
            return state.draft_job_ad
        },
        
    }
})