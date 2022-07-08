import { RuleTester } from '@typescript-eslint/utils/dist/ts-eslint';

import invalidStatements from '../__mocks__/invalid.statements';
import validStatements from '../__mocks__/valid.statements';
import rule from '../index';

const RULE_NAME = 'lower-dash-case-test-id';
const messageId = 'lowerDashCase';

const ruleTester = new RuleTester({
  parser: require('@typescript-eslint/parser'),
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: `../../${__dirname}`,
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
});

const errors = [{ messageId }];

ruleTester.run(RULE_NAME, rule, {
  valid: [{ code: validStatements[0] }, { code: validStatements[1] }],
  invalid: [
    {
      code: invalidStatements[0],
      errors,
      output: validStatements[0],
    },
    {
      code: invalidStatements[1],
      errors,
      output: validStatements[0],
    },
    {
      code: invalidStatements[2],
      errors,
      output: validStatements[0],
    },
  ],
});
