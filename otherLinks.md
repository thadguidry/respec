# `otherLinks`

Adds additional links to the header of the document. This is useful if you want to link to other resources, like a news feed, a GitHub repository, or a relevant website.

The `otherLinks` property takes an array that contains a set of objects. Each of these objects contains a `key` and a `data` property. The `key` is the text that will contain the links to the relevant resources. The `data` is another array of objects that contain the data describing the resource (with the properties `value` which is a string, and `href` which is the URL you want to link to). If a `href` is not provided, `value` is displayed as text.


```js "example": "Use otherLinks to add links to implementation status."
var respecConfig = {
  otherLinks: [
    {
      key: "Implementation status",
      data: [
        {
          value: "Gecko",
          href: "https://bugzilla.mozilla.org/show_bug.cgi?id=xxxx",
        },
        {
          value: "Blink",
          href: "https://code.google.com/p/chromium/issues/detail?id=xxx",
        },
      ],
    },
  ],
};
```

Above is rendered as:

<img src="https://user-images.githubusercontent.com/8426945/86644589-47c4d580-bffb-11ea-84a7-e46bfd2dcb8a.png" alt="otherLinks rendered in page's header" width="239" height="272" loading="lazy">
