(function () {
  "use strict";

  var ns = window.lueurStudio;

  function bind() {
    var button = document.getElementById("menu-button");
    if (!button) {
      return;
    }

    function sheet() {
      return document.getElementById("menu-sheet");
    }

    function setOpen(open) {
      var node = sheet();
      if (!node) {
        return;
      }
      node.classList.toggle("open", open);
      button.classList.toggle("active", open);
      button.setAttribute("aria-expanded", open ? "true" : "false");
      var copy = ns.lang.t();
      button.setAttribute("aria-label", copy.menuButton);
      document.body.classList.toggle("locked", open);
    }

    button.addEventListener("click", function () {
      var node = sheet();
      setOpen(!node || !node.classList.contains("open"));
    });

    document.addEventListener("click", function (event) {
      if (event.target.closest("#menu-sheet a")) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });
  }

  ns.behavior.navToggle = bind;

  function bindSidebar() {
    var header = document.getElementById("site-header");
    var hide = document.getElementById("sidebar-hide");
    var show = document.getElementById("sidebar-show");
    if (!header || !hide || !show) {
      return;
    }
    hide.onclick = null;
    show.onclick = null;

    function setHidden(hidden) {
      document.body.classList.toggle("sidebar-hidden", hidden);
      hide.setAttribute("aria-expanded", hidden ? "false" : "true");
      show.setAttribute("aria-expanded", hidden ? "true" : "false");
      if (hidden) {
        show.focus();
      }
    }

    hide.onclick = function () {
      setHidden(true);
    };

    show.onclick = function () {
      setHidden(false);
      var firstLink = header.querySelector(".desktop-list a");
      if (firstLink) {
        firstLink.focus();
      }
    };

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && document.body.classList.contains("sidebar-hidden")) {
        setHidden(false);
      }
    });
  }

  ns.behavior.sidebarToggle = bindSidebar;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      bind();
      bindSidebar();
    });
  } else {
    bind();
    bindSidebar();
  }
})();
