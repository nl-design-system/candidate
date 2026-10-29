<!-- @license CC0-1.0 -->

# Acceptatiecriteria voor het maken van de Color Sample component

## Varianten

### Deze varianten worden ondersteund

- Varianten die standaard in HTML beschikbaar zijn, worden in TypeScript gedefinieerd door de attributen van het standaard HTMLElement te gebruiken.
- Varianten die niet standaard in HTML beschikbaar zijn, worden als uitbreiding toegevoegd.
- Deze varianten worden gedocumenteerd op de website, in de README en in de standaard Storybook.
- Deze varianten worden beschikbaar gemaakt in Figma.

#### SVG

Een `svg` HTML-element dat de kleur tekent met een `path` HTML-element. Deze variant blijft ook als losse afbeelding bruikbaar, bijvoorbeeld bij opslaan, afdrukken en drag & drop.

#### HTML

Een `span`, `div` of `data` HTML-element dat met CSS vormgegeven wordt als Color Sample. Deze variant is eenvoudig te implementeren zonder SVG-markup.

## Semantiek

Dit zijn de acceptatiecriteria welke HTML-elementen en HTML-attributen het beste zijn voor deze component.

### Welke HTML-elementen het beste zijn voor deze component

#### Must Have elementen

Voor de SVG variant:

- De Color Sample is opgemaakt met het `svg` HTML-element.
- De Color Sample `svg` HTML-element bevat een `path` HTML-element dat het volledige vlak van de Color Sample vult.
- Het `path` HTML-element gebruikt het `fill` HTML-attribuut met de kleurwaarde, zodat de kleur niet afhankelijk is van inline styles.

Voor de HTML variant:

- De Color Sample is opgemaakt met het `span`, `div` of `data` HTML-element.
- De Color Sample `span`, `div` of `data` HTML-element heeft geen inhoud.

#### Could Have elementen

- De Color Sample `svg` HTML-element mag een `title` HTML-element bevatten met het label van de kleur.

### Welke HTML-attributen het beste zijn voor deze component

#### Must Have attributen

- De Color Sample gebruikt het `role` HTML-attribuut met de waarde `img`, zodat de Color Sample een toegankelijke naam kan krijgen. Een element zonder rol, zoals een lege `span`, mag geen `aria-label` HTML-attribuut hebben, en een `svg` HTML-element zonder rol wordt niet in elke browser en schermlezer betrouwbaar voorgelezen.
- De Color Sample gebruikt geen `tabindex` HTML-attribuut. De component is informatief, niet interactief.

Voor de SVG variant:

- De Color Sample `svg` HTML-element gebruikt het `xmlns` HTML-attribuut met de waarde `http://www.w3.org/2000/svg`, zodat de SVG ook als los bestand geldig is.
- De Color Sample `svg` HTML-element gebruikt het `width` en `height` HTML-attribuut, zodat de SVG ook zonder CSS een afmeting heeft.

Voor de HTML variant:

- De Color Sample gebruikt de `color` CSS-property om de kleurwaarde in te stellen, via het `style` HTML-attribuut of via een class uit een stylesheet.

#### Could Have attributen

- De Color Sample gebruikt het `aria-label` HTML-attribuut als toegankelijke naam wanneer er geen `title` HTML-element is.
- De Color Sample gebruikt het `aria-labelledby` HTML-attribuut wanneer de naam van de kleur al in een ander element op de pagina staat.
- De Color Sample gebruikt het `aria-hidden` HTML-attribuut met de waarde `true` wanneer de Color Sample decoratief is, omdat de naam van de kleur al in de tekst ernaast staat.

### Alternatieve HTML

- De CSS ondersteunt een Color Sample met de `nl-color-sample` class op een `svg` HTML-element.
- De CSS ondersteunt een Color Sample met de `nl-color-sample` class op een `span` HTML-element.
- De CSS ondersteunt een Color Sample met de `nl-color-sample` class op een `div` HTML-element.
- De CSS ondersteunt een Color Sample met de `nl-color-sample` class op een `data` HTML-element.
- De SVG variant en de HTML variant zien er met dezelfde kleurwaarde hetzelfde uit.
- Een kleurwaarde met transparantie is herkenbaar, doordat de Color Sample een geblokt patroon achter de kleur toont.

### Forced Colors modus

- De Color Sample toont in Forced Colors modus de opgegeven kleurwaarde en niet een systeemkleur.
- De Color Sample border blijft in Forced Colors modus zichtbaar.

### Printen

