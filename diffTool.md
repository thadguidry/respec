If you want to produce a diff-marked version of your specification, you can use this setting to point to a specific diff tool. It should expect to receive parameters called oldfile, newcontent, and base. By default it is set to http://www.aptest.com/standards/htmldiff/htmldiff.pl. 

### Example

```JS
var respecConfig = {
  diffTool: "https://example.com/diff"
}
```