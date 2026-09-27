(function () {
  "use strict";

  var ns = window.lueurStudio;

  function scrollable(el) {
    return el && el.scrollHeight - el.clientHeight > 1;
  }

  function atTop(el) {
    return el.scrollTop <= 0;
  }

  function atBottom(el) {
    return el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
  }

  function bindSidebarScroll() {
    var header = ns.dom.section("site-header");
    if (!header) {
      return;
    }

    var gestureOwner = null;
    var touchStartY = null;

    function currentNav() {
      return header.querySelector(".desktop-nav");
    }

    function fitNav() {
      var nav = currentNav();
      if (!nav) {
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

    function wheelTarget(event) {
      var nav = currentNav();
      if (!nav || typeof event.target.closest !== "function") {
        return null;
      }
      if (event.target.closest(".desktop-nav")) {
        return nav;
      }
      if (header.contains(event.target)) {
        return null;
      }
      return window;
    }

    header.addEventListener("wheel", function (event) {
      var nav = currentNav();
      if (!nav || !scrollable(nav)) {
        return;
      }
      var overNav =
        typeof event.target.closest === "function" &&
        !!event.target.closest(".desktop-nav");
      var delta = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY;
      if (!overNav) {
        if (gestureOwner === nav) {
          event.preventDefault();
        }
        return;
      }
      event.preventDefault();
      if (gestureOwner && gestureOwner !== nav) {
        return;
      }
      var blockedAtEdge =
        (delta < 0 && atTop(nav)) || (delta > 0 && atBottom(nav));
      if (blockedAtEdge) {
        gestureOwner = null;
        var root = document.scrollingElement || document.documentElement;
        root.scrollTop += delta;
        return;
      }
      gestureOwner = nav;
      nav.scrollTop += delta;
    }, { passive: false });

    document.addEventListener("wheel", function (event) {
      var nav = currentNav();
      if (!nav || gestureOwner !== nav) {
        return;
      }
      if (wheelTarget(event) === nav) {
        return;
      }
      event.preventDefault();
    }, { passive: false });

    function bindTouch(nav) {
      nav.addEventListener("touchstart", function (event) {
        touchStartY = event.touches[0].clientY;
        gestureOwner = scrollable(nav) ? nav : null;
      }, { passive: true });

      nav.addEventListener("touchmove", function (event) {
        if (touchStartY === null || gestureOwner !== nav || !scrollable(nav)) {
          return;
        }
        var delta = touchStartY - event.touches[0].clientY;
        var blockedAtEdge =
          (delta > 0 && atBottom(nav)) || (delta < 0 && atTop(nav));
        if (blockedAtEdge) {
          gestureOwner = null;
          return;
        }
        event.preventDefault();
        nav.scrollTop += delta;
        touchStartY = event.touches[0].clientY;
      }, { passive: false });
    }

    document.addEventListener("touchmove", function (event) {
      var nav = currentNav();
      if (nav && gestureOwner === nav && !nav.contains(event.target)) {
        event.preventDefault();
      }
    }, { passive: false });

    document.addEventListener("touchend", function () {
      touchStartY = null;
    });

    window.addEventListener("scroll", function () {
      gestureOwner = null;
    }, { passive: true });

    var attached = new WeakSet();

    function sync() {
      fitNav();
      var nav = currentNav();
      if (nav && !attached.has(nav)) {
        attached.add(nav);
        bindTouch(nav);
      }
    }

    sync();
    window.addEventListener("resize", sync);
    window.setInterval(sync, 400);
  }

  function bind() {
    bindSidebarScroll();

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
