module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "comma-dangle": "off",
    "import/no-unresolved": "off",
    "no-console": "off",
    "no-plusplus": "off",
    "react/no-danger": "off",
    "arrow-body-style": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/jsx-no-bind": "off",
    "no-nested-ternary": "off",
    "react/destructuring-assignment": "off",
    "react/react-in-jsx-scope": "off", // Disable the rule
  },
};
