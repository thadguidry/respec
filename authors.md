Similar to editors, an array of [person objects](person) describing the authors of the document. 

Note: In most cases, [`editors`](editors) is preferred over `authors`. 

## Example
```
var respecConfig = {
    authors: [{
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

