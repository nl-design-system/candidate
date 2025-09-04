# @nl-design-system-candidate/link-css

## 2.0.1

### Patch Changes

- 32a5a21: Add missing devDependencies so the project can be built on its own.

## 2.0.0

### Major Changes

- 3ba7586: This release contains potentially **breaking** changes:
  - The `nl-link--disabled` mixin now uses the `nl-link-disabled-color` token instead of `nl-link-placeholder-color` that was removed.
  - The `nl-link--disabled` mixin now uses the `nl-link-disabled-cursor` token instead of `nl-link-placeholder-cursor` that was removed.
  - The `nl-link--disabled` mixin no longer sets a `font-weight`.
  - The `nl-link--current` mixin no longer sets a `font-weight`.

  We are working towards common design tokens that take care of the focus state instead of handling this at the component level.
  - All references to focus have been removed.

## 1.0.2

### Patch Changes

- 8659eb4: Update Sass build script to output compressed CSS

## 1.0.1

### Patch Changes

- 54aa4f1: Add provenance

## 1.0.0

### Major Changes

- c586663: Initial release of Link.