- De Color Sample toont bij het printen de opgegeven kleurwaarde, ook wanneer het printen van achtergronden in de browser uit staat.
- De HTML variant gebruikt de `print-color-adjust` CSS-property met de waarde `exact`, omdat de kleur als `background-image` wordt getekend.

### Content Security Policy

- De SVG variant toont de kleurwaarde ook wanneer een Content Security Policy inline styles blokkeert.
- De HTML variant ondersteunt een kleurwaarde uit een stylesheet via een class, zodat de component bruikbaar is met een Content Security Policy die inline styles blokkeert.

## Acceptatiecriteria toegankelijkheid van de component

- Een informatieve Color Sample heeft de rol `img`, zodat hulpsoftware de toegankelijke naam als één geheel voorleest.
- Een informatieve Color Sample heeft een toegankelijke naam die de kleur beschrijft.
- Een decoratieve Color Sample is verborgen voor hulpsoftware.
- De betekenis van de Color Sample is niet alleen afhankelijk van kleur. De naam of waarde van de kleur is ook als tekst beschikbaar.
- De Color Sample is standaard niet bereikbaar en bedienbaar met het toetsenbord.
- De Color Sample komt standaard niet voor in de focusvolgorde van de pagina.

[Meer informatie over deze acceptatiecriteria lees je op de componentpagina op de website van NL Design System.](https://nldesignsystem.nl/color-sample/)

## Acceptatiecriteria APIs van de component

### CSS API

- Block class: `nl-color-sample`

- Element classes:
  - geen

- Modifier classes:
  - geen

- HTML classes:
  - geen

#### Geldige combinaties van CSS classes

| Configuratie                  | Geldig | Opmerking                                                                                   |
| ----------------------------- | :----: | ------------------------------------------------------------------------------------------- |
| `svg.nl-color-sample`         |   ✅   | SVG variant. Het `path` HTML-element gebruikt het `fill` HTML-attribuut met de kleurwaarde. |
| `span.nl-color-sample`        |   ✅   | HTML variant.                                                                               |
| `div.nl-color-sample`         |   ✅   | HTML variant.                                                                               |
| `data.nl-color-sample`        |   ✅   | HTML variant met machineleesbare kleurwaarde.                                               |
| `.nl-color-sample` met inhoud |   ❌   | De HTML variant heeft geen inhoud.                                                          |

### React API

#### Extends

Extends `SVGAttributes<SVGSVGElement>` voor standaard HTML-attributen en events van een `svg` HTML-element.

Alle standaard HTML-attributen en events worden doorgestuurd naar het onderliggende `svg` HTML-element, zoals het `id` HTML-attribuut.

#### Properties

De volgende props worden expliciet ondersteund:

| Prop        | Type                           | Default | Verplicht | Omschrijving                                                                                 |
| ----------- | ------------------------------ | ------- | --------- | -------------------------------------------------------------------------------------------- |
| `value`     | `CSSProperties['color']`       | -       | ja        | De kleurwaarde, ingesteld als `fill` HTML-attribuut op het `path` HTML-element.              |
| `label`     | `string`                       | -       | nee       | Toegankelijke naam van de kleur, weergegeven in een `title` HTML-element.                    |
| `className` | `string`                       | -       | nee       | Extra CSS classes naast `nl-color-sample`.                                                   |
| `ref`       | `Ref<SVGSVGElement>`           | -       | nee       | Ref naar het onderliggende `svg` HTML-element.                                               |
| `restProps` | `SVGAttributes<SVGSVGElement>` | -       | nee       | Overige standaard HTML-attributen en events worden doorgestuurd naar het `svg` HTML-element. |

#### Geldige combinaties van React ColorSample properties

| Configuratie                                                   | Geldig | Opmerking                                                                 |
| -------------------------------------------------------------- | :----: | ------------------------------------------------------------------------- |
| `<ColorSample value="#d52b1e" label="Rood" />`                 |   ✅   | Informatieve Color Sample met een toegankelijke naam.                     |
| `<ColorSample value="#d52b1e" aria-labelledby="kleur-naam" />` |   ✅   | De toegankelijke naam staat in een ander element op de pagina.            |
| `<ColorSample value="#d52b1e" aria-hidden="true" />`           |   ✅   | Decoratieve Color Sample, de naam van de kleur staat in de tekst ernaast. |
| `<ColorSample value="#d52b1e" />`                              |   ❌   | Een informatieve Color Sample zonder toegankelijke naam.                  |
| `<ColorSample label="Rood" />`                                 |   ❌   | `value` is verplicht.                                                     |
