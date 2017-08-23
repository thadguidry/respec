## `data-cite`
Using `data-cite`, allows you do cite a spec directly in text by using a spec's id. You can look up an id either directly in ReSpec (using the ReSpec pill > "Search SpecRef DB") - or on [specref.org](http://www.specref.org/).   

Add "!" on the front of the spec ID makes it a "normative" citation. Excluding it, makes it informative.

It is currently supported on elements: 

  * `<a data-cite="">`
  * `<dfn data-cite="">`

### Example if IDL is not linked
If you fail to link a WebIDL interface, ReSpec generates a warning. This example shows how to link to the `Navigator` interface, and silence ReSpec's warning.

```HTML
<pre class="idl"> 
partial interface Navigator {
  // Other stuff
};
</pre>
<p>
  The <code><dfn data-cite="!HTML#navigator">Navigator</dfn></code> object 
  is defined in [[!HTML]].
</p>
```

Wrapping the `dfn` in a `code` element assures that other references to the definition are also marked up as `code`. 

### Example of usage with `dfn` element
This example shows how to use `data-cite` with an `dfn` element to cite an external spec.
 
```HTML
<!-- this automatically links to the WHATWG-DOM spec -->
<p><a>Fire an event</a> named "foo".</p> 
<p>The concept of 
  <dfn data-cite="!WHATWG-DOM#fire-an-event">fire an event</a>
  is defined in the [[!WHATWG-DOM]] spec.
</p>
```

### Example of usage with `a` element
```HTML
<p>
  <!-- normative citation to WHATWG DOM Spec --> 
  You then <a data-cite="!WHATWG-DOM#fire-an-event">
  fire an event</a>.
  
  <!-- Alternative -->
  You then <a data-cite="!WHATWG-DOM" data-cite-frag="fire-an-event">
  fire an event</a>.

  <!-- Link to  a subpage with a / -->
  If the page <a data-cite="!WHATWG-HTML/interaction.html#gains-focus">gains-focus</a>,
  do not lose it yourself.

  <!-- Informative citation to XML's XML Documents --> 
  Using <a data-cite="xml" data-cite-frag=dt-xml-doc>XML Documents</a>
  is fun.
</p>
``` 

That automatically creates the following:

 * Links the text "fire an event" to https://dom.spec.whatwg.org/#concept-event-fire
 * Links the test "gains focus" to https://html.spec.whatwg.org/multipage/interaction.html#gains-focus
 * Links to the XML spec, to the right anchor.
 * Add "WHATWG-DOM" to the Normative References section and "XML" to the Informative References section. 

