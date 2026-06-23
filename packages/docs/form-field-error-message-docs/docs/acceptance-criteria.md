<!-- @license CC0-1.0 -->

# Acceptatiecriteria voor het maken van de Form Field Error Message component

## Varianten

Er zijn géén specifieke varianten nodig voor de Candidate component.

## Acceptatiecriteria toegankelijkheid van de component

- De Form Field Error Message kan aan een element voor formulierinvoer gekoppeld worden
- Tekst in de Form Field Error Message blijft leesbaar wanneer de tekstafstand vergroot wordt.
- De Form Field Error Message is standaard niet bereikbaar en bedienbaar met het toetsenbord.
- De Form Field Error Message komt standaard niet voor in de focusvolgorde van de pagina.
- Het is mogelijk om de Form Field Error Message de rol `alert` te geven.

[Meer informatie over deze acceptatiecriteria lees je op de componentpagina op de website van NL Design System.](https://nldesignsystem.nl/form-field-error-message/)

## Acceptatiecriteria APIs van de component

### CSS API

- Block class: `nl-form-field-error-message`

- Element classes:
  - geen

- Modifier classes:
  - geen

## React API

### Extends

Extends `HTMLAttributes<HTMLDivElement>` voor standaard HTML-attributen en events van een `div` element.

### Properties

Alle props uit `HTMLAttributes<HTMLDivElement>` worden doorgestuurd naar het onderliggende `div` element, zoals het `id` attribuut.

De volgende props worden expliciet ondersteund:

| Prop        | Type                  | Verplicht | Omschrijving                                                                                        |
| ----------- | --------------------- | --------- | --------------------------------------------------------------------------------------------------- |
| `children`  | `ReactNode`           | nee       | Inhoud in de vorm van een `p` element of phrasing content met uitzondering van interactive content. |
| `className` | `string`              | nee       | Extra CSS classes naast `nl-form-field-error-message`.                                              |
| `ref`       | `Ref<HTMLDivElement>` | nee       | Ref naar het onderliggende `div` element.                                                           |
