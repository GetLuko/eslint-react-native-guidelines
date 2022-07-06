import { ESLint } from 'eslint';

const Config: ESLint.ConfigData = {
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Beware this rule only reports JSX syntax, not other non-standard syntax such as experimental features or type annotations.
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    // Warn if an element that likely requires a key prop--namely, one present in an array literal or an arrow function expression.
    'react/jsx-key': 2,
    // This rule allows you to enforce curly braces or disallow unnecessary curly braces in JSX props and/or children.
    'react/jsx-curly-brace-presence': [
      2,
      { props: 'never', children: 'always' },
    ],
    // Creating components inside components without memoization leads to unstable components
    'react/no-unstable-nested-components': [
      2,
      {
        allowAsProps: true,
      },
    ],
  },
};

module.exports = Config;
