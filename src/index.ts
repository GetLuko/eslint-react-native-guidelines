/**
 * @fileoverview Custom rules for Luko's ESLint plugin.
 * @author Anthony Lasserre
 */

'use strict';

import lowerDashCaseTestID from './lower-dash-case-test-id';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  rules: {
    'lower-dash-case-test-id': lowerDashCaseTestID,
  },
};
