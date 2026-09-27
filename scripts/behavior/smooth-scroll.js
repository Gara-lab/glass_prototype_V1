(function () {
  "use strict";

  var ns = window.lueurStudio;

  function bind() {
    var header = ns.dom.section("site-header");
    if (header) {
      header.addEventListener("wheel", function (event) {
        var nav = header.querySelector(".desktop-nav");
        if (!nav) {
          return;
        }
        if (nav.scrollHeight > nav.clientHeight + 1) {
          event.stopPropagation();
        }
      }, { passive: true });
    }

    document.addEventListener("click", function (event) {
      var link = event.target.closest('a[href^="#"]');
      if (!link) {
        return;
      }
      var id = link.getAttribute("href").slice(1);
      var target = document.getElementById(id);
      if (!target) {
        return;
      }
      event.preventDefault();
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", "#" + id);
    });
  }

  ns.behavior.smoothScroll = bind;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
