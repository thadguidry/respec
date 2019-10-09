"use strict";

import { flushIframes, makeRSDoc, makeStandardOps } from "../SpecHelper.js";

describe("Core — Contributors", () => {
  afterAll(flushIframes);

  it("Expands list of contributor names", async () => {
    const body = `
      <section>
        <div id="gh-contributors"></div>
      </section>
    `;
    const ops = makeStandardOps(
      {
        github: "org/repo",
        githubAPI: `${window.parent.location.origin}/tests/data/contrib/`,
      },
      body
    );
    const doc = await makeRSDoc(ops);

    const contributors = doc.querySelector("#gh-contributors");
    expect(contributors.textContent).toBe(
      "Bobby Tables, buzz_aldrin, and Neil Armstrong"
    );
  });
});