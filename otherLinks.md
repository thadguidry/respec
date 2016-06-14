Adds additional links to the header of the document. This is useful if you want to link to other resources, like a news feed, a Github repository, or a relevant website.

The `otherLinks` property takes an array that contains a set of objects. Each of these objects contains a `key` and a `data` property. The `key` is the text that will contain the links to the relevant resources. The `data` is another array of objects that contain the data describing the resource (with the properties `value` which is a string, and `href` which is the URL you want to link to).

### Example
```JS
var respecConfig = {
  otherLinks: [{
    key: 'Repository',
    data: [{
      value: 'We are on Github.',
      href: 'https://github.com/w3c/repo'
    }, {
      value: 'File a bug.',
      href: 'https://github.com/w3c/repo/issues'
    }, {
      value: 'Commit history.',
      href: 'https://github.com/w3c/repo/commits/gh-pages'
    }, {
      value: 'Mailing list.',
      href: 'https://lists.w3.org/Archives/Public/public-webapps/'
    }]
  }, {
    key: "Implementation status",
    data: [{
      value: "Gecko",
      href: "https://bugzilla.mozilla.org/show_bug.cgi?id=xxxx"
    }, {
      value: "Blink",
      href: "https://code.google.com/p/chromium/issues/detail?id=xxx"
    }]
  }],
}
```