# `Person`

A person object (used for [`editors`](editors), [`authors`](authors))
contains the following fields (most of the fields are straightforward). Only the
`name` property is required.

```js "example": "A typical person object."
{
  name: "Ben De Meester",
  company: "Ghent University - iMinds - Data Science Lab",
  companyURL: "https://www.iminds.be/",
  url: "https://users.ugent.be/~bjdmeest/",
  orcid: "0000-0003-0248-0987",
  w3cid: "00000"
};
```

<dl>
  <dt>`name`</dt>
  <dd>Name of the person.</dd>
  <dt>`url`</dt>
  <dd>Home page of the person.</dd>
  <dt>`company`</dt>
  <dd>Name of the company the person is affiliated with.</dd>
  <dt>`companyURL`</dt>
  <dd>url of the company.</dd>
  <dt>`w3cid`</dt>
  <dd>
    For W3C documents, an identifier of the persons’ W3C account. This id can be found
    in <a href="https://www.w3.org/users/myprofile">my profile</a> URL that will
    be redirected to the user’s page; the id appears in the address bar (e.g., https://www.w3.org/users/12345).
  </dd>
  <dt>`orcid`</dt>
  <dd>
    Identifier or full URL of the persons' <a href="https://orcid.org/">ORCID</a> account. This can be a URL or the ORCID. 
  </dd>
  <dt>`retiredDate`</dt>
  <dd>
    The date in which an person has retired from working on a
    specification. The format is yyyy-mm-dd.
  </dd>
  <dt>`note`</dt>
  <dd>
    Any text in this field will appear at the end of the person’s identification
    in parenthesis.
  </dd>
  <dt>`extras`</dt>
  <dd>
    Refers to an array of extras (see below) objects, displayed at the end of
    the person's identification.
  </dd>
  <dt>`mailto` (**deprecated**)</dt>
  <dd>An email address. Please use url instead (e.g., `"url": "mailto:"`).</dd>
</dl>

### Extras

The “extras” are objects, with the following fields:

<dl>
  <dt>`name` (required)</dt>
  <dd>
    The content of the resulting `span`; this can contain html
    elements.
  </dd>
  <dt>`class`</dt>
  <dd>
    A CSS class value (can be used for styling).
  </dd>
  <dt>`href`</dt>
  <dd>
    Optionally, a hyperlink.
  </dd>
</dl>

```js "example": "Using extras."
{
  name: "Ben De Meester",
  extras: [
    {
      name: "Some custom thing",
      href: "https://example.com/",
      class: "css-class-value"
    }
  ]
};
```
