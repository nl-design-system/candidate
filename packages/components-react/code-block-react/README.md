<!-- @license CC0-1.0 -->

# Code Block

Blok met 1 of meerdere regels computercode.

## Features

- Semantisch HTML: een `pre` en een `code` element,
  [zoals de HTML-specificatie voorschrijft bij het `pre` element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element).
- De tekstrichting van de code is links-naar-rechts ingesteld met het
  [HTML `dir` attribuut](https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute), ook in documenten waar de
  tekstrichting rechts-naar-links is.
- De code is gemarkeerd als niet-vertaalbaar met het
  [HTML `translate` attribuut](https://html.spec.whatwg.org/multipage/dom.html#the-translate-attribute) voor
  automatische vertaalsoftware.
- Met de `overflow` property kan het overflow gedrag worden bepaald:
  - `overflow="wrap"`: de component wordt zonder `tabindex` attribuut gerenderd en tekst wrapt automatisch. Dit is de
    default, ook als de prop niet expliciet gezet is.
  - `overflow="nowrap"`: de component wordt zonder `tabindex` attribuut gerenderd, je moet dit zelf in combinatie met
    scroll gedrag op een parent element doen.
  - `overflow="overflow"`: de component wordt altijd mét een `tabindex="0"` attribuut gerenderd en heeft ingebouwd scroll
    gedrag.
- Het visueel ontwerp is door een monospace lettertype goed te onderscheiden van gewone tekst.
- Het visueel ontwerp blijft onderscheidend wanneer:
  - wanneer de CSS niet geladen kan worden;
  - wanneer er geen design tokens zijn ingesteld;
  - wanneer een webfont niet ingeladen kan worden.

Algemene features:

- Het is mogelijk eigen CSS toe te passen met class name selectors voor deze component.
- Het is mogelijk eigen class names toe te voegen aan deze componenten, voor eigen CSS.
- Je kunt de component verbergen met het `hidden` attribuut.
