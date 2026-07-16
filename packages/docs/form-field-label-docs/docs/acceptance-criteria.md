<!-- @license CC0-1.0 -->

# Acceptatiecriteria voor het maken van de Form Field Label component

## Varianten

### Deze varianten worden ondersteund

- Varianten die standaard in HTML beschikbaar zijn, worden in Typescript gedefinieerd door de attributen van het standaard HTMLElement te gebruiken.
- Varianten die niet standaard in HTML beschikbaar zijn, worden als uitgebreiding toegevoegd.
- Deze varianten worden gedocumenteerd op de website, in de README en in de standaard Storybook.
- Deze varianten worden beschikbaar gemaakt in Figma.

#### Type

Enum

- Default (default)
- Option

#### Disabled

Boolean

- False (default)
- True

#### Children

Rich text (code) / Text - string (design)

## Semantiek

Dit zijn de acceptatiecriteria welke HTML elementen en HTML attributen het beste zijn voor deze component.

### Welke HTML elementen het beste zijn voor deze component

#### Must Have elementen

- De Form Field Label is opgemaakt met het HTML `label` element.

#### Could Have elementen

- De Form Field Label mag een inhoud bevatten welke bestaat in de vorm van Radio Button, Checkbox of Switch component.
- De Form Field Label mag een inhoud bevatten welke bestaat in de vorm van [phrasing content](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content-0) met uitzondering van [interactive content](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#interactive-content-0).

### Welke HTML attributen het beste zijn voor deze component

#### Must Have attributen

- De Form Field Label gebruikt geen HTML `tabindex` attribuut, de component is ondersteunend, niet interactief.

#### Could Have attributen

- De Form Field Label accepteert een HTML `for` attribuut, zodat het met een HTML `id` attribuut aan het input-element gekoppeld kan worden.

### Alternatieve HTML

#### Alternatieve HTML voor Form Field Label zonder `option`

- De CSS ondersteund een Form Field Label met de `nl-form-field-label` class op de HTML `label` element.
- De CSS ondersteund een Form Field Label met de `nl-form-field-label` class op de HTML `div` element.
- De CSS ondersteund een Form Field Label met de `nl-form-field-label` class op de HTML `span` element.
- De CSS ondersteund een Form Field Label binnen een element met de `nl-html` class met een HTML `label` element zonder component classes.
- De CSS ondersteund een Form Field Label binnen een element met de `nl-html--form-field-label` class met een HTML `label` element zonder component classes.
- De CSS ondersteund een semantische HTML Label bestaande uit een HTML `label` element zonder component classes.

#### Alternatieve HTML voor Form Field Label met `option`

- De CSS ondersteund een Form Field Label met de `nl-form-field-label` en `nl-form-field-label--option` class op de HTML `label` element.
- De CSS ondersteund een Form Field Label met de `nl-form-field-label` en `nl-form-field-label--option` class op de HTML `div` element.
- De CSS ondersteund een Form Field Label met de `nl-form-field-label` en `nl-form-field-label--option` class op de HTML `span` element.
- De CSS ondersteund een Form Field Label binnen een element met de `nl-html` class met een HTML `label` element zonder component classes.
- De CSS ondersteund een Form Field Label binnen een element met de `nl-html--form-field-label` class met een HTML `label` element zonder component classes.
- De CSS ondersteund een semantische HTML Label bestaande uit een HTML `label` element zonder component classes.

### Forced Colors modus

- De Form Field Label tekstkleur in Forced Colors modus is CanvasText.
- De Form Field Label tekstkleur van de `disabled` variant in Forced Colors modus is GrayText.
- De Form Field Label tekstkleur van de `option` variant in Forced Colors modus is CanvasText.

## Acceptatiecriteria toegankelijkheid van de component

- Het Form Field Label kan aan een element voor formulierinvoer gekoppeld worden.
- Als je de tekst van het Form Field Label vergroot tot 200% blijft deze in zijn geheel zichtbaar.
- Tekst in het Form Field Label blijft leesbaar wanneer de tekstafstand vergroot wordt.
- Het Form Field Label is standaard niet bereikbaar en bedienbaar met het toetsenbord.
- Het Form Field Label komt standaard niet voor in de focusvolgorde van de pagina.

[Meer informatie over deze acceptatiecriteria lees je op de componentpagina op de website van NL Design System.](https://nldesignsystem.nl/form-field-label/)
