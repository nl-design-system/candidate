# @nl-design-system-candidate/mark-tokens

## 2.0.3

### Patch Changes

- fbf129c: Update package.json#description to follow format "Design tokens voor de {Component Name} component".

## 2.0.2

### Patch Changes

- 2cf5367: Release with trusted npm publishing process.

## 2.0.1

### Patch Changes

- 3444020: Add missing "homepage" field to package.json
- 3444020: Add a missing "files" field in package.json.

  Because tokens.json was not ignored explicitly in .npmignore or .gitignore, it was always included in the package, so
  technically this is a patch change.

## 2.0.0

### Major Changes

- d9a7c2c: `$extensions` now uses `nl.nldesignsystem.css-property-syntax` instead of the nested `nl.nldesignsystem.css-property` and `nl.nldesignsystem.figma-implementation` instead of `nl.nldesignsystem.figma-available` for both the `nl.mark.background-color` and `nl.mark.color` tokens.

### Patch Changes

- d9a7c2c: Add provenance

## 1.0.0

### Major Changes

- ab9a850: Initial release.
