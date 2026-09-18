<!-- @license CC0-1.0 -->

# Form Field Error Message

Displays an error message explaining what went wrong and how to resolve it.

## Installation

Using npm

```shell
npm install @nl-design-system-candidate/form-field-error-message-css
```

Using pnpm

```shell
pnpm add @nl-design-system-candidate/form-field-error-message-css
```

If you use a CDN, you can import the CSS like this:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/form-field-error-message-css/dist/form-field-error-message.css"
/>
```

If you don't use a CDN, you can import the CSS from `node_modules/`:

```html
<link
  rel="stylesheet"
  href="node_modules/@nl-design-system-candidate/form-field-error-message-css/dist/form-field-error-message.css"
/>
```

If you use CSS imports from JavaScript:

```js
import '@nl-design-system-candidate/form-field-error-message-css/dist/form-field-error-message.css';
```

If you use SCSS:

```scss
@use '@nl-design-system-candidate/form-field-error-message-css/forward.scss';
```

## CSS classes

| name                                    | description                                                                                       |
| --------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `.nl-form-field-error-message`          | The main class. Use it on a `<div>` element by default; a `<p>` or `<span>` element also works.   |
| `.nl-form-field-error-message__icon`    | The icon container, to be used on a `<div>` element by default; a `<span>` element also works.    |
| `.nl-form-field-error-message__content` | The content container, to be used on a `<div>` element by default; a `<span>` element also works. |

## SCSS mixins

| name                                   | description                             |
| -------------------------------------- | --------------------------------------- |
| `nl-form-field-error-message`          | Styles for the form field error message |
| `nl-form-field-error-message__icon`    | Styles for the icon                     |
| `nl-form-field-error-message__content` | Styles for the content                  |

## Usage

Place the Form Field Error Message below the label and before the input field. Give the content element an
`id`, and link it to the input field via `aria-describedby`.

```html
<div>
  <label for="name">Name</label>
</div>
<div class="nl-form-field-error-message">
  <div id="name-error" class="nl-form-field-error-message__content"><p>The "Name" field is required.</p></div>
</div>
<div>
  <input id="name" aria-describedby="name-error" autocomplete="name" type="text" />
</div>
```

### With an icon

Use `nl-form-field-error-message__icon` for an optional, decorative icon before the content. Hide it from
assistive technology, since the text of the error message already conveys the meaning.

```html
<div class="nl-form-field-error-message">
  <div class="nl-form-field-error-message__icon"><!-- icon --></div>
  <div id="name-error" class="nl-form-field-error-message__content"><p>The "Name" field is required.</p></div>
</div>
```

### SCSS usage

Import the mixins via `forward` (Sass internally uses `_forward.scss`) and use them in your own SCSS:

```scss
@use '@nl-design-system-candidate/form-field-error-message-css/forward.scss' as form-field-error-message;

.example-form-field-error-message {
  @include form-field-error-message.nl-form-field-error-message;
}

.example-form-field-error-message__icon {
  @include form-field-error-message.nl-form-field-error-message__icon;
}

.example-form-field-error-message__content {
  @include form-field-error-message.nl-form-field-error-message__content;
}
```

Depending on the tools used, it may be necessary to configure Sass with `loadPaths` so that
`@nl-design-system-candidate/form-field-error-message-css` can be found in the `node_modules` folder.
See [Configuring Sass with `loadPaths`](https://github.com/nl-design-system/candidate/tree/main/packages/components-css#configuring-sass-with-loadpaths) for more information.
