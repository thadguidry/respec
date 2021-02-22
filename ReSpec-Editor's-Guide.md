A ReSpec document is a HTML document that brings in the ReSpec script, defines a few configuration variables, and follows a few conventions. A very small example document would be:

```html "example": "A basic ReSpec document."
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Replace me with a real title</title>
  <script src="https://www.w3.org/Tools/respec/respec-w3c" class="remove" defer></script>
  <script class="remove">
   // All config options at https://respec.org/docs/ 
   var respecConfig = {
      specStatus: "ED",
      editors: [
        { name: "Your Name", url: "https://your-site.com" },
      ],
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
    <p>
      Some informative introductory text. 
    </p>
    <aside class="note" title="A useful note">
      <p>I'm a note!</p>
    </aside>
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
  </section>
  <section id="conformance">
    <p>This is required for specifications that contain normative material.</p>
  </section>
</body>
</html>
```

### Including ReSpec

The following code is used to include a ReSpec document:

```JS
  <script src="https://www.w3.org/Tools/respec/respec-w3c" class="remove" defer></script>
  <script class="remove">
   var respecConfig = {
     // configuration options
   }
  </script>
```

ReSpec is regularly updated and this will allow you to automatically benefit from bug and security fixes and enhancements.

### Specifying Configuration via JS

ReSpec is configured using a JSON-like object, which is assigned to a `respecConfig` JavaScript variable:

```JS
  <script class="remove">
   var respecConfig = {
     // configuration options
   }
  </script>
```

### Specifying Configuration via URL

Some of ReSpec's configuration options can be specified in the query string, and they override the options specified in the source. For example, you can override the `subtitle` by, for example, doing the following: `index.html?subtitle=This is a subtitle`.

This is useful for quickly overriding configuration options without needing to directly edit the document itself (e.g., for the purpose of exporting a document draft with a different `specStatus`). 

## Structure

