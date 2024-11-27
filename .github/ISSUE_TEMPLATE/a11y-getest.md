---
name: A11y getest
about: Implementatie en documentatie is op toegankelijkheid getest door leden van het kernteam.
title: '{component-name} - Anatomie vastleggen'
labels:
  - development
  - documentation
  - figma
---

### Criteria

Implementatie en documentatie is op toegankelijkheid getest door leden van het kernteam.

### Hoe te testen

Ga naar de te reviewen component in Storybook

- Bij de component, kies in de zijbalk de view Default
- Klik op het open nieuwe tab icon rechtsboven in de taakbalk.
- Je ziet nu alleen de component met de bijbehorende CSS.

### Taken

Algemene toegankelijkheid

- [ ] Content is duidelijk en begrijpelijk WCAG 2.4.6 Koppen en labels Oordeel:
- [ ] HTML structuur is correct geïmplementeerd WCAG 4.1.1 Parsen Oordeel:

Visueel ontwerp

- [ ] Tekstkleur heeft voldoende contrast met achtergrond WCAG 1.4.3 Contrast (minimum) Oordeel:
- [ ] Niet-tekstuele content heeft voldoende contrast WCAG 1.4.11 Contrast van niet-tekstuele content Oordeel:

Zoom en herschaling

- [ ] Content blijft leesbaar bij 200% zoom WCAG 1.4.4 Herschalen van tekst Oordeel:
- [ ] Content blijft intact bij aangepaste tekstafstand WCAG 1.4.12 Tekstafstand Oordeel:

Screenreader toegankelijkheid

- [ ] Niet-tekstuele content heeft tekstalternatief WCAG 1.1.1 Niet-tekstuele content Oordeel:
- [ ] Content heeft logische semantische structuur WCAG 1.3.1 Info en relaties Oordeel:
- [ ] Leesvolgorde is logisch en begrijpelijk WCAG 1.3.2 Betekenisvolle volgorde Oordeel:

[De nieuwste versie van het "A11y getest" stappenplan](https://github.com/nl-design-system/candidate/blob/main/.github/ISSUE_TEMPLATE/a11y-getest.md) vind je in de Git repository. Controleer voor het afronden van dit GitHub Issue of de stappen hier boven volledig zijn.
