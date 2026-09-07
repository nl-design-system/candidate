<!-- @license CC0-1.0 -->

# NL Design System Candidate — CSS components

This directory contains the CSS implementations of the NL Design System Candidate components.

## Configuring Sass with `loadPaths`

Depending on the tools used, it may be necessary to configure Sass with `loadPaths` so that packages from the `node_modules` folder can be found when using `@use` or `@forward`.

### Vite

If you use Vite, you can add `node_modules` to `css.preprocessorOptions.scss.loadPaths` so that Sass can find packages in `node_modules` when you use `@use` or `@forward`. See also the [Vite documentation on `css.preprocessorOptions`](https://vitejs.dev/config/shared-options.html#css-preprocessoroptions).

```js
// vite.config.mjs
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

With webpack and `sass-loader`, you set `loadPaths` under `sassOptions`, so that Sass can resolve the same import paths. The relevant configuration is described in the [webpack documentation for `sass-loader` `sassOptions`](https://webpack.js.org/loaders/sass-loader/#sassoptions); for the underlying option, see also the [Sass JS API — `loadPaths`](https://sass-lang.com/documentation/js-api/interfaces/StringOptions/#loadPaths).

```js
// webpack.config.mjs
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/i,
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
