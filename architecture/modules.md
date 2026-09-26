# Modules

Companion of plan.md. Explains what each module does, its inputs and outputs. This file is the only place where explanations live: no code file will ever contain a comment.

## Root files

| File | Role | Depends on | Writes to |
|---|---|---|---|
| index.html | Static shell, section landmarks, script tags in load order | nothing | itself |

## Styles

| File | Role |
|---|---|
| base.css | Reset, fonts, colors as css custom properties |
| layout.css | Page grid, header, sections, footer, responsive rules |
| components.css | Cards, buttons, form, gallery, lightbox, menu |

Styles are independent from js: every visual state is driven by a class name that a module toggles.

## Scripts

| Module | Exposes | Reads | Effect |
|---|---|---|---|
| namespace.js | glassWindow object with data, dom, render, ui slots | nothing | creates the single container |
| dom.js | dom.query, dom.queryAll, dom.el | namespace | tiny helpers, no state |
| data/services.js | data.services array | namespace | plain local content |
| data/gallery.js | data.gallery array | namespace | plain local content |
| data/contact.js | data.contact object | namespace | email, phone, address strings |
| render-header.js | nothing | dom, document | fills #site-header |
| render-hero.js | nothing | dom, document | fills #hero |
| render-services.js | nothing | dom, data.services | fills #services-grid |
| render-gallery.js | nothing | dom, data.gallery | fills #gallery-grid |
| render-about.js | nothing | dom, document | fills #about-body |
| render-contact.js | nothing | dom, data.contact | fills #contact-info |
| render-footer.js | nothing | dom, data.contact | fills #site-footer |
| nav-toggle.js | nothing | #menu-button, #site-nav | toggles open class |
| smooth-scroll.js | nothing | all a[href^="#"] | scrolls to anchors |
| gallery-lightbox.js | nothing | .gallery-item clicks | owns and shows overlay |
| contact-form.js | nothing | #contact-form | validates, shows status |
| main.js | nothing | document ready | sets footer year, marks boot complete |

## Independence guarantees

1. A renderer checks its target element exists; if not, it returns silently. So pages can drop any section without breaking scripts.
2. Behavior modules query their elements after renderers ran, thanks to load order; they never import each other.
3. The lightbox listens through event delegation on its grid, so it works even if the gallery data changes.
4. The form never sends data anywhere: validation is local and the success message is rendered in the page (no backend, no external api).
5. Removing any single module file from index.html leaves the rest of the site functional.
