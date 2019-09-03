***
**This feature is currently in beta.**
***

You can enable automatic external reference linking (xref) in ReSpec as:

``` js
var respecConfig = {
  xref: true,
};
```
Additional xref configuration options with usage examples can be seen [here](https://github.com/w3c/respec/wiki/xref).

## Linking regular definitions

In most cases, you can just wrap a term in `<a>` (like `<a>TERM</a>`) and ReSpec will be able to link it correctly. Examples:

``` html
<a>event handler</a> <!-- https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers -->
<a>URL parser</a> <!-- https://url.spec.whatwg.org/#concept-url-parser -->
<!-- The search terms here are case insensitive. -->
```

If we want to link a term which is not the same as what we want to display to user, we can make use of `data-lt` attributes, as:

``` html
<a data-lt="url parser">parsing URLs</a>
```

We can also add link to `<dfn>` as shown below.

``` html
<!-- before -->
<dfn data-cite="HTML/webappapis.html#event-handlers">event handler</dfn>
<!-- now -->
<dfn class="externalDFN">event handler</dfn>
```

## Linking IDL terms

We can link IDL terms using an inline shorthand. ReSpec parses the string inside `{{{ }}}` as IDL and adds corresponding external links. Examples:

``` html
<p>{{{ Window }}}</p>
<p>{{{ Credential.[[CollectFromCredentialStore]] }}}</p>
```

``` html
{{{ Window }}}
<!-- links as:
  <code>
    <a href="https://html.spec.whatwg.org/multipage/window-object.html#window">Window</a>
  </code>
 -->

{{{ Window.event }}}
<!--
  <code>
    <a href="https://html.spec.whatwg.org/multipage/window-object.html#window">Window</a>.
    <a href="https://dom.spec.whatwg.org/#dom-window-event">event</a>
  </code>

  links "event" attribute corresponding to "Window" interface (and not any other definition for "event")
 -->

{{{ EventTarget.addEventListener(type, callback) }}}
<!--
  <code>
    <a href="https://dom.spec.whatwg.org/#eventtarget">EventTarget</a>.
    <a href="https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener">addEventListener</a>
    (<var>type</var>, <var>callback</var>)
  </code>

  links "EventTarget" interface and its "addEventListener(type, callback)" method.
 -->

{{{ TextDecoderOptions["fatal"] }}}
<!--
  <code>
    <a href="https://encoding.spec.whatwg.org/#textdecoderoptions">TextDecoderOptions</a>
    ["<a href='https://encoding.spec.whatwg.org/#dom-textdecoderoptions-fatal'>fatal</a>"]
  </code>

  links "TextDecoderOptions" as dictionary and "fatal" as it's member.
 -->
```

IDL terms are case sensitive.

## Handling ambiguity

There can be cases when a term is defined in multiple specifications. Then, ReSpec will generate warnings saying "Error: Linking an ambiguous dfn". As an Editor, you will need to help ReSpec disambiguate the query.

The ambiguity could be due to a "bad context". ReSpec will point you to the terms with error, so you can make a fix, if possible.

### `data-cite`

Use [`data-cite`](data-cite) attributes to help ReSpec disambiguate results. `data-cite` attributes can be added on any element that is a parent of current linking element. The content of `data-cite` on all parent elements (other than the linking element itself) is a space separated list of spec short names that we expect the links inside that parent element to refer to.

It is recommended to add `data-cite` attribute on the `<body>`. For example, if our document refers to terms in WebIDL, Infra, DOM specs, we can add `data-cite` as:

``` html
<body data-cite="webidl infra dom">
```

`data-cite` can be added on any element, for example, on a `<section>` or `<p>`. Only the closest `data-cite` is used for helping in linking. The more specific the content in `data-cite` is, lesser are the chances of getting an ambiguity error.

### Inline citations

ReSpec can also make use of a common spec writing pattern to help disambiguate external terms. Example:

``` html
<p>Look in [[WEBIDL]] spec for the term <a>object</a></p>
<p>The term <a>object</a> is looked in [[html]] spec</p>
```

## Missing definitions

In case ReSpec cannot find find an external reference, it will give a warning saying "Error: No matching dfn found".

The warning is not necessarily due to non-existence of a term. It could be due to a "bad context". ReSpec will point you to the terms with error, so you can make a fix, if possible.

You may require to add `data-cite` attributes for ReSpec to look for the term in the right spec.