module.exports = {
  rules: {
    "no-console": "off",
    "max-len": 0,
    "require-jsdoc": 0,

    quotes: [1, "single"],
    "object-curly-spacing": 0,
    "arrow-parens": 0,
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
    ecmaVersion: 2017
  }
};
