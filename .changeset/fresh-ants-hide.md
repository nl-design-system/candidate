---
'@nl-design-system-candidate/link-css': major
---

`dist/html/*.css` bevat nu een opt-in variant met de classes `.nl-html--all` en `.nl-html--link`, in plaats van
ongescopede selectors. De voorheen ongescopede, "vanilla" implementatie (zonder class name nodig) is verplaatst naar
`dist/vanilla/*.css` en `src/vanilla/`.
