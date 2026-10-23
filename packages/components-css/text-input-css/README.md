<!-- @license CC0-1.0 -->

# Text Input CSS

Input field for editing a single line of text.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/text-input-css
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/text-input-css
```

Using yarn

```shell
yarn add @nl-design-system-candidate/text-input-css
```

If you use a CDN, you can import the CSS like this:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/text-input-css/dist/text-input.css"
/>
```

If you don't use a CDN, you can import the CSS from `node_modules/`:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/text-input-css/dist/text-input.css" />
```

If you use CSS imports from JavaScript:

```js
import '@nl-design-system-candidate/text-input-css/dist/text-input.css';
```

If you use SCSS:

```scss
@use '@nl-design-system-candidate/text-input-css/forward.scss';
```

## CSS classes

| name                               | description                                                                                         |
| ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| `.nl-text-input`                   | The main class. Use it on an `<input>` element.                                                     |
| `.nl-text-input__placeholder`      | Placeholder styling for an element that is not an `<input>`. An `<input>` uses `::placeholder`.     |
| `.nl-text-input--invalid`          | Invalid state. Combine it with `aria-invalid="true"`.                                               |
| `.nl-text-input--disabled`         | Disabled state. `<input disabled>` gets this styling without the class.                             |
| `.nl-text-input--read-only`        | Read-only state. `<input readonly>` gets this styling without the class.                            |
| `.nl-text-input--hover`            | Hover state, for tests and documentation only.                                                      |
| `.nl-text-input--focus-visible`    | Focus-visible state, for tests and documentation only.                                              |
| `.nl-text-input--xs`               | Extra small width.                                                                                  |
| `.nl-text-input--sm`               | Small width.                                                                                        |
| `.nl-text-input--md`               | Medium width.                                                                                       |
| `.nl-text-input--lg`               | Large width.                                                                                        |
| `.nl-text-input--xl`               | Extra large width.                                                                                  |
| `.nl-text-input--stretch`          | Full width of the container.                                                                        |
| `.nl-text-input--numeric`          | For numbers, for example with `type="tel"` or `inputmode="numeric"`: all digits have the same size. |
| `.nl-text-input--password`         | For `type="password"`: no ligatures, and a zero with a slash if the font supports it.               |
| `.nl-text-input--password-visible` | For a password that is made visible with `type="text"`: same styling as `--password`.               |
| `.nl-text-input--url`              | For `type="url"` and `type="email"`: no ligatures.                                                  |

Use a relative unit such as `rem` for the `--nl-text-input-{size}-inline-size` design tokens. With a `px` value the input
field does not grow when a user enlarges the text, and the value or placeholder no longer fits.

Do not combine `--invalid` with `--disabled`, and do not combine `--disabled` with `--read-only`.

## HTML classes

Use `nl-html--text-input` or `nl-html--all` on a container to style `<input>` elements for one line of text without
component classes. The states and types are detected automatically:

| detected via                                                                                                                                      | styling       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `[aria-invalid="true"]`                                                                                                                           | `--invalid`   |
| `[readonly]`                                                                                                                                      | `--read-only` |
| `:disabled`                                                                                                                                       | `--disabled`  |
| `[type="password"]`                                                                                                                               | `--password`  |
| `[type="url"]`, `[type="email"]`, `[inputmode="email"]`, `[inputmode="url"]`                                                                      | `--url`       |
| `[pattern="\d*"]`, `[pattern="[0-9]*"]`, `[type="tel"]`, `[type="number"]`, `[inputmode="numeric"]`, `[inputmode="decimal"]`, `[inputmode="tel"]` | `--numeric`   |

```html
<div class="nl-html--text-input">
  <input type="email" autocomplete="email" />
</div>
```

## SCSS mixins

| name                                       | description                                                                                                                     |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `nl-text-input`                            | Styles for the text input                                                                                                       |
| `nl-text-input__placeholder`               | Styles for the placeholder                                                                                                      |
| `nl-text-input--hover`                     | Styles for the hover state                                                                                                      |
| `nl-text-input--focus-visible`             | Styles for the focus-visible state                                                                                              |
| `nl-text-input--invalid`                   | Styles for the invalid state                                                                                                    |
| `nl-text-input--read-only`                 | Styles for the read-only state                                                                                                  |
| `nl-text-input--disabled`                  | Styles for the disabled state                                                                                                   |
| `nl-text-input--forced-colors`             | Styles for Forced Colors mode: shows the thicker state border as a real border, because Forced Colors mode removes `box-shadow` |
| `nl-text-input--forced-colors-disabled`    | Styles for the disabled state in Forced Colors mode                                                                             |
| `nl-text-input--xs` to `nl-text-input--xl` | Styles for the sizes `xs`, `sm`, `md`, `lg` and `xl`                                                                            |
| `nl-text-input--stretch`                   | Styles for the full width of the container                                                                                      |
| `nl-text-input--numeric`                   | Styles for numbers                                                                                                              |
| `nl-text-input--password`                  | Styles for a password                                                                                                           |
| `nl-text-input--password-visible`          | Styles for a visible password                                                                                                   |
| `nl-text-input--url`                       | Styles for a URL or email address                                                                                               |

## Usage

Always link the Text Input to a label.

```html
<label for="name">Name</label>
<input id="name" class="nl-text-input nl-text-input--lg" autocomplete="name" type="text" />
```

### Invalid

```html
<label for="email">Email address</label>
<p id="email-error">Enter an email address in the format name@example.com.</p>
<input
  id="email"
  class="nl-text-input nl-text-input--url nl-text-input--invalid"
  aria-describedby="email-error"
  aria-invalid="true"
  autocomplete="email"
  type="email"
/>
```

### SCSS usage

Import the mixins via `forward` (Sass internally uses `_forward.scss`) and use them in your own SCSS:

```scss
@use '@nl-design-system-candidate/text-input-css/forward.scss' as text-input;

.example-text-input {
  @include text-input.nl-text-input;
}

.example-text-input:disabled {
  @include text-input.nl-text-input--disabled;
}
```

Depending on the tools used, it may be necessary to configure Sass with `loadPaths` so that
`@nl-design-system-candidate/text-input-css` can be found in the `node_modules` folder.
See [Configuring Sass with `loadPaths`](https://github.com/nl-design-system/candidate/tree/main/packages/components-css#configuring-sass-with-loadpaths) for more information.

## Design Tokens

All NL Design System components are white label. Use Text Input design tokens to ensure it matches your brand styles. For more information about design tokens, see
[https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

See [nldesignsystem.nl/text-input/#design-tokens](https://nldesignsystem.nl/text-input/#design-tokens) for a full overview of the Text Input tokens. These tokens can be found in the tokens package [`@nl-design-system-candidate/text-input-tokens`](https://www.npmjs.com/package/@nl-design-system-candidate/text-input-tokens).

## Other implementations

Want to use Text Input with React? Follow the instructions described in the React package
[`@nl-design-system-candidate/text-input-react`](https://www.npmjs.com/package/@nl-design-system-candidate/text-input-react).

Want to use Text Input with other frameworks or vanilla JavaScript? The React component is based on the CSS package
[`@nl-design-system-candidate/text-input-css`](https://www.npmjs.com/package/@nl-design-system-candidate/text-input-css).

## Figma, Storybook and more

Read more about the Text Input in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/text-input](https://nldesignsystem.nl/text-input).
