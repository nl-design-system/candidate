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

<FormFieldErrorMessage contentId="name-error">The "Name" field is required.</FormFieldErrorMessage>;
```

Only the React component. You still need to import the CSS separately:

```jsx
import { FormFieldErrorMessage } from '@nl-design-system-candidate/form-field-error-message-react';

<FormFieldErrorMessage contentId="name-error">The "Name" field is required.</FormFieldErrorMessage>;
```

### Linking to an input field via `aria-describedby`

Always give the `FormFieldErrorMessage` a `contentId` and link it via `aria-describedby` to the associated
input field. This allows screen readers to read out the error message when the input field receives
focus. Use `contentId` rather than `id`: `id` sets the `id` attribute of the outer wrapper element, while
`contentId` places it specifically on the content element that holds the error text.

```jsx
<div>
  <div>
    <label htmlFor="name">Name</label>
  </div>
  <FormFieldErrorMessage contentId="name-error">The "Name" field is required.</FormFieldErrorMessage>
  <div>
    <input id="name" aria-describedby="name-error" aria-invalid="true" type="text" />
  </div>
</div>
```

### Realtime validation with `contentRole="alert"`

Use `contentRole="alert"` to make screen readers announce the error message immediately when it appears, without waiting for the input to receive focus. This is useful for inline validation that triggers while the user is still filling in the form.

```jsx
<FormFieldErrorMessage contentId="name-error" contentRole="alert">
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
<FormFieldErrorMessage contentId="name-error">
  <p>The "Name" field is required.</p>
</FormFieldErrorMessage>
```

### With an icon

Use the `icon` prop for an optional, decorative icon before the content. Icons are hidden from assistive
technology by default, since the text of the error message already conveys the meaning.

```jsx
import { Icon } from '@example/icon-react';
import { IconAlertCircle } from '@example/icons';

<FormFieldErrorMessage
  contentId="name-error"
  icon={
    <Icon>
      <IconAlertCircle />
    </Icon>
  }
>
  The "Name" field is required.
</FormFieldErrorMessage>;
```

## Props

| Prop          | Description                                                                                                                      | Type        | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------- |
| `contentId`   | Links the error message via `aria-describedby` to an input field. Applied to the content element, not the root. Always set this. | `string`    | —       |
| `contentRole` | ARIA role, for example `"alert"` for realtime validation. Applied to the content element, not the root.                          | `string`    | —       |
| `children`    | Content of the content element                                                                                                   | `ReactNode` | —       |
| `icon`        | Content of the optional icon element, shown before the content                                                                   | `ReactNode` | —       |

In addition to the props above, `FormFieldErrorMessage` accepts all standard HTML attributes of a `<div>`
element (including `id` and `role`, applied to the root element, not the content element), and forwards a
`ref` to the underlying root `<div>` element.

## Design Tokens

All NL Design System components are white-label. Use the Form Field Error Message design tokens to adapt
the style to your house style. For more information about design tokens, see
[https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

The tokens for Form Field Error Message can be found in the tokens package
[`@nl-design-system-candidate/form-field-error-message-tokens`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-error-message-tokens).

## Other implementations

Want to use Form Field Error Message without React? Use the CSS and HTML described in
[`@nl-design-system-candidate/form-field-error-message-css`](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-error-message-css).
