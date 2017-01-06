## `data-cite`
Using `data-cite`, allows you do cite a spec directly in text by using a spec's id. You can look up an id either directly in ReSpec (using the ReSpec pill > "Search SpecRef DB") - or on [specref.org](http://www.specref.org/).   

Add "!" on the front of the spec ID makes it a "normative" citation. Excluding it, makes it informative.

### Example of usage
```JS
<p>
  <!-- normative citation to WHATWG DOM Spec --> 
  You then <a data-cite="!WHATWG-DOM" data-cite-frag="fire-an-event">
  fire an event</a>.

  <!-- Informative citation to XML's XML Documents --> 
  Using <a data-cite="xml" data-cite-frag=dt-xml-doc>XML Documents</a>
  is fun.
</p>
``` 

That automatically creates the following:

 * Links the text "fire an event" to https://dom.spec.whatwg.org/#concept-event-fire
 * Links to the XML spec, to the right anchor.
 * Add "WHATWG-DOM" to the Normative References section and "XML" to the Informative References section. 

