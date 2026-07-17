<!-- @license CC0-1.0 -->

# Acceptatiecriteria voor het maken van de Form Field Error Message component

## Varianten

Er zijn géén specifieke varianten nodig voor de Candidate component.

## Semantiek

Dit zijn de acceptatiecriteria welke HTML-elementen en HTML-attributen het beste zijn voor deze component.

### Welke HTML-elementen het beste zijn voor deze component

#### Must Have elementen

- De Form Field Error Message is opgemaakt met het `div` HTML-element.
- De Form Field Error Message `div` HTML-element bevat een `div` HTML-element voor de content.

#### Could Have elementen

- De Form Field Error Message `div` HTML-element bevat een `div` HTML-element voor de icon.
- De Form Field Error Message icon mag een inhoud bevatten welke bestaat in de vorm van een `p` HTML-element en [phrasing content](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content-0) met uitzondering van [interactive content](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#interactive-content-0).
- De Form Field Error Message content mag een inhoud bevatten welke bestaat in de vorm van een `p` HTML-element en [phrasing content](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content-0) met uitzondering van [interactive content](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#interactive-content-0).

### Welke HTML-attributen het beste zijn voor deze component

#### Must Have attributen

- De Form Field Error Message content bevat altijd een `id` HTML-attribuut, zodat het met `aria-describedby` HTML-attribuut aan het input-element gekoppeld kan worden.
- Gebruik geen `tabindex` HTML-attribuut, de Form Field Error Message is informatief, niet interactief.
- De Form Field Error Message inhoud is alleen zichtbaar en toegankelijk wanneer er een fout is.
- Wanneer de tekst word ingevuld aan de client-side, is de Form Field Error Message component altijd in de DOM en in de accessibility tree.

#### Could Have attributen

- Wanneer de tekst word ingevuld aan de client-side, maakt de Form Field Error Message content gebruik van het `role="alert"` HTML-attribuut.

### Alternatieve HTML

- De CSS ondersteunt een Form Field Error Message met de `nl-form-field-error-message` class op een `label` HTML-element.
- De CSS ondersteunt een Form Field Error Message met de `nl-form-field-error-message` class op een `div` HTML-element.
- De CSS ondersteunt een Form Field Error Message met de `nl-form-field-error-message` class op een `span` HTML-element.
- De CSS ondersteunt een Form Field Error Message met de `nl-form-field-error-message__icon` class op een `label` HTML-element.
- De CSS ondersteunt een Form Field Error Message met de `nl-form-field-error-message__icon` class op een `div` HTML-element.
- De CSS ondersteunt een Form Field Error Message met de `nl-form-field-error-message__icon` class op een `span` HTML-element.
- De CSS ondersteunt een Form Field Error Message met de `nl-form-field-error-message__content` class op een `label` HTML-element.
- De CSS ondersteunt een Form Field Error Message met de `nl-form-field-error-message__content` class op een `div` HTML-element.
- De CSS ondersteunt een Form Field Error Message met de `nl-form-field-error-message__content` class op een `span` HTML-element.
- De CSS ondersteunt een beknopte Form Field Error Message bestaande uit een enkel HTML element.

### Forced Colors modus

- De Form Field Error Message tekstkleur in Forced Colors modus is `currentColor`.
- De Form Field Error Message icon tekstkleur in Forced Colors modus is `currentColor`.

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
  - `nl-form-field-error-message__icon`
  - `nl-form-field-error-message__content`

- Modifier classes:
  - geen

- HTML classes:
  - geen

### React API

#### Extends

Extends `HTMLAttributes<HTMLDivElement>` voor standaard HTML-attributen en events van een `div` HTML-element.

#### Properties

Alle props uit `HTMLAttributes<HTMLDivElement>` worden doorgestuurd naar het onderliggende `div` HTML-element, zoals het `id` HTML-attribuut.

De volgende props worden expliciet ondersteund:

| Prop        | Type                  | Verplicht | Omschrijving                                                                                                                 |
| ----------- | --------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `children`  | `ReactNode`           | nee       | Inhoud van de content-slot in de vorm van een `p` HTML-element of phrasing content met uitzondering van interactive content. |
| `icon`      | `ReactNode`           | nee       | Inhoud van de icon-slot in de vorm van een `p` HTML-element of phrasing content met uitzondering van interactive content.    |
| `className` | `string`              | nee       | Extra CSS classes naast `nl-form-field-error-message`.                                                                       |
| `ref`       | `Ref<HTMLDivElement>` | nee       | Ref naar het onderliggende `div` HTML-element.                                                                               |
