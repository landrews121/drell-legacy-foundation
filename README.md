# The Drell Legacy Foundation Website

Official website for **The Drell Legacy Foundation**, serving Detroit, Michigan in honor of Juandrell “Drell” Lewis.

> **Mission:** “To ensure that the generosity, leadership, and community spirit of Juandrell ‘Drell’ Lewis continues to inspire and uplift future generations.”

## Website overview

This is a lightweight, single-page static website built with semantic HTML, responsive CSS, and dependency-free JavaScript. It is hosted free through GitHub Pages at [thedrelllegacyfoundation.org](https://thedrelllegacyfoundation.org/). It has no build step, database, analytics, payment processor, or server-side form handler.

## Organization information

- **Service area:** Detroit, Michigan
- **Phone:** [313-694-6963](tel:+13136946963)
- **Email:** [drelllegacyfoundation@gmail.com](mailto:drelllegacyfoundation@gmail.com)
- **Motto:** “Continuing the Legacy. Serving the Community.”

## File structure

| Path | Purpose |
| --- | --- |
| `index.html` | Page content, metadata, and structured data |
| `styles.css` | Mobile-first design and responsive layouts |
| `script.js` | Mobile navigation, event countdown, email contact flow, and footer year |
| `assets/back-to-school-drive-2026.png` | Approved 2026 event flyer |
| `assets/favicon.svg` | Branded browser icon |
| `CNAME` | Maps GitHub Pages to `thedrelllegacyfoundation.org` |
| `.nojekyll` | Serves the static files without Jekyll processing |
| `.github/workflows/deploy-pages.yml` | Deploys `main` to GitHub Pages |

## Preview locally

From the repository root:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> and check the site at mobile, tablet, and desktop widths. The contact form intentionally opens the visitor's configured email application; GitHub Pages cannot process form submissions on its own.

## Publish with GitHub Pages

The site should be deployed directly from the root of the `main` branch:

1. Open the repository on GitHub and select **Settings**.
2. In the sidebar, open **Pages** under **Code and automation**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose the **main** branch and the **/(root)** folder, then select **Save**.
5. Wait for GitHub Pages to finish publishing. Return to **Settings → Pages** to locate and open the published URL.

The expected URL is:

```text
https://<github-username>.github.io/<repository-name>/
```

If this repository is named `<github-username>.github.io`, the URL is instead `https://<github-username>.github.io/`.

## Connect a custom domain later

No custom domain is currently configured. When one is available:

1. Add the domain under **Settings → Pages → Custom domain** and save it.
2. At the domain registrar, add the DNS records GitHub displays. A `www` subdomain typically uses a CNAME pointing to `<github-username>.github.io`; an apex domain uses GitHub Pages A/AAAA records.
3. Wait for DNS verification, then enable **Enforce HTTPS** in Pages settings.
4. Keep the generated `CNAME` file in the repository after GitHub creates it.

Refer to [GitHub's custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) when a domain is ready, since required DNS values can change.

## Content and operational notes

- Update gallery placeholders only with approved Foundation photography and accurate alt text.
- The site does not claim financial contributions are tax-deductible and does not accept online payments.
- Confirm the Foundation's organizational status before changing the financial contribution notice.
- Keep the contact phone number, email address, and event details current in `index.html`.
