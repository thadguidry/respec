ReSpec knows to include an indication of the W3C process under which the document was developed. This indication appears at the end of the Status of This Document section. By default it indicates the new `2018` process. You can override this by setting the `processVersion` configuration option to anything other than `2018`. The previous process documents were `2015`, `2014`, and `2005`.

**Note:** `processVersion` was [removed](https://github.com/w3c/respec/blob/develop/CHANGELOG.md#v1950-2018-02-15) from `v19.5.0` onwards.

### Example

```js
var respecConfig = {
  // Generally, you want ReSpec to set this for you
  // unless there is a good reason to use an old 
  // process! 
  processVersion: 2015,
}
```