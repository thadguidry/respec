The `data-dfn-for` attribute links a WebIDL attribute or method to a definition.   

### Example 
The following example automatically links up the `bar` attribute and the `doTheFoo()` method to the `Foo` interface. 

```HTML
<section data-dfn-for="Foo" data-link-for="Foo">
 <h2><code>Foo</code> interface</h2>
 <pre class="idl">
  interface Foo {
    attribute Bar bar;
    void doTheFoo();
  };
  </pre>
  <p>The <dfn>Foo</dfn> interface is nice. Lets you do stuff.</p>
  <p>The <dfn>bar</dfn> attribute, returns 🍺.</p>
  <p>The <dfn>doTheFoo()</dfn> method, returns nothing.</p>
</section>
```