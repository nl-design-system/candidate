<!-- @license CC0-1.0 -->

# Color Sample React

Shows a sample of a color.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/color-sample-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/color-sample-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/color-sample-react
```

## Usage

If you want the React component with styles

```jsx
import { ColorSample } from '@nl-design-system-candidate/color-sample-react/css';

<ColorSample value="#C214FF" />;
```

If you just want the React component and import the styles separately

```jsx
import { ColorSample } from '@nl-design-system-candidate/color-sample-react';

<ColorSample value="#C214FF" />;
```

## Design Tokens

All NL Design System components are white label. Use Color Sample design tokens to ensure it matches your brand styles. See [nldesignsystem.nl/color-sample/#design-tokens](https://nldesignsystem.nl/color-sample/#design-tokens) for a full overview.

**Note**: Do not set the `color-sample.background-color` token in your theme as this token is used to set the background-color based on the value.

These tokens are also documented in [@nl-design-system-candidate/color-sample-tokens](https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-tokens).

## Other implementations

Want to use the Color Sample with other frameworks or vanilla JavaScript? The React component is based on
[@nl-design-system-candidate/color-sample-css](https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-css).

## Figma, Storybook and more

Read more about the Color Sample in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/color-sample](https://nldesignsystem.nl/color-sample).
