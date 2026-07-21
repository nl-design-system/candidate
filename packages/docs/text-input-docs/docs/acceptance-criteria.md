<!-- @license CC0-1.0 -->

# Acceptatiecriteria voor het maken van de Text Input component

## Varianten

### Deze varianten worden ondersteund

- Varianten die standaard in HTML beschikbaar zijn, worden in Typescript gedefinieerd door de attributen van het standaard HTMLElement te gebruiken.
- Varianten die niet standaard in HTML beschikbaar zijn, worden als uitbreiding toegevoegd.
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
- Deze varianten worden niet gedocumenteerd.
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

## Acceptatiecriteria toegankelijkheid van de component

- Het is mogelijk om autocomplete in te stellen bij de Text Input.
- Placeholderteksten blijven leesbaar wanneer de tekstafstand vergroot wordt.
- Als je de tekst van placeholders vergroot tot 200% blijft deze in zijn geheel zichtbaar.
- Je kunt de Text Input bereiken en bedienen met het toetsenbord.
- Als de Text Input de toetsenbordfocus krijgt is de focus zichtbaar.
- Het is mogelijk de Text Input een toegankelijke naam en de juiste rol te geven en het `value`-attribuut is aanwezig en instelbaar.

[Meer informatie over deze acceptatiecriteria lees je op de componentpagina op de website van NL Design System.](https://nldesignsystem.nl/text-input/)

## Acceptatiecriteria APIs van de component

### CSS API

- Block class: `nl-text-input`

- Element classes:
  - `nl-text-input__placeholder`

- Modifier classes:

  **States**
  - `nl-text-input--invalid`
  - `nl-text-input--disabled`
  - `nl-text-input--hover`
  - `nl-text-input--focus-visible`
  - `nl-text-input--read-only`
  - `nl-text-input--required`

  **Sizes**
  - `nl-text-input--xs`
  - `nl-text-input--sm`
  - `nl-text-input--md`
  - `nl-text-input--lg`
  - `nl-text-input--xl`
  - `nl-text-input--stretch`

  **Types**
  - `nl-text-input--numeric`
  - `nl-text-input--password`
  - `nl-text-input--url`

- HTML classes:
  - `nl-html`
  - `nl-html--text-input`

    Daarbinnen selectors met automatische type-detectie:
    - `nl-text-input--password` via:
      - `[type="password" i]`

    - `nl-text-input--url` via:
      - `[type="url" i]`
      - `[type="email" i]`
      - `[inputMode="email" i]`
      - `[inputMode="url" i]`

    - `nl-text-input--numeric` via:
      - `[pattern="\\d*"]`
      - `[pattern="[0-9]*"]`
      - `[type="tel" i]`
      - `[inputMode="numeric" i]`
      - `[inputMode="decimal" i]`
      - `[inputMode="tel" i]`

#### Geldige combinaties van CSS classes

| Configuratie                                                     | Geldig | Opmerking                                                                                                                 |
| ---------------------------------------------------------------- | :----: | ------------------------------------------------------------------------------------------------------------------------- |
| `nl-text-input`                                                  |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--invalid`                           |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--disabled`                          |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--read-only`                         |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--required`                          |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--focus-visible`                     |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--hover`                             |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--invalid nl-text-input--required`   |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--disabled nl-text-input--required`  |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--read-only nl-text-input--required` |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--xs`                                |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--sm`                                |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--md`                                |   ✅   | Default styling                                                                                                           |
| `nl-text-input nl-text-input--lg`                                |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--xl`                                |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--stretch`                           |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--password`                          |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--url`                               |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--numeric`                           |   ✅   |                                                                                                                           |
| `nl-text-input nl-text-input--invalid nl-text-input--disabled`   |   ❌   | `invalid` en `disabled` mogen niet gecombineerd worden omdat een uitgeschakelde input niet interactief of valideerbaar is |
| `nl-text-input nl-text-input--disabled nl-text-input--read-only` |   ❌   | `disabled` en `read-only` vertegenwoordigen verschillende interactiestaten en mogen niet gecombineerd worden              |
| `nl-text-input nl-text-input--xs nl-text-input--sm`              |   ❌   | Er mag maximaal één size modifier actief zijn                                                                             |
| `nl-text-input nl-text-input--sm nl-text-input--md`              |   ❌   | Er mag maximaal één size modifier actief zijn                                                                             |
| `nl-text-input nl-text-input--md nl-text-input--lg`              |   ❌   | Er mag maximaal één size modifier actief zijn                                                                             |
| `nl-text-input nl-text-input--lg nl-text-input--xl`              |   ❌   | Er mag maximaal één size modifier actief zijn                                                                             |
| `nl-text-input nl-text-input--numeric nl-text-input--password`   |   ❌   | Er mag maximaal één type modifier actief zijn                                                                             |
| `nl-text-input nl-text-input--numeric nl-text-input--url`        |   ❌   | Er mag maximaal één type modifier actief zijn                                                                             |
| `nl-text-input nl-text-input--password nl-text-input--url`       |   ❌   | Er mag maximaal één type modifier actief zijn                                                                             |

## React API

### Extends

Extends `InputHTMLAttributes<HTMLInputElement>` voor standaard HTML-attributen en events van een HTML `input` element.

Alle standaard HTML-attributen en events worden doorgestuurd naar het onderliggende `input` HTML-element.

### Properties

De volgende props worden expliciet ondersteund:

| Prop           | Type                                                                                                                                               | Default | Verplicht | Omschrijving                                                                                                                                                                                                                                             |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`    | `string`                                                                                                                                           | -       | nee       | Extra CSS classes naast `nl-text-input`.                                                                                                                                                                                                                 |
| `ref`          | `Ref<HTMLInputElement>`                                                                                                                            | -       | nee       | Ref naar het onderliggende `input` HTML-element.                                                                                                                                                                                                         |
| `restProps`    | `InputHTMLAttributes<HTMLInputElement>`                                                                                                            | -       | nee       | Overige standaard HTML-attributen en events worden doorgestuurd naar het `input` HTML-element.                                                                                                                                                           |
| `type`         | `string \| 'text' \| 'password' \| 'email' \| 'tel' \| 'url' \| 'search' \| 'number' \| 'month' \| 'week' \| 'date' \| 'time' \| 'datetime-local'` | `text`  | nee       | Komt overeen met de `type` HTML-attribuut van de `input` HTML-element. Voegt de class `nl-text-input--password` toe bij `password`. Voegt de class `nl-text-input--url` toe bij `url` en `email`. Voegt de class `nl-text-input--numeric` toe bij `tel`. |
| `dir`          | `'auto'`                                                                                                                                           | -       | nee       | Richting van de tekstinvoer.                                                                                                                                                                                                                             |
| `invalid`      | `boolean`                                                                                                                                          | -       | nee       | Voegt de CSS class `nl-text-input--invalid` toe en zet het `invalid` HTML-attribuut met de waarde.                                                                                                                                                       |
| `aria-invalid` | `boolean \| 'grammar' \| 'spelling'`                                                                                                               | -       | nee       | Deprecated. Gebruik `invalid` tenzij de visuele styling en functionele invalid-state bewust los van elkaar moeten worden beheerd.                                                                                                                        |
| `disabled`     | `boolean`                                                                                                                                          | -       | nee       | Voegt de CSS class `nl-text-input--disabled` toe en zet het `disabled` HTML-attribuut.                                                                                                                                                                   |
| `focusVisible` | `boolean`                                                                                                                                          | -       | nee       | Voegt de CSS class `nl-text-input--focus-visible` toe om een zichtbare focus-state te forceren.                                                                                                                                                          |
| `readOnly`     | `boolean`                                                                                                                                          | -       | nee       | Voegt de CSS class `nl-text-input--read-only` toe en zet het `readonly` HTML-attribuut.                                                                                                                                                                  |
| `required`     | `boolean`                                                                                                                                          | -       | nee       | Voegt de CSS class `nl-text-input--required` toe en zet het `required` HTML-attribuut.                                                                                                                                                                   |
| `size`         | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'`                                                                                                   | -       | nee       | Bepaalt de grootte van het inputveld. `md` is de default styling. `full` vertaalt naar `nl-text-input--stretch`.                                                                                                                                         |

#### Deprecated gedrag

- Property `aria-invalid` is toegestaan, maar wordt afgeraden. Gebruik `invalid` om de visuele en functionele invalid-state van het component te beheren. Gebruik `aria-invalid` alleen wanneer je bewust de toegankelijkheidsstatus los wilt beheren van de visuele styling.

#### Geldige combinaties van React properties

| Configuratie                                        | Geldig | Opmerking                                                                                                                                      |
| --------------------------------------------------- | :----: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `<TextInput />`                                     |   ✅   |                                                                                                                                                |
| `<TextInput invalid />`                             |   ✅   |                                                                                                                                                |
| `<TextInput disabled />`                            |   ✅   |                                                                                                                                                |
| `<TextInput readOnly />`                            |   ✅   |                                                                                                                                                |
| `<TextInput required />`                            |   ✅   |                                                                                                                                                |
| `<TextInput focusVisible />`                        |   ✅   |                                                                                                                                                |
| `<TextInput invalid required />`                    |   ✅   |                                                                                                                                                |
| `<TextInput disabled required />`                   |   ✅   |                                                                                                                                                |
| `<TextInput readOnly required />`                   |   ✅   |                                                                                                                                                |
| `<TextInput size="xs" />`                           |   ✅   |                                                                                                                                                |
| `<TextInput size="sm" />`                           |   ✅   |                                                                                                                                                |
| `<TextInput size="md" />`                           |   ✅   | Default styling                                                                                                                                |
| `<TextInput size="lg" />`                           |   ✅   |                                                                                                                                                |
| `<TextInput size="xl" />`                           |   ✅   |                                                                                                                                                |
| `<TextInput size="full" />`                         |   ✅   | Voegt `nl-text-input--stretch` toe                                                                                                             |
| `<TextInput type="password" />`                     |   ✅   | Voegt `nl-text-input--password` styling toe                                                                                                    |
| `<TextInput type="url" />`                          |   ✅   | Voegt `nl-text-input--url` styling toe                                                                                                         |
| `<TextInput type="email" />`                        |   ✅   | Wordt behandeld als URL-type styling                                                                                                           |
| `<TextInput inputMode="numeric" />`                 |   ✅   | Voegt `nl-text-input--numeric` styling toe                                                                                                     |
| `<TextInput type="password" size="lg" />`           |   ✅   | Type en size mogen gecombineerd worden                                                                                                         |
| `<TextInput invalid size="xl" />`                   |   ✅   | State en size mogen gecombineerd worden                                                                                                        |
| `<TextInput disabled readOnly />`                   |   ❌   | `disabled` en `readOnly` mogen niet gecombineerd worden                                                                                        |
| `<TextInput invalid disabled />`                    |   ❌   | `invalid` en `disabled` mogen niet gecombineerd worden                                                                                         |
| `<TextInput size="xs" size="lg" />`                 |   ❌   | Er mag maximaal één size-waarde actief zijn                                                                                                    |
| `<TextInput invalid={false} aria-invalid="true" />` |   ⚠️   | Toegestaan, maar `aria-invalid` is deprecated. Gebruik alleen wanneer de visuele styling en functionele invalid-state bewust gescheiden worden |
