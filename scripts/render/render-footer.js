(function () {
  "use strict";

  var ns = window.lueurStudio;

  function renderFooter() {
    var host = ns.dom.section("site-footer");
    var site = ns.data.site;
    var data = ns.data.contact;
    if (!host) {
      return;
    }
    var inner = ns.dom.el("div", "footer-inner glass reveal");

    var left = ns.dom.el("div", "footer-left");
    left.appendChild(ns.dom.el("p", "footer-brand", site ? site.brand + " " + site.brandSuffix : "Lueur studio"));
    left.appendChild(ns.dom.el("p", "muted", site ? site.tagline : ""));
    if (data) {
      left.appendChild(ns.dom.el("p", "muted", data.email));
    }

    var right = ns.dom.el("div", "footer-right");
    var year = ns.dom.el("p", "footer-year");
    year.id = "footer-year";
    var top = ns.dom.el("a", "btn btn-ghost to-top", "Back to top");
    top.href = "#hero";
    right.appendChild(year);
    right.appendChild(top);

    inner.appendChild(left);
    inner.appendChild(right);
    host.appendChild(inner);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderFooter);
  } else {
    renderFooter();
  }
})();
