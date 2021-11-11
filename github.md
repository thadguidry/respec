# `github`

The `github` option allows you associate your specification with a repository on GitHub.

It takes either a string (URL to your repo or a string of format: `org/repo`) or an object with the following properties:

- `repoURL` - the URL for the repository (e.g., https://github.com/w3c/browser-payment-api)
- `branch` - _optional_, the branch you are using for GitHub pages. It defaults to "gh-pages".

This automatically generates:

- [githubAPI](githubAPI)
- [issueBase](issueBase)
- [edDraftURI](edDraftURI)

It adds "Feedback:" to the header of the document, with the appropriate links to your GitHub repository.

![feedback header, with links to pull request, open issues, and create new issue on Github](https://user-images.githubusercontent.com/870154/141234860-7335ff12-6690-44bf-b9fe-81142edc3476.png)

This is normally what you want:

```js "example": "Set GitHub repository"
var respecConfig = {
  github: "w3c/browser-payment-api",
};
```

```js "example": "Set GitHub repository as a URL"
var respecConfig = {
  github: "https://github.com/w3c/browser-payment-api",
};
```

This example shows a repository whose specs are being served from a "public-docs" branch.

```js "example": "Set GitHub repository with a different default branch"
var respecConfig = {
  github: {
    repoURL: "https://github.com/w3c/browser-payment-api",
    branch: "public-docs", // alternative branch
  },
};
```
