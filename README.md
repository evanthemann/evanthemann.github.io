# evanlmann.com

Personal website for **Evan Mann** — live at **[evanlmann.com](https://evanlmann.com)**.

A plain static HTML/CSS/JS site, no build step, served via **GitHub Pages** from this repo on the
`evanlmann.com` custom domain (see `CNAME`). Push to `master` deploys.

## Purpose

These two goals guide every content and design decision here:

1. **Awareness & context for who Evan is** — professional and creative identity.
2. **Advertising the services Evan offers** — media digitization, film developing, and media
   consulting. Note: digitization/film-develop offerings are positioned for **hobby use**, not as
   professional / top-of-the-line services.

## Tech

- Plain HTML / CSS / JS — no framework, no build tooling.
- The current homepage (`index.html`) uses [W3.CSS](https://www.w3schools.com/w3css/) +
  Font Awesome.
- All third-party libraries (W3.CSS, Font Awesome, and the Bootstrap/jQuery/Owl Carousel libs
  used by some older sub-pages) are loaded from CDNs — there are no vendored library files in the
  repo.

## Structure

| Path | What it is |
|------|------------|
| `index.html` | Homepage — hero, About Me, and link tiles |
| `blog/` | Blog with posts + previews |
| `videos/` | Video reels — includes `sasvideos/` and `movieamonth/` |
| `digitize/` | Media digitization service page |
| `channels/` | Channels page |
| `assets/`, `css/`, `img/` | Styles, scripts, and images |
| `CNAME` | Custom-domain config for GitHub Pages |

> **Note:** Personal tools and private/older projects are **not** hosted here anymore. They live
> on Evan's home server (`mac-minty`, nginx + PHP, doc root `~/hub`): tools like `woodpanel` (on
> the dashboard), content like `app` / `chives` / `therapup`, and an `_archive/` of retired pages
> (old homepage variants, the old link hub, etc.). This repo intentionally holds **only the live
> public site**.

## Local development

```bash
# from the repo root
python3 -m http.server 8000
# then open http://localhost:8000/
```

Or use the VS Code **Live Server** extension (configured for port 5501 in `.vscode/settings.json`).

## Roadmap

Near-term polish and the bigger initiatives planned for the site. Check items off as they ship.

**Polish / small**
- [ ] Build out a Photography page
- [ ] Build out a Portfolio page
- [ ] Record/add the "About" intro video (`about-video.mp4` is referenced on the homepage but missing)
- [ ] Consolidate / modernize styling across sub-pages
- [ ] Add a favicon + meta/OpenGraph tags to the homepage

**Bigger projects**
- [ ] Build a thorough **Media Digitization** page (frame digitize + film-develop as
      hobby-grade, not professional/top-of-the-line)
- [ ] **Local SEO** for: "develop black-and-white film Raleigh", "develop super 8 film Raleigh",
      "develop camera film Raleigh"
- [ ] **Form submission** flow — open-source / native, low-cost, and **without exposing the home
      network** (hosted/serverless or static-form service)
- [ ] Best-practice **cross-linking** between Blog / WearBackShirt / Digitize services
- [ ] Advertise **media consultant services** (Jellyfin server setup/clients, media digitization)
- [ ] Decide the **best way to showcase the YouTube channel** on-site

**Done**
- [x] Update About Me to reference new job at JCI (was Prometheus Group)
- [x] Clean up the repo — move tools/private projects to the home server, drop dead files
- [x] Write this README + roadmap
