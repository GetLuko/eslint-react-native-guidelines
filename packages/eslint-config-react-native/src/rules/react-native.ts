import { ESLint } from 'eslint';

const Config: ESLint.ConfigData = {
  plugins: ['react-native'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // Detects unused style objects
    'react-native/no-unused-styles': 2,
    // Detects inline style objects when they contain literal values
    'react-native/no-inline-styles': 1,
  },
};

module.exports = Config;
