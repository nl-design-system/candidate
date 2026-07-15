import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';
import { Button } from '../src/css';

test('applies the button stylesheet', async ({ mount }) => {
  const component = await mount(<Button purpose="primary">Klik mij</Button>);

  await expect(component).toHaveCSS('cursor', 'pointer');
  await expect(component).toHaveCSS('border-style', 'solid');
});

test('visually hides the label when iconOnly is set, while keeping it in the accessibility tree', async ({ mount }) => {
  const component = await mount(
    <Button
      iconOnly
      iconStart={<span data-testid="icon-start">❤️</span>}
      iconEnd={<span data-testid="icon-end">🫶</span>}
      label="Like"
    />,
  );

  const label = component.locator('.nl-button__label').filter({ hasText: 'Like' });

  await expect(component.getByTestId('icon-start')).toBeVisible();
  await expect(component.getByTestId('icon-end')).toBeVisible();
  // The label is clipped to 1x1px (screen-reader-only), so it stays in the accessibility
  // tree while Playwright's `toBeVisible()` can't detect clip-path-based hiding.
  await expect(label).toHaveCSS('width', '1px');
  await expect(label).toHaveCSS('overflow', 'hidden');
  // The accessible name combines iconStart, label, and iconEnd content, in that order.
  await expect(component).toHaveAccessibleName('❤️ Like 🫶');
});

test('maps to system colors in forced-colors (Windows High Contrast) mode', async ({ mount, page }) => {
  await page.emulateMedia({ forcedColors: 'active' });
  const component = await mount(<Button purpose="primary">Klik mij</Button>);

  await expect(component).toHaveCSS('background-color', 'rgb(255, 255, 255)'); // ButtonFace
  await expect(component).toHaveCSS('border-color', 'rgb(0, 0, 0)'); // ButtonText
  await expect(component).toHaveCSS('color', 'rgb(0, 0, 0)'); // ButtonText
});

test('applies a distinct visual style when reached via keyboard focus (:focus-visible)', async ({ mount, page }) => {
  const component = await mount(<Button purpose="primary">Klik mij</Button>);

  await expect(component).toHaveCSS('outline-style', 'none');

  await page.keyboard.press('Tab');
  await expect(component).toBeFocused();

  await expect(component).toHaveCSS('outline-style', 'auto');
});

test('has no automatically detectable accessibility violations across purpose, hint, and disabled states', async ({
  mount,
  page,
}) => {
  await mount(
    <>
      <Button purpose="primary">Primary</Button>
      <Button purpose="primary" hint="positive">
        Positive
      </Button>
      <Button purpose="primary" hint="negative">
        Negative
      </Button>
      <Button purpose="secondary">Secondary</Button>
      <Button purpose="subtle">Subtle</Button>
      <Button disabled>Disabled</Button>
    </>,
  );

  // Scope the scan to the mounted component: the bare CT harness page has no <title>,
  // <main>, or heading, which would otherwise trigger unrelated page-structure violations.
  const results = await new AxeBuilder({ page }).include('#root').analyze();

  expect(results.violations).toEqual([]);
});

test('is exposed as disabled to the real accessibility tree while remaining focusable', async ({ mount, page }) => {
  const component = await mount(<Button disabled>Klik mij</Button>);

  await page.keyboard.press('Tab');
  await expect(component).toBeFocused();
  await expect(component).toMatchAriaSnapshot('- button "Klik mij" [disabled]');
});
