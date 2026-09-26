# Instruction

Rules I must follow in this project, at all times.

## 1. Technology
- Pure vanilla js only.
- No python.
- No database.
- No external api calling.
- Static site: html, css and js files opened directly in a browser.

## 2. Code style
- Kiss principle: keep everything simple.
- Modular concept: every feature lives in its own small module.
- Never put comments inside the code. All explanations go in md files.
- No camelCase ever in publicly visible content (headings, labels, buttons, file names, folder names). Only sentence case.
- No global variables. Each module is an iife that keeps its state private and exposes only what is needed through a namespace or custom events.
- Modules must be as independent as possible: no shared mutable state, no deep relative path assumptions, each script loaded with a plain path from the root.

## 3. Process
- Before writing any code, create the architecture folder with the full plan of folders, files and code structure.
- The plan must be approved by the user before a single line of code is written.
- Documentation for each rule, decision or explanation lives in md files, never in code comments.

## 4. Verification checklist before delivering any change
- [ ] No comment token appears in any js, css or html file.
- [ ] No var / let / const declared at top level outside a module wrapper.
- [ ] All visible text is in sentence case.
- [ ] Each module works even if the other modules are removed.
- [ ] No network request to an external service.
