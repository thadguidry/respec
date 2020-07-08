# `previousPublishDate`

A `YYYY-MM-DD` date. When there is a previous release of a given specification, this is used to generate the "Previous Version" link. It is required for [Recommendation Track](https://www.w3.org/2003/06/Process-20030618/tr.html) documents.


```js "example": "Set previous publish date to May 1, 2014."
var respecConfig = {
  previousPublishDate: "2014-05-01",
  previousMaturity: "LC",
};
```
