# `crEnd`

Documents that are in Candidate Recommendation ([CR](specStatus#specStatus-cr)) are required to indicate a date before which the group guarantees that it will not move to the next step on the track ([PR](specStatus#specStatus-pr) or [RE](specStatus#specStatus-rec)) so that implementers know how long they have.

Use this option to provide that date, in `YYYY-MM-DD` format.

## Example

```js
var respecConfig = {
  specStatus: "CR",
  crEnd: "2014-01-04",
};
```
