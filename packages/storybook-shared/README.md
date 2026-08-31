<!-- @license CC0-1.0 -->

# Storybook Shared

Reusable Storybook decorators, toolbar global types, and theme files, used by `storybook-test`,
`storybook-non-conforming`, and `storybook`.

## Decorators

### StoryRootDecorator

The first decorator every `preview.ts` applies. Wraps a story in `<div data-story-root>` and reads
Storybook globals (`dir`, `lang`, `zoom`, `forcedColors`, ...) to apply them to that root element. See
[Toolbar global types](#toolbar-global-types) below for the globals it currently supports.

### CandidateDisableCssDecorator

Disables the candidate CSS (`all: revert !important` on `.candidate-disable-css`), so the browser-default
layout becomes visible. Used in `storybook-non-conforming`, for example to show the difference between a
`<span>` (inline) and a `<div>` (block).

### ExampleBodyTextDecorator

Wraps a story in `<div class="example-body-text">`, for example body text around a component.

### ParagraphDecorator

Wraps a story in the NL Paragraph component.

## Toolbar global types

### Zoom

The zoom level of a story (50% to 400%) via the Storybook toolbar.

### Forced Colors simulation

A page can't turn on real Forced Colors mode (`forced-colors: active`) from CSS or JavaScript; that's an
OS/browser setting. This simulation approximates it with CSS System Color keywords (`Canvas`, `CanvasText`,
`LinkText`, `Field`, `FieldText`, `ButtonText`, ...) whenever a `data-forced-colors="active"` attribute is
set on the story root. It's an approximation, not a replacement for a real check; verify with the browser
DevTools ("Emulate CSS media feature forced-colors") or a real OS contrast theme too.

#### Using it

Click "Forced Colors" in the Storybook toolbar and choose "Forced Colors (simulated)". A story can also
turn it on by default:

```tsx
export const MyComponentForcedColorsMode: Story = {
  globals: { forcedColors: 'active' },
  // ...
};
```

#### Adding it to a Storybook config

In `config/preview.ts`:

```ts
import { forcedColorsGlobalType } from '@nl-design-system-candidate/storybook-shared/src/forcedColorsGlobalType';
import './forced-colors-simulation.scss';

const preview: Preview = {
  decorators: [StoryRootDecorator], // must read `forcedColors` from globals
  globalTypes: {
    forcedColors: forcedColorsGlobalType,
    // ...
  },
  initialGlobals: {
    forcedColors: undefined,
    // ...
  },
};
```

`StoryRootDecorator` reads `context.globals.forcedColors` and sets it as `data-forced-colors` on the story
root.

#### Adding support for a component

`src/forced-colors-simulation.css` in this package only holds **generic** rules (links, `input`, `button`,
`select`, `textarea`, the page background), things true for every component. It must never contain
component-specific class names.

Component-specific simulation lives in your own Storybook package, in its own
`config/forced-colors-simulation.scss`, imported once from that package's `preview.ts`. Not in the
component's own CSS package: that package is published to npm, and a Storybook-only file in its `src/`
would ship to every consumer.

If a component has a `@media (forced-colors: active)` rule in its `_mixin.scss`, mirror it there:

```scss
// mixin.scss: real rule, used in production
@media (forced-colors: active) {
  color: currentColor;
}
```

```scss
// config/forced-colors-simulation.scss
[data-forced-colors='active'] .nl-my-component {
  color: currentColor !important;
}
```

Use `!important`; the simulation should always win over the component's normal color, the same way a
browser enforces it in real Forced Colors mode.

#### Known limitations

- Only elements covered by a rule (generic, or component-specific in a `forced-colors-simulation.scss`)
  change. A component without one won't visibly react to the toggle, even though a real browser would.
- Your `config/forced-colors-simulation.scss` collects every component's block for that Storybook package
  in one file, so adding a new `@media (forced-colors: active)` rule means remembering to add its mirror
  here too.
- Outside real Forced Colors mode, System Color keywords resolve to the current OS theme (usually
  black-on-white), not a fixed high-contrast palette, so this mainly shows _which_ elements would change,
  not the exact colors a user would see.

## Theme files

### candidate-theme.css

Temporary design tokens for components not yet in the candidate-theme tokens package. Can be removed once
<https://github.com/nl-design-system/themes/pull/1248> is merged (see the file itself).

### candidate-disable-css.css

The CSS rule `CandidateDisableCssDecorator` uses.

## Other

### DocsHeader

Renders external links (`parameters.externalLinks`) above a story on the Storybook docs page.
