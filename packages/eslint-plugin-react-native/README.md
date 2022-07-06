# @getluko/eslint-plugin-react-native

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build eslint-plugin-react-native` to build the library.

## Running unit tests

Run `nx test eslint-plugin-react-native` to execute the unit tests via [Jest](https://jestjs.io).

# @getluko/eslint-plugin-mobile-guidelines

## Installation

```
yarn add @getluko/eslint-plugin-mobile-guidelines --dev
```

## Configuration

`.eslintrc.js`

```
module.exports = {
  plugins: ['@getluko/mobile-guidelines'],
  rules: {
    '@getluko/mobile-guidelines/lower-dash-case-test-id': 1,
  }
```

## Rules

### [@getluko/mobile-guidelines/lower-dash-case-test-id](src/docs/rules/lower-dash-case-test-id.md)

This rule is used to enforce a consistent naming pattern for testID prop which expect a lower dash case.

<img src="https://img.shields.io/badge/Autofixed-yes-brightgreen" />
