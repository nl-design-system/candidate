<!-- @license CC0-1.0 -->

# Code Block React

Block of one or more lines of computer code.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/code-block-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/code-block-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/code-block-react
```

## Usage

If you want the React component with styles

```jsx
import { CodeBlock } from '@nl-design-system-candidate/code-block-react/css';

<CodeBlock>{`
import { IconCode } from '@tabler/icons-react';

return MyCodeBlockSample = () =>  <IconCode stroke={2} />;`}</CodeBlock>;
```

If you just want the React component and import the styles separately

```jsx
import { CodeBlock } from '@nl-design-system-candidate/code-block-react';

<CodeBlock>{`
import { IconCode } from '@tabler/icons-react';

return MyCodeBlockSample = () =>  <IconCode stroke={2} />;`}</CodeBlock>;
```

## Design Tokens

All NL Design System components are white label. Use Code Block design tokens to ensure it matches your brand styles. See [nldesignsystem.nl/code-block/#design-tokens](https://nldesignsystem.nl/code-block/#design-tokens) for a full overview.

These tokens are also documented in [@nl-design-system-candidate/code-block-tokens](https://www.npmjs.com/package/@nl-design-system-candidate/code-block-tokens).

## Other implementations

Want to use the Code Block with other frameworks or vanilla JavaScript? The React component is based on
[@nl-design-system-candidate/code-block-css](https://www.npmjs.com/package/@nl-design-system-candidate/code-block-css).

## Figma, Storybook and more

Read more about the Code in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/code-block](https://nldesignsystem.nl/code-block).
