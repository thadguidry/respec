With long algorithms in a specification, it can be useful to allow readers to click on variables marked up with `<var>` (e.g., Let `<var>elem</var> be ...`). By setting the `respecConfig.highlightVars` configuration option, readers can now click on `vars` in an algorithm to see where they are used.  

![screencast-2018-05-02-21-09-28](https://user-images.githubusercontent.com/8426945/39533806-a7643b24-4e4d-11e8-8dbd-495fae677702.gif)

### Example of usage

```JS
var respecConfig = {
   highlightVars: true
}
```

**Note:** This feature is only available in "live" Editor's Drafts. Because this feature relies on JavaScript, it's not exported out when a document is saved as HTML.