<template>
  <div>
    <p>{{ noValue }}</p>
    <el-button @click="changeNum">changeNum</el-button>
  </div>
</template>

<script>
export default {
  name: "ModelSon",
  model: {
    prop: "noValue", // 绑定的值，通过父组件传递
    event: "noUpdate", // 自定义时间名
  },
  props: {
    noValue: {
      default: 0,
    },
  },
  methods: {
    changeNum() {
      // 如果直接改的话，eslint会报错并且系统也会报错
      // eslint-disable-next-line vue/no-mutating-props
      // this.num = 5;
      // https://juejin.cn/post/6844903607318511630
      // 相当于sync的另一种写法
      // this.$emit("input", 66);
      // 可以改变子组件接受的value名称和emit的事件名
      this.$emit("noUpdate", 66);
    },
  },
};
</script>

<style></style>
