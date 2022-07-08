import { ESLint } from 'eslint';

const Config: ESLint.ConfigData = {
  globals: {
    NodeJS: true,
    JSX: true,
  },
  rules: {
    // Disallow the use of console
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // Disallow the use of undeclared variables unless mentioned in /*global */ comments
    'no-undef': 0,
    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // Require require() calls to be placed at top-level module scope
    'global-require': 0,
  },
};

module.exports = Config;
