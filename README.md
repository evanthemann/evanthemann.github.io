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
- [ ] Add a site **style guide** (Markdown) — voice/writing conventions for blog posts + visual/UI
      conventions (W3.CSS usage, nav/footer, headings) to keep copy and design consistent
- [ ] Add a favicon (browser-tab icon) and social/search preview tags (page title, description,
      and share-card image for when links are shared)

**Bigger projects**
- [ ] **Move the blog on-site to `evanlmann.com/blog`** — retire `evanlmann.wordpress.com` so SEO
      authority accrues to the domain. Author posts in Markdown via a static generator (Jekyll,
      native to GitHub Pages, or Eleventy); re-publish the existing posts and add nav/footer +
      `/contact` CTAs to drive leads.
- [ ] Flesh out the Media Digitization page
- [ ] Optimize SEO for local discovery of services
- [x] Low-cost, native form-submission flow with spam protection — `/contact` uses
      [Web3Forms](https://web3forms.com) (free, no backend) with a honeypot + hCaptcha. Future
      upgrade path: a self-owned Cloudflare Worker + Turnstile + email API (e.g. Resend).
- [ ] Advertise media consultant services
- [ ] **Video & Audio Automation Pipelines** — a flagship *professional* service page at
      `/pipelines/` (a distinct tier from the hobby-grade digitize/film pages). Pitch: programming
      apps to ingest, transcode, edit, and subtitle media **at scale** with open-source tooling,
      cross-platform (Linux / Mac / Windows), offered as **fully automated** or **assisted**
      (human-in-the-loop) pipelines. Sections: hero + pitch → what I build → two engagement modes
      (automated vs assisted) → example case studies, each with a diagram (subtitle workflow
      [assisted], video-intake pipeline, and audio production as its own section on the same page)
      → CTA to `/contact`. Render diagrams with **Mermaid.js via CDN** (inline, no build step, easy
      to flesh out later). Add a homepage tile linking to it.
      - *Target audience* (for LinkedIn targeting / outreach): independent video creators, and
        businesses that produce training / instructional video at volume.
      - *Key differentiator:* specializes in **open-source tooling** — not locked into the
        cost-prohibitive Adobe suite — while still having Adobe experience to draw on. Lead with
        this in the copy.
- [ ] Revisit the unpublished "Back Up Media" draft (`digitize/index2.html`) — a private-cloud /
      Jellyfin hosting landing page. Consolidate it into the site: give it a proper path + matching
      nav/footer, wire its pricing CTAs to `/contact`, and fold it into the consultant-services story.
- [ ] Improve how the YouTube channel is showcased
