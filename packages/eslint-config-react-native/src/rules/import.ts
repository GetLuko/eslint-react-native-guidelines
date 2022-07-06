import { ESLint } from 'eslint';

const Config: ESLint.ConfigData = {
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.d.ts',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
        ],
      },
    },
  },
  rules: {
    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__tests__/**/*',
          'e2e/**/*',
          '**/*.test.{js,ts,tsx}',
          '**/*.doc.{js,ts,tsx}',
          'jest/**/*',
          'scripts/**/*',
          'app/testing/**/*',
        ],
        peerDependencies: true,
        optionalDependencies: true,
      },
    ],
    // Ensure imports point to a file/module that can be resolved
    'import/no-unresolved': [
      'error',
      {
        ignore: ['~/'], // @todo remove it to have better file unresolved detecion
      },
    ],
    /**
     * We don't enforce the use of default exports.
     * Having named exports provides better IDE support with:
     * - auto importing correctly
     * - better following of imports
     */
    'import/prefer-default-export': 'off',
    // This rule allows you to specify imports that you don’t want to use in your application.
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native',
            importNames: ['Dimensions'],
            message:
              "Use: import { deviceWidth, deviceHeight } from '~/luko-ui/theme/styles';",
          },
        ],
      },
    ],
    // Enforce a convention in module import order
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'parent',
            position: 'before',
          },
        ],
        groups: [
          ['builtin', 'external'],
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    // Disallow duplicate module imports
    'no-duplicate-imports': 2,
  },
};

module.exports = Config;
