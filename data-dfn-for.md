The `data-dan-for` attribute links a WebIDL attribute or method to a definition.   

### Example 
The following example automatically links up the `bar` attribute and the `doTheFoo` method to the `Foo` interface. 

```HTML    
<pre class="idl">
interface Foo {
  attribute Bar bar;
  void doTheFoo();
};
</pre>
<p>The <dfn>Foo</dfn> interface is nice. Let's you do stuff.</p>
<p>The <dfn data-dfn-for="Foo">bar</dfn> attribute, returns 🍺.</p>
<p>The <dfn data-dfn-for="Foo">doTheFoo</dfn>() method, returns nothing.</p>
```