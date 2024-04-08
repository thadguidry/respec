# `prEnd`

A date in the format `YYYY-MM-DD`. Documents that are in Proposed Recommendation ([`specStatus`](specStatus) is "PR") are required to indicate an end date for the review period.


```js "example": "Set Last Call review end date to January 3, 2016."
var respecConfig = {
  specStatus: "PR",
  lcEnd: "2016-01-03",
};
```
