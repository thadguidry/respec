# `data-link-for`

The `data-link-for` attribute allows you to link to a definition with same [`data-dfn-for`](data-dfn-for) value.

```html "example": "A comparison of linking global and scoped definitions"
<p>
  <dfn>bar</dfn> is a global definition.
  <a>bar</a> links to bar.
  Prefer using [= bar =] syntax for linking.
</p>

<p>
  <dfn data-dfn-for="Foo">bar</dfn> is defined in scope of "Foo".
  <a data-link-for="Foo" data-link-type="dfn">bar</a> links to `bar` in scope of `Foo`.
  Following syntax is preferred: [= Foo/bar =]
</p>
```

It works with IDL definitions also:

```html "example": "Linking scoped IDL definitions."
<p>
  <dfn data-dfn-type="idl" data-dfn-for="Foo">bar</dfn> is defined in scope of "Foo".
  <a data-link-for="Foo" data-link-type="idl">bar</a> links to `bar` in scope of `Foo`.
  Following syntax is preferred: {{ Foo/bar }}
</p>
```

The `data-link-for` attribute also allows you to link to one or more aspects of an interface at once.

## Example

In this example, we link to `Request`'s definition of url, but not `Response`'s.

```html "example": "Using data-link-for to link under given scope."
<pre class="idl">
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
