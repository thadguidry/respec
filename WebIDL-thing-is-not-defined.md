## Defining WebIDL things
You probably landed here because you got a warning like:

 * attribute `thing` not defined in `SomeInterface`.

This is trying to tell you that you forgot to define this part of the interface. Or that you forgot to explicitly define the interface itself!

### What you need to do

Given: 

```HTML
<section>
<pre class="idl">
interface SomeInterface {
  readonly attribute DOMString thing;
}
</pre>
</section>
```

You want to add the following [`data-dfn-for`] and [`data-link-for`] attributes:

```HTML
<section data-dfn-for="SomeInterface" data-dfn-for="SomeInterface">
<!-- explicitly define the interface -->
<h2><dfn>SomeInterface</dfn> interface</h2>
<pre class="idl">
interface SomeInterface {
  readonly attribute DOMString thing;
}
</pre>
<p>The <a>SomeInterface</a> let's you do really neat things!</p>
<!-- define the thing attribute -->
  <section>
    <h3><dnf>thing</dfn> attribute</h3>
    <p>The <a>thing</a> attribute, when getting, gives you the thing.</p> 
  </section>
</section>
```

## Defined in a different spec?
If the `SomeThing` interface is defined in a different spec, then all you need to do is link to it like this:

```HTML
<p>
  The <code><dfn data-cite="SOME-SPEC#dom-SomeThing">SomeThing</dfn></code> interface
  is defined by [[!SOME-SPEC]].
</p>
```