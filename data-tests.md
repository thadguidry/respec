The `data-tests` attribute takes a list of space-separated urls, allowing you to link tests to testable assertions. 

## Examples of usage
```HTML
<script>
const respecConfig = {
 testSuiteURI: "https://wpt.fyi/payment-request/",
};
</script>
<p data-tests="test-1.html test-2.html">
  The user agent MUST do this stuff.... 
</p>
```