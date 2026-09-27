(function () {
  "use strict";

  var ns = window.lueurStudio;

  function renderAbout() {
    var host = ns.dom.section("about");
    if (!host) {
      return;
    }
    var copy = ns.lang.t();
    host.innerHTML = "";
    var wrap = ns.dom.el("div", "about-wrap");

    var text = ns.dom.el("div", "about-text reveal");
    text.appendChild(ns.dom.el("p", "eyebrow", copy.about.eyebrow));
    text.appendChild(ns.dom.el("h2", null, copy.about.title));
    copy.about.paragraphs.forEach(function (paragraph) {
      text.appendChild(ns.dom.el("p", "muted", paragraph));
    });

    var values = ns.dom.el("ul", "value-row");
    copy.about.values.forEach(function (value) {
      values.appendChild(ns.dom.el("li", "chip glass", value));
    });
    text.appendChild(values);

    var panel = ns.dom.el("div", "about-panel glass reveal");
    var items = "";
    copy.about.panelItems.forEach(function (line) {
      items += "<li>" + line + "</li>";
    });
    panel.innerHTML =
      '<p class="panel-label">' + copy.about.panelLabel + "</p>" +
      '<ul class="panel-list">' + items + "</ul>";

    wrap.appendChild(text);
    wrap.appendChild(panel);
    host.appendChild(wrap);
  }

  ns.render.about = renderAbout;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderAbout);
  } else {
    renderAbout();
  }
})();
