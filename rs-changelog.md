The `<rs-changelog>` custom element to show a list of commits between two commits/tags. This list of commits is shown from newest to oldest. Each commit message is linked to the commit.

## Attributes

 * `from`: a commit hash or git tag, from when (inclusive). 
 * `to`: optional, a commit hash or git tag until when (inclusive). If omitted, it just does to the last commit. 
 * `filter`: the name of a JS function to call, which allows you to filter out commits. 

## Filtering
The filter function takes one argument, which is a commit object. The object is composed of two properties:

 * `commit` - the commit hash. 
 * `message` - the headline of the commit message. 

### Filtering example

```JS
function respecChangelogFilter(commit) {
  // commit.hash = commit hash
  // commit.message = commit message headline
  // Return `true` if commit is to be shown, false otherwise.
  return !commit.message.startsWith('chore');
}
```

## Usage examples

```html
<p>Commits since "CR":</p>
<rs-changelog from="CR"></rs-changelog>

<p>All commits between "CR" tag and a commit "5b1a9da":</p>
<rs-changelog from="CR" to="5b1a9da"></rs-changelog>

<p>
  Show commits since "CR", but filter the commits to be shown using a
  function called `respecChangelogFilter` which is defined globally:
</p>
<rs-changelog from="CR" filter="respecChangelogFilter"></rs-changelog>
```

## Screenshot

![image](https://user-images.githubusercontent.com/8426945/69219953-f4039a00-0b99-11ea-9205-6d005e8b94cc.png)
