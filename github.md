The `github` option allows you associate your specification with a repository on GitHub. 

It takes either a string (URL to your repo) or an object with the following properties:

  * `repoURL` - the URL for the repository (e.g., https://github.com/w3c/browser-payment-api)
  * `branch` - *optional*, the branch you are using for GitHub pages. It defaults to "gh-pages". 

This automatically generates:

 * [githubAPI](githubAPI)
 * [issueBase](issueBase)
 * [edDraftURI](edDraftURI)

It also adds an object to [otherLinks](otherLinks) for under "Participate", with the appropriate links to your github repository.

### Examples of usage 
This is normally what you want:

```JS
const respecConfig = {
  github: "https://github.com/w3c/browser-payment-api"
}
```

This example shows a repository whose specs are being served from a "public-docs" branch. 

```JS
const respecConfig = {
  github: {
    repoURL: "https://github.com/w3c/browser-payment-api",
    branch: "public-docs", // alternative branch 
  },
}
```


