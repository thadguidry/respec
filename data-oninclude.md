This is a list of white space separated JavaScript function names that will be called in turn in order to transform the content inside the given element. The functions need to be globally available.

Each function gets called with three arguments:
 * ReSpec utils object.
 * a string of the content to transform.
 * the URL of the loaded content. 

Each function must return the transformed content.

## Example
```HTML
<script>
function toRainbows(utils, content, url ){
  // Adds rainbows where appropriate.
  return content.replace(/rainbow/ig, 🌈);
}

function replaceUnicorns(utils, content, url ){
  // Replaces unicorns rainbows where appropriate.
  return content.replace("🦄", "🐴");
}
<script>

<section data- data-oninclude="" data-include="content.fragment">
</section>
```