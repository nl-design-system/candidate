# @nl-design-system-candidate/mark-css

## 2.0.0

### Major Changes

- 52b06b1: **Breaking change**, but only for the few users of the SCSS mixins for HTML: the HTML SCSS mixin has been renamed from `mark` to `nl-html--mark`.
- d64859d: `dist/html/*.css` bevat nu een opt-in variant met de classes `.nl-html--all` en `.nl-html--mark`, in plaats van
  ongescopede selectors. De voorheen ongescopede, "vanilla" implementatie (zonder class name nodig) is verplaatst naar
  `dist/vanilla/*.css` en `src/vanilla/`.

### Patch Changes

- 7697f69: Fix component sizing by applying `box-sizing: border-box` to component elements.

## 1.0.5

### Patch Changes

- fbf129c: Update package.json#description to follow format "CSS voor de {Component Name} component".

## 1.0.4

### Patch Changes

- c943784: Remove deprecated styles
- 2cf5367: Release with trusted npm publishing process.

## 1.0.3

### Patch Changes

- 32a5a21: Add missing devDependencies so the project can be built on its own.

## 1.0.2

### Patch Changes

- 8659eb4: Update Sass build script to output compressed CSS

## 1.0.1

### Patch Changes

- 54aa4f1: Add provenance

## 1.0.0

### Major Changes

- ab9a850: Initial release.
