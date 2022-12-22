import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        // State for Logged in User
        loggedInUser: false, // Boolean for if a user is logged in
        accountType: null,   // String accountType: 'USER' or 'BUSINESS'
        accountId: null      // Int accountId
    },
    getters: {
        // State getters
        loggedInUser: state => state.loggedInUser,
        accountType: state =>state.accountType,
        accountId: state => state.accountId
    },
    actions: {
        // This action commits the setLoggedInUser mutation, updating the store state with the 'account' object passed through
        loginUser({commit}, account) {
            commit('setLoggedInUser', account)
        },

        // This action commits the removeLoggedInUser mutation
        logoutUser({ commit }) {
            commit('removeLoggedInUser')
        }
    },
    mutations: {
        // Set loggedInUser
        setLoggedInUser(state, account) {
            state.loggedInUser = true
            state.accountType = account.accountType
            state.accountId = account.accountId
        },
        
        // Remove account from loggedInUser state
        removeLoggedInUser(state) {
            state.loggedInUser = false
            state.accountType = null
            state.accountId = null
        }
    }
})