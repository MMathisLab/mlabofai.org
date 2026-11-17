# mlabofai.org

Static website for the M-Lab of Adaptive Intelligence (EPFL). Plain HTML, CSS and JavaScript: no build step, no framework, no external requests (fonts are self-hosted).

## Structure

```
index.html            Home: hero, approach, three research arms, selected work, software, latest papers, news, join
people.html           PI, team and alumni
publications.html     Searchable, filterable publication list
news.html             Full news timeline (2017 to today)
join.html             Open positions, how to apply, location, funding
404.html              Not-found page
team.html, contactus.html, …   Redirects from old Squarespace URLs
assets/js/data.js     ← ALL publications and news live here
assets/js/main.js     Nav, scroll effects, hero animation, list rendering
assets/css/style.css  All styles (colors and fonts at the top in :root)
assets/img/           Overview figure, favicon
assets/fonts/         Poppins (SIL Open Font License)
CNAME                 Custom domain for GitHub Pages
```

## Everyday edits

- **Add a paper:** add a line at the top of `MLAB.publications` in `assets/js/data.js`. Set `latest: true` to show it on the homepage (the first 8 are shown). Wrap lab members in `<b>…</b>`.
- **Add news:** add an item to the first period in `MLAB.news` (or a new period at the top). `type` sets the dot color: `paper`, `award`, `grant`, `people`.
- **Highlight videos:** the "Highlights" section on the homepage plays project videos muted, looping, and only while on screen. To add one, compress it (`ffmpeg -i in.mp4 -an -c:v libx264 -preset veryfast -crf 26 -pix_fmt yuv420p -movflags +faststart assets/video/name.mp4`), grab a poster frame (`ffmpeg -ss 10 -i in.mp4 -frames:v 1 -vf scale=1280:-1 assets/video/name-poster.jpg`) and copy the `<article class="highlight">` block in `index.html`.
- **Team changes:** edit `people.html`. Photos live in `assets/img/people/`; each person's `.avatar` holds an `<img>` that hides itself if the file is missing.
- **Logo & theme:** logos live in `assets/img/logo-*` (`-dark` = white mouse for the dark theme, `-light` = black mouse). The site opens in dark mode; the sun/moon button switches themes and remembers the choice. Light-theme colors are in the `:root[data-theme="light"]` block of `style.css`.

## Images

Paper thumbnails (`assets/img/papers/`) and team photos (`assets/img/people/`) were migrated from the old Squarespace site and converted to WebP. `assets/img/SOURCES.json` records where each one came from. To add a new one, drop a `.webp`/`.jpg` in the folder and point `thumb:` (papers, in `data.js`) or the person's `<img>` (in `people.html`) at it. Missing images fall back to topic icons and initials.

## Before launch: please check

1. Titles in `data.js` marked `// CHECK` were transcribed from the old site and may be shortened. Paste exact titles.
2. Spellings that differ across the old site: Ananda/Anada Wolz, Sander/Sanders Meisen, Melony/Melody Tong.
3. There is no contact email on the site (same as before). Add one to `join.html` if you want one.

## Preview locally

```
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy on GitHub Pages (free, HTTPS included)

1. Create a GitHub repository (for example `mlabofai.org`) and push the contents of this folder to the `main` branch.
2. Repository → **Settings → Pages** → Source: *Deploy from a branch* → `main` / `(root)` → Save.
3. Under **Custom domain**, enter `mlabofai.org` and save (the `CNAME` file already contains it).
4. At your DNS provider, add:

   | Type  | Host  | Value                     |
   |-------|-------|---------------------------|
   | A     | @     | 185.199.108.153           |
   | A     | @     | 185.199.109.153           |
   | A     | @     | 185.199.110.153           |
   | A     | @     | 185.199.111.153           |
   | AAAA  | @     | 2606:50c0:8000::153       |
   | AAAA  | @     | 2606:50c0:8001::153       |
   | AAAA  | @     | 2606:50c0:8002::153       |
   | AAAA  | @     | 2606:50c0:8003::153       |
   | CNAME | www   | `<your-github-user-or-org>.github.io` |

   Remove the existing Squarespace A/CNAME records for `@` and `www` first. Leave MX/email records untouched.
5. Wait for DNS to propagate (up to 24 hours), then tick **Enforce HTTPS** in Settings → Pages.

**Where is the DNS?** Google Domains was sold to Squarespace, and Google Domains registrations were migrated to Squarespace Domains. Manage DNS at squarespace.com → Domains → mlabofai.org → DNS settings → Custom records. Once the new site is live you can cancel the Squarespace *website* plan, but confirm in your Squarespace billing settings that this does not affect the *domain* registration first.

Netlify or Cloudflare Pages also work: point them at this folder, no build command, publish directory `/`.
