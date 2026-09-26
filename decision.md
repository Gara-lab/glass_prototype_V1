# Decisions

Why the project is shaped like this. Read alongside summary.md. Newest entries at the top of each list. If a rule here ever conflicts with instruction.md, instruction.md wins and this file gets corrected.

## Approved decisions (do not revisit without the user asking)

### D1. Process order
- Architecture folder written and approved BEFORE any code. Keep doing this for every new feature or section: plan first, wait for approval, then code.
- Deliver incrementally. The user asked to start with the main page only. Do not build several features in one pass unless explicitly requested.

### D2. Scope of the current build
- Main page = header, hero, services, results, about, contact, footer, mobile menu sheet. Gallery and testimonials were deliberately left out of this pass.
- Single page for now. Nav uses in-page anchors, not separate pages.

### D3. Branding
- Placeholder brand name "Lueur studio" chosen by me, accepted implicitly. It is placeholder data, expected to be replaced. Located in scripts/data/site.js only.
- Language: english. No french version requested yet.
- Niche target undefined on purpose. Copy stays generic ("small and quiet accounts") so it can be re-targeted later by editing data files only.

### D4. Style system
- Glassmorphism implemented as translucent surfaces + backdrop-filter blur over soft blurred color blobs ("aura" divs). Never rely on backdrop-filter alone: every glass surface also has a solid rgba fallback so text stays readable where blur is unsupported.
- Palette anchored on #f4e9e4 warm nude/blush, deep ink text, single muted accent. Clean girl = generous whitespace, thin weights for large type, rounded corners, no hard shadows.
- Mobile-first: base styles are the phone layout, desktop changes only inside min-width media queries. Web-app view = sticky header, bottom tabbar-style nav on small screens, tap targets >= 44px, viewport-fit=cover, no horizontal scroll.

### D5. Zero-globals architecture
- Exactly one window property: window.lueurStudio. Everything else lives inside iifes.
- Data modules write ns.data.<key>. Renderers read one key and write into one section id. Behavior modules bind only to elements they own. main.js runs last and owns cross-cutting boot logic.
- Load order matters and is fixed in index.html. New script tags go in the same block order: namespace, dom, data, render, behavior, main last.

### D6. Content separation
- All visible strings live in scripts/data/*.js. Hardcoded copy inside a renderer is a mistake to fix, not a style to copy.
- Form validation messages are in the form module because they are behavior, not marketing copy. Acceptable exception; do not move them.

### D7. No external anything
- No cdn, no web fonts, no analytics, no images from urls. System font stack and local svgs only. Any future asset must be a file inside assets/.

## Lessons learned / known traps

### L1. Empty sections are rendered by js
Sections in index.html are intentionally empty shells. If a section appears blank, check the renderer ran and the data key name matches. Do not "fix" it by pasting html into index.html.

### L2. Adding a section is a 4-file change
New section requires: id in index.html, entry in ns.data.site.nav, a renderer file plus its script tag, and the section list inside main.js active-nav map. Forgetting the main.js list silently breaks nav highlighting.

### L3. camelCase ban scope
The ban covers publicly visible content AND file/folder names. Internal js identifiers use lower case with words joined or short names, never capitalized mid-word in anything a user can see. Filenames already follow this: kebab-free simple names like render-hero.js, nav-toggle.js.

### L4. No comments means documentation must exist
Since code carries zero comments, any non-obvious behavior must be described in architecture/modules.md or these md files. When adding a module, add its row to modules.md in the same change.

### L5. Session continuity
summary.md and decision.md must be updated at the end of every turn where something changed. They are written for an agent reader: short, factual, no hedging, no open questions phrased as prose. An unverified claim does not belong here; check the disk first.

### L6. Verification before claiming done
Every delivery gets checked against the instruction.md checklist: no comment tokens in js/css/html, no top-level declarations outside an iife, sentence case everywhere visible, each module survives removal of the others, no network requests. Verify with grep/read, not by memory.

## Rejected / deferred on purpose
- Backend or third-party form handler for the contact form: rejected for now (rules forbid db and external api). Contact form validates and confirms locally only.
- Multi-page site routing: deferred.
- French localization: deferred.
- Real photography/mockups: deferred until the user supplies files.
- Lightbox gallery: planned in architecture, deferred to a later pass.
