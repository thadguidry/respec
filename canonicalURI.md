# `canonicalURI`

The `canonicalURI` lets you indicate either a URL or a keyword to use as the [canonical link](https://en.wikipedia.org/wiki/Canonical_link_element) of the document. Search engines, like Google, can make use of this information to help determine which version of document is authoritative.

Following keywords automatically generate a corresponding URL. However, you are free to include your own URL.

| Keyword     | Generated URL                                                                |
| ----------- | :--------------------------------------------------------------------------- |
| `"edDraft"` | Use the [`edDraftURI`](edDraftURI) as the canonical URL.                     |
| `"TR"`      | Use the "TR" location for this document, using the [`shortName`](shortName). |

## Example of usage

The following will result in a canonical URL of `https://www.w3.org/TR/fooAPI`.

```js
var respecConfig = {
  shortName: "fooAPI",
  canonicalURI: "TR",
};
```
