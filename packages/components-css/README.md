<!-- @license CC0-1.0 -->

# NL Design System Candidate — CSS componenten

Deze map bevat de CSS implementaties van de NL Design System Candidate componenten.

## Sass configureren met `loadPaths`

Afhankelijk van de gebruikte tools kan het nodig zijn om Sass te configureren met `loadPaths` zodat pakketten uit de `node_modules` map gevonden kunnen worden bij het gebruik van `@use` of `@forward`.

### Vite

```js
// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ['node_modules'],
      },
    },
  },
};
```

### webpack (sass-loader)

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                loadPaths: ['node_modules'],
              },
            },
          },
        ],
      },
    ],
  },
};
```

### Handige bronnen

- [Sass JS API — `loadPaths`](https://sass-lang.com/documentation/js-api/interfaces/StringOptions/#loadPaths)
- [Vite — `css.preprocessorOptions`](https://vitejs.dev/config/shared-options.html#css-preprocessoroptions)
- [webpack — sass-loader `sassOptions`](https://webpack.js.org/loaders/sass-loader/#sassoptions)
