import { ESLint } from 'eslint';

const Config: ESLint.ConfigData = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    // Requires explicit return and argument types on exported functions' and classes' public class methods.
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // Disallows @ts-<directive> comments or requires descriptions after directive.
    '@typescript-eslint/ban-ts-comment': 1,
    // This rule extends the base eslint/no-unused-vars rule. It adds support for TypeScript features, such as types.
    '@typescript-eslint/no-unused-vars': [2, { ignoreRestSiblings: true }],
  },
};

module.exports = Config;
