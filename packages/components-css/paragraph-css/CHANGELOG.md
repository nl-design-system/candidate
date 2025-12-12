# @nl-design-system-candidate/paragraph-css

## 2.1.3

### Patch Changes

- fbf129c: Update package.json#description to follow format "CSS voor de {Component Name} component".

## 2.1.2

### Patch Changes

- 2cf5367: Release with trusted npm publishing process.

## 2.1.1

### Patch Changes

- 32a5a21: Add missing devDependencies so the project can be built on its own.

## 2.1.0

### Minor Changes

- bf3772d: Margin can now be set on a Paragraph using the following tokens:
  - `--nl-paragraph-margin-block-start`
  - `--nl-paragraph-margin-block-end`

  Both of these tokens, when not set, default to `revert` honouring either user styles or user agent styles.

  Margin can also be explicitly set on lead Paragraphs (`class="nl-paragraph nl-paragraph--lead"`) using:
  - `--nl-paragraph-lead-margin-block-start`
  - `--nl-paragraph-lead-margin-block-end`

  Both of these default to their non-lead equivalent.

## 2.0.2

### Patch Changes

- 8659eb4: Update Sass build script to output compressed CSS

## 2.0.1

### Patch Changes

- 54aa4f1: Add provenance

## 2.0.0

### Major Changes

- 5c327e8: Remove `--nl-document-*` custom properties, the fallback in this package is still `inherit`.

  Setting `--nl-paragraph-*` custom properties explicitly to keep styling as it was.

- 62354dc: Rename `_mixins.scss` to `_mixin.scss`, update imports accordingly
- 32c3df7: Rename the mixin `nl-paragraph__b` to `nl-paragraph__lead-scss-workaround`.
- 32c3df7: Rename the class name `nl-paragraph__b` to `nl-paragraph__lead`.

## 1.0.2

### Patch Changes

- 8625b40: Add "homepage" fields to package.json files

## 1.0.1

### Patch Changes

- 3bf7d5f: Add LICENSE.md and README.md
