---
name: Code schrijven
about: Code schrijven om de component te realiseren volgens de afgestemde specificaties.
title: "{component-name} - Code schrijven"
labels:
  - development
---

### Criteria

Code schrijven om de component te realiseren volgens de afgestemde specificaties.

### Taken

- [ ] Maak `@nl-design-system-candidate/{naam-van-component}-react` aan
    - [ ] Pas de rollup configuratie aan
    - [ ] Pas de `package.json` aan (`name`, `version`, `exports`, `files`)
    - [ ] Draai ten minste 1x `pnpm install` om het package op te nemen in de root `pnpm-lock.yaml`.
    - [ ] Schrijf unit tests met 100% code coverage, onder andere voor het valideren van de semantische structuur: 
        - [ ] Controleer of de juiste HTML elementen worden gebruikt
        - [ ] Valideer ARIA roles, states en properties
        - [ ] Test correcte nesting van elementen
- [ ] Maak `@nl-design-system-candidate/{naam-van-component}-css` aan 
    - [ ] Pas de Sass configuratie aan
    - [ ] Pas de `package.json` aan (`name`, `version`, `exports`, `files`)
    - [ ] Draai ten minste 1x `pnpm install` om het package op te nemen in de root `pnpm-lock.yaml`.
