If you are working on a new version of an existing Recommendation, use this to indicate what its URL was.

If a `prevRecURI` is not specified but [`prevRecShortname`](prevRecShortname) is, the latter will be used to generate the former by prefixing "http://www.w3.org/TR/" to it. Note however that while in the overwhelming majority of cases this works, it is not recommended to use this approach since if the Recommendation is later Rescinded, the link will be stale. Instead, use the dated link to the Recommendation. 

### Example
```JS
var respecConfig = {
  prevRecURI: "https://www.w3.org/TR/2014/example-20140327/"
}
```