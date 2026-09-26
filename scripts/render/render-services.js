(function () {
  "use strict";

  var ns = window.lueurStudio;

  function card(service) {
    var box = ns.dom.el("article", "service-card glass reveal");
    var iconWrap = ns.dom.el("div", "service-icon");
    iconWrap.innerHTML = ns.render.icon(service.icon);
    box.appendChild(iconWrap);
    box.appendChild(ns.dom.el("h3", null, service.title));
    box.appendChild(ns.dom.el("p", "muted", service.description));

    var list = ns.dom.el("ul", "service-items");
    service.items.forEach(function (item) {
      var li = ns.dom.el("li", null, item);
      list.appendChild(li);
    });
    box.appendChild(list);
    return box;
  }

  function renderServices() {
    var host = ns.dom.section("services");
    var data = ns.data.services;
    var site = ns.data.site;
    if (!host || !data) {
      return;
    }
    var head = ns.dom.el("header", "section-head reveal");
    head.appendChild(ns.dom.el("p", "eyebrow", "Services"));
    head.appendChild(ns.dom.el("h2", null, "What the studio revives."));
    if (site) {
      head.appendChild(ns.dom.el("p", "lead", site.servicesIntro));
    }
    host.appendChild(head);

    var grid = ns.dom.el("div", "services-grid");
    grid.id = "services-grid";
    data.forEach(function (service) {
      grid.appendChild(card(service));
    });
    host.appendChild(grid);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderServices);
  } else {
    renderServices();
  }
})();
