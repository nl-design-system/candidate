---
name: Kernteam - 🚀 Gebruikt in de Themes repository
about: Teams kunnen makkelijk de Candidate component vinden in de themes repository en instellen op hun thema
title: '{component-name} - 🚀 Gebruikt in de Themes repository'
labels:
  - 🚀 Candidate Publicatiefase
---

## 🚀 Gebruikt in de Themes repository

In voorgaande stappen is al opgenomen dat er Stories worden gemaakt. Deze stap is om te zorgen dat we geen Stories zijn vergeten.

- [ ] Alle acceptatiecriteria met een visueel element zijn testbaar met Stories
- [ ] Alle acceptatiecriteria die visueel gecontroleerd moeten worden, zijn onderdeel van testautomatisering.
- [ ] Sommige acceptatiecriteria kunnen het best visueel gecontroleerd worden, bijvoorbeeld: is alle tekst zichtbaar, is de uitlijning van onderdelen zoals gewenst, wordt woordafbreking goed toegepast, is de icon de goede kleur?
- [ ] We gebruiken Chromatic voor visuele regressietests, waarbij die persoon de screenshot van de situatie kan goedkeuren.

Hoe kun je dit bijvoorbeeld doen?

- in Storybook maak je voldoende stories om de visuele eigenschappen te kunnen controleren
- de stories moeten gemaakt worden op een manier dat niet eerst interactie met de component nodig is. Bijvoorbeeld: de hover state moet zonder interactie zichtbaar zijn.
- elke story beschrijft het gewenste resultaat, die ook in de toekomst gebruikt kan worden om te beoordelen of het resultaat voldoende is
- Chromatic wordt gebruikt om van elke story een screenshot te maken
- een persoon beoordeelt de screenshots aan de hand van de beschrijving, en keurt de screenshots goed of af
- alle goedkeurde screenshots zijn de nieuwe baseline
- als een voorgestelde wijziging aan de component de visuele weergave aanpast, dan wijzigt de screenshot ten opzichte van de baseline, en dan moet een persoon de nieuwe screenshot beoordelen
- alleen als de visuele wijziging akkoord is, mag de wijziging doorgevoerd worden in de component

Alle design tokens van de component zijn zichtbaar in de Stories van de themes Storybook
Organisaties die een huisstijl instellen als thema en beschikbaar maken in de themes Storybook willen dat hun ingestelde beslissingen worden gevalideerd in Chromatic. Daarvoor hebben we de theme’s storybook.
Alle varianten en states van de component zijn dus opgenomen als stories die kunnen worden gebruikt op de thema compilatie pagina’s van de verschillende organisaties.

Hoe kun je dit bijvoorbeeld doen?

- Beschikbaar in de NL Design System themes Storybook onder de sectie “Components” met het start-thema en het voorbeeld-thema

Checkpoint
🚀 Themes repository

### Achterliggende doelen

- 🆕 Testautomatisering voor de volledige Design Tokens API
- 🆕 Zorgen dat alle front-end states in één oogopslag te beoordelen zijn, zonder interactie zoals "hover"
- 🆕 CSS testen die niet goed te controleren is via unit test
- 🆕 Situaties uit WCAG succescriteria testen op regressies, zoals
  - text zoom: simuleren met grotere font size op parent element
  - kleine viewport: simuleren met 320x240 iframe
- 🆕 Situaties testen met forced-colors kleurenpalet
