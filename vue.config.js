const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // 和定位错误有关，不同的配置，定位错误的详细程度
    devtool: "inline-source-map",
  },
});
