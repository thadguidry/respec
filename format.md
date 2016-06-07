Tells ReSpec to treat the document as being in a format other than HTML. Supported formats:

<dl>
  <dt>"markdown"</dt>
  <dd>Interpreted as <a href="https://guides.github.com/features/mastering-markdown/">GitHub flavored markdown</a>
</dl>

## Example
```JS
var respecConfig = {
  format: "markdown",
}
```

## Markdown 
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

ReSpec will do its best to correctly format the markdown. Please remember that markdown is supposed to be placed flush against the left margin - but we do support padded sections.

```HTML
<section>
  ## This is ok
  Event tho it is not flush to the left margin.
</section> 
```

See also: [`nolink`](nolink) class to disable automatic linking in code blocks, if needed. 