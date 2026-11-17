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
      try { localStorage.setItem("theme", next); } catch (e) {}
      setThemeLabel();
    });
  });
  setThemeLabel();

  /* ---------- year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- helpers ---------- */
  var M = window.MLAB || {};
  var areaName = { cv: "Computer vision", ml: "Machine learning", neuro: "Neuroscience", bio: "Biomechanics" };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function stripTags(s) { return String(s).replace(/<[^>]*>/g, ""); }

  /* Small topic icons (24x24, stroke = currentColor) */
  var ICONS = {
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
      '<div class="pub-icon a-' + area + (p.thumb ? " has-thumb" : "") + '" title="' + esc(areaName[area]) + '">' + icon + "</div>" +
      '<div class="pub-venue">' + esc(p.venue) + '<span class="yr">' + p.year + "</span></div>" +
      '<div class="pub-main"><div class="pub-title"><a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.title) + "</a></div>" +
      '<div class="pub-authors">' + p.authors + "</div></div>" +
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

  /* ---------- homepage: recent news ---------- */
  var recentEl = document.getElementById("recent-news");
  if (recentEl && M.news) {
    var out = [];
    M.news.slice(0, 2).forEach(function (g) {
      g.items.forEach(function (it) { out.push({ when: g.period, text: it.text }); });
    });
    recentEl.innerHTML = out.slice(0, 6).map(function (n) {
      return '<li class="reveal"><span class="when">' + esc(n.when) + "</span><span>" + esc(n.text) + "</span></li>";
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
      return '<div class="tl-period"><span class="mono">' + esc(year) + "</span><h3>" + esc(season || year) + "</h3></div>" +
        '<div><ul class="tl-items">' + g.items.map(function (it) {
          return '<li class="n-' + esc(it.type) + '">' + esc(it.text) + "</li>";
        }).join("") + "</ul>" +
        (g.images && g.images.length ? '<div class="tl-photos">' + g.images.map(function (src) {
          return '<a href="' + esc(src) + '" target="_blank" rel="noopener"><img src="' + esc(src) + '" alt="Lab photo, ' + esc(g.period) + '" loading="lazy"></a>';
        }).join("") + "</div>" : "") + "</div>";
    }).join("");
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
