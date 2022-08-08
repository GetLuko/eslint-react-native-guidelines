import {
  JSXAttribute,
  Literal,
} from "@typescript-eslint/types/dist/generated/ast-spec";
import { ESLintUtils } from "@typescript-eslint/utils";

import { regexCamelCase, regexSpecialChars } from "./constants";
import { MessageIds } from "./types";

const createRule = ESLintUtils.RuleCreator((name) => name);

const lowerDashCaseTestID = createRule<never[], MessageIds>({
  name: "lower-dash-case-test-id",
  defaultOptions: [],
  meta: {
    type: "suggestion",
    messages: {
      lowerDashCase: "Convert this testID with a lower-dash-case",
    },
    docs: {
      description: "enforce lower-dash-case on testID prop",
      recommended: "error",
    },
    fixable: "code",
    schema: [], // no options
  },
  create(context) {
    const stringToLowerDashCase = (str: string) => {
      // Replace CamelCase with lower-dash-case
      const stringWithDash = str.replace(
        regexCamelCase,
        (match: string) => "-" + match
      );
      // Remove the first "-"
      const stringWithDashFormatted =
        stringWithDash[0] === "-" ? stringWithDash.slice(1) : stringWithDash;
      return (
        stringWithDashFormatted
          // Replace spaces and specials characters by a "-"
          .replace(regexSpecialChars, "-")
          // Convert string to lower case
          .toLowerCase()
      );
    };

    const checkTestID = (node: JSXAttribute) => {
      // Check if testID is lower-dash-cases
      const name = node.name.name;
      const value = (node.value as Literal)?.value;
      if (name === "testID" && value && typeof value === "string") {
        const newTestID = stringToLowerDashCase(value);
        const isBadPattern = newTestID !== value;
        if (isBadPattern) {
          // Report to the error to the rule context
          context.report({
            node,
            // Return the messageId to match with meta.messages declaration
            messageId: "lowerDashCase",
            // Auto-fix the value
            fix(fixer) {
              // Replace testID value by the new testID
              return fixer.replaceText(node, `testID="${newTestID}"`);
            },
          });
        }
      }
      return true;
    };

    return {
      // Here it will map on all JSXAttribute found
      JSXAttribute(node) {
        return checkTestID(node);
      },
    };
  },
});

export default lowerDashCaseTestID;
