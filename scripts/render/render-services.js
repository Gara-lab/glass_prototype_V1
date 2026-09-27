(function () {
  "use strict";

  var ns = window.lueurStudio;

  function card(service, index) {
    var glyphs = ["sparkle", "layers", "grid", "leaf"];
    var box = ns.dom.el("article", "service-card glass reveal");
    var iconWrap = ns.dom.el("div", "service-icon");
    iconWrap.innerHTML = ns.render.icon(glyphs[index] || "sparkle");
    box.appendChild(iconWrap);
    box.appendChild(ns.dom.el("h3", null, service.title));
    box.appendChild(ns.dom.el("p", "muted", service.description));

    var list = ns.dom.el("ul", "service-items");
    service.list.forEach(function (item) {
      var li = ns.dom.el("li", null, item);
      list.appendChild(li);
    });
    box.appendChild(list);
    return box;
  }

  function renderServices() {
    var host = ns.dom.section("services");
    if (!host) {
      return;
    }
    var copy = ns.lang.t();
    host.innerHTML = "";
    var head = ns.dom.el("header", "section-head reveal");
    head.appendChild(ns.dom.el("p", "eyebrow", copy.services.eyebrow));
    head.appendChild(ns.dom.el("h2", null, copy.services.heading));
    head.appendChild(ns.dom.el("p", "lead", copy.services.intro));
    host.appendChild(head);

    var grid = ns.dom.el("div", "services-grid");
    grid.id = "services-grid";
    copy.services.items.forEach(function (service, index) {
      grid.appendChild(card(service, index));
    });
    host.appendChild(grid);
  }

  ns.render.services = renderServices;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderServices);
  } else {
    renderServices();
  }
})();
