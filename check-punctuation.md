# `check-punctuation` lint rule

Enable this lint rule to check for punctuation. It checks for:
- Punctuation mark at the end of `<p>` tag.

For example:
```HTML
<p>This has no punctuation at the end <p>
```
You will receive a warning that your `<p>` tag should end with punctuation mark.

## Example of usage

```HTML
var respecConfig = {
  lint: {
    "check-punctuation": true,
  },
}
```
