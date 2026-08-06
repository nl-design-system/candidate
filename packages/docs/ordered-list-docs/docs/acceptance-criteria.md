<!-- @license CC0-1.0 -->

# Acceptatiecriteria voor het maken van de Ordered List component

## Acceptatiecriteria toegankelijkheid van de component

- De Ordered List is herkenbaar als geordende lijst voor hulpsoftware.
- Als je de tekst van de Ordered List vergroot tot 200% blijft deze in zijn geheel zichtbaar.
- Tekst in de Ordered List blijft leesbaar wanneer de tekstafstand vergroot wordt.
- De Ordered List is standaard niet bereikbaar en bedienbaar met het toetsenbord.
- De Ordered List komt standaard niet voor in de focusvolgorde van de pagina.

[Meer informatie over deze acceptatiecriteria lees je op de componentpagina op de website van NL Design System.](https://nldesignsystem.nl/ordered-list/)

## Acceptatiecriteria APIs van de component

### CSS API

- Block class: `nl-ordered-list`

- Element classes:
  - `nl-ordered-list__item`
  - `nl-ordered-list__inline-marker`

- Pseudo-element classes:
  - `nl-ordered-list__marker` voor `::marker`

- Modifier classes:
  - geen

- HTML classes:
  - `nl-html--all`
  - `nl-html--ordered-list`

- Aanvullende selectors:
  - `:lang(ar)` op de Ordered List voor Arabische nummering

#### Geldige combinaties van CSS classes

| Configuratie                     | Geldig | Opmerking                                                     |
| -------------------------------- | :----: | ------------------------------------------------------------- |
| `nl-ordered-list`                |   ✅   |                                                               |
| `nl-ordered-list__item`          |   ✅   | Gebruik als child van `nl-ordered-list`.                      |
| `nl-ordered-list__inline-marker` |   ✅   | Gebruik een inline marker binnen een `nl-ordered-list__item`. |

## React API

### OrderedList

#### OrderedList extends

Extends `OlHTMLAttributes<HTMLOListElement>` voor standaard HTML-attributen en events van een HTML `ol` element.

Alle standaard HTML-attributen en events worden doorgestuurd naar het onderliggende `ol` HTML-element.

#### OrderedList properties

De volgende props worden expliciet ondersteund:

| Prop        | Type                                 | Default | Verplicht | Omschrijving                                                                                |
| ----------- | ------------------------------------ | ------- | --------- | ------------------------------------------------------------------------------------------- |
| `children`  | `ReactNode`                          | -       | nee       | De inhoud van de lijst, doorgaans één of meer `OrderedListItem` componenten.                |
| `className` | `string`                             | -       | nee       | Extra CSS classes naast `nl-ordered-list`.                                                  |
| `ref`       | `Ref<HTMLOListElement>`              | -       | nee       | Ref naar het onderliggende `ol` HTML-element.                                               |
| `restProps` | `OlHTMLAttributes<HTMLOListElement>` | -       | nee       | Overige standaard HTML-attributen en events worden doorgestuurd naar het `ol` HTML-element. |

### OrderedListItem

#### OrderedListItem extends

Extends `LiHTMLAttributes<HTMLLIElement>` voor standaard HTML-attributen en events van een HTML `li` element.

Alle standaard HTML-attributen en events worden doorgestuurd naar het onderliggende `li` HTML-element.

#### OrderedListItem properties

De volgende props worden expliciet ondersteund:

| Prop          | Type                              | Default | Verplicht | Omschrijving                                                                                   |
| ------------- | --------------------------------- | ------- | --------- | ---------------------------------------------------------------------------------------------- |
| `children`    | `ReactNode`                       | -       | nee       | De inhoud van de component.                                                                    |
| `inlineMarker`      | `ReactNode`                       | -       | nee       | De inhoud van de inline marker slot, weergegeven in een `span.nl-ordered-list__inline-marker`. |
| `inlineMarkerLabel` | `string`                          | -       | nee\*     | Toegankelijke naam voor de inline marker. Verplicht wanneer `inlineMarker` is opgegeven.             |
| `className`   | `string`                          | -       | nee       | Extra CSS classes naast `nl-ordered-list__item`.                                               |
| `ref`         | `Ref<HTMLLIElement>`              | -       | nee       | Ref naar het onderliggende `li` HTML-element.                                                  |
| `restProps`   | `LiHTMLAttributes<HTMLLIElement>` | -       | nee       | Overige standaard HTML-attributen en events worden doorgestuurd naar het `li` HTML-element.    |

#### Geldige combinaties van React OrderedListItem properties

| Configuratie                                                                     | Geldig | Opmerking                                                               |
| -------------------------------------------------------------------------------- | :----: | ----------------------------------------------------------------------- |
| `<OrderedListItem inlineMarker={<Icon />} inlineMarkerLabel="Stap 1">Item</OrderedListItem>` |   ✅   | Een inline marker moet een toegankelijke naam hebben.                   |
| `<OrderedListItem inlineMarker={<Icon />}>Item</OrderedListItem>`                      |   ❌   | `inlineMarkerLabel` is verplicht wanneer een inline marker wordt gebruikt.    |
| `<OrderedListItem inlineMarkerLabel="Stap 1">Item</OrderedListItem>`                   |   ❌   | `inlineMarkerLabel` heeft alleen betekenis wanneer ook `marker` is opgegeven. |
