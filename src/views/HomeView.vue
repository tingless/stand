<template>
  <div>
    <el-button @click="jumpToExtend">
      巧妙使用Vue.extend继承组件实现el-table双击可编辑（不使用v-if和v-else）
    </el-button>
     <router-view />
  </div>
</template>

<script>

export default {
  name: "home-view",
  data() {
    return {
    }
  },
  methods:{
    jumpToExtend(){
      this.$router.push({ path: 'extend'})
    }
  }
};
</script>
