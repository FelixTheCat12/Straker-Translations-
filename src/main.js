import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "@/plugins/axios";
import "@/plugins/config";

Vue.config.productionTip = false;

//BootStrap
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);

//Router
import { router } from "@/plugins/vue-router";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
