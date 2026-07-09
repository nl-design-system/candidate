<!-- @license CC0-1.0 -->

# Form Field Description

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
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/form-field-description-css@1/dist/form-field-description.css"
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

## Available classes

| name                                   | description                                     |
| -------------------------------------- | ----------------------------------------------- |
| `.nl-form-field-description`           | The main class, to be used on a `<div>` element |
| `.nl-form-field-description--disabled` | For disabled form fields                        |

## Available mixins

| name                                  | description                           |
| ------------------------------------- | ------------------------------------- |
| `nl-form-field-description`           | Styles for the form field description |
| `nl-form-field-description--disabled` | Styles for the disabled state         |

## Usage

Place the Form Field Description below the label and before the input field.

```html
<div class="nl-form-field-description">Enter your full name, as shown on your identity document.</div>
```

### Disabled state

Use the modifier `.nl-form-field-description--disabled` when the associated form field is disabled.

```html
<div class="nl-form-field-description nl-form-field-description--disabled">This field is currently unavailable.</div>
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
