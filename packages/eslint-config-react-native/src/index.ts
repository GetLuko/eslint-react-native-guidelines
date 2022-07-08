import { ESLint } from "eslint";

const Config: ESLint.ConfigData = {
  extends: [
    "./rules/default",
    "./rules/detox",
    "./rules/getluko",
    "./rules/prettier",
    "./rules/react-hooks",
    "./rules/react-native",
    "./rules/react",
    "./rules/typescript",
  ],
  rules: {},
};

module.exports = Config;
