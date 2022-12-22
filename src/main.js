import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store/store.js";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "./assets/styles/styles.sass";
import vueCountryRegionSelect from "vue-country-region-select";
import vuetify from '@/plugins/vuetify'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueAxios, axios);
Vue.use(vueCountryRegionSelect);


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");
