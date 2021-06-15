# `latestVersion`

For W3C Community Groups and Business Groups, it allows you to specify a URL for where the "Latest Version" of a specification can be found (e.g., on Github, using GitHub pages).
  
For regular W3C Working Groups,`latestVersion` is automatically set. However, in rare cases, you can override the "Latest Version" to point to a different path or URL. 

Note: The `latestVersion` URL is resolved using `https://www.w3.org/` as the base URL. 

```js "example": "Adding a latest version"
var respecConfig = {
  latestVersion: "https://respec.org/docs/";
}
```
