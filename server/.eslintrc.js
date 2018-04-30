module.exports = {
  rules: {
    "no-console": "off",
    quotes: [1, "single"],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "ignore"
      }
    ]
  },
  extends: "google",
  parserOptions: {
    ecmaVersion: 6
  }
};
