# Creating Static Snapshots

Open the ReSpec UI and select "Export...".

<figure>
<img width="249" alt="" src="https://user-images.githubusercontent.com/870154/117614998-7926a880-b1ac-11eb-9d4e-654a21165aa8.png">
<figcaption>Screen shot of ReSpec UI</figcaption>
</figure>

Select the format to export as.

<figure>
<img width="811" alt="" src="https://user-images.githubusercontent.com/870154/117615001-7af06c00-b1ac-11eb-8540-97c474244045.png">
<figcaption>ReSpec's supports various export formats</figcaption>
</figure>

## Using command line

One off (downloads about 100mb)... 

```bash
npx respec --src source.html --out index.html
```

Or, to install ReSpec for repeated use:

```bash
npm install --global respec
```

And then:

```bash
respec --src source.html --out index.html
```

For more options, run `respec --help`.

```
  Description
    Converts a ReSpec source file to HTML and writes to destination.

  Usage
    $ respec [source] [destination] [options]

  Options
    -s, --src            URL to ReSpec source file.
    -o, --out            Path to output file.
    -t, --timeout        How long to wait before timing out (in seconds).  (default 10)
    --use-local          Use locally installed ReSpec instead of the one in document.  (default false)
    -e, --haltonerror    Abort if the spec has any errors.  (default false)
    -w, --haltonwarn     Abort if ReSpec generates warnings.  (default false)
    --disable-sandbox    Disable Chromium sandboxing if needed.  (default false)
    --devtools           Enable debugging and show Chrome's DevTools.  (default false)
    --verbose            Log processing status to stdout.  (default false)
    --localhost          Spin up a local server to perform processing.  (default false)
    --port               Port override for --localhost.  (default 3000)
    -v, --version        Displays current version
    -h, --help           Displays this message
```

<aside class="note">
If you already have Chrome installed on your computer, you can speed up the process by not installing a new copy of Chrome on each install. To do so, add following two environment variables before installing or running above steps:

```bash
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1
export PUPPETEER_EXECUTABLE_PATH="/usr/bin/google-chrome"
# replace "/usr/bin/google-chrome" with path to Chrome executable on your system.
# On MacOS, it's generally:
# "/Applications/Google Chrome.app/Contents/MacOS/Google chrome"
```
</aside>
