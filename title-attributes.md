Some CSS classes ([`ednote`](ednote), [`example`](example), [`note`](note)) use the `title` attribute to add text alongside the generated header.

Note that the contents of the `title` attribute follow regular [attribute values](https://w3c.github.io/html/syntax.html#attribute-values) escaping rules, and the unescaped result gets interpreted as markup. In other words, `<` and `&lt;` will be interpreted as the beginning of a start tag, and the double-escaped `&amp;lt;` is needed to produce the `<` character.

### Example
```HTML
<p class='note' title='About <code>=></code> in EcmaScript'>It rocks!</p>
<p class='note' title='About the &amp;lt;code&amp;gt; tag in HTML'>It rocks too!</p>
```

Would be exported as:

```HTML
<div class="note">
  <div class="note-title marker">
    <span>Note: About <code>=&gt;</code> in EcmaScript</span>
  </div>
  <p>It rocks!</p>
</div>

<div class="note">
  <div class="note-title marker">
    <span>Note: About the &lt;code&gt; tag in HTML</span>
  </div>
  <p>It rocks too!</p>
</div>
```