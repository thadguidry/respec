# `check-punctuation`

Enable this lint rule to check for punctuation. It checks for:

- Punctuation mark at the end of `<p>` tag.

For example:

```html "illegalExample": "A paragraph with bad punctuation."
<p>This has no punctuation at the end</p>
```

You will receive a warning that your `<p>` tag should end with punctuation mark.

## Example of usage

```js "example": "Enable check-punctuation linter rule."
var respecConfig = {
  lint: {
    "check-punctuation": true,
  },
};
```
