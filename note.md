Marks the contents of an element as a "Note". If the element is a 'block' element (e.g., div or p) then the Note will be generate in a block that includes a Note "header" and the contents of the element as the text of the note. If the element also has a title attribute, the content of the title will be appended to the header (e.g., "Note: This is my note"). 

Note that the content of the `title` attribute will be interpreted as HTML markup. See [`title` attributes](title-attributes) for details.

### Example

```HTML
<p class="note" title="Always rely upon native semantics">
Remember - if you are using the <code>role</code> attribute to say 
that a paragraph is a button, you are probably doing it wrong!
<p>
```

Would be exported as:

```HTML
<div class='note'>
    <div class='note-title'>
    <span>Note: Always rely upon native semantics<span>
    </div>
    <p>Remember - if you are using the <code>role<code> attribute to say 
    that a paragraph is a button, you are probably doing 
    it wrong!<p>
</div>
```
