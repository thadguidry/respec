# `lcEnd`

A date in the format `YYYY-MM-DD`. Documents that are in Last Call ([`specStatus`](specStatus) is "LC") are required to indicate an end date for the review period.

## Example

```js "example": "Set Last Call review end date to January 3, 2016."
var respecConfig = {
  specStatus: "LC",
  lcEnd: "2016-01-03",
};
```
