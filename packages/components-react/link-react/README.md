<!-- @license CC0-1.0 -->

# Link React

Hidden option to quickly navigate to another part of the page without using a mouse or touchscreen.

Use the Link so users can easily skip content blocks using a keyboard or assistive software. For example, navigation that becomes relevant across multiple pages.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/link-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/link-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/link-react
```

## Usage

If you want the React component with styles

```jsx
import { Link } from '@nl-design-system-candidate/link-react/css';

<Link href="https://example.com">See the example</Link>;
```

If you just want the React component and import the styles separately

```jsx
import { Link } from '@nl-design-system-candidate/link-react';

<Link href="https://example.com">See the example</Link>;
```

## Design Tokens

All NL Design System components are white label. Use Link design tokens to ensure it matches your brand styles. See [nldesignsystem.nl/link/#design-tokens](https://nldesignsystem.nl/link/#design-tokens) for a full overview.

These tokens are also documented in [@nl-design-system-candidate/link-tokens](https://www.npmjs.com/package/@nl-design-system-candidate/link-tokens).

## Other implementations

Want to use the Link with other frameworks or vanilla JavaScript? The React component is based on
[@nl-design-system-candidate/link-css](https://www.npmjs.com/package/@nl-design-system-candidate/link-css).

## Figma, Storybook and more

Read more about the Link and the accessibility guidelines in Dutch and find links to other resources like Figma and Storybook on [nldesignsystem.nl/link](https://nldesignsystem.nl/link).
