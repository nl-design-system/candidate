<!-- @license CC0-1.0 -->

# Ordered List

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

Only the React component, import the CSS separately:

```jsx
import { OrderedList, OrderedListItem, OrderedListMarker } from '@nl-design-system-candidate/ordered-list-react';
```

### Always add `role="list"`

Always add `role="list"` to the `OrderedList`. WebKit browsers remove list semantics when `list-style` is
set to `none` via CSS; the `role="list"` attribute restores them.

### With a custom marker

Use the `marker` and `markerLabel` props on `OrderedListItem`. The marker is automatically wrapped in an
`OrderedListMarker`, hiding it from assistive technology with `aria-hidden="true"` and rendering
`markerLabel` as visually hidden accessible text.

```jsx
<OrderedList role="list">
  <OrderedListItem marker={<IconOne />} markerLabel="Stap 1. ">
    Verzamel documenten
  </OrderedListItem>
  <OrderedListItem marker={<IconTwo />} markerLabel="Stap 2. ">
    Maak een afspraak
  </OrderedListItem>
</OrderedList>
```

For advanced cases you can also pass an `OrderedListMarker` directly via the `marker` prop:

```jsx
<OrderedListItem
  marker={
    <OrderedListMarker label="Stap 1. ">
      <IconOne />
    </OrderedListMarker>
  }
>
  Verzamel documenten
</OrderedListItem>
```

### Do not add `tabIndex`

Do not add `tabIndex` to an `OrderedList`. It is informative and should not become part of the page's tab
order.

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
| `marker`      | Custom marker visual, wrapped automatically in `OrderedListMarker`                                      | `ReactNode`          | —       |
| `markerLabel` | Accessible label for the custom marker, rendered as visually hidden text. Required when using `marker`. | `ReactNode`          | —       |
| `className`   | Additional CSS classes alongside `nl-ordered-list__item`                                                | `string`             | —       |
| `ref`         | Ref forwarded to the underlying `<li>` element                                                          | `Ref<HTMLLIElement>` | —       |

In addition to the props above, `OrderedListItem` accepts all standard HTML attributes of an `<li>`
element and forwards a `ref` to the underlying `<li>` element.

### OrderedListMarker

| Prop        | Description                                                                                              | Type                   | Default |
| ----------- | -------------------------------------------------------------------------------------------------------- | ---------------------- | ------- |
| `children`  | The marker visual, rendered inside a `span` with `aria-hidden="true"`                                    | `ReactNode`            | —       |
| `label`     | Accessible label for the marker, rendered as visually hidden text. Required when `children` is provided. | `ReactNode`            | —       |
| `className` | Additional CSS classes alongside `nl-ordered-list__marker nl-ordered-list__marker--custom`               | `string`               | —       |
| `ref`       | Ref forwarded to the underlying `<span>` element                                                         | `Ref<HTMLSpanElement>` | —       |

In addition to the props above, `OrderedListMarker` accepts all standard HTML attributes of a `<span>`
element and forwards a `ref` to the underlying `<span>` element.

## Design Tokens

All NL Design System components are white-label. Use the Ordered List design tokens to adapt the style to
your house style. For more information about design tokens, see
[https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

The tokens for Ordered List can be found in the tokens package
[`@nl-design-system-candidate/ordered-list-tokens`](https://www.npmjs.com/package/@nl-design-system-candidate/ordered-list-tokens).

## Other implementations

Want to use Ordered List without React? Use the CSS and HTML described in
[`@nl-design-system-candidate/ordered-list-css`](https://www.npmjs.com/package/@nl-design-system-candidate/ordered-list-css).
