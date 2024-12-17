# @nl-design-system-candidate/code-css

## 2.0.0

### Major Changes

- c555ca8: Remove `nl.code.line-height` token. The container component of inline components must configure the line-height. With this change this component follows the Design Token conventions.

## 1.1.0

### Minor Changes

- 98b0b04: Optimize rendering of Code to fit on one line, and use word breaks without hyphenation if the content doesn't fit on one line.
- 264dde4: Render white space characters in Code without white-space collapse.

## 1.0.0

- Initial release.
