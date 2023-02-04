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
import vuetify from "@/plugins/vuetify";
import VueLazyload from "vue-lazyload";
import VueToastify from "vue-toastify";
import VueCarousel from "vue-carousel";
import VueWait from "vue-wait"

Vue.use(VueLazyload); //For vue-upload-multiple-image
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueAxios, axios);
Vue.use(vueCountryRegionSelect);
Vue.use(VueToastify);
Vue.use(VueCarousel);
Vue.use(VueWait)


new Vue({
    router,
    store,
    vuetify,
    wait: new VueWait(),
    render: (h) => h(App),
}).$mount("#app");
