<template>
  <div>
    <el-button @click="jumpToExtend">
      巧妙使用Vue.extend继承组件实现el-table双击可编辑（不使用v-if和v-else）
    </el-button>
    <el-button @click="show"></el-button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {};
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
