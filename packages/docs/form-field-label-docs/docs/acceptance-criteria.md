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

#### Geldige combinaties van CSS classes

| Configuratie                                                                                                 | Geldig | Opmerking                                                               |
| ------------------------------------------------------------------------------------------------------------ | :----: | ----------------------------------------------------------------------- |
| `nl-form-field-label`                                                                                        |   ✅   |                                                                         |
| `nl-form-field-label nl-form-field-label--disabled`                                                          |   ✅   |                                                                         |
| `nl-form-field-label nl-form-field-label--option`                                                            |   ✅   |                                                                         |
| `nl-form-field-label nl-form-field-label--option nl-form-field-label--disabled`                              |   ✅   |                                                                         |
| `nl-form-field-label nl-form-field-label--inherit`                                                           |   ✅   |                                                                         |
| `nl-form-field-label nl-form-field-label--inherit nl-form-field-label--disabled`                             |   ❌   | `--inherit` mag niet gecombineerd worden met `--disabled`               |
| `nl-form-field-label nl-form-field-label--inherit nl-form-field-label--option`                               |   ❌   | `--inherit` mag niet gecombineerd worden met `--option`                 |
| `nl-form-field-label nl-form-field-label--inherit nl-form-field-label--option nl-form-field-label--disabled` |   ❌   | `--inherit` mag niet gecombineerd worden met `--option` of `--disabled` |

### React API

#### Extends

Extends `LabelHTMLAttributes<HTMLLabelElement>` voor standaard HTML-attributen en events van een HTML `label` element.

#### Properties

Alle props uit `LabelHTMLAttributes<HTMLLabelElement>` worden doorgestuurd naar het onderliggende HTML `label` element, zoals het HTML `for` attribuut.

De volgende props worden expliciet ondersteund:

| Prop        | Type                    | Default | Verplicht | Omschrijving                                                                                                                                                                                                                                                                                                                     |
| ----------- | ----------------------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`  | `ReactNode`             | -       | nee       | Inhoud in de vorm van phrasing content met uitzondering van interactive content.                                                                                                                                                                                                                                                 |
| `input`     | `ReactNode`             | -       | nee       | Inhoud in de vorm van een radio, checkbox of switch.                                                                                                                                                                                                                                                                             |
| `className` | `string`                | -       | nee       | Extra CSS classes naast `nl-form-field-label`.                                                                                                                                                                                                                                                                                   |
| `ref`       | `Ref<HTMLLabelElement>` | -       | nee       | Ref naar het onderliggende HTML `label` element.                                                                                                                                                                                                                                                                                 |
| `type`      | `'option' \| 'inherit'` | -       | nee       | Voegt de CSS class `nl-form-field-label--option` toe om aan te geven dat het gekoppelde formulierelement een radio, checkbox of switch is. Gebruik de CSS class `nl-form-field-label--inherit` om alle styling van het parent-element over te nemen, bijvoorbeeld wanneer je de component binnen een HTML `h1` element gebruikt. |
| `disabled`  | `boolean`               | -       | nee       | Voegt de CSS class `nl-form-field-label--disabled` toe om aan te geven dat het gekoppelde formulierelement is uitgeschakeld.                                                                                                                                                                                                     |

#### Geldige combinaties van React properties

| Configuratie                                             | Geldig | Opmerking                                                                                                                          |
| -------------------------------------------------------- | :----: | ---------------------------------------------------------------------------------------------------------------------------------- |
| `<FormFieldLabel />`                                     |   ✅   |                                                                                                                                    |
| `<FormFieldLabel disabled />`                            |   ✅   |                                                                                                                                    |
| `<FormFieldLabel input={...} />`                         |   ❌   | `input` mag alleen gebruikt worden in combinatie met `type="option"`                                                               |
| `<FormFieldLabel input={...} disabled />`                |   ❌   | `input` mag alleen gebruikt worden in combinatie met `type="option"`                                                               |
| `<FormFieldLabel type="option" />`                       |   ❌   | `input` is verplicht bij `type="option"`                                                                                           |
| `<FormFieldLabel type="option" disabled />`              |   ❌   | `input` is verplicht bij `type="option"`                                                                                           |
| `<FormFieldLabel type="option" input={...} />`           |   ✅   |                                                                                                                                    |
| `<FormFieldLabel type="option" input={...} disabled />`  |   ✅   |                                                                                                                                    |
| `<FormFieldLabel type="inherit" />`                      |   ✅   |                                                                                                                                    |
| `<FormFieldLabel type="inherit" disabled />`             |   ❌   | `type="inherit"` mag niet gecombineerd worden met `disabled`                                                                       |
| `<FormFieldLabel type="inherit" input={...} />`          |   ❌   | `input` mag alleen gebruikt worden in combinatie met `type="option"`                                                               |
| `<FormFieldLabel type="inherit" input={...} disabled />` |   ❌   | `type="inherit"` mag niet gecombineerd worden met `disabled`; `input` mag alleen gebruikt worden in combinatie met `type="option"` |
