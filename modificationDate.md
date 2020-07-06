# `modificationDate`

A `YYYY-MM-DD` date. The in-place edit date of an already published document. Used in conjunction with [`publishDate`](publishDate), as per [Pubrules](https://www.w3.org/pubrules/doc/rules/?profile=REC#dateTitleH2).

## Example

```js "example": "Add a modification date for an already published document."
var respecConfig = {
  publishDate: "2020-03-30",
  modificationDate: "2020-04-13",
};
```
