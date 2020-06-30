To specify an interface using [WebIDL](http://heycam.github.io/webidl/), you define a `<pre class="idl">` block. For example:

```html
<pre class="idl">
interface Request {
  readonly attribute ByteString method;
  readonly attribute USVString url;
};
</pre>
```

## tl;dr - ideal linking setup

The recommended way to code up your WebIDL is as follows:

```html
<section data-dfn-for="ExampleInterface">
  <h2><dfn>ExampleInterface</dfn> interface</h2>
  <pre class="idl">
  interface ExampleInterface {
    void exampleMethod();
    readonly attribute USVString url;
  };
  </pre>
  <section>
    <h2><dfn>exampleMethod()</dfn> method</h2>
    <p>Define {{ExampleInterface/exampleMethod()}} here...</p>
  </section>
  <section>
    <h2><dfn>url</dfn> attribute</h2>
    <p>Define {{ExampleInterface/url}} attribute here...</p>
  </section>
</section>
<section>
  <h2>Here is how you link!</h2>
  <p>The {{ExampleInterface}} or the {{ExampleInterface/exampleMethod()}}.</p>
</section>
```

## Defining the interface

Given `interface Request {};`, you can define the interface inside a heading like so:

```html
<section>
  <h2><dfn>Request</dfn> interface</h2>
  <pre class="idl">
    interface Request {};
  </pre>
  <p>An instance of {{Request}} allows you to make a request.</p>
</section>
```

The above provides convenient linking to the section where the interface is defined.

#### Using `data-dfn-for`

The `data-dfn-for` attribute allows you to describe one or more aspects of an interface at once within a section of your document.

For example, the following defines both the `url` and the `clone` method.

```html
<section data-dfn-for="Request">
  <h2>`Request` interface</h2>
  <pre>
  interface Request {
    readonly attribute ByteString method;
    readonly attribute USVString url;
  };
  </pre>
  <p>The <dfn>clone()</dfn> method. The <dfn>url</dfn> attribute.</p>
  <p>
    Links to {{Request/clone()}} method. Links to the {{Request/url}} attribute.
  </p>
</section>
```

## Multiple interfaces with same attributes/methods

If, for instance, you have two interfaces with methods or attributes that are the same:

```html
<pre class="idl">
interface Request {
  readonly attribute USVString url;
};
interface Response {
  readonly attribute USVString url;
};
</pre>
```

You explicitly distinguish between them like so:

```html
<section data-dfn-for="Request">
  <p>
    The <dfn>url</dfn> attribute of {{Request}} is used by {{Response/url}}.
  </p>
</section>

<section data-dfn-for="Response">
  <p>
    The <dfn>url</dfn> attribute of {{Response}} depends on {{Request/url}}.
  </p>
</section>
```
