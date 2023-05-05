<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div style="padding: 0 10px">
    <el-input ref="inputRef" v-model="cellValue" @blur="handleBlur"></el-input>
  </div>
</template>

<script>
export default {
  props: {
    cellValue: {
      default: "",
    },
    cell: {},
    row: {},
    column: {},
    blurCallback: {
      type: Function,
    },
  },
  mounted() {
    this.$refs.inputRef.focus();
  },
  methods: {
    handleBlur() {
      this.blurCallback({
        cellValue: this.cellValue,
        cell: this.cell,
        row: this.row,
        column: this.column,
      });
    },
  },
};
</script>

<style></style>
