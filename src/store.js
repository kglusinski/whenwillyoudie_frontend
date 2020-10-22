import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex)

export default new vuex.Store({
    state: {
        loggedIn : false,
        token: null
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            state.loggedIn = true;
        },
        logout(state) {
            state.loggedIn = false;
        }
    }
})
