---
name: Kernteam - 📝 Keywords en aliassen bepaald
about: Keywords en aliassen voor de component zijn bepaald zodat deze makkelijk kan worden gevonden
title: '{component-name} - 📝 Keywords en aliassen bepaald'
labels:
  - 📝 Candidate Voorbereidingsfase
  - designer relations
  - developer relations
type: Task
---

## 📝 Keywords en aliassen bepaald

- [ ] Maak de packages beschikbaar voor de nieuwe Candidate component
- [ ] Verzamel alternatieve namen voor de component
- [ ] Stem af met Design System Lead
- [ ] Voeg de meest gebruikte alternatieven toe aan de component pagina in de candidate repository
- [ ] Voeg de aliassen toe aan de keywords op de component pagina in de documentatie repository
- [ ] Voeg de gerelateerde componenten toe aan de relaties JSON in de documentatie repository
- [ ] Voeg de gerelateerde componenten toe aan de GitHub Discussion
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Maak de packages beschikbaar voor de nieuwe Candidate component

Het is vanaf dit moment handig dat er een omgeving is waarin de component en al zijn aanhangsels kan worden ontwikkeld. Maak dus in [de Candidate repository](https://github.com/nl-design-system/candidate) de packages alvast aan voor:

- de css component
- de react component
- de component docs
- de tokens

Maak daarnaast alvast de mapjes en bestanden aan voor deze component in:

- storybook-test
- storybook-non-conforming
- storybook

#### Hoe doe je dit bijvoorbeeld

Er zijn hiervoor scripts beschikbaar in de Candidate repository: `scripts/create-package.sh` en `scripts/create-stories.sh`. Deze kun je in je terminal draaien, waarbij je kunt aangeven om welke component het gaat etc. Op basis hiervan worden template bestanden en mapjes aangemaakt die je in de volgende stappen kunt vullen.

```shell
scripts/create-package.sh css button "Biedt de mogelijkheid om een actie uit te voeren." "Provides the ability to perform an action."
scripts/create-package.sh react button "Biedt de mogelijkheid om een actie uit te voeren." "Provides the ability to perform an action."
scripts/create-package.sh docs button "Biedt de mogelijkheid om een actie uit te voeren." "Provides the ability to perform an action."
scripts/create-package.sh tokens button "Biedt de mogelijkheid om een actie uit te voeren." "Provides the ability to perform an action."
scripts/create-stories.sh storybook button
scripts/create-stories.sh storybook-non-conforming button
scripts/create-stories.sh storybook-test button
```

Maak een PR aan gebruik hierbij de volgende opzet:

- **Commit Message**: `docs: candidate packages and stories for {naam-component}`
- **Branch**: `docs/candidate-packages-and-stories-for-{naam-component}`

### Verzamel alternatieve namen voor de component

Diverse design systems, Developers en Designers gebruiken verschillende woorden om hetzelfde component mee aan te duiden. Tijdens de Help Wanted fase is de naam van de component bepaald, maar door keywords en aliassen toe te voegen kan de component ook op de namen die we zelf niet gebruiken gevonden worden. Voor de componenten is er op Slack een uitgebreide lijst 'Component Keywords & Aliassen' waar we deze in eerste instantie in verzamelen. Daarnaast kijken we ook naar de gerelateerde componenten die we in dit onderzoek tegenkomen, dit zijn componenten waar gebruikers mogelijk naar op zoek zijn wanneer ze bij deze component terechtkomen.

#### Hoe kun je dit bijvoorbeeld doen?

Verzamel input:

- Verzamel de huidige keywords voor deze component. Deze vind je in het Slack Canvas "[Component Keywords & Aliassen](https://codefornl.slack.com/docs/T68FXPFQV/F07BH78SAFP)" of in de keywords van de detail pagina van deze component in de documentatie repository. Noteer de resultaten in een comment in de issue.
- Haal input op bij Designers en Developers uit de community door te vragen hoe zij de component ook wel noemen. Bijvoorbeeld middels een Mentimeter WordCloud quiz tijdens een Open Hour. Noteer de resultaten in een comment in de issue.
- Verzamel welke keywords en andere gebruikte woorden voorkomen in het vakgebied. Je vind relevante bronnen in het Slack Canvas "[Inspiratie- en referentiebronnen voor componenten](https://codefornl.slack.com/docs/T68FXPFQV/F0AEQ1Q0WBS)". Noteer de resultaten in een comment in de issue.
- Verzamel welke componenten de community en andere relevante bronnen noemen wanneer ze het over deze component hebben, bijvoorbeeld wanneer een gebruiker eigenlijk een Alert Dialog zoekt maar op een Modal Dialog terechtkomt. Noteer de resultaten in een comment in de issue.

Maak een voorstel in één comment:

- Combineer de resultaten in en tel op hoevaak ze voorkomen.
- Selecteer de 0 tot 5 meest genoemde keywords en voeg deze toe aan de kolom met 'Aliassen'. Nummer de lijst op volgorde van meest naar minst vaak genoemd.
- Zijn er duidelijk veelgebruikte keywords die ook als je een zoekmachine (Google) gebruikt tot resultaten leiden? Neem deze ook op in Aliassen.
- Maak een voorstel van gerelateerde componenten.
- Stem met Design System Lead af.

Verwerk de uitkomsten:

- Voeg de uitkomsten aan de canvas toe aan de kolom met 'Keywords' en noteer achter elk woord hoevaak deze werd genoemd.
- Voeg de uitkomsten aan de canvas toe aan de kolom met 'Aliassen' genummerd van meest naar minst vaak genoemd.

### Voeg de meest gebruikte alternatieven toe aan de component pagina in de candidate repository

- Voeg de aliassen toe aan het bestand `aliases.md` in de component docs package in de Candidate repository in GitHub. Gebruik hiervoor de volgende opzet:

```md
<!-- @license CC0-1.0 -->

# Aliassen

Ook bekend als: {alias-1}, {alias-2} en {alias-3}.
```

Maak een PR aan gebruik hierbij de volgende opzet:

- **Commit Message**: `docs: candidate aliases for {naam-component}`
- **Branch**: `docs/candidate-aliases-for-{naam-component}`

### Voeg de aliassen toe aan de keywords op de component pagina in de documentatie repository

Dat kan in de metadata bovenin het bestand.

Zoals we bijvoorbeeld voor button hebben gedaan in `docs/componenten/button/index.mdx`:

```md
keywords:

- actie
- action
- action button
- activate
- aria-expanded
- aria-haspopup
- aria-pressed
- bezig
- busy
- button
- buttons
- call to action
- click
- cta
- disabled
- icon button
- indrukken
- klikken
- knop
- knoppen
- press
- pressed
- send
- submit
- toggle
- toggle button
- uitgeschakeld
- versturen
- verzenden
```

- **Commit Message**: `docs: candidate aliases as keywords for {naam-component}`
- **Branch**: `docs/candidate-aliases-as-keywords-for-{naam-component}`

### Voeg de gerelateerde componenten toe aan de GitHub Discussion

In de GitHub Discussion, onder het kopje 'Gerelateerde componenten', voeg de gerelateerde componenten toe.

Zoals we bijvoorbeeld hebben gedaan voor Unordered List:

```md
## Gerelateerde componenten

[Ordered List](https://github.com/orgs/nl-design-system/discussions/230), [Rich Text Content](https://github.com/orgs/nl-design-system/discussions/289), [Link List](https://github.com/orgs/nl-design-system/discussions/266), [Task List](https://github.com/orgs/nl-design-system/discussions/295)
```

### Voeg de gerelateerde componenten toe aan de relaties JSON in de documentatie repository

Dat kan in de `relations.json`.

Zoals we bijvoorbeeld hebben gedaan voor Unordered List:

```json
  ...

  "Unordered List": ["Ordered List", "Rich Text Content", "Link List", "Task List"],

  ...
```

- **Commit Message**: `docs: candidate related components for {naam-component}`
- **Branch**: `docs/candidate-related-components-for-{naam-component}`

🚩 Checkpoint
📝 Zoekwoorden
