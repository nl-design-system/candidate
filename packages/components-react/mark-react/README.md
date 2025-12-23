<!-- @license CC0-1.0 -->

# Mark React

Highlights text so you can refer to it from another context or because the text is relevant to the current activity.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/mark-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/mark-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/mark-react
```

## Usage

If you want the React component with styles

```jsx
import { Mark } from '@nl-design-system-candidate/mark-react/css';

<Mark>Highlighted search result</Mark>;
```

If you just want the React component and import the styles separately

```jsx
import { Mark } from '@nl-design-system-candidate/mark-react';

<Mark>Highlighted search result</Mark>;
```

## Design Tokens

All NL Design System components are white label. Use Mark design tokens to ensure it matches your brand styles. See [nldesignsystem.nl/mark/#design-tokens](https://nldesignsystem.nl/mark/#design-tokens) for a full overview.

These tokens are also documented in [@nl-design-system-candidate/mark-tokens](https://www.npmjs.com/package/@nl-design-system-candidate/mark-tokens).

## Other implementations

Want to use the Mark with other frameworks or vanilla JavaScript? The React component is based on
[@nl-design-system-candidate/mark-css](https://www.npmjs.com/package/@nl-design-system-candidate/mark-css).

## Figma, Storybook and more

Read more about the Mark in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/mark](https://nldesignsystem.nl/mark).
