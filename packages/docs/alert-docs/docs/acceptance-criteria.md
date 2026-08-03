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

- Info (default)
- Error
- Success
- Warning

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

### Deze varianten worden niet ondersteund

#### Sluit-functie

Hoewel er in de community meerdere Alerts met een sluit-functie zijn, wordt deze functie niet meegenomen voor de Candidate component.

## Acceptatiecriteria toegankelijkheid van de component

- Tekst in de Alert blijft leesbaar wanneer de tekstafstand vergroot wordt.
- De Alert is standaard niet bereikbaar en bedienbaar met het toetsenbord.
- Het is mogelijk om via code de toetsenbordfocus naar de Alert te verplaatsen.
- Het is mogelijk om van de Alert een live-region te maken.

[Meer informatie over deze acceptatiecriteria lees je op de componentpagina op de website van NL Design System.](https://nldesignsystem.nl/alert/)
