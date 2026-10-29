<!-- @license CC0-1.0 -->

# Form Field Label CSS

Text next to a form field that asks for specific information, or a short description of an option to choose.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/form-field-label-css
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/form-field-label-css
```

Using yarn

```shell
yarn add @nl-design-system-candidate/form-field-label-css
```

If you use a CDN, you can import the CSS like this:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/form-field-label-css/dist/form-field-label.css"
/>
```

If you don't use a CDN, you can import the CSS from `node_modules/`:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/form-field-label-css/dist/form-field-label.css" />
```

If you use CSS imports from JavaScript:

```js
import '@nl-design-system-candidate/form-field-label-css/dist/form-field-label.css';
```

If you use SCSS:

```scss
@use '@nl-design-system-candidate/form-field-label-css/forward.scss';
```

## CSS classes

| name                             | description                                                                                     |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| `.nl-form-field-label`           | The main class. Use it on a `<label>` element. A `<div>` or `<span>` element is also supported. |
| `.nl-form-field-label--option`   | For a label that contains a radio button, checkbox or switch                                    |
| `.nl-form-field-label--disabled` | For the label of a disabled form field                                                          |
| `.nl-form-field-label--inherit`  | Inherits the text styles of the parent element, for example inside a heading                    |

### Valid combinations

| configuration                                                                    | valid | note                                        |
| -------------------------------------------------------------------------------- | :---: | ------------------------------------------- |
| `nl-form-field-label`                                                            |  ✅   |                                             |
| `nl-form-field-label nl-form-field-label--disabled`                              |  ✅   |                                             |
| `nl-form-field-label nl-form-field-label--option`                                |  ✅   |                                             |
| `nl-form-field-label nl-form-field-label--option nl-form-field-label--disabled`  |  ✅   |                                             |
| `nl-form-field-label nl-form-field-label--inherit`                               |  ✅   |                                             |
| `nl-form-field-label nl-form-field-label--inherit nl-form-field-label--disabled` |  ❌   | Don't combine `--inherit` with `--disabled` |
| `nl-form-field-label nl-form-field-label--inherit nl-form-field-label--option`   |  ❌   | Don't combine `--inherit` with `--option`   |

## SCSS mixins

| name                                          | description                                                  |
| --------------------------------------------- | ------------------------------------------------------------ |
| `nl-form-field-label`                         | Styles for the form field label                              |
| `nl-form-field-label--option`                 | Styles for a label that contains a radio, checkbox or switch |
| `nl-form-field-label--disabled`               | Styles for the disabled state                                |
| `nl-form-field-label--inherit`                | Styles to inherit the text styles of the parent element      |
| `nl-form-field-label--forced-colors`          | Styles for forced colors mode                                |
| `nl-form-field-label--forced-colors-disabled` | Styles for the disabled state in forced colors mode          |

## Usage

Link the Form Field Label to the form control with the `for` attribute and the `id` of the form control. Don't put a
`tabindex` on the label: the form control receives focus, not the label.

```html
<label class="nl-form-field-label" for="name">Name</label> <input id="name" autocomplete="name" type="text" />
```

### Option

Use the modifier `.nl-form-field-label--option` when the label contains a radio button, checkbox or switch.

```html
<label class="nl-form-field-label nl-form-field-label--option">
  <input type="checkbox" name="newsletter" />
  Subscribe to the newsletter
</label>
```

### Disabled state

Use the modifier `.nl-form-field-label--disabled` when the associated form field is disabled.

```html
<label class="nl-form-field-label nl-form-field-label--disabled" for="name">Name</label>
<input id="name" autocomplete="name" type="text" disabled />
```

```html
<label class="nl-form-field-label nl-form-field-label--option nl-form-field-label--disabled">
  <input type="checkbox" name="newsletter" disabled />
  Subscribe to the newsletter
</label>
```

### Inherit

Use the modifier `.nl-form-field-label--inherit` when the label is placed inside an element whose text styles it should
take over, for example a heading.

```html
<h1>
  <label class="nl-form-field-label nl-form-field-label--inherit" for="question">What is your name?</label>
</h1>
<input id="question" autocomplete="name" type="text" />
```

### Without CSS classes

The package also contains styles for a `<label>` element without CSS classes. The option, disabled and inherit
variants are applied automatically:

- **Option:** a `<label>` that contains an `<input type="checkbox">` or `<input type="radio">`.
- **Disabled:** a `<label>` that contains a disabled `<input type="checkbox">` or `<input type="radio">`.
- **Inherit:** a `<label>` inside an `<h1>` to `<h6>` element.

Use `html/form-field-label.css` to style the `<label>` elements inside an element with the class `nl-html--all` or
`nl-html--form-field-label`:

```js
import '@nl-design-system-candidate/form-field-label-css/dist/html/form-field-label.css';
```

```html
<form class="nl-html nl-html--form-field-label">
  <label for="name">Name</label>
  <input id="name" autocomplete="name" type="text" />

  <label>
    <input type="checkbox" name="newsletter" />
    Subscribe to the newsletter
  </label>
</form>
```

Use `vanilla/form-field-label.css` to style every `<label>` element on the page:

```js
import '@nl-design-system-candidate/form-field-label-css/dist/vanilla/form-field-label.css';
```

### SCSS usage

Import the mixins via `forward` (Sass internally uses `_forward.scss`) and use them in your own SCSS:

```scss
@use '@nl-design-system-candidate/form-field-label-css/forward.scss' as nl-form-field-label;

.example-form-field-label {
  @include nl-form-field-label.nl-form-field-label;
}

.example-form-field-label--option {
  @include nl-form-field-label.nl-form-field-label--option;
}

.example-form-field-label--disabled {
  @include nl-form-field-label.nl-form-field-label--disabled;
}

.example-form-field-label--inherit {
  @include nl-form-field-label.nl-form-field-label--inherit;
}
```

To style `<label>` elements without CSS classes in your own SCSS, use the `nl-html--form-field-label` mixin:

```scss
@use '@nl-design-system-candidate/form-field-label-css/vanilla/mixin.scss' as nl-form-field-label;

.example-form {
  @include nl-form-field-label.nl-html--form-field-label;
}
```

Depending on the tools used, it may be necessary to configure Sass with `loadPaths` so that
`@nl-design-system-candidate/form-field-label-css` can be found in the `node_modules` folder.
See [Configuring Sass with `loadPaths`](https://github.com/nl-design-system/candidate/tree/main/packages/components-css#configuring-sass-with-loadpaths) for more information.

## Forced colors mode

In forced colors mode, the text color of the Form Field Label is `currentColor`. The text color of the disabled variant
is `GrayText`.

## Design Tokens

All NL Design System components are white label. Use Form Field Label design tokens to ensure it matches your brand styles. For more information about design tokens, see
[https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

See [nldesignsystem.nl/form-field-label/#design-tokens](https://nldesignsystem.nl/form-field-label/#design-tokens) for a full overview of the Form Field Label tokens. These tokens can be found in the tokens package [`@nl-design-system-candidate/form-field-label-tokens`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-label-tokens).

## Other implementations

Want to use Form Field Label with React? Follow the instructions described in the React package
[`@nl-design-system-candidate/form-field-label-react`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-label-react).

Want to use Form Field Label with other frameworks or vanilla JavaScript? The React component is based on the CSS package
[`@nl-design-system-candidate/form-field-label-css`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-label-css).

## Figma, Storybook and more

Read more about the Form Field Label in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/form-field-label](https://nldesignsystem.nl/form-field-label).
