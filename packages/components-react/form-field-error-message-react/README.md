<!-- @license CC0-1.0 -->

# Form Field Error Message

Displays an error message explaining what went wrong and how to resolve it.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/form-field-error-message-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/form-field-error-message-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/form-field-error-message-react
```

## Usage

With built-in CSS:

```jsx
import { FormFieldErrorMessage } from '@nl-design-system-candidate/form-field-error-message-react/css';

<FormFieldErrorMessage id="name-error">The "Name" field is required.</FormFieldErrorMessage>;
```

Only the React component. You still need to import the CSS separately:

```jsx
import { FormFieldErrorMessage } from '@nl-design-system-candidate/form-field-error-message-react';

<FormFieldErrorMessage id="name-error">The "Name" field is required.</FormFieldErrorMessage>;
```

### Linking to an input field via `aria-describedby`

Always give the `FormFieldErrorMessage` an `id` and link it via `aria-describedby` to the associated input
field. This allows screen readers to read out the error message when the input field receives focus.

```jsx
<div>
  <label htmlFor="name">Name</label>
  <FormFieldErrorMessage id="name-error">The "Name" field is required.</FormFieldErrorMessage>
  <input id="name" aria-describedby="name-error" type="text" />
</div>
```

### Realtime validation with `role="alert"`

When the error message is added or updated at the client side, for example after realtime validation, use
`role="alert"` so it's announced immediately.

```jsx
<FormFieldErrorMessage id="name-error" role="alert">
  The "Name" field is required.
</FormFieldErrorMessage>
```

### Do not add `tabIndex`

Do not add `tabIndex` to a `FormFieldErrorMessage`. It is informative and should not become part of the page's tab order. The message is already announced from the associated input field through `aria-describedby` when the field receives focus.

### Content of the Form Field Error Message

The `FormFieldErrorMessage` accepts plain text and phrasing content as `children`, for example a `<p>`
element or inline elements such as `<strong>` and `<em>`. Do not use interactive content (such as links or
buttons) as `children`.

```jsx
<FormFieldErrorMessage id="name-error">
  <p>The "Name" field is required.</p>
</FormFieldErrorMessage>
```

### With an icon

Use the `icon` prop for an optional, decorative icon before the content. Icons are hidden from assistive
technology by default, since the text of the error message already conveys the meaning.

```jsx
<FormFieldErrorMessage
  id="name-error"
  icon={
    <Icon>
      <IconAlertCircle />
    </Icon>
  }
>
  The "Name" field is required.
</FormFieldErrorMessage>
```

## Props

| Prop       | Description                                                                                                           | Type        | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ----------- | ------- |
| `id`       | Links the error message via `aria-describedby` to an input field. Applied to the content element. Always use an `id`. | `string`    | —       |
| `children` | Content of the content element                                                                                        | `ReactNode` | —       |
| `icon`     | Content of the optional icon element, shown before the content                                                        | `ReactNode` | —       |
| `role`     | ARIA role, for example `"alert"` for realtime validation. Applied to the content element.                             | `string`    | —       |

In addition to the props above, `FormFieldErrorMessage` accepts all standard HTML attributes of a `<div>`
element, and forwards a `ref` to the underlying `<div>` element.

## Design Tokens

All NL Design System components are white-label. Use the Form Field Error Message design tokens to adapt
the style to your house style. For more information about design tokens, see
[https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

The tokens for Form Field Error Message can be found in the tokens package
[`@nl-design-system-candidate/form-field-error-message-tokens`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-error-message-tokens).

## Other implementations

Want to use Form Field Error Message without React? Use the CSS and HTML described in
[`@nl-design-system-candidate/form-field-error-message-css`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-error-message-css).
