(function () {
  "use strict";

  var ns = window.lueurStudio;

  function bind() {
    var overlay = document.getElementById("lightbox");
    if (!overlay) {
      return;
    }

    document.addEventListener("click", function (event) {
      var opener = event.target.closest("[data-work-index]");
      if (opener) {
        ns.behavior.lightboxOpen(Number(opener.dataset.workIndex));
        return;
      }
      if (event.target.closest("#lightbox-close")) {
        ns.behavior.lightboxClose();
        return;
      }
      if (event.target === overlay) {
        ns.behavior.lightboxClose();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        ns.behavior.lightboxClose();
      }
    });
  }

  ns.behavior.lightbox = bind;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
