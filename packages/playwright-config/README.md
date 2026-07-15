<!-- @license CC0-1.0 -->

# Playwright Config

Shared [Playwright Component Testing](https://playwright.dev/docs/test-components) config for the `*-react` packages under `packages/components-react/`. It provides one place to configure browsers, retries, and tracing, so individual packages don't each carry their own copy.

This package is private and is not published to npm.

## Usage

A component package consumes the shared config by spreading it into its own `playwright-ct.config.ts`, the same way packages already extend `@nl-design-system/rollup-config-react-component` in their `rollup.config.mjs`.

### 1. Add the dependencies

```shell
pnpm --filter @nl-design-system-candidate/<component>-react add -D @nl-design-system-candidate/playwright-config @playwright/experimental-ct-react
```

### 2. Add `e2e/playwright-ct.config.ts`

```ts
import { config } from '@nl-design-system-candidate/playwright-config/src/config.ts';
import { defineConfig } from '@playwright/experimental-ct-react';

export default defineConfig({
  ...config,
  testDir: '.',
});
```

The config is colocated with the tests in `e2e/` rather than at the package root, because most component packages have a `tsconfig.json` scoped to `./src/**/*` for their composite build, which can't be widened to also cover Playwright's own files. Add a scoped `e2e/tsconfig.json` alongside it:

```json
{
  "extends": "@nl-design-system/tsconfig",
  "compilerOptions": {
    "lib": ["DOM", "ESNext"],
    "module": "esnext",
    "moduleResolution": "bundler",
    "noEmit": true
  },
  "include": ["./**/*"]
}
```

### 3. Add the component testing template

Playwright Component Testing needs a template to mount components into. Add `e2e/playwright/index.html`:

```html
<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./index.tsx"></script>
  </body>
</html>
```

And `e2e/playwright/index.tsx` (empty unless the package needs global setup):

```tsx
export {};
```

### 4. Write a test

Import the component from its `css` entry point so real stylesheets are loaded, since that's the point of using a real browser instead of Vitest's jsdom environment:

```tsx
import { expect, test } from '@playwright/experimental-ct-react';
import { Button } from '../src/css';

test('applies the button stylesheet', async ({ mount }) => {
  const component = await mount(<Button purpose="primary">Klik mij</Button>);

  await expect(component).toHaveCSS('cursor', 'pointer');
});
```

### 5. Add scripts

```json
{
  "scripts": {
    "test:e2e": "playwright test --config ./e2e/playwright-ct.config.ts"
  }
}
```

Also exclude `e2e/` from the package's `vitest.config.ts`, otherwise Vitest tries to run the Playwright spec files itself:

```ts
export default defineConfig({
  test: {
    exclude: ['**/node_modules/**', '**/dist/**', './e2e/**'],
    // ...
  },
});
```

## Reference implementation

See `packages/components-react/button-react/e2e/` for a complete, working example.

## Running tests

Install the browser binaries once (per machine, not per package):

```shell
npx playwright install --with-deps chromium
```

Then, from a component package:

```shell
pnpm run test:e2e
```
