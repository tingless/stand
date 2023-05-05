import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExtendInputEditor from "../views/ExtendInputEditor.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children:[
      {
        path: 'extend',
        component: ExtendInputEditor
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 解决重复路由报错的提示
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function(to){
  return VueRouterPush.call(this, to).catch(err=> err)
}

export default router;
