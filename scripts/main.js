(function () {
  "use strict";

  var ns = window.lueurStudio;

  function setYear() {
    var node = document.getElementById("footer-year");
    if (node) {
      node.textContent = "© " + new Date().getFullYear() + " Lueur studio. All rights reserved.";
    }
  }

  function setActiveNav() {
    var sections = ["home", "services", "work", "results", "about", "contact"];
    var map = { home: "hero" };
    if (!("IntersectionObserver" in window)) {
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        var id = entry.target.id === "hero" ? "home" : entry.target.id;
        ns.dom.queryAll("[data-target]").forEach(function (link) {
          link.classList.toggle("active", link.dataset.target === id);
        });
      });
    }, { threshold: 0.35 });

    sections.forEach(function (name) {
      var target = document.getElementById(map[name] || name);
      if (target) {
        observer.observe(target);
      }
    });
  }

  function boot() {
    setYear();
    setActiveNav();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
