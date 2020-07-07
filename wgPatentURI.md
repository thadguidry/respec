# `wgPatentURI`

The URL of the public list of patent disclosures for the group.

Note: it is extremely easy to cut and paste this value from somewhere else and to fail to notice that you are using the wrong value. Given the legal patent implications in pointing to the wrong resource, please triple-check that you are using the [link relevant to your group](https://www.w3.org/2004/01/pp-impl/): locate your group, and click on its "(Status)" link.

## Example

```js "example": "Specify patent URL for the W3C group."
var respecConfig = {
  wgPatentURI: "https://www.w3.org/2004/01/pp-impl/GO_FIND_YOURS",
};
```

Note: Consider using [`group`](group) instead.
