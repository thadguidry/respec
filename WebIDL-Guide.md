To specify an interface using [WebIDL](http://heycam.github.io/webidl/), you define a `<pre class="idl">` block. For example:

```HTML
<pre class="idl">
interface Request {
  readonly attribute ByteString method;
  readonly attribute USVString url;
};
</pre>
```

## Defining an interface
There are two ways to define an interface. 

 1. Directly, using a `<dfn>` element directly.
 1. Use the `data-dfn-for` attribute on a parent element. 

### Simple definition and linking 

Given `interface Request {};`, you can define the interface like so:

```HTML
<section>
  <h2>The <code>Request</code> interface</h2>
  <pre class="idl">
    interface Request {};
  </pre>
  <p>The <dfn>Request</dfn> interface represents a request.</p>
  <p>An instance of <a>Request</a> allows you to make a request.</a>
</section>
```

### Defining methods and attributes
There are multiple ways to define the methods or attributes of an interface: 

 1. Using dot notation, like `<dfn>interfaceName.memberName</dfn>`
 1. Using `data-dfn-for` wrapper attribute.

Given:

```HTML
<pre class=idl>
interface Request {
  readonly attribute USVString url;
  Request clone();
};
</pre>
```

For example, to define `Request.url`, you'd write `<dfn>Request.url</dfn>`. This also automatically links the IDL declaration to the prose definition. 

Similarly, to define the `Request.clone()` method, you'd write `<dfn>Request.clone</dfn>()</dfn>`.

Alternatively, if you would prefer not to use the dot notation, you can use `data-dfn-for`. 

#### Using `data-dfn-for` and `data-link-for`

The `data-dfn-for` attribute allows you to describe one or more aspects of an interface at once.

Similarly, the `data-link-for` attribute allows you to link to one or more aspects of an interface at once.

For example, the following defines both the `url` and the `clone` method.

```HTML
  <p data-dfn-for="Request">
    The <dfn>clone()</dfn> method.
    The <dfn>url</dfn> attribute.
  </p>
  <!-- Linking to definitions works the same -->
  <p data-link-for="Request">
    Links to <a>clone()</a> method.
    Links to the <a>url</a> attribute.
  </p>
```

## Multiple interfaces with same attributes/methods

If, for instance, you have two interfaces with methods or attributes that are the same: 

```HTML
<pre class="idl">
interface Request {
  readonly attribute USVString url;
};
</pre>
<pre class="idl">
interface Response {
  readonly attribute USVString url;
};
</pre>
```

You explicitly distinguish between them like so: 

```HTML
<section data-dfn-for="Request">
  <p>The <dfn>url</dfn> of <a>Request</a>...</p>
</section>

<section data-dfn-for="Response">
  <p>The <dfn>url</dfn> of <a>Response</a>...</p>
</section>
```



## Limitations

We currently don't support:
 * linking to constructors ([bug 900](https://github.com/w3c/respec/issues/900)). 