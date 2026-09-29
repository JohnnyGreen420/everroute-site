// Checks the static export in out/. Run `npm run build` first, then `npm test`.
// Uses only Node built-ins so the suite adds no dependencies.

import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");
const SITE_URL = "https://everroute.ca";

const PAGES = {
  "/": "index.html",
  "/company/": "company/index.html",
  "/404": "404.html",
};

function readPage(file) {
  const full = path.join(OUT, file);
  assert.ok(
    existsSync(full),
    `${file} is missing; run \`npm run build\` first`,
  );
  return readFileSync(full, "utf8");
}

// Remove inline scripts and styles so checks only see rendered markup.
function markup(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "");
}

function visibleText(html) {
  return markup(html)
    .replace(/<head\b[\s\S]*?<\/head>/i, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;|&rsquo;|’/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tags(html, name) {
  const re = new RegExp(`<${name}\\b([^>]*)>`, "gi");
  return [...markup(html).matchAll(re)].map((m) => m[1]);
}

function attr(attrs, name) {
  const m = attrs.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`, "i"));
  return m ? m[1] : null;
}

function ids(html) {
  return [...markup(html).matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
}

function meta(html, key) {
  const m = html.match(
    new RegExp(
      `<meta[^>]+(?:name|property)="${key}"[^>]*content="([^"]*)"`,
      "i",
    ),
  );
  return m ? m[1] : null;
}

for (const [route, file] of Object.entries(PAGES)) {
  test(`${route}: document basics`, () => {
    const html = readPage(file);
    assert.match(html, /<html[^>]*\slang="en-CA"/);
    assert.match(html, /<title>[^<]{10,}<\/title>/);
    assert.ok(meta(html, "description"), "meta description");
    assert.ok(/<link[^>]+rel="icon"/.test(html), "favicon link");
  });

  test(`${route}: landmarks, skip link, and headings`, () => {
    const html = readPage(file);
    assert.equal(tags(html, "h1").length, 1, "exactly one h1");
    assert.equal(tags(html, "main").length, 1, "exactly one main");
    assert.ok(tags(html, "header").length >= 1, "header landmark");
    assert.ok(tags(html, "footer").length >= 1, "footer landmark");
    for (const nav of tags(html, "nav")) {
      assert.ok(attr(nav, "aria-label"), "every nav has an aria-label");
    }
    const skip = tags(html, "a").find((a) => attr(a, "href") === "#main");
    assert.ok(skip, "skip link to #main");
    assert.ok(ids(html).includes("main"), "#main target exists");

    const levels = [...markup(html).matchAll(/<h([1-6])\b/g)].map((m) =>
      Number(m[1]),
    );
    assert.equal(levels[0], 1, "first heading is h1");
    levels.reduce((prev, level) => {
      assert.ok(
        level <= prev + 1,
        `heading level skips from h${prev} to h${level}`,
      );
      return level;
    });
  });

  test(`${route}: ids are unique and images have alt text`, () => {
    const html = readPage(file);
    const all = ids(html);
    const dupes = all.filter((id, i) => all.indexOf(id) !== i);
    assert.deepEqual(dupes, [], "duplicate ids");
    for (const img of tags(html, "img")) {
      assert.notEqual(attr(img, "alt"), null, `img without alt: ${img}`);
    }
  });

  test(`${route}: links resolve`, () => {
    const html = readPage(file);
    const pageIds = ids(html);
    for (const a of tags(html, "a")) {
      const href = attr(a, "href");
      assert.ok(href, "anchor without href");
      if (href.startsWith("#")) {
        assert.ok(
          pageIds.includes(href.slice(1)),
          `missing in-page target ${href}`,
        );
      } else if (href.startsWith("/")) {
        const [pathname, hash] = href.split("#");
        const target = pathname.endsWith("/")
          ? path.join(pathname, "index.html")
          : pathname;
        const targetHtml = readPage(target.replace(/^\//, ""));
        if (hash) {
          assert.ok(ids(targetHtml).includes(hash), `missing target ${href}`);
        }
      } else if (/^[a-z]+:/i.test(href)) {
        assert.match(
          href,
          /^(https:|mailto:)/,
          `insecure or unexpected link ${href}`,
        );
      } else {
        assert.fail(`relative link ${href} will break with trailing slashes`);
      }
      if (attr(a, "target") === "_blank") {
        assert.match(
          attr(a, "rel") ?? "",
          /noopener/,
          `${href} opens without noopener`,
        );
      }
    }
  });

  test(`${route}: copy guardrails`, () => {
    const text = visibleText(readPage(file));
    const banned = [
      /revolutionar/i,
      /game[- ]chang/i,
      /cutting[- ]edge/i,
      /world[- ]class/i,
      /unleash/i,
      /synergy/i,
      /disrupt/i,
      /the future is here/i,
      /coming soon/i,
      /learn more/i,
      /get started/i,
      /\bInc\b\.?/,
      /Everroute/, // brand is always "EverRoute"
      /\bAlex\b/, // no household details on the public site
      // Lines that implied unannounced products or an undocumented standard.
      /far enough along/i,
      /company standard/i,
    ];
    for (const pattern of banned) {
      assert.doesNotMatch(text, pattern);
    }
  });
}

test("home: Haven is presented as in development with working routes out", () => {
  const html = readPage("index.html");
  const text = visibleText(html);
  assert.match(text, /Haven/);
  assert.match(text, /In development/);
  const hrefs = tags(html, "a").map((a) => attr(a, "href"));
  assert.ok(hrefs.includes("https://heyhaven.ca"), "links to heyhaven.ca");
  assert.ok(
    hrefs.includes("https://tally.so/r/2EoJ9V"),
    "links to the Haven waitlist",
  );
});

test("home and company: contact route is visible", () => {
  for (const file of ["index.html", "company/index.html"]) {
    const html = readPage(file);
    assert.match(visibleText(html), /hello@everroute\.ca/);
    const hrefs = tags(html, "a").map((a) => attr(a, "href"));
    assert.ok(
      hrefs.includes("mailto:hello@everroute.ca"),
      `${file} mailto link`,
    );
  }
});

test("canonical URLs and social cards", () => {
  for (const [route, file] of Object.entries(PAGES)) {
    if (route === "/404") continue;
    const html = readPage(file);
    const canonical = html.match(
      /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/,
    );
    assert.ok(canonical, `${route} canonical`);
    assert.equal(canonical[1], `${SITE_URL}${route}`);
    assert.ok(meta(html, "og:image"), `${route} og:image`);
    assert.equal(meta(html, "twitter:card"), "summary_large_image");
    assert.ok(meta(html, "twitter:image"), `${route} twitter:image`);
  }
});
