import { ESLint } from 'eslint';

const Config: ESLint.ConfigData = {
  extends: [
    './rules/default',
    './rules/detox',
    './rules/getluko',
    './rules/import',
    './rules/prettier',
    './rules/react-hooks',
    './rules/react-native',
    './rules/react',
    './rules/typescript',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  ].map(require.resolve),
  rules: {},
};

module.exports = Config;
