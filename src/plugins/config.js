import Vue from "vue";

export const config = Object.freeze({
  baseApiUrl: "https://jsonplaceholder.typicode.com"
});

Vue.$config = config;
Vue.prototype.$config = config;
