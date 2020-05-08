The `xref` option allows you to configure automatic external reference linking (xref). A detailed explanation on how to use xref in specifications is given [here](Auto-linking-external-references). This page describes the various configurations available.  

`xref` can be configured as:
``` js
var respecConfig = {
  xref: /* a valid configuration */,
};
```
and the following configurations are available:

* Boolean value. Setting `xref: true` simply enables the xref feature.
* Array of specification shortnames. This option enables xref, but also adds the specification shortnames in the array to the `data-cite` attribute of the document's `<body>`. ReSpec then uses these specifications for [disambiguation](https://github.com/w3c/respec/wiki/Auto-linking-external-references#handling-ambiguity).
* Profile name (string). Specification Profiles are described below.
* Object with the optional properties `url`, `specs` and `profile`. 
  1. `url` is used to link to a custom references API. 
  2. `specs` is used to specify an array of specification shortnames. This array is added to the `data-cite` attribute of the document's `<body>` and used for disambiguation.
  3. `profile` is used to specify profile. 

Note that when using the object configuration, if both `profile` and `specs` properties are specified, then the specification shortnames in `specs` combined with the ones in the profile used, are used for disambiguation.

## Profiles

Profiles are pre-defined lists of specifications. Using a profile means adding all of its specification shortnames to the `data-cite` attribute of the document's `<body>`. 
### List of available profiles
1. `web-platform`. Specifications included: `HTML`, `INFRA`, `URL`, `WEBIDL`, `DOM`, `FETCH`.

## Examples
1. Simply enable xref (Enabled by default for W3C profiles)
``` js
var respecConfig = {
  xref: true,
};
```
2. Using the `web-platform` profile. 

``` js
var respecConfig = {
  xref: "web-platform",
};
```

3. Using the specs `spec1` and `spec2` for disambiguation.
``` js
var respecConfig = {
  xref: ["spec1", "spec2"],
};
```

4. Using the specs `spec1` and `spec2` along with specs in the `web-platform` profile for disambiguation, and looking for references in the specified references database only.

``` js
var respecConfig = {
  xref: {
    specs: ["spec1", "spec2"],
    profile: "web-platform"
  }
};
```