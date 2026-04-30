<!-- @license CC0-1.0 -->

# `@nl-design-system-candidate/paragraph-css`

## Installatie

npm:

```shell
npm install @nl-design-system-candidate/paragraph-css
```

pnpm:

```shell
pnpm add @nl-design-system-candidate/paragraph-css
```

yarn:

```shell
yarn add @nl-design-system-candidate/paragraph-css
```

## API

### CSS

De volgende CSS classes kunnen worden gebruikt:

- `.nl-paragraph`: styles voor een alinea aan tekst.
- `.nl-paragraph--lead`: styles voor een alinea met een introductie over het onderwerp aan het begin van een artikel.
- `.nl-paragraph__lead`: styles voor het interne `<b>` element.

### SCSS

De volgende SCSS mixins kunnen worden gebruikt:

- `nl-paragraph`: mixin met styles voor een alinea aan tekst.
- `nl-paragraph--lead`: mixin met styles voor een alinea met een introductie over het onderwerp aan het begin van een
  artikel.
- `nl-paragraph__lead-scss-workaround`: mixin met styles voor het interne `<b>` element. De suffix `-scss-workaround`
  wordt gebruikt omdat anders de mixin `nl-paragraph__lead` (met underscores) de mixin `nl-paragraph--lead` (met
  hyphens) zou overschrijven omdat Sass geen onderscheid maakt tussen hyphens en underscores.

## Gebruik

`@nl-design-system-candidate/paragraph-css` kan gebruikt worden als kant-en-klare CSS maar ook als SCSS.

### CSS

Om de styling met CSS classes (bijvoorbeeld `<p class="nl-paragraph">`) te gebruiken:

```CSS
@import '@nl-design-system-candidate/paragraph-css/paragraph.css';
```

Om de styling zonder CSS classes (bijvoorbeeeld `<p>`) te kunnen gebruiken:

```CSS
@import '@nl-design-system-candidate/paragraph-css/html/paragraph.css';
```

### SCSS

Voor de mixins `nl-paragraph`, `nl-paragraph--lead`, en `nl-paragraph__lead-scss-workaround`:

```SCSS
@import '@nl-design-system-candidate/paragraph-css/_mixin.scss';
```

Voor de versie zonder CSS classes:

```SCSS
@import '@nl-design-system-candidate/paragraph-css/html/_mixin.scss';
```

Afhankelijk van de gebruikte tools kan het nodig zijn om Sass te configureren met `loadPaths` zodat
`@nl-design-system-candidate/paragraph-css` gevonden kan worden in de `node_modules` folder.
