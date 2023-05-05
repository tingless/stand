<template>
  <div>
    <!-- https://juejin.cn/post/7108542695387168799 -->
    <!-- 还可以增加校验功能 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      @cell-dblclick="handleDblclick"
    >
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import extendComponent from "@/components/extend/index";

export default {
  name: "ExtendInputEditor",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      tempValue: "",
    };
  },
  methods: {
    // eslint-disable-next-line max-params
    handleDblclick(row, column, cell, event) {
      // console.dir(cell);
      // console.log("row, column, cell, event", row, column, cell, event);
      let cellValue = row[column.property];
      this.tempValue = cellValue;
      new extendComponent.VElInputVue({
        propsData: {
          cellValue: cellValue,
          cell: cell,
          row: row,
          column: column,
          blurCallback: this.blurCallback,
        },
      }).$mount(cell.children[0]);
    },
    blurCallback({ cellValue, row, column, cell }) {
      console.log("cellValue", cell);
      if (this.tempValue !== cellValue) {
        // 说明已经修改了值
        row[column.property] = cellValue;
        // 像后端发起请求修改并重新接受
      }
      // 替换span
      new extendComponent.VSpan({
        propsData: {
          cellValue: cellValue,
        },
      }).$mount(cell.children[0]);
    },
  },
};
</script>

<style></style>
