# Iconix Beauty — storefront setup

Static site. No server. Upload everything in this folder to the GitHub repo root
(GitHub Pages), Netlify, or any static host.

## Pages

- `index.html` — home
- `shop.html`, `product.html`, `checkout.html` — shop, product detail, checkout
- `about.html`, `privacy.html`, `terms.html` — company pages
- `SiteHeader.dc.html`, `SiteFooter.dc.html` — shared header/footer (keep names as-is)
- `store.js` — ALL products, prices, shipping and contact details live here
- `assets/` — imagery

## Order emails — ALREADY WIRED ✔

Orders are emailed to **iconixbeauty84@gmail.com** via FormSubmit (free, no account).

ONE-TIME ACTIVATION: place a test order on the live site. FormSubmit will send an
email titled "Activate your form" to iconixbeauty84@gmail.com — open it and click
the activation link once. Every order after that arrives automatically
(check Spam for the first one).

If the email ever fails to send, the customer is shown one-tap
"Send on WhatsApp / Send by email" buttons with the full order — nothing is lost.

Orders also always reference WhatsApp +92 321 8583514 (set in `store.js`).

## Current prices (change in store.js AND in index/shop page markup)

- Brightening Face Wash — Rs 1,199 (was 1,499, 20% off)
- Tinted Sunscreen SPF 50+ — Rs 1,299 (was 1,599, 19% off)
- Anti Aging Night Cream — Rs 1,499 (was 1,799, 17% off)
- Night Cream + Face Wash — Rs 2,499 (was 2,698)
- Sunscreen + Face Wash — Rs 2,299 (was 2,498)
- 3 Products Combo — Rs 3,799 (was 3,997)

Delivery: Rs 250 flat, FREE over Rs 3,000, 3–5 working days, COD only.

## Still placeholder

- Customer reviews on the home page — replace with real ones before going live.
