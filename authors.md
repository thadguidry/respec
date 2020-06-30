# `authors`

Similar to editors, an array of [person objects](person) describing the authors of the document.

Note: In most cases, [`editors`](editors) is preferred over `authors`.

## Example

```js
var respecConfig = {
  authors: [
    {
      name: "Marcos Caceres",
      company: "Mozilla Corporation",
      companyURL: "https://mozilla.org/",
      w3cid: 39125,
    },
    {
      name: "Kenneth Rohde Christiansen",
      company: "Intel Corporation",
      companyURL: "http://intel.com",
      w3cid: 57705,
    },
  ],
};
```
