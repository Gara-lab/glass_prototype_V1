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

## 2b. Git boundaries (hard rule)
- The assistant never commits, pushes, merges or rewrites git history on its own initiative.
- The assistant only edits working-tree files; it acts as the branch request creator.
- Committing and publishing to Github happen exclusively by explicit user choice.
- Reporting state must say "changes are in the working tree", never "committed".

## 3. Process
- When the user asks for a change without asking for a plan, write the actual code directly in that same turn. Never answer such a request with a plan or a description only.
- Plans are written only when the user explicitly asks for one.
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
