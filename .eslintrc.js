module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    "linebreak-style": 0,
    // Conflict with prettier
    "arrow-body-style": ["error", "as-needed"],
    "object-curly-newline": 0,
    "implicit-arrow-linebreak": 0,
    "operator-linebreak": 0,
    "no-trailing-spaces": "warn",
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "no-unused-vars": "error",
    "no-underscore-dangle": 0,
    "no-shadow": "off",
    "import/extensions": ["error", "never"],
    "import/order": 0,
    "eslint-comments/no-unlimited-disable": "off"
  }
};
