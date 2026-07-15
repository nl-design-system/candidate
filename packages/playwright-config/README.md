<!-- @license CC0-1.0 -->

# Playwright Config

Private [Playwright Component Testing](https://playwright.dev/docs/test-components) configuration package for React components. Use this to improve consistency and reduce code duplication.

## Usage

A component package consumes the shared config by spreading it into its own `playwright-ct.config.ts`, the same way packages already extend `@nl-design-system/rollup-config-react-component` in their `rollup.config.mjs`.

See [`packages/components-react/button-react`](../components-react/button-react) for a complete, working reference implementation. The files to copy and adapt are:

- [`playwright-ct.config.ts`](../components-react/button-react/playwright-ct.config.ts) — Playwright CT config, spreads the shared config and sets `testDir`, `testMatch`, `ctTemplateDir`, and `ctCacheDir`
- [`tsconfig.e2e.json`](../components-react/button-react/tsconfig.e2e.json) — TypeScript config scoped to the e2e files, with `allowImportingTsExtensions` enabled
- [`e2e/playwright/index.html`](../components-react/button-react/e2e/playwright/index.html) — CT mount template
- [`e2e/playwright/index.tsx`](../components-react/button-react/e2e/playwright/index.tsx) — CT mount entry point (empty unless global setup is needed)
- [`src/button.test-e2e.tsx`](../components-react/button-react/src/button.test-e2e.tsx) — example spec file using `*.test-e2e.tsx` naming convention

### Steps

#### 1. Add the dependencies

```shell
pnpm --filter @nl-design-system-candidate/<component>-react add -D @nl-design-system-candidate/playwright-config @playwright/experimental-ct-react
```

#### 2. Copy and adapt the config files

Copy the files listed above from `button-react` and replace references to `button` with your component name.

#### 3. Add scripts to `package.json`

```json
{
  "scripts": {
    "test-e2e": "playwright test --config ./playwright-ct.config.ts"
  }
}
```

Also exclude `*.test-e2e.tsx` from the package's `vitest.config.ts`, otherwise Vitest tries to run the Playwright spec files itself:

```ts
export default defineConfig({
  test: {
    exclude: ['**/node_modules/**', '**/dist/**', '**/*.test-e2e.tsx'],
  },
});
```

## Running tests

Install the browser binaries once (per machine, not per package):

```shell
pnpm exec playwright install
```

Then, from a component package:

```shell
pnpm run test-e2e
```
