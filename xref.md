# `xref`

The `xref` option allows you to configure automatic external reference linking (xref). A detailed explanation on how to use xref in specifications is given [here](Auto-linking-external-references). This page describes the various configurations available.

`xref` can be configured as:

```js
var respecConfig = {
  // See all config options below!
  xref: "web-platform", 
};
```

And then simply write the terms you want to link to:

```HTML
<p>
  [=Queue a task=] to [=fire an event=] named "yay"
  at the {{Window}} object.
<p>
```

And ReSpec will know what to do. If ReSpec can't find a term, it will show an error. 
If you are unsure if a term is exported, head over to https://respec.org/xref/ to see if it's exported.

If a term is not exported, ask the Editors of that spec to export the term by using the ["export"](data-export) CSS class.  

## xref configuration options

The following configurations are available:

- Boolean value. Setting `xref: true` simply enables the xref feature.
- Array of specification short-names. This option enables xref, but also adds the specification short-names in the array to the `data-cite` attribute of the document's `<body>`. ReSpec then uses these specifications for [disambiguation](Auto-linking-external-references#handling-ambiguity).
- Profile name (string). Specification Profiles are described below.
- Object with the optional properties `url`, `specs` and `profile`.
  1. `url` is used to link to a custom references API.
  2. `specs` is used to specify an array of specification short-names. This array is added to the `data-cite` attribute of the document's `<body>` and used for disambiguation.
  3. `profile` is used to specify profile.

Note that when using the object configuration, if both `profile` and `specs` properties are specified, then the specification short-names in `specs` combined with the ones in the profile used, are used for disambiguation.

## xref profiles

Profiles are pre-defined lists of specifications. Using a profile means adding all of its specification short-names to the `data-cite` attribute of the document's `<body>`.

Following profiles are currently available:

<dl>
<dt>web-platform</dt>
<dd>Specifications included: "HTML", "INFRA", "URL", "WEBIDL", "DOM", "FETCH"</dd>
</dl>

```js "example": "Enable xref."
var respecConfig = {
  xref: true,
};
```

```js "example": "Search term in specs under 'web-platform' profile."
var respecConfig = {
  xref: "web-platform",
};
```

```js "example": "Search for terms in 'spec1' and 'spec2' specifications."
var respecConfig = {
  xref: ["spec1", "spec2"],
};
```

Using the specs `spec1` and `spec2` along with specs in the `web-platform` profile to look for references.

```js "example": "Specify profile and use additional specs. for searching"
var respecConfig = {
  xref: {
    specs: ["spec1", "spec2"],
    profile: "web-platform",
  },
};
```
