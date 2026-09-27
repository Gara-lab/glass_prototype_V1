(function () {
  "use strict";

  var ns = window.lueurStudio;

  function icon(name) {
    var shapes = {
      sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/><circle cx="18.5" cy="4.5" r="1.4"/>',
      layers: '<path d="M12 4l8 4-8 4-8-4 8-4z"/><path d="M4 12l8 4 8-4"/><path d="M4 16l8 4 8-4"/>',
      grid: '<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
      leaf: '<path d="M5 19c0-8 6-13 14-14 0 9-5 14-13 14H5z"/><path d="M6 18c4-4 8-6 11-7"/>',
      home: '<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/>',
      chart: '<path d="M4 20V9"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>',
      user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/>',
      mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/>'
    };
    return '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (shapes[name] || "") + "</svg>";
  }

  function brand() {
    var wrap = ns.dom.el("a", "brand");
    wrap.href = "#hero";
    wrap.innerHTML = '<span class="brand-mark" aria-hidden="true"></span><span class="brand-text">Lueur <em>studio</em></span>';
    return wrap;
  }

  function navLinks(list, className, withIcons) {
    var ul = ns.dom.el("ul", className);
    list.forEach(function (item) {
      var li = ns.dom.el("li");
      var a = ns.dom.el("a", "nav-link");
      a.href = item.href;
      a.dataset.target = item.id;
      if (withIcons) {
        a.innerHTML = icon(item.id) + "<span>" + item.label + "</span>";
      } else {
        a.textContent = item.label;
      }
      li.appendChild(a);
      ul.appendChild(li);
    });
    return ul;
  }

  function hideButton(labels) {
    var button = ns.dom.el("button", "sidebar-hide");
    button.id = "sidebar-hide";
    button.type = "button";
    button.setAttribute("aria-controls", "site-header");
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-label", labels.hideLabel);
    button.innerHTML = '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 6l-6 6 6 6"/></svg><span>' + labels.hideLabel + "</span>";
    return button;
  }

  function showRail(labels) {
    var rail = ns.dom.el("div", "sidebar-rail");
    rail.id = "sidebar-rail";
    var button = ns.dom.el("button", "sidebar-show");
    button.id = "sidebar-show";
    button.type = "button";
    button.setAttribute("aria-controls", "site-header");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", labels.showLabel);
    button.innerHTML = '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=\"M4 7h16\"/><path d=\"M4 12h16\"/><path d=\"M4 17h16\"/></svg>';
    rail.appendChild(button);
    document.body.appendChild(rail);
  }

  function renderHeader() {
    var host = ns.dom.section("site-header");
    var site = ns.data.site;
    if (!host || !site) {
      return;
    }
    host.innerHTML = "";
    host.appendChild(brand());

    var desktop = ns.dom.el("nav", "desktop-nav");
    desktop.setAttribute("aria-label", "Main navigation");
    desktop.appendChild(navLinks(site.nav, "desktop-list", true));
    host.appendChild(desktop);

    var cta = ns.dom.el("a", "btn btn-soft header-cta", "Start a project");
    cta.href = "#contact";
    host.appendChild(cta);

    if (site.sidebar) {
      host.appendChild(hideButton(site.sidebar));
      showRail(site.sidebar);
    }

    var sheet = ns.dom.el("div", "menu-sheet");
    sheet.id = "menu-sheet";
    var sheetNav = ns.dom.el("nav", "sheet-nav");
    sheetNav.setAttribute("aria-label", "Sheet navigation");
    sheetNav.appendChild(navLinks(site.nav, "sheet-list"));
    sheet.appendChild(sheetNav);
    document.body.appendChild(sheet);

    var toggle = ns.dom.el("button", "menu-button");
    toggle.id = "menu-button";
    toggle.type = "button";
    toggle.setAttribute("aria-controls", "menu-sheet");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    toggle.innerHTML = '<span class="menu-bar"></span><span class="menu-bar"></span>';
    host.appendChild(toggle);
  }

  function renderTabbar() {
    var site = ns.data.site;
    if (!site) {
      return;
    }
    if (ns.dom.query(".mobile-tabbar")) {
      return;
    }
    var bar = ns.dom.el("nav", "mobile-tabbar glass");
    bar.setAttribute("aria-label", "Mobile navigation");
    site.nav.forEach(function (item) {
      var a = ns.dom.el("a", "tab");
      a.href = item.href;
      a.dataset.target = item.id;
      a.innerHTML = icon(item.id === "home" ? "home" : item.id === "services" ? "grid" : item.id === "results" ? "chart" : item.id === "about" ? "user" : "mail") + "<span>" + item.label + "</span>";
      bar.appendChild(a);
    });
    document.body.appendChild(bar);
  }

  ns.render.icon = icon;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      renderHeader();
      renderTabbar();
    });
  } else {
    renderHeader();
    renderTabbar();
  }
})();
