<!-- @license CC0-1.0 -->

# Button

## Installatie

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/button-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/button-css@1/dist/button.css" />
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/button-css/dist/button.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import '@nl-design-system-candidate/button-css/dist/button.css';
```

## Beschikbare classes

| naam                     | beschrijving                                                                                                                                 |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `.nl-button`             | De hoofd class, te gebruiken op een `<button>` element                                                                                       |
| `.nl-button--primary`    | Maakt van de button [een primary button](https://nl-design-system.github.io/candidate/?path=/docs/button--documentatie#primary-button-1)     |
| `.nl-button--secondarty` | Maakt van de button [een secondary button](https://nl-design-system.github.io/candidate/?path=/docs/button--documentatie#secondary-button-1) |
| `.nl-button--subtle`     | Maakt van de button [een subtle button](https://nl-design-system.github.io/candidate/?path=/docs/button--documentatie#subtle-button-1)       |
| `.nl-button--positive`   | Indicatie van een positief of bevestigend resultaat                                                                                          |
| `.nl-button--negative`   | Indicatie van een negatief resultaat                                                                                                         |
| `.nl-button__icon-start` | Een child element (`<span>`) met een voor aan het begin icoon                                                                                |
| `.nl-button__icon-end`   | Een child element (`<span>`) met een voor aan het eind icoon                                                                                 |

## Beschikbare attributen

De NL Button accepteert alle attributen die een native HTML button ook accepteert.
Zie de [Button MDN pagina](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#attributes)
voor een volledig overzicht.

Er zijn een aantal attributen die extra aandacht vragen:

### Een toggle button met `aria-pressed`

Gebruik `aria-pressed="true"` om aan te geven dat de toggle button ingedrukt is.

### Een disabled button via `aria-disabled`

Hoewel er een native `disabled` attribute bestaat, is het af te raden om deze
te gebruiken. Een button met een `disabled` attribute is niet meer focusbaar
met een toetsenbord of screenreader. Ook niet als er `tabindex="0"` op gezet
wordt.

`aria-disabled="true"` is daarom de aangeraden methode om een button disabled te
maken. De developer heeft vervolgens de mogelijkheid om een passende melding te
tonen wanneer de button ingedrukt wordt.

## Een icoon voor of achter het label

Er kan een icoon voor of achter het label geplaatst worden door een `<span>`
element met de class `nl-button__icon-start` voor of `nl-button__icon-end`
achter het label te plaatsen.

```html
<!-- Een icon voor het label -->
<button class="nl-button">
  <span class="nl-button__icon-start">❤️</span>
  Vind ik leuk!
</button>
```

```html
<!-- Een icon achter het label -->
<button class="nl-button">
  Vind ik leuk!
  <span class="nl-button__icon-end">❤️</span>
</button>
```

### Geformatteerde content in het label in combinatie met een icoon

Als het label formatting bevat, moet het label gewrapped worden in een `<span>`
element. Gebeurd dit niet, dan komt er extra ruimte rond de elementen in het label.

```html
<button class="nl-button">
  <span class="nl-button__icon-start">❤️</span>
  <span>Vind <em>ik</em> leuk!</span>
</button>
```
