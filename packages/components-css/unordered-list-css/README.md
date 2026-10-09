<!-- @license CC0-1.0 -->

# Unordered List CSS

An unordered list where the sequence of items is not meaningful.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/unordered-list-css
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/unordered-list-css
```

If you use a CDN, you can import the CSS like this:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/unordered-list-css/dist/unordered-list.css"
/>
```

If you don't use a CDN, you can import the CSS from `node_modules/`:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/unordered-list-css/dist/unordered-list.css" />
```

If you use CSS imports from JavaScript:

```js
import '@nl-design-system-candidate/unordered-list-css/dist/unordered-list.css';
```

If you use SCSS:

```scss
@use '@nl-design-system-candidate/unordered-list-css/forward.scss';
```

## CSS classes

| name                                                           | description                                                                                                        |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `.nl-unordered-list`                                           | The main class. Use it on a `<ul>` element.                                                                        |
| `.nl-unordered-list__item`                                     | The list item class. Use it on each `<li>` element.                                                                |
| `.nl-unordered-list__item--custom-marker`                      | Hides the default marker on an item with a custom marker.                                                          |
| `.nl-unordered-list__marker.nl-unordered-list__marker--custom` | The custom marker container. Use it on a `<span>` inside `.nl-unordered-list__item`.                               |
| `.nl-unordered-list__marker-label`                             | Visually hidden label inside a custom marker. Use it on a `<span>` element.                                        |
| `.nl-html--all`                                                | HTML context class (from `html/unordered-list.css`). Styles every `<ul>` and its direct `<li>` children inside it. |
| `.nl-html--unordered-list`                                     | HTML context class (from `html/unordered-list.css`). Styles every `<ul>` and its direct `<li>` children inside it. |

## SCSS mixins

| name                                | description                                    |
| ----------------------------------- | ---------------------------------------------- |
| `nl-unordered-list`                 | Styles for the unordered list container        |
| `nl-unordered-list__item`           | Styles for each list item                      |
| `nl-unordered-list__marker`         | Shared styles for the marker                   |
| `nl-unordered-list__marker--custom` | Additional layout styles for the custom marker |
| `nl-unordered-list__marker-label`   | Visually hidden label styles                   |

## Usage

Always add `role="list"` to the `<ul>` element. WebKit browsers remove list semantics when `list-style-type`
is set to `none` via CSS, for example by a theme or a reset stylesheet; the `role="list"` attribute restores them.

```html
<ul class="nl-unordered-list" role="list">
  <li class="nl-unordered-list__item">Item 1</li>
  <li class="nl-unordered-list__item">Item 2</li>
  <li class="nl-unordered-list__item">Item 3</li>
</ul>
```

### With a custom marker

Use a custom marker to replace the default bullet with an icon or other visual. Hide the icon from
assistive technology with `aria-hidden="true"`. Provide the accessible label via a visually hidden
`<span class="nl-unordered-list__marker-label">`.

```html
<ul class="nl-unordered-list" role="list">
  <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
    <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
      <span aria-hidden="true"><!-- icon --></span>
      <span class="nl-unordered-list__marker-label">Leesteken </span>
    </span>
    Paspoortfoto, niet ouder dan 6 maanden
  </li>
</ul>
```

### Without CSS classes

Apply unordered list styles to plain `<ul>` and `<li>` elements, for example content from a rich text editor,
without adding component classes to every element. Only `<li>` elements that are direct children of an `<ul>`
are styled, so a nested `<ul>` keeps its own styling.

Inside an element with the `nl-html--all` or `nl-html--unordered-list` class, using `html/unordered-list.css`:

```html
<div class="nl-html--unordered-list">
  <ul role="list">
    <li>Paspoortfoto, niet ouder dan 6 maanden</li>
    <li>Je oude paspoort</li>
  </ul>
</div>
```

```js
import '@nl-design-system-candidate/unordered-list-css/dist/html/unordered-list.css';
```

For every `<ul>` on the page, without a container class, use `vanilla/unordered-list.css`:

```js
import '@nl-design-system-candidate/unordered-list-css/dist/vanilla/unordered-list.css';
```

### SCSS usage

Import the mixins via `forward` (Sass internally uses `_forward.scss`) and use them in your own SCSS:

```scss
@use '@nl-design-system-candidate/unordered-list-css/forward.scss' as unordered-list;

.example-unordered-list {
  @include unordered-list.nl-unordered-list;
}

.example-unordered-list__item {
  @include unordered-list.nl-unordered-list__item;
}
```

Depending on the tools used, it may be necessary to configure Sass with `loadPaths` so that
`@nl-design-system-candidate/unordered-list-css` can be found in the `node_modules` folder.
See [Configuring Sass with `loadPaths`](https://github.com/nl-design-system/candidate/tree/main/packages/components-css#configuring-sass-with-loadpaths) for more information.

## Design Tokens

All NL Design System components are white label. Use Unordered List design tokens to ensure it matches your brand styles. For more information about design tokens, see
[https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

See [nldesignsystem.nl/unordered-list/#design-tokens](https://nldesignsystem.nl/unordered-list/#design-tokens) for a full overview of the Unordered List tokens. These tokens can be found in the tokens package [`@nl-design-system-candidate/unordered-list-tokens`](https://www.npmjs.com/package/@nl-design-system-candidate/unordered-list-tokens).

## Other implementations

Want to use Unordered List with React? Follow the instructions described in the React package
[`@nl-design-system-candidate/unordered-list-react`](https://www.npmjs.com/package/@nl-design-system-candidate/unordered-list-react).

Want to use Unordered List with other frameworks or vanilla JavaScript? The React component is based on the CSS package
[`@nl-design-system-candidate/unordered-list-css`](https://www.npmjs.com/package/@nl-design-system-candidate/unordered-list-css).

## Figma, Storybook and more

Read more about the Unordered List in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/unordered-list](https://nldesignsystem.nl/unordered-list).
