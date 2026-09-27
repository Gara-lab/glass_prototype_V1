(function () {
  "use strict";

  var ns = window.lueurStudio;

  function renderFooter() {
    var host = ns.dom.section("site-footer");
    var site = ns.data.site;
    if (!host) {
      return;
    }
    var copy = ns.lang.t();
    var page = document.body.dataset.page || "home";
    host.innerHTML = "";
    var inner = ns.dom.el("div", "footer-inner glass reveal");

    var left = ns.dom.el("div", "footer-left");
    left.appendChild(ns.dom.el("p", "footer-brand", "Lueur studio"));
    left.appendChild(ns.dom.el("p", "muted", copy.hero.titleLead));
    left.appendChild(ns.dom.el("p", "muted", copy.contact.email));

    var right = ns.dom.el("div", "footer-right");
    if (site && site.secondaryNav) {
      var legalRow = ns.dom.el("nav", "legal-row");
      legalRow.setAttribute("aria-label", copy.legal.eyebrow);
      site.secondaryNav.forEach(function (item) {
        var prefix = page === "home" ? "" : site.homeHref + "/";
        var link = ns.dom.el("a", "legal-link", copy.nav[item.id] || item.label);
        link.href = prefix + item.href;
        legalRow.appendChild(link);
      });
      right.appendChild(legalRow);
    }
    var year = ns.dom.el("p", "footer-year");
    year.id = "footer-year";
    year.textContent = copy.footer.copyright.replace("YEAR", String(new Date().getFullYear()));
    var top = ns.dom.el("a", "btn btn-ghost to-top", copy.footer.backToTop);
    top.href = page === "home" ? "#hero" : site.homeHref + "#hero";
    right.appendChild(year);
    right.appendChild(top);

    inner.appendChild(left);
    inner.appendChild(right);
    host.appendChild(inner);
  }

  ns.render.footer = renderFooter;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderFooter);
  } else {
    renderFooter();
  }
})();
