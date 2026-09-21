---
'@nl-design-system-candidate/button-css': major
'@nl-design-system-candidate/code-block-css': major
'@nl-design-system-candidate/code-css': major
'@nl-design-system-candidate/heading-css': major
'@nl-design-system-candidate/link-css': major
'@nl-design-system-candidate/mark-css': major
'@nl-design-system-candidate/paragraph-css': major
---

`dist/html/*.css` bevat nu een opt-in variant met de classes `.nl-html--all` en `.nl-html--{component}`, in plaats van
ongescopede selectors. De voorheen ongescopede, "vanilla" implementatie (zonder class name nodig) is verplaatst naar
`dist/vanilla/*.css` en `src/vanilla/`.
