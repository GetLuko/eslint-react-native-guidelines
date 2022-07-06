import { ESLint } from 'eslint';

const Config: ESLint.ConfigData = {
  plugins: ['@getluko/eslint-plugin-react-native-guidelines'],
  rules: {
    // Warn and format testID prop to a lower-dash-case string
    '@getluko/mobile-guidelines/lower-dash-case-test-id': 1,
  },
};

module.exports = Config;
