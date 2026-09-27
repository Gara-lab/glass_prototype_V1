(function () {
  "use strict";

  var ns = window.lueurStudio;

  function globeIcon() {
    return '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.8 2.6 4 5.6 4 9s-1.2 6.4-4 9c-2.8-2.6-4-5.6-4-9s1.2-6.4 4-9z"/></svg>';
  }

  function buildLangToggle() {
    if (ns.dom.query(".lang-toggle")) {
      return;
    }
    var button = ns.dom.el("button", "lang-toggle glass");
    button.id = "lang-toggle";
    button.type = "button";
    button.setAttribute("aria-label", "Changer de langue / Change language");
    button.innerHTML = globeIcon() + "<span>" + ns.data.i18n.toggleLabel[ns.lang.getLang()] + "</span>";
    document.body.appendChild(button);

    button.addEventListener("click", function () {
      var next = ns.lang.getLang() === "fr" ? "en" : "fr";
      ns.lang.setLang(next);
      window.dispatchEvent(new CustomEvent("lueur:langchange", { detail: { lang: next } }));
    });
  }

  function refreshLangLabel() {
    var button = ns.dom.query(".lang-toggle");
    if (button) {
      button.querySelector("span").textContent = ns.data.i18n.toggleLabel[ns.lang.getLang()];
    }
  }

  ns.render.langToggle = buildLangToggle;
  ns.render.refreshLangLabel = refreshLangLabel;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildLangToggle);
  } else {
    buildLangToggle();
  }
})();
