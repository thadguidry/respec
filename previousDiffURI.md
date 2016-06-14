When producing a diffmarked version, ReSpec uses the previousURI as the old version by default. Use this configuration option if you wish to override this to a specific URL. 

### Example
```js
var respecConfig = {
  previousURI: "https://www.w3.org/TR/2014/WD-FOO-20140327/",
  // Diff against the first version
  previousDiffURI: "https://www.w3.org/TR/2014/WD-FOO-20130101/",
}
```