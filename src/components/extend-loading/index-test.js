// import Vue from "vue";

// import loadingVue from "./v-loading.vue";

// const WaitLoadingCom = Vue.extend(loadingVue);
// const loadingVueCom = new WaitLoadingCom().$mount();

// function showDialog(options) {
//   loadingVueCom.showLoading = true;
//   let arr = Object.keys(options);
//   arr.map((key) => {
//     // eslint-disable-next-line no-return-assign
//     return (loadingVueCom[key] = options[key]);
//   });
//   document.body.appendChild(loadingVueCom.$el);
// }

// function closeDialog() {
//   loadingVueCom.showLoading = false;
// }

// Vue.prototype.$showDialog = showDialog;
// Vue.prototype.$closeDialog = closeDialog;
