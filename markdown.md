# Using Markdown with ReSpec

You can use markdown to write ReSpec based documents. There are two ways you can enable markdown in ReSpec. You can globally enable by setting [`respecConfig.format`](format) to "markdown", or you can enable markdown on individual [`data-include`](data-include) using [`data-include-format`](data-include-format) attribute.

The markdown is interpreted as [GFM](https://guides.github.com/features/mastering-markdown/) and you can mix HTML and markdown.

Now, we describe some of the ReSpec specific markdown behaviors and extensions.

## Headings

When using markdown, you don't need to add [`<section>` elements](section) manually. Each heading automatically creates a structure of nested section elements around it. For example,

```markdown
## Heading

Here's some text.

### Sub heading

More text.
```

will be transformed into:

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

### Custom Heading IDs

By default, ReSpec uses heading's text content to generate IDs for you. The IDs are mostly stable, i.e., we make sure updates to ReSpec do not change the IDs). Sometimes, you might want to add a different (perphaps shorter) ID. You can provide a custom heading ID as:

```markdown
## I'm a heading {#custom-heading-id}
```

## Code blocks

You can use triple-backticks to create code-blocks ([`<pre>`](pre-and-code-elements) elements). Syntax highlighting for various languages, including an advanced syntax highlighter for WebIDL is available out of the box.

Lets go through a few examples!

````markdown "example": "A simple code-block."
```
// ReSpec will try its best to guess the language for syntax highlighting.
console.log("hey!");
```
````

````markdown "example": "A simple code-block with language hint."
```js
// ReSpec will use the provided language hint for syntax highlighting.
// It's nice to be explicit.
console.log("hey!");
```
````

````markdown "example": "A WebIDL block."
```webidl
[Exposed=Window]
interface Paint { };
```
````

````markdown "example": "A pre.example."
```js "example": "I'm example title"
console.log(navigator.myAPI.rocks()); // of course
```

above is equivalent to writing:

<pre class="example js" title="I'm example title">
console.log(navigator.myAPI.rocks()); // of course
</pre>
````
