<!-- @license CC0-1.0 -->

# Form Field Description

Toont ondersteunende tekst en biedt extra context over de in te vullen informatie.

## Installatie

Using npm

```shell
npm install @nl-design-system-candidate/form-field-description-css
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/form-field-description-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/form-field-description-css@1/dist/form-field-description.css"
/>
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link
  rel="stylesheet"
  href="node_modules/@nl-design-system-candidate/form-field-description-css/dist/form-field-description.css"
/>
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import '@nl-design-system-candidate/form-field-description-css/dist/form-field-description.css';
```

Als je SCSS gebruikt:

```scss
@use '@nl-design-system-candidate/form-field-description-css/forward';
```

## Beschikbare classes

| naam                                   | beschrijving                                        |
| -------------------------------------- | --------------------------------------------------- |
| `.nl-form-field-description`           | De hoofd class, te gebruiken op een `<div>` element |
| `.nl-form-field-description--disabled` | Voor uitgeschakelde formuliervelden                 |

## Beschikbare mixins

| naam                                  | beschrijving                          |
| ------------------------------------- | ------------------------------------- |
| `nl-form-field-description`           | Styles voor de form field description |
| `nl-form-field-description--disabled` | Styles voor de disabled state         |

## Gebruik

Plaats de Form Field Description onder het label en voor het invoerveld.

```html
<div class="nl-form-field-description">Voer je volledige naam in, zoals vermeld op je identiteitsbewijs.</div>
```

### Disabled state

Gebruik de modifier `.nl-form-field-description--disabled` wanneer het bijbehorende formulierveld uitgeschakeld is.

```html
<div class="nl-form-field-description nl-form-field-description--disabled">Dit veld is momenteel niet beschikbaar.</div>
```

### SCSS gebruik

Importeer de mixins via `_forward.scss` en gebruik ze in je eigen SCSS:

```scss
@use '@nl-design-system-candidate/form-field-description-css/forward' as form-field-description;

.example-form-field-description {
  @include form-field-description.nl-form-field-description;
}

.example-form-field-description--disabled {
  @include form-field-description.nl-form-field-description--disabled;
}
```

Afhankelijk van de gebruikte tools kan het nodig zijn om Sass te configureren met `loadPaths` zodat
`@nl-design-system-candidate/form-field-description-css` gevonden kan worden in de `node_modules` folder.
Zie [Sass configureren met `loadPaths`](https://github.com/nl-design-system/candidate/tree/main/packages/components-css#sass-configureren-met-loadpaths) voor meer informatie.
