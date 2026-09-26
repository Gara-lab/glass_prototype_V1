(function () {
  "use strict";

  var ns = window.lueurStudio;

  function renderAbout() {
    var host = ns.dom.section("about");
    var site = ns.data.site;
    if (!host || !site) {
      return;
    }
    var wrap = ns.dom.el("div", "about-wrap");

    var text = ns.dom.el("div", "about-text reveal");
    text.appendChild(ns.dom.el("p", "eyebrow", site.about.eyebrow));
    text.appendChild(ns.dom.el("h2", null, site.about.title));
    site.about.paragraphs.forEach(function (paragraph) {
      text.appendChild(ns.dom.el("p", "muted", paragraph));
    });

    var values = ns.dom.el("ul", "value-row");
    site.about.values.forEach(function (value) {
      values.appendChild(ns.dom.el("li", "chip glass", value));
    });
    text.appendChild(values);

    var panel = ns.dom.el("div", "about-panel glass reveal");
    panel.innerHTML =
      '<p class="panel-label">In every project</p>' +
      '<ul class="panel-list">' +
      "<li>A calm, premium visual direction</li>" +
      "<li>Files sized for phone screens first</li>" +
      "<li>A look you can keep posting for months</li>" +
      "</ul>";

    wrap.appendChild(text);
    wrap.appendChild(panel);
    host.appendChild(wrap);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderAbout);
  } else {
    renderAbout();
  }
})();
