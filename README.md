# armeetnarang.com

Static site (no build step). Hosted on Netlify, source on GitHub.

```
netlify.toml          Netlify settings (publishes /public, headers, /links rewrite)
public/               Everything in here goes live
  index.html          Homepage (reads all its text from content.js)
  links.html          "Book, pay & policies" page, served at /links
  content.js          ALL editable text, fees, locations, links, intake + policy
  popup.js            Discovery-call popup (config block at the top)
  404.html, robots.txt, sitemap.xml, site.webmanifest, favicons
  images/             Portrait, social-share image
```

## Editing content

Open `public/content.js`. Change the text, save, commit, push. Netlify redeploys in under a minute.

- Fees, locations, helplines and social links are written once and reused by both pages.
- The `links` section controls the `/links` page: intake form URL, payment details, cancellation policy.
- The popup (timing, wording, buttons) is the config block at the top of `public/popup.js`.

### Add your payment QR and UPI ID (one-time)

1. Put your QR image in `public/images/`, e.g. `payment-qr.png`.
2. In `content.js`, under `links.payment`, set `qrImage: "images/payment-qr.png"` and `upiId: "yourname@bank"` (and `upiName`).

Until you do, the payment step shows a "Get payment details" WhatsApp button instead.

## Deploying

**Push to GitHub**

```bash
cd armeetnarang
git init -b main
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<your-username>/armeetnarang.git
git push -u origin main
```

(Or create the repo on github.com and drag the folder contents into "uploading an existing file".)

**Connect Netlify.** Best option is to link your *existing* site so the domain, SSL and settings stay as they are:
Netlify → your site → Site configuration → Build & deploy → Continuous deployment → **Link repository** → pick the repo.
Leave "Build command" empty. Publish directory is picked up from `netlify.toml` (`public`).

Every push to `main` now deploys automatically.

## After the first deploy

- Open `https://armeetnarang.com/links` and check every button.
- Add the domain in Google Search Console and submit `https://armeetnarang.com/sitemap.xml`.
- Share the site once in WhatsApp / LinkedIn to confirm the new preview image looks right.
