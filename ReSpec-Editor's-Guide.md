A ReSpec document is a HTML document that brings in the ReSpec script, defines a few configuration variables, and follows a few conventions. A very small example document would be:

```html "example": "A basic ReSpec document."
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Replace me with a real title</title>
    <script
      src="https://www.w3.org/Tools/respec/respec-w3c"
      class="remove"
      defer
    ></script>
    <script class="remove">
      // All config options at https://respec.org/docs/
      var respecConfig = {
        specStatus: "ED",
        editors: [{ name: "Your Name", url: "https://your-site.com" }],
        github: "some-org/mySpec",
        shortName: "dahut",
        xref: "web-platform",
        group: "my-working-group",
      };
    </script>
  </head>
  <body>
    <section id="abstract">
      <p>This is required.</p>
    </section>
    <section id="sotd">
      <p>This is required.</p>
    </section>
    <section class="informative">
      <h2>Introduction</h2>
      <p>Some informative introductory text.</p>
      <aside class="note" title="A useful note">
        <p>I'm a note!</p>
      </aside>
    </section>
    <section>
      <h2>A section</h2>
      <aside class="example">
        <p>This is an example.</p>
        <pre class="js">
        // Automatic syntax highlighting
        function someJavaScript(){}
        </pre>
      </aside>
      <section>
        <h3>I'm a sub-section</h3>
        <p class="issue" data-number="121">
          <!-- Issue can automatically be populated from GitHub -->
        </p>
      </section>
    </section>
    <section data-dfn-for="Foo">
      <h2>Start your spec!</h2>
      <pre class="idl">
        [Exposed=Window]
        interface Foo {
        attribute DOMString bar;
        undefined doTheFoo();
        };
      </pre>
      <p>The <dfn>Foo</dfn> interface represents a {{Foo}}.</p>
      <p>
        The <dfn>doTheFoo()</dfn> method does the foo. Call it by running
        {{Foo/doTheFoo()}}.
      </p>
      <ol class="algorithm">
        <li>A |variable:DOMString| can be declared like this.</li>
      </ol>
    </section>
    <section id="conformance">
      <p>
        This is required for specifications that contain normative material.
      </p>
    </section>
  </body>
</html>
```

### Including ReSpec in HTML documents

The following code is used to include a ReSpec document, usually in the `<head>`:

```html "example": "Including ReSpec into a HTML document."
  <script src="https://www.w3.org/Tools/respec/respec-w3c" class="remove" defer>
  </script>
  <script class="remove">
   var respecConfig = {
     // configuration options
   }
  </script>
```

ReSpec is regularly updated and this will allow you to automatically benefit from bug and security fixes and enhancements.

### Configuring ReSpec

ReSpec is configured using a JSON-like object, which is assigned to a `respecConfig` JavaScript variable:

```HTML "example": "The respecConfig global configuration object."
  <script class="remove">
   var respecConfig = {
     // configuration options
   }
  </script>
```

All the configurations options are listed in this document. 

## Structure

ReSpec documents are just HTML document and rely on HTML structural elements, in particular `<section>`, `<aside>`, `<h2>-<h6>`, `<dl>`, `<ol>` etc. In this section, we discuss how to specify various aspects of a typical document.
   
### Title

The [`<title>`](title-element) of the document is reused as the title of the specification in the resulting document's `h1`. That way, they are always in sync and you need not worry about specifying it twice.

```html "example": "Setting a title"
<title>The Best Specification</title>
```

If you need to add additional markup to your title, you can still use a [`<h1>`](h1-element) with `id="title"`.

```html "example": "Specification title with custom markup."
<h1 id="title">The <code>Foo</code> API</h1>
```

### Subtitle
As with the title, you can also specify a subtitle as:

```html "example": "Specification subtitle with custom markup."
<h1 id="title">The <code>Foo</code> API</h1>
<h2 id="subtitle">Subtitle here</h2>
```

Which is rendered as:

