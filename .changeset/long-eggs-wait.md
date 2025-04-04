---
'@nl-design-system-candidate/paragraph-css': minor
---

Margin can now be set on a Paragraph using the following tokens:

- `--nl-paragraph-margin-block-start`
- `--nl-paragraph-margin-block-end`

Both of these tokens, when not set, default to `revert` honouring either user styles or user agent styles.

Margin can also be explicitly set on lead Paragraphs (`class="nl-paragraph nl-paragraph--lead"`) using:

- `--nl-paragraph-lead-margin-block-start`
- `--nl-paragraph-lead-margin-block-end`

Both of these default to their non-lead equivalent.
