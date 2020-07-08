# `nohighlight`

Indicates that a code block should not be syntax highlighted.


This block will not be syntax highlighted:

```html "example": "Disable syntax highlighting."
<pre class="nohighlight">
function foo(){
  const a = "foo!";
}
</pre>
```

But this one will be syntax-highlighted by default:

```html "example": "All pre elements are syntax highlighted by default."
<pre>
function foo(){
  const a = "foo!";
}
</pre>
```
