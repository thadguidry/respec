The `data-link-for` attribute allows you to link to one or more aspects of an interface at once.

### Example
In this example, we link to `Request`'s definition of url, but not `Response`'s.

```HTML
  <pre class=idl>
  interface Request {
    readonly attribute USVString url;
  };
  interface Response {
    readonly attribute USVString url;
  };
  </pre>
  <p data-dfn-for="Request">
    The <dfn data-lt="clone()">clone</dfn> method.
    The <dfn>url</dfn> attribute.
  </p>
  <!-- Linking to definitions works the same -->
  <p data-link-for="Request">
    Links to <a>clone()</a> method.
    Links to the <a>url</a> attribute.
  </p>
```