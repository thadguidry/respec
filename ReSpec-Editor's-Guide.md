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
    <section class="appendix">
      <h2>Change log</h2>
      <p>Recent changes to this specification from GitHub:</p>
      <rs-changelog from="some-git-tag"> </rs-changelog>
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
<head>
  <title>The Best Specification</title>
</head>
```

If you need to add additional markup to your title, you can still use a [`<h1>`](h1-element) with `id="title"`.

```html "example": "Specification title with custom markup."
<h1 id="title">The <code>Foo</code> API</h1>
```

### Subtitle
As with the title, you can also specify a subtitle as:

```html "example": "Specification subtitle with custom markup."
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

### Figures

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

Note: "lt" stands for "linked term"

The following all link back to "banana":

```HTML
<p>[=the best fruit=] or the [=yellow delicious=].</p>
```

#### Referencing terms from other specifications

To cross reference terms in other specifications, use the powerful ([`xref`](xref)) feature. It lets you list of specifications ReSpec may search a term from, and simply reference the term. For example, to reference "default toJSON steps" from the [WebIDL standard](https://heycam.github.io/webidl/#default-tojson-steps):

```html "example": "Referencing definitions from other specifications."
<script>
  var respecConfig = {
    xref: ["WebIDL"],
  };
</script>
<a>default toJSON steps</a>
```

#### Linking shorthands

There are two important shorthands for linking to definitions:

 * `[= term =]` for linking regular concepts, 
 * `{{ IdlThing }}` for linking WebIDL.

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

Specifications typically need to have references to other specifications on which they build to define their own technology. Managing references is a pain, as is linking to them every time that they are mentioned.

ReSpec takes the pain out of this with multiple features that are used together. First, when you need to refer to a given specification in the body of the text, simply do so using `[[FOO]]`, where FOO is the referenced specification's ID. ReSpec uses the context of the reference to work out if the reference is normative or informative. That is, if the reference is in a section marked "informative", or an example, note, or figure, then ReSpec automatically makes the reference non-normative. Otherwise, the reference is treated as normative. ReSpec will replace those with the link the reference and the appropriate markup around it.

If you need a non-normative reference in a normative section, you can use a `?` like so:

```html "example": "Non-normative reference in a normative section"
This is normative and MUST be followed. But, sometimes we need a non-normative
example reference [[?FOO]].
```

You can also link to a specification directly in text by using `[[[FOO]]]`, where FOO is the specification's id. When ReSpec finds the specification in the [references database](https://www.specref.org/), this gets converted to a link to the specification in the text i.e. `<a href="link-to-FOO">FOO Spec Title</a>`.

The difference between triple and double brackets syntax is that `[[[FOO]]]` links directly to the referenced specification, whereas `[[FOO]]` links to the entry in the "References" section (see below). Normative and informative references work similarly for `[[[FOO]]]` as they work for `[[FOO]]`, and `[[[?FOO]]]` can be used to have a non-normative reference in a normative section.

If you ever want to use some text in double brackets that doesn't represent a reference, for example to represent an ECMAScript internal slot, write it as `[[\InternalSlot]]` (note the leading backslash).

Then, using all the collected references from the document, ReSpec will generate a “References” section with subsections for normative and informative references (when they appear). Naturally, it will also fill in the references themselves, including the relevant bibliographical data, using the conventional markup. (Assuming they appear in our records.).

References are loaded from a [shared database](https://github.com/tobie/specref/tree/master/refs) that is maintained by a group of volunteers. If you need a reference that is not in the database, then the right thing to do is to [submit it for inclusion](https://github.com/tobie/specref#manual-changes) so that others can benefit from it too. However, if that is not possible then you can make use of the [`localBiblio`](localBiblio) configuration option.

The only things you therefore need to know for references are the reference names of the specifications you wish to refer to (as well as to how to add your own to the database). The names are usually rather logical, and most of the time can be guessed. In other cases, you can go look for them in the central bibliographical database that is maintained at [specref.org](https://www.specref.org/).

### Extra links at top of the document

There are times when you might need extra links or other important information to appear together with other links at the top of the document.

ReSpec supports adding additional links by specifying an `otherLinks` property in the configuration. The values for this configuration option are rich and complex, so are detailed in the reference section for [`otherLinks`](otherLinks).

### Custom Styling

If you wish to add your own additional styles to your document, just use the regular `<link>` and `<style>` elements. Be warned however that the W3C styles will always be added after yours, so if you wish to override them you will need to use more specific selectors.

## Essential W3C Boilerplate

W3C boilerplate is extremely repetitive, but beneath the tedium is a wealth of options and subtle variations that are precisely what makes crafting the boilerplate by hand so hard to get right. This covers options for specification maturity, publication dates, alternatives (editor's drafts, other versions, other formats...), legalese variants, the various W3C specification URLs, the people writing it, information about the working group, and core sections such as Abstract, Status of this Document (SotD), and Conformance.

We will start by using an example of a basic specification very similar to the one used in the previous section.

### shortName

Specifications typically require having a "short name", which is the name used (amongst other places) in the canonical "<https://w3.org/TR/short-name/>" URLs. This is specified using the [`shortName`](shortName) option, as seen in the example above.

### Working Group Information

W3C documents are produced by groups of some sort: Working Groups (WG), Interest Groups (IG), the TAG, and Community or Business Groups (CG, BG). For simplicity, we will be referring to all of the above as "Working Groups", since one should not be required to understand the many subtleties of the W3C Process in order to write a good specification. Which group a spec belongs to is denoted by the [`group`](group) configuration option. A list of valid group names can be found at: https://respec.org/w3c/groups/.

When these groups release a document, they must include some information that is relevant and specific to them — all of this information is required. Documents produced in other situations (e.g., Submissions, unofficial drafts, etc.) don't require these options.

The result of changing these configuration options can be seen in the "Status of this Document" section.

### Specification Status

At any given time a specification must be in a given status. The [`specStatus`](specStatus) option indicates which status that is. Typically, a status has implications in terms of what other options may be required. For instance, a document that is intended to become a Recommendation eventually and that is not the First Public Working Draft (FPWD) of that specification will require [`previousPublishDate`](previousPublishDate) and [`previousMaturity`](previousMaturity) to be specified.

Note: The process of publishing specifications typically involves releasing multiple versions in a row that have specific dates (so that people can see the evolution, and also for IP reasons). Additionally, some specification statuses involve delimited review periods. These are all specified using date-related options. The format used for all dates is `YYYY-MM-DD`, except when only year is required, in which case it is a 4-digit number.

The [`specStatus`](specStatus) section list all the possible status values.

### Editor's Drafts

Most groups maintain some form of version control system which is exposed over the web so that people can keep track of what edits are being made to a specification in between official releases. It is often useful to point to such documents, including from released specifications, so that people wishing to report issues can make sure that they aren't already fixed, and in general get the very latest version. In fact, [Editor Drafts (ED)](specStatus#specStatus-ed) are often considered to be the most useful reference to have to a group's work.

### Related Documents

A specification does not always travel alone. In some cases, there can be an accompanying [`errata`](errata) document, which you can specify by providing a URL for it.

Likewise, some groups occasionally find it desirable to produce alternative formats in which people may read the specification. For instance, to access it on an ebook reader you may produce an ePub alternative, or if your specification is intended to be read by printing devices you might use PDF. The [`alternateFormats`](alternateFormats) option can be used to specify these alternate representations.

If your specification has a test suite (it does, right?), then you can point to it using [`testSuiteURI`](testSuiteURI). And when your tests have successfully passed in enough implementations, you will want to document that in an implementation report which you can link to using [`implementationReportURI`](implementationReportURI).

### Copyrights & Patents

All the best fun in standards brought to you neatly packaged in a single section!

By default, W3C specifications all get the regular W3C copyright notice and archaic document license, except for unofficial documents which are under CC-BY. In some cases however, you will want to [modify](license) that.

For all document types other than "unofficial", you can use [`additionalCopyrightHolders`](additionalCopyrightHolders) to indicate that the copyright is shared not just amongst the W3C's hosts but also with other organizations (typically this is used for documents developed jointly with another <abbr title="Standards Developing Organization">SDO</abbr> such as the IETF). For unofficial documents, this simply replaces the default CC-BY license.

If you wish the copyright date to span several years rather than just the year matching [`publishDate`](publishDate) (e.g., 2009-2013) then you can use [`copyrightStart`](copyrightStart).

At times, the patent situation of a specification may warrant being documented beyond the usual boilerplate. In such cases, use [`addPatentNote`](addPatentNote). Its content will get injected at the end of the SotD section (right after the patent policy paragraph).

### Note & Recommendation Tracks

If you are working on a new version of an existing Recommendation, then it is required that your document point to that previous version. This is done using the [`prevRecShortname`](prevRecShortname) and [`prevRecURI`](prevRecURI) options, which respectively provide the [`shortName`](shortName) for the existing Recommendation (e.g., "SVG", as opposed to "SVG2") and its URL. If [`prevRecURI`](prevRecURI) is not specified but [`prevRecShortname`](prevRecShortname) is, the latter will be used to generate the former by prefixing "<https://www.w3.org/TR/>" to it. Note however that while in the overwhelming majority of cases this works, it is not recommended to use this approach since if the Recommendation is later [Rescinded](specStatus#specStatus-rscnd), the link will be stale. Instead, use the dated link to the Recommendation.

The process for the publication of Notes has been a source of confusion. When producing multiple drafts of a Note in succession, some groups have traditionally simply published them all as Notes one after the other, indicating in the abstract or SotD if they intend to work further on this document or if it is final. Since Notes are not normative and entail no IP concerns, they don't need an elaborate process and this process was perhaps not entirely bad. However, that's not how Notes are commonly handled nowadays.

The currently recommended process for Notes is closer to that which is used for Recommendation Track documents, typically: FPWD -> WD (n times) -> LC -> Note. Given that any group may decide at any time to release a Rec-Track document as a Note instead (often because it has been abandoned), this is Process-correct but it does involve jumping through hoops (notably for IP) that likely should not be needed. It has been explained to me several times why this switch took place, but I can never recall the justification. At any rate, if you are confused with the Note track process but wish to stick to it, you can do so by setting [`noRecTrack`](noRecTrack) to true.

### Best Practice Documents

Best practices may be shown, numbered, and formatted using a div with class practice containing a [`p > span.practicelab`](practicelab) with the practice's title and a [`p.practicedesc`](practicedesc) with description of the practice.

This feature is rarely used, and likely needs to be updated. If you wish to use it in anger, please contact me and we can improve support for it.

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

### Advanced: Specifying Configuration via URL

Some of ReSpec's configuration options can be specified in the query string, and they override the options specified in the source. For example, you can override the `subtitle` by, for example, doing the following: `index.html?subtitle=This is a subtitle`.

This is useful for quickly overriding configuration options without needing to directly edit the document itself (e.g., for the purpose of exporting a document draft with a different `specStatus`). 

