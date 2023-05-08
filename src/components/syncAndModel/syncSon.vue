<template>
  <div>
    <p>{{ num }}</p>
    <el-button @click="changeNum">changeNum</el-button>
  </div>
</template>

<script>
export default {
  name: "SyncSon",
  props: {
    num: {
      default: 0,
    },
  },
  methods: {
    changeNum() {
      // 如果直接改的话，eslint会报错并且系统也会报错
      // eslint-disable-next-line vue/no-mutating-props
      // this.num = 5;
      // 这种写法才是正确的，相当于vue给我们处理了改变父组件属性的操作
      // https://juejin.cn/post/6883081839507046408
      this.$emit("update:num", 5);
    },
  },
};
</script>

<style></style>
