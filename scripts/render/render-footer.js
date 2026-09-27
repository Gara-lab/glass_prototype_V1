(function () {
  "use strict";

  var ns = window.lueurStudio;

  function renderFooter() {
    var host = ns.dom.section("site-footer");
    var site = ns.data.site;
    var data = ns.data.contact;
    var page = document.body.dataset.page || "home";
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
    if (site && site.secondaryNav) {
      var legalRow = ns.dom.el("nav", "legal-row");
      legalRow.setAttribute("aria-label", "Legal navigation");
      site.secondaryNav.forEach(function (item) {
        var prefix = page === "home" ? "" : site.homeHref + "/";
        var link = ns.dom.el("a", "legal-link", item.label);
        link.href = prefix + item.href;
        legalRow.appendChild(link);
      });
      right.appendChild(legalRow);
    }
    var year = ns.dom.el("p", "footer-year");
    year.id = "footer-year";
    var top = ns.dom.el("a", "btn btn-ghost to-top", "Back to top");
    top.href = page === "home" ? "#hero" : site.homeHref + "#hero";
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
