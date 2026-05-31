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
| `blog/` | Blog posts + previews |
| `videos/` | Video reels (includes `sasvideos/` and `movieamonth/`) |
| `digitize/` | Media digitization page |
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
- [ ] Low-cost, open-source / native form-submission flow with spam protection
- [ ] Advertise media consultant services
- [ ] Improve how the YouTube channel is showcased
