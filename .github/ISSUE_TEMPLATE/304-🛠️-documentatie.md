---
name: Kernteam - 🛠️ Documentatie
about: De component documentatie van de beschikbare varianten en APIs is te vinden op de website, op npm en in Storybook voor developers en in Figma voor designers
title: '{component-name} - 🛠️ Documentatie'
labels:
  - 🛠️ Candidate Ontwikkelfase
  - documentation
  - frontend
  - Figma
type: Task
---

## 🛠️ Documentatie

- [ ] Documenteer de React component voor developers
- [ ] Documenteer de CSS component voor developers
- [ ] Documenteer de component op de website
- [ ] Documenteer de component in Figma voor designers
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Documenteer de React component voor developers

Zorg dat de `README.md` genoeg informatie bevat voor developers om aan de slag te gaan. Omdat deze op npmjs.org wordt gepubliceerd maken we deze documentatie in het engels beschikbaar.

In de stap "Voorbereidingsfase - Keywords en aliassen - Maak de packages beschikbaar voor de nieuwe Candidate component" is de basis component docs gegenereerd. Hier moet je de volgende dingen aan uitbreiden.

#### 1. Breid de code snippets uit in Usage

In "Usage", breid de code snippets uit met voorbeelden. Je kunt hiervoor dit volgende template aanhouden:

````md
...

## Usage

If you want the React component with styles

```jsx
import { {component} } from '@nl-design-system-candidate/{component}-react/css';

{Code used in Default Story};
```

If you just want the React component and import the styles separately

```jsx
import { {component} } from '@nl-design-system-candidate/{component}-react';

{React used in Default Story};
```

...
````

Voorbeeld:

````md
...

## Usage

If you want the React component with styles

```jsx
import { Button } from '@nl-design-system-candidate/button-react/css';

<Button>Click here!</Button>;
```

If you just want the React component and import the styles separately

```jsx
import { Button } from '@nl-design-system-candidate/button-react';

<Button>Click here!</Button>;
```

...
````

#### 2. Voeg Variants toe na Usage

Na "Usage", voeg het kopje "Variants" toe. Je kunt hiervoor dit volgende template gebruiken:

````md
...

## Variants

### VariantX

{Description of the variant and why it exists}

```jsx
{React used in VariantX Story}
```

...
````

Voorbeeld:

````md
...

## Variants

### Primary Button

Button that indicates a primary action. It is the most logical choice in a flow. Use primary buttons sparingly. Too many primary buttons on the screen can be confusing for the user. Optionally, a hint can be provided.

```jsx
<Button label="Primary Button" purpose="primary" />
```

#### Primary Button with hint="positive"

Indicates a positive or successful outcome. For example, an action to create something.

```jsx
<Button hint="positive" label="Send form" purpose="primary" />
```

...
````

### Documenteer de CSS component voor developers

Zorg dat de `README.md` genoeg informatie bevat voor developers om aan de slag te gaan. Omdat deze op npmjs.org wordt gepubliceerd maken we deze documentatie in het engels beschikbaar.

In de stap "Voorbereidingsfase - Keywords en aliassen - Maak de packages beschikbaar voor de nieuwe Candidate component" is de basis component docs gegenereerd. Hier moet je de volgende dingen aan uitbreiden:

```md
...

## Beschikbare classes

| naam | beschrijving |
| ---- | ------------ |
|      |              |

## Beschikbare attributen

...
```

Voorbeeld:

````md
...

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

...
````

### Documenteer de component op de website

Zorg dat de component makkelijk gevonden kan worden door de component pagina aan te vullen met alle beschikbare informatie die bij Candidate beschikbaar is geworden. Kijk hiervoor naar de andere Candidate component pagina's en zorg dat deze consistent is.

<!-- TODO: breid deze documentatie uit wanneer deze stap opnieuw word uitgevoerd -->

### Documenteer de component in Figma voor designers

Zorg dat de component makkelijk gebruikt kan worden door designers door de varianten direct in Figma te beschrijven en/of een link naar de documentatie op nldesignsystem.nl te plaatsen.

Zorg dat alle design beslissingen die op de component van toepassing zichtbaar zijn.

<!-- TODO: breid deze documentatie uit wanneer deze stap opnieuw word uitgevoerd -->

🚩 Checkpoint
🛠️ Documentatie
