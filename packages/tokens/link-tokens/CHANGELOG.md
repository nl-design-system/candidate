# @nl-design-system-candidate/link-tokens

## 3.0.3

### Patch Changes

- fbf129c: Update package.json#description to follow format "Design tokens voor de {Component Name} component".

## 3.0.2

### Patch Changes

- 2cf5367: Release with trusted npm publishing process.

## 3.0.1

### Patch Changes

- 3444020: Add missing "homepage" field to package.json

## 3.0.0

### Major Changes

- f8a16bf: This release contains **breaking** changes.

  The following tokens were never used in the community and have been removed:
  - `nl.link.active.text-decoration-line`
  - `nl.link.active.text-decoration-thickness`

  We are working towards common design tokens that take care of the focus state instead of handling this at the component level. Therefore the following focus related tokens have been removed:
  - `nl.link.focus-visible.background-color`
  - `nl.link.focus-visible.color`
  - `nl.link.focus-visible.text-decoration-line`
  - `nl.link.focus-visible.text-decoration-thickness`

## 2.0.0

### Major Changes

- d9a7c2c: The `nl.link.current.font-weight` token was removed.
  The `nl.link.disabled.font-weight` token was removed.

### Minor Changes

- d9a7c2c: Add `nl.link.focus-visible.*` tokens. Subject to change as it is likely for these to be moved to common tokens.

  Add `nl.link.active.text-decoration-line` and `nl.link.active.text-decoration-thickness` tokens.

### Patch Changes

- d9a7c2c: Add provenance

## 1.0.0

### Major Changes

- c586663: Initial release of Link.
