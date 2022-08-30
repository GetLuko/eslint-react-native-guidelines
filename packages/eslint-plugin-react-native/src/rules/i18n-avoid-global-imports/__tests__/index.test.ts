import {
  InvalidTestCase,
  RuleTester,
} from "@typescript-eslint/utils/dist/ts-eslint";

import invalidStatements from "../__mocks__/invalid.statements";
import validStatements from "../__mocks__/valid.statements";
import rule from "../index";
import { MessageIds } from "../types";

const RULE_NAME = "i18n-avoid-global-imports";
const defaultMessageId: MessageIds = "avoidI18nGlobalImports";

const ruleTester = new RuleTester({
  parser: require("@typescript-eslint/parser"),
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: `../../${__dirname}`,
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
});

const errors: InvalidTestCase<MessageIds, never[]>["errors"] = [
  { messageId: defaultMessageId },
];

ruleTester.run(RULE_NAME, rule, {
  valid: validStatements.map((validStatement) => ({ code: validStatement })),
  invalid: invalidStatements.map((invalidStatement) => ({
    code: invalidStatement,
    errors,
  })),
});
