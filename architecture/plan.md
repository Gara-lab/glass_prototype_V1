# Architecture plan

Status: phase 1 (main landing page) built. Later phases add the work gallery, testimonials and inner pages.

## 0. Style brief (approved by user)

- Niche: a designer who revives small or dead social accounts and pages and improves their results. The exact target niche stays undefined, so all copy is niche-neutral ("accounts and pages", "your brand").
- Visual language: glassmorphism (frosted translucent panels, soft blur, thin light borders), professional, clean-girl aesthetic (airy whitespace, restrained typography, subtle blush/nude/sage accents), smooth, minimal, premium.
- Mobile-first with an optimized web-app view: floating glass top bar plus bottom tab bar on phones, safe-area padding, 48px touch targets, desktop switches to a fixed left glass sidebar from 768px up.
- Motion: fade-up reveal on scroll and gentle hover lift, both disabled under prefers-reduced-motion.

## 1. Project goal

A static landing page showcasing the designer's services. Pure vanilla js, html and css. No build step, no framework, no python, no database, no external api, no external fonts or cdn (system font stacks only). It runs by opening index.html in a browser or with any plain static server.

## 2. Folder structure

```text
|-- index.html
|-- instruction.md
|-- readme.md
|-- license.md
|-- architecture/
|   |-- plan.md
|   `-- modules.md
|-- assets/
|   |-- icons/favicon.svg
|   `-- img/logo.svg
|-- styles/
|   |-- base.css        tokens, reset, reveal states
|   |-- layout.css      shell, header, grids, responsive rules
|   `-- components.css  glass, buttons, cards, form, tabbar, sheet
`-- scripts/
    |-- namespace.js    single container window.lueurStudio
    |-- dom.js          query, queryAll, el, section helpers
    |-- main.js         footer year + active nav observer
    |-- data/           site.js services.js results.js contact.js
    |-- render/         render-header hero services results about contact footer
    `-- behavior/       nav-toggle smooth-scroll reveal-on-scroll contact-form
```

All file and folder names are lowercase with dashes. Publicly visible text uses sentence case only.

## 3. Page sections (phase 1)

1. Header (fixed glass bar): brand, desktop side navigation, mobile menu button, desktop call to action.
2. Hero: eyebrow, title, description, two buttons, chips row, glass feed-preview mockup card, floating badge.
3. Services: four glass cards rendered from local data (feed revival, page identity kit, template library, content relaunch).
4. Results: four statistic cards rendered from local data.
5. About: studio story, value chips, glass side panel.
6. Contact: locally validated form (name, email, message) with status line, plus a glass info card with a mailto fallback. No data ever leaves the page.
7. Footer: brand, tagline, email, dynamic year, back to top.
8. Mobile bottom tab bar: five tabs mirroring the navigation, active state follows scroll position.

## 4. Module design rules

- Every js file is an iife in strict mode; nothing is declared at top level. The only window property added by the project is the single namespace object created once in namespace.js.
- Each module reads its own input (its data slice or its own dom node) and writes only inside that node. Two modules never touch the same element.
- Renderers check their target exists and return silently when it does not, so any section can be removed without breaking other scripts.
- Behavior modules bind through delegation or re-query their nodes at domcontentloaded, so they never depend on another module's variables. Removing any one behavior file breaks nothing else.
- Data files export plain arrays or objects through the namespace; renderers stay dumb.
- No comments inside any code file. This md file and modules.md carry all explanations.

## 5. Script loading order in index.html

```text
namespace.js, dom.js,
data/site.js, data/services.js, data/results.js, data/contact.js,
render/render-header.js ... render-footer.js,
behavior/nav-toggle.js, behavior/smooth-scroll.js, behavior/reveal-on-scroll.js, behavior/contact-form.js,
main.js
```

Plain root-relative paths everywhere, so no path mistakes between modules.

## 6. Next phases (not built yet)

1. Work gallery with lightbox once real project images exist.
2. Testimonials strip.
3. Offer detail pages if the niche gets defined.
