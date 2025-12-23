<!-- @license CC0-1.0 -->

# Heading React

Heading text that can be set to the appropriate level in the heading structure.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/heading-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/heading-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/heading-react
```

## Usage

If you want the React component with styles

```jsx
import { Heading } from '@nl-design-system-candidate/heading-react/css';

<Heading level="1">The quick brown fox jumps over the lazy dog.</Heading>;
```

If you just want the React component and import the styles separately

```jsx
import { Heading } from '@nl-design-system-candidate/heading-react';

<Heading level="1">The quick brown fox jumps over the lazy dog.</Heading>;
```

## Variants

### Heading with appearance of another level

Used when a Heading should semantically have one heading level but visually another is preferred.

```jsx
<Heading level="2" appearance="level-4">
  This is a card heading that looks like h4 but is secretly and semantically h2.
</Heading>
```

## Design Tokens

All NL Design System components are white label. Use Heading design tokens to ensure it matches your brand styles. [https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

The tokens used for Heading can be found in the tokens documentation [@nl-design-system-candidate/heading-tokens](https://www.npmjs.com/package/@nl-design-system-candidate/heading-tokens).

## Other implementations

Want to use the Heading with other frameworks or vanilla JavaScript? The React component is based on
[@nl-design-system-candidate/heading-css](https://www.npmjs.com/package/@nl-design-system-candidate/heading-css).

## Figma, Storybook and more

Read more about the Heading in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/heading](https://nldesignsystem.nl/heading).
