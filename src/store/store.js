import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    
    state: {
        isUserLoggingIn: false,
        user: {},
        activity: []
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
        }
    },
    actions: {
        // This action commits the setLoggedInUser mutation, updating the store state with the 'account' object passed through
        authUserLoggingIn({commit}, value) {
            commit("SET_USER_LOGGING_IN", value)
        },

        setUserData({commit}, userEmail) {
            axios.get(`http://localhost:8081/businessUser/searchByEmail/${userEmail}`).then(
                result => {
                    console.log(result.data[0])
                    commit("SET_USER_DATA", result.data[0])
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
        }
    },

    getters: {
        userLogging: (state) => {
            return state.isUserLoggingIn
        },
        getUserData: (state) => {
            return state.user
        },
        getActivityData: (state) => {
            return state.activity
        }
    }
})