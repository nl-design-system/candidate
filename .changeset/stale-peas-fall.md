---
'@nl-design-system-candidate/color-sample-css': minor
---

Make the CSS-only variant of Color Sample render an actual color, with correct transparency blending against the checkerboard, without requiring the React SVG implementation. It reads the standard CSS `color` property (matching how the React SVG's `fill="currentColor"` already works) rather than introducing a new component-specific custom property, since a dedicated color token on this kind of component has previously caused problems when it gets set globally via design tokens
