/* eslint-disable sonarjs/no-skipped-tests */
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';
import { cartesianProduct } from 'es-toolkit';
import { Button } from './css';
import type { ButtonHint, ButtonPurpose } from './button';

const purposes = ['primary', 'secondary', 'subtle'] as const satisfies readonly ButtonPurpose[];
const hints = [undefined, 'positive', 'negative'] as const satisfies readonly (ButtonHint | undefined)[];
const states = ['default', 'hover', 'focus-visible', 'disabled', 'busy', 'pressed'] as const;

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

test('maps to system colors in forced-colors (Windows High Contrast) mode', async ({ mount, page, browserName }) => {
  // forcedColors emulation is only supported in Chromium
  test.skip(browserName !== 'chromium', 'forced-colors emulation is only supported in Chromium');

  await page.emulateMedia({ forcedColors: 'active' });
  const component = await mount(<Button purpose="primary">Klik mij</Button>);

  await expect(component).toHaveCSS('background-color', 'rgb(255, 255, 255)'); // ButtonFace
  await expect(component).toHaveCSS('border-color', 'rgb(0, 0, 0)'); // ButtonText
  await expect(component).toHaveCSS('color', 'rgb(0, 0, 0)'); // ButtonText
});

test('applies a distinct visual style when reached via keyboard focus (:focus-visible)', async ({
  mount,
  page,
  browserName,
}) => {
  // Safari does not support Tab key focus without system-level setting
  test.skip(browserName === 'webkit', 'Tab key focus is not supported in WebKit without system preferences change');

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

test('is exposed as disabled to the real accessibility tree while remaining focusable', async ({
  mount,
  page,
  browserName,
}) => {
  // Safari does not support Tab key focus without system-level setting
  test.skip(browserName === 'webkit', 'Tab key focus is not supported in WebKit without system preferences change');

  const component = await mount(<Button disabled>Klik mij</Button>);

  await page.keyboard.press('Tab');
  await expect(component).toBeFocused();
  await expect(component).toMatchAriaSnapshot('- button "Klik mij" [disabled]');
});

test('is exposed as disabled to the real accessibility tree while busy, unless it is a toggle button', async ({
  mount,
  browserName,
}) => {
  // Safari does not support Tab key focus without system-level setting
  test.skip(browserName === 'webkit', 'Tab key focus is not supported in WebKit without system preferences change');

  const component = await mount(
    <>
      <Button busy>Verzenden</Button>
      <Button busy toggle pressed>
        Like
      </Button>
    </>,
  );

  const submitButton = component.getByRole('button', { name: 'Verzenden' });
  const toggleButton = component.getByRole('button', { name: 'Like' });

  await expect(submitButton).toMatchAriaSnapshot('- button "Verzenden" [disabled]');
  await expect(toggleButton).toMatchAriaSnapshot('- button "Like" [pressed]');

  // A busy toggle button must stay operable, so an accidental toggle can still be undone.
  await toggleButton.focus();
  await expect(toggleButton).toBeFocused();
  await expect(toggleButton).toBeEnabled();
});

test('keeps a busy toggle button clickable, so an accidental toggle can be undone', async ({ mount }) => {
  const clicks: boolean[] = [];
  const component = await mount(
    <Button
      busy
      toggle
      pressed
      onClick={() => {
        clicks.push(true);
      }}
    >
      Like
    </Button>,
  );

  await component.click();

  expect(clicks).toEqual([true]);
});

// Cartesian product: purpose × hint × state
for (const [purpose, hint, state] of cartesianProduct(purposes, hints, states)) {
  // hint only applies when purpose is set, skip undefined hint + non-default state duplicates
  const label = [purpose, hint, state].filter(Boolean).join(' / ');

  test(`has no accessibility violations: ${label}`, async ({ mount, page, browserName }) => {
    test.skip(
      state === 'focus-visible' && browserName === 'webkit',
      'Tab key focus is not supported in WebKit without system preferences change',
    );

    const component = await mount(
      <Button
        purpose={purpose}
        hint={hint}
        disabled={state === 'disabled'}
        busy={state === 'busy'}
        pressed={state === 'pressed'}
      >
        {label}
      </Button>,
    );

    if (state === 'hover') await component.hover();
    else if (state === 'focus-visible') await page.keyboard.press('Tab');

    const results = await new AxeBuilder({ page }).include('#root').analyze();
    expect(results.violations).toEqual([]);
  });
}
