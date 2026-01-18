---
name: Kernteam - 🛠️ Documentatie
about: De component documentatie van de beschikbare varianten en APIs is te vinden op de website, op npm en in Storybook voor developers en in Figma voor designers
title: '{component-name} - 🛠️ Documentatie'
labels:
  - 🛠️ Candidate Ontwikkelfase
  - documentation
  - frontend
---

## 🛠️ Documentatie

- [ ] Documenteer de React component voor developers
- [ ] Documenteer de CSS component voor developers
- [ ] Documenteer de component op de website
- [ ] Documenteer de component in Figma voor designers
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Documenteer de React component voor developers

Zorg dat de `README.md` genoeg informatie bevat voor developers om aan de slag te gaan. Omdat deze op npmjs.org wordt gepubliceerd maken we deze documentatie in het engels beschikbaar.

Je kunt hiervoor dit volgende template gebruiken

````md
<!-- @license CC0-1.0 -->

# {component} React

{translation of the component description we use on the website}

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/{component}-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/{component}-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/{component}-react
```

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

## Variants

### VariantX

{Description of the variant and why it exists}

```jsx
{React used in VariantX Story}
```

## Design Tokens

All NL Design System components are white label. Use {component} design tokens to ensure it matches your brand styles. [https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

The tokens used for {component} can be found in the tokens documentation [@nl-design-system-candidate/{component}-tokens](https://www.npmjs.com/package/@nl-design-system-candidate/{component}-tokens).

## Other implementations

Want to use the {component} with other frameworks or vanilla JavaScript? The React component is based on
[@nl-design-system-candidate/{component}-css](https://www.npmjs.com/package/@nl-design-system-candidate/{component}-css).

## Figma, Storybook and more

Read more about the {component} in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/{component}](https://nldesignsystem.nl/{component}).
````

### Documenteer de CSS component voor developers

Zorg dat de `README.md` genoeg informatie bevat voor developers om aan de slag te gaan. Omdat deze op npmjs.org wordt gepubliceerd maken we deze documentatie in het engels beschikbaar.

<!-- TODO: breid deze documentatie uit wanneer deze stap opnieuw word uitgevoerd -->

### Documenteer de component op de website

Zorg dat de component makkelijk gevonden kan worden door de component pagina aan te vullen met alle beschikbare informatie die bij Candidate beschikbaar is geworden. Kijk hiervoor naar de andere Candidate component pagina's en zorg dat deze consistent is.

<!-- TODO: breid deze documentatie uit wanneer deze stap opnieuw word uitgevoerd -->

### Documenteer de component in Figma voor designers

Zorg dat de component makkelijk gebruikt kan worden door designers door de varianten direct in Figma te beschrijven en/of een link naar de documentatie op nldesignsystem.nl te plaatsen.

Zorg dat alle design beslissingen die op de component van toepassing zichtbaar zijn.

<!-- TODO: breid deze documentatie uit wanneer deze stap opnieuw word uitgevoerd -->

🚩 Checkpoint
🛠️ Documentatie
