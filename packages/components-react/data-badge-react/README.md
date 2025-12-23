<!-- @license CC0-1.0 -->

# Data Badge React

Displayes a label with additional information, such as a category or a property.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/data-badge-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/data-badge-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/data-badge-react
```

## Usage

If you want the React component with styles

```jsx
import { DataBadge } from '@nl-design-system-candidate/data-badge-react/css';
```

If you just want the React component and import the styles separately

```jsx
import { DataBadge } from '@nl-design-system-candidate/data-badge-react';
```

## Variants

### Data Badge with "value"

Uses a `<data>` element with a `value` attribute to specify a machine-readable translation of the badge. For example this Data Badge associates the content with a product number in a database.

```jsx
<DataBadge value="42">Pink Peaches</DataBadge>
```

### Data Badge with "dateTime"

Uses a `<time>` element with a `datetime` attribute to specify a machine-readable translation for a time- or date-related value of the data badge.

```jsx
<DataBadge dateTime="2026-01-01T00:00:00+01:00">Thursday, January 1, 2026 at 01:00:00</DataBadge>
```

## Design Tokens

All NL Design System components are white label. Use Data Badge design tokens to ensure it matches your brand styles. See [nldesignsystem.nl/data-badge/#design-tokens](https://nldesignsystem.nl/data-badge/#design-tokens) for a full overview.

These tokens are also documented in [@nl-design-system-candidate/data-badge-tokens](https://www.npmjs.com/package/@nl-design-system-candidate/data-badge-tokens).

## Other implementations

Want to use the Data Badge with other frameworks or vanilla JavaScript? The React component is based on
[@nl-design-system-candidate/data-badge-css](https://www.npmjs.com/package/@nl-design-system-candidate/data-badge-css).

## Figma, Storybook and more

Read more about the Data Badge and the accessibility guidelines in Dutch and find links to other resources like Figma and Storybook on [nldesignsystem.nl/data-badge](https://nldesignsystem.nl/data-badge).
