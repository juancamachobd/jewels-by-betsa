/* ------------------------------------------------------------------
   build.js — writes the two language pages from one set of texts.

   Run:  node build.js

   Source:  index.html (page structure) + js/i18n.js (all texts, ES + EN)
   Output:  index.html      Spanish page  -> https://jewelsbybetsa.com/
            en/index.html   English page  -> https://jewelsbybetsa.com/en/
            sitemap.xml

   Each page is written with its texts already in the HTML, so search
   engines can read both languages without running JavaScript.
   ------------------------------------------------------------------ */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SITE = "https://jewelsbybetsa.com";
const root = __dirname;

const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "js/i18n.js"), "utf8"), sandbox);
const dict = sandbox.window.JBB_I18N;

// Price range of each category, in US dollars: [lowest, highest].
// Change the numbers here, then run  node build.js
const PRICES = {
  rosarios: [20, 25],
  pulseras: [10, 17],
  denarios: [8, 12],
  llaveros: [12, 18],
};
const PRODUCT_IMAGES = {
  rosarios: "rosario-collar.jpg",
  pulseras: "rosario-pulsera.jpg",
  denarios: "denario-madera.jpg",
  llaveros: "llavero-denario-rosa.jpg",
};

const LANGS = [
  { code: "es", idx: 0, dir: "", url: SITE + "/", locale: "es_US" },
  { code: "en", idx: 1, dir: "en", url: SITE + "/en/", locale: "en_US" },
];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (s) => esc(s).replace(/"/g, "&quot;");

function text(key, idx) {
  if (!dict[key]) throw new Error("Missing text in js/i18n.js: " + key);
  return dict[key][idx];
}

function between(html, name, content) {
  const re = new RegExp("(<!-- " + name + ":start[^>]*-->)[\\s\\S]*?(\\s*<!-- " + name + ":end -->)");
  if (!re.test(html)) throw new Error("Marker not found in index.html: " + name);
  return html.replace(re, (m, a, b) => a + "\n" + content + b);
}

function seoBlock(lang) {
  const t = (k) => text(k, lang.idx);
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jewels by Betsa",
    url: SITE + "/",
    logo: SITE + "/images/logo.jpg",
    image: SITE + "/images/og-jewels-by-betsa.jpg",
    description: t("meta.desc"),
    sameAs: ["https://www.instagram.com/jewelsbybetsa/", "https://www.tiktok.com/@jewelsbybetsa"],
  };
  const products = {
    "@context": "https://schema.org",
    "@graph": Object.keys(PRICES).map((k) => ({
      "@type": "Product",
      name: t(k + ".title"),
      description: t(k + ".desc"),
      image: SITE + "/images/" + PRODUCT_IMAGES[k],
      url: lang.url + "#coleccion",
      brand: { "@type": "Brand", name: "Jewels by Betsa" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: PRICES[k][0],
        highPrice: PRICES[k][1],
      },
    })),
  };
  return [
    `<title>${esc(t("meta.title"))}</title>`,
    `<meta name="description" content="${escAttr(t("meta.desc"))}">`,
    `<link rel="canonical" href="${lang.url}">`,
    ...LANGS.map((l) => `<link rel="alternate" hreflang="${l.code}" href="${l.url}">`),
    `<link rel="alternate" hreflang="x-default" href="${SITE}/">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Jewels by Betsa">`,
    `<meta property="og:title" content="${escAttr(t("meta.title"))}">`,
    `<meta property="og:description" content="${escAttr(t("meta.desc"))}">`,
    `<meta property="og:image" content="${SITE}/images/og-jewels-by-betsa.jpg">`,
    `<meta property="og:url" content="${lang.url}">`,
    `<meta property="og:locale" content="${lang.locale}">`,
    `<script type="application/ld+json">${JSON.stringify(org).replace(/</g, "\\u003c")}</script>`,
    `<script type="application/ld+json">${JSON.stringify(products).replace(/</g, "\\u003c")}</script>`,
  ].map((l) => "  " + l).join("\n");
}

function langBlock(lang) {
  const href = { es: lang.code === "es" ? "./" : "../", en: lang.code === "en" ? "./" : "en/" };
  const link = (code, label) =>
    `        <a id="btn${label[0]}${label[1].toLowerCase()}" href="${href[code]}" hreflang="${code}" lang="${code}"` +
    (lang.code === code ? ' aria-current="true"' : "") + `>${label}</a>`;
  return [link("es", "ES"), link("en", "EN")].join("\n");
}

function render(template, lang) {
  let html = template;
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang.code}">`);
  html = between(html, "seo", seoBlock(lang));
  html = between(html, "lang", langBlock(lang));

  // Element text: <tag ... data-i18n="key" ...>text</tag>
  html = html.replace(/(<(\w+)\b[^>]*\bdata-i18n="([^"]+)"[^>]*>)([^<]*)(<\/\2>)/g,
    (m, open, tag, key, old, close) => open + esc(text(key, lang.idx)) + close);

  // Price ranges: <div class="price" data-price="rosarios">$20 – $25 USD</div>
  html = html.replace(/(<div class="price" data-price="(\w+)">)[^]*?(<\/div>)/g, (m, open, key, close) => {
    if (!PRICES[key]) throw new Error("No price for: " + key);
    return open + "$" + PRICES[key][0] + " – $" + PRICES[key][1] + " <small>USD</small>" + close;
  });

  // Attributes: placeholder / alt / aria-label
  const attrs = [["data-i18n-ph", "placeholder"], ["data-i18n-alt", "alt"], ["data-i18n-aria", "aria-label"], ["data-i18n-href", "href"]];
  html = html.replace(/<(\w+)\b[^>]*>/g, (tag) => {
    for (const [marker, attr] of attrs) {
      const m = tag.match(new RegExp("\\b" + marker + '="([^"]+)"'));
      if (!m) continue;
      const value = `${attr}="${escAttr(text(m[1], lang.idx))}"`;
      const re = new RegExp("(\\s)" + attr + '="[^"]*"');
      tag = re.test(tag) ? tag.replace(re, "$1" + value) : tag.replace(/^<(\w+)/, "<$1 " + value);
    }
    return tag;
  });

  // The English page lives one folder down, so local files are one level up.
  if (lang.dir) {
    html = html.replace(/\b(src|href)="(images|videos|css|js)\//g, '$1="../$2/');
  }
  return html;
}

const templatePath = path.join(root, "index.html");
const template = fs.readFileSync(templatePath, "utf8");

for (const lang of LANGS) {
  const out = lang.dir ? path.join(root, lang.dir, "index.html") : templatePath;
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, render(template, lang));
  console.log("wrote", path.relative(root, out));
}

const today = new Date().toISOString().slice(0, 10);
const alternates = LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${l.url}"/>`).join("\n");
fs.writeFileSync(path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.map((l) => `  <url>
    <loc>${l.url}</loc>
    <lastmod>${today}</lastmod>
${alternates}
  </url>`).join("\n")}
</urlset>
`);
console.log("wrote sitemap.xml");
