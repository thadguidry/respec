This User's Guide is organized in such a way that a complete newcomer may read it linearly and understand everything. That being said, read it in whatever order you like.

### Basic Layout

A ReSpec document is a straightforward HTML document that brings in the ReSpec script, defines a few configuration variables, and follows a few conventions.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Replace me with a real title</title>
    <script src="https://www.w3.org/Tools/respec/respec-w3c" class="remove" async></script>
    <script class="remove">
      var respecConfig = {
        specStatus: "ED",
        editors: [
          {
            name: "Your Name",
            url: "https://your-site.com",
          },
        ],
        gitHub: "some-org/mySpec",
        shortName: "dahut",
        xref: "web-platform",
      };
    </script>
  </head>
  <body>
    <section id="abstract">
      <p>
        This is required.
      </p>
    </section>
    <section id="sotd">
      <p>
        This is required.
      </p>
    </section>
    <section id="conformance">
      <p>
        This is required for specifications that contain normative material.
      </p>
    </section>
    <section data-dfn-for="Foo">
      <h2>Start your spec!</h2>
      <pre class="idl">
      interface Foo {
        attribute Bar bar;
        void doTheFoo();
      };
      </pre>
      <p>The <dfn>Foo</dfn> interface represents a {{Foo}}.</p>
      <p>
        The <dfn>doTheFoo()</dfn> method does the foo. Call it by running
        {{Foo/doTheFoo()}}.
      </p>
    </section>
  </body>
