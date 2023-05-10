import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 注册loading组件
import "./components/extend-loading/index";

// 基本数组的用法
// import "./utils/base";
// 对数组的一些高级处理方法
// import "./utils/advancedArray";
// 对象的一些高级处理方法
// import "./utils/advancedObject.js";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
