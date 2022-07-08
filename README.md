# GetLuko React Native Guidelines = () => {

*A mostly reasonable approach to React Native code guidelines by @GetLuko*

[![Downloads](https://img.shields.io/npm/dm/@getluko/eslint-plugin-mobile-guidelines.svg)](https://www.npmjs.com/package/@getluko/eslint-plugin-mobile-guidelines)
## Table of Contents

  1. [Testing](#testing)
  2. [Contributors](#contributors)
  3. [License](#license)
  4. [Amendments](#amendments)

## Testing

### @getluko/react-native/lower-dash-case-test-id

> Enforces consistent naming for testID prop

  ```jsx
    // bad
    return (
      <Element
        testID="ElementTestID"
      />
    );

    // good
    return (
      <Element
        testID="element-test-id"
      />
    );
  ```

**[⬆ back to top](#table-of-contents)**

**Blogs**

  - [Medium](https://javascriptweekly.com/)

## Contributors

  - [View Contributors](https://github.com/GetLuko/eslint-plugin-mobile-guidelines/graphs/contributors)

## License

(The MIT License)

Copyright (c) 2022 Luko

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[⬆ back to top](#table-of-contents)**

## Amendments

We encourage you to fork this guide and change the rules to fit your team’s style guide. Below, you may list some amendments to the style guide. This allows you to periodically update your style guide without having to deal with merge conflicts.

# };
