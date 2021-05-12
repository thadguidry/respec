## The `exclude` CSS class

The `exclude` CSS class allows HTML tags to opt-out of being processed by ReSpec. 

It is only supported on the following elements:

 * `<abbr class="exclude">TEXT</abbr>` - excludes the element from automatic abbreviation generation, such that TEXT won't be wrapped in `<abbr>`. 
 * `<pre class="idl exclude">`, excludes the WebIDL block from the IDL index. This is useful if you want to have an WebIDL example that is not actually part of your specification.

Some examples of usage:

```html "example": "excluding things"
<p>
  <abbr class="exclude" title="Ay-Bee-See">ABC</abbr>, but this won't be wrapped ABC.
</p>

<aside class="example" title="A hypothetical API">
  <pre class="idl exclude">
  interface ItsTwentyTwenty {
     undefined cantSeeNobody();
  };
  </pre>
</aside>
```