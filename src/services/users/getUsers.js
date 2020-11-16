import Vue from "vue";

const apiBaseUrl = Vue.$config.baseApiUrl;

export default () => {
  let url = `${apiBaseUrl}/users`;

  // let config = {
  //   headers: {},
  //   params: {}
  // };

  return Vue.$http.get(url);
};
