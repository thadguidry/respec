# `publishDate`

A `YYYY-MM-DD` date. The publication date of the present document. For documents that are in flux, such as Editor's Drafts or unofficial documents, this is best left unspecified as ReSpec will use the document's last modification date (as provided by the browser) in order to set this. For documents intended for official publication, this is normally required.

Note that the last modified date provided by the browser can at times be wrong. This often happens when the server is itself providing a broken value, or at times when differences in time-zones (that are not always well accounted-for by servers or browsers) cause the day to shift by one.


```js "example": "Set January 2, 2021 as publish date."
var respecConfig = {
  publishDate: "2021-01-02",
};
```
