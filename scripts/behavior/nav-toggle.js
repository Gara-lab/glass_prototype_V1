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
      button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
