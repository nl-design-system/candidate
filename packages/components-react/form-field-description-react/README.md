<!-- @license CC0-1.0 -->

# Form Field Description React

Shows supporting text and provides extra context about the information to be filled in.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/form-field-description-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/form-field-description-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/form-field-description-react
```

## Usage

With built-in CSS:

```jsx
import { FormFieldDescription } from '@nl-design-system-candidate/form-field-description-react/css';

<FormFieldDescription id="name-description">
  Enter your full name, as shown on your identity document.
</FormFieldDescription>;
```

Only the React component. You still need to import the CSS separately:

```jsx
import { FormFieldDescription } from '@nl-design-system-candidate/form-field-description-react';

<FormFieldDescription id="name-description">
  Enter your full name, as shown on your identity document.
</FormFieldDescription>;
```

### Linking to an input field via `aria-describedby`

Always give the `FormFieldDescription` an `id` and link it via `aria-describedby` to the associated input
field. This allows screen readers to read out the description when the input field receives focus.

```jsx
<div>
  <label htmlFor="name">Name</label>
</div>
<FormFieldDescription id="name-description">
  Enter your full name, as shown on your identity document.
</FormFieldDescription>
<div>
  <input id="name" aria-describedby="name-description" aria-required="true" autocomplete="name" type="text" />
</div>
```

### Disabled state

Use the `disabled` prop when the associated form field is disabled.

```jsx
<div>
  <label htmlFor="name">Name</label>
</div>
<FormFieldDescription id="name-description" disabled>
  Enter your full name, as shown on your identity document.
</FormFieldDescription>
<div>
  <input id="name" aria-describedby="name-description" autocomplete="name" type="text" disabled />
</div>
```

### Content of the Form Field Description

The `FormFieldDescription` accepts plain text and phrasing content as `children`, for example a `<p>`
element or inline elements such as `<strong>` and `<em>`. Do not use interactive content (such as links or
buttons) as `children`.

```jsx
<FormFieldDescription id="name-description">
  <p>Enter your full name.</p>
</FormFieldDescription>
```

### Do not add `tabIndex`

Do not add `tabIndex` to a `FormFieldDescription`. It is informative and should not become part of the
page's tab order. The description is already announced from the associated input field through
`aria-describedby` when the field receives focus.

## Props

| Prop       | Description                                                                         | Type        | Default |
| ---------- | ----------------------------------------------------------------------------------- | ----------- | ------- |
| `id`       | Links the description via `aria-describedby` to an input field. Always use an `id`. | `string`    | —       |
| `children` | Content of the form field description                                               | `ReactNode` | —       |
| `disabled` | Indicates that the associated form field is disabled                                | `boolean`   | `false` |

In addition to the props above, `FormFieldDescription` accepts all standard HTML attributes of a `<div>`
element, and forwards a `ref` to the underlying `<div>` element.

## Design Tokens

All NL Design System components are white label. Use Form Field Description design tokens to ensure it matches your brand styles. For more information about design tokens, see
[https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

See [nldesignsystem.nl/form-field-description/#design-tokens](https://nldesignsystem.nl/form-field-description/#design-tokens) for a full overview of the Form Field Description tokens. These tokens can be found in the tokens package [`@nl-design-system-candidate/form-field-description-tokens`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-description-tokens).

## Other implementations

Want to use Form Field Description without React? Use the CSS and HTML described in the CSS package
[`@nl-design-system-candidate/form-field-description-css`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-description-css).

## Figma, Storybook and more

Read more about the Form Field Description in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/form-field-description](https://nldesignsystem.nl/form-field-description).
