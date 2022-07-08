import { ESLint } from 'eslint';

const Config: ESLint.ConfigData = {
  rules: {
    // Disable prettier/eslint conflict
    'prettier/prettier': 0,
  },
};

module.exports = Config;