This chapter covers all the aspects of a ReSpec document's structure that were not covered as part of the very basics. As usual, let's start with an [**example**](https://github.com/w3c/respec/blob/develop/examples/basic.html). It is fairly long as it needs a decent amount of content in order to exemplify some features, but it should nevertheless be easy to understand. Go on, open the [**example**](https://github.com/w3c/respec/blob/develop/examples/basic.html) in new tab (omitted here for brevity).


### Title and Subtitle

As noted in the previous chapter, the [`<title>`](title-element) of the document is reused as the title of the specification in the resulting document's h1. That way, they are always in sync and you need not worry about specifying it twice. However, if you need to add additional markup to your title, you can still use a [`<h1>`](h1-element) with `id="title"`.

```html "example": "Specification title with custom markup."
<h1 id="title">The <code>Foo</code> API</h1>
```

Optionally, you can also specify a [`subtitle`](subtitle) configuration option in the ReSpec config. The subtitle configuration option takes a simple string that will be used as a subtitle for the specification, right under the title. As with the title, you can also specify a subtitle as:

```html "example": "Specification subtitle with custom markup."
<h2 id="subtitle">Subtitle here</h2>
```


### Editors & Authors

Every specification must have some editors (at least one) and may have some authors (and maybe some former editors/authors also).

Editors are the people in charge of the document. Authors are people who produced substantial contributions, but did not manage the document per se. Most of the time authors are not specified, but that practice varies between groups:

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

Editors and authors are specified as [Person objects](person).

### Sections

ReSpec-based specifications require you to wrap your content in `<section>` elements. We provide specific information and examples on [how to use `<section>` elements](section).

Sections, subsections, appendices, and whatever other structural items are marked up in ReSpec using `<section>` elements.

The first child element of a section is expected to be one of the h1-h6 elements. Any odd one will do, since whichever one you pick will be renamed to use the level that matches the depth at which your section is nested [✨](https://media.tenor.com/images/9f005edb649e847cc9250fbce91d4b23/tenor.gif "magic!"). As you can see, the example uses only h2 elements, but that is not what appears in the output. Using h2 everywhere is sort of a tacit convention, but if you prefer h5 that'll work just the same.

Sections will be automatically numbered. If you wish a section to have a specific ID, then simply use an id attribute on it. If you don't, ReSpec will generate one for you based on the section title, and will ensure that it is unique.

ReSpec sections understand some specific classes. First is the [`introductory`](introductory) CSS class. It is used (rarely) for preliminary content that sits at the beginning of the document and which is not expected to be linked to from the table of contents. The abstract, SotD, and <abbr title="Table of Contents">ToC</abbr> sections automatically fall into this category (you need not worry about flagging them as such); the example above adds an “Overview” section exemplifying the behavior. If you do wish all the introductory sections to be present in the ToC, see [`tocIntroductory`](tocIntroductory).

Then is the [`informative`](informative) CSS class, as seen on “Introduction” section in the example. It is used for regular sections or appendices that are not meant to contain normative material. It will automatically preface its content with the well-known “This section is non-normative” paragraph.

And finally is the [`appendix`](appendix) CSS class. It marks a section as being an appendix, as can be seen appearing at the end of the example. One important thing to know about appendix sections is that all the sections that follow an appendix will also be marked as appendices.

If you wish to link to a section and have its number and title automatically appear as part of the link, then you can use an empty anchor pointing to that ID, as in `<a href='#foo'></a>`. The “Overview” section contains an example of that.

A table of contents is generated automatically and placed right after the SotD. If you have a deeply nested document structure and find that the ToC is either too long or too deep, you can use the [maxTocLevel](maxTocLevel) option to limit how deep it goes. In the example used above, there is no limit and indeed one section is numbered 4.1.1.1.1.1 — rather deep. Setting [`maxTocLevel`](maxTocLevel) to other values will yield different results (other example with `maxTocLevel: 2`). If you only have some sections that you would like excluded from the ToC, you can add the class [`notoc`](notoc) to associated section element and it will be omitted.

The more observant readers will have noted that ReSpec also inserts some strange-looking comments in the generated source, that look like `<!-- OddPage -->`. These are present so that [html2ps](https://linux.die.net/man/1/html2ps) knows how to paginate correctly. Perhaps not useful to most but helpful to those who rely on it for printing, and harmless.

If for whatever reason you wish to have no table of contents, simply set the configuration option [`noTOC`](noTOC) to `true`.

### Figures

Figures are also supported natively, using the `<figure>` and `<figcaption>` elements, and exhibit some features similar to sections. They are automatically granted an ID, and the caption is remembered for use elsewhere, as described below.

The `Table of Figures` is not generated by default, but making it happen is straightforward: all you need to do is add a section with ID `"tof"` anywhere in the document. ReSpec will do its best to guess if it should be an appendix, introductory, or just a regular section. Because the list has no depth, there is no equivalent to [`maxTocLevel`](maxTocLevel).

And finally, automatic linking to figures works just as it does for sections, with `<a href='#foo-figures'></a>`. 

### Examples & Syntax Highlighting

Any `pre` or `aside` element that has the example class on it will get the additional example header and style. Content inside [pre elements](pre-and-code-elements) is syntax highlighted. The syntax highlighter does not need to be instructed about which language it is highlighting and will try to do a decent job of guessing.

You can disable syntax highlighting on a pre element by adding a "[nohighlight](nohighlight)" class.

### Inclusions & Transformations

At times you need to include an external resource directly into your document. This may be because your specifications have additional boilerplate, or (like it's done in this very guide) because you want examples to be both inlined and accessed directly without having to make sure that they are always in sync.

Inclusion of external content in ReSpec is done using the [`data-include`](data-include) attribute. It is expected to point to a resource, using its relative path from the including document. The content will get included as a child of the element on which the inclusion is performed, replacing its existing content (unless [`data-include-replace`](data-include-replace) is used, in which case it replaces the element).

In the processing pipeline, inclusion happens right after everything to do with the document's headers, style, and transformations have happened, which means that all the processing to do with structure, inlines, WebIDL, and everything else is applied to the included content as if it had always been part of the source.

At times however one does not wish included content to be processed as if it were intended to be ReSpec content. For instance, content containing HTML may be an example that should not be processed (the examples in this document are included that way). In such cases, you can specify [`data-include-format='text'`](data-include-format). This will include the content as if it were text, and therefore only process it as much as text is expected to be. The only recognized value are "text" and "markdown", nominally you can always set it to "html" but that's the default value.

There is an important caveat to take into account with the `data-include` functionality. ReSpec is designed so as to make life easier on editors. Because of that, people who do not wish to run a local web server and simply want to edit and refresh the specification they're working on from their local drives, using a file:// URI in the browser, are generally supported in doing so (this involves some trickery behind the scenes since it would normally make it impossible to load some of the content that ReSpec uses — but that's not something you should ever have to know). When using `data-include`, this is no longer possible. You either have to serve your ReSpec content from a web server or the included content will get blocked by the same-origin policy (which applies to all things `file://`). There is, unfortunately, no easy way to work around this. Be sure to note however that if you're not using `data-include`, you never have to worry about this. Though, we will still recommend you to spin-up a local http server to [serve static files](https://gist.github.com/willurd/5720255).

Finally, at times, you may wish to perform a quick and dirty transformation of some of your content included with `data-include`. You can use [`data-oninclude`](data-oninclude) for that.  The way in which it is done is that you include a globally available Javascript function that takes the ReSpec utils object as its first parameter, a string of the content to be transformed as its second, and a third parameter indicating the relative URL from which content was loaded; then returns the processed value. The value of `data-transform` is a white space separated list of JavaScript function names. They are applied left to right, as if they were a pipeline.

### Common Inline Processing

Many repetitive tasks happen at the level of inline text, and ReSpec helps with those as well. This chapter covers references, along with the SpecRef database, the handling of abbreviations and acronyms, automatic RFC 2119 keyword detection, dfn definitions, and easier in-document linking.

#### RFC 2119

A very common construct in specifications is to use keywords defined in RFC 2119 which indicate precisely, using commonly agreed conventions, what requirements are placed on an implementation with what degree of strength (e.g., MUST, SHOULD NOT). All you need to do as an author is to include an all-caps MUST in your source and it will automatically get marked up as such (with the accompanying style applied to it afterwards).

#### Abbreviations & Acronyms

HTML supports functionality to mark abbreviations and acronyms (using `<abbr>`), using the title attribute to provide the expanded version. This is something that's nice to do once, but tedious to repeat every time that a given term is used. What ReSpec does is that it allows you to do it just once, and it will detect all other uses of the same in the text and will automatically mark them up in the same way.

#### Inline Code

To mark some text as code, we need to wrap it in `<code>` elements. ReSpec lets you wrap text in backticks (`) to mark it as code, which is usually more comfortable.

### Definitions and Linking
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

For common nouns, ReSpec can handle pluralization automatically:

```html
<dfn>banana</dfn>
<!- these are the same -->
These [=bananas=] are better than those <a>bananas</a>
``` 

Sometimes, a defined terms needs additional related terms or synonyms. In those cases, you can use the [`data-lt`](data-lt) attribute on the `dfn` element:

```html
<dfn
  data-lt="the best fruit|yellow delicious">
  banana
</dfn>
```

The following all link back to "banana":

```HTML
<p>[=the best fruit=] or the [=yellow delicious=].</p>
```

#### Referencing terms from other specifications

Often, you need to link to terms defined in other specifications. ReSpec makes it quite simple with its cross referencing ([`xref`](xref)) feature. In short, you specify a list of specifications ReSpec may search a term from, and simply reference the term. For example, to reference "default toJSON steps" from the [WebIDL standard](https://heycam.github.io/webidl/#default-tojson-steps):

```html "example": "Referencing definitions from other specifications."
<script>
  var respecConfig = {
    xref: ["WebIDL"],
  };
</script>
<a>default toJSON steps</a>
```

#### Shorthands

Frequently, you might also need to specify the type and context of the definition. Specifying all such metadata becomes clumsy quickly (something like `<a data-link-type="some-type" data-link-for="some-context">term</a>`). This is where ReSpec's shorthands come in picture. There are two important shorthands when it comes to linking to definitions: `[= term =]` for linking regular concepts, and `{{ term }}` for linking IDL stuff.

You don't need to remember when to use standard HTML `<a>` or the shorthands. Shorthand syntax works for referencing external terms as well as locally defined terms. A good compromise is to use shorthands all the time. Lets go through an example where we try to link to link to a few locally defined terms and some external definitions.

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
