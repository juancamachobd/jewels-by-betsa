# Jewels by Betsa

Sitio web de Jewels by Betsa — rosarios, pulseras y collares hechos a mano en Miami.
Static website (HTML + CSS + JavaScript, no build step).

## Structure

| Path | What it is |
|---|---|
| `index.html` | The page: all sections and the Spanish text |
| `css/styles.css` | All styling (colors are the variables at the top) |
| `js/main.js` | ES/EN translations, mobile menu, scroll animations |
| `images/` | Logo and product photos |
| `videos/` | Instagram clips shown in the "Video" section |

## Preview on this computer

Double-click `index.html`, or in VS Code install the **Live Server** extension,
right-click `index.html` and choose **Open with Live Server**.

## Editing text

Every text has a Spanish and an English version. Change both in `js/main.js`
(the `dict` list at the top: `"key": ["Español", "English"]`), and the Spanish
one in `index.html` as well.

## Roadmap

- [x] Project folder with separate HTML / CSS / JS
- [ ] Git + GitHub repository
- [ ] Free hosting (Cloudflare Pages / Netlify / GitHub Pages)
- [ ] Domain: jewelsbybetsa.com
- [ ] Payments: Zelle QR, PayPal.me link, Stripe Payment Link
- [ ] Products in a data file (add a piece without editing HTML)
