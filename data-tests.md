The `data-tests` attribute takes a list of space-separated URLs, allowing you to link tests to testable assertions. This will add a `details` drop down to the testable assertion, with an unordered list of tests.

The `data-test` works together with the [`testSuiteURI`](testSuiteURI) config option, so it must be present or ReSpec will yell at you.

It's best used with `<p>` and `<li>` elements. 

## Examples of usage
```HTML
<script>
const respecConfig = {
 testSuiteURI: "https://wpt.fyi/payment-request/",
};
</script>

<p data-tests="test-1.html test-2.html">
  The user agent MUST do this stuff...  
</p>
```