# armeetnarang.com

Static site (no build step). Hosted on Netlify, source on GitHub.

```
netlify.toml        Netlify settings (publishes the repo root, headers, /links rewrite)
index.html          Homepage (reads all its text from content.js)
links.html          "Book, pay & policies" page, served at /links
content.js          ALL editable text, fees, locations, links, intake + policy
popup.js            Discovery-call popup (config block at the top)
404.html, robots.txt, sitemap.xml, site.webmanifest, favicons
images/             Portrait, social-share image, payment QR
.nojekyll           Tells GitHub Pages to serve files as-is
```

## Editing content

Open `content.js`. Change the text, save, commit, push. Netlify redeploys in under a minute.

- Fees, locations, helplines and social links are written once and reused by both pages.
- The `links` section controls the `/links` page: intake form URL, payment details, cancellation policy.
- The popup (timing, wording, buttons) is the config block at the top of `popup.js`.

### Changing payment details

Everything is under `links.payment` in `content.js`: UPI ID, QR image, bank details and the confirmation wording.
To swap the QR, replace `images/payment-qr.png` (keep the name, or update `qrImage`, `qrWidth` and `qrHeight`).
Set `bank: null` to hide the bank-transfer block. The intake form link is `links.intake.url`.

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
Leave "Build command" empty. The publish directory comes from `netlify.toml` (`.`, the repo root).

Every push to `main` now deploys automatically.

## After the first deploy

- Open `https://armeetnarang.com/links` and check every button.
- Add the domain in Google Search Console and submit `https://armeetnarang.com/sitemap.xml`.
- Share the site once in WhatsApp / LinkedIn to confirm the new preview image looks right.

## Previewing on GitHub Pages

Repo → Settings → Pages → Source: "Deploy from a branch" → `main` / `(root)`.
The preview lives at `https://<username>.github.io/<repo>/`. All links in the site are relative, so it works there too.
Google Analytics only runs on armeetnarang.com, so previews don't count as visits.
Note: a public repo + Pages makes the preview publicly visible (the canonical tags point Google to armeetnarang.com).
