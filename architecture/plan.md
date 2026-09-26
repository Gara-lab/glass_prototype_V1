# Architecture plan

Status: waiting for user approval. No code will be written before this plan is approved.

## 1. Project goal

A static web vitrine (showcase) site. Pure vanilla js, html and css. No build step, no framework, no python, no database, no external api. It must run by opening index.html in a browser or with any plain static server.

## 2. Folder structure

```text
glass_window/
|-- index.html
|-- instruction.md
|-- readme.md
|-- architecture/
|   |-- plan.md
|   `-- modules.md
|-- assets/
|   |-- img/
|   |   `-- logo.svg
|   `-- icons/
|       `-- favicon.svg
|-- styles/
|   |-- base.css
|   |-- layout.css
|   `-- components.css
`-- scripts/
    |-- namespace.js
    |-- dom.js
    |-- data/
    |   |-- services.js
    |   |-- gallery.js
    |   `-- contact.js
    |-- render-header.js
    |-- render-hero.js
    |-- render-services.js
    |-- render-gallery.js
    |-- render-about.js
    |-- render-contact.js
    |-- render-footer.js
    |-- nav-toggle.js
    |-- smooth-scroll.js
    |-- gallery-lightbox.js
    |-- contact-form.js
    `-- main.js
```

All file and folder names are lowercase with dashes. No camelCase anywhere, including in publicly visible text which uses sentence case only.

## 3. Page sections

Single page vitrine, one html file, section by section:

1. Header: logo, navigation links, mobile menu button.
2. Hero: title, short description, call to action button.
3. Services: grid of service cards rendered from local data.
4. Gallery: grid of images with a lightbox preview.
5. About: presentation text block.
6. Contact: form with name, email and message, validated locally, plus a mailto fallback link.
7. Footer: copyright and back to top link.

## 4. Module design rules

- Every js file is an iife. Nothing is declared at top level, so there are zero global variables except the single private namespace object created once in namespace.js.
- namespace.js creates the one container that all modules attach themselves to. Load order matters only for this first file; every other module is independent.
- Each module reads its own input from the document or from its own data file and writes only inside its own html element. Two modules never touch the same node.
- Data files export plain arrays or objects through the namespace. Renderers stay dumb: they receive data and return markup strings.
- Behavior files (nav toggle, smooth scroll, lightbox, form) bind events on their own elements only. Removing any behavior file breaks nothing else.
- Communication between modules, when needed, uses custom dom events dispatched on document, never shared mutable state.
- No comments inside any code file. This md file carries all explanations.

## 5. Code structure sketch

Only the shape, not the final code.

### namespace.js
```text
iife:
  create window.glassWindow if missing
  expose empty sub-objects: data, render, ui
```

### dom.js
```text
iife:
  attach to glassWindow.dom:
    query(selector, scope)      -> first element
    queryAll(selector, scope)   -> array of elements
    el(tag, className, text)    -> new element
```

### data/services.js
```text
iife:
  attach array of {title, description, icon} to glassWindow.data.services
```

### data/gallery.js
```text
iife:
  attach array of {source, caption} to glassWindow.data.gallery
```

### render-services.js
```text
iife:
  read glassWindow.data.services
  if #services-grid exists: build cards, append
```

### nav-toggle.js
```text
iife:
  find #menu-button and #site-nav
  on click: toggle open class and aria-expanded
```

### gallery-lightbox.js
```text
iife:
  listen for clicks on .gallery-item inside #gallery
  show/hide a single overlay element it owns
```

### contact-form.js
```text
iife:
  find #contact-form
  on submit: prevent default, validate fields, show status message in #form-status
```

### main.js
```text
iife:
  on domcontentloaded: nothing to wire; each module self-initializes.
  main.js only exists as the last loaded script to confirm boot and set the footer year.
```

## 6. Script loading order in index.html

```text
namespace.js
dom.js
data/services.js
data/gallery.js
data/contact.js
render-header.js
render-hero.js
render-services.js
render-gallery.js
render-about.js
render-contact.js
render-footer.js
nav-toggle.js
smooth-scroll.js
gallery-lightbox.js
contact-form.js
main.js
```

Plain relative paths from the root, so no path mistakes between modules.

## 7. Open questions for the user

1. Is the vitrine topic fixed (the README mentions a glass / storefront theme). Should I keep a generic business vitrine content?
2. Language of the visible text: english or french?
3. Are placeholder images acceptable (local svg placeholders, since no external api is allowed)?
4. Confirm the single page layout above versus multiple pages.
