With long algorithms in a specification, it can be useful to allow readers to click on variables marked up with `<var>` (e.g., Let `<var>elem</var> be ...`). By setting the `respecConfig.highlightVars` configuration option, readers can now click on `vars` in an algorithm to see where they are used.  

### Example of usage

```JS
var respecConfig = {
   highlightVars: true
}
```

### Example Output

It renders as:

<img width="600" alt="ReSpec highlightVars demo" src="https://user-images.githubusercontent.com/8426945/39560796-c2bca160-4ebe-11e8-8b05-6e3ce25f5af4.gif">

**Note:** This feature is only available in "live" Editor's Drafts. Because this feature relies on JavaScript, it's not exported out when a document is saved as HTML.