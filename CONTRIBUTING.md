# Bijdragen aan dit project

Allereerst bedankt voor je bijdrage! Lees onderstaande richtlijnen om het bijdragen zo soepel mogelijk te laten verlopen.

## Voorbereiden

- Bekijk de [README.md](./README.md) voor informatie over hoe je het project opzet en gebruikt.
- Lees ook de bestaande issues en pull requests om te voorkomen dat je werk dubbel wordt gedaan.

## Bijdragen

Er zijn twee manieren om bij te dragen:

### 1. Een issue aanmaken

- Maak een issue aan via GitHub.
- Gebruik de juiste issue template om je vraag of probleem zo volledig mogelijk te omschrijven.

### 2. Een branch of pull request maken

Omdat je **geen rechten hebt om direct naar deze repository te pushen**, volg je deze stappen:

1. [**Fork**](/nl-design-system/candidate/fork) deze repository naar je eigen GitHub account.
2. Maak een nieuwe branch voor je wijzigingen en commit je wijzigingen in je eigen fork.
3. Push je branch naar je eigen fork op GitHub.
4. Maak vanuit je fork een **pull request** naar de `main` branch van deze repository.

**Tips**:

- Voeg een duidelijke titel en beschrijving toe aan je PR.
- Kleine, overzichtelijke PR's zijn makkelijker te beoordelen en sneller te mergen.

## `storybook`

Deze Storybook bevat beknopte documentatie van de publieke API van elke component.

Er is documentatie voor de volgende varianten:

- Alle componenten hebben variant voor HTML met CSS class names met BEM naamgeving. Hier kun voorbeeldcode vinden voor de HTML-structuur. De broncode van de HTML-variant wordt gegenereerd op basis van de React-implementatie.
- Alle componenten hebben een React implementatie.
- Sommige componenten hebben een vanilla HTML implementatie.

## `storybook-test`

`storybook-test` bevat een zeer grote hoeveelheid testscenario's waarin componenten op een toegankelijke manier worden gebruikt. Alle varianten moeten volledig getest zodat de component toegankelijk ingezet kan worden in diverse situaties. Als in de praktijk een component op een bepaalde manier wordt gebruikt,

- De diverse manieren waarop een component in de praktijk gebruikt wordt, of kan worden, moeten hier gedocumenteerd zijn als testscenario. Op deze manier kunnnen we nauwkeurig controleren dat nieuwe versies backwards compatible releases zijn.
- De diverse manieren waarop een component toegankelijk gebruikt kan worden, moeten hier gedocumenteerd zijn. Op deze manier weet je snel of de manier waarop een component in de praktijk gebruikt wordt, compatible is met de NL Design System Baseline.
- We testen of de CSS robuust genoeg is dat het ook op ongebruikelijke HTML-elementen toegepast kan worden, zoals `span` en `div`. Op die manier is de CSS ook compatible om toe te passen op custom elements.

### CSS robuust voor alternatieve HTML-elementen

Een Paragraph component wordt standaard gemaakt met een `<p>` HTML-element, om te voldoen aan WCAG 1.3.1.

De CSS van de Paragraph component moet zo robuust mogelijk zijn, zodat zoveel mogelijk hetzelfde werkt wanneer je een alternatief HTML-element gebruikt, zoals `div`, `span` of een Custom Element zoals `nl-paragraph`.

Pas je CSS aan zodat:

- `display: block` is onderdeel van de user agent stylesheet voor het `p` element, maar voeg deze CSS expliciet toe zodat de CSS ook werkt voor alternatieve elementen zoals `span` en `nl-paragraph`.
- `overflow` is onderdeel van user agent stylesheets voor formulier elementen, zoals `input`, `textarea` en `select`. Pas deze expliciet toe zodat je ook een formulier component visueel kunt namaken met elementen zoals `div`, `span` en `nl-input`. <!-- TODO: text wrap properties ook-->

Maak testscenario's waarin de component met alternatieve HTML-elementen wordt gemaakt, zodat je het verwachte gedrag van de CSS kan testen.

### CSS robuust door CSS variables met effectieve fallback

