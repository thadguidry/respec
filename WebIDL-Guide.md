To specify an interface using [WebIDL](http://heycam.github.io/webidl/), first write your WebIDL in a `<pre class="idl">` block. 

For example:

```
<pre class="idl">
[Constructor]
interface Request {
  readonly attribute ByteString method;
  readonly attribute USVString url;
};
</pre>
```

## Defining the interface

There are two ways to define an interface. 

 1. Use a `<dfn>` element directly.
 1. Use the `data-dfn-for` attribute on a parent element. 

### Interface: simple definition and linking 

Given `interface Request {};`, you can define the interface like so:

```HTML
<section>
  <h2>The <code>Request</code> interface</h2>
  <pre class=idl>
    interface Request {};
  </pre>
  <p>The <dfn>Request</dfn> interface represents a request.</p>
  <p>An instance of <a>Request</a> allows you to make a request.</a>
</section>
```


## Methods and attributes
To 