![Screenshot of subtitle](https://user-images.githubusercontent.com/870154/108663267-444b7380-7524-11eb-95b4-e94911c907c0.png)

You can also specify a [`subtitle`](subtitle) configuration option in the ReSpec config, but using the markup above is preferred. 

### Editors & Authors

Every specification will likely have editors (at least one) and/or authors. It is left to users or standards organizations to differentiate between editors and authors (e.g., from W3C, <cite>[what does an editor do?](https://lists.w3.org/Archives/Member/chairs/1999JanMar/0056)</cite>).

See the [Person objects](person) for the full list of properties you can assign.  

```js "example": "Specifying editors and authors."
var respecConfig = {
  // ...
  editors: [
    {
      name: "Robin Berjon",
      url: "https://berjon.com/",
      company: "W3C",
      companyURL: "https://w3c.org/",
      mailto: "robin@berjon.com",
      note: "A Really Cool Frood",
    },
    {
      name: "Billie Berthezène-Berjon",
      company: "Catwoman",
    },
  ],
  authors: [
    {
      name: "Ada Lovelace",
      url: "https://findingada.com/",
      company: "Aristocracy",
      retiredDate: "1852-11-27",
    },
  ],
  // ...
};
```

Is rendered as:

<img width="451" alt="Screenshot of Editors and Authors" src="https://user-images.githubusercontent.com/870154/108663393-8ffe1d00-7524-11eb-84b2-3baa74e8822d.png">

### Sections

ReSpec-based specifications require you to wrap your content in `<section>` elements. We provide specific information and examples on [how to use `<section>` elements](section).

Sections, subsections, appendices, and whatever other structural items are marked up in ReSpec using `<section>` elements.

```html "example": "Sections and sub-sections."
<section>
  <h2>A section</h2>
  <p>Some text.</p>
  <section class="informative">
    <h3>I'm a sub-section</h3>
    <p>Subsetion text.</p>
  </section>
</section>
```

Which is rendered as: 

<img width="904" alt="Screenshot of a  section and a sub-section=" src="https://user-images.githubusercontent.com/870154/108663975-e61f9000-7525-11eb-946d-a8b9b5518eb3.png">

As shown, sections are automatically numbered and uniquely `id`'s for you. Use `<section id="my-id">` specify your own id.

ReSpec sections understand some specific CSS classes: [`introductory`](introductory), [`informative`](informative), and [`appendix`](appendix).

Note: To you can use the special syntax `[[[!#some-id]]]` to link to a section.

### Table of Contents

In W3C specs, a table of contents (ToC) is generated automatically and placed after the "Status of This Document". 

See also the [maxTocLevel](maxTocLevel) option to limit how deep the ToC is. 

Set the configuration option [`noTOC`](noTOC) to `true` to remove the table of content.

### Figures & table of figure

To include a figure, use the `<figure>` and `<figcaption>` elements. They automatically get an `id` and figure number.

```html "example": "Figure and list of figures."
<figure id="figure">
  <img src="figure.svg" alt="W3C Logo" />
  <figcaption>The W3C logo</figcaption>
</figure>
```

Which renders as:

<img width="276" alt="Screenshot of a figure and figure caption" src="https://user-images.githubusercontent.com/870154/108666252-d0609980-752a-11eb-8f9b-3f5c759f41bc.png">

Automatic linking to figures works just as it does for sections, with `[[[!#some-figure]]]`.

To add a "List of Figures", include `<section id="tof">` anywhere in the document. ReSpec will do its best to guess if it should be an appendix, introductory, or just a regular section.

```html "example": "Generating a list of figures" 
<section id="tof" class="appendix"></section>
```

Renders as:

<img width="247" alt="Screenshot showing a list of figures" src="https://user-images.githubusercontent.com/870154/108666350-01d96500-752b-11eb-96c0-ae00412c2dfc.png">

### Examples

Any `<pre class="example">` or `<aside class="example">` gets the additional example header and style. Content inside [pre elements](pre-and-code-elements) is syntax highlighted. You can specify the language in the class attribute, for example `<pre class="js">`. 

```html "example": "Creating an example"
<aside class="example" title="How to use it">
  <p>
    This is how to use it.
  <p>
  <pre class="js">
    function myCoolFunction() {
      // stuff goes here...
    }
  </pre>
</aside>
```

which is rendered as:

<img width="354" alt="Example of an example" src="https://user-images.githubusercontent.com/870154/117596699-4322fd80-b187-11eb-80d5-04244939dd64.png">

Supported highlighters:

* abnf
* css
* http
* js or javascript 
* json 
* xml

You can disable syntax highlighting on a pre element by adding a "[nohighlight](nohighlight)" class.

### External Includes

Including external content into ReSpec is done using the [`data-include`](data-include) attribute, which points to a URL. 

```HTML html "example": "Including external content"
<section data-include="some.html"></section>
```

You can specify [`data-include-format='text'`](data-include-format) to include content as text, and therefore only process it as much as text is expected to be. The only recognized value are "text", "markdown", and "html" (default).

**Note:** `data-include` relies on the browser's ability to retrieve the resource and is governed by CORS (and the browser's security model in general). Browsers will generally block cross origin request, which means `file://` URLs will likely fail. For more information, please see ["Cross-Origin Resource Sharing (CORS)"](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). You can usually get around this by starting a local web server (e.g., by running `python -m http.server 8000` from the command line). 

Use [`data-oninclude`](data-oninclude) to perform transformation on content included with `data-include`.

### Conformance section

ReSpec specifications are RFC2119/RFC8174 keyword aware (i.e., it knows about "MUST", "SHOULD NOT", etc.). 

Adding a `<section id="conformance">` tells ReSpec that the specification is dealing with "normative" statements. ReSpec can then warn if RFC2119 keywords are accidentally used in informative/non-normative contexts.

```HTML "example": "Using RFC2119 keywords"
<section>
  <h2>Requirements</h2>
  <p>A user agent MUST do something.</p>
</section>
<section id="conformance"></section>
```

Renders as:

<img width="827" alt="Screenshot of RFC2119 usage" src="https://user-images.githubusercontent.com/870154/108667340-19195200-752d-11eb-802f-a421afdeaa6d.png">


### Abbreviations

Mark abbreviations using `<abbr title="abbreviation">abbr</abbr>`. ReSpec will then wrap all matching instances abbreviations with `<abbr>`.   

```HTML 
<p>
 The <abbr title="World Wide Web">WWW</abbr>.
</p>
<p>
 ReSpec will automatically wrap this WWW in an abbr.
</p>
```

### Inline Code

To mark some text as code, use `<code>` or backticks (`).

### Definitions and linking

To define a term, simple wrap it in a `<dfn>` element. 

```HTML
<dfn>some concept</dfn>
```

Then, to link to it, just do:

```HTML
<a>some concept</a>

or 

[=some concept=]
```

### Automatic pluralization 

For simple/single nouns, ReSpec handles pluralization automatically:

```html
<dfn>banana</dfn>
<!- these are the same -->
These [=bananas=] are better than those <a>bananas</a>
``` 

### Aliases and synonyms

Sometimes a defined terms needs additional related terms or synonyms. In those cases, you can use the [`data-lt`](data-lt) attribute on the `dfn` element:

```html
<dfn
  data-lt="the best fruit|yellow delicious">
  banana
</dfn>
```

Note: "lt" stands for "linked term".

The following all link back to "banana":

```HTML
<p>[=the best fruit=] or the [=yellow delicious=].</p>
```

#### Referencing terms from other specifications

The powerful ([`xref`](xref)) feature let's you reference terms and concepts in other specifications. For example, to reference "default toJSON steps" from the [WebIDL standard](https://heycam.github.io/webidl/#default-tojson-steps):

```html "example": "Referencing definitions from other specifications."
<script>
  var respecConfig = {
    xref: ["WebIDL"],
  };
</script>
<a>default toJSON steps</a>
```

To search for terms + specs your can link to, you can use the XREF UI at http://respec.org/xref/. Below is a screenshot of what the UI looks like:

<img width="584" alt="Screenshot of the XREF search interface" src="https://user-images.githubusercontent.com/870154/117607513-796c7700-b19f-11eb-8694-c9beb10a4870.png">

#### Linking shorthands

There are two important shorthands for linking to definitions:

 * `[=term=]` for linking regular concepts, 
 * `{{IdlThing}}` for linking WebIDL.

Shorthand syntax works for referencing external terms as well as locally defined terms. It's best practice is to use shorthands all the time.

```html "example": "Linking using shorthands."
<script>
  var respecConfig = {
    xref: ["webidl", "payment-request"],
  };
</script>
<section>
  <!--
    Here, we reference the "default toJSON steps" concept defined in [[WebIDL]] standard,
      and the PaymentRequest interface (WebIDL) defined in [[payment-request]] standard.
  -->
  <p>[=default toJSON steps=] for the {{PaymentRequest}} interface are ...</p>

  <!-- We also define a concept "feline", and an interface "Cat". -->
  <p>A <dfn>feline</dfn> has 4 legs and makes sound.</p>
  <pre class="idl">
  interface Cat {}
  </pre>

  <!-- ...and we can reference them as: -->
  <p>A {{Cat}} is a [=feline=] if it meows.</p>
</section>
```

Read more about linking and other shorthands in the [Shorthands Guide](Shorthands-Guide).

### References

To reference another specification use the `[[SPEC-ID]]` syntax, where SPEC-ID is the referenced specification's in the [Specref ecosystem](http://specref.org/) - which includes most W3C, WHATWG, ECMA, and IETF documents. 

When you reference a specification, your document automatically gets a bibliography section. 

```html "example": "Reference to HTML spec"
The [^link^] element is defined in the [[HTML]] spec. 
```

Which renders as: 

<img width="595" alt="Screenshot to text above and automatically generated References section" src="https://user-images.githubusercontent.com/870154/117608243-06fc9680-b1a1-11eb-8835-f2c99521eaa9.png">

If you would like the reference a specification by its full name, you can use the three square brackets to "expand it":

```HTML
<p>
  The [^link^] element is defined in the [[[HTML]]].
</p>
``` 

Renders as:

<img width="401" alt="The link element is defined in the HTML Standard." src="https://user-images.githubusercontent.com/870154/117608503-8d18dd00-b1a1-11eb-94bb-53a0c61f20b3.png">

#### Normative VS informative references
ReSpec uses the context of the reference to work out if the reference is normative or informative: if the reference is in a section marked "informative", or an example, note, or figure, then ReSpec automatically makes the reference non-normative. Otherwise, the reference is treated as normative. 

If you need a non-normative reference in a normative section, you can use a `?` like so:

```html "example": "Non-normative reference in a normative section"
This is normative and MUST be followed. But, sometimes we need a non-normative
example reference [[?FOO]].
```

### Escaping references

To escape a reference, use a backslash "`[[\`". For example, "`[[\InternalSlot]]`".

### Adding missing references 
If a reference is missing, please [submit it to Specref](https://github.com/tobie/specref#manual-changes). This helps the whole community. 

If that is not possible, you can use of the [`localBiblio`](localBiblio) configuration option to define your own references.

### Extra links at top of the document

ReSpec supports adding additional links by specifying an `otherLinks` property in the configuration. The values for this configuration option are rich and complex, so are detailed in the reference section for [`otherLinks`](otherLinks).

### Custom Styles

If you wish to add your own additional styles to your document, just use the regular `<link>` and `<style>` elements.

### Advanced: Specifying Configuration via URL

Some of ReSpec's configuration options can be specified in the query string, and they override the options specified in the source. For example, you can override the `subtitle` by, for example, doing the following: `index.html?subtitle=This is a subtitle`.

This is useful for quickly overriding configuration options without needing to directly edit the document itself (e.g., for the purpose of exporting a document draft with a different `specStatus`). 

## W3C Boilerplate

ReSpec provides useful options to handle the creation of the W3C boilerplate that goes into the "status of this document" and other key sections. 

### Short name

Specifications typically require having a "short name", which is the name used (amongst other places) in the canonical "<https://w3.org/TR/short-name/>" URLs. This is specified using the [`shortName`](shortName) option, as seen in the example above.

### Working Group Information

The [`group`](group) configuration option lets you state to which working/business/community group your specification belongs to. The list of group identifiers can be found at: https://respec.org/w3c/groups/.

Setting the `group` option sets the IPR Policy for your document, which is reflected in the "Status of this Document" section.

### Specification Status

The [`specStatus`](specStatus) option denotes the status of your document, per the [W3C Recommendation track](https://www.w3.org/2020/Process-20200915/#rec-track). Typically, a status has implications in terms of what other options required. For instance, a document that is intended to become a Recommendation will require [`previousPublishDate`](previousPublishDate) and [`previousMaturity`](previousMaturity). 

The [`specStatus`](specStatus) section list all the possible status values.

### Copyrights & Patents

By default, W3C specifications all get the regular W3C copyright notice. In some cases however, you will want to [modify](license) that.

For all document types other than "unofficial", you can use [`additionalCopyrightHolders`](additionalCopyrightHolders) to indicate that the copyright is shared not just amongst the W3C's hosts but also with other organizations (typically this is used for documents developed jointly with another <abbr title="Standards Developing Organization">SDO</abbr> such as the IETF). For unofficial documents, this simply replaces the default CC-BY license.

If you wish the copyright date to span several years rather than just the year matching [`publishDate`](publishDate) (e.g., 2009-2013) then you can use [`copyrightStart`](copyrightStart).

At times, the patent situation of a specification may warrant being documented beyond the usual boilerplate. In such cases, use [`addPatentNote`](addPatentNote). Its content will get injected at the end of the SotD section (right after the patent policy paragraph).

### Non-Rec Track docs

If your document is not intended to be on the W3C Recommendation Track, set [`noRecTrack`](noRecTrack) to true.

### Best Practice Documents

Best practices may be shown, numbered, and formatted using a div with class practice containing a [`p > span.practicelab`](practicelab) with the practice's title and a [`p.practicedesc`](practicedesc) with description of the practice.

```html
<div class="practice">
  <p>
    <span id="some-practice" class="practicelab">Title of the practice</span>
  </p>
  <p class="practicedesc">
    More detailed description of the practice.
  </p>
</div>
```

If a `section` element with id `bp-summary` is present, then a summary list of best practices will be placed in it, linked to the best practices that have an id on the span element.

```html
<section id="bp-summary"></section>
```

