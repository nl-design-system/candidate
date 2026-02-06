---
name: Kernteam - 📝 Keywords en aliassen bepaald

about: Keywords en aliassen voor de component zijn bepaald zodat deze makkelijk kan worden gevonden
title: '{component-name} - 📝 Keywords en aliassen bepaald
'
labels:
  - 📝 Candidate Voorbereidingsfase
  - designer relations
  - developer relations
---

## 📝 Keywords en aliassen bepaald

- [ ] Maak de packages beschikbaar voor de nieuwe Candidate component
- [ ] Verzamel alternatieve namen voor de component
- [ ] Voeg de meest gebruikte alternatieven toe aan de component pagina in de candidate repository
- [ ] Voeg de aliassen toe aan de keywords op de component pagina in de documentatie repository
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Maak de packages beschikbaar voor de nieuwe Candidate component

Het is vanaf dit moment handig dat er een omgeving is waarin de component en al zijn aanhangsels kan worden ontwikkeld. Maak dus in [de Candidate repository](https://github.com/nl-design-system/candidate) de packages alvast aan voor

- de css component
- de react component
- de component docs
- de tokens

Maak daarnaast alvast de mapjes en bestanden aan voor deze component in:

- storybook-test
- storybook-non-conforming
- storybook

#### Hoe doe je dit bijvoorbeeld

Er zijn hiervoor experimentele scripts beschikbaar in de Candidate repository: `scripts/create-package.sh` en `scripts/create-stories.sh`. Deze kun je in je terminal draaien, waarbij je kunt aangeven om welke component het gaat etc. Op basis hiervan worden template bestanden en mapjes aangemaakt die je in de volgende stappen kunt vullen.

```sh
scripts/create-package.sh css tosti-kaas "A toast component."
scripts/create-package.sh react tosti-kaas "A toast component."
scripts/create-package.sh docs tosti-kaas "A toast component."
scripts/create-package.sh tokens tosti-kaas "A toast component."
scripts/create-stories.sh storybook tosti-kaas
scripts/create-stories.sh storybook-non-conforming tosti-kaas
scripts/create-stories.sh storybook-test tosti-kaas
```

### Verzamel alternatieve namen voor de component

Diverse design systems, Developers en Designers gebruiken verschillende woorden om hetzelfde component mee aan te duiden. Tijdens de Help Wanted fase is de naam van de component bepaald, maar door keywords en aliassen toe te voegen kan de component ook op de namen die we zelf niet gebruiken gevonden worden. Voor de componenten is er op Slack een uitgebreide lijst 'Component Keywords & Aliassen' waar we deze in eerste instantie in verzamelen.

#### Hoe kun je dit bijvoorbeeld doen?

- Maak een Canvas aan
- Maak een nieuwe Mentimeter wordcloud aan voor de component.
- Haal input op bij Designers en Developers uit de community door te vragen hoe zij de component ook wel noemen.
- Voeg de uitkomsten aan de canvas toe aan de kolom met 'Keywords' en noteer achter elk woord hoevaak deze werd genoemd.
- Selecteer de 0 tot 5 meest genoemde keywords en voeg deze toe aan de kolom met 'Aliassen'. Nummer de lijst op volgorde van meest naar minst vaak genoemd.
- Zijn er duidelijk veelgebruikte alternatieven die ook als je een zoekmachine (google) gebruikt tot resultaten leiden? Ga dan verder met het toevoegen van de Aliassen.

### Voeg de meest gebruikte alternatieven toe aan de component pagina in de candidate repository

- Voeg de aliassen toe aan het bestand aliases.md in de component docs package in de Candidate repository in GitHub. Gebruik hiervoor de volgende opzet:

```md
<!-- @license CC0-1.0 -->

# Aliassen

Ook bekend als: {alias-1}, {alias-2} en {alias-3}.
```

Maak een PR aan gebruik hierbij de volgende opzet:

- **Commit Message**: `docs: candidate aliases for {naam-component}`
- **Branch**: `docs/candidate-aliases-for-{naam-component}`

Geef een Developer uit het kernteam via Slack een seintje dat deze klaar staat.

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

🚩 Checkpoint
📝 Zoekwoorden
