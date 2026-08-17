/* ============================================================
   ICONIX BEAUTY — store data + cart (no server required)
   EDIT THIS FILE to change prices, copy, shipping or contacts.
   ============================================================ */
(function () {
  var CONFIG = {
    brand: 'Iconix Beauty',
    tagline: 'Be Confident. Be Iconic.',

    /* ---- WHERE ORDERS GO -------------------------------------
       1) Make a free account at emailjs.com
       2) Add an email service, then create a template whose body
          uses these variables:
          {{order_id}} {{customer_name}} {{phone}} {{email}}
          {{city}} {{address}} {{notes}} {{items_text}}
          {{subtotal}} {{delivery}} {{total}} {{payment}}
       3) Paste the three ids below. Until then, checkout falls
          back to WhatsApp + the customer's own email app.        */
    emailjs: {
      publicKey: '',      // e.g. 'A1b2C3d4E5f6G7h8'
      serviceId: '',      // e.g. 'service_xxxxxxx'
      templateId: ''      // e.g. 'template_xxxxxxx'
    },

    orderEmail: 'orders@iconixbeauty.pk',   // <-- your inbox
    whatsapp: '923218583514',              // <-- digits only, with country code
    instagram: '',
    city: 'Pakistan',

    currency: 'Rs',
    shipping: 250,
    freeShippingOver: 3000,
    deliveryDays: '3–5 working days',
    payment: 'Cash on Delivery'
  };

  var PRODUCTS = [
    {
      sku: 'IB-NC-50',
      slug: 'anti-aging-night-cream',
      name: 'Anti Aging Night Cream',
      sub: 'For all skin types',
      size: '50g / 1.76oz',
      price: 1499,
      img: 'assets/cream.png',
      gallery: ['assets/cream.png', 'assets/trio.png', 'assets/cream-beach.png'],
      badge: 'Overnight renewal',
      short: 'An advanced cell-renewing treatment that firms, smooths and replenishes while you sleep.',
      description: 'Defy the visible signs of time with Iconix Anti Aging Night Cream — an advanced cell-renewing treatment engineered to restore your skin\u2019s youthful vitality. This high-performance formula works deep within the skin matrix to smooth the appearance of stubborn fine lines, deep wrinkles and uneven texture. It dynamically boosts structural elasticity and firmness while delivering a rich surge of targeted moisture to plump up depleted cells.',
      benefits: ['Firms sagging skin', 'Smooths fine lines', 'Locks in deep moisture', 'Boosts skin elasticity', 'Repairs damaged barrier', 'Plumps depleted cells'],
      howto: [
        ['Cleanse', 'Start with a freshly washed, towel-dried face.'],
        ['Warm a pea-size amount', 'Smooth a small dime-sized amount over face and neck.'],
        ['Massage upward', 'Use gentle upward and outward lifting motions until fully absorbed.']
      ],
      ingredients: 'Vitamin E, Niacinamide, Vitamin D, Glutathione, Retinol, Hydrolyzed Collagen, Aqua, Butyrospermum Parkii Butter, Sodium Ascorbyl Phosphate, Propylene Glycol, Cetearyl Alcohol, Stearic Acid, Sodium Benzoate, Triethanolamine, Sodium Laureth Sulfate, Glyceryl Stearate, Parfum.'
    },
    {
      sku: 'IB-FW-150',
      slug: 'brightening-facewash',
      name: 'Brightening Facewash',
      sub: 'Vitamin C enriched · Gel beads',
      size: '150ml / 5.0 fl oz',
      price: 1199,
      img: 'assets/facewash.png',
      gallery: ['assets/facewash.png', 'assets/trio.png'],
      badge: 'Cleanses pores deeply',
      short: 'A clarifying gel with nutrient-rich moisture beads that polish away dulling dead cells and excess oil.',
      description: 'Transform your daily cleansing ritual with Iconix Gel Beads Facewash, a high-performance formula designed to instantly revitalise a tired complexion. This clarifying gel features soft, nutrient-rich moisture beads that burst upon contact to gently polish away dulling dead cells, stubborn oil and deep-seated impurities.',
      benefits: ['Cleanses pores deeply', 'Bursts with moisture', 'Smooths rough texture', 'Controls excess oil', 'Brightens dull skin', 'Refines skin barrier'],
      howto: [
        ['Dampen', 'Wet your face and neck with lukewarm water.'],
        ['Activate', 'Squeeze a coin-sized amount into wet palms and rub to burst the beads.'],
        ['Lather & rinse', 'Massage into skin in circles, then rinse into a rich, velvety finish.']
      ],
      ingredients: 'Aqua, Sodium Laureth Sulfate, Acrylates Copolymer, Glycolic Acid, Triethanolamine, Methylparaben Sodium, DMDM Hydantoin, Parfum, Mannitol (and) Cellulose (Beads).'
    },
    {
      sku: 'IB-TS-50',
      slug: 'tinted-sunscreen-spf50',
      name: 'Tinted Sunscreen SPF 50+',
      sub: 'UVA / UVB protection',
      size: '50ml / 1.69 fl oz',
      price: 1299,
      img: 'assets/sunscreen.png',
      gallery: ['assets/sunscreen.png', 'assets/trio.png', 'assets/sunscreen-beach.jpg'],
      badge: 'Bestseller',
      short: 'Broad-spectrum SPF 50+ with a lightweight tint that evens skin tone and disappears into skin.',
      description: 'Elevate your daily protection with Iconix Tinted Sunscreen — a high performance formula infused with a lightweight tint that evens skin tone and blends seamlessly. It shields against UVA/UVB, pollution and blue light while giving your skin a natural, radiant finish. Non-greasy, non-comedogenic and suitable for all skin types.',
      benefits: ['Broad spectrum protection', 'Evens skin tone', 'Lightweight & non-greasy', 'Natural tinted finish', 'Hydrates & soothes', 'Suitable for daily use'],
      howto: [
        ['Apply generously', 'A uniform layer on face and neck, 15 minutes before sun exposure.'],
        ['Blend out', 'Press and blend until the tint melts evenly into skin.'],
        ['Reapply', 'Every 2–3 hours, or after sweating and swimming.']
      ],
      ingredients: 'Aqua, Coco Caprylate, Titanium Dioxide, Zinc Oxide, Glycerin, Niacinamide, Dimethicone, Cetearyl Olivate, Sorbitan Olivate, Phenoxyethanol, Ethylhexylglycerin, Allantoin, Aloe Vera Extract, Tocopheryl Acetate, Fragrance.'
    },
    {
      sku: 'IB-DUO-NCFW',
      slug: 'night-cream-facewash-duo',
      name: 'Night Cream + Face Wash',
      sub: 'Special Offer 1 · Cleanse & renew',
      size: 'Face Wash 150ml + Night Cream 50g',
      price: 2499,
      compareAt: 2698,
      bundle: true,
      img: 'assets/bundle-cream-facewash.png',
      gallery: ['assets/bundle-cream-facewash.png', 'assets/cream.png', 'assets/facewash.png'],
      badge: 'Special Offer 1',
      short: 'The evening pair — a brightening Vitamin C cleanse, then overnight renewal.',
      description: 'Special Offer 1 pairs the Brightening Face Wash with the Anti Aging Night Cream. Cleanse away the day, then let retinol, collagen and niacinamide rebuild firmness overnight. Together they save Rs 199.',
      benefits: ['A complete evening routine', 'Brightens and evens tone', 'Firms and smooths overnight', 'Saves Rs 199'],
      howto: [
        ['Cleanse', 'Massage the gel-bead face wash into damp skin, then rinse.'],
        ['Renew', 'A dime-sized amount of Night Cream over face and neck.'],
        ['Every night', 'Six to eight weeks of consistency is where results show.']
      ],
      ingredients: 'See each product page for the full ingredient list.'
    },
    {
      sku: 'IB-DUO-TSFW',
      slug: 'sunblock-facewash-duo',
      name: 'Tinted Sunblock + Face Wash',
      sub: 'Special Offer 2 · Cleanse & protect',
      size: 'Face Wash 150ml + Sunblock 50ml',
      price: 2299,
      compareAt: 2498,
      bundle: true,
      img: 'assets/bundle-sun-facewash.png',
      gallery: ['assets/bundle-sun-facewash.png', 'assets/sunscreen.png', 'assets/facewash.png'],
      badge: 'Special Offer 2',
      short: 'The morning pair — a Vitamin C cleanse, then SPF 50+ tinted protection.',
      description: 'Special Offer 2 pairs the Brightening Face Wash with Tinted Sunblock SPF 50++. Cleanse, then shield against UVA, UVB, pollution and blue light with a weightless tint that evens tone. Together they save Rs 199.',
      benefits: ['A complete morning routine', 'Broad-spectrum SPF 50++', 'Evens tone, no white cast', 'Saves Rs 199'],
      howto: [
        ['Cleanse', 'Massage the gel-bead face wash into damp skin, then rinse.'],
        ['Protect', 'A generous even layer of Tinted Sunblock, 15 minutes before you leave.'],
        ['Reapply', 'Every two to three hours outdoors.']
      ],
      ingredients: 'See each product page for the full ingredient list.'
    },
    {
      sku: 'IB-SET-3',
      slug: 'three-product-combo',
      name: '3 Products Combo',
      sub: 'Best value · Cleanse, protect, renew',
      size: 'Face Wash 150ml + Sunblock 50ml + Night Cream 50g',
      price: 3799,
      compareAt: 3997,
      bundle: true,
      img: 'assets/trio.png',
      gallery: ['assets/trio.png', 'assets/cream.png', 'assets/sunscreen.png', 'assets/facewash.png'],
      badge: 'Best value',
      short: 'The complete routine: brightening cleanse, SPF 50++ by day, renewal by night.',
      description: 'All three formulas together. Cleanse with the Vitamin C gel-bead face wash, shield through the day with Tinted Sunblock SPF 50++, and let the Anti Aging Night Cream rebuild firmness overnight. The full routine, with free delivery.',
      benefits: ['A complete AM + PM routine', 'Brightens and evens tone', 'Daily broad-spectrum defence', 'Overnight firming and repair'],
      howto: [
        ['Morning', 'Face Wash, then Tinted Sunblock SPF 50++.'],
        ['Evening', 'Face Wash, then Anti Aging Night Cream.'],
        ['Every day', 'Consistency for 6–8 weeks is where the results live.']
      ],
      ingredients: 'See each product page for the full ingredient list.'
    }
  ];

  var KEY = 'iconix_cart_v1';

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function write(c) {
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) {}
    window.dispatchEvent(new CustomEvent('iconix-cart', { detail: c }));
  }
  function bySku(sku) {
    for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].sku === sku) return PRODUCTS[i];
    return null;
  }
  function bySlug(slug) {
    for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].slug === slug) return PRODUCTS[i];
    return null;
  }
  function fmt(n) {
    return CONFIG.currency + ' ' + Number(n || 0).toLocaleString('en-US');
  }
  function add(sku, qty) {
    var c = read(); c[sku] = (c[sku] || 0) + (qty || 1); write(c); return c;
  }
  function setQty(sku, qty) {
    var c = read();
    if (qty <= 0) { delete c[sku]; } else { c[sku] = qty; }
    write(c); return c;
  }
  function count() {
    var c = read(), n = 0; for (var k in c) n += c[k]; return n;
  }
  function lines() {
    var c = read(), out = [];
    for (var i = 0; i < PRODUCTS.length; i++) {
      var p = PRODUCTS[i];
      if (c[p.sku]) out.push({
        sku: p.sku, slug: p.slug, name: p.name, size: p.size, img: p.img,
        price: p.price, qty: c[p.sku], lineTotal: p.price * c[p.sku],
        priceText: fmt(p.price), lineTotalText: fmt(p.price * c[p.sku])
      });
    }
    return out;
  }
  function totals() {
    var l = lines(), sub = 0;
    for (var i = 0; i < l.length; i++) sub += l[i].lineTotal;
    var ship = (sub === 0 || sub >= CONFIG.freeShippingOver) ? 0 : CONFIG.shipping;
    return {
      subtotal: sub, shipping: ship, total: sub + ship,
      subtotalText: fmt(sub), shippingText: ship === 0 ? 'Free' : fmt(ship), totalText: fmt(sub + ship),
      toFreeShipping: Math.max(0, CONFIG.freeShippingOver - sub)
    };
  }
  function clear() { write({}); }

  function orderId() {
    var d = new Date(), p = function (n) { return (n < 10 ? '0' : '') + n; };
    return 'IB-' + String(d.getFullYear()).slice(2) + p(d.getMonth() + 1) + p(d.getDate()) + '-' +
      Math.floor(1000 + Math.random() * 9000);
  }

  function itemsText(l) {
    return l.map(function (x) {
      return x.qty + ' x ' + x.name + ' (' + x.size + ') — ' + fmt(x.lineTotal);
    }).join('\n');
  }

  function orderText(o) {
    return [
      'NEW ORDER ' + o.order_id,
      '',
      'Customer: ' + o.customer_name,
      'Phone: ' + o.phone,
      'Email: ' + (o.email || '—'),
      'City: ' + o.city,
      'Address: ' + o.address,
      'Notes: ' + (o.notes || '—'),
      '',
      o.items_text,
      '',
      'Subtotal: ' + o.subtotal,
      'Delivery: ' + o.delivery,
      'Total: ' + o.total,
      'Payment: ' + o.payment
    ].join('\n');
  }

  function whatsappLink(text) {
    return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(text);
  }
  function mailtoLink(o) {
    return 'mailto:' + CONFIG.orderEmail + '?subject=' + encodeURIComponent('Order ' + o.order_id) +
      '&body=' + encodeURIComponent(orderText(o));
  }

  function sendOrder(o) {
    var cfg = CONFIG.emailjs;
    if (!cfg.publicKey || !cfg.serviceId || !cfg.templateId || !window.emailjs) {
      return Promise.reject({ reason: 'not-configured' });
    }
    try { window.emailjs.init({ publicKey: cfg.publicKey }); } catch (e) {}
    return window.emailjs.send(cfg.serviceId, cfg.templateId, o);
  }

  window.ICONIX = {
    CONFIG: CONFIG, PRODUCTS: PRODUCTS,
    bySku: bySku, bySlug: bySlug, fmt: fmt,
    add: add, setQty: setQty, count: count, lines: lines, totals: totals, clear: clear,
    read: read, orderId: orderId, itemsText: itemsText, orderText: orderText,
    whatsappLink: whatsappLink, mailtoLink: mailtoLink, sendOrder: sendOrder
  };
  window.dispatchEvent(new Event('iconix-ready'));
})();