</html>
```

That is essentially the smallest W3C specification you can write using ReSpec (in practice, you could eliminate a few things but then you would have a truly useless document). Some of the configuration may seem cryptic, but it is there because all W3C documents must have some specific information available — all will be explained soon.

### The Very Basics

The document that is rendered in your browser is quite different from the one which is authored. Yet they are the same document, with a sprinkle of ReSpec on top. Using your browser's developer tools, you may wish to take a look at the real DOM that is being produced and compare it with the source.

Some basic things can be seen above. First, as you can see from the DOCTYPE and the section elements, ReSpec documents are built on HTML. This does not imply that you need to know the ins and outs of HTML — just a few simple bits will suffice. It also does not imply that the resulting document that you will produce at the end will be HTML (you can output a limited set of other formats).

Note that the title of the document is reused as the title of the specification in the resulting document's h1. It's a small win, but that's always something less to repeat.

### Including ReSpec

You can see that the example above includes a script sourced at:

- https://www.w3.org/Tools/respec/respec-w3c

You may also be tempted to save the script to your local directory and use it from there. That may on occasion be useful (e.g., if you're on a flight and your cache is busted), but it is recommend that you link to the canonical URL provided above. The code is regularly updated and this will allow you to benefit from bug fixes and enhancements without even having to think about it.

### Specifying Configuration

In the example you can see a script element defining a `respecConfig` variable. This is the ReSpec configuration. There are many things that can be done there, but we won't get into the details right now, but rather explore it piece by piece as needed. No doubt you can guess what some of those fields do.

One thing to remember though is this: that is how configuration is specified in ReSpec. Whenever you will see an indication that you can set a configuration option to a given value, it will be by modifying this object, simply adding, removing, or changing one of its fields.

Also note that this is just a simple JavaScript variable: there is nothing magical about the way in which it is declared (it just needs to be fully defined when the load event triggers).

## Essential W3C Boilerplate

W3C boilerplate is extremely repetitive, but beneath the tedium is a wealth of options and subtle variations that are precisely what makes crafting the boilerplate by hand so hard to get right. This covers options for specification maturity, publication dates, alternatives (editor's drafts, other versions, other formats...), legalese variants, the various W3C specification URLs, the people writing it, information about the working group, and core sections such as Abstract, Status of this Document, and Conformance.

We will start by using an example of a basic specification very similar to the one used in the previous section.

There's a nifty trick that you will likely want to keep in your toolbox: many of ReSpec's configuration options can be specified in the query string, and they override the options specified in the source. We will use it a lot in this documentation so as to avoid having to generate examples for each small change that is possible (there are quite a few). So if I want to test the subtitle option without generating a copy of the same example with just that option changed, instead of accessing examples/boilerplate.html I can simply go to examples/boilerplate.html?subtitle=This%20is%20a%20subtitle.

### title

As noted in the previous chapter, the `<title>` of the document is reused as the title of the specification in the resulting document's h1. That way, they are always in sync and you need not worry about specifying it twice. However, if you need to add additional markup to your title, you can still use a `<h1>`

```html
<h1>The <code>Foo</code> API</h1>
```

### subtitle

Optionally, you can also specify a [`subtitle`](subtitle) configuration option in the ReSpec config. The subtitle configuration option takes a simple string that will be used as a subtitle for the specification, right under the title.

#### shortName

Specifications typically require having a "short name", which is the name used (amongst other places) in the canonical "https://w3.org/TR/short-name/" URLs. This is specified using the [`shortName`](shortName) option, as seen in the example above.

### Working Group Information

Most (but not all) W3C documents are produced by groups of some sort: Working Groups (WG), Interest Groups (IG), Incubator Groups (XG, now defunct), Coordination Groups, the TAG, and Community or Business Groups (CG, BG). For simplicity, we will be referring to all of the above as "Working Groups", since one should not be required to understand the many subtleties of the W3C Process in order to write a good specification. Configuration options that are prefixed with wg work equally well for all group types.

- [`wg`](wg)
- [`wgPatentURI`](wgPatentURI)
- [`wgPublicList`](wgPublicList)
- [`wgURI`](wgURI)

When these groups release a document, they must include some information that is relevant and specific to them — all of this information is required. Documents produced in other situations (e.g., Submissions, unofficial drafts, etc.) don't require these options.

The result of changing these configuration options can be seen in the "Status of this Document" section.

### Specification Status

At any given time a specification must be in a given status. The [`specStatus`](specStatus) option indicates which status that is. Typically, a status has implications in terms of what other options may be required. For instance, a document that is intended to become a Recommendation eventually and that is not the First Public Working Draft (FPWD) of that specification will require [`previousPublishDate`](previousPublishDate) and [`previousMaturity`](previousMaturity) to be specified.

The `[specStatus`](specStatus) page list all the possible status values.

### Extra links at top of the document

There are times when you might need extra links or other important information to appear together with other links at the top of the document.

ReSpec supports adding additional links by specifying an `otherLinks` property in the configuration. The values for this configuration option are rich and complex, so are detailed in the reference section for `otherLinks`.

### Extra Styling

If you wish to add your own additional styles to your document, just use the regular link and style elements. Be warned however that the W3C styles will always be added after yours, so if you wish to override them you will need to use more specific selectors.

### Dates

The process of publishing specifications typically involves releasing multiple versions in a row that have specific dates (so that people can see the evolution, and also for IP reasons). Additionally, some specification statuses involve delimited review periods. These are all specified using date-related options.

The format used for all dates is YYYY-MM-DD.

### Editors & Authors (and former editors/authors)

Every specification must have some editors (at least one) and may have some authors.

Editors are the people in charge of the document. Authors are people who produced substantial contributions, but did not manage the document per se. Most of the time authors are not specified, but that practice varies between groups (it was more common in XGs for instance, or sometimes in order to get academic credit the whole group is mentioned). Here is an example of specifying two editors and one author (with the surrounding document clipped for readability):

```js
var respecConfig = {
  // ...
  editors: [
    {
      name: "Robin Berjon",
      url: "http://berjon.com/",
      company: "W3C",
      companyURL: "http://w3c.org/",
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
      url: "http://findingada.com/",
      company: "Aristocracy",
      retiredDate: "1852-11-27",
    },
  ],
  // ...
};
```

You can use `retiredDate` to retire either an author or an editor.

### Editor's Drafts

Most groups maintain some form of version control system which is exposed over the web so that people can keep track of what edits are being made to a specification in between official releases. It is often useful to point to such documents, including from released specifications, so that people wishing to report issues can make sure that they aren't already fixed, and in general get the very latest version. In fact, EDs are often considered to be the most useful reference to have to a group's work. Two options control this.

### Related Documents

A specification does not always travel alone. In some cases, there can be an accompanying errata document, which you can specify by providing a URL for it (example).

Likewise, some groups occasionally find it desirable to produce alternative formats in which people may read the specification. For instance, to access it on an ebook reader you may produce an ePub alternative, or if your specification is intended to be read by printing devices you might use PDF. The [`alternateFormats`](alternateFormats) option is set to an array of objects, each of which has two required fields: `uri`, for the link to the alternate document, and label, for a human readable string that matches it.

If your specification has a test suite (it does, right?), then you can point to it using [`testSuiteURI`](testSuiteURI). And when your tests have successfully passed in enough implementations, you will want to document that in an implementation report which you can link to using [`implementationReportURI`](implementationReportURI).

### Copyrights & Patents

All the best fun in standards brought to you neatly packaged in a single section!

By default, W3C specifications all get the regular W3C copyright notice and archaic document license, except for unofficial documents which are under CC-BY. In some cases however, you will want to modify that.

For all document types other than "unofficial", you can use [`additionalCopyrightHolders`](additionalCopyrightHolders) to indicate that the copyright is shared not just amongst the W3C's hosts but also with other organizations (typically this is used for documents developed jointly with another SDO such as the IETF). For unofficial documents, this simply replaces the default CC-BY license.

If you wish the copyright date to span several years rather than just the year matching [`publishDate`](publishDate) (e.g., 2009-2013) then you can use [`copyrightStart`](copyrightStart).

At times, the patent situation of a specification may warrant being documented beyond the usual boilerplate. In such cases, use [`addPatentNote`](addPatentNote). Its content will get injected at the end of the SotD section (right after the patent policy paragraph).

### Note & Recommendation Tracks

If you are working on a new version of an existing Recommendation, then it is required that your document point to that previous version. This is done using the [`prevRecShortname`](prevRecShortname) and [`prevRecURI`](prevRecURI) options, which respectively provide the [`shortName`](shortName) for the existing Recommendation (e.g., "SVG", as opposed to "SVG2") and its URL. You can look at an example. If [`prevRecURI`](prevRecURI) is not specified but [`prevRecShortname`](prevRecShortname) is, the latter will be used to generate the former by prefixing "http://www.w3.org/TR/" to it. Note however that while in the overwhelming majority of cases this works, it is not recommended to use this approach since if the Recommendation is later Rescinded, the link will be stale. Instead, use the dated link to the Recommendation.

The process for the publication of Notes has been a source of confusion. When producing multiple drafts of a Note in succession, some groups have traditionally simply published them all as Notes one after the other, indicating in the abstract or SotD if they intend to work further on this document or if it is final. Since Notes are not normative and entail no IP concerns, they don't need an elaborate process and this process was perhaps not entirely bad. However, that's not how Notes are commonly handled nowadays.

The currently recommended process for Notes is closer to that which is used for Recommendation Track documents, typically: FPWD -> WD (n times) -> LC -> Note. Given that any group may decide at any time to release a Rec-Track document as a Note instead (often because it has been abandoned) this is Process-correct but it does involve jumping through hoops (notably for IP) that likely should not be needed. It has been explained to me several times why this switch took place, but I can never recall the justification. At any rate, if you are confused with the Note track process but wish to stick to it, you can do so by setting noRecTrack to true.
Structure

This chapter covers all the aspects of a ReSpec document's structure that were not covered as part of the very basics. As usual, let's start with an example. It is fairly long as it needs a decent amount of content in order to exemplify some features, but it should nevertheless be easy to understand.

### Sections

ReSpec-based specifications require you to wrap your content in `section` elements. We provide specific information and examples on [how to use `<section>` elements](section).

Sections, subsections, appendices, and whatever other structural items are marked up in ReSpec using `<section>` elements.

The first child element of a section is expected to be one of the h1-h6 elements. Any old one will do, since whichever one you pick will be renamed to use the level that matches the depth at which your section is nested. As you can see, the example uses only h2 elements, but that is not what appears in the output. Using h2 everywhere is sort of a tacit convention, but if you prefer h5 that'll work just the same.

Sections will be automatically numbered. If you wish a section to have a specific ID, then simply use an id attribute on it. If you don't, ReSpec will generate one for you based on the section title, and will ensure that it is unique.

ReSpec sections understand some specific classes. First is the `introductory` class. It is used (rarely) for preliminary content that sits at the beginning of the document and which is not expected to be linked to from the table of contents. The abstract, SotD, and ToC sections automatically fall into this category (you need not worry about flagging them as such); the example above adds an “Overview” section exemplifying the behavior. If you do wish all the introductory sections to be present in the ToC, see [`tocIntroductory`](tocIntroductory).

Then is the [`"informative"`](informative) CSS class. It is used for regular sections or appendices that are not meant to contain normative material. It will automatically preface its content with the well-know “This section is non-normative” paragraph.

```html
<section class="informative">
  <h2>A bit of history!</h2>
  <p>A really cool thing is that ...</p>
</section>
```

And finally is the [`"appendix"`](appendix) CSS class. It marks a section as being an appendix, as can be seen appearing at the end of the example. One important thing to know about appendix sections is that all the sections that follow an appendix will also be marked as appendices.

If you wish to link to a section and have its number and title automatically appear as part of the link, then you can use an empty anchor pointing to that ID, as in `<a href='#foo'></a>`. The “Overview” section contains an example of that.

A table of contents is generated automatically and placed right after the SotD. If you have a deeply nested document structure and find that the ToC is either too long or too deep, you can use the [maxTocLevel](maxTocLevel) option to limit how deep it goes. In the example used above, there is no limit and indeed one section is numbered 4.1.1.1.1.1 — rather deep. Setting [`maxTocLevel`](maxTocLevel) to other values will yield different results (other example with `maxTocLevel: 2`). If you only have some sections that you would like excluded from the ToC, you can add the class [`"notoc"`](notoc) to associated section element and it will be omitted.

The more observant readers will have noted that ReSpec also inserts some strange-looking comments in the generated source, that look like `<!-- OddPage -->`. These are present so that html2ps knows how to paginate correctly. Perhaps not useful to most but helpful to those who rely on it for printing, and harmless.

If for whatever reason you wish to have no table of contents, simply set the configuration option [`noTOC`](noTOC) to `true`.

### Figures

Figures are also supported natively, using the `figure` and `figcaption` elements, and exhibit some features similar to sections. They are automatically granted an ID, and the caption is remembered for use elsewhere, as described below.

The `Table of Figures` is not generated by default, but making it happen is straightforward: all you need to do is add a section with ID tof anywhere in the document. ReSpec will do its best to guess if it should be an appendix, introductory, or just a regular section. Because the list has no depth, there is no equivalent to [`maxTocLevel`](maxTocLevel).

And finally, automatic linking to figures works just as it does for sections, with `<a href='#foo-figures'></a>`. All of the above is demonstrated in the example.

### Examples & Syntax Highlighting

Any `pre` or `aside` element that has the example class on it will get the additional example header and style. Content inside pre elements is syntax highlighted. The syntax highlighter does not need to be instructed about which language it is highlighting and will try to do a decent job of guessing.

You can disable syntax highlighting on a pre element by adding a "nohighlight" class.

### Inclusions & Transformations

At times you need to include an external resource directly into your document. This may be because your specifications have additional boilerplate, or (like it's done in this very guide) because you want examples to be both inlined and accessed directly without having to make sure that they are always in sync.

Inclusion of external content in ReSpec is done using the [`data-include`](data-include) attribute. It is expected to point to a resource, using its relative path from the including document. The content will get included as a child of the element on which the inclusion is performed (unless data-include-replace is used, in which case it replaces the element), replacing its existing content.

In the processing pipeline, inclusion happens right after everything to do with the document's headers, style, and transformations have happened, which means that all the processing to do with structure, inlines, WebIDL, and everything else is applied to the included content as if it had always been part of the source.

At times however one does not wish included content to be processed as if it were intended to be ReSpec content. For instance, content containing HTML may be an example that should not be processed (the examples in this document are included that way). In such cases, you can specify `data-include-format='text'`. This will include the content as if it were text, and therefore only process it as much as text is expected to be. The only recognized value is text, nominally you can always set it to html but that's the default value.

There is an important caveat to take into account with the `data-include` functionality. ReSpec is designed so as to make life easier on editors. Because of that, people who do not wish to run a local web server and simply want to edit and refresh the specification they're working on from their local drives, using a file: URI in the browser, are generally supported in doing so (this involves some trickery behind the scenes since it would normally make it impossible to load some of the content that ReSpec uses — but that's not something you should ever have to know). When using `data-include`, this is no longer possible. You either have to serve your ReSpec content from a web server or the included content will get blocked by the same-origin policy (which applies to all things `file:`). There is, unfortunately, no easy way to work around this. Be sure to note however that if you're not using `data-include`, you never have to worry about this.

Finally, at times, you may wish to perform a quick and dirty transformation of some of your content. If the transformation is one that is commonly used and could be of general usefulness outside your own specification, then the proper way of handling it is to add the functionality to ReSpec itself. However, in a pinch, this approach will work as well. The way in which it is done is that you include a globally available Javascript function that takes the ReSpec utils object as its first parameter and a string of the content to be transformed as its second; then returns the processed value. Then where you wish the transformation to apply, you place a `data-transform` attribute — it will then process the entire content. The value of `data-transform` is a white space separated list of JavaScript function names. They are applied left to right, as if they were a pipeline. Again, I would like to stress that, in general, that is not the recommended approach.

If you wish to transform content brought in with `data-include` irrespective of whether it is loaded, use `data-oninclude`. It behaves exactly like `data-transform` except that the function gets a third parameter indicating the relative URL from which the content was loaded.

### Common Inline Processing

Many repetitive tasks happen at the level of inline text, and ReSpec helps with those as well. This chapter covers references, along with the SpecRef database, the handling of abbreviations and acronyms, automatic RFC 2119 keyword detection, dfn definitions, and easier in-document linking.

#### RFC 2119

A very common construct in specifications is to use keywords defined in RFC 2119 which indicate precisely, using commonly agreed conventions, what requirements are placed on an implementation with what degree of strength (e.g., MUST, SHOULD NOT). All you need to do as an author is to include an all-caps MUST in your source and it will automatically get marked up as such (with the accompanying style applied to it afterwards).

#### Abbreviations & Acronyms

HTML supports functionality to mark abbreviations and acronyms (using `<abbr>`), using the title attribute to provide the expanded version. This is something that's nice to do once, but tedious to repeat every time that a given term is used. What ReSpec does is that it allows you to do it just once, and it will detect all other uses of the same in the text and will automatically mark them up in the same way.

### Definitions and Linking

HTML also supports the notion that you can give a term's definition using the `<dfn>` element. While that is nice, it is even better to link back to the definition whenever a term is used, which in turn is tedious. While ReSpec could go through the entire text and link every occurrence of a defined term back to its definition, that would be a problematic approach since it would risk linking the same term used with a different meaning. What it does instead is that it allows you to use an href-less a element around a term when you use it, and it will manage the link on its own (e.g., `<a>term</a>`).

When you write "`<dfn>My term</dfn>`", ReSpec adds an id (and a class) to it

```html
<dfn data-dfn-type="dfn" id="dfn-my-term">My term</dfn>
```

(where the `id="dfn-my-term"` is a down-cased copy of the element text). You typically reference this like:
`<a>my term</a>`, which becomes:

```html
<a class="internalDFN" href="#dfn-my-term" data-link-type="dfn">my term</a>
```

All references like `<a>My term</a>` or `<a>my term</a>` link to `#dfn-my-term`.

On occasion that won't be enough since you may be using the term in plural or conjugated, or in some other variant that does not exactly match the `dfn`. If so, then you can use the `data-lt` attribute on the a element in order to indicate the exact term that you wish to have a link to (the mnemonic here being "link term"). Alternately, and more interestingly, you can specify a `data-lt` attribute on the associated dfn element with variants of the spelling of the term separated by vertical bars. Thus `<dfn data-lt="my terms|some term">my term</dfn>` becomes

```html
<dfn data-lt="my terms|some term|my term" data-dfn-type="dfn" id="dfn-my-terms"
  >my term</dfn
>
```

which can be referenced by any of `<a>my terms</a>`, `<a>some term</a>`, `<a>my term<a>`.

Definitions may be links to (anchors in) external specifications by adding a `data-cite="spec-name#some-anchor"` attribute. The anchor is optional but the spec-name must match an entry in the [specref database](https://github.com/tobie/specref/tree/master/refs) or a custom entry defined in your [`localBiblio`](localBiblio).

Also note that the href-less a element is not limited to linking to definitions but also knows how to link to other items such as WebIDL interfaces.

### References

Specifications typically need to have references to other specifications on which they build to define their own technology. Managing references is a pain, as is linking to them every time that they are mentioned.

ReSpec takes the pain out of this with multiple features that are used together. First, when you need to refer to a given specification in the body of the text, simply do so using `[[FOO]]`. ReSpec uses the context of the reference to work out if the reference is normative or informative. That is, if the reference is in a section marked "informative", or an example, note, or figure, then ReSpec automatically makes the reference non-normative. Otherwise, the reference is treated as normative. ReSpec will replace those with the link the reference and the appropriate markup around it.

If you need a non-normative reference in a normative section, you can use a `?` like so:

```html
This is normative and MUST be followed. But, sometimes we need a non-normative
example reference [[?FOO]].
```

You can also link to a specification directly in text by using `[[[FOO]]]`, where FOO is the specification's id. When ReSpec finds the specification in the references database, this gets converted to a link to the specification in the text i.e. `<a href="link-to-FOO">FOO Spec Title</a>`. This is actually a shorthand for using the `data-cite` attribute and you can learn more ways of using `data-cite` [here](data-cite).

The difference between `[[[FOO]]]` and `[[FOO]]` is that `[[[FOO]]]` links directly to the referenced specification, while `[[FOO]]` links to the entry in the "References" section (see below). Normative and informative references work similarly for `[[[FOO]]]` as they work for `[[FOO]]`, and `[[[?FOO]]]` can be used to have a non-normative reference in a normative section.

Then, using all the collected references from the document, ReSpec will generate a “References” section with subsections for normative and informative references (when they appear). Naturally, it will also fill in the references themselves, including the relevant bibliographical data, using the conventional markup. (Assuming they <s>exist</s> appear in our records.)

References are loaded from a [shared database](https://github.com/tobie/specref/tree/master/refs) that is maintained by a group of volunteers. If you need a reference that is not in the database, then the right thing to do is to [submit it for inclusion](https://github.com/tobie/specref#manual-changes) so that others can benefit from it too. However, if that is not possible then you can make use of the [`localBiblio`](localBiblio) configuration option.

The only things you therefore need to know for references are the reference names of the specifications you wish to refer to (as well as to how to add your own to the database). The names are usually rather logical, and most of the time can be guessed. In other cases, you can go look for them in the central bibliographical database that is maintained at [SpecRef database](https://www.specref.org/).

If you ever want to use `[[\TextInDoubleBrackets]]` that doesn't represent a reference, for example to represent an ECMAScript internal slot, write it as `[[\InternalSlot]]`.

### Best Practice Documents

Best practices may be shown, numbered, and formatted using a div with class practice containing a p > span.practicelab with the practice's title and a p.practicedesc with description of the practice.

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

If a `section` element with id `"bp-summary"` is present, then a summary list of best practices will be placed in it, linked to the best practices that have an id on the span element.

```html
<section id="bp-summary"></section>
```

### Creating a Static Snapshot

Of course the downside of the approach taken by ReSpec is that the specification as it is expected to be, with all its bells and whistles, exists only in your browser's memory as a DOM. Publishing directly with the script would not work as the source would not pass PubRules.

The solution that is used here is that you hit the Ctrl+Shift+Alt+S key combination. Unless you know what you are doing, pick "Save as HTML (Source)". This will produce a dump of the generated source, which you can paste into the document you want to be your specification snapshot. The process is a little bit tedious, but normally you should only need to do it very rarely. You can hit Esc to hide the menu.

### Creating a Static Snapshot from the Command Line

To produce static output for your spec source from the command line, you can use a command-line HTTP client such as `wget` or `curl` and POST your ReSpec source document to the W3C https://labs.w3.org/spec-generator/ spec-generator service as a file upload; for example:

```bash
curl -F "file=@source.html" https://labs.w3.org/spec-generator/ > index.html
```

That command causes `curl` to read the `source.html` file from the current directory, send an HTTP POST request with the contents of that file as the value of the `file` field in the request, and then write the response to the `index.html` file.

That `index.html` file is a dump of the `source.html` file’s DOM, generated by processing the source with ReSpec — that is, exactly the same output you get by manually using Ctrl+Shift+Alt+S within the document itself and picking "Save as HTML (Source)" to save the output.

You can use additional `-F` flags with `curl` to specify particular ReSpec configuration options:

```bash
curl -F "file=@source.html" -F "shortName=dahut" -F specStatus="ED" \
     -F "publishDate=2020-02-21" https://labs.w3.org/spec-generator/ > index.html
```

See also [respecDocWriter](https://github.com/w3c/respec/blob/develop/tools/respecDocWriter.js) tool.

### Creating a Diff-Marked Version

ReSpec is also capable of producing a diff-marked version if you have a configuration setting of `previousDiffURI` set to a document to compare to (which defaults to `previousURI`). When you press that button, you will obtained a diffmarked version instead of a regular specification. By default, the diff tool is set to `http://www.aptest.com/standards/htmldiff/htmldiff.pl`, but you can override this by setting `diffTool`.

### WebIDL Support

[See WebIDL guide](WebIDL-Guide).
