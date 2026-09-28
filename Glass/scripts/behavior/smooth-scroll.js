(function () {
  "use strict";

  var ns = window.lueurStudio;

  function fitNav() {
    var header = ns.dom.section("site-header");
    var nav = header && header.querySelector(".desktop-nav");
    if (!header || !nav) {
      return;
    }
    var headerStyles = window.getComputedStyle(header);
    var padTop = parseFloat(headerStyles.paddingTop) || 0;
    var padBottom = parseFloat(headerStyles.paddingBottom) || 0;
    var gap = parseFloat(headerStyles.rowGap) || 0;
    var others = [header.querySelector(".brand"), header.querySelector(".header-cta"), header.querySelector(".sidebar-hide")];
    var used = padTop + padBottom;
    var count = 0;
    others.forEach(function (el) {
      if (el && el.offsetParent !== null) {
        used += el.getBoundingClientRect().height;
        count += 1;
      }
    });
    used += gap * count;
    var max = Math.max(160, header.getBoundingClientRect().height - used);
    nav.style.maxHeight = max + "px";
  }

  function bind() {
    var header = ns.dom.section("site-header");
    if (header && typeof ResizeObserver !== "undefined") {
      new ResizeObserver(fitNav).observe(header);
    }
    fitNav();

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
  ns.behavior.syncNav = fitNav;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
