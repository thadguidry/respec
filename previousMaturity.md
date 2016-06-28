A `YYYY-MM-DD` date. When a [`previousPublishDate`](previousPublishDate) is specified, this is typically required as well in order to generate the "Previous Version" link since it includes an indication of the previous document's maturity level, which cannot be guessed. The values are the same as for `[specStatus](specStatus)`. 

Please note that some values of this option make no sense depending on the current document `[specStatus](specStatus)` but that the rules for validating consistency are convoluted enough that ReSpec does not try to check them. If you pick the wrong value (typically by forgetting to change it), the Link Checker will most likely catch the error before publication (the same goes for `[previousPublishDate](previousPublishDate)`).

### Example

```js
var respecConfig = { 
  previousPublishDate: "2014-05-01",
  previousMaturity: "LC",
};
```