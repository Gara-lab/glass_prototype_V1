(function () {
  "use strict";

  var ns = window.lueurStudio;

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

  function applyChrome() {
    var copy = ns.lang.t();
    document.documentElement.lang = copy.lang;
    document.title = copy.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", copy.description);
    }
    var skip = document.querySelector(".skip-link");
    if (skip) {
      skip.textContent = copy.skipLink;
    }
  }

  function rerenderAll() {
    applyChrome();
    if (ns.render.header) {
      ns.render.header();
    }
    if (ns.render.tabbar) {
      ns.render.tabbar();
    }
    if (ns.render.refreshLangLabel) {
      ns.render.refreshLangLabel();
    }
    if (ns.render.hero) {
      ns.render.hero();
    }
    if (ns.render.services) {
      ns.render.services();
    }
    if (ns.render.work) {
      ns.render.work();
    }
    if (ns.render.results) {
      ns.render.results();
    }
    if (ns.render.about) {
      ns.render.about();
    }
    if (ns.render.contact) {
      ns.render.contact();
    }
    if (ns.render.legal) {
      ns.render.legal();
    }
    if (ns.render.footer) {
      ns.render.footer();
    }
    if (ns.behavior.lightboxClose) {
      ns.behavior.lightboxClose();
    }
    if (ns.behavior.contactForm) {
      ns.behavior.contactForm();
    }
    if (ns.behavior.sidebarToggle) {
      ns.behavior.sidebarToggle();
    }
    if (ns.behavior.revealOnScroll) {
      ns.behavior.revealOnScroll();
    }
    setActiveNav();
  }

  function boot() {
    applyChrome();
    setActiveNav();
    window.addEventListener("lueur:langchange", rerenderAll);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
