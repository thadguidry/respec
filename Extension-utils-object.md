# Extension utils object

Available as an argument to [`preProcess`](./preProcess) and [`postProcess`](./postProcess) functions, contains following helpers:

#### `showError`

Use this to display formatted errors in ReSpec UI, devtools console and CLI. The first argument, a string representing message is required.

```js "example": "Displaying error and warnings from a preProcess function"
function myPreProcess(conf, doc, utils) {
  utils.showError("This is error message");

  utils.showError("This is error message", {
    // All properties are optional.
    // Title attribute for offending elements. Can be a shorter form of the message.
    title: "An optional title",
    // Array of elements where the error occurred
    elements: [document.getElementById("bad-element-id")],
    // How to solve the error?
    hint: "Do this to fix",
    // Visible as details/summary in ReSpec UI
    details: "Any further details",
  });

  utils.showWarning("This is warning message");
}

var respecConfig = {
  preProcess: [myPreProcess],
};
```

#### `showWarning`

Same as `showError` above, but displays as a warning instead.
