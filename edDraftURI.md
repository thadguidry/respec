# `edDraftURI`

The URL of the Editor's Draft, used in the header. This is required for when [specStatus](specStatus) is "ED".

Note: it is strongly recommended that you don't publish Editor's drafts, and instead auto-publish your specification using the [W3C's Echidna workflow](https://github.com/w3c/echidna).

```js "example": "Add Editor's Draft URL"
var respecConfig = {
  specStatus: "ED",
  edDraftURI: "https://www.w3.org/TR/example",
};
```
