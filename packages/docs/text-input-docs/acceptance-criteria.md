<!-- @license CC0-1.0 -->

# Acceptatiecriteria voor het maken van de Text Input component

## Varianten

### Deze varianten worden ondersteund:

- Varianten die standaard in HTML beschikbaar zijn, worden in Typescript gedefinieerd door de attributen van het standaard HTMLElement te gebruiken.
- Varianten die niet standaard in HTML beschikbaar zijn, worden als uitgebreiding toegevoegd.
- Deze varianten worden gedocumenteerd op de website, in de README en in de standaard Storybook.
- Deze varianten worden beschikbaar gemaakt in Figma.

{
**{variant-groep}** - (enum / boolean / string / number)

Is het een enum? Noteer dan de waarden en of er een default is.

- {variant-naam}(default)
- {variant-naam}
- {variant-naam}

Is het een boolean? Noteer dan de twee opties en welke de default is.

- true (default)
- false

Is het een string of number? Laat deze dan leeg.
}

### Deze varianten worden niet ondersteund:

{
optioneel:

- Deze varianten, die standaard in HTML beschikbaar zijn, worden niet ondersteund. Ze worden uit het HTMLElement-type gehaald met Omit tijdens het definiëren van de properties in Typescript.
- Deze varianten worden niet gedocumenteerd
- Deze varianten worden niet beschikbaar gemaakt in Figma.

Documenteer de niet-ondersteunde varianten op basis van de notulen in dit GitHub-issue.
}

### Deze varianten worden ondersteund, maar raden we niet aan:

{
optioneel:

- Omdat deze varianten standaard in HTML beschikbaar zijn, worden ze ondersteund. Dit doen we door het HTMLElement-type te extenden in Typescript.
- Deze varianten worden niet gedocumenteerd op de website, in de README en in de standaard Storybook.
- Deze varianten worden wel meegenomen in de 'Test' Storybook.
- Deze varianten worden beschikbaar gemaakt in Figma.

Documenteer de ondersteunde, maar niet aangeraden varianten op basis van de notulen in dit GitHub-issue.
}
