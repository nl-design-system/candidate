---
name: Anatomie vastleggen
about: Criteria; Anatomie van de component is vastgelegd
title: "Anatomie vastleggen {component-name}"
labels:
  - documentation
---

### Criteria

Anatomie van de component is vastgelegd

### Taken

- [ ]  Dupliceer de API Alignment [FigJam-board](https://www.figma.com/board/JbCjgWn3Ppkw8gKHfI0aME/API-Alignment-%E2%80%A2-NLDS?node-id=71-6810&node-type=section&t=dLExvlEBWVyqYTkU-11)
- [ ]  Vul het FigJam-board met voorbeelden van de component en het anatomie-voorstel uit de discussies
- [ ]  Bespreek de anatomie met de community en het kernteam tijdens de API Alignment
- [ ]  Finaliseer de anatomie na de API Alignment
- [ ]  Open de [Documentatie website afbeeldingen](https://www.figma.com/design/0Y9Tbb373u6QGxGT6mqUnm/NLDS---Doc-website---Afbeeldingen?node-id=689-3104&t=EVichcV9NQGM8zoo-4) Figma file
- [ ]  Dupliceer een bestaande pagina
- [ ]  Geef de pagina de naam van de component
- [ ]  Geef het frame de naam `components_{naam-van-component}_anatomy`
- [ ]  Plaats de component uit de 'NLDS Voorbeeld Bibliotheek' op het frame
- [ ]  Voeg annotaties toe met 'Annotation number' en 'Annotation line'. Houd 48 pixels afstand tussen de nummers en de component
- [ ]  Exporteer het frame als SVG-bestand met dezelfde naam als het frame
- [ ]  Maak een bestand `_anatomy.md` aan in de `docs`folder van de component. Je vindt deze folders in de [docs](https://github.com/nl-design-system/candidate/tree/main/packages/docs) folder van de Candidate repository in GitHub
- [ ]  Voeg de anatomie-documentatie toe aan het bestand volgens deze opzet:

```
<!-- @license CC0-1.0 -->

# Anatomie

1. {anatomie-item}
2. {anatomie-item}
3. {anatomie-item}
```

- [ ]  Maak de PR aan en gebruik hierbij de volgende opzet:

**Commit Message**

```
docs: candidate anatomy for {naam-van-de-component}
```

**Branch**

```
docs/candidate-anatomy-for-{naam-van-de-component}
```

- [ ]  Stuur een developer uit het kernteam een Slack-bericht dat de PR klaar staat voor review.
