(function () {
  "use strict";

  var ns = window.lueurStudio;

  function workThumb(tiles, className) {
    var grid = ns.dom.el("div", className || "work-thumb");
    tiles.forEach(function (color) {
      var tile = ns.dom.el("i");
      tile.style.background = color;
      grid.appendChild(tile);
    });
    return grid;
  }

  function card(project, index) {
    var box = ns.dom.el("article", "work-card glass reveal");
    box.appendChild(workThumb(project.tiles));

    var body = ns.dom.el("div", "work-body");
    body.appendChild(ns.dom.el("p", "eyebrow", project.niche));
    body.appendChild(ns.dom.el("h3", null, project.title));
    body.appendChild(ns.dom.el("p", "muted", project.state));
    body.appendChild(ns.dom.el("p", "work-result", project.result));

    var tags = ns.dom.el("div", "chip-row");
    project.tags.forEach(function (tag) {
      tags.appendChild(ns.dom.el("span", "chip", tag));
    });
    body.appendChild(tags);

    var button = ns.dom.el("button", "work-open");
    button.type = "button";
    button.dataset.workIndex = String(index);
    button.setAttribute("aria-label", "Open the " + project.title + " case study");
    button.textContent = "View case";
    body.appendChild(button);

    box.appendChild(body);
    return box;
  }

  function renderWork() {
    var host = ns.dom.section("work");
    var data = ns.data.work;
    var site = ns.data.site;
    if (!host || !data || !site) {
      return;
    }
    var head = ns.dom.el("header", "section-head reveal");
    head.appendChild(ns.dom.el("p", "eyebrow", "Work"));
    head.appendChild(ns.dom.el("h2", null, "Recent revivals."));
    head.appendChild(ns.dom.el("p", "lead", site.workIntro));
    host.appendChild(head);

    var grid = ns.dom.el("div", "work-grid");
    grid.id = "work-grid";
    data.forEach(function (project, index) {
      grid.appendChild(card(project, index));
    });
    host.appendChild(grid);
  }

  ns.render.workThumb = workThumb;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderWork);
  } else {
    renderWork();
  }
})();
