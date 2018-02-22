Adds a JSON-LD `script` element containing schema.org information useful for search engines to properly index the document. This is also a functional replacement for the [doRDFa](doRDFa) configuration.

## Example

The following entry in `respecConfig` can be used to configure JSON-LD support, which currently defaults to `false`.

```javascript
var respecConfig = {
  doJsonLd: true
}
```

## Example Output

When configured, a script element similar to the following will be added:

```html
<script type="application/ld+json">
{
  "@context": [
    "http://schema.org",
    {
      "@vocab": "http://schema.org/",
      "@language": "en",
      "w3p": "http://www.w3.org/2001/02pd/rec54#",
      "foaf": "http://xmlns.com/foaf/0.1/",
      "datePublished": {"@type": "xsd:date"},
      "inLanguage": {"@language": null},
      "isBasedOn": {"@type": "@id"},
      "license": {"@type": "@id"}
    }
  ],
  "id": "https://w3c.github.io/some-API/",
  "type": ["TechArticle"],
  "name": "Replace me with a real title",
  "inLanguage": "en",
  "license": "https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document",
  "datePublished": "2018-02-22",
  "copyrightHolder": {
    "name": "World Wide Web Consortium",
    "url": "https://www.w3.org/"
  },
  "discussionUrl": "https://github.com/w3c/some-API/issues/",
  "description": "Abstract\n      \n        This is required.\n      \n    ",
  "editor": [
    {
      "type": "Person",
      "name": "Your Name",
      "url": "https://your-site.com"
    }
  ],
  "citation": [
    {
      "id": "http://berjon.com/",
      "type": "TechArticle",
      "name": "The Dahut Specification Example From the Higher Circle",
      "url": "http://berjon.com/"
    }
  ]
}
</script>
```
