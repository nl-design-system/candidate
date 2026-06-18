---
name: Kernteam - 📝 Anatomie bepaald
about: Er is besloten uit welke onderdelen de component bestaat en welke naam deze onderdelen in documentatie, design en code krijgen.
title: '{component-name} - 📝 Anatomie bepaald'
labels:
  - 📝 Candidate Voorbereidingsfase
  - a11y specialist
  - Figma
  - frontend
type: Task
---

## 📝 Anatomie bepaald

- [ ] Analyseer welke onderdelen de component uit kan bestaan
- [ ] Maak een voorstel voor de anatomie
- [ ] Bepaal of de anatomie kan worden meegenomen in de Candidate implementatie
- [ ] Stem af met Design System Lead
- [ ] Documenteer besluit in de GitHub Discussion
- [ ] Documenteer besluit in de Candidate repository
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Bepaal uit welke onderdelen de component kan bestaan

Bepaal op basis van de "Component gebruikt", "WCAG-input", "Issues bekend" en "Versimpeld of opgesplitst" fases uit welke onderdelen de component kan bestaan.

### Maak een voorstel voor de anatomie

Is er anatomie nodig? Leg die dan in de volgende stappen vast en maak een schets om deze toe te lichten. Dat mag op papier, als foto, in Figma of in code.

Het doel is dat we als kernteam begrijpen wat er nodig is om de component te bouwen. Daarnaast leggen we de gemaakte keuzes vast voor beheer en toekomstige herimplementaties. Mocht de component ooit opnieuw gebouwd moeten worden in een andere techniek, dan kunnen dezelfde afwegingen worden hergebruikt en hoeven ze niet opnieuw gemaakt te worden.

#### Welke richtlijnen volg je bij het besluiten van de anatomie?

- De property naam is in het Engels.
- De omschrijving is in het Nederlands.
- Zorg dat de naamgeving consistent is met de naamgeving in de rest van het Design System, in elk geval op Candidate en Hall of Fame niveau.
- Zorg dat de naamgeving klopt met de Naming convention, zoals het gebruik van namen uit webstandaarden waar mogelijk.
- Zorg dat de naamgeving zo veel mogelijk platform onafhankelijk is. Bijvoorbeeld: Text wanneer de inhoud van de component een 'string' is. Geen `children` of `slot`, maar `Content`.
- Zorg dat elk onderdeel deze opbouw volgt: `{nummering}. {property naam}: {omschrijving}`.

#### Visuele ondersteuning maken

Maak een schets van de anatomie op een manier die voor jou het best werkt. Werk je graag in Figma? Dan kan je de volgende stappen volgen:

> **Stappen voor Figma**
>
> - Open de ['Documentatie website afbeeldingen' Figma file](https://www.figma.com/design/0Y9Tbb373u6QGxGT6mqUnm/NL-Design-System---Doc-website---Afbeeldingen?node-id=3-23&t=RFNr3Ko3v4JUtIvr-1).
> - Dupliceer een reeds bestaande page.
> - Geef de page de naam van de component.
> - Geef het frame de naam anatomy.
> - Gebruik de 'Annotation number' en 'Annotation line' om onderdelen een te wijzen en nummeren. Probeer 48 spacing aan te houden tussen 'Annotation number' en de gehele component.

### Bepaal of de anatomie kan worden meegenomen in de Candidate implementatie

Zorg voor een overleg waar tenminste een designer, een developer, een toegankelijkheidsspecialist en de Design System Lead uit het kernteam bij aanwezig zijn. Besluit op basis van het voorstel of deze onderdelen inderdaad in de component moeten zitten, of er onderdelen missen en of iedereen het met de naamgeving eens is.

Tip: Zorg dat iedereen genoeg informatie heeft om niet alleen hun eigen expertise te gebruiken, maar ook alle relevante input die uit de community is verzameld in de eerdere stappen voor Candidate.

### Documenteer besluit in de GitHub Discussion

**Let op!**  
Anatomie is niet altijd nodig. Sommige componenten bestaan slechts uit 1 onderdeel. Controleer daarom eerst samen of de component daadwerkelijk uit meerdere onderdelen bestaat voordat je verder ingaat op de anatomie.

Voeg de schets toe aan de GitHub Discussion van de component, samen met de beschreven anatomie uit de voorgaande stappen.

**Tip!**
Heb je de schets gemaakt in een tool waarvan je een bewerkbare URL kunt delen? Voeg die link dan ook toe bij de afbeelding, zodat de schets later eenvoudig kan worden aangepast.

```md
## Candidate voorbereidingsfase: Anatomie bepaald

![alt-tekst](url)

De component bestaat uit:

1. {onderdeel-1}: {uitleg onderdeel}.
2. {onderdeel-2}: {uitleg onderdeel}.
3. etcetera

<!--
Indien van toepassing...

---

Deze schets is gemaakt in: [Figma](url)
-->
```

Is er geen anatomie nodig? Documenteer dat dan ook in de GitHub Discussion.

```md
## Candidate voorbereidingsfase: Anatomie bepaald

Dit component heeft geen anatomie nodig omdat deze niet uit losse onderdelen bestaat.
```

### Documenteer besluit in de Candidate repository

Voeg de beschreven anatomie toe aan de `anatomy.md` van de component in de Candidate repository.

```md
# Anatomie

1. {onderdeel-1}: {uitleg onderdeel}.
2. {onderdeel-2}: {uitleg onderdeel}.
3. etcetera
```

Je mag de afbeelding ook toevoegen in de zelfde folder als `anatomy.md`, maar alleen als deze een svg-bestand is.

Zijn er geen varianten? Documenteer dat dan ook in acceptatiecriteria.

```md
# Anatomie

Dit component heeft geen anatomie nodig omdat deze niet uit losse onderdelen bestaat.
```

🚩 Checkpoint
📝 Anatomie: Done
