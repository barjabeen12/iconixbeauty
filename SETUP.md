# Iconix Beauty — storefront setup

Static site. No server, no PHP. Upload the whole folder to Netlify, Cloudflare Pages,
GitHub Pages or any shared host and it works.

## Files

- `index.html` — entry point, sends visitors to the home page
- `Home.dc.html`, `Shop.dc.html`, `Product.dc.html`, `Checkout.dc.html` — the four pages
- `SiteHeader.dc.html`, `SiteFooter.dc.html` — shared header (with bag drawer) and footer
- `store.js` — **all products, prices, shipping and contact details live here**
- `assets/` — product imagery and logo

## 1. Put in your real details (store.js, top of file)

```
orderEmail: 'orders@iconixbeauty.pk'   // your order inbox
whatsapp:   '923218583514'             // already set to 0321 8583514
shipping:   250                        // flat delivery charge
freeShippingOver: 2500
```

## 2. Turn on order emails (5 minutes, free)

1. Sign up at **emailjs.com** and connect your email (Gmail works).
2. Create an **Email Service** → copy the Service ID.
3. Create an **Email Template**. Put this in the body:

```
New order {{order_id}}

Customer: {{customer_name}}
Phone: {{phone}}
Email: {{email}}
City: {{city}}
Address: {{address}}
Notes: {{notes}}

{{items_text}}

Subtotal: {{subtotal}}
Delivery: {{delivery}}
Total: {{total}}
Payment: {{payment}}
```

Set the template's "To email" to your inbox. Copy the Template ID.
4. Account → General → copy the **Public Key**.
5. Paste all three into `store.js`:

```
emailjs: {
  publicKey:  'xxxxxxxxxxxxxxxx',
  serviceId:  'service_xxxxxxx',
  templateId: 'template_xxxxxxx'
}
```

Free tier is 200 emails/month. Until you fill these in, checkout still works — it just
asks the customer to send the order via WhatsApp or their email app in one tap.

## 3. Change prices or copy

Everything is in `store.js` → `PRODUCTS`. Prices on the home and shop pages are also
written into those pages, so update both (search for `Rs 1,250` etc.).

## Notes / assumptions to confirm

- Prices: facewash Rs 1,050, sunscreen Rs 1,250, night cream Rs 1,500, combo Rs 3,500
  (from your price list). Change in `store.js` and in the Home/Shop page markup.
- Delivery Rs 250 flat, free over Rs 2,500, 3–5 working days, 7-day return on unopened items.
- Customer reviews on the home page are placeholders — replace before going live.
- The facewash has no product photo yet — its card uses the printed label artwork. Send a bottle
  shot and I will swap it in.
- Photos in `assets/`: cream-beach.png, sunscreen-marble.jpg, sunscreen-box.jpg,
  sunscreen-beach.jpg, trio.png (the set), facewash.png (label artwork).
