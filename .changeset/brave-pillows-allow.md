---
'@nl-design-system-candidate/link-css': major
---

This release contains potentially **breaking** changes:

- The `nl-link--disabled` mixin now uses the `nl-link-disabled-color` token instead of `nl-link-placeholder-color` that was removed.
- The `nl-link--disabled` mixin now uses the `nl-link-disabled-cursor` token instead of `nl-link-placeholder-cursor` that was removed.
- The `nl-link--disabled` mixin no longer sets a `font-weight`.
- The `nl-link--current` mixin no longer sets a `font-weight`.

We are working towards common design tokens that take care of the focus state instead of handling this at the component level.

- All references to focus have been removed.
