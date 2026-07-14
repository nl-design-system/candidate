<!-- @license CC0-1.0 -->

# Acceptatiecriteria voor het maken van de Form Field Label component

## Varianten

### Deze varianten worden ondersteund

- Varianten die standaard in HTML beschikbaar zijn, worden in Typescript gedefinieerd door de attributen van het standaard HTMLElement te gebruiken.
- Varianten die niet standaard in HTML beschikbaar zijn, worden als uitgebreiding toegevoegd.
- Deze varianten worden gedocumenteerd op de website, in de README en in de standaard Storybook.
- Deze varianten worden beschikbaar gemaakt in Figma.

#### Type

Enum

- Default (default)
- Option

#### Disabled

Boolean

- False (default)
- True

#### Children

Rich text (code) / Text - string (design)

## Acceptatiecriteria toegankelijkheid van de component

- Het Form Field Label kan aan een element voor formulierinvoer gekoppeld worden.
- Als je de tekst van het Form Field Label vergroot tot 200% blijft deze in zijn geheel zichtbaar.
- Tekst in het Form Field Label blijft leesbaar wanneer de tekstafstand vergroot wordt.
- Het Form Field Label is standaard niet bereikbaar en bedienbaar met het toetsenbord.
- Het Form Field Label komt standaard niet voor in de focusvolgorde van de pagina.

[Meer informatie over deze acceptatiecriteria lees je op de componentpagina op de website van NL Design System.](https://nldesignsystem.nl/form-field-label/)

## Acceptatiecriteria APIs van de component

### CSS API

- Block class: `nl-form-field-label`

- Element classes:
  - geen

- Modifier classes:
  - `nl-form-field-label--option`
  - `nl-form-field-label--inherit`
  - `nl-form-field-label--disabled`

## React API

### Extends

Extends `LabelHTMLAttributes<HTMLLabelElement>` voor standaard HTML-attributen en events van een HTML `label` element.

### Properties

Alle props uit `LabelHTMLAttributes<HTMLLabelElement>` worden doorgestuurd naar het onderliggende HTML `label` element, zoals het HTML `for` attribuut.

De volgende props worden expliciet ondersteund:

| Prop        | Type                    | Verplicht | Omschrijving                                                                                                                                                                                                                                                                                                             |
| ----------- | ----------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`  | `ReactNode`             | nee       | Inhoud in de vorm van een HTML `p` element of phrasing content met uitzondering van interactive content.                                                                                                                                                                                                                 |
| `className` | `string`                | nee       | Extra CSS classes naast `nl-form-field-label`.                                                                                                                                                                                                                                                                           |
| `ref`       | `Ref<HTMLLabelElement>` | nee       | Ref naar het onderliggende HTML `label` element.                                                                                                                                                                                                                                                                         |
| `type`      | `'option' \| 'inherit'` | nee       | Voegt de CSS class `nl-form-field-label--option` toe om aan te geven dat het gekoppelde formulierelement een radio of checkbox is. Gebruik de CSS class `nl-form-field-label--inherit` om alle styling van het parent-element over te nemen, bijvoorbeeld wanneer je de component binnen een HTML `h1` element gebruikt. |
| `disabled`  | `boolean`               | nee       | Voegt de CSS class `nl-form-field-label--disabled` toe om aan te geven dat het gekoppelde formulierelement is uitgeschakeld.                                                                                                                                                                                             |
