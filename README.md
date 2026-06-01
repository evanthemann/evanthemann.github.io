# evanlmann.com

Personal website for **Evan Mann** — live at **[evanlmann.com](https://evanlmann.com)**.

A static HTML/CSS/JS site with no build step, served via **GitHub Pages** from this repo on the
`evanlmann.com` custom domain (see `CNAME`). Pushing to `master` deploys.

## Tech

- Plain HTML / CSS / JS — no framework, no build tooling.
- The homepage (`index.html`) uses [W3.CSS](https://www.w3schools.com/w3css/) + Font Awesome.
- All third-party libraries load from CDNs — there are no vendored library files in the repo.

## Structure

| Path | What it is |
|------|------------|
| `index.html` | Homepage — hero, About Me, link tiles |
| `videos/` | Video reels (includes `sasvideos/` and `movieamonth/`) |
| `digitize/` | Media digitization page |
| `contact/` | Contact / service-request form (Web3Forms) |
| `therapup/` | The Rap Up |
| `css/`, `img/` | Styles and images |
| `CNAME` | Custom-domain config for GitHub Pages |

## Roadmap

**Polish**
- [ ] Consolidate / modernize styling across sub-pages
- [ ] Add a favicon (browser-tab icon) and social/search preview tags (page title, description,
      and share-card image for when links are shared)

**Bigger projects**
- [ ] Flesh out the Media Digitization page
- [ ] Optimize SEO for local discovery of services
- [x] Low-cost, native form-submission flow with spam protection — `/contact` uses
      [Web3Forms](https://web3forms.com) (free, no backend) with a honeypot + hCaptcha. Future
      upgrade path: a self-owned Cloudflare Worker + Turnstile + email API (e.g. Resend).
- [ ] Advertise media consultant services
- [ ] Revisit the unpublished "Back Up Media" draft (`digitize/index2.html`) — a private-cloud /
      Jellyfin hosting landing page. Consolidate it into the site: give it a proper path + matching
      nav/footer, wire its pricing CTAs to `/contact`, and fold it into the consultant-services story.
- [ ] Improve how the YouTube channel is showcased
