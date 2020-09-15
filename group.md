# `group`

`group` is a shorthand configuration option for specifying [`wg`](wg), [`wgId`](wgId), [`wgURI`](wgURI), [`wgPatentURI`](wgPatentURI), and [`wgPatentPolicy`](wgPatentPolicy) options. It fetches working group details using the W3C API.

```js "example": "Use Web Payments Working Group."
var respecConfig = {
  group: "payment",
  // is equivalent to:
  // wg: "Web Payments Working Group",
  // wgId: 83744,
  // wgPatentURI: "https://www.w3.org/2004/01/pp-impl/83744/status",
  // wgURI: "https://www.w3.org/Payments/WG/",
  // wgPatentPolicy: "PP2020", (or whatever the WG is using!)
};
```

You can also specify multiple groups:

```js "example": "Specify multiple groups."
var respecConfig = {
  group: ["group1", "group2"],
};
```

A list of valid group names can be found at: https://respec.org/w3c/groups/.
