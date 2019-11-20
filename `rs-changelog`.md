# `rs-changelog`

A custom element to show a list of commits between two commits/tags/commit-ish. This list of commits is rendered in recent-first order. Each commit message is linked to the commit.

## Usage

``` html
<!-- Show all commits since "CR" tag -->
<rs-changelog from="CR"></rs-changelog>

<!-- Show all commits between "CR" tag and a commit "5b1a9da" -->
<rs-changelog from="CR" to="5b1a9da"></rs-changelog>

<!-- Show commits since "CR", but filter the commits to be shown using a
  function called `respecChangelogFilter` which is defined globally -->
<rs-changelog from="CR" filter="respecChangelogFilter"></rs-changelog>
<script>
function respecChangelogFilter(commit) {
  // commit.hash = commit hash
  // commit.message = commit message headline
  // Return `true` if commit is to be shown, false otherwise.
  return !commit.message.startsWith('chore');
}
</script>
```

## Demo

![image](https://user-images.githubusercontent.com/8426945/69219953-f4039a00-0b99-11ea-9205-6d005e8b94cc.png)
