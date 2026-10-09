<!-- @license CC0-1.0 -->

# Unordered List React

An unordered list where the sequence of items is not meaningful.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/unordered-list-react
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/unordered-list-react
```

Using yarn

```shell
yarn add @nl-design-system-candidate/unordered-list-react
```

## Usage

With built-in CSS:

```jsx
import { UnorderedList, UnorderedListItem } from '@nl-design-system-candidate/unordered-list-react/css';

<UnorderedList role="list">
  <UnorderedListItem>Paspoortfoto, niet ouder dan 6 maanden</UnorderedListItem>
  <UnorderedListItem>Je oude paspoort</UnorderedListItem>
  <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
</UnorderedList>;
```

Only the React component. You still need to import the CSS separately:

```jsx
import { UnorderedList, UnorderedListItem } from '@nl-design-system-candidate/unordered-list-react';

<UnorderedList role="list">
  <UnorderedListItem>Paspoortfoto, niet ouder dan 6 maanden</UnorderedListItem>
  <UnorderedListItem>Je oude paspoort</UnorderedListItem>
  <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
</UnorderedList>;
```

### Always add `role="list"`

Always add `role="list"` to the `UnorderedList`. WebKit browsers remove list semantics when `list-style` is
set to `none` via CSS, for example by a theme or a reset stylesheet; the `role="list"` attribute restores them.

### With a custom marker

Use the `marker` and `markerLabel` props on `UnorderedListItem`. The marker is automatically hidden from
assistive technology with `aria-hidden="true"`, and `markerLabel` is rendered as visually hidden accessible
text.

```jsx
import { Icon } from '@example/icon-react';
import { IconPointFilled } from '@example/icons';

<UnorderedList role="list">
  <UnorderedListItem
    marker={
      <Icon>
        <IconPointFilled />
      </Icon>
    }
    markerLabel="Leesteken"
  >
    Paspoortfoto, niet ouder dan 6 maanden
  </UnorderedListItem>
  <UnorderedListItem
    marker={
      <Icon>
        <IconPointFilled />
      </Icon>
    }
    markerLabel="Leesteken"
  >
    Je oude paspoort
  </UnorderedListItem>
</UnorderedList>;
```

Pass only the icon to `marker`. `UnorderedListItem` renders the marker element around it.

### Do not add `tabIndex`

Do not add `tabIndex` to an `UnorderedList`. It is informative and should not become part of the page's tab
order.

### Content of an Unordered List Item

The `UnorderedListItem` accepts plain text and phrasing content as `children`, for example inline elements such
as `<strong>`, `<em>` and links. It can also contain `<p>` elements and a nested `UnorderedList`.

```jsx
<UnorderedList role="list">
  <UnorderedListItem>
    Neem een geldig identiteitsbewijs mee
    <UnorderedList role="list">
      <UnorderedListItem>Paspoort</UnorderedListItem>
      <UnorderedListItem>Identiteitskaart</UnorderedListItem>
    </UnorderedList>
  </UnorderedListItem>
  <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
</UnorderedList>
```

## Props

### UnorderedList

| Prop        | Description                                                      | Type                    | Default |
| ----------- | ---------------------------------------------------------------- | ----------------------- | ------- |
| `children`  | List items, typically one or more `UnorderedListItem` components | `ReactNode`             | —       |
| `className` | Additional CSS classes alongside `nl-unordered-list`             | `string`                | —       |
| `ref`       | Ref forwarded to the underlying `<ul>` element                   | `Ref<HTMLUListElement>` | —       |

In addition to the props above, `UnorderedList` accepts all standard HTML attributes of a `<ul>` element
and forwards a `ref` to the underlying `<ul>` element.

### UnorderedListItem

| Prop          | Description                                                                                                                                                                                  | Type                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------- |
| `children`    | Content of the list item                                                                                                                                                                     | `ReactNode`          | —       |
| `marker`      | Custom marker visual, hidden from assistive technology automatically                                                                                                                         | `ReactNode`          | —       |
| `markerLabel` | Accessible label for the custom marker, rendered as visually hidden text. Use it when the marker adds meaning; leave it out for a decorative marker. Only has effect together with `marker`. | `ReactNode`          | —       |
| `className`   | Additional CSS classes alongside `nl-unordered-list__item`                                                                                                                                   | `string`             | —       |
| `ref`         | Ref forwarded to the underlying `<li>` element                                                                                                                                               | `Ref<HTMLLIElement>` | —       |

In addition to the props above, `UnorderedListItem` accepts all standard HTML attributes of an `<li>`
element and forwards a `ref` to the underlying `<li>` element.

## Design Tokens

All NL Design System components are white label. Use Unordered List design tokens to ensure it matches your brand styles. For more information about design tokens, see
[https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

See [nldesignsystem.nl/unordered-list/#design-tokens](https://nldesignsystem.nl/unordered-list/#design-tokens) for a full overview of the Unordered List tokens. These tokens can be found in the tokens package [`@nl-design-system-candidate/unordered-list-tokens`](https://www.npmjs.com/package/@nl-design-system-candidate/unordered-list-tokens).

## Other implementations

Want to use Unordered List without React? Use the CSS and HTML described in the CSS package
[`@nl-design-system-candidate/unordered-list-css`](https://www.npmjs.com/package/@nl-design-system-candidate/unordered-list-css).

## Figma, Storybook and more

Read more about the Unordered List in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/unordered-list](https://nldesignsystem.nl/unordered-list).
