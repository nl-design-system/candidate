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

Deze Storybook bevat volledige documentatie van de publieke API van elke component. De documentatie moet effectief zijn voor developers om aan de slag te gaan met de component.

Het is de bedoeling deze informatie op de NL Design System website te publiceren. Daar zal de informatie beter te vinden zijn, en is daar onderdeel van een meer toegankelijke en gebruiksvriendelijke website. Deze Storybook zal in de toekomst de basis vormen voor de documentatie op de website.

Er zijn 3 soorten componenten, en voor elke soort implementatie moet er documentatie zijn:

- **HTML en CSS component:** alle componenten hebben variant voor HTML met CSS class names met BEM naamgeving. Hier kun voorbeeldcode vinden voor de HTML-structuur. De broncode van de HTML-variant wordt gegenereerd op basis van de React-implementatie.
- **React component:** alle componenten hebben een React implementatie.
- **Vanilla HTML component:** sommige componenten hebben een vanilla HTML implementatie.

### CSS componenten in `storybook`

De documentatie bevat in elk geval:

- Informatie over elke CSS class name die beschikbaar is.
- README met:
  - Informatie over de npm package waar de CSS gepubliceerd wordt.
  - Informatie over hoe je de CSS gebruikt in een prototype (`<link>` voor een CDN)
  - Informatie over hoe je de CSS gebruikt in JavaScript frameworks (`import "@example/component/dist/component.css";`)

### React componenten in `storybook`

De documentatie bevat in elk geval:

- Informatie over elke React property die beschikbaar is.
- Informatie over elke React component die beschikbaar is. Vaak is dat er maar 1, soms zijn er meerdere.
- Informatie over elke HTML attribuut die essentieel is om de component goed te gebruiken, bijvoorbeeld `aria-` attributen voor toegankelijkheid.

### Vanilla HTML componenten in `storybook`

De documentatie voor vanilla HTML componenten bevat in elk geval:

- Informatie over elk HTML-element en elke HTML-structuur waarop de CSS van de component wordt toegepast.
- README met:
  - Informatie over de npm package waar de CSS gepubliceerd wordt.
  - Informatie over hoe je de CSS gebruikt in een prototype (`<link>` voor een CDN)
  - Informatie over hoe je de CSS gebruikt in JavaScript frameworks (`import "@example/component/dist/vanilla.css";`)
  - Informatie over hoe je de CSS gebruikt met een wrapper class name (`class="nl-html nl-html--all"` of `class="nl-html nl-html--component"`)

## `storybook-test`

`storybook-test` bevat een zeer grote hoeveelheid testscenario's waarin componenten op een toegankelijke manier worden gebruikt. Alle varianten moeten volledig getest zodat de component toegankelijk ingezet kan worden in diverse situaties. Als in de praktijk een component op een bepaalde manier wordt gebruikt,

- De diverse manieren waarop een component in de praktijk gebruikt wordt, of kan worden, moeten hier gedocumenteerd zijn als testscenario. Op deze manier kunnnen we nauwkeurig controleren dat nieuwe versies backwards compatible releases zijn.
- De diverse manieren waarop een component toegankelijk gebruikt kan worden, moeten hier gedocumenteerd zijn. Op deze manier weet je snel of de manier waarop een component in de praktijk gebruikt wordt, compatible is met de NL Design System Baseline.
- We testen of de CSS robuust genoeg is dat het ook op ongebruikelijke HTML-elementen toegepast kan worden, zoals `span` en `div`. Op die manier is de CSS ook compatible om toe te passen op custom elements.

### Elke regel CSS testen

Maak voldoende testscenario's dat een wijziging in de CSS wordt opgemerkt door testautomatisering. Voor CSS zijn visuele regressietests vaak het meest effectief, omdat de CSS meestal een visueel effect heeft.

Bijvoorbeeld, de volgende CSS:

```css
.example-component:hover {
  color: var(--example-component-hover-color, currentColor);
}
```

- Test de `:hover` state door de hover state te simuleren in een Storybook story.
- Test de design token door de component te testen met het Voorbeeld Thema.
- Test de fallback waarde van de design token door te testen.

### CSS met BEM class names

We gebruiken BEM class names. Een nadeel van BEM class names is dat het `class` HTML-attribuut behoorlijk lang kan worden. Voor NL Design System zijn de voordelen belangrijker dan dit nadeel.

Bijvoorbeeld, met de BEM methode ziet een button `class` er zo uit: `class="nl-button nl-button--primary"`. Zonder onze classname-conventie had het veel korter kunnen zijn: `class="btn primary"`.

Voordelen van BEM class names:

- de naamgeving bevat de volledige naam van de component, en daarmee is de documentatie voor de component makkelijk terug te vinden.
- Code is makkelijker te begrijpen met minder afkortingen.
- De component is makkelijk te herkennen in code bases, door te zoeken op een precieze tekst zoals `example-component`.

Class names voor states volgen de [naamgeving van states](https://nldesignsystem.nl/handboek/developer/state-conventie/). Bijvoorbeeld:

- `example-component--active`
- `example-component--hover`
- `example-component--focus-visible`
- `example-component--pressed`
- `example-component--selected`

Wanneer er geen naam voor een state is, die het omgekeerde doet van een bestaande staat, gebruik dan `not`, in plaats van een nieuwe naam verzinnen.

- `example-component--not-expanded`
- niet: `example-component--collapsed`
- niet: `example-component--closed`

#### BEM class names voor testomgevingen

Sommige componenten hebben speciale CSS om bepaald gedrag te simuleren in een testomgeving.

`test.css` bevat de CSS voor testomgevingen. De CSS staat in een apart bestand, zodat de CSS voor productieomgevingen niet onnodig groot wordt en de laad-performance optimaal is.

Bijvoorbeeld:

```scss
@import './mixin';

.example-component--small {
  @include example-component--small;
}

.example-component--forced-colors {
  @include example-component--forced-colors;
}
```

Sommige class names CSS voor testomgevingen wordt wel geïmplementeerd in `component.css`, als het alleen een extra CSS selector is voor een bestaande feature.

Bijvoorbeeld, de `.example-component--focus-visible` is voor testomgevingen.

```css
.example-component:focus-visible,
.example-component--focus-visible {
  @include example-component--focus-visible;
}
```

### CSS herbruikbaar maken met mixins

Zorg dat er mixins zijn voor de verschillende variaties van een component, zodat dezelfde CSS gebruikt kan worden om de variant op een alternatieve manier te implementeren.

Bijvoorbeeld, een smalle variant van een component kan met een CSS container query geïmplementeerd worden, of met een media query. De volgende mixin maakt de CSS beschikbaar voor beide opties:

```scss
@mixin example-component--small-inline-container {
  /* ... */
}
```

Zorg dat er mixins zijn voor states, zodat die met een class name gesimuleerd kunnen worden in een testomgeving:

```scss
@mixin example-component--focus-visible {
  color: HighlightText;
}

.example-component:focus-visible,
.example-component--focus-visible {
  @include example-component--focus-visible;
}
```

In principe moet er geen CSS implementatie staan in `component.css`, alle CSS wordt toegepast via SCSS mixins. Plaats een code comment met uitlegt wanneer er een uitzondering wordt gemaakt.

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
- Active
- Focus
- Disabled
- Read only
- Selected
- Disabled + Focus
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
