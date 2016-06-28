A `YYYY-MM-DD` date. Documents that are in Candidate Recommendation ([`specStatus`](specStatus) is "CR") are required to indicate a date before which the group guarantees that it will not move to the next step on the track (PR or REC) so that implementers know how long they have. Use this to provide that date. 

### Example

```js
var respecConfig = {
  specStatus: "CR",
  crEnd: "2014-01-04",
}
```