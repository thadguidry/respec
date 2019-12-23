Tells ReSpec to treat the document as being in a format other than HTML. Supported formats:

<dl>
  <dt>"markdown"</dt>
  <dd>Interpreted as <a href="https://guides.github.com/features/mastering-markdown/">GitHub flavored markdown</a>
</dl>

### Example
```JS
var respecConfig = {
  format: "markdown",
}
```

### Markdown 
When `format` is set to "markdown", you can use a mix of HTML and markdown: 

```HTML
## Using markdown
This will be a paragraph. 

<pre class="example" title="A markdown example">
function thisIsNice(){
  becauseWeCanUseMarkdown();
}

// And using markdown is pretty sweet!
const foo = "FOO";
while(foo){
  Promise.all([...lotsOfPromises])
}
</pre>
```

ReSpec will detect minimum common indentation and deduct them so that indented texts won't be consider as code blocks.

```markdown
<body>

  # This is indented markdown
  Since the minimum common indentation is 2, ReSpec will deduct them before parsing

    Indented code block

</body>
```


Please remember that markdown requires double newlines between an HTML tag and markdown text - but we do support single newline.

```markdown
<section>

## Markdown inside HTML tags
This is the correct way to insert markdown inside HTML.

</section>

<section>
## Markdown inside HTML tags
This is supported for backward compatibility sake.
</section> 
```

See also: [`nolink`](nolink) class to disable automatic linking in code blocks, if needed.

## Known issues

In some cases, the markdown processor gets confused. For example, given: 

```HTML
<pre class="example">
1 * 2 * 3;
</pre>
``` 

The "`*`"s get converted to an `<em>`. Obviously, that's not ideal. A workaround is to wrap the "*" in back-ticks, like this:

```HTML
<pre class="example">
1 `*` 2 `*` 3;
</pre>
```
