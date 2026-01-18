---
name: Kernteam - 🛠️ Figma component
about: Figma component is ontwikkeld, en logische common componenten zijn gebruikt in het start-thema
title: '{component-name} - 🛠️ Figma component'
labels:
  - 🛠️ Candidate Ontwikkelfase
  - Figma
---

## 🛠️ Figma component

- [ ] Maak de Figma component beschikbaar
- [ ] Zorg dat er coverage is van alle features
- [ ] Laat de component reviewen
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Maak de Figma component beschikbaar

- Bouw de component op in de NL Design System - Bibliotheek (met Start thema) NL Design System - Schetsboek zoals deze beschikbaar is in de Candidate Storybook.
- Geef het frame de naam nl-{naam-van-de-component}.
- Maak een aparte tokenset aan voor de Candidate tokens. Bestaan er al Community of Todo tokens? Geef de tokenset van de Candidate component dan de naam ‘nl’ en plaats deze boven de reeds bestaande tokenset.
- Maak de tokens aan in Tokens Studio zoals deze beschikbaar zijn in de tokens.json van de component in GitHub. Voorzie de tokens van designkeuzes voor het Start thema. Als een design tokens specifiek voor Code of Design noteer je dit in de description van de token ( [code-only] of [design-only] ).
- Bekijk de json weergave binnen Tokens Studio en zorg ervoor dat de tokens juist geordend zijn.
- Pas de tokens toe op de component.
- Maak de benodigde properties zoals deze ook beschikbaar zijn in het 'Controls block' in de Candidate Storybook. Denk aan: varianten, states, types en responsive gedrag.
- Pas auto-layout toe op de gehele frame (sizing is 'Hug', spacing is '48').
- Pas de common token basis.color.default.bg-document-color toe op het gehele frame.
- Pas de benodigde prototyping interacties toe.
- Maak het frame voor design tokens aan en geef het de naam Tokens - {naam-van-de-component} .
- Gebruik de ‘Design Token Documentation Item’ component om de design tokens te documenteren.
- Selecteer per regel welk token 'type' het betreft.
- Waren er [code-only] of [design-only] design tokens? Zet dan ‘Show Description’ aan.
- Maak het frame voor documentatie aan en geef het de naam Documentatie - {naam-van-de-component}.
- Voeg nuttige documentatie toe in het documentatie frame. Denk aan: varianten, states, types en responsive gedrag.
- Voeg aan de component een link toe naar de bijbehorende pagina op de documentatiewebsite.
- Voeg de Estafettemodel Badge toe en geef deze het level 'Candidate'.
- Push de tokens vanuit Tokens Studio naar GitHub. Gebruik hierbij de volgende opzet:

**Commit Message**: `style: candidate tokens for {naam-van-de-component}`
**Branch**: `style/candidate-tokens-for-{naam-van-de-component}`

- Maak de PR aan en geef een Developer uit het kernteam via Slack een seintje dat deze klaar staat.

### Zorg dat er coverage is van alle features

- Voeg een sectie toe met voorbeelden van het interactive gedrag. Gebruik hiervoor als heading 'States'.
- Voeg een sectie toe met voorbeelden van het responsive gedrag. Gebruik hiervoor als heading 'Responsive gedrag'.
- Voeg secties met voorbeelden toe voor features die beschikbaar zijn in het 'Controls block' in de Candidate Storybook. Gebruik hiervoor een heading die aansluit bij de feature.
- Voeg overige documentatie of voorbeelden toe die voor Designers relevant zijn.

### Laat de component reviewen

Nu komt alles wat we in de voorbereidingsfase hebben bedacht samen. Controleer samen met de Design System Lead of alle testcases beschikbaar zijn en de component klaar staat voor publicatie.

🚩 Checkpoint
🛠️ Figma component
