# Modules

Companion of plan.md. Explains what each module does, its inputs and outputs. No code file contains a comment, so this file is the only place where explanations live.

## Styles

| File | Role |
|---|---|
| base.css | Design tokens as css custom properties, reset, focus styles, reveal animation states |
| layout.css | Fixed glass header, mobile spacing, section grids, desktop sidebar from 768px, aura background blobs |
| components.css | Glass surface, buttons, chips, service/result/about/contact cards, menu sheet, bottom tab bar, form |

Styles are independent from js: every visual state is driven by a class name a module toggles (open, active, visible, ok, error, locked).

## Scripts

| Module | Exposes | Reads | Writes to |
|---|---|---|---|
| namespace.js | window.lueurStudio with data, dom, render, behavior slots | nothing | the namespace only |
| dom.js | dom.query, dom.queryAll, dom.el, dom.section | namespace | nothing |
| data/site.js | data.site (brand, hero, intros, about, nav list) | namespace | nothing |
| data/services.js | data.services array | namespace | nothing |
| data/results.js | data.results array | namespace | nothing |
| data/contact.js | data.contact object | namespace | nothing |
| render/render-header.js | render.icon (shared svg icon factory) | data.site | #site-header, .menu-sheet, .mobile-tabbar |
| render/render-hero.js | nothing | data.site | #hero |
| render/render-services.js | nothing | data.services, data.site | #services |
| render/render-results.js | nothing | data.results, data.site | #results |
| render/render-about.js | nothing | data.site | #about |
| render/render-contact.js | nothing | data.contact, data.site | #contact (owns #contact-form and #form-status) |
| render/render-footer.js | nothing | data.site, data.contact | #site-footer (creates #footer-year) |
| behavior/nav-toggle.js | behavior.navToggle | #menu-button, #menu-sheet | open/active/locked classes |
| behavior/smooth-scroll.js | behavior.smoothScroll | any a[href^="#"] | scroll position, hash |
| behavior/reveal-on-scroll.js | behavior.revealOnScroll | every .reveal node | adds .visible once |
| behavior/contact-form.js | behavior.contactForm | #contact-form fields | #form-status text and classes |
| main.js | nothing | #footer-year, [data-target], sections | year text, .active nav state |

## Independence guarantees

1. Each renderer returns silently if its section id is missing, so sections can be deleted safely.
2. nav-toggle re-queries #menu-sheet on demand because the sheet is created by render-header after load; it keeps no reference to another module.
3. smooth-scroll and nav-toggle both use document-level delegation, so they work for nodes created later (tab bar, sheet, footer link).
4. reveal-on-scroll observes whatever carries .reveal at domcontentloaded; it imports no other module.
5. contact-form validates locally and never sends data anywhere; the mailto link is the only outbound action and is handled by the browser.
6. Removing any single script tag from index.html leaves the rest of the site functional (worst case: one empty section or no animation).
