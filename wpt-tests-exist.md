# `wpt-tests-exist`

Enable this [lint rule](lint) to get a warning if any of the tests mentioned in [`data-tests`](data-tests) does not exist in the WPT repository.

For example:

```html
<p id="a" data-tests="test.html,404.html"></p> <!-- 404.html does not exist)
```

You'll receive a warning listing all the missing tests.

## Example of usage

```js
var respecConfig = {
  testSuiteURI:
    "https://github.com/web-platform-tests/wpt/tree/master/payment-request/",
  // alternatively:
  // testSuiteURI: "https://wpt.fyi/payment-request/",
  lint: {
    "wpt-tests-exist": true,
  },
};
```
