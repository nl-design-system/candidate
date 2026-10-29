<!-- @license CC0-1.0 -->

# Form Field Label React

Text next to an input field that asks for specific information, or a short description of an option to choose.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/form-field-label-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/form-field-label-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/form-field-label-react
```

## Usage

With built-in CSS:

```jsx
import { FormFieldLabel } from '@nl-design-system-candidate/form-field-label-react/css';

<FormFieldLabel htmlFor="postal-code">Postal code</FormFieldLabel>;
```

Only the React component. You still need to import the CSS separately:

```jsx
import { FormFieldLabel } from '@nl-design-system-candidate/form-field-label-react';

<FormFieldLabel htmlFor="postal-code">Postal code</FormFieldLabel>;
```

### Linking to an input field via `htmlFor`

Always link the `FormFieldLabel` to its input field via `htmlFor`, using the `id` of the input field. The text of
the label becomes the accessible name of the input field, so screen readers read out the label when the input
field receives focus. Clicking the label moves focus to the input field.

```jsx
<div>
  <FormFieldLabel htmlFor="postal-code">Postal code</FormFieldLabel>
  <div>
    <input id="postal-code" type="text" autoComplete="postal-code" />
  </div>
</div>
```

### Radio button, checkbox or switch with `type="option"`

Use `type="option"` for the label of a radio button, checkbox or switch, and pass the input via the `input` prop.
The input is placed inside the `label` element, before the text, so `htmlFor` is not needed. `input` is required
with `type="option"` and not allowed with other values of `type`.

```jsx
<FormFieldLabel type="option" input={<input type="checkbox" name="newsletter" />}>
  Subscribe to the newsletter
</FormFieldLabel>
```

A Form Field Description or Form Field Error Message for an option goes below the `FormFieldLabel`, because the
input is inside the label.

```jsx
<div>
  <FormFieldLabel type="option" input={<input type="checkbox" name="terms" aria-describedby="terms-description" />}>
    I agree to the terms
  </FormFieldLabel>
  <FormFieldDescription id="terms-description">You can always read the terms in your account.</FormFieldDescription>
</div>
```

### Disabled state

Use `disabled` to style the label for a disabled input field. `disabled` only changes the styling of the label, so
also put the `disabled` attribute on the input itself.

```jsx
<div>
  <FormFieldLabel htmlFor="postal-code" disabled>
    Postal code
  </FormFieldLabel>
  <div>
    <input id="postal-code" type="text" disabled />
  </div>
</div>
```

```jsx
<FormFieldLabel type="option" input={<input type="checkbox" name="newsletter" disabled />} disabled>
  Subscribe to the newsletter
</FormFieldLabel>
```

### Inside a heading with `type="inherit"`

Use `type="inherit"` when the label is placed inside a heading, for example when the question is also the heading
of the page. The label then uses the color and typography of the heading. `type="inherit"` cannot be combined with
`disabled` or `input`.

```jsx
<div>
  <h1>
    <FormFieldLabel htmlFor="name" type="inherit">
      What is your name?
    </FormFieldLabel>
  </h1>
  <div>
    <input id="name" type="text" autoComplete="name" />
  </div>
</div>
```

### Do not add `tabIndex`

Do not add `tabIndex` to a `FormFieldLabel`. The associated input field is already focusable, and the label should
not become part of the page's tab order.

### Content of the Form Field Label

The `FormFieldLabel` accepts plain text and phrasing content as `children`, for example inline elements such as
`<span>` and `<abbr>`. Do not use interactive content (such as links or buttons) or headings as `children`.

```jsx
<FormFieldLabel htmlFor="email">
  Email address <span>(optional)</span>
</FormFieldLabel>
```

## Props

| Prop       | Description                                                                                                           | Type                    | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------- |
| `children` | Content of the label: phrasing content, excluding interactive content. Required.                                      | `ReactNode`             | —       |
| `type`     | `"option"` for a radio button, checkbox or switch. `"inherit"` to use the color and typography of the parent element. | `'option' \| 'inherit'` | —       |
| `input`    | The radio button, checkbox or switch inside the label. Required with `type="option"`, otherwise not allowed.          | `ReactNode`             | —       |
| `disabled` | Styles the label for a disabled input field. Not allowed with `type="inherit"`.                                       | `boolean`               | —       |

In addition to the props above, `FormFieldLabel` accepts all standard HTML attributes of a `<label>` element
(including `htmlFor` and `className`), and forwards a `ref` to the underlying `<label>` element.

## Design Tokens

All NL Design System components are white label. Use Form Field Label design tokens to ensure it matches your brand styles. For more information about design tokens, see
[https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

See [nldesignsystem.nl/form-field-label/#design-tokens](https://nldesignsystem.nl/form-field-label/#design-tokens) for a full overview of the Form Field Label tokens. These tokens can be found in the tokens package [`@nl-design-system-candidate/form-field-label-tokens`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-label-tokens).

## Other implementations

Want to use Form Field Label without React? Use the CSS and HTML described in the CSS package
[`@nl-design-system-candidate/form-field-label-css`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-label-css).

## Figma, Storybook and more

Read more about the Form Field Label in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/form-field-label](https://nldesignsystem.nl/form-field-label).
