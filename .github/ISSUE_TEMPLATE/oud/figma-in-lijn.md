---
name: Figma in lijn
about: De Figma-bibliotheek sluit aan bij de code-implementatie>
title: '{component-name} - Figma in lijn'
labels:
  - figma
---

### Criteria

De NL Design System Figma-bibliotheek sluit aan bij de code-implementatie van de component qua varianten, states, design tokens en naamgeving.

### Taken

- [ ] Bouw de component op in de NLDS - Voorbeeld - Bibliotheek volgens de specificaties in de Candidate Storybook of het API Alignment resultaat.
- [ ] Geef het frame de naam nl-{naam-van-de-component}.
- [ ] Maak de tokens aan in Token Studio volgens de tokens.json van de component in GitHub. Voeg designkeuzes toe voor het Voorbeeld thema.
- [ ] Controleer de JSON-weergave in Token Studio op juiste ordening.
- [ ] Plaats candidate tokens boven de bestaande community tokens.
- [ ] Pas de tokens toe op de component.
- [ ] Maak waar nodig varianten voor interactiegedrag met property 'States' (e.g. Hover, Active, Checked, etc.).
- [ ] Maak waar nodig varianten voor responsief gedrag met property 'Container' (Small, Large).
- [ ] Voeg indien nodig varianten toe die overeenkomen met het 'Controls block' in de Candidate Storybook of het API Alignment resultaat.
- [ ] Pas auto-layout toe op het hele frame (e.g. sizing: 'Hug', spacing: '48').
- [ ] Pas de common token utrecht.document.background-color toe op het hele frame.
- [ ] Voeg de benodigde prototyping-interacties toe.
- [ ] Gebruik de 'Documentation Tokens' functionaliteit van Token Studio om de tokenlijst op te bouwen.
- [ ] Selecteer voor elke regel het juiste token 'type'.
- [ ] Voeg de Estafettemodel Badge toe met level 'Candidate'.
- [ ] Push de tokens vanuit Token Studio naar GitHub met de volgende opzet:

Commit Message

```text
style: candidate tokens for {naam-van-de-component}
```

Branch

```text
style/candidate-tokens-for-{naam-van-de-component}
```

- [ ] Maak een PR aan en stuur een Slack-bericht naar een developer uit het kernteam zodra deze klaar staat voor review.

[De nieuwste versie van het "Figma in lijn" stappenplan](https://github.com/nl-design-system/candidate/blob/main/.github/ISSUE_TEMPLATE/figma-in-lijn.md) vind je in de Git repository. Controleer voor het afronden van dit GitHub Issue of de stappen hier boven volledig zijn.
