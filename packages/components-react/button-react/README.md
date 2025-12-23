<!-- @license CC0-1.0 -->

# Button React

Provides the ability to perform an action.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/button-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/button-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/button-react
```

## Usage

If you want the React component with styles

```jsx
import { Button } from '@nl-design-system-candidate/button-react/css';

<Button>Click here!</Button>;
```

If you just want the React component and import the styles separately

```jsx
import { Button } from '@nl-design-system-candidate/button-react';

<Button>Click here!</Button>;
```

## Variants

### Primary Button

Button that indicates a primary action. It is the most logical choice in a flow. Use primary buttons sparingly. Too many primary buttons on the screen can be confusing for the user. Optionally, a hint can be provided.

```jsx
<Button label="Primary Button" purpose="primary" />
```

#### Primary Button with hint="positive"

Indicates a positive or successful outcome. For example, an action to create something.

```jsx
<Button hint="positive" label="Send form" purpose="primary" />
```

#### Primary Button with hint="negative"

Indicates a negative or destructive result. For example, an action to permanently remove something.

```jsx
<Button hint="negative" label="Delete this file" purpose="primary" />
```

### Secondary Button

Button that indicates a secondary action. It is often used for buttons that are an alternative to the primary action. Optionally, a hint can be provided.

```jsx
<Button label="Secondary Button" purpose="secondary" />
```

#### Secondary Button with hint="positive"

Indicates a positive or successful outcome. For example, an action to create something.

```jsx
<Button hint="positive" label="Save and continue later" purpose="secondary" />
```

#### Secondary Button with hint="negative"

Indicates a negative or destructive result. For example, an action to change the visability of something.

```jsx
<Button hint="negative" label="Publish" purpose="secondary" />
```

### Subtle Button

Button that isn't immediately attention-grabbing. It is often used in busy interfaces with lots of actions. Optionally, a hint can be provided.

```jsx
<Button label="Subtle Button" purpose="subtle" />
```

#### Subtle Button with hint="positive"

Indicates a positive or successful outcome. For example, an action to create something.

```jsx
<Button hint="positive" label="Yay" purpose="subtle" />
```

#### Subtle Button with hint="negative"

Indicates a negative or destructive result. For example, an action to change the visability of something.

```jsx
<Button hint="negative" label="Nay" purpose="subtle" />
```

### Button with iconStart

A button with an icon before the label. Using an SVG icon with `fill="currentColor"` is recommended.

```jsx
<Button iconStart={<ExampleIconArrowLeft />} label="Previous" />
```

### Button with iconEnd

A button with an icon after the label. Using an SVG icon with `fill="currentColor"` is recommended.

```jsx
<Button iconEnd={<ExampleIconArrowRight />} label="Next" />
```

### Button with iconOnly

A button with only an icon. The label is not visible, but it is present for accessibility. Using an SVG icon with `fill="currentColor"` is recommended.

```jsx
<Button iconOnly iconStart={<ExampleIconIdea />} label="Get a hint" />
```

or even with two icons

```jsx
<Button iconOnly iconStart={<ExampleIconPlus />} iconEnd={<ExampleIconShoppingCart />} label="Add to basket" />
```

### Pressed and Toggle Button

A Button that indicates a pressed state, even if the user is not currently interacting with it.

Use the `pressed` property to indicate the visible state, and `toggle` when assitive software should track the current state of the button.

### Disabled

_Note_: We have [NL Design System guidelines](https://nldesignsystem.nl/richtlijnen/formulieren/buttons/disabled-submitbuttons/#disabled-submitbuttons) that warn about the use of the Disabled button for submit actions.

To make a Button inactive you can use the `disabled` property. This will add disabled styling and set `aria-disabled="true"`. We do not set the native `disabled` property, because otherwise the Button will no longer be focussable, even with `tabindex="0"`.

When using a Disabled Button the `onClick` handler can be used to ensure the button will no longer respond to clicks.

Do you really need the native `disabled` attribute? Use the `htmlDisabled` property instead, but know it will cause accessibility issues.

## Design Tokens

All NL Design System components are white label. Use Button design tokens to ensure it matches your brand styles. [https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

The tokens used for Button can be found in the tokens documentation [@nl-design-system-candidate/button-tokens](https://www.npmjs.com/package/@nl-design-system-candidate/button-tokens).

## Other implementations

Want to use the Button with other frameworks or vanilla JavaScript? The React component is based on
[@nl-design-system-candidate/button-css](https://www.npmjs.com/package/@nl-design-system-candidate/button-css).

## Figma, Storybook and more

Read more about the Button in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/button](https://nldesignsystem.nl/button).
