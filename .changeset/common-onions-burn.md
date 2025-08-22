---
'@nl-design-system-candidate/mark-tokens': patch
---

Add a missing "files" field in package.json.

Because tokens.json was not ignored explicitly in .npmignore or .gitignore, it was always included in the package, so
technically this is a patch change.
