<!-- @license CC0-1.0 -->

# Skip Link React

Hidden option to quickly navigate to another part of the page without using a mouse or touchscreen.

Use the Skip Link so users can easily skip content blocks using a keyboard or assistive software. For example, navigation that becomes relevant across multiple pages.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/skip-link-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/skip-link-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/skip-link-react
```

## Usage

If you want the React component with styles

```jsx
import { SkipLink } from '@nl-design-system-candidate/skip-link-react/css';

<SkipLink href="#main">Skip to main content</SkipLink>;
```

If you just want the React component and import the styles separately

```jsx
import { SkipLink } from '@nl-design-system-candidate/skip-link-react';

<SkipLink href="#main">Skip to main content</SkipLink>;
```

## Design Tokens

All NL Design System components are white label. Use Skip Link design tokens to ensure it matches your brand styles. See [nldesignsystem.nl/skip-link/#design-tokens](https://nldesignsystem.nl/skip-link/#design-tokens) for a full overview.

These tokens are also documented in [@nl-design-system-candidate/skip-link-tokens](https://www.npmjs.com/package/@nl-design-system-candidate/skip-link-tokens)

## Other implementations

Want to use the Skip Link with other frameworks or vanilla JavaScript? The React component is based on
[@nl-design-system-candidate/skip-link-css](https://www.npmjs.com/package/@nl-design-system-candidate/skip-link-css)

## Figma, Storybook and more

Read more about the Skip Link and the accessibility guidelines in Dutch and find links to other resources like Figma and Storybook on [nldesignsystem.nl/skip-link](https://nldesignsystem.nl/skip-link).
