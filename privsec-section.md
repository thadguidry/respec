# `privsec-section`

For certain types of documents, this [lint rule](lint) warns if the documents is missing a Privacy and/or Security considerations section. This rule is on by default for W3C documents.

## Example of usage

```js "example": "Disable privsec-section linter rule."
var respecConfig = {
  lint: {
    "privsec-section": false,
  },
};
```
