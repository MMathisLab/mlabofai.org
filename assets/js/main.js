/* M-Lab site behavior: nav, reveal-on-scroll, hero latent-manifold canvas,
   and rendering of publications / news from data.js. No dependencies. */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- header + mobile nav ---------- */
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Software dropdown on touch screens wide enough for the desktop nav:
     first tap opens the menu, a second tap on "Software" follows the link. */
  document.querySelectorAll(".has-sub").forEach(function (sub) {
    var subLink = sub.querySelector(":scope > a");
    subLink.addEventListener("click", function (e) {
      var desktopNav = window.matchMedia("(min-width: 901px)").matches;
      var noHover = window.matchMedia("(hover: none)").matches;
      if (desktopNav && noHover && !sub.classList.contains("open")) {
        e.preventDefault();
        document.querySelectorAll(".has-sub.open").forEach(function (o) { o.classList.remove("open"); });
        sub.classList.add("open");
      }
    });
    document.addEventListener("click", function (e) { if (!sub.contains(e.target)) sub.classList.remove("open"); });
  });

  /* ---------- light / dark toggle ---------- */
  var root = document.documentElement;
  function setThemeLabel() {
    var light = root.getAttribute("data-theme") === "light";
    document.querySelectorAll(".theme-toggle").forEach(function (b) {
      b.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
      b.setAttribute("aria-pressed", light ? "true" : "false");
    });
  }
  document.querySelectorAll(".theme-toggle").forEach(function (b) {
    b.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { sessionStorage.setItem("theme", next); } catch (e) {}
      setThemeLabel();
    });
  });
  setThemeLabel();

  /* ---------- year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- helpers ---------- */
  var M = window.MLAB || {};
  /* newest first by year, then month (stable: same-month papers keep their order in data.js) */
  if (M.publications) {
    M.publications = M.publications
      .map(function (p, i) { return { p: p, i: i }; })
      .sort(function (a, b) { return (b.p.year - a.p.year) || ((b.p.month || 0) - (a.p.month || 0)) || (a.i - b.i); })
      .map(function (x) { return x.p; });
  }
  var areaName = { cv: "Computer vision", ml: "Machine learning", neuro: "Neural dynamics", bio: "Biomechanics", dev: "Dev neuro" };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function stripTags(s) { return String(s).replace(/<[^>]*>/g, ""); }

  /* Small topic icons (24x24, stroke = currentColor) */
  var ICONS = {
    dev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="5" r="2.2"/><path d="M12 7.2V12M12 12l-5 5M12 12l5 5M7 17l-2 3M7 17l1 3.2M17 17l2 3M17 17l-1 3.2"/></svg>',
    cv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 7.5v6.5M12 9.5l-4.5 3M12 9.5l4.5 3M12 14l-3.5 5.5M12 14l3.5 5.5"/><circle cx="12" cy="5" r="2" fill="currentColor" stroke="none"/><circle cx="7.5" cy="12.5" r="1.3" fill="currentColor" stroke="none"/><circle cx="16.5" cy="12.5" r="1.3" fill="currentColor" stroke="none"/><circle cx="8.5" cy="19.5" r="1.3" fill="currentColor" stroke="none"/><circle cx="15.5" cy="19.5" r="1.3" fill="currentColor" stroke="none"/></svg>',
    ml: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M5 6l7 6M5 12h7M5 18l7-6M12 12l7-5M12 12l7 5" opacity=".6"/><circle cx="5" cy="6" r="1.8" fill="currentColor" stroke="none"/><circle cx="5" cy="12" r="1.8" fill="currentColor" stroke="none"/><circle cx="5" cy="18" r="1.8" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none"/><circle cx="19" cy="7" r="1.8" fill="currentColor" stroke="none"/><circle cx="19" cy="17" r="1.8" fill="currentColor" stroke="none"/></svg>',
    bio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19l5-6 3 2 6-9"/><circle cx="5" cy="19" r="1.8" fill="currentColor" stroke="none"/><circle cx="10" cy="13" r="1.8" fill="currentColor" stroke="none"/><circle cx="13" cy="15" r="1.8" fill="currentColor" stroke="none"/><circle cx="19" cy="6" r="1.8" fill="currentColor" stroke="none"/><path d="M8 15.5c1.5 1.2 3 1.6 4 1.3" opacity=".5"/></svg>',
    neuro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="9" cy="11" r="3" fill="currentColor" stroke="none"/><path d="M7 8.5 4.5 4.5M6.5 12.5 3 14M9 14l-1 5M11.5 9.5 14 6.5M12 11.5h4c2 0 3 1 3.5 3M19.5 14.5l1 2M19.5 14.5l2-1"/></svg>'
  };

  /* If a thumbnail is missing, fall back to the topic icon */
  M.thumbFail = function (img) {
    var box = img.parentNode, area = (box.className.match(/a-(\w+)/) || [])[1] || "ml";
    box.classList.remove("has-thumb");
    box.innerHTML = ICONS[area];
  };

  /* Altmetric identifier: explicit doi / arxiv / pmid fields win, otherwise derived from the URL */
  function altmetricId(p) {
    if (p.altmetric) return { type: "altmetric-id", id: String(p.altmetric) };
    if (p.doi) return { type: "doi", id: p.doi };
    if (p.arxiv) return { type: "arxiv-id", id: p.arxiv };
    if (p.pmid) return { type: "pmid", id: p.pmid };
    var u = p.url || "", m;
    if ((m = u.match(/nature\.com\/articles\/([^?#\/]+)/))) return { type: "doi", id: "10.1038/" + m[1] };
    if ((m = u.match(/arxiv\.org\/abs\/([0-9.]+)/))) return { type: "arxiv-id", id: m[1] };
    if ((m = u.match(/elifesciences\.org\/articles\/(\d+)/))) return { type: "doi", id: "10.7554/eLife." + m[1] };
    if ((m = u.match(/doi\.org\/(10\..+)$/))) return { type: "doi", id: decodeURIComponent(m[1]) };
    if ((m = u.match(/pubmed\/(\d+)/))) return { type: "pmid", id: m[1] };
    return null;
  }

  function pubItem(p) {
    var area = (p.areas && p.areas[0]) || "ml";
    var icon = p.thumb
      ? '<img src="' + esc(p.thumb) + '" alt="" loading="lazy" onerror="MLAB.thumbFail(this)">'
      : ICONS[area];
    var am = altmetricId(p);
    var badge = am
      ? '<div class="altmetric-embed" data-badge-type="donut" data-badge-popover="left" data-hide-no-mentions="true" data-link-target="_blank" data-' + am.type + '="' + esc(am.id) + '"></div>'
      : "";
    return '<li class="pub reveal">' +
      '<div class="pub-icon a-' + area + (p.thumb ? " has-thumb" : "") + '"' + (p.areas && p.areas.length ? ' title="' + esc(areaName[area]) + '"' : '') + '>' + icon + "</div>" +
      '<div class="pub-venue">' + esc(p.venue) + '<span class="yr">' + p.year + "</span></div>" +
      '<div class="pub-main"><div class="pub-title"><a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.title) + "</a></div>" +
      '<div class="pub-authors">' + p.authors + "</div>" +
      (p.note ? '<div class="pub-note">' + esc(p.note) + "</div>" : "") +
      (p.press && p.press.length ? '<div class="pub-press">' + p.press.map(function (l) {
        return '<a href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + " ↗</a>";
      }).join(" · ") + "</div>" : "") + "</div>" +
      '<div class="pub-side">' + badge +
      '<a class="pub-link" href="' + esc(p.url) + '" target="_blank" rel="noopener" aria-label="Open paper: ' + esc(p.title) + '">Paper ↗</a></div>' +
      "</li>";
  }

  /* Load Altmetric's embed script once badges are on the page; re-scan after re-renders */
  var altmetricLoading = false;
  function initAltmetric() {
    if (!document.querySelector(".altmetric-embed")) return;
    if (typeof window._altmetric_embed_init === "function") { window._altmetric_embed_init(); return; }
    if (altmetricLoading) return;
    altmetricLoading = true;
    var s = document.createElement("script");
    s.src = "https://embed.altmetric.com/assets/embed.js";
    s.async = true;
    document.body.appendChild(s);
  }

  /* ---------- homepage: latest publications ---------- */
  var latestEl = document.getElementById("latest-pubs");
  if (latestEl && M.publications) {
    latestEl.innerHTML = M.publications.filter(function (p) { return p.latest; }).slice(0, 8).map(pubItem).join("");
    initAltmetric();
  }

  /* ---------- DeepLabCut page: key papers ---------- */
  if (M.dlcPapers && M.publications) {
    var pool = M.publications.concat(M.dlcPapers.extras || []);
    ["primary", "more"].forEach(function (k) {
      var el = document.getElementById("dlc-pubs-" + k);
      if (!el) return;
      el.innerHTML = M.dlcPapers[k].map(function (t) {
        return pool.filter(function (p) { return p.title === t; })[0];
      }).filter(Boolean).map(pubItem).join("");
    });
    initAltmetric();
  }

  /* news links: [["Label", "url"], ...] -> " Label ↗ · Label ↗" (internal links without the arrow) */
  function newsLinks(it) {
    if (!it.links || !it.links.length) return "";
    return ' <span class="n-links">' + it.links.map(function (l) {
      var ext = /^https?:/.test(l[1]);
      return '<a href="' + esc(l[1]) + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" + esc(l[0]) + (ext ? " ↗" : " →") + "</a>";
    }).join(" · ") + "</span>";
  }

  /* ---------- homepage: recent news ---------- */
  var recentEl = document.getElementById("recent-news");
  if (recentEl && M.news) {
    var out = [];
    M.news.slice(0, 2).forEach(function (g) {
      g.items.forEach(function (it) { out.push({ when: g.period, text: it.text, it: it }); });
    });
    recentEl.innerHTML = out.slice(0, 6).map(function (n) {
      return '<li class="reveal"><span class="when">' + esc(n.when) + "</span><span>" + esc(n.text) + newsLinks(n.it) + "</span></li>";
    }).join("");
  }

  /* ---------- publications page ---------- */
  var pubRoot = document.getElementById("pub-root");
  if (pubRoot && M.publications) {
    var state = { q: "", area: "all" };
    var search = document.getElementById("pub-search");
    var count = document.getElementById("pub-count");
    function renderPubs() {
      var q = state.q.toLowerCase();
      var list = M.publications.filter(function (p) {
        if (state.area !== "all" && p.areas.indexOf(state.area) === -1) return false;
        if (!q) return true;
        return (p.title + " " + stripTags(p.authors) + " " + p.venue + " " + p.year).toLowerCase().indexOf(q) !== -1;
      });
      var html = "", lastKey = null;
      list.forEach(function (p) {
        var key = p.pre ? "Before the M-Lab" : String(p.year);
        if (key !== lastKey) {
          if (lastKey !== null) html += "</ul>";
          html += '<h2 class="year-head">' + key + '</h2><ul class="pub-list">';
          lastKey = key;
        }
        html += pubItem(p).replace(" reveal", "");
      });
      if (lastKey !== null) html += "</ul>";
      pubRoot.innerHTML = html || '<p class="muted">No publications match that search.</p>';
      if (count) count.textContent = list.length + (list.length === 1 ? " paper" : " papers");
      initAltmetric();
    }
    if (search) search.addEventListener("input", function () { state.q = search.value; renderPubs(); });
    document.querySelectorAll(".filter").forEach(function (b) {
      b.addEventListener("click", function () {
        document.querySelectorAll(".filter").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        b.setAttribute("aria-pressed", "true");
        state.area = b.getAttribute("data-area");
        renderPubs();
      });
    });
    renderPubs();
  }

  /* ---------- news page ---------- */
  var newsRoot = document.getElementById("news-root");
  if (newsRoot && M.news) {
    newsRoot.innerHTML = M.news.map(function (g) {
      var parts = g.period.split(" ");
      var year = parts[parts.length - 1];
      var season = parts.slice(0, -1).join(" ");
      return '<div class="tl-group"><div class="tl-period"><span class="mono">' + esc(year) + "</span><h3>" + esc(season || year) + "</h3></div>" +
        '<div><ul class="tl-items">' + g.items.map(function (it) {
          return '<li class="n-' + esc(it.type) + '">' + esc(it.text) + newsLinks(it) + "</li>";
        }).join("") + "</ul>" +
        (g.images && g.images.length ? '<div class="tl-photos">' + g.images.map(function (src) {
          return '<a href="' + esc(src) + '" target="_blank" rel="noopener"><img src="' + esc(src) + '" alt="Lab photo, ' + esc(g.period) + '" loading="lazy"></a>';
        }).join("") + "</div>" : "") + "</div></div>";
    }).join("");
  }

  /* ---------- research area pages ---------- */
  var rRoot = document.querySelector(".research-page");
  if (rRoot && M.research && M.research[rRoot.getAttribute("data-area")]) {
    var rk = rRoot.getAttribute("data-area"), R = M.research[rk];
    var rq = function (n) { return rRoot.querySelector('[data-r="' + n + '"]'); };
    var findPub = function (t) { return (M.publications || []).filter(function (p) { return p.title.indexOf(t) === 0; })[0]; };
    var linkHTML = function (l) {
      var ext = /^https?:/.test(l[1]);
      return '<a href="' + esc(l[1]) + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" + esc(l[0]) + (ext ? " ↗" : " →") + "</a>";
    };
    rRoot.style.setProperty("--accent", "var(--" + R.accent + ")");
    rq("name").textContent = R.name;
    rq("title").textContent = R.title;
    rq("lede").textContent = R.lede;
    if (R.intro && R.intro.length) {
      rq("lede").insertAdjacentHTML("afterend", R.intro.map(function (t) { return '<p class="r-intro">' + esc(t) + "</p>"; }).join(""));
    }
    /* header media: one item or several slides that rotate */
    var slides = [].concat(R.media);
    var mediaEl = rq("media");
    mediaEl.innerHTML = slides.map(function (m, i) {
      var inner = m.video
        ? '<video src="' + esc(m.video) + '" poster="' + esc(m.poster || "") + '" muted loop playsinline' + (i === 0 && !reduceMotion ? " autoplay" : "") + ' preload="' + (i === 0 ? "auto" : "none") + '" aria-label="' + esc(m.alt) + '"></video>'
        : '<img src="' + esc(m.img) + '" alt="' + esc(m.alt) + '">';
      var cap = m.caption ? '<figcaption class="r-cap">' + (m.link
        ? '<a href="' + esc(m.link) + '"' + (/^https?:/.test(m.link) ? ' target="_blank" rel="noopener"' : "") + ">" + esc(m.caption) + " ↗</a>"
        : esc(m.caption)) + "</figcaption>" : "";
      return '<figure class="r-slide' + (m.fit === "contain" ? " contain" : "") + (i === 0 ? " on" : "") + '">' + inner + cap + "</figure>";
    }).join("") + (slides.length > 1 ? '<div class="r-dots" role="group" aria-label="Choose video">' + slides.map(function (m, i) {
      return '<button type="button" aria-label="Show video ' + (i + 1) + '"' + (i === 0 ? ' aria-current="true"' : "") + "></button>";
    }).join("") + "</div>" : "");
    if (slides.length > 1) {
      var figs = mediaEl.querySelectorAll(".r-slide"), dots = mediaEl.querySelectorAll(".r-dots button"), cur = 0, timer = null;
      var show = function (n) {
        figs[cur].classList.remove("on"); dots[cur].removeAttribute("aria-current");
        var ov = figs[cur].querySelector("video"); if (ov) ov.pause();
        cur = (n + figs.length) % figs.length;
        figs[cur].classList.add("on"); dots[cur].setAttribute("aria-current", "true");
        var nv = figs[cur].querySelector("video");
        if (nv && !reduceMotion) { nv.currentTime = 0; var pp = nv.play(); if (pp && pp.catch) pp.catch(function () {}); }
      };
      var start = function () { if (!reduceMotion) { clearInterval(timer); timer = setInterval(function () { show(cur + 1); }, 8000); } };
      dots.forEach(function (d, i) { d.addEventListener("click", function () { show(i); start(); }); });
      mediaEl.addEventListener("mouseenter", function () { clearInterval(timer); });
      mediaEl.addEventListener("mouseleave", start);
      start();
    }
    rq("switch").innerHTML = Object.keys(M.research).map(function (k) {
      var a = M.research[k];
      return '<a class="filter" data-area="' + k + '" href="research-' + k + '.html"' + (k === rk ? ' aria-pressed="true" aria-current="page"' : ' aria-pressed="false"') + ">" + esc(a.name) + "</a>";
    }).join("");

    /* key projects: venue, year, paper link and image come from the matching publication */
    rq("projects").innerHTML = R.projects.map(function (pr) {
      var p = pr.pub ? findPub(pr.pub) : null;
      var media = pr.video
        ? '<video src="' + esc(pr.video) + '" poster="' + esc(pr.poster || "") + '" muted loop playsinline preload="none" aria-label="' + esc(pr.name) + '"></video>'
        : (p && p.thumb ? '<img src="' + esc(p.thumb) + '" alt="" loading="lazy">' : "");
      var links = (p ? [["Paper", p.url]] : []).concat(pr.links || []);
      return '<article class="proj">' +
        (media ? '<div class="proj-media">' + media + "</div>" : "") +
        '<div class="proj-body">' +
        (p ? '<span class="badge">' + esc(p.venue) + " · " + p.year + "</span>" : "") +
        "<h3>" + esc(pr.name) + "</h3><p>" + esc(pr.tag) + "</p>" +
        '<div class="card-links">' + links.map(linkHTML).join("") + "</div></div></article>";
    }).join("");
    rq("projects").querySelectorAll("video").forEach(function (v) {
      if (reduceMotion || !("IntersectionObserver" in window)) return;
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { var pp = v.play(); if (pp && pp.catch) pp.catch(function () {}); } else v.pause(); });
      }, { threshold: 0.3 }).observe(v);
    });
    if (reduceMotion) { var hv = rq("media").querySelector("video"); if (hv) { hv.removeAttribute("autoplay"); hv.pause(); } }

    /* papers in this area, newest first */
    var rp = (M.publications || []).filter(function (p) { return p.areas && p.areas.indexOf(rk) !== -1 && !p.pre; });
    rq("papers").innerHTML = rp.slice(0, 10).map(function (p) { return pubItem(p).replace(" reveal", ""); }).join("");
    var all = (M.publications || []).filter(function (p) { return p.areas && p.areas.indexOf(rk) !== -1; }).length;
    rq("all-link").href = "publications.html#" + rk;
    rq("all-link").textContent = "All " + all + " papers";
    initAltmetric();

    /* people: read the cards from the People page, keep those tagged with this area */
    var peopleEl = rq("people");
    fetch("people.html").then(function (r) { return r.text(); }).then(function (html) {
      var doc = new DOMParser().parseFromString(html, "text/html");
      var cards = [].filter.call(doc.querySelectorAll(".person"), function (c) { return c.querySelector(".th-" + rk); });
      peopleEl.innerHTML = "";
      cards.forEach(function (c) { c.classList.remove("reveal"); peopleEl.appendChild(document.importNode(c, true)); });
      if (!cards.length) peopleEl.innerHTML = '<p class="muted">See the <a href="people.html">People page</a>.</p>';
    }).catch(function () {
      peopleEl.innerHTML = '<p class="muted">See the <a href="people.html">People page</a>.</p>';
    });
  }

  /* publications page: #cv, #ml … preselects a filter */
  if (pubRoot) {
    var ha = location.hash.slice(1), fb = ha && document.querySelector('.filter[data-area="' + ha + '"]');
    if (fb) fb.click();
  }

  /* ---------- reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- autoplay muted loops (reel, research cards) only while visible ---------- */
  var loops = document.querySelectorAll(".reel video, .pillar-media video, .card-media video, .spotlight-video video");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var lio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) { v.preload = "auto"; v.play().catch(function () {}); } else { v.pause(); }
      });
    }, { rootMargin: "100px" });
    loops.forEach(function (v) { lio.observe(v); });
  }

  /* ---------- highlight tabs ---------- */
  var tabs = document.querySelectorAll('.hl-tabs [role="tab"]');
  tabs.forEach(function (t) {
    t.addEventListener("click", function () {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute("aria-selected", on ? "true" : "false");
        var panel = document.getElementById(x.getAttribute("aria-controls"));
        if (!panel) return;
        panel.hidden = !on;
        var v = panel.querySelector("video");
        if (v) { if (on && !reduceMotion) { v.preload = "auto"; v.play().catch(function () {}); } else { v.pause(); } }
      });
    });
  });

  /* PI bio: expand / collapse */
  document.querySelectorAll(".bio-toggle").forEach(function (btn) {
    var bio = btn.closest(".bio");
    btn.addEventListener("click", function () {
      var open = bio.getAttribute("data-collapsed") === "true";
      bio.setAttribute("data-collapsed", open ? "false" : "true");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.firstChild.nodeValue = open ? "Show less " : "Read full bio ";
      if (!open) bio.scrollIntoView({ block: "nearest" });
    });
  });

  /* links like #highlights with data-hl="musbiomaus" open that tab */
  function openHighlight(id) {
    var t = document.getElementById("tab-" + id);
    if (t) t.click();
  }
  document.querySelectorAll("a[data-hl]").forEach(function (a) {
    a.addEventListener("click", function () { openHighlight(a.getAttribute("data-hl")); });
  });
  var hm = location.hash.match(/^#hl-(\w+)$/);
  if (hm) openHighlight(hm[1]);

  /* ---------- highlight videos: play when visible, pause otherwise ---------- */
  document.querySelectorAll(".highlight-media").forEach(function (box) {
    var v = box.querySelector("video"), btn = box.querySelector(".hl-toggle");
    if (!v) return;
    if (v.dataset.sound) {
      var sb = document.createElement("button");
      sb.type = "button"; sb.className = "hl-sound"; sb.textContent = "Sound on";
      sb.addEventListener("click", function () { v.muted = !v.muted; sb.textContent = v.muted ? "Sound on" : "Sound off"; if (v.paused) v.play().catch(function () {}); });
      box.appendChild(sb);
    }
    var userPaused = reduceMotion;
    function sync() {
      if (btn) {
        btn.classList.toggle("paused", v.paused);
        btn.setAttribute("aria-label", v.paused ? "Play video" : "Pause video");
      }
    }
    v.addEventListener("play", sync); v.addEventListener("pause", sync);
    if (btn) btn.addEventListener("click", function () {
      if (v.paused) { userPaused = false; v.play().catch(function () {}); }
      else { userPaused = true; v.pause(); }
    });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (e) {
        if (e[0].isIntersecting && !userPaused && !box.closest("[hidden]")) { v.preload = "auto"; v.play().catch(function () {}); }
        else if (!e[0].isIntersecting) v.pause();
      }, { threshold: 0.35 }).observe(box);
    }
    sync();
  });

  /* ---------- hero: rotating latent manifold ---------- */
  var canvas = document.getElementById("latent");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2);
    var N = window.innerWidth < 700 ? 900 : 1700;
    var pts = [];
    var teal = [45, 212, 196], violet = [125, 108, 246], magenta = [226, 60, 224];

    function mix(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }
    function colorAt(t) { return t < 0.5 ? mix(teal, violet, t * 2) : mix(violet, magenta, (t - 0.5) * 2); }

    // Points scattered around a trefoil knot — a nod to smooth, structured latent trajectories.
    for (var i = 0; i < N; i++) {
      var t = (i / N) * Math.PI * 2;
      var x = Math.sin(t) + 2 * Math.sin(2 * t);
      var y = Math.cos(t) - 2 * Math.cos(2 * t);
      var z = -Math.sin(3 * t);
      var s = 0.16;
      pts.push({
        x: x + (Math.random() - 0.5) * s * 2.2,
        y: y + (Math.random() - 0.5) * s * 2.2,
        z: z + (Math.random() - 0.5) * s * 2.2,
        c: colorAt(i / N),
        r: Math.random() * 1.1 + 0.5
      });
    }

    function resize() {
      var rect = canvas.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    var angle = 0.6, running = true, raf = null;
    function frame() {
      ctx.clearRect(0, 0, W, H);
      var wide = W > 900;
      var cx = wide ? W * 0.72 : W * 0.7;
      var cy = wide ? H * 0.5 : H * 0.2;
      var scale = wide ? Math.min(W, H) * 0.14 : W * 0.11;
      var ca = Math.cos(angle), sa = Math.sin(angle);
      var tilt = 0.5, ct = Math.cos(tilt), st = Math.sin(tilt);
      var proj = new Array(pts.length);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        var x1 = p.x * ca - p.z * sa;
        var z1 = p.x * sa + p.z * ca;
        var y1 = p.y * ct - z1 * st;
        var z2 = p.y * st + z1 * ct;
        var persp = 5 / (5 + z2);
        proj[i] = { x: cx + x1 * scale * persp, y: cy + y1 * scale * persp, z: z2, p: p, k: persp };
      }
      proj.sort(function (a, b) { return b.z - a.z; });
      for (var j = 0; j < proj.length; j++) {
        var q = proj[j];
        var depth = Math.max(0.15, Math.min(1, (1.6 - q.z) / 3));
        ctx.fillStyle = "rgba(" + (q.p.c[0] | 0) + "," + (q.p.c[1] | 0) + "," + (q.p.c[2] | 0) + "," + (0.85 * depth).toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(q.x, q.y, q.p.r * q.k * 1.15, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    function loop() {
      if (!running) return;
      angle += 0.0022;
      frame();
      raf = requestAnimationFrame(loop);
    }
    resize();
    window.addEventListener("resize", function () { resize(); if (reduceMotion) frame(); });
    if (reduceMotion) { frame(); }
    else {
      loop();
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(function (e) {
          var vis = e[0].isIntersecting;
          if (vis && !running) { running = true; loop(); }
          if (!vis) { running = false; cancelAnimationFrame(raf); }
        }).observe(canvas);
      }
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) { running = false; cancelAnimationFrame(raf); }
        else if (!running) { running = true; loop(); }
      });
    }
  }
})();
