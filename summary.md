# Summary

State of the project. Read this first after any session break. Facts only, verified against the files on disk. Do not trust memory over this file; if they disagree, re-read the code and update this file.

## Project identity
- Name: Lueur studio.
- What it is: single-page landing page showcasing a freelance designer.
- Designer niche: services for social accounts and pages that are small or dead. Goal: revive them and improve their results. The exact target niche (beauty, food, coaching...) is NOT decided yet. Keep copy generic enough to be re-targeted later by editing data files only.
- Brand tone: calm, premium, soft.

## Style brief (fixed by user)
- Glassmorphism.
- Professional look.
- Clean girl aesthetic.
- Smooth, minimal, premium.
- Mobile-first with an optimized web-app view.

## Rules that govern every change
See instruction.md. Non-negotiables: pure vanilla js, no python, no db, no external api, no comments in code, no global variables, no camelCase in publicly visible content, KISS, modular and independent modules, architecture plan approved before coding.

## Current state: DONE and verified
Main page exists and works. Files on disk:
- index.html: shell. 3 aura background divs, skip link, header#site-header, main with 6 empty sections in flow order (hero, services, work, results, about, contact), footer#site-footer. body has data-page="home". All sections are filled by js renderers. Script load order at the bottom of body: namespace.js, dom.js, data files, render files, behavior files, main.js last.
- privacy.html and terms.html: legal pages, same shell pattern, body data-page="privacy"/"terms", single section rendered by render-legal.js from scripts/data/legal.js.
- styles/base.css: tokens (colors #f4e9e4 palette, glass surfaces, radii, spacing, type scale), reset, typography, reduced-motion handling.
- styles/layout.css: mobile-first shell, section rhythm, grids, aura blobs, tabbar area, desktop breakpoints. Desktop sidebar (.site-header) is a fixed column capped at calc(100vh - 52px) with overflow hidden; .desktop-nav inside it is the only scroll container (overflow-y auto, overscroll-behavior contain, flex 1 1 auto, min-height 0) so sidebar scrolling never chains to the page.
- styles/components.css: glass card, button, badge, nav, menu sheet, form, lightbox, legal page, drawer, reveal animation classes.
- scripts/namespace.js: creates window.lueurStudio with sub-objects data, dom, render, behavior. This is the ONLY object attached to window.
- scripts/dom.js: helpers ns.dom.query / queryAll.
- scripts/data/site.js: brand, tagline, hero copy, intros, about paragraphs, values, nav items (order: home, services, work, results, about, contact), secondaryNav (privacy, terms), homeHref, sidebar labels, contact intro. Single source of all static text.
- scripts/data/services.js: service offers list.
- scripts/data/results.js: numbers / proof points.
- scripts/data/work.js: 6 placeholder case studies for the work showcase.
- scripts/data/legal.js: privacy policy and terms of service sections. Privacy states explicitly: no personal data held by the site, email never used for ads or marketing, delivered products are the client's sole responsibility and ownership. Terms repeat the sole property / sole responsibility clause in "Ownership and usage".
- scripts/data/contact.js: email, handles, form labels.
- scripts/render/render-header.js, render-hero.js, render-services.js, render-work.js, render-results.js, render-about.js, render-contact.js, render-footer.js, render-lightbox.js, render-legal.js: one renderer per section, each reads its own data key and writes only into its own section id. render-header is page-aware via body data-page: on home the sidebar lists all 6 sections plus a "More" drawer with both legal links; on privacy/terms the sidebar lists Home + Services plus a "More" drawer containing ONLY the other legal page (no self-link); hide-menu button and rail exist on every page. Mobile tabbar = in-page nav without duplication; hamburger sheet holds overflow. Section anchors auto-prefix with index.html# on legal pages.
- scripts/render/render-legal.js: renders the legal article into the section whose id matches the page ("privacy" or "terms"), read via ns.dom.section by id, NOT by class.
- scripts/behavior/nav-toggle.js: mobile menu sheet open/close, aria-expanded, escape closes. Sidebar hide/show rail (body.sidebar-hidden).
- scripts/behavior/smooth-scroll.js: anchor scrolling honoring sticky header offset. Also stops wheel event propagation inside the desktop sidebar so its scroll stays independent from the page.
- scripts/behavior/lightbox.js: opens work case in lightbox on "View case", closes on X / backdrop / Escape.
- scripts/behavior/reveal-on-scroll.js: IntersectionObserver adds .revealed.
- scripts/behavior/contact-form.js: client-side validation only (name >= 2 chars, email regex, message >= 10 chars). Shows status text in #form-status. No submission anywhere, no network call.
- scripts/main.js: sets footer year, active-nav highlighting via IntersectionObserver, boot order.
- assets/img/logo.svg, assets/icons/favicon.svg: local placeholders, no external resources.
- architecture/plan.md and architecture/modules.md: approved structure and module contract.
- readme.md, license.md (MIT), .gitignore.

## How to run
Open index.html in a browser, or serve the folder statically. No build step, no dependencies.

## Content location
Every visible text lives in scripts/data/*.js. Changing copy never requires touching render or behavior files.

## Not built yet (next candidates, do not assume any is started)
- Testimonials section.
- Pricing or package details.
- Final niche choice and the copy pass that follows it.
- Language decision confirmed as english so far; french version not requested yet.
- Real designer name, real contact email, real social handles, real images. All currently placeholders.
- Multi-page expansion, favicon polish, og meta tags.

## Known limits
- Form does not send anything. It validates and confirms locally. A real inbox needs a backend or a form service, both forbidden by the rules until the user decides otherwise.
- Images are svg placeholders. Photography or mockups require files added to assets/img/.
- Active-nav map in main.js hardcodes the 5 section ids. Adding a section means editing that list plus nav in site.js plus a renderer plus a script tag.
