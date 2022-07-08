# Using Markdown with ReSpec

You can use markdown to write ReSpec based documents. But you **must follow markdown's rules** carefully.
 
To enable markdown globally, set [`format`](format) to "markdown" (see below). And, in the `<body>`, make sure you keep all text flushed to the left. This is required because whitespace is significant in Markdown. 

```html "example": "Configuring ReSpec to use Markdown."
<html>
<title>Using Markdown</title>
<script>
var respecConfig = {
  format: "markdown"
}
</script>
<body>

<section id="abstract">

Showing how to use Markdown.

</section>

<section id="sotd">

Custom paragraph.

</section>

## This is a heading

I'm a paragraph.

 * list item
 * another list item

</body>
</html>
```

The markdown is interpreted as [Github Flavored Markdown (GFM)](https://guides.github.com/features/mastering-markdown/) and you can mix HTML and markdown.

Now, we describe some of the ReSpec specific markdown behaviors and extensions.

## Automatic sectioning

When using markdown, you don't need to add [`<section>` elements](section) manually. Each heading automatically creates a structure of nested section elements around it. For example:

```markdown "example": "Markdown headings and automatic section structure generation."
## Heading

Here's some text.

### Sub heading

More text.
```

will be transformed into:

<samp>

```html
<section>
  <h2>Heading</h2>
  <p>Here's some text.</p>
  <section>
    <h3>Sub heading</h3>
    <p>More text.</p>
  </section>
</section>
```

</samp>

### Custom Heading IDs

By default, ReSpec uses heading's text content to generate IDs for you. The IDs are mostly stable, i.e., we make sure updates to ReSpec do not change the IDs). Sometimes, you might want to add a different (perhaps shorter) ID. You can provide a custom heading ID as:

```markdown "example": "Specifying a custom ID for a heading."
## I'm a heading {#custom-heading-id}
```

## Figures

If there's a `title` part in a markdown image, it's treated as a `<figcaption>`. So:

```markdown "example": "Markdown syntax for img and figure."
![alt text 1](src1.png)
![alt text 2](src2.png "title")
```

is converted into:

```html
<img src="src1.png" alt="alt text 1" />
<figure>
  <img src="src2.png" alt="alt text 2" />
  <figcaption>title</figcaption>
</figure>
```

## Code blocks

You can use triple-backticks to create code-blocks ([`<pre>/<code>` elements](pre-and-code-elements)). Respec supports syntax highlighting of various languages.

````markdown "example": "A simple code-block with language hint."
```js
function hello() {
  console.log("hey!");
}
```
````

And for WebIDL:

````markdown "example": "A WebIDL block."
```webidl
[Exposed=Window]
interface Paint { };
```
````

### Links in code blocks
The markdown parser automatically adds converts any URLs into anchors, including those found in code blocks. 

You can turn off that functionality by adding the `.nolinks` css class. Sadly, it means you have to use a `<pre>` element to create a code block.

```HTML
<pre class="js nolinks">
async function() {
   // https://example.com won't link
   neitherWillThis("https://example.com");
}
</pre> 
```  


## HTML and Markdown

Please remember that markdown requires double newlines between an HTML tag and markdown text. 

Whitespace is also significant! So, keep things aligned to the left.

```markdown "example": "Mixing HTML and markdown."
<aside class="note">

## Markdown inside HTML tags

This is the correct way to insert markdown inside HTML.

</aside>
```
