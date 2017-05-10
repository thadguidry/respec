## github
The `github` option allows you associate your specification with a repository on GitHub. It takes an object with the following properties:

  * repoURL - the URL for the repository (e.g., https://github.com/w3c/browser-payment-api)
  * branch - *optional*, the branch you are using for GitHub pages. It defaults to "gh-pages". 

This automatically generates:

 * [githubAPI](githubAPI)
 * [issueBase](issueBase)
 * [edDraftURI](edDraftURI)

It also adds an object to [otherLinks](otherLinks) for under "Participate", with the appropriate links to your github repository.

### Example of usage 

```JS
const respecConfig = {
  github: "https://github.com/w3c/browser-payment-api",
}
```


