<!-- @license CC0-1.0 -->

# Acceptatiecriteria voor het maken van de Unordered List component

## Semantiek

Dit zijn de acceptatiecriteria welke HTML-elementen en HTML-attributen het beste zijn voor deze component.

### Welke HTML-elementen het beste zijn voor deze component

#### Must Have elementen

- De Unordered List is opgemaakt met het `ul` HTML-element.
- De Unordered List bevat een inhoud welke bestaat uit één of meer `li` HTML-elementen.

#### Could Have elementen

- De Unordered List Item mag een inhoud bevatten in de vorm van een `p` HTML-element.
- De Unordered List Item mag een inhoud bevatten in de vorm van [phrasing content](https://www.w3.org/TR/2011/WD-html5-20125/content-models.html#phrasing-content-0).
- De Unordered List Item mag een geneste Unordered List bevatten in de vorm van een `ul` HTML-element.
- De Unordered List Item mag een geneste Ordered List bevatten in de vorm van een `ol` HTML-element.
- De Unordered List Item mag een slot bevatten in de vorm van een `span` HTML-element om een custom marker in te plaatsen.
- De custom marker in het Unordered List Item Slot volgt de acceptatiecriteria van de Icon component in de vorm van een informatieve Icon met een beschrijvende alternatieve tekst.

### Welke HTML-attributen het beste zijn voor deze component

#### Must Have attributen

- De Unordered List gebruikt het `role` HTML-attribuut met de waarde `list`.
- De Unordered List gebruikt geen `tabindex` HTML-attribuut. De component is informatief, niet interactief.
- Het Unordered List Item Slot voor een custom marker gebruikt het `aria-hidden` HTML-attribuut met de waarde `true`.

### Alternatieve HTML

- De CSS ondersteunt een Unordered List met de `nl-unordered-list` class op het `ul` HTML-element en de `nl-unordered-list__item` class op de onderliggende `li` HTML-elementen.
- De CSS ondersteunt een Unordered List met de `nl-unordered-list` class op het `div` HTML-element en de `nl-unordered-list__item` class op de onderliggende `div` HTML-elementen.
- De CSS ondersteunt een Unordered List met de `nl-unordered-list` class op het `span` HTML-element en de `nl-unordered-list__item` class op de onderliggende `span` HTML-elementen.

Voor de HTML component:

- De CSS ondersteunt een Unordered List binnen een element met de `nl-html--all` classes met een `ul` HTML-element en onderliggende `li` HTML-elementen zonder component classes.
- De CSS ondersteunt een Unordered List binnen een element met de `nl-html--unordered-list` classes met een `ul` HTML-element en onderliggende `li` HTML-elementen zonder component classes.
- De CSS ondersteunt een semantische HTML Unordered List bestaande uit `ul` en `li` HTML-elementen zonder component classes.

### Forced Colors modus

- De Unordered List tekstkleur in Forced Colors modus is `currentColor`.
- De Unordered List tekstkleur van de marker in Forced Colors modus is `currentColor`.

## Acceptatiecriteria toegankelijkheid van de component

- De Unordered List is herkenbaar als ongeordende lijst voor hulpsoftware.
- Als je de tekst van de Unordered List vergroot tot 200% blijft deze in zijn geheel zichtbaar.
- Tekst in de Unordered List blijft leesbaar wanneer de tekstafstand vergroot wordt.
- De Unordered List is standaard niet bereikbaar en bedienbaar met het toetsenbord.
- De Unordered List komt standaard niet voor in de focusvolgorde van de pagina.

[Meer informatie over deze acceptatiecriteria lees je op de componentpagina op de website van NL Design System.](https://nldesignsystem.nl/unordered-list/)

## Acceptatiecriteria APIs van de component

### CSS API

- Block class: `nl-unordered-list`

- Element classes:
  - `nl-unordered-list__item`
  - `nl-unordered-list__inline-marker`

- Pseudo-element classes:
  - `nl-unordered-list__marker` voor `::marker`

- Modifier classes:
  - geen

- HTML classes:
  - `nl-html--all`
  - `nl-html--unordered-list`

#### Geldige combinaties van CSS classes

| Configuratie                       | Geldig | Opmerking                                                       |
| ---------------------------------- | :----: | --------------------------------------------------------------- |
| `nl-unordered-list`                |   ✅   |                                                                 |
| `nl-unordered-list__item`          |   ✅   | Gebruik als child van `nl-unordered-list`.                      |
| `nl-unordered-list__inline-marker` |   ✅   | Gebruik een inline marker binnen een `nl-unordered-list__item`. |

## React API

### UnorderedList

#### UnorderedList extends

Extends `UlHTMLAttributes<HTMLUListElement>` voor standaard HTML-attributen en events van een HTML `ul` element.

Alle standaard HTML-attributen en events worden doorgestuurd naar het onderliggende `ul` HTML-element.

#### UnorderedList properties

De volgende props worden expliciet ondersteund:

| Prop        | Type                                 | Default | Verplicht | Omschrijving                                                                                |
| ----------- | ------------------------------------ | ------- | --------- | ------------------------------------------------------------------------------------------- |
| `children`  | `ReactNode`                          | -       | nee       | De inhoud van de lijst, doorgaans één of meer `UnorderedListItem` componenten.              |
| `className` | `string`                             | -       | nee       | Extra CSS classes naast `nl-unordered-list`.                                                |
| `ref`       | `Ref<HTMLUListElement>`              | -       | nee       | Ref naar het onderliggende `ul` HTML-element.                                               |
| `restProps` | `UlHTMLAttributes<HTMLUListElement>` | -       | nee       | Overige standaard HTML-attributen en events worden doorgestuurd naar het `ul` HTML-element. |

### UnorderedListItem

#### UnorderedListItem extends

Extends `LiHTMLAttributes<HTMLLIElement>` voor standaard HTML-attributen en events van een HTML `li` element.

Alle standaard HTML-attributen en events worden doorgestuurd naar het onderliggende `li` HTML-element.

#### UnorderedListItem properties

De volgende props worden expliciet ondersteund:

| Prop                | Type                              | Default | Verplicht | Omschrijving                                                                                     |
| ------------------- | --------------------------------- | ------- | --------- | ------------------------------------------------------------------------------------------------ |
| `children`          | `ReactNode`                       | -       | nee       | De inhoud van de component.                                                                      |
| `inlineMarker`      | `ReactNode`                       | -       | nee       | De inhoud van de inline marker slot, weergegeven in een `span.nl-unordered-list__inline-marker`. |
| `inlineMarkerLabel` | `string`                          | -       | nee       | Toegankelijke naam voor de inline marker.                                                        |
| `className`         | `string`                          | -       | nee       | Extra CSS classes naast `nl-unordered-list__item`.                                               |
| `ref`               | `Ref<HTMLLIElement>`              | -       | nee       | Ref naar het onderliggende `li` HTML-element.                                                    |
| `restProps`         | `LiHTMLAttributes<HTMLLIElement>` | -       | nee       | Overige standaard HTML-attributen en events worden doorgestuurd naar het `li` HTML-element.      |

#### Geldige combinaties van React UnorderedListItem properties

| Configuratie                                                                                         | Geldig | Opmerking                                                                                |
| ---------------------------------------------------------------------------------------------------- | :----: | ---------------------------------------------------------------------------------------- |
| `<UnorderedListItem inlineMarker={<Icon />}>Item</UnorderedListItem>`                                |   ✅   | Een inline marker mag zonder toegankelijke naam worden gebruikt.                         |
| `<UnorderedListItem inlineMarker={<Icon />} inlineMarkerLabel="Afgecheckt">Item</UnorderedListItem>` |   ✅   | Een toegankelijke naam kan worden opgegeven wanneer de inline marker betekenis toevoegt. |
| `<UnorderedListItem inlineMarkerLabel="Afgecheckt">Item</UnorderedListItem>`                         |   ❌   | `inlineMarkerLabel` heeft alleen betekenis wanneer ook `inlineMarker` is opgegeven.      |
