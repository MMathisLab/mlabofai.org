/* Team graph: people ↔ research themes. Built from the People cards on the page, so it stays in sync
   with them. Click (or Enter on) a person to highlight their themes and show their links; click a theme
   to highlight everyone working on it. No dependencies. */
(function () {
  "use strict";
  var svg = document.getElementById("tg-svg");
  var panel = document.getElementById("tg-panel");
  if (!svg || !panel) return;

  var NS = "http://www.w3.org/2000/svg";
  var W = 900, H = 640, CX = W / 2, CY = H / 2;
  var THEMES = [
    { key: "cv", label: "Computer vision", color: "var(--teal)" },
    { key: "bio", label: "Biomechanics", color: "var(--blue)" },
    { key: "neuro", label: "Neural dynamics", color: "var(--violet)" },
    { key: "ml", label: "Machine learning", color: "var(--magenta)" }
  ];
  var LINK_ORDER = ["Website", "GitHub", "Google Scholar", "LinkedIn"];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function el(tag, attrs, parent) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }

  /* ---- read people from the page ---- */
  function readPerson(card, nameSel, roleSel, imgSel) {
    var name = (card.querySelector(nameSel) || {}).textContent;
    if (!name) return null;
    name = name.replace(/, PhD$/, "").trim();
    var themes = [].slice.call(card.querySelectorAll(".theme")).map(function (t) {
      var m = t.className.match(/th-(\w+)/); return m ? m[1] : null;
    }).filter(function (k) { return k && THEMES.some(function (t) { return t.key === k; }); });
    if (!themes.length) return null;
    var links = [].slice.call(card.querySelectorAll(".person-links a")).map(function (a) {
      var lab = (a.getAttribute("aria-label") || "").split(": ").pop();
      return { type: lab, href: a.href };
    }).sort(function (a, b) { return LINK_ORDER.indexOf(a.type) - LINK_ORDER.indexOf(b.type); });
    var img = card.querySelector(imgSel);
    var role = (card.querySelector(roleSel) || {}).textContent || "";
    return { name: name, role: role.trim(), themes: themes, links: links, img: img ? img.getAttribute("src") : null };
  }
  var people = [];
  var pi = document.getElementById("mackenzie");
  if (pi) {
    var p0 = readPerson(pi, "h2", ".eyebrow", ".pi-photo img");
    if (p0) { p0.role = "Principal investigator"; p0.pi = true; people.push(p0); }
  }
  [].slice.call(document.querySelectorAll(".person")).forEach(function (c) {
    var p = readPerson(c, "h4", "p", ".avatar img");
    if (p) people.push(p);
  });
  if (!people.length) return;

  /* ---- layout: themes on a ring, people pulled toward their themes, pushed apart from each other ---- */
  var R = 250;
  THEMES.forEach(function (t, i) {
    var a = -Math.PI / 2 + i * 2 * Math.PI / THEMES.length;
    t.x = CX + R * Math.cos(a); t.y = CY + R * Math.sin(a);
  });
  var byKey = {}; THEMES.forEach(function (t) { byKey[t.key] = t; });
  people.forEach(function (p, i) {
    if (p.pi) { p.x = CX; p.y = CY; return; }
    var sx = 0, sy = 0;
    p.themes.forEach(function (k) { sx += byKey[k].x; sy += byKey[k].y; });
    sx /= p.themes.length; sy /= p.themes.length;
    // single-theme people sit just inside their theme; multi-theme people sit between theirs
    var pull = p.themes.length === 1 ? 0.7 : 0.78;
    p.tx = CX + (sx - CX) * pull; p.ty = CY + (sy - CY) * pull;
    var j = (i * 137.5) * Math.PI / 180;
    p.x = p.tx + 18 * Math.cos(j); p.y = p.ty + 18 * Math.sin(j);
  });
  var nodes = people.filter(function (p) { return !p.pi; });
  for (var it = 0; it < 900; it++) {
    nodes.forEach(function (a) {
      var fx = (a.tx - a.x) * 0.04, fy = (a.ty - a.y) * 0.04;
      people.concat(THEMES).forEach(function (b) {
        if (a === b) return;
        var dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy + 0.01, min = b.key ? 70 : (b.pi ? 92 : 66);
        if (d2 < min * min) { var d = Math.sqrt(d2), f = (min - d) / d * 0.5; fx += dx * f; fy += dy * f; }
      });
      a.x = Math.max(36, Math.min(W - 36, a.x + fx));
      a.y = Math.max(36, Math.min(H - 44, a.y + fy));
    });
  }

  /* crop the view to the occupied area so the graph fills its box */
  var all = people.concat(THEMES);
  var x0 = Math.min.apply(null, all.map(function (n) { return n.x; })) - 150;
  var x1 = Math.max.apply(null, all.map(function (n) { return n.x; })) + 150;
  var y0 = Math.min.apply(null, all.map(function (n) { return n.y; })) - 80;
  var y1 = Math.max.apply(null, all.map(function (n) { return n.y; })) + 80;
  svg.setAttribute("viewBox", [x0, y0, x1 - x0, y1 - y0].map(Math.round).join(" "));

  /* ---- draw ---- */
  var defs = el("defs", {}, svg);
  var gEdges = el("g", { "class": "tg-edges" }, svg);
  var gThemes = el("g", { "class": "tg-themes" }, svg);
  var gPeople = el("g", { "class": "tg-people" }, svg);

  people.forEach(function (p, i) {
    p.edges = p.themes.map(function (k) {
      var t = byKey[k];
      var line = el("line", { x1: p.x, y1: p.y, x2: t.x, y2: t.y, "class": "tg-edge", style: "stroke:" + t.color }, gEdges);
      line._p = p; line._t = t;
      return line;
    });
  });

  THEMES.forEach(function (t) {
    var g = el("g", { "class": "tg-theme", tabindex: "0", role: "button", "aria-label": t.label + ": show who works on this" }, gThemes);
    el("circle", { cx: t.x, cy: t.y, r: 30, style: "fill:" + t.color }, g);
    // label on the outside of the ring, away from the people
    var ux = t.x - CX, uy = t.y - CY, ul = Math.sqrt(ux * ux + uy * uy) || 1; ux /= ul; uy /= ul;
    var words = t.label.split(" ");
    var side = Math.abs(ux) > Math.abs(uy);
    var lx = t.x + ux * (side ? 40 : 0), ly = t.y + uy * 44 + (side ? -6 : (uy < 0 ? -10 * words.length : 6));
    var txt = el("text", { x: lx, y: ly, "text-anchor": side ? (ux > 0 ? "start" : "end") : "middle", "dominant-baseline": "middle" }, g);
    words.forEach(function (w, wi) {
      var ts = el("tspan", { x: lx, dy: wi ? "1.15em" : "0" }, txt); ts.textContent = w;
    });
    t.g = g;
    g.addEventListener("click", function () { selectTheme(t); });
    g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectTheme(t); } });
  });

  people.forEach(function (p, i) {
    var r = p.pi ? 34 : 20;
    var g = el("g", { "class": "tg-person" + (p.pi ? " is-pi" : ""), tabindex: "0", role: "button", "aria-label": p.name + ": show themes and links" }, gPeople);
    var id = "tgc" + i;
    var cp = el("clipPath", { id: id }, defs);
    el("circle", { cx: p.x, cy: p.y, r: r }, cp);
    el("circle", { cx: p.x, cy: p.y, r: r + 3, "class": "tg-ring" }, g);
    if (p.img) el("image", { href: p.img, x: p.x - r, y: p.y - r, width: 2 * r, height: 2 * r, "clip-path": "url(#" + id + ")", preserveAspectRatio: "xMidYMid slice" }, g);
    var label = el("text", { x: p.x, y: p.y + r + 14, "text-anchor": "middle", "class": "tg-name" }, g);
    label.textContent = p.name.split(" ")[0];
    p.g = g;
    g.addEventListener("click", function () { selectPerson(p); });
    g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectPerson(p); } });
  });

  /* ---- interaction ---- */
  function clear() {
    svg.classList.remove("has-sel");
    [].slice.call(svg.querySelectorAll(".on")).forEach(function (n) { n.classList.remove("on"); });
  }
  function chip(k) { var t = byKey[k]; return '<span class="theme th-' + k + '">' + esc(t.label) + "</span>"; }

  function selectPerson(p) {
    clear(); svg.classList.add("has-sel");
    p.g.classList.add("on");
    p.edges.forEach(function (e) { e.classList.add("on"); e._t.g.classList.add("on"); });
    var site = p.links.filter(function (l) { return l.type === "Website"; })[0];
    var others = p.links.filter(function (l) { return l !== site; });
    panel.innerHTML =
      (p.img ? '<img class="tg-photo" src="' + esc(p.img) + '" alt="">' : "") +
      "<h4>" + esc(p.name) + "</h4><p class=\"tg-role\">" + esc(p.role) + "</p>" +
      '<div class="themes">' + p.themes.map(chip).join("") + "</div>" +
      (site ? '<a class="tg-site" href="' + esc(site.href) + '" target="_blank" rel="noopener">Personal website ↗</a>' : "") +
      (others.length ? '<ul class="tg-links">' + others.map(function (l) {
        return '<li><a href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(l.type) + " ↗</a></li>";
      }).join("") + "</ul>" : "") +
      (!p.links.length ? '<p class="tg-hint">No public profile links yet.</p>' : "");
  }

  function selectTheme(t) {
    clear(); svg.classList.add("has-sel");
    t.g.classList.add("on");
    var who = people.filter(function (p) { return p.themes.indexOf(t.key) >= 0; });
    who.forEach(function (p) {
      p.g.classList.add("on");
      p.edges.forEach(function (e) { if (e._t === t) e.classList.add("on"); });
    });
    panel.innerHTML = '<span class="theme th-' + t.key + '">' + esc(t.label) + "</span>" +
      "<h4>" + who.length + (who.length === 1 ? " person" : " people") + "</h4>" +
      '<ul class="tg-people-list">' + who.map(function (p, i) {
        return '<li><button type="button" data-i="' + people.indexOf(p) + '">' + esc(p.name) + "</button></li>";
      }).join("") + "</ul>";
    [].slice.call(panel.querySelectorAll("button[data-i]")).forEach(function (b) {
      b.addEventListener("click", function () { selectPerson(people[+b.getAttribute("data-i")]); });
    });
  }

  svg.addEventListener("click", function (e) {
    if (e.target === svg) { clear(); panel.innerHTML = '<p class="tg-hint">Select a person or a theme.</p>'; }
  });
})();
