(function () {
  "use strict";

  var ns = window.lueurStudio;

  function start() {
    var nodes = ns.dom.queryAll(".reveal");
    if (!nodes.length) {
      return;
    }
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (node) {
        node.classList.add("visible");
      });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    nodes.forEach(function (node) {
      observer.observe(node);
    });
  }

  ns.behavior.revealOnScroll = start;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
