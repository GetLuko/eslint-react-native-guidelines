import {
  AST_NODE_TYPES,
  Identifier,
  JSXMemberExpression,
} from "@typescript-eslint/types/dist/generated/ast-spec";
import { ESLintUtils } from "@typescript-eslint/utils";
import { I18nValidNodeTypes } from "./constants";

import { MessageIds } from "./types";

const createRule = ESLintUtils.RuleCreator((name) => name);

const isI18nNode = (node: Identifier) => {
  return node.name === "i18n";
};

const getParentNodeParents = (node: Identifier): AST_NODE_TYPES[] => {
  const parents: AST_NODE_TYPES[] = [];
  let currentNode: Identifier = node;
  while (currentNode.parent) {
    parents.push(currentNode.parent.type);
    currentNode = currentNode.parent as Identifier;
  }
  return parents;
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

const hasValidDeclaration = (node: Identifier) => {
  const parents = getParentNodeParents(node);
  return parents.some((parent) => I18nValidNodeTypes.includes(parent));
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
          !hasValidDeclaration(node)
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
