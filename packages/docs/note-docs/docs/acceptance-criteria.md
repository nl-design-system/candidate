<!-- @license CC0-1.0 -->

# Acceptatiecriteria voor het maken van de Alert component

## Varianten

### Deze varianten worden ondersteund

- Varianten die standaard in HTML beschikbaar zijn, worden in Typescript gedefinieerd door de attributen van het standaard HTMLElement te gebruiken.
- Varianten die niet standaard in HTML beschikbaar zijn, worden als uitgebreiding toegevoegd.
- Deze varianten worden gedocumenteerd op de website, in de README en in de standaard Storybook.
- Deze varianten worden beschikbaar gemaakt in Figma.

#### Purpose

Enum

- Default (default)
- Error
- Success
- Warning
- Accent-1
- Accent-2
- Accent-3

#### Show Icon

Boolean

- True (default)
- False

#### Icon

Slot

#### Show Header

Boolean. Alleen nodig wanneer het niet mogelijk is automatisch te herkennen dat de Header slot leeg is.

- True (default)
- False

#### Header

Slot

Heading (default)

#### Body

Slot

Paragraph (default)

#### Show Footer

Boolean. Alleen nodig wanneer het niet mogelijk is automatisch te herkennen dat de Footer slot leeg is.

- True
- False (default)

#### Footer

Slot

- Action Group
- Button
- Link

---

#### Show Header - boolean

- True (default)
- False

#### Header - slot

Heading (default)

#### Body - slot

Paragraph (default)

#### Show Footer - boolean

- True
- False (default)

#### Footer - slot

- Action Group
- Button
- Link

#### Element - enum

- Div (default)
- Article
- Aside
- Section
- Footer

### Mis je een variant?

Laat het in deze Discussion weten als er uit gebruikersonderzoek naar voren is gekomen dat deze design beslissing een hele verbetering zou zijn.

**💡 Tip**
Je kunt [varianten ook als extensie toevoegen](https://www.nldesignsystem.nl/handboek/componenten-vinden/#ik-mis-een-functionaliteit-binnen-een-candidate-of-hall-of-fame-component-wat-nu) aan een component.
