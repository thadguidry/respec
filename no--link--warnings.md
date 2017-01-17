## `no-link-warnings` CSS class

Setting "no-link-warnings" on a `<pre>` element stops ReSpec from warning you if you have missing links. 

**We discourage the use of this feature**, because you could miss defining important things. However, if you know you don't want to link certain things (e.g., a Dictionary and an interface) 

### Example
In the following example, the semantics of the attributes is the same in both the dictionary and the interface. As such, it might not make sense to provide formal definitions for the dictionary items.
  
```HTML
<pre class="idl no-link-warn">
dictionary PointerEventInit: MouseEventInit {
  long pointerId = 0;
  double width = 1;
};

[Constructor(DOMString type, optional PointerEventInit eventInitDict)]
interface PointerEvent: MouseEvent {
  readonly attribute long pointerId;
  readonly attribute double width;
};
</pre>
```