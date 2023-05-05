<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div style="padding: 0 10px">
    <span>{{ cellValue }}</span>
  </div>
</template>

<script>
export default {
  props: {
    cellValue: {
      default: "",
    },
  },
};
</script>

<style></style>
