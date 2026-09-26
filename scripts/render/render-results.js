(function () {
  "use strict";

  var ns = window.lueurStudio;

  function renderResults() {
    var host = ns.dom.section("results");
    var data = ns.data.results;
    var site = ns.data.site;
    if (!host || !data) {
      return;
    }
    var head = ns.dom.el("header", "section-head reveal");
    head.appendChild(ns.dom.el("p", "eyebrow", "Results"));
    head.appendChild(ns.dom.el("h2", null, "Quiet accounts, visible results."));
    if (site) {
      head.appendChild(ns.dom.el("p", "lead", site.resultsIntro));
    }
    host.appendChild(head);

    var grid = ns.dom.el("div", "results-grid");
    data.forEach(function (item) {
      var card = ns.dom.el("div", "result-card glass reveal");
      card.appendChild(ns.dom.el("p", "result-value", item.value));
      card.appendChild(ns.dom.el("p", "muted", item.label));
      grid.appendChild(card);
    });
    host.appendChild(grid);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderResults);
  } else {
    renderResults();
  }
})();
