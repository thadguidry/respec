# `formerEditors`

An array of [person objects](person) describing the past editors of the document. `formerEditors` were added so as to avoid cluttering the present [`editors`](editors) list and are shown just below the list of present editors.


```js "example": "List of former editors"
var respecConfig = {
  formerEditors: [
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
