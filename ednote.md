Marks the contents of an element as an "Editor's Note". If the element is a 'block' element (e.g., div or p) then the Editor's Note will be emitted in a block that includes an Editor's Note "header" and the contents of the element as the text of the note. If the element also has a title attribute, the content of the title will be appended to the header (e.g., "Editor's Note: This is my note").

Note that the content of the `title` attribute will be interpreted as HTML markup. See [`title` attributes](title-attributes) for details.

### Example
```HTML 
<p class="ednote" title="This section will be reformatted">
We are aware that the formatting of this section isn't great.  We
will fix it in the next revision!
<p>
```

Would be emitted as:

```HTML
<div class='ednote'>
    <div class='ednote-title'>
    <span>Editor's Note: This section will be reformatted<span>
    </div>
    <p>We are aware that the formatting of this section isn't great. We
    will fix it in the next revision!<p>
</div>
```
