<!-- @license CC0-1.0 -->

# Acceptatiecriteria voor het maken van de Form Field Description component

## Varianten

### Deze varianten worden ondersteund

- Varianten die standaard in HTML beschikbaar zijn, worden in Typescript gedefinieerd door de attributen van het standaard HTMLElement te gebruiken.
- Varianten die niet standaard in HTML beschikbaar zijn, worden als uitgebreiding toegevoegd.
- Deze varianten worden gedocumenteerd op de website, in de README en in de standaard Storybook.
- Deze varianten worden beschikbaar gemaakt in Figma.

#### Disabled

Boolean

- False (default)
- True

#### Children

Rich text (code) / Text - string (design)

## Semantiek

Dit zijn de acceptatiecriteria welke HTML elementen en HTML attributen het beste zijn voor deze component.

### Welke HTML elementen het beste zijn voor deze component

#### Must Have elementen

- De Form Field Description is opgemaakt met het `div` element.

#### Could Have elementen

- De Form Field Description mag een inhoud bevatten welke bestaat in de vorm van een `p` element en [phrasing content](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content-0) met uitzondering van [interactive content](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#interactive-content-0).

### Welke HTML attributen het beste zijn voor deze component

#### Must Have attributen

- De Form Field Description bevat altijd een `id` attribuut, zodat het met `aria-describedby` attribuut aan het input-element gekoppeld kan worden.
- De Form Field Description gebruikt geen `tabindex` attribuut, de component is ondersteunend, niet interactief.

## Acceptatiecriteria toegankelijkheid van de component

- De Form Field Description kan aan een element voor formulierinvoer gekoppeld worden.
- Tekst in de Form Field Description blijft leesbaar wanneer de tekstafstand vergroot wordt.
- De Form Field Description is standaard niet bereikbaar en bedienbaar met het toetsenbord.
- De Form Field Description komt standaard niet voor in de focusvolgorde van de pagina.

[Meer informatie over deze acceptatiecriteria lees je op de componentpagina op de website van NL Design System.](https://nldesignsystem.nl/form-field-description/)

## Acceptatiecriteria APIs van de component

### CSS API

- Block class: `nl-form-field-description`

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
| `className` | `string`              | nee       | Extra CSS classes naast `nl-form-field-description`.                                                |
| `ref`       | `Ref<HTMLDivElement>` | nee       | Ref naar het onderliggende `div` element.                                                           |
