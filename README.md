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

Open <http://localhost:8000/>. Stop the server with <kbd>Ctrl</kbd>+<kbd>C</kbd>. A `/workspace/...` path and `0.0.0.0` are internal development addresses, not public website links.

## Edit content

1. Create a branch rather than editing `main` directly.
2. Edit visible copy and links in `index.html`.
3. Keep section IDs unchanged unless every corresponding navigation link is updated.
4. Check spelling, factual details, mailto subjects, and telephone links.
5. Preview locally, commit, and open a pull request.

### Replace images

Place approved Foundation media in `assets/` using lowercase, descriptive filenames. Update the image `src`, intrinsic `width` and `height`, and honest `alt` text in `index.html`. Do not present stock images as Drell or Foundation events. Compress large images without making flyer text unreadable and use `loading="lazy"` for below-the-fold media.

### Update the featured event

Search `index.html` for `August 15, 2026` and update every displayed date, time, venue, address, announcement, map link, and machine-readable `<time>` value together. Then update `eventStarts` and `eventEnds` in `script.js`; the explicit UTC offset is required so the countdown follows Detroit event time. Replace the flyer only with an approved current flyer and verify its dimensions.

## Contact form behavior

GitHub Pages cannot submit server-side forms. The contact interface builds a pre-addressed email in the visitor’s email application; the website stores nothing. Volunteer, sponsorship, and supply-donation buttons also use transparent `mailto:` links.

## Deploy through GitHub Pages

The workflow deploys automatically when a reviewed pull request is merged into `main`:

1. In the GitHub repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Merge the approved branch into `main`, or run **Actions → Deploy website to GitHub Pages → Run workflow**.
4. Open the workflow run and confirm the `deploy` job succeeds.
5. Return to **Settings → Pages** to open the published URL.

The repository URL is `https://github.com/landrews121/drell-legacy-foundation`, and its fallback project Pages URL is `https://landrews121.github.io/drell-legacy-foundation/`. The public custom-domain URL is `https://thedrelllegacyfoundation.org/`.

## Custom domain and HTTPS

`CNAME` must contain exactly:

```text
thedrelllegacyfoundation.org
```

Verify it before every deployment with `cat CNAME`. In **Settings → Pages**, confirm the custom domain matches, the DNS check succeeds, and **Enforce HTTPS** is enabled. Do not delete or rename `CNAME`. DNS records are managed at the domain registrar and should continue to use the values GitHub provides for the apex domain.

## Troubleshooting

### Deployment failed or the page does not open

- Confirm the website changes reached `main`.
- Confirm **Settings → Pages → Source** is **GitHub Actions**.
- Review **Actions → Deploy website to GitHub Pages**, then re-run a cancelled workflow.
- Allow DNS and first-time deployments several minutes to update.
- Use the URL from the successful `deploy` job; do not open a GitHub `blob/index.html` URL.

### Broken styles or images

- Preserve relative paths such as `assets/filename.png`; paths beginning with `/` can break the project Pages fallback.
- Match filename capitalization exactly—GitHub Pages is case-sensitive.
- Verify local files and fragment links, then check the browser console and Network panel for `404` responses.
- Hard-refresh after a deployment to clear cached CSS.

## Legal and content safeguards

The Foundation is completing its organizational and tax-exempt setup. **Do not claim IRS 501(c)(3) recognition, tax-deductibility, or other tax treatment until official approval is received and verified.** Do not add payment processors without authorized account details. Do not invent statistics, testimonials, partners, biographies, photographs, or program outcomes.
