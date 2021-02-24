# `group`

For W3C, it allows you to associate a specification with a particular working group. Supported group short-names can be found at: https://respec.org/w3c/groups/.

Specifying the group will also figure out all the patent policy related things for your particular specification. 

```js "example": "Use Web Payments Working Group."
var respecConfig = {
  group: "payments",
};
```

You can also specify multiple groups:

```js "example": "Specify multiple groups."
var respecConfig = {
  group: ["group1", "group2"],
};
```

If a Community Group (CG) and a Working Group (WG) are using the same shortname, e.g. "wot", you can specify the group type as:

```js "example": "Specify group type."
var respecConfig = {
  group: "wg/wot",
};
```
