## The `idl-index` id
Giving a `<section id=idl-index>` instructs ReSpec to gather all the Web IDL in your specification into a single section. This is convenient in that it gives readers a nice view of the overall shape of your API.

If you don't have any IDL in your spec, then it's probably best not to include this. ReSpec will still produce the section with a heading, but will inform the reader that you don't actually have any Web IDL in your spec. 

### Example of usage

```HTML
<section id="idl-index" class="appendix">
  <!-- All the Web IDL will magically appear here --> 
</section>
```

You can also add a custom header and content to your idl-index:

```HTML
<section id="idl-index" class="appendix">
   <h2>The Whole API!</h2>
   <p>This is what the whole thing looks like!</p>
   <!-- All the Web IDL will magically appear here --> 
</section>
```
