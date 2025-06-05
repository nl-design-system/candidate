<!-- @license CC0-1.0 -->

# Paragraph

Toont een alinea aan tekst.

## Installatie

Met npm

```shell
npm install @nl-design-system-candidate/paragraph-css
```

Met pnpm

```shell
pnpm add @nl-design-system-candidate/paragraph-css
```

Met yarn

```shell
yarn add @nl-design-system-candidate/paragraph-css
```

## API

### CSS

De volgende CSS classes kunnen gebruikt worden:

- `.nl-paragraph`: styles voor een alinea aan tekst.
- `.nl-paragraph--lead`: styles voor een alinea aan het begin van een artikel die een introductie geeft over het
  onderwerp.
- `.nl-paragraph__lead`: styles voor het interne `b` element dat dient als fallback voor als er geen CSS geladen kon
  worden.

### SCSS

De volgende SCSS mixins kunnen gebruikt worden:

- `nl-paragraph`: mixin met styles voor een alinea aan tekst.
- `nl-paragraph--lead`: mixin met de styles voor een alinea aan het begin van een artikel die een introductie geeft over
  het onderwerp.
- `nl-paragraph__lead-scss-workaround`: mixin met styles voor het interne `b` element dat dient als fallback voor als er
  geen CSS geladen kon worden. De suffix `-scss-workaround` wordt gebruikt omdat anders de mixin `nl-paragraph__lead`
  (met underscores) de mixin `nl-paragraph--lead` (met hyphens) zou overschrijven omdat Sass geen onderscheid maakt
  tussen hyphens en underscores.

## Gebruik

`@nl-design-system-candidate/paragraph-css` kan gebruikt worden als kant-en-klare CSS maar ook als broncode.

### Als CSS

Om de `.nl-paragraph`, `.nl-paragraph--lead`, en `nl-paragraph__lead` styling te kunnen gebruiken:

```CSS
@import '@nl-design-system-candidate/paragraph-css/paragraph.css';
```

Om de versie zonder CSS classes te kunnen gebruiken:

```CSS
@import '@nl-design-system-candidate/paragraph-css/html/paragraph.css';
```

Door deze versie te gebruiken krijgen alle `p` elementen de juiste styling.

### Als broncode

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
