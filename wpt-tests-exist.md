# `wpt-tests-exist`

Enable this [lint rule](lint) to get a warning if any of the tests mentioned in [`data-tests`](data-tests) does not exist in the WPT repository.

For example:

```html "illegalExample": "data-tests with a missing test."
<p id="a" data-tests="test.html,404.html"></p>
<!-- 404.html does not exist -->
```

You'll receive a warning listing all the missing tests.

```js "example": "Ensure all data-tests WPT exist for WebRTC."
var respecConfig = {
  testSuiteURI: "https://github.com/web-platform-tests/wpt/tree/HEAD/webrtc/",
  // alternatively:
  // testSuiteURI: "https://wpt.fyi/webrtc/",

  lint: {
    "wpt-tests-exist": true,
  },
};
```
