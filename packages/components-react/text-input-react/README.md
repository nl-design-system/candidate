<!-- @license CC0-1.0 -->

# Text Input React

Input field for editing a single line of text.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/text-input-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/text-input-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/text-input-react
```

## Usage

With built-in CSS:

```jsx
import { TextInput } from '@nl-design-system-candidate/text-input-react/css';

<TextInput id="name" autoComplete="name" />;
```

Only the React component. You still need to import the CSS separately:

```jsx
import { TextInput } from '@nl-design-system-candidate/text-input-react';

<TextInput id="name" autoComplete="name" />;
```

### Always link a label

Give the `TextInput` an `id` and link a label to it via `htmlFor`, so the input field has an accessible name.
Use `autoComplete` when the field asks for information about the user, such as a name or email address.

```jsx
<label htmlFor="name">Name</label>
<TextInput id="name" autoComplete="name" />
```

### Type

Use the `type` prop for the kind of text. The `TextInput` adds the matching CSS class automatically:

| `type`            | CSS class                 |
| ----------------- | ------------------------- |
| `text` (default)  | —                         |
| `email` and `url` | `nl-text-input--url`      |
| `password`        | `nl-text-input--password` |
| `tel`             | `nl-text-input--numeric`  |
| `search`          | —                         |

The `nl-text-input--numeric` class is also added for `inputMode="numeric"`, `inputMode="decimal"`, `inputMode="tel"`,
`pattern="\d*"` and `pattern="[0-9]*"`. The `nl-text-input--url` class is also added for `inputMode="email"` and
`inputMode="url"`.

`number`, `date`, `month`, `week`, `time` and `datetime-local` are supported but not recommended. Types that are not for
a line of text, such as `checkbox` or `file`, are not supported.

```jsx
<label htmlFor="postal-code">Postal code</label>
<TextInput id="postal-code" autoComplete="postal-code" size="xs" />
```

### Size

Use the `size` prop to make the width of the input field match the expected length of the value: `xs`, `sm`, `md`,
`lg`, `xl` or `stretch` for the full width of the container. The `size` prop replaces the `size` HTML attribute.

```jsx
<TextInput id="email" autoComplete="email" size="lg" type="email" />
```

### Invalid

Use `invalid` to show the invalid state. It also sets `aria-invalid="true"`. Link the error message via
`aria-describedby`.

```jsx
<label htmlFor="email">Email address</label>
<p id="email-error">Enter an email address in the format name@example.com.</p>
<TextInput id="email" aria-describedby="email-error" autoComplete="email" invalid type="email" />
```

Only use `aria-invalid` without `invalid` when you need to manage the accessible invalid state separately from the
visual state, for example `aria-invalid="spelling"`.

### Disabled and read-only

Use `disabled` for an input field that cannot be used, and `readOnly` for a value that can be read and copied but not
changed. `disabled` cannot be combined with `readOnly` or `invalid`: when `disabled` is set, `readOnly` and `invalid`
are ignored.

## Props

| Prop       | Description                                                                                       | Type                                                                                                                                     | Default  |
| ---------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `type`     | The `type` HTML attribute. Adds the `--url`, `--password` or `--numeric` class.                   | `'text' \| 'email' \| 'url' \| 'tel' \| 'search' \| 'password' \| 'number' \| 'date' \| 'month' \| 'week' \| 'time' \| 'datetime-local'` | `'text'` |
| `size`     | Width of the input field.                                                                         | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'stretch'`                                                                                      | —        |
| `invalid`  | Shows the invalid state and sets `aria-invalid="true"`. Ignored when `disabled` is set.           | `boolean`                                                                                                                                | —        |
| `disabled` | Disables the input field and adds the `--disabled` class.                                         | `boolean`                                                                                                                                | —        |
| `readOnly` | Makes the value read-only and adds the `--read-only` class. Ignored when `disabled` is set.       | `boolean`                                                                                                                                | —        |
| `required` | Sets the `required` HTML attribute.                                                               | `boolean`                                                                                                                                | —        |
| `dir`      | Text direction of the value. Defaults to `auto`, so a value in another script is shown correctly. | `'auto' \| 'ltr' \| 'rtl'`                                                                                                               | `'auto'` |

In addition to the props above, `TextInput` accepts all standard HTML attributes of an `<input>` element (such as `id`,
`name`, `value`, `placeholder` and `autoComplete`), and forwards a `ref` to the underlying `<input>` element.

## Design Tokens

All NL Design System components are white label. Use Text Input design tokens to ensure it matches your brand styles. For more information about design tokens, see
[https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

See [nldesignsystem.nl/text-input/#design-tokens](https://nldesignsystem.nl/text-input/#design-tokens) for a full overview of the Text Input tokens. These tokens can be found in the tokens package [`@nl-design-system-candidate/text-input-tokens`](https://www.npmjs.com/package/@nl-design-system-candidate/text-input-tokens).

## Other implementations

Want to use Text Input without React? Use the CSS and HTML described in the CSS package
[`@nl-design-system-candidate/text-input-css`](https://www.npmjs.com/package/@nl-design-system-candidate/text-input-css).

## Figma, Storybook and more

Read more about the Text Input in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/text-input](https://nldesignsystem.nl/text-input).
