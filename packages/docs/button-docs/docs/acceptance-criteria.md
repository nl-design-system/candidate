# Acceptatiecriteria voor het maken van de Button component

## Semantiek

Dit zijn de acceptatiecriteria welke HTML elementen en HTML attributen het beste zijn voor deze component.

### Welke HTML elementen het beste zijn voor deze component

- De component is opgemaakt met een `<button>`-element.
- De button kan een of meer iconen bevatten, die bestaan in de vorm van [phrasing content](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content-0).
  - Een icon in de button is gewrapped in een in een `<span>`-element.
- De button bevat inhoud die bestaat in de vorm van [phrasing content](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content-0).
  - De inhoud van de button is gewrapped in een `<span>`-element.

### Welke HTML attributen het beste zijn voor deze component

#### Standaard en algemene HTML-attributen

- Het `type`-attribuut van de button is instelbaar. De default hiervoor is button.
- De component kan een toegankelijke naam krijgen via inhoud, `aria-label`, of `aria-labelledby`.
- De component ondersteunt alle global attributes, zoals `lang` en `dir`.
- Het is mogelijk de button een name te geven en hiermee met een `<form>` te associëren.
- Het is mogelijk de button een `value` te geven.
- De component kan worden gekoppeld aan een formulier buiten het `<form>`-element via het `form`-attribuut.
- De component accepteert alle attributen die beschikbaar zijn op het `HTMLButtonElement`, waaronder:
  - `autofocus`
  - `command`
  - `commandfor`
  - `form`
  - `formaction`
  - `formenctype`
  - `formmethod`
  - `formnovalidate`
  - `formtarget`
  - `popovertarget`
  - `popovertargetaction`

#### Toegankelijkheid en ARIA

- Wanneer de component geen native `<button>` gebruikt, moet deze een `role="button"` krijgen.
- De component kan relaties aangeven via:
  - `aria-controls`
  - `aria-haspopup`
- De uitgeklapte staat van de component kan worden ingesteld via:
  - `aria-expanded`
- De toggle-state van de component kan worden ingesteld via:
  - `aria-pressed`

#### Disabled states

- De component kan worden uitgeschakeld met het HTML-attribuut `disabled`, of `aria-disabled` (waarbij de component focusbaar blijft).

#### Focus & keyboard navigation

- De component is focusbaar via Tab wanneer `tabindex` niet is aangepast.
- Het is mogelijk de `tabindex` op de button te zetten.
  - Wanneer `tabindex` op -1 staat is de button niet focusbaar via `Tab`.
  - Wanneer `tabindex` op 0 staat is de button focusbaar in de normale tabvolgorde.

### Event-attributen en interactie

De button ondersteunt event handler attributen, waaronder:

- `onclick`
- `onmousedown`
- `onmouseup`
- `onkeydown`
- `onkeyup`
- `onfocus`
- `onblur`

Het moet mogelijk zijn dat een bezoeker met een enkele aanwijzer (zoals een muis of touch) het voltooien van de actie kan annuleren door buiten het element te bewegen en de aanwijzer dan pas weer los te laten/op te tillen. Gebruik hiervoor het click-event. Dit is een apparaatonafhankelijke methode. Zo activeert de actie niet als de bezoeker de aanwijzer indrukt, maar pas als de bezoeker de aanwijzer weer loslaat.

- De component kan worden geactiveerd met een linker muisklik.
- Het toetsenbordgedrag van de component moet exact overeenkomen met dat van een native `<button>`.
  - De component kan worden geactiveerd met de `Enter`-toets op `keydown`.
  - De component kan worden geactiveerd met de `spatiebalk` op `keyup`.
  - De `spatiebalk` activatie is cancelable door `Tab` te doen en focus te verplaatsen vooraf aan keyup.
- De component ondersteunt `pointer-gedrag` waarbij een klik geannuleerd wordt wanneer de gebruiker de aanwijzer indrukt, buiten de component beweegt en pas dan loslaat.