- `margin` is onderdeel van user agent stylesheets voor HTML-elementen zoals `p`, `ul`, `ol`, `li`, `dl`, `h1`-`h6`, `table`, etcera.

Maak testscenario's waarin deze CSS variables niet zijn ingesteld, zodat je het verwachte gedrag van de fallback kan testen.

Bijvoorbeeld:

```jsx
export const ExampleCssFallbackStory: Story = {
  args: {
    style: {
      '--example-paragraph-margin-block': 'revert',
    },
  },
};
```

### CSS getest met user preferences voor tekstafstand

De component moet zich aanpassen aan user preferences voor `line-height`, `letter-spacing` en `word-spacing` om te voldoen aan [WCAG-succescriterium 1.4.12](https://nldesignsystem.nl/wcag/1.4.12/).

Maak testscenario's waarin deze de component wordt gebruikt in een parent element waarin deze instellingen zijn aangepast naar de instellingen die genoemd worden in WCAG:

```css
.example-text-spacing-user-preference * {
  letter-spacing: 0.12em !important;
  line-height: 3 !important;
  word-spacing: 0.16em !important;
}
```

Bijvoorbeeld:

```jsx
export const ExampleTextScalingStory: Story = {
  decorators: [LargeLineHeightDecorator, UserPreference2rem]
};
```

### CSS getest met user preferences voor tekstgrootte

De component moet zich aanpassen aan user preferences voor `font-size` om te voldoen aan [WCAG-succescriterium 1.4.4 Herschalen van tekst](https://nldesignsystem.nl/wcag/1.4.4/).

```css
.example-text-spacing-user-preference * {
  font-size: 3em;
}
```

### CSS getest met forced colors mode

Soms is er extra CSS nodig om de component geschikt te maken voor forced colors mode. Bijvoorbeeld [in een media query voor `forced-colors: active`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/forced-colors).

Maak dan een SCSS mixin zodat dezelfde CSS gebruikt kan worden voor de media query en de class name om te testen. Plaats de mixin in `_mixin.scss`:

```scss
@mixin example-component--forced-colors {
  color: currentColor;
}
```

Gebruik de mixin voor de component in `component.css`:

```scss
@media (forced-colors: active) {
  .example-component {
    @include example-component--forced-colors;
  }
}
```

Gebruik de mixin voor de component ook in `test.css` om de class name voor testomgevingen te maken:

```scss
.example-component--forced-colors {
  @include example-component--forced-colors;
}
```

Voeg in voor deze componenten testscenario's toe waarin de een simulatie van forced colors mode getest kan worden, door het toevoegen van extra class names.

Deze extra class names zijn alleen bedoeld voor een testomgeving, niet voor productie. De class names zijn wel beschikbaar in de npm package voor de CSS component, zodat andere testomgevingen ook gebruik kunnen maken van dezelfde code.

Bijvoorbeeld:

```jsx
import '@example/component-css/dist/test.css';

/* ... */

export const ExampleForcedColorsStory: Story = {
  args: {
    className: 'example-component--test-forced-colors'
  }
};
```

Wanneer een component varianten heeft die in forced colors mode verschillen, dan moet voor elke variant en relevante combinaties een testscenario gemaakt worden. Bijvoorbeeld:

- Wanneer de parent component een link is
- Wanneer de parent component een button is
- Standaard
- Focus
- Disabled
- Read only
- Selected
- Disabled + Selected
- Pressed

Lees meer forced colors bij [NL Design System: Let op voorkeursinstellingen voor kleur](https://nldesignsystem.nl/richtlijnen/stijl/kleuren/voorkeuren/).

Lees meer over states bij [NL Design System: Namen van States](https://nldesignsystem.nl/handboek/developer/state-conventie/).

### CSS

## `storybook-non-conforming`, beter bekend als: Evil Storybook 😈

`storybook-test` bevat een uitgebreide verzameling scenario's waarin de componenten op een onjuiste manier wordt toegepast. Er wordt uitgelegd waar

## Vragen?

Maak een issue aan, neem contact op met het [kernteam](https://nldesignsystem.nl/project/kernteam/) of stel je vraag in het [#nl-design-system Slack kanaal](https://praatmee.codefor.nl) op CodeForNL.

Bedankt voor je bijdrage!
