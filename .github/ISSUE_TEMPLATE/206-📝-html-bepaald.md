---
name: Kernteam - 📝 HTML bepaald
about: Voor alle onderdelen uit de anatomie is besloten welke HTML hier goed bij past.
title: '{component-name} - 📝 HTML bepaald'
labels:
  - 📝 Candidate Voorbereidingsfase
---

## 📝 HTML bepaald

- [ ] Analyseer welke HTML het best gebruikt kan worden voor de component
- [ ] Analyseer welke HTML ook ondersteund moet worden voor de component
- [ ] Bepaal welke semantiek kan worden meegenomen in de Candidate implementatie
- [ ] Bepaal of er een HTML implementatie voor de component van toepassing is
- [ ] Bepaal welke testcases voor alternatieve semantiek beschikbaar moeten worden gemaakt. Zoals bijvoorbeeld `<input type="button" class="nl-button">`
- [ ] Leg de acceptatiecriteria voor semantiek vast in de docs van de Candidate repository
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Analyseer welke HTML het best gebruikt kan worden voor de component

Bekijk welke HTML op basis van de Acceptatiecriteria voor toegankelijkheid het best bij alle onderdelen van de Anatomie past.

- Analyseer welke HTML elementen het beste zijn voor dit component.
- Analyseer welke HTML attributen het beste zijn voor dit component.
- Zorg ook dat duidelijk is wat de relevante ARIA attributen zouden kunnen zijn en welke documentatie of Stories daar mogelijk ondersteunend bij nodig zijn.
- Onderzoek welke microdata waardevol is om toe te voegen aan de component zodat zoekmachines enzo meer betere informatie hebben.
- documenteer welke combinaties van attributen niet gebruikt moeten worden in verband met toegankelijkheid. Bijvoorbeeld niet `<Button htmlDisabled disabled>` of `aria-label="..." aria-labelledby="..."` Er moet er 1 gekozen worden, anders werkt het niet goed voor de eindgebruikers.

### Analyseer welke HTML ook ondersteund moet worden voor de component

Naast de ideale HTML, moet ook gedocumenteerd worden welk HTML in de praktijk wel eens gebruikt wordt. Bijvoorbeeld: in plaats van een button element wordt de button ook wel eens gemaakt met `input[type="button]`, `div` en `a`.

Neem in de acceptatiecriteria op voor welke alternatieve situaties het visueel ontwerp van de CSS moet werken, en op welke manier forced colors mode ondersteund moet zijn.

### Bepaal welke semantiek kan worden meegenomen in de Candidate implementatie

Zorg voor een meeting waar tenminste een een developer, een toegankelijkheidsspecialist en de Design System Lead uit het kernteam bij aanwezig zijn. Besluit op basis van de analyse welke HTML elementen en attributen het best bij de anatomie van de component passen.

- Bepaal als kernteam welke HTML elementen en attributen gebruikt worden voor het candidate component wanneer er meerdere valide opties zijn.
- Onderzoek welke microdata waardevol is om toe te voegen aan de component zodat zoekmachines enzo meer betere informatie hebben.
- Stem de acceptatiecriteria af met de Design System Lead.

Tip: Zorg dat iedereen genoeg informatie heeft om niet alleen hun eigen expertise te gebruiken, maar ook alle relevante input die uit de community is verzameld in de eerdere stappen voor Candidate.

### Leg de acceptatiecriteria voor semantiek vast in de docs van de Candidate repository

- Documenteer de acceptatiecriteria voor het maken van de component met Markdown in de docs van de Candidate repository.

🚩 Checkpoint
📝 Semantiek bepaald
