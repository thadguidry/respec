# `no-link-warnings`

Setting "no-link-warnings" class on a `<pre>` element stops ReSpec from warning you if you have missing links.

Note: **We discourage the use of this feature**, because you could miss defining important things. However, if you know you don't want to link certain things (e.g., a Dictionary and an interface).


In the following example, the semantics of the attributes is the same in both the dictionary and the interface. As such, it might not make sense to provide formal definitions for the dictionary items.

```html "example": "Disable warnings about missing or broken links."
<pre class="idl no-link-warnings">
dictionary PointerEventInit: MouseEventInit {
  long pointerId = 0;
  double width = 1;
};

interface PointerEvent: MouseEvent {
  constructor(DOMString type, optional PointerEventInit eventInitDict);
  readonly attribute long pointerId;
  readonly attribute double width;
};
</pre>
```
