import { ESLint } from "eslint";

const Config: ESLint.ConfigData = {
  plugins: ["@getluko/eslint-plugin-react-native"],
  rules: {
    // Warn and format testID prop to a lower-dash-case string
    "@getluko/react-native/lower-dash-case-test-id": 1,
    "@getluko/react-native/i18n-avoid-global-imports": 2,
  },
};

module.exports = Config;
