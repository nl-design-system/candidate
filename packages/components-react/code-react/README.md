<!-- @license CC0-1.0 -->

# Code React

Computer code that is part of running text.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/code-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/code-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/code-react
```

## Usage

If you want the React component with styles

```jsx
import { Code } from '@nl-design-system-candidate/code-react/css';

<Code>{`import { IconCode } from '@tabler/icons-react';`}</Code>;
```

If you just want the React component and import the styles separately

```jsx
import { Code } from '@nl-design-system-candidate/code-react';

<Code>{`import { IconCode } from '@tabler/icons-react';`}</Code>;
```

## Design Tokens

All NL Design System components are white label. Use Code design tokens to ensure it matches your brand styles. See [nldesignsystem.nl/code/#design-tokens](https://nldesignsystem.nl/code/#design-tokens)
for a full overview.

These tokens are also documented in [@nl-design-system-candidate/code-tokens](https://www.npmjs.com/package/@nl-design-system-candidate/code-tokens).

## Other implementations

Want to use the Code with other frameworks or vanilla JavaScript? The React component is based on
[@nl-design-system-candidate/code-css](https://www.npmjs.com/package/@nl-design-system-candidate/code-css).

## Figma, Storybook and more

Read more about the Code in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/code](https://nldesignsystem.nl/code).
