# Lueur studio

Landing page showcasing a designer who revives small and quiet social accounts and pages.

## Run it

Open index.html in any modern browser, or serve the folder with any static server (for example a live-server extension). The site itself uses no build step, no dependencies and makes no request to an external service.

## Structure

- architecture/plan.md: full structure, style brief and module rules.
- architecture/modules.md: what each module reads, writes and exposes.
- instruction.md: project rules that every change must follow.
- styles/: base.css tokens, layout.css shell and grids, components.css glass parts.
- scripts/data/: all editable content (texts, services, results, contact details).
- scripts/render/: one renderer per section.
- scripts/behavior/: menu, smooth scroll, reveal on scroll, form validation.

## Edit content

All visible texts live in scripts/data/site.js, services.js, results.js and contact.js. Change them there; no other file needs an edit.
