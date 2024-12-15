<!-- @license CC0-1.0 -->

# Code

Markeert code in lopende tekst

## Features

- Semantisch HTML: [een `code` element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-code-element).
- De tekstrichting van de code is links-naar-rechts ingesteld met het [HTML `dir` attribuut](https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute), ook in documenten waar de tekstrichting rechts-naar-links is.
- De code is gemarkeerd als niet-vertaalbaar met het [HTML `translate` attribuut](https://html.spec.whatwg.org/multipage/dom.html#the-translate-attribute) voor vertaalsoftware.
- Het visueel ontwerp is door een monospace lettertype goed te onderscheiden van gewone tekst.
- White space characters worden weergegeven, zowel space als newline characters.
- Woordafbreking werkt in Code, maar er worden geen woordafbrekingskarakters getoond die onduidelijkheid maken welke tekens onderdeel zijn van de originele code. Zelfs wanneer de omliggende tekst wel hyphenation gebruikt, gebruikt Code geen hypenation.
- Het visueel ontwerp blijft onderscheidend wanneer:
  - wanneer de CSS niet geladen kan worden;
  - wanneer er geen design tokens zijn ingesteld;
  - wanneer een webfont niet ingeladen kan worden.

Algemene features:

- Het is mogelijk eigen CSS toe te passen met class name selectors voor deze component.
- Het is mogelijk eigen class names toe te voegen aan deze componenten, voor eigen CSS.
- Je kunt de component verbergen met het `hidden` attribuut.
