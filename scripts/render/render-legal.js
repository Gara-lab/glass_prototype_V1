(function () {
  "use strict";

  var ns = window.lueurStudio;

  function renderLegalPage() {
    var host = ns.dom.section("privacy");
    if (!host) {
      host = ns.dom.section("terms");
    }
    if (!host) {
      return;
    }
    var pageName = host.dataset.page;
    var data = pageName === "terms" ? ns.data.terms : ns.data.privacy;
    if (!data) {
      return;
    }

    var head = ns.dom.el("header", "section-head reveal");
    head.appendChild(ns.dom.el("p", "eyebrow", "Legal"));
    head.appendChild(ns.dom.el("h1", null, host.dataset.title));
    head.appendChild(ns.dom.el("p", "muted", data.updated));
    head.appendChild(ns.dom.el("p", "lead", data.intro));
    host.appendChild(head);

    var article = ns.dom.el("article", "legal-card glass reveal");
    data.sections.forEach(function (sectionItem) {
      var block = ns.dom.el("section", "legal-block");
      block.appendChild(ns.dom.el("h2", null, sectionItem.heading));
      sectionItem.paragraphs.forEach(function (text) {
        block.appendChild(ns.dom.el("p", "muted", text));
      });
      article.appendChild(block);
    });
    host.appendChild(article);

    var back = ns.dom.el("a", "btn btn-soft legal-back", "Back to the studio");
    if (ns.data.site) {
      back.href = ns.data.site.homeHref + "#hero";
    }
    host.appendChild(back);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderLegalPage);
  } else {
    renderLegalPage();
  }
})();
