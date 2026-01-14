---
name: Kernteam - 🧪 Design tokens getest
about: We hebben getest of bestaande thema’s voor Community implementaties makkelijk over kunnen op de Candidate component
title: '{component-name} - 🧪 Design tokens getest'
labels:
  - 🧪 Candidate Testfase
---

## 🧪 Design tokens getest

We hebben getest of bestaande thema’s voor Community implementaties makkelijk over kunnen op de Candidate component.

- [ ] Maak een lijst van de thema’s die de component hebben geconfigureerd
- [ ] Vertaal de Community Design Tokens naar de Candidate Design Tokens
- [ ] Test of de tokens gelijk goed werken en welke een handmatige migratie nodig hebben

### Maak een lijst van de thema’s die de component hebben geconfigureerd

Bijvoorbeeld door de StoryID die voor de betreffende component als default Story is gebruikt op te zoeken [in GitHub](https://github.com/search?q=repo%3Anl-design-system%2Fthemes%20%22react-utrecht-paragraph--default%22&type=code).

Selecteer in samenspraak met de Product Manager welke thema’s getest worden voor dit component

### Vertaal de Community Design Tokens naar de Candidate Design Tokens

Bijvoorbeeld door naar de paragraph tokens toe te gaan [in de tokens JSON](https://github.com/nl-design-system/themes/blob/a453207fc78e83323d8f8d0eacce236af7bc6d1a/proprietary/haarlemmermeer-design-tokens/src/component/utrecht/paragraph.tokens.json).

Hier kun je zien dat `utrecht-paragraph-font-size`, `utrecht-paragraph-line-height`, `utrecht-paragraph-margin-block-end` en `utrecht-paragraph-lead-font-size` zijn gezet.

In [de candidate tokens](https://github.com/nl-design-system/candidate/blob/main/packages/tokens/paragraph-tokens/tokens.json) zien we dat `nl-paragraph-font-size` `nl-paragraph-line-height` `nl-paragraph-margin-block-end` én `nl-paragraph-lead-font-size` tokens beschikbaar zijn. Haarlemmermeer kan dus 1-op-1 de instellingen voor de Community component gebruiken in de Candidate component

Als de configuratie voor de Candidate component minder opties heeft dan de Community component en de opties worden voor een thema wel gebruikt, maken we hiervan een notitie.

### Test of de tokens gelijk goed werken en welke een handmatige migratie nodig hebben

Aan het eind kunnen we de notities voor alle bekeken thema’s bespreken en een van deze opties kiezen per token:

- Opnemen in de Design Tokens van de component.
- Opnemen als extra Story die laat zien dat je op een andere manier hetzelfde resultaat kan bereiken met de Candidate component.
- Opnemen in de GitHub Discussion van de component.

Hoe kun je dit bijvoorbeeld doen?

1. Voeg de design tokens voor candidate toe, op dezelfde manier als de organisatie de tokens nu beheert.
2. Voeg de Candidate component toe aan de config van de organisatie in de thema repository
3. Kijk in Storybook of de Candidate implementatie er hetzelfde uitziet als de Community implementatie
4. Maak een pull-request toe voor elk thema dat je hebt gechecked en vraag de maintainer van het thema om een review.

🚩 Checkpoint
🧪 Design Tokens getest
