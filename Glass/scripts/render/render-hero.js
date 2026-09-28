(function () {
  "use strict";

  var ns = window.lueurStudio;

  function previewCard() {
    var card = ns.dom.el("div", "preview-card glass");
    card.innerHTML =
      '<div class="preview-top">' +
      '<span class="preview-avatar" aria-hidden="true"></span>' +
      '<div class="preview-lines"><i></i><i></i></div>' +
      "</div>" +
      '<div class="preview-grid">' +
      '<span class="tile tile-a"></span><span class="tile tile-b"></span><span class="tile tile-c"></span>' +
      '<span class="tile tile-d"></span><span class="tile tile-e"></span><span class="tile tile-f"></span>' +
      "</div>" +
      '<div class="preview-foot"><i></i><i></i></div>';
    return card;
  }

  function renderHero() {
    var host = ns.dom.section("hero");
    if (!host) {
      return;
    }
    var site = ns.lang.t();
    host.innerHTML = "";
    var wrap = ns.dom.el("div", "hero-wrap reveal");

    var text = ns.dom.el("div", "hero-text");
    text.appendChild(ns.dom.el("p", "eyebrow", site.hero.eyebrow));
    var h1 = ns.dom.el("h1", "title-lower", site.hero.titleLead);
    text.appendChild(h1);
    text.appendChild(ns.dom.el("p", "lead", site.hero.description));

    var actions = ns.dom.el("div", "hero-actions");
    var primary = ns.dom.el("a", "btn btn-primary", site.hero.primaryCta);
    primary.href = "#contact";
    var secondary = ns.dom.el("a", "btn btn-ghost", site.hero.secondaryCta);
    secondary.href = "#services";
    actions.appendChild(primary);
    actions.appendChild(secondary);
    text.appendChild(actions);

    var chips = ns.dom.el("ul", "chip-row");
    site.hero.chips.forEach(function (label) {
      var li = ns.dom.el("li", "chip glass", label);
      chips.appendChild(li);
    });
    text.appendChild(chips);

    var visual = ns.dom.el("div", "hero-visual");
    visual.appendChild(previewCard());
    var badge = ns.dom.el("div", "float-badge glass");
    badge.textContent = site.hero.badge;
    visual.appendChild(badge);

    wrap.appendChild(text);
    wrap.appendChild(visual);
    host.appendChild(wrap);
  }

  ns.render.hero = renderHero;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderHero);
  } else {
    renderHero();
  }
})();
