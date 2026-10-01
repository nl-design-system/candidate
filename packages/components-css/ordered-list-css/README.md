<!-- @license CC0-1.0 -->

# Ordered List CSS

An ordered list where the sequence of items is meaningful.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/ordered-list-css
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/ordered-list-css
```

If you use a CDN, you can import the CSS like this:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/ordered-list-css/dist/ordered-list.css"
/>
```

If you don't use a CDN, you can import the CSS from `node_modules/`:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/ordered-list-css/dist/ordered-list.css" />
```

If you use CSS imports from JavaScript:

```js
import '@nl-design-system-candidate/ordered-list-css/dist/ordered-list.css';
```

If you use SCSS:

```scss
@use '@nl-design-system-candidate/ordered-list-css/forward.scss';
```

## CSS classes

| name                                                       | description                                                                                                      |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `.nl-ordered-list`                                         | The main class. Use it on an `<ol>` element.                                                                     |
| `.nl-ordered-list__item`                                   | The list item class. Use it on each `<li>` element.                                                              |
| `.nl-ordered-list__item--custom-marker`                    | Suppresses the default counter on an item with a custom marker.                                                  |
| `.nl-ordered-list__marker.nl-ordered-list__marker--custom` | The custom marker container. Use it on a `<span>` inside `.nl-ordered-list__item`.                               |
| `.nl-ordered-list__marker-label`                           | Visually hidden label inside a custom marker. Use it on a `<span>` element.                                      |
| `.nl-html--all`                                            | HTML context class (from `html/ordered-list.css`). Styles every `<ol>` and its direct `<li>` children inside it. |
| `.nl-html--ordered-list`                                   | HTML context class (from `html/ordered-list.css`). Styles every `<ol>` and its direct `<li>` children inside it. |

## SCSS mixins

| name                              | description                                                               |
| --------------------------------- | ------------------------------------------------------------------------- |
| `nl-ordered-list`                 | Styles for the ordered list container                                     |
| `nl-ordered-list--lang-ar`        | Arabic-Indic numbering; include it in a `:lang(ar)` selector for the list |
| `nl-ordered-list__item`           | Styles for each list item                                                 |
| `nl-ordered-list__marker`         | Shared styles for the marker                                              |
| `nl-ordered-list__marker--custom` | Additional layout styles for the custom marker                            |
| `nl-ordered-list__marker-label`   | Visually hidden label styles                                              |

## Usage

Always add `role="list"` to the `<ol>` element. WebKit browsers remove list semantics when `list-style-type`
is overridden via CSS; the `role="list"` attribute restores them.

```html
<ol class="nl-ordered-list" role="list">
  <li class="nl-ordered-list__item">Paspoortfoto, niet ouder dan 6 maanden</li>
  <li class="nl-ordered-list__item">Je oude paspoort</li>
  <li class="nl-ordered-list__item">Je afspraakbevestiging</li>
</ol>
```

### With a custom marker

Use a custom marker to replace the default counter with an icon or other visual. Hide the icon from
assistive technology with `aria-hidden="true"`. Provide the accessible label via a visually hidden
`<span class="nl-ordered-list__marker-label">`.

```html
<ol class="nl-ordered-list" role="list">
  <li class="nl-ordered-list__item nl-ordered-list__item--custom-marker">
    <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
      <span aria-hidden="true"><!-- icon --></span>
      <span class="nl-ordered-list__marker-label">Stap 1. </span>
    </span>
    Verzamel documenten
  </li>
</ol>
```

### Without CSS classes

Apply ordered list styles to plain `<ol>` and `<li>` elements, for example content from a rich text editor,
without adding component classes to every element. Only `<li>` elements that are direct children of an `<ol>`
are styled, so a nested `<ul>` keeps its own styling.

Inside an element with the `nl-html--all` or `nl-html--ordered-list` class, using `html/ordered-list.css`:

```html
<div class="nl-html--ordered-list">
  <ol role="list">
    <li>Paspoortfoto, niet ouder dan 6 maanden</li>
    <li>Je oude paspoort</li>
  </ol>
</div>
```

```js
import '@nl-design-system-candidate/ordered-list-css/dist/html/ordered-list.css';
```

For every `<ol>` on the page, without a container class, use `vanilla/ordered-list.css`:

```js
import '@nl-design-system-candidate/ordered-list-css/dist/vanilla/ordered-list.css';
```

### SCSS usage

Import the mixins via `forward` (Sass internally uses `_forward.scss`) and use them in your own SCSS:

```scss
@use '@nl-design-system-candidate/ordered-list-css/forward.scss' as ordered-list;

.example-ordered-list {
  @include ordered-list.nl-ordered-list;
}

.example-ordered-list__item {
  @include ordered-list.nl-ordered-list__item;
}
```

Depending on the tools used, it may be necessary to configure Sass with `loadPaths` so that
`@nl-design-system-candidate/ordered-list-css` can be found in the `node_modules` folder.
See [Configuring Sass with `loadPaths`](https://github.com/nl-design-system/candidate/tree/main/packages/components-css#configuring-sass-with-loadpaths) for more information.

## Design Tokens

All NL Design System components are white label. Use Ordered List design tokens to ensure it matches your brand styles. For more information about design tokens, see
[https://nldesignsystem.nl/handboek/huisstijl/design-tokens/](https://nldesignsystem.nl/handboek/huisstijl/design-tokens/).

See [nldesignsystem.nl/ordered-list/#design-tokens](https://nldesignsystem.nl/ordered-list/#design-tokens) for a full overview of the Ordered List tokens. These tokens can be found in the tokens package [`@nl-design-system-candidate/ordered-list-tokens`](https://www.npmjs.com/package/@nl-design-system-candidate/ordered-list-tokens).

## Other implementations

Want to use Ordered List with React? Follow the instructions described in the React package
[`@nl-design-system-candidate/ordered-list-react`](https://www.npmjs.com/package/@nl-design-system-candidate/ordered-list-react).

Want to use Ordered List with other frameworks or vanilla JavaScript? The React component is based on the CSS package
[`@nl-design-system-candidate/ordered-list-css`](https://www.npmjs.com/package/@nl-design-system-candidate/ordered-list-css).

## Figma, Storybook and more

Read more about the Ordered List in Dutch and find links to other resources like Figma and Storybook on [https://nldesignsystem.nl/ordered-list](https://nldesignsystem.nl/ordered-list).
