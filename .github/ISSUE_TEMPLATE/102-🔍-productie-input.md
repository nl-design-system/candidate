---
name: Kernteam - 🔍 Productie input
about: Is de Community component implementatie goed bruikbaar in diverse projecten?
title: '{component-name} - 🔍 Productie input'
labels:
  - 🔍 Candidate Selectiefase
---

## 🔍 Productie input

- [ ] Kijk of de component implementatie (1 of meerdere) goed bruikbaar is in diverse projecten
- [ ] Maak screenshots van de component in gebruik
- [ ] Documenteer de bevindingen in de GitHub Discussion
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Onderzoek of een component goed bruikbaar is voor diverse projecten

Dit kan 1 implementatie zijn die door meerdere projecten hergebruikt wordt in prototypes, projecten die nog in ontwikkeling zijn en tenminste 1 in productie. Of het kan zijn dat de component in meerdere community design systems is ontwikkeld. Waarbij de verschillende implementaties heel veel gemeen hebben en gebruikt zijn in prototypes, projecten die nog in ontwikkeling zijn tenminste 1 in productie.

#### Hoe kun je dit bijvoorbeeld doen?

- Door de Community in Slack, tijdens Open Hours en Open Dagen te vragen of dit component door iemand wordt ingezet en of ze er blij mee zijn.
- Door de developer- en design-relations kernteamleden te vragen over welke componenten veel vragen worden gesteld. Bijvoorbeeld door Lux over de design tokens van een Utrecht component, of door een leverancier die een Amsterdam grid component probeert in te zetten.
- Door in de Community Sprints te kijken of de component wordt gebruikt in templates.

### Maak screenshots van de component in het wild

1. Maak screenshots van de component zoals je tegenkomt. Zodat we weten hoe de component in context wordt gebruikt.
2. Stop deze screenshots in het verzamel Canvas. Deze screenshots vormen straks de basis voor de stories die we toe willen voegen als test van de component.

### Documenteer de bevindingen in de GitHub Discussion

Is de component succesvol ingezet en weten we ervan? Zet dan de volgende tekst in de GitHub Discussion van de component

```md
## Candidate selectieproces: Is de component al ingezet in meerdere projecten?

Omdat de {naam-component} van {naam-organisatie} geschikt is voor verschillende huisstijlen heeft het kernteam ook gekeken of hij al gebruikt wordt in productie, prototypes en templates.
Deze informatie is nodig om de component een stap verder te brengen in het Candidate proces.

We hebben hiervoor op Slack gekeken en in Open Hours gevraagd wie de component succesvol heeft ingezet en we zijn tot de volgende conclusie gekomen:

🎉 De component wordt onder andere gebruikt door:

- {naam-organisatie} gebruikt het in {url-project}
- {naam-organsiatie-2} gebruikt het in {url-project-2}
- ...
```

🚩 Checkpoint:
🔍 Productie input: in meerdere projecten + in productie

Is de component naar ons beste weten nog niet genoeg ingezet? Zet dan deze tekst neer:

```md
## Candidate selectieproces: Is de component al ingezet in meerdere projecten?

Omdat de {naam-component} van {naam-organisatie} geschikt is voor verschillende huisstijlen heeft het kernteam ook gekeken of hij al gebruikt wordt in productie, prototype en templates.
Deze informatie is nodig om de component een stap verder te brengen in het Candidate proces.

We hebben hiervoor op Slack gekeken en in Open Hours gevraagd wie de component succesvol heeft ingezet en we zijn tot de volgende conclusie gekomen:

⌛️ Nog niet! We hebben jullie hulp nodig om te ontdekken waar de component allemaal wordt gebruikt en wie er blij mee zijn.

📣 Help je mee? Laat ons in deze Discussion weten of je de component toevallig hebt gebruikt of in het wild bent tegengekomen.
```

🚩 Checkpoint:
🔍 Productie input: Nee

---

### Interne doelen

- Download size is schijnbaar acceptabel voor de community
- Browser support is schijnbaar acceptabel voor de community
- Bruikbaarheid in uiteenlopende systemen zijn schijnbaar voldoende voor de community.
- Tijdrovende onderzoeken naar browser hacks en work-arounds voor browser support zijn al gedan door de community
- Tijdrovende onderzoeken naar opbouw en volgorde van de CSS is al gedaan door de community. Bijvoorbeeld een logische volgorde van state combinaties die geen raar gedrag in productie vertoond.
- Component is gebruikt in responsive layouts en de community heeft input kunnen geven op het logische en wenselijke gedrag in die situaties is bekend
- Component is gebruikt in combinatie met andere componenten en het logische en wenselijke gedrag in die situaties is bekend
- Component is gebruikt in productie, zodat we weten dat er potentieel een audit is gedaan voor de volgende stap WCAG-input
- Het kernteam heeft een Git history om doorheen te gaan om te snappen waarom de community tot een bepaalde implementatie is gekomen
- We kunnen componenten prioriteit geven die het meest input uit de community hebben gehad en duidelijk verder zijn op bovenstaande punten dan anderen.
