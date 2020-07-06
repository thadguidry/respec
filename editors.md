# `editors`

An array of [person objects](person) describing the editors of the document. Editors have the same responsibility as [`authors`](authors), and are preferred in specifications.

## Example

```js "example": "List of editors"
var respecConfig = {
  editors: [
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
