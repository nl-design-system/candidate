---
name: Kernteam - 🚀 Gepubliceerd op npm
about: Teams kunnen makkelijk de Candidate component installeren en testen in een branch deployment, of zelfs in productie
title: '{component-name} - 🚀 Gepubliceerd op npm'
labels:
  - 🚀 Candidate Publicatiefase
---

## 🚀 Gepubliceerd op npm

Gebruik [de documentatie over het releasen van nieuwe candidate componenten](https://github.com/nl-design-system/candidate?tab=readme-ov-file#release-van-nieuwe-candidate-componenten)

- [ ] Maak een pull-request aan om de NPM package publiek te maken (verwijder private: true uit package.json van het package)
- [ ] Maak een changeset met major om de package te bumpen
- [ ] Vraag het kernteam om een review zodat die gemerged wordt
- [ ] `package.json#description` Nederlandstalig

🚩 Checkpoint
🚀 NPM

### Achterliggende doelen

- 🆕 Teams kunnen makkelijk de Candidate component installeren en testen in een branch deployment, of zelfs in productie
- 🆕 Wijzigingen in de Candidate component zijn goed te volgen voor afnemers, doordat semantic versioning gebruikt wordt
- 🆕 We komen achter problemen met de npm package vóórdat de component Hall of Fame wordt, zoals bugs in "exports" .
- 🆕 Het is makkelijk voor teams om te herkennen dat candidate componenten gebruikt zijn in hun code (door de @nl-design-system-candidate/ organisation prefix)
