(function () {
  "use strict";

  var ns = window.lueurStudio;

  function tilesFor(index) {
    var data = ns.data.work;
    if (data && data[index]) {
      return data[index].tiles;
    }
    return ["#f3e3da", "#e7ddd2", "#d9e2dc", "#f6efe3", "#eadfd6", "#dfe7de"];
  }

  function panel(project, index) {
    var copy = ns.lang.t();
    var panelBox = ns.dom.el("div", "lightbox-panel glass");
    panelBox.setAttribute("role", "dialog");
    panelBox.setAttribute("aria-modal", "true");
    panelBox.setAttribute("aria-label", project.title);

    var close = ns.dom.el("button", "lightbox-close");
    close.type = "button";
    close.id = "lightbox-close";
    close.setAttribute("aria-label", copy.work.closeAria);
    close.innerHTML = '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12"/><path d="M18 6L6 18"/></svg>';
    panelBox.appendChild(close);

    panelBox.appendChild(ns.render.workThumb(tilesFor(index), "lightbox-thumb"));

    var body = ns.dom.el("div", "lightbox-body");
    body.appendChild(ns.dom.el("p", "eyebrow", project.niche));
    body.appendChild(ns.dom.el("h3", null, project.title));
    body.appendChild(ns.dom.el("p", "muted", project.state));
    body.appendChild(ns.dom.el("p", null, project.summary));
    body.appendChild(ns.dom.el("p", "work-result", project.result));

    var tags = ns.dom.el("div", "chip-row");
    project.tags.forEach(function (tag) {
      tags.appendChild(ns.dom.el("span", "chip", tag));
    });
    body.appendChild(tags);
    panelBox.appendChild(body);
    return panelBox;
  }

  function build() {
    if (ns.dom.query(".lightbox")) {
      return;
    }
    var overlay = ns.dom.el("div", "lightbox");
    overlay.id = "lightbox";
    overlay.hidden = true;
    document.body.appendChild(overlay);
  }

  function open(index) {
    var items = ns.lang.t().work.items;
    var overlay = document.getElementById("lightbox");
    if (!overlay || !items[index]) {
      return;
    }
    overlay.innerHTML = "";
    overlay.appendChild(panel(items[index], index));
    overlay.hidden = false;
    requestAnimationFrame(function () {
      overlay.classList.add("open");
      document.body.classList.add("locked");
      var close = document.getElementById("lightbox-close");
      if (close) {
        close.focus();
      }
    });
  }

  function close() {
    var overlay = document.getElementById("lightbox");
    if (!overlay || overlay.hidden) {
      return;
    }
    overlay.classList.remove("open");
    document.body.classList.remove("locked");
    window.setTimeout(function () {
      overlay.hidden = true;
      overlay.innerHTML = "";
    }, 300);
  }

  ns.render.lightboxPanel = panel;
  ns.behavior.lightboxOpen = open;
  ns.behavior.lightboxClose = close;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
