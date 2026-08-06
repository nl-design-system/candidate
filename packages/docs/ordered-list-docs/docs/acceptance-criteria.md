<!-- @license CC0-1.0 -->

# Acceptatiecriteria voor het maken van de Ordered List component

## Varianten

### Deze varianten worden ondersteund

- Varianten die standaard in HTML beschikbaar zijn, worden in TypeScript gedefinieerd door de attributen van het standaard HTMLElement te gebruiken.
- Varianten die niet standaard in HTML beschikbaar zijn, worden als uitbreiding toegevoegd.
- Deze varianten worden gedocumenteerd op de website, in de README en in de standaard Storybook.
- Deze varianten worden beschikbaar gemaakt in Figma.

#### Item

##### Level

Enum

- 1
- 2
- 3

##### Marker Text

String (design)

##### Content

String (code) / Text - string (design)

## Semantiek

Dit zijn de acceptatiecriteria welke HTML-elementen en HTML-attributen het beste zijn voor deze component.

### Welke HTML-elementen het beste zijn voor deze component

#### Must Have elementen

- De Ordered List is opgemaakt met het `ol` HTML-element.
- De Ordered List bevat één of meer `li` HTML-elementen.
- De Ordered List Inline Marker is verborgen voor hulptechnologieën met het `aria-hidden="true"` HTML-attribuut.

#### Could Have elementen

- De Ordered List Item mag een inhoud bevatten in de vorm van een `p` HTML-element.
- De Ordered List Item mag een inhoud bevatten in de vorm van [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content).
- De Ordered List Item mag een geneste Ordered List bevatten in de vorm van een `ol` HTML-element.
- De Ordered List Item mag een geneste Unordered List bevatten in de vorm van een `ul` HTML-element.
- De Ordered List Item mag een Ordered List Inline Marker bevatten in de vorm van een `span` HTML-element.
- De Ordered List Inline Marker mag een informatief label bevatten in de vorm van een `span` HTML-element met een tekstuele inhoud die visueel verborgen is maar beschikbaar blijft voor hulptechnologieën.
- De inhoud van de Ordered List Inline Marker volgt de acceptatiecriteria van de Icon component in de vorm van een informatieve Icon met een beschrijvende alternatieve tekst.

### Welke HTML-attributen het beste zijn voor deze component

#### Must Have attributen

- De Ordered List gebruikt het `role` HTML-attribuut met de waarde `list`.
- De Ordered List gebruikt geen `tabindex` HTML-attribuut. De component is informatief, niet interactief.

#### Could Have attributen

- De Ordered List accepteert het `reversed` HTML-attribuut om de nummering in omgekeerde volgorde weer te geven.
- De Ordered List accepteert het `start` HTML-attribuut met een numerieke waarde om de nummering vanaf een specifiek getal te laten beginnen.
- De Ordered List accepteert het `type` HTML-attribuut met de waarde `1` om de lijst te nummeren met cijfers (`1`, `2`, `3`, ...).
- De Ordered List accepteert het `type` HTML-attribuut met de waarde `a` om de lijst te nummeren met kleine letters (`a`, `b`, `c`, ...).
- De Ordered List accepteert het `type` HTML-attribuut met de waarde `A` om de lijst te nummeren met hoofdletters (`A`, `B`, `C`, ...).
- De Ordered List accepteert het `type` HTML-attribuut met de waarde `i` om de lijst te nummeren met kleine Romeinse cijfers (`i`, `ii`, `iii`, ...).
- De Ordered List accepteert het `type` HTML-attribuut met de waarde `I` om de lijst te nummeren met hoofdletters Romeinse cijfers (`I`, `II`, `III`, ...).

### Alternatieve HTML

- De CSS ondersteunt een Ordered List met de `nl-ordered-list` class op het `ol` HTML-element en de `nl-ordered-list__item` class op de onderliggende `li` HTML-elementen.
- De CSS ondersteunt een Ordered List met de `nl-ordered-list` class op het `div` HTML-element en de `nl-ordered-list__item` class op de onderliggende `div` HTML-elementen.
- De CSS ondersteunt een Ordered List met de `nl-ordered-list` class op het `span` HTML-element en de `nl-ordered-list__item` class op de onderliggende `span` HTML-elementen.

Voor de HTML component:

- De CSS ondersteunt een Ordered List binnen een element met de `nl-html--all` class met een `ol` HTML-element en onderliggende `li` HTML-elementen zonder component classes.
- De CSS ondersteunt een Ordered List binnen een element met de `nl-html--ordered-list` class met een `ol` HTML-element en onderliggende `li` HTML-elementen zonder component classes.
- De CSS ondersteunt een semantische HTML Ordered List bestaande uit `ol` en `li` HTML-elementen zonder component classes.

### Forced Colors modus

- De Ordered List tekstkleur in Forced Colors modus is `currentColor`.
- De Ordered List tekstkleur van de inline marker in Forced Colors modus is `currentColor`.

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

- Pseudo-element mixins:
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
