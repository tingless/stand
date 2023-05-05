module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:vue/essential",
    "eslint:recommended",
    "alloy",
    "alloy/vue",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/component-tags-order": [
      "error",
      {
        order: [["script", "template"], "style"],
      },
    ],
  },
};
