---
name: Kernteam - 📝 Testcases voor gebruik vastgelegd
about: Er zijn voldoende testcases beschikbaar om een robuust component te maken die goed om kan gaan met diverse soorten data en gebruikersvoorkeuren
title: '{component-name} - 📝 Testcases voor gebruik vastgelegd'
labels:
  - 📝 Candidate Voorbereidingsfase
  - frontend
---

## 📝 Testcases voor gebruik vastgelegd

### Bepaal de testcases

Maak een Canvas en bedenk testcases die op dit component van toepassing zijn. Denk hierbij aan:

- testcases die nodig zijn voor veel, weinig en geen content
- testcases die nodig zijn voor verschillende schermafmetingen
- testcases die nodig zijn voor internationalisatie (vertaal plugins)
- testcases die nodig zijn voor forced-colors mode
- testcases die nodig zijn voor de component in combinatie met andere componenten, zoals met een icon, een tabel etc.
- testcases die nodig zijn voor voorspelbaar gebruik wanneer de css in een andere omgeving word ingezet. Denk hierbij bijvoorbeeld aan `<input type="button" class="nl-button">` die ook voorspelbaar moet werken in forced-colors mode en met verschillende browser states.

- testcases die nodig zijn voor combinaties van de verschillende APIs

### Bespreek de testcases met het kernteam

Zorg voor een meeting waar tenminste een een developer, een designer, een toegankelijkheidsspecialist en de Design System Lead uit het kernteam bij aanwezig zijn. Loop met elkaar door de testcases en bepaal of er nog tests missen of testcases net anders moeten worden opgesteld.

Bepaal ook welke testcases goed werken in Storybook, welke in unit-tests en welke alleen als documentatie in todo unit-tests.

🚩 Checkpoint
📝 Testcases voor gebruik
