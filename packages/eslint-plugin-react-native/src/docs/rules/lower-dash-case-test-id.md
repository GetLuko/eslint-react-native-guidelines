# Enforces consistent naming for testID prop (@getluko/react-native/lower-dash-case-test-id)

Allows you to enforce a consistent naming pattern for testID prop which expect a lower dash case.

## Rule Details

Examples of **incorrect** code for this rule:

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

Examples of **correct** code for this rule:

```jsx
return (
  <Element
    testID={'element-test-id'}
  />
)
```

## Configuration

`.eslintrc.js`
```js
module.exports = {
  plugins: ['@getluko/react-native']
  rules: {
    '@getluko/react-native/lower-dash-case-test-id': 1,
  }
};
```