# mlabofai.org

Static website for the M-Lab of Adaptive Intelligence (EPFL). Plain HTML, CSS and JavaScript: no build step, no framework, no external requests (fonts are self-hosted).

## Structure

```
index.html            Home: hero, four research arms + goal, highlights, latest papers, news, join, funding
software.html         Software (DeepLabCut, CEBRA, MusBioMaus featured; all other tools)
deeplabcut.html       DeepLabCut: tracking reel, key papers, resources, Model Zoo, press
people.html           PI, team and alumni
publications.html     Venues, cover reel, highlighted papers, full filterable list (with Altmetric badges)
news.html             News timeline, talks, Life in the Lab gallery
join.html             Open positions, how to apply, location
404.html              Not-found page
team.html, contactus.html, …   Redirects from old Squarespace URLs
assets/js/data.js     ← ALL publications and news live here (plus the DeepLabCut page's paper list)
assets/js/main.js     Nav, theme, scroll effects, hero animation, list rendering, highlight tabs
assets/css/style.css  All styles (colors and fonts at the top in :root)
assets/img/, assets/video/   Images and short muted clips
assets/fonts/         Poppins (SIL Open Font License)
src/partials/         Source for the sub-pages: shared header (head.html), footer (foot.html) and page bodies
src/build.py          Rebuilds software/deeplabcut/people/publications/news/join/404 from src/partials
CNAME                 Custom domain for GitHub Pages
```

**Editing pages.** `index.html` is edited directly. The other main pages are assembled from `src/partials/`: edit the partial, then run `python3 src/build.py` and commit both. The header and footer live once in `head.html`/`foot.html`; if you change the nav or footer, mirror the change in `index.html` too.

## Everyday edits

- **Add a paper:** add a line to `MLAB.publications` in `assets/js/data.js` with `year` and `month` (1–12); the site sorts newest first by year, then month. Set `latest: true` to show it on the homepage (the first 8 are shown). Wrap lab members in `<b>…</b>`.
- **Add news:** add an item to the first period in `MLAB.news` (or a new period at the top). `type` sets the dot color: `paper`, `award`, `grant`, `people`.
- **Highlight videos:** the "Highlights" section on the homepage plays project videos muted, looping, and only while on screen. To add one, compress it (`ffmpeg -i in.mp4 -an -c:v libx264 -preset veryfast -crf 26 -pix_fmt yuv420p -movflags +faststart assets/video/name.mp4`), grab a poster frame (`ffmpeg -ss 10 -i in.mp4 -frames:v 1 -vf scale=1280:-1 assets/video/name-poster.jpg`) and copy the `<article class="highlight">` block in `index.html`.
- **Team changes:** edit `people.html`. Photos live in `assets/img/people/`; each person's `.avatar` holds an `<img>` that hides itself if the file is missing.
- **Logo & theme:** logos live in `assets/img/logo-*` (`-dark` = white mouse for the dark theme, `-light` = black mouse). The site opens in dark mode; the sun/moon button switches themes for the rest of that browser session (every new visit opens in dark). Light-theme colors are in the `:root[data-theme="light"]` block of `style.css`.

## Images

Paper thumbnails (`assets/img/papers/`) and team photos (`assets/img/people/`) were migrated from the old Squarespace site and converted to WebP. `assets/img/SOURCES.json` records where each one came from. To add a new one, drop a `.webp`/`.jpg` in the folder and point `thumb:` (papers, in `data.js`) or the person's `<img>` (in `people.html`) at it. Missing images fall back to topic icons and initials.

## Before launch: please check

1. Paper titles, months and full author lists were checked against Crossref/OpenAlex/arXiv in Nov 2026; keep the same format (full names, `Given Family`; lab members in `<b>…</b>`) when adding papers.
2. Spellings that differ across the old site: Ananda/Anada Wolz, Sander/Sanders Meisen, Melony/Melody Tong.
3. There is no contact email on the site (same as before). Add one to `join.html` if you want one.

## Preview locally

```
python3 -m http.server 8000
# open http://localhost:8000
```


