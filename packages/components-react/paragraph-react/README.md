<!-- @license CC0-1.0 -->

# Paragraph React

The paragraph is used for body text, instructions for forms, and other separate text fragments.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/paragraph-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/paragraph-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/paragraph-react
```

## Usage

If you want the React component with styles

```jsx
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';

<Paragraph>The quick brown fox jumps over the lazy dog.</Paragraph>;
```

If you just want the React component and import the styles separately

```jsx
import { Paragraph } from '@nl-design-system-candidate/paragraph-react';

<Paragraph>The quick brown fox jumps over the lazy dog.</Paragraph>;
```

## Variants

### Paragraph Lead

Used as the opening paragraph of an article, book chapter, or other written work that summarizes its main ideas. This variant of the Paragraph is often displayed a bit bigger than the default Paragraph.

```jsx
<Paragraph purpose="lead">The quick brown fox jumps over the lazy dog.</Paragraph>
```

## Design Tokens

All NL Design System components are white label. Use Paragraph design tokens to ensure it matches your brand styles. [https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

The tokens used for Paragraph can be found in the tokens documentation [@nl-design-system-candidate/paragraph-tokens](https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-tokens).

## Other implementations

Want to use the Paragraph with other frameworks or vanilla JavaScript? The React component is based on
[@nl-design-system-candidate/paragraph-css](https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-css).

## Figma, Storybook and more

Read more about the Paragraph in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/paragraph](https://nldesignsystem.nl/paragraph).
