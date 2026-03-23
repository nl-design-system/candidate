<!-- @license CC0-1.0 -->

# Acceptatiecriteria voor het maken van de Text Input component

## Varianten

### Deze varianten worden ondersteund

- Varianten die standaard in HTML beschikbaar zijn, worden in Typescript gedefinieerd door de attributen van het standaard HTMLElement te gebruiken.
- Varianten die niet standaard in HTML beschikbaar zijn, worden als uitgebreiding toegevoegd.
- Deze varianten worden gedocumenteerd op de website, in de README en in de standaard Storybook.
- Deze varianten worden beschikbaar gemaakt in Figma.

#### Type {#type}

String (code) / Enum (design)

- Text (default)
- Email
- Url
- Tel
- Search
- Password

#### Width

Enum

- xs
- sm
- md (default)
- lg
- xl
- Full (100%)

#### Value

String (code) / Text - string (design)

#### Show Placeholder

Boolean

- False (default)
- True

#### Placeholder

String (code) / Text - string (design)

#### State

Enum

- Default (default)
- Hover
- Focus-visible

#### Disabled

Boolean

- False (default)
- True

#### Invalid

Boolean

- False (default)
- True

#### Read-only

Boolean

- False (default)
- True

#### Required

Boolean

- False (default)
- True

### Deze varianten worden niet ondersteund

- Deze varianten, die standaard in HTML beschikbaar zijn, worden niet ondersteund. Ze worden uit het HTMLElement-type gehaald met Omit tijdens het definiëren van de properties in Typescript.
- Deze varianten worden niet gedocumenteerd
- Deze varianten worden niet beschikbaar gemaakt in Figma.

#### Type {#not-supported-type}

- Color
- Range
- Radio
- Checkbox
- File
- Submit
- Image
- Reset
- Button

### Deze varianten worden ondersteund, maar raden we niet aan

- Omdat deze varianten standaard in HTML beschikbaar zijn, worden ze ondersteund. Dit doen we door het HTMLElement-type te extenden in Typescript.
- Deze varianten worden niet gedocumenteerd op de website, in de README en in de standaard Storybook.
- Deze varianten worden wel meegenomen in de 'Test' Storybook.
- Deze varianten worden beschikbaar gemaakt in Figma.

#### Type {#not-suggested-type}

- Hidden
- :not([type])
- Date
- Month
- Week
- Time
- Datetime-local
- Number
