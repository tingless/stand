<template>
  <div>
    <el-button @click="jumpToExtend">
      巧妙使用Vue.extend继承组件实现el-table双击可编辑（不使用v-if和v-else）
    </el-button>
    <el-button @click="show"> 仿写element的全局loading功能 </el-button>
    <!-- v-model和sync的写法 -->
    <div><syncSonVue :num.sync="fatherNum" /></div>
    <div><modelSonVue v-model="fatherNum" /></div>
    <router-view />
  </div>
</template>

<script>
import syncSonVue from "@/components/syncAndModel/syncSon.vue";
import modelSonVue from "@/components/syncAndModel/modelSon.vue";

export default {
  name: "HomeView",
  components: {
    syncSonVue,
    modelSonVue,
  },
  data() {
    return {
      fatherNum: 12,
    };
  },
  methods: {
    jumpToExtend() {
      this.$router.push({ path: "extend" });
    },
    show() {
      this.$showDialog({
        text: "浏览器在加载中哇...",
      });
      // 模拟发请求，过了1.5秒钟再将其关闭
      setTimeout(() => {
        this.$hideDialog();
      }, 1500);
    },
  },
};
</script>
