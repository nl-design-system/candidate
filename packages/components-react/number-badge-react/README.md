<!-- @license CC0-1.0 -->

# Number Badge React

Displays a small label that draws attention and informs about a quantity.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/number-badge-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/number-badge-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/number-badge-react
```

## Usage

If you want the React component with styles

```jsx
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react/css';

<NumberBadge>42</NumberBadge>;
```

If you just want the React component and import the styles separately

```jsx
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react';

<NumberBadge>42</NumberBadge>;
```

## Variants

### Number Badge with "value"

Uses a `<data>` element with a `value` attribute to specify a machine-readable translation of the number badge.

```jsx
<NumberBadge value={1000}>1,000</NumberBadge>
```

### Number Badge with "label"

Used to add an invisible label when users without a visual cue need more context to understand the number badge.

```jsx
<NumberBadge label="42 unread messages" value={42}>
  42
</NumberBadge>
```

## Design Tokens

All NL Design System components are white label. Use Number Badge design tokens to ensure it matches your brand styles. See [nldesignsystem.nl/number-badge/#design-tokens](https://nldesignsystem.nl/number-badge/#design-tokens) for a full overview.

These tokens are also documented in [@nl-design-system-candidate/number-badge-tokens](https://www.npmjs.com/package/@nl-design-system-candidate/number-badge-tokens)

## Other implementations

Want to use the Number Badge with other frameworks or vanilla JavaScript? The React component is based on
[@nl-design-system-candidate/number-badge-css](https://www.npmjs.com/package/@nl-design-system-candidate/number-badge-css)

## Figma, Storybook and more

Read more about the Number Badge and the accessibility guidelines in Dutch and find links to other resources like Figma and Storybook on [nldesignsystem.nl/number-badge](https://nldesignsystem.nl/number-badge).
