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
#### `name`

Name of the person.

#### `url`

Home page of the person.

#### `company`

Name of the company the person is affiliated with.

#### `companyURL`

url of the company.

#### `w3cid`

For W3C documents, an identifier of the persons’ W3C account. This id can be
found in <a href="https://www.w3.org/users/myprofile">my profile</a> URL
that will be redirected to the user’s page; the id appears in the address
bar (e.g., <https://www.w3.org/users/12345>).

#### `orcid`

Identifier or full URL of the persons'
<a href="https://orcid.org/">ORCID</a> account. This can be a URL or the
ORCID.

#### `retiredDate`

The date in which an person has retired from working on a specification. The
format is yyyy-mm-dd.

#### `note`

Any text in this field will appear at the end of the person’s identification
in parenthesis.

#### `extras`

Refers to an array of extras (see below) objects, displayed at the end of
the person's identification.

### Extras

The “extras” are objects, with the following specified below.

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

#### `name` (required)

The content of the resulting `span`; this can contain html elements.

#### `class`

A CSS class value (can be used for styling).

#### `href`

Optionally, a hyperlink.
