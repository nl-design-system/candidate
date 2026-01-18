---
name: Kernteam - 📝 Anatomie bepaald
about: Er is besloten uit welke onderdelen de component bestaat en welke naam deze onderdelen in documentatie, design en code krijgen.
title: '{component-name} - 📝 Anatomie bepaald'
labels:
  - 📝 Candidate Voorbereidingsfase
  - a11y specialist
  - designer relations
  - developer relations
---

## 📝 Anatomie bepaald

- [ ] Analyseer welke onderdelen de component uit kan bestaan
- [ ] Maak een voorstel voor de anatomie
- [ ] Bepaal of de anatomie zo kan worden meegenomen in de Candidate implementatie
- [ ] Documenteer besluit in de Candidate repository
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Bepaal welke onderdelen de component uit kan bestaan

Bepaal op basis van de "Component gebruikt", "WCAG-input", "Issues bekend" en "Versimpeld of opgesplitst" fases uit welke onderdelen de component kan bestaan.

### Maak een voorstel voor de anatomie

Is er een anatomie nodig? Leg deze dan in de volgende stappen vast en maak een schets om deze uit te leggen. Dat mag op papier, met een foto. Het mag in Figma, het mag in code. Het doel is dat we als kernteam weten wat ons te doen staat als we de component maken. We leggen het vast om voor beheer als alles nóg een keer gemaakt zou moeten worden in een heel andere techniek het makkelijk te maken om dezelfde afwegingen niet nog een keer te hoeven maken

#### Welke richtlijnen volg je bij het besluiten van de anatomie?

- De property naam is in het Engels.
- De omschrijving is in het Nederlands.
- Zorg dat de naamgeving consistent is met de naamgeving in de rest van het Design System, in elk geval op Candidate en Hall of Fame niveau.
- Zorg dat de naamgeving klopt met de Naming convention, zoals het gebruik van namen uit webstandaarden waar mogelijk.
- Zorg dat de naamgeving zo veel mogelijk platform onafhankelijk is. Bijvoorbeeld: Text wanneer de inhoud van de component een 'string' is. Geen `children` of `slot`, maar `Content`.
- Zorg dat elk onderdeel deze opbouw volgt: `{nummering}. {property naam}: {omschrijving}`.

#### Visuele ondersteuning maken

Maak een schets van de anatomie op een manier die voor jou het best werkt. Dat kan zijn op papier met een foto, met [https://excalidraw.com](https://excalidraw.com) of bijvoorbeeld in Figma:

> [!INFO]
>
> **Stappen voor Figma**
>
> - Open de Documentatie website afbeeldingen Figma file.
> - Dupliceer een reeds bestaande page.
> - Geef de page de naam van de component.
> - Geef het frame de naam anatomy.
> - Plaats de component vanuit de 'NL Design System - Bibliotheek' op het frame.
> - Gebruik de 'Annotation number' en 'Annotation line' om onderdelen een te wijzen en nummeren. Probeer 48 spacing aan te houden tussen 'Annotation number' en de gehele component.
> - Exporteer het frame als plaatje en voeg deze toe aan de betreffende Backlog issue van de component.

### Bepaal of de anatomie zo kan worden meegenomen in de Candidate implementatie

Zorg voor een meeting waar tenminste een designer, een developer, een toegankelijkheidsspecialist en de Design System Lead uit het kernteam bij aanwezig zijn. Besluit op basis van het voorstel of deze onderdelen inderdaad in het component moeten zitten, of er onderdelen missen en of iedereen het met de naamgeving eens is.

Tip: Zorg dat iedereen genoeg informatie heeft om niet alleen hun eigen expertise te gebruiken, maar ook alle relevante input die uit de community is verzameld in de eerdere stappen voor Candidate.

### Leg de anatomie vast in het GitHub issue

Let op: Anatomie is niet altijd nodig. Soms bestaat de component maar uit 1 onderdeel. Check dus eerst met elkaar of de component écht uit meerdere onderdelen bestaat voordat je dieper op de anatomie ingaat.

Voeg de schets toe aan de Backlog issue van de component in combinatie met de beschreven Anatomie uit de vorige stappen.

Tip: heb je de schets gemaakt met een tool waarvan je de URL kan delen voor het geval deze ooit moet worden aangepast? Deel deze dan ook bij het plaatje.

```md
## Anatomie van {component-naam}

![alt-tekst](url)

De component bestaat uit:

1. {onderdeel-1} voor {uitleg onderdeel}
2. {onderdeel-2} voor {uitleg onderdeel}
3. ...

<!-- Niet verplicht -->
<!-- _deze schets is gemaakt in: [figma](url)_ -->
```

Is er geen anatomie nodig?

Voeg de volgende tekst toe

```md
## Anatomie van {component-naam}

Dit component heeft geen anatomie nodig omdat deze niet uit losse onderdelen bestaat.
```

🚩 Checkpoint
📝 Anatomie: Done
