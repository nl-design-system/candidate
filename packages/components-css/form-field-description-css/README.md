<!-- @license CC0-1.0 -->

# Form Field Description CSS

Shows supporting text and provides extra context about the information to be filled in.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/form-field-description-css
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/form-field-description-css
```

If you use a CDN, you can import the CSS like this:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/form-field-description-css/dist/form-field-description.css"
/>
```

If you don't use a CDN, you can import the CSS from `node_modules/`:

```html
<link
  rel="stylesheet"
  href="node_modules/@nl-design-system-candidate/form-field-description-css/dist/form-field-description.css"
/>
```

If you use CSS imports from JavaScript:

```js
import '@nl-design-system-candidate/form-field-description-css/dist/form-field-description.css';
```

If you use SCSS:

```scss
@use '@nl-design-system-candidate/form-field-description-css/forward.scss';
```

## CSS classes

| name                                   | description                                  |
| -------------------------------------- | -------------------------------------------- |
| `.nl-form-field-description`           | The main class. Use it on a `<div>` element. |
| `.nl-form-field-description--disabled` | For disabled form fields                     |

## SCSS mixins

| name                                  | description                           |
| ------------------------------------- | ------------------------------------- |
| `nl-form-field-description`           | Styles for the form field description |
| `nl-form-field-description--disabled` | Styles for the disabled state         |

## Usage

Place the Form Field Description below the label and before the input field. Give the description element an `id`, and
link it to the form control via `aria-describedby`.

```html
<div>
  <label for="name">Name</label>
</div>
<div id="name-description" class="nl-form-field-description">
  Enter your full name, as shown on your identity document.
</div>
<div>
  <input id="name" aria-describedby="name-description" aria-required="true" autocomplete="name" type="text" />
</div>
```

### Disabled state

Use the modifier `.nl-form-field-description--disabled` when the associated form field is disabled.

```html
<div>
  <label for="name">Name</label>
</div>
<div id="name-description" class="nl-form-field-description nl-form-field-description--disabled">
  This field is currently unavailable.
</div>
<div>
  <input id="name" aria-describedby="name-description" autocomplete="name" type="text" disabled />
</div>
```

### SCSS usage

Import the mixins via `forward` (Sass internally uses `_forward.scss`) and use them in your own SCSS:

```scss
@use '@nl-design-system-candidate/form-field-description-css/forward.scss' as form-field-description;

.example-form-field-description {
  @include form-field-description.nl-form-field-description;
}

.example-form-field-description--disabled {
  @include form-field-description.nl-form-field-description--disabled;
}
```

Depending on the tools used, it may be necessary to configure Sass with `loadPaths` so that
`@nl-design-system-candidate/form-field-description-css` can be found in the `node_modules` folder.
See [Configuring Sass with `loadPaths`](https://github.com/nl-design-system/candidate/tree/main/packages/components-css#configuring-sass-with-loadpaths) for more information.

## Design Tokens

All NL Design System components are white label. Use Form Field Description design tokens to ensure it matches your brand styles. For more information about design tokens, see
[https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

See [nldesignsystem.nl/form-field-description/#design-tokens](https://nldesignsystem.nl/form-field-description/#design-tokens) for a full overview of the Form Field Description tokens. These tokens can be found in the tokens package [`@nl-design-system-candidate/form-field-description-tokens`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-description-tokens).

## Other implementations

Want to use Form Field Description with React? Follow the instructions described in the React package
[`@nl-design-system-candidate/form-field-description-react`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-description-react).

Want to use Form Field Description with other frameworks or vanilla JavaScript? The React component is based on the CSS package
[`@nl-design-system-candidate/form-field-description-css`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-description-css).

## Figma, Storybook and more

Read more about the Form Field Description in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/form-field-description](https://nldesignsystem.nl/form-field-description).
