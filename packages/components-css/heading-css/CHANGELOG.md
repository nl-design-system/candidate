# @nl-design-system-candidate/heading-css

## 2.0.0

### Major Changes

- 52b06b1: **Breaking change**, but only for the few users of the SCSS mixins for HTML: the following HTML SCSS mixins have been renamed:
  
  - `h1` has been renamed to `nl-html--heading-level-1`
  - `h2` has been renamed to `nl-html--heading-level-2`
  - `h3` has been renamed to `nl-html--heading-level-3`
  - `h4` has been renamed to `nl-html--heading-level-4`
  - `h5` has been renamed to `nl-html--heading-level-5`
  - `h6` has been renamed to `nl-html--heading-level-6`
- d64859d: `dist/html/*.css` bevat nu een opt-in variant met de classes `.nl-html--all` en `.nl-html--heading`, in plaats van
  ongescopede selectors. De voorheen ongescopede, "vanilla" implementatie (zonder class name nodig) is verplaatst naar
  `dist/vanilla/*.css` en `src/vanilla/`.

### Patch Changes

- 7697f69: Fix component sizing by applying `box-sizing: border-box` to component elements.

## 1.1.3

### Patch Changes

- fbf129c: Update package.json#description to follow format "CSS voor de {Component Name} component".

## 1.1.2

### Patch Changes

- c943784: Remove deprecated styles
- 2cf5367: Release with trusted npm publishing process.

## 1.1.1

### Patch Changes

- 32a5a21: Add missing devDependencies so the project can be built on its own.

## 1.1.0

### Minor Changes

- 8843d5c: Margins can now be set on Headings of all levels using the following tokens:
  - `nl-heading-level-1-margin-block-start`
  - `nl-heading-level-1-margin-block-end`
  - `nl-heading-level-2-margin-block-start`
  - `nl-heading-level-2-margin-block-end`
  - `nl-heading-level-3-margin-block-start`
  - `nl-heading-level-3-margin-block-end`
  - `nl-heading-level-4-margin-block-start`
  - `nl-heading-level-4-margin-block-end`
  - `nl-heading-level-5-margin-block-start`
  - `nl-heading-level-5-margin-block-end`
  - `nl-heading-level-6-margin-block-start`
  - `nl-heading-level-6-margin-block-end`

  All of these tokens, when they're not set, default to `revert` to honour either using user styles or user agent default styles.

## 1.0.2

### Patch Changes

- 8659eb4: Update Sass build script to output compressed CSS

## 1.0.1

### Patch Changes

- 54aa4f1: Add provenance

## 1.0.0

- Initial release.
