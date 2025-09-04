<!-- @license CC0-1.0 -->

# Color Sample

Toont een voorbeeld van een kleur.

## Features

- Semantisch HTML: een `svg` element.
- Met het `style` attribuut op het `svg` element wordt een CSS `color` gezet.
- De kleur wordt via `currentcolor` overgenomen als de `fill` van het `path` element in de `svg`.
- De Color Sample component is op zich een half fabrikaat. Voor correct gebruik moet met het `aria-labelledby` attribuut
  verwezen worden naar een ander element met daarin een beschrijving.
- Naast `aria-labelledby` kan ook de `label` prop gebruikt worden om een een label in de vorm van een SVG `title`
  element in de Color Sample te laten renderen.

Algemene features:

- Het is mogelijk eigen CSS toe te passen door de class selector `.nl-color-sample` te gebruiken voor deze component.
- Het is mogelijk eigen class names toe te voegen aan deze component.
- Het is mogelijk `aria-*` attributen toe te voegen op het `svg` element met de `img` role.
