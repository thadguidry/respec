# `window.respecVersion`

When ReSpec is loaded, it immediately adds a `respecVersion` property to the `window` object. This property returns a string describing the current version of ReSpec script. Its value is a [semver](https://semver.org/) string (like `"25.18.3"`) in release versions of ReSpec.