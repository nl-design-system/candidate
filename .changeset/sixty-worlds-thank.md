---
'@nl-design-system-candidate/button-css': major
---

`dist/html/*.css` bevat nu een opt-in variant met de classes `.nl-html--all` en `.nl-html--button`, in plaats van
ongescopede selectors. De voorheen ongescopede, "vanilla" implementatie (zonder class name nodig) is verplaatst naar
`dist/vanilla/*.css` en `src/vanilla/`.
