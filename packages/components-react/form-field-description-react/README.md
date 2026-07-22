<!-- @license CC0-1.0 -->

# Form Field Description

Toont ondersteunende tekst en biedt extra context over de in te vullen informatie.

## Installatie

npm:

```shell
npm install @nl-design-system-candidate/form-field-description-react
```

pnpm:

```shell
pnpm add @nl-design-system-candidate/form-field-description-react
```

yarn:

```shell
yarn add @nl-design-system-candidate/form-field-description-react
```

## Gebruik

Met ingebouwde CSS:

```jsx
import { FormFieldDescription } from '@nl-design-system-candidate/form-field-description-react/css';

<FormFieldDescription id="naam-description">
  Voer je volledige naam in, zoals vermeld op je identiteitsbewijs.
</FormFieldDescription>;
```

Alleen de React component, CSS apart importeren:

```jsx
import { FormFieldDescription } from '@nl-design-system-candidate/form-field-description-react';

<FormFieldDescription id="naam-description">
  Voer je volledige naam in, zoals vermeld op je identiteitsbewijs.
</FormFieldDescription>;
```

### Koppelen aan een invoerveld via `aria-describedby`

Geef de `FormFieldDescription` altijd een `id` en koppel dit via `aria-describedby` aan het bijbehorende invoerveld. Zo kunnen screenreaders de beschrijving voorlezen wanneer het invoerveld focus krijgt.

```jsx
<label htmlFor="naam">Naam</label>
<FormFieldDescription id="naam-description">
  Voer je volledige naam in, zoals vermeld op je identiteitsbewijs.
</FormFieldDescription>
<input id="naam" aria-describedby="naam-description" type="text" />
```

### Disabled state

Gebruik de `disabled` prop wanneer het bijbehorende formulierveld uitgeschakeld is.

```jsx
<FormFieldDescription id="naam-description" disabled>
  Dit veld is momenteel niet beschikbaar.
</FormFieldDescription>
```

### Inhoud van de Form Field Description

De `FormFieldDescription` accepteert platte tekst en phrasing content als `children`, bijvoorbeeld een `<p>` element of inline elementen zoals `<strong>` en `<em>`. Gebruik geen interactive content (zoals links of knoppen) als `children`.

```jsx
<FormFieldDescription id="naam-description">
  <p>Voer je volledige naam in.</p>
</FormFieldDescription>
```

## Props

| Prop       | Beschrijving                                                                                | Type        | Standaard |
| ---------- | ------------------------------------------------------------------------------------------- | ----------- | --------- |
| `id`       | Koppelt de beschrijving via `aria-describedby` aan een invoerveld. Gebruik altijd een `id`. | `string`    | —         |
| `children` | Inhoud van de form field description                                                        | `ReactNode` | —         |
| `disabled` | Geeft aan dat het bijbehorende formulierveld uitgeschakeld is                               | `boolean`   | `false`   |

Naast bovenstaande props accepteert `FormFieldDescription` alle standaard HTML attributen van een `<div>` element.

## Design Tokens

Alle NL Design System componenten zijn white label. Gebruik de Form Field Description design tokens om de stijl aan te passen aan jouw huisstijl. Zie voor meer informatie over design tokens [https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

De tokens voor Form Field Description zijn te vinden in het tokens pakket [`@nl-design-system-candidate/form-field-description-tokens`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-description-tokens).

## Andere implementaties

Wil je Form Field Description gebruiken zonder React? De React component is gebaseerd op
[`@nl-design-system-candidate/form-field-description-css`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-description-css).
