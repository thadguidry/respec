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
  <dd>Name of the person</dd>
  <dt>`url`</dt>
  <dd>home page of the author</dd>
  <dt>`company`</dt>
  <dd>company name</dd>
  <dt>`companyURL`</dt>
  <dd>url of the company</dd>
  <dt>`w3cid`</dt>
  <dd>
    identifier of the persons’ W3C account, if applicable. (This id can be found
    through the
    <a href="https://www.w3.org/users/myprofile">“my profile”</a> URL that will
    be redirected to the user’s page; the id appears in the address bar).
  </dd>
  <dt>`orcid`</dt>
  <dd>
    identifier or full URL of the persons'
    <a href="https://orcid.org/">ORCID</a> account.
  </dd>
  <dt>`retiredDate`</dt>
  <dd>
    indicates the date in which an editor has retired from editing a
    specification. The format is yyyy-mm-dd. Additionally, if a person object is
    under `editors` and contains `retiredDate`, it will be
    automatically moved to `formerEditors`.
  </dd>
  <dt>`note`</dt>
  <dd>
    any text in this field will appear at the end of the person’s identification
    in parenthesis
  </dd>
  <dt>`extras`</dt>
  <dd>
    Refers to an array of extras (see below) objects, displayed at the end of
    the person's identification
  </dd>
  <dt>`mailto` (**deprecated**)</dt>
  <dd>An email address. Please use url instead (e.g., `"url": "mailto:"`)</dd>
</dl>

### Extras

The “extras” are objects, with the following fields:

<dl>
  <dt>`name` (required)</dt>
  <dd>
    The content of the resulting `span`; this can contain html
    elements
  </dd>
  <dt>`class`</dt>
  <dd>
    A CSS class value (can be used for styling)
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
