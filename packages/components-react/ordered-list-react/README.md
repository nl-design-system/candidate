<!-- @license CC0-1.0 -->

# Ordered List React

An ordered list where the sequence of items is meaningful.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/ordered-list-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/ordered-list-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/ordered-list-react
```

## Usage

With built-in CSS:

```jsx
import { OrderedList, OrderedListItem } from '@nl-design-system-candidate/ordered-list-react/css';

<OrderedList role="list">
  <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden</OrderedListItem>
  <OrderedListItem>Je oude paspoort</OrderedListItem>
  <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
</OrderedList>;
```

Only the React component. You still need to import the CSS separately:

```jsx
import { OrderedList, OrderedListItem } from '@nl-design-system-candidate/ordered-list-react';

<OrderedList role="list">
  <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden</OrderedListItem>
  <OrderedListItem>Je oude paspoort</OrderedListItem>
  <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
</OrderedList>;
```

### Always add `role="list"`

Always add `role="list"` to the `OrderedList`. WebKit browsers remove list semantics when `list-style` is
set to `none` via CSS; the `role="list"` attribute restores them.

### With a custom marker

Use the `marker` and `markerLabel` props on `OrderedListItem`. The marker is automatically hidden from
assistive technology with `aria-hidden="true"`, and `markerLabel` is rendered as visually hidden accessible
text.

```jsx
import { Icon } from '@example/icon-react';
import { IconNumber1, IconNumber2 } from '@example/icons';

<OrderedList role="list">
  <OrderedListItem
    marker={
      <Icon>
        <IconNumber1 />
      </Icon>
    }
    markerLabel="Stap 1."
  >
    Verzamel documenten
  </OrderedListItem>
  <OrderedListItem
    marker={
      <Icon>
        <IconNumber2 />
      </Icon>
    }
    markerLabel="Stap 2."
  >
    Maak een afspraak
  </OrderedListItem>
</OrderedList>;
```

Pass only the icon to `marker`. `OrderedListItem` renders the marker element around it.

### Do not add `tabIndex`

Do not add `tabIndex` to an `OrderedList`. It is informative and should not become part of the page's tab
order.

### Content of an Ordered List Item

The `OrderedListItem` accepts plain text and phrasing content as `children`, for example inline elements such
as `<strong>`, `<em>` and links. It can also contain `<p>` elements and a nested `OrderedList` or unordered
list.

```jsx
<OrderedList role="list">
  <OrderedListItem>
    Verzamel de benodigde documenten
    <OrderedList role="list">
      <OrderedListItem>Geldig identiteitsbewijs</OrderedListItem>
      <OrderedListItem>Pasfoto, niet ouder dan 6 maanden</OrderedListItem>
    </OrderedList>
  </OrderedListItem>
  <OrderedListItem>Maak een afspraak</OrderedListItem>
</OrderedList>
```

## Props

### OrderedList

| Prop        | Description                                                    | Type                    | Default |
| ----------- | -------------------------------------------------------------- | ----------------------- | ------- |
| `children`  | List items, typically one or more `OrderedListItem` components | `ReactNode`             | —       |
| `className` | Additional CSS classes alongside `nl-ordered-list`             | `string`                | —       |
| `ref`       | Ref forwarded to the underlying `<ol>` element                 | `Ref<HTMLOListElement>` | —       |

In addition to the props above, `OrderedList` accepts all standard HTML attributes of an `<ol>` element,
including `reversed`, `start`, and `type`, and forwards a `ref` to the underlying `<ol>` element.

### OrderedListItem

| Prop          | Description                                                                                             | Type                 | Default |
| ------------- | ------------------------------------------------------------------------------------------------------- | -------------------- | ------- |
| `children`    | Content of the list item                                                                                | `ReactNode`          | —       |
| `marker`      | Custom marker visual, hidden from assistive technology automatically                                    | `ReactNode`          | —       |
| `markerLabel` | Accessible label for the custom marker, rendered as visually hidden text. Required when using `marker`. | `ReactNode`          | —       |
| `className`   | Additional CSS classes alongside `nl-ordered-list__item`                                                | `string`             | —       |
| `ref`         | Ref forwarded to the underlying `<li>` element                                                          | `Ref<HTMLLIElement>` | —       |

In addition to the props above, `OrderedListItem` accepts all standard HTML attributes of an `<li>`
element and forwards a `ref` to the underlying `<li>` element.

## Design Tokens

All NL Design System components are white label. Use Ordered List design tokens to ensure it matches your brand styles. For more information about design tokens, see
[https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

See [nldesignsystem.nl/ordered-list/#design-tokens](https://nldesignsystem.nl/ordered-list/#design-tokens) for a full overview of the Ordered List tokens. These tokens can be found in the tokens package [`@nl-design-system-candidate/ordered-list-tokens`](https://www.npmjs.com/package/@nl-design-system-candidate/ordered-list-tokens).

## Other implementations

Want to use Ordered List without React? Use the CSS and HTML described in the CSS package
[`@nl-design-system-candidate/ordered-list-css`](https://www.npmjs.com/package/@nl-design-system-candidate/ordered-list-css).

## Figma, Storybook and more

Read more about the Ordered List in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/ordered-list](https://nldesignsystem.nl/ordered-list).
