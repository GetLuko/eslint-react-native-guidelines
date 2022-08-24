# Enforces i18n usage by avoiding global imports (@getluko/react-native/i18n-avoid-global-imports)

Allows you to enforce i18n by avoiding global imports. It can cause some errors on translation rendering.

## Rule Details

Examples of **incorrect** code for this rule:

```jsx
  // bad ❌
  const key = i18n.t('key');
  return (
    <Text>{key}</Text>
  )
```

Examples of **correct** code for this rule:

```jsx
    // good ✅
    const getKey = () => i18n.t('key');
    return (
      <Text>{getKey()}</Text>
    );
```

## Configuration

`.eslintrc.js`
```js
module.exports = {
  plugins: ['@getluko/react-native']
  rules: {
    '@getluko/react-native/i18n-avoid-global-imports': 1,
  }
};
```