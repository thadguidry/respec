## Defining WebIDL things
You probably landed here because you got a warning like:

 * attribute `thing` not defined in `SomeInterface`.

This is trying to tell you that you forgot to define this part of the interface. * Or that you forgot to explicitly define the interface itself!

Tl;dr:
  * Add `data-dfn-for="SomeInterface"` `data-link-for="SomeInterface"` to the container `<section>`.
  * Change `SomeInterface` to the name of the Interface, Dictionary, or Enum you are defining.
  * Now use `<dfn>` to define the methods, attributes, or enum values.

Full example below...   

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

You want to add the following:

```HTML

<!-- 
  1. add data-dfn-for, and data-link-for to section,
     with the name of the interface, dictionary, or enum 
     you are defining. 
--> 
<section data-dfn-for="SomeInterface" data-link-for="SomeInterface">

  <!-- 2. explicitly define the interface: in the heading works best! -->
  <h2><dfn>SomeInterface</dfn> interface</h2>

  <pre class="idl">
  interface SomeInterface {
    readonly attribute DOMString thing;
    OtherInterface someMethod();
  }
  </pre>
   
  <!-- 3. Actually write something meaningful about the interface -->
  <p>The <a>SomeInterface</a> let's you do really neat things!</p>

  <!-- 4. define the `thing` attribute -->
  <section>
    <h3><dfn>thing</dfn> attribute</h3>
    <p>The <a>thing</a> attribute, when getting, gives you the thing.</p> 
  </section>

  <!-- 5. define the `someMethod()` attribute -->
  <section>
    <h3><dfn>someMethod()</dfn> attribute</h3>
    <p>The <a>thing</a> attribute, when getting, gives you the thing.</p> 
  </section>
</section>
```

The above structure will give result in a nice structure for users. The ToC and links will all work as expected. 

## Defined in a different spec?
If the `OtherInterface` interface is defined in a different spec, then all you need to do is link to it like this. **Note that the `code` element needs to surround the `<dfn>` element**:

```HTML
<p>
  The <code><dfn data-cite="SOME-SPEC#dom-SomeThing">OtherInterface</dfn></code>
  interface is defined by [[!SOME-SPEC]].
</p>
```