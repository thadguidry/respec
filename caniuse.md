# `caniuse`

Adds a [Can I Use](https://caniuse.com) support table in the document header.

```js "example": "Caniuse table for payment-request"
var respecConfig = {
  caniuse: "payment-request",
};
```

```js "example": "Caniuse with specific browsers"
var respecConfig = {
  caniuse: {
    feature: "payment-request",
    browsers: ["chrome", "safari"],
  },
};
```

**Note:** This feature is only available in "live" Editor's Drafts. Because this feature relies on JavaScript, it's not exported out when a document is saved as HTML. In exported document, the table is replaced by a link to [caniuse.com](https://caniuse.com).

## Configuration Options:

<dl>

<dt><code>feature</code></dt>
<dd>(required) Can I Use feature key</dd>

<dt><code>browsers</code></dt>
<dd>Array of browsers to show support for. Default is set automatically if missing and will change over time to best represent the browser market. <br>
Supported Values:
<ul>
 <li><code>and_chr</code> - Chrome (Android)</li>
 <li><code>and_ff</code> - Firefox (Android)</li>
 <li><code>and_uc</code> - UC Browser (Android)</li>
 <li><code>android</code> - Android</li>
 <li><del><code>bb</code> - Blackberry</del></li>
 <li><code>chrome</code> - Chrome</li>
 <li><code>edge</code> - Edge</li>
 <li><code>firefox</code> - Firefox</li>
 <li><del><code>ie</code> - IE</del></li>
 <li><code>ios_saf</code> - Safari (iOS)</li>
 <li><del><code>op_mini</code> - Opera Mini</del></li>
 <li><code>op_mob</code> - Opera Mobile</li>
 <li><code>opera</code> - Opera</li>
 <li><code>safari</code> - Safari</li>
 <li><code>samsung</code> - Samsung Internet</li>
</ul>
</dd>

<dt><del><code>versions</code></del> (Deprecated)</dt>
<dd>Number of browser versions to show<br>
Default: <code>4</code></dd>

<dt><code>maxAge</code></dt>
<dd>Cache duration (in ms). <br>
Set to <code>0</code> to get fresh data each on each request.<br>
Default: <code>86400000</code>  // 24 hours</dd>
</dl>
