(function () {
  "use strict";

  var ns = window.lueurStudio;

  function renderResults() {
    var host = ns.dom.section("results");
    if (!host) {
      return;
    }
    var copy = ns.lang.t();
    host.innerHTML = "";
    var head = ns.dom.el("header", "section-head reveal");
    head.appendChild(ns.dom.el("p", "eyebrow", copy.results.eyebrow));
    head.appendChild(ns.dom.el("h2", null, copy.results.heading));
    head.appendChild(ns.dom.el("p", "lead", copy.results.intro));
    host.appendChild(head);

    var grid = ns.dom.el("div", "results-grid");
    copy.results.items.forEach(function (item) {
      var card = ns.dom.el("div", "result-card glass reveal");
      card.appendChild(ns.dom.el("p", "result-value", item.value));
      card.appendChild(ns.dom.el("p", "muted", item.label));
      grid.appendChild(card);
    });
    host.appendChild(grid);
  }

  ns.render.results = renderResults;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderResults);
  } else {
    renderResults();
  }
})();
