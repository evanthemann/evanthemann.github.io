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
| `channels/` | Channels page |
| `therapup/` | The Rap Up |
| `css/`, `img/` | Styles and images |
| `CNAME` | Custom-domain config for GitHub Pages |

## Local development

```bash
# from the repo root
python3 -m http.server 8000 --bind 127.0.0.1
# then open http://localhost:8000/
```

Or use the VS Code **Live Server** extension (port 5501, per `.vscode/settings.json`).

## Roadmap

**Polish**
- [ ] Photography page
- [ ] Portfolio page
- [ ] Add the "About" intro video (homepage references a missing `about-video.mp4`)
- [ ] Consolidate / modernize styling across sub-pages
- [ ] Favicon + meta/OpenGraph tags on the homepage

**Bigger projects**
- [ ] Flesh out the Media Digitization page
- [ ] Local SEO: "develop black-and-white film Raleigh", "develop super 8 film Raleigh",
      "develop camera film Raleigh"
- [ ] Low-cost, open-source / native form-submission flow with spam protection
- [ ] Cross-link Blog / WearBackShirt / Digitize services
- [ ] Advertise media consultant services
- [ ] Improve how the YouTube channel is showcased
