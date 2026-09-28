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

  function tilesFor(index) {
    var data = ns.data.work;
    if (data && data[index]) {
      return data[index].tiles;
    }
    return ["#f3e3da", "#e7ddd2", "#d9e2dc", "#f6efe3", "#eadfd6", "#dfe7de"];
  }

  function card(project, index) {
    var copy = ns.lang.t();
    var box = ns.dom.el("article", "work-card glass reveal");
    box.appendChild(workThumb(tilesFor(index)));

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
    button.setAttribute("aria-label", copy.work.openAria.replace("CASE", project.title));
    button.textContent = copy.work.open;
    body.appendChild(button);

    box.appendChild(body);
    return box;
  }

  function renderWork() {
    var host = ns.dom.section("work");
    if (!host) {
      return;
    }
    var copy = ns.lang.t();
    host.innerHTML = "";
    var head = ns.dom.el("header", "section-head reveal");
    head.appendChild(ns.dom.el("p", "eyebrow", copy.work.eyebrow));
    head.appendChild(ns.dom.el("h2", null, copy.work.heading));
    head.appendChild(ns.dom.el("p", "lead", copy.work.intro));
    host.appendChild(head);

    var grid = ns.dom.el("div", "work-grid");
    grid.id = "work-grid";
    copy.work.items.forEach(function (project, index) {
      grid.appendChild(card(project, index));
    });
    host.appendChild(grid);
  }

  ns.render.workThumb = workThumb;
  ns.render.work = renderWork;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderWork);
  } else {
    renderWork();
  }
})();
