import {
  AST_NODE_TYPES,
  Identifier,
  JSXMemberExpression,
} from "@typescript-eslint/types/dist/generated/ast-spec";
import { ESLintUtils } from "@typescript-eslint/utils";

import { MessageIds } from "./types";

const createRule = ESLintUtils.RuleCreator((name) => name);

const isI18nNode = (node: Identifier) => {
  return node.name === "i18n";
};

const hasTranslatePropertyIdentifier = (
  node: any
): node is JSXMemberExpression => {
  return (
    "parent" in node &&
    "property" in node.parent &&
    "name" in node.parent.property &&
    node.parent.property.name === "t"
  );
};

const hasInvalidVariableDeclaration = (node: Identifier) => {
  return (
    // Get 3rd parent node to check if it is a variable declaration
    node.parent?.parent?.parent?.type === AST_NODE_TYPES.VariableDeclarator
  );
};

const lowerDashCaseTestID = createRule<never[], MessageIds>({
  name: "i18n-avoid-global-imports",
  defaultOptions: [],
  meta: {
    type: "problem",
    messages: {
      avoidI18nGlobalImports: "Please don't use i18n global imports.",
    },
    docs: {
      description: "enforce i18n usage by avoiding global imports",
      recommended: "error",
    },
    schema: [], // no options
  },
  create(context) {
    return {
      // Here it will map on all Identifier found
      Identifier(node) {
        if (
          isI18nNode(node) &&
          hasTranslatePropertyIdentifier(node) &&
          hasInvalidVariableDeclaration(node)
        ) {
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
