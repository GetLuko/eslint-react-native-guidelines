# @getluko/eslint-plugin-react-native

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build eslint-plugin-react-native` to build the library.

## Running unit tests

Run `nx test eslint-plugin-react-native` to execute the unit tests via [Jest](https://jestjs.io).

# @getluko/eslint-plugin-mobile-guidelines

## Installation

```
yarn add @getluko/eslint-plugin-react-native --dev
```

## Configuration

`.eslintrc.js`

```
module.exports = {
  plugins: ['@getluko/react-native'],
  rules: {
    '@getluko/react-native/lower-dash-case-test-id': 1,
    '@getluko/react-native/i18n-avoid-global-imports: 2,
  }
```

## Rules

### @getluko/react-native/lower-dash-case-test-id

> Allows you to enforce a consistent naming pattern for testID prop which expect a lower dash case.

  ```jsx
    // bad ❌
    return (
      <Element
        testID="ElementTestID"
      />
    );

    // good ✅
    return (
      <Element
        testID="element-test-id"
      />
    );
  ```

### @getluko/react-native/i18n-avoid-global-imports

> Allows you to enforce i18n by avoiding global imports. it allows changing language dynamically without restarting the app.

  ```jsx
    // bad ❌
    const key = i18n.t('key');
    return (
      <Text>{key}</Text>
    )

    // good ✅
    const getKey = () => i18n.t('key');
    return (
      <Text>{getKey()}</Text>
    );
  ```
