An array of [person objects](person) describing the editors of the document. Editors have the same responsibility as [`authors`](authors), and are preferred in specifications. 

### Example
```JS
var respecConfig = {
  editors: [{
    name: "Marcos Caceres",
    company: "Mozilla Corporation",
    companyURL: "https://mozilla.org/",
    w3cid: 39125
  }, {
    name: "Kenneth Rohde Christiansen",
    company: "Intel Corporation",
    companyURL: "http://intel.com",
    w3cid: 57705
  }, {
    name: "Mounir Lamouri",
    company: "Google Inc.",
    companyURL: "https://google.com",
    w3cid: 45389
  }, {
    name: "Anssi Kostiainen",
    company: "Intel Corporation",
    companyURL: "http://intel.com",
    w3cid: 41974
  }],
}
```

