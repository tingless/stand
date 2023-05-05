import Vue from "vue";
import vElInputVue from "./v-el-input.vue";
import vSpan from "./v-span.vue";

let VElInputVue = Vue.extend(vElInputVue);
let VSpan = Vue.extend(vSpan);

export default {
  VElInputVue,
  VSpan,
};
