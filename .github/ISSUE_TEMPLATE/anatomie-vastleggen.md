---
name: Anatomie vastleggen
about: Anatomie van de component is vastgelegd
title: '{component-name} - Anatomie vastleggen'
labels:
  - development
  - documentation
  - figma
---

### Criteria

Anatomie van de component is vastgelegd

### Taken

- [ ] Dupliceer de API Alignment [FigJam-board](https://www.figma.com/board/JbCjgWn3Ppkw8gKHfI0aME/API-Alignment-%E2%80%A2-NLDS?node-id=71-6810&node-type=section&t=dLExvlEBWVyqYTkU-11)
- [ ] Vul het FigJam-board met voorbeelden van de component en het anatomie-voorstel uit de discussies
- [ ] Bespreek de anatomie met de community en het kernteam tijdens de API Alignment
- [ ] Finaliseer de anatomie na de API Alignment
- [ ] Open de [Documentatie website afbeeldingen](https://www.figma.com/design/0Y9Tbb373u6QGxGT6mqUnm/NLDS---Doc-website---Afbeeldingen?node-id=689-3104&t=EVichcV9NQGM8zoo-4) Figma file
- [ ] Dupliceer een bestaande pagina
- [ ] Geef de pagina de naam van de component
- [ ] Geef het frame de naam `components_{naam-van-component}_anatomy`
- [ ] Plaats de component uit de 'NLDS Voorbeeld Bibliotheek' op het frame
- [ ] Voeg annotaties toe met 'Annotation number' en 'Annotation line'. Houd 48 pixels afstand tussen de nummers en de component
- [ ] Exporteer het frame als SVG-bestand met dezelfde naam als het frame
- [ ] Zorg dat er alternatieve tekst beschikbaar is. Om dit toe te voegen, open je het SVG-bestand in een text editor. Voeg op het `<svg>` element twee elementen toe, een `<title>` en een `<desc>`. In de `<title>` zet je een korte samenvatting, in de `<desc>` beschrijf je in meer detail wat er op de afbeelding staat. `

Voorbeeld:

```html
<svg>
  <title>Samenstelling “code” component</title>
  <desc>
    Een zin met in de lopende tekst het woord 'code' dat is opgemaakt met een achtergrond en een ander lettertype. Het
    stukje code is aangeduid met het cijfer 1.
  </desc>
</svg>
```

Zorg ook dat er unieke ID's zitten op de `<title>` en `<desc>`, die kunnen we later, op bv de documentatiesite, gebruiken om toegankelijkheid te verbeteren.

Volledig voorbeeld:

```html
<svg>
  <title id="code-anatomy-title">Samenstelling “code” component</title>
  <desc id="code-anatomy-desc">
    Een zin met in de lopende tekst het woord 'code' dat is opgemaakt met een achtergrond en een ander lettertype. Het
    stukje code is aangeduid met het cijfer 1.
  </desc>
</svg>
```

- [ ] Maak een bestand `_anatomy.md` aan in de `docs`folder van de component. Je vindt deze folders in de [docs](https://github.com/nl-design-system/candidate/tree/main/packages/docs) folder van de Candidate repository in GitHub
- [ ] Voeg de anatomie-documentatie toe aan het bestand volgens deze opzet:

```md
<!-- @license CC0-1.0 -->

# Anatomie

1. {anatomie-item}
2. {anatomie-item}
3. {anatomie-item}
```

- [ ] Maak de PR aan en gebruik hierbij de volgende opzet:

Commit Message:

```text
docs: candidate anatomy for {naam-van-de-component}
```

Branch:

```text
docs/candidate-anatomy-for-{naam-van-de-component}
```

- [ ] Stuur een developer uit het kernteam een Slack-bericht dat de PR klaar staat voor review.

[De nieuwste versie van het "Anatomie vastleggen" stappenplan](https://github.com/nl-design-system/candidate/blob/main/.github/ISSUE_TEMPLATE/anatomie-vastleggen.md) vind je in de Git repository. Controleer voor het afronden van dit GitHub Issue of de stappen hier boven volledig zijn.
