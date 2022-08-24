import { Identifier } from "@typescript-eslint/types/dist/ast-spec";
import { ESLintUtils } from "@typescript-eslint/utils";

import { MessageIds } from "./types";

const createRule = ESLintUtils.RuleCreator((name) => name);

const isArrowFunctionExpressionParent = (node: Identifier) => {
  return Boolean(
    node.name === "i18n" &&
      // Need to check if the 3rd parent is an arrow function expression
      node.parent?.parent?.parent?.type !== "ArrowFunctionExpression"
  );
};

const lowerDashCaseTestID = createRule<never[], MessageIds>({
  name: "i18n-avoid-global-imports",
  defaultOptions: [],
  meta: {
    type: "suggestion",
    messages: {
      avoidI18nGlobalImports: "Please avoid to use i18n global imports.",
    },
    docs: {
      description: "enforce i18n usage by avoiding global imports",
      recommended: "error",
    },
    fixable: "code",
    schema: [], // no options
  },
  create(context) {
    return {
      // Here it will map on all Identifier found
      Identifier(node) {
        if (isArrowFunctionExpressionParent(node)) {
          context.report({
            node,
            messageId: "avoidI18nGlobalImports",
          });
        }
      },
    };
  },
});

export default lowerDashCaseTestID;
