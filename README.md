# Jewels by Betsa

Sitio web de Jewels by Betsa — rosarios, pulseras y collares hechos a mano.
Static website (HTML + CSS + JavaScript, no build step).

## Structure

| Path | What it is |
|---|---|
| `index.html` | Spanish page (jewelsbybetsa.com) and the page structure |
| `en/index.html` | English page (jewelsbybetsa.com/en/) — generated, do not edit by hand |
| `js/i18n.js` | **Every text on the site**, in Spanish and English |
| `js/main.js` | Mobile menu, photo switcher, custom-order form |
| `css/styles.css` | All styling (colors are the variables at the top) |
| `images/`, `videos/` | Photos and clips |
| `build.js` | Writes both language pages and `sitemap.xml` from the texts |
| `sitemap.xml`, `robots.txt` | Tell search engines which pages exist |

## Preview on this computer

In VS Code install the **Live Server** extension, right-click `index.html`
and choose **Open with Live Server**.

## Editing text

1. Change the text in `js/i18n.js` — each line is `"key": ["Español", "English"]`.
2. Run `node build.js` in the project folder. This rewrites `index.html`,
   `en/index.html` and `sitemap.xml` so search engines see the new text.
3. Commit and push; Cloudflare publishes automatically.

Page titles and Google descriptions are the `meta.title` and `meta.desc`
lines in `js/i18n.js`. Image descriptions are the `alt.*` lines.

## Custom orders ("Personaliza tu rosario")

The form sends each request to Betsa by WhatsApp and/or email. Her contact
details go in the `CONTACT` line at the top of `js/main.js`. A send button
only appears when its contact detail is filled in.

## Roadmap

- [x] Project folder with separate HTML / CSS / JS
- [x] Git + GitHub repository (github.com/juancamachobd/jewels-by-betsa)
- [x] Free hosting on Cloudflare (auto-publishes on every push to `main`)
- [x] Domain: https://jewelsbybetsa.com
- [x] Custom order form (WhatsApp + email)
- [x] SEO: separate Spanish/English pages with hreflang, sitemap, Organization markup
- [ ] Register the site in Google Search Console and submit sitemap.xml
- [ ] Product markup (needs the priced catalog)
- [x] Payments: PayPal.me link
- [ ] Payments: Zelle QR, Stripe Payment Link for cards
- [ ] Products in a data file (add a piece without editing HTML)
