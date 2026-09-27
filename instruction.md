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
- Exception: when the user asks for a change without asking for a plan, write the code directly in that same turn, test it and commit it. Never answer such a request with a plan or a description only.
- Every finished turn ends with: code on disk, headless test run against the real files, one git commit containing the change. A turn that produced no commit did not produce work.
- Prefer touching existing code only when strictly necessary; new features go into new modules plus data files.
- Documentation for each rule, decision or explanation lives in md files, never in code comments.
- summary.md holds the verified current state of the project. decision.md holds decisions, changes, improvements and lessons. Both are written for an agent reader: short, factual, no doubt left about what to do or not do.
- Update summary.md and decision.md at the end of every turn in which anything changed, and re-read them at the start of every new session instead of relying on memory. Never write a claim into them without checking the disk first.

## 4. Verification checklist before delivering any change
- [ ] No comment token appears in any js, css or html file.
- [ ] No var / let / const declared at top level outside a module wrapper.
- [ ] All visible text is in sentence case.
- [ ] Each module works even if the other modules are removed.
- [ ] No network request to an external service.
