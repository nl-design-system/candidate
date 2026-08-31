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

test('handles [autofocus] correctly', async ({ mount }) => {
  const component = await mount(<Button autoFocus>Klik mij</Button>);

  await expect(component).toBeFocused();
});

test('handles [commandfor="id"][command="show-modal"] correctly', async ({ mount }) => {
  const component = await mount(
    <>
      <Button commandfor="dialog" command="show-modal">
        Open dialog
      </Button>

      <dialog id="dialog">Dialog content</dialog>
    </>,
  );

  const button = component.getByRole('button');
  const dialog = component.locator('#dialog');

  await expect(button).toHaveAttribute('commandfor', 'dialog');
  await expect(button).toHaveAttribute('command', 'show-modal');

  await expect(dialog).not.toBeVisible();

  await button.click();

  await expect(dialog).toBeVisible();
});

test('handles [commandfor="id"][command="request-close"] correctly', async ({ mount }) => {
  const component = await mount(
    <>
      <Button commandfor="dialog" command="request-close">
        Close dialog
      </Button>

      <dialog id="dialog" open>
        Dialog content
      </dialog>
    </>,
  );

  const button = component.getByRole('button');
  const dialog = component.locator('#dialog');

  await expect(button).toHaveAttribute('commandfor', 'dialog');
  await expect(button).toHaveAttribute('command', 'request-close');

  await expect(dialog).toBeVisible();

  await button.click();

  await expect(dialog).not.toBeVisible();
});
test('handles [commandfor="id"][command="show-popover"] correctly', async ({ mount }) => {
  const component = await mount(
    <>
      <Button commandfor="popover" command="show-popover">
        Open popover
      </Button>

      <div id="popover" popover="">
        Popover content
      </div>
    </>,
  );

  const button = component.getByRole('button');
  const popover = component.locator('#popover');

  await expect(button).toHaveAttribute('commandfor', 'popover');
  await expect(button).toHaveAttribute('command', 'show-popover');

  await expect(popover).not.toBeVisible();

  await button.click();

  await expect(popover).toBeVisible();
});

test('handles [commandfor="id"][command="hide-popover"] correctly', async ({ mount }) => {
  const component = await mount(
    <>
      <Button commandfor="popover" command="hide-popover">
        Hide popover
      </Button>

      <div id="popover" popover="">
        Popover content
      </div>
    </>,
  );

  const button = component.getByRole('button');
  const popover = component.locator('#popover');

  await expect(button).toHaveAttribute('commandfor', 'popover');
  await expect(button).toHaveAttribute('command', 'hide-popover');

  await popover.evaluate((element) => {
    (element as HTMLElement & { showPopover: () => void }).showPopover();
  });
  await expect(popover).toBeVisible();

  await button.click();

  await expect(popover).not.toBeVisible();
});
test('handles [commandfor="id"][command="toggle-popover"] correctly', async ({ mount }) => {
  const component = await mount(
    <>
      <Button commandfor="popover" command="toggle-popover">
        Toggle popover
      </Button>

      <div id="popover" popover="">
        Popover content
      </div>
    </>,
  );

  const button = component.getByRole('button');
  const popover = component.locator('#popover');

  await expect(button).toHaveAttribute('commandfor', 'popover');
  await expect(button).toHaveAttribute('command', 'toggle-popover');

  await expect(popover).not.toBeVisible();

  await button.click();

  await expect(popover).toBeVisible();

  await button.click();

  await expect(popover).not.toBeVisible();
});
test('handles [commandfor="id"][command="--custom-event"] correctly', async ({ mount }) => {
  const component = await mount(
    <>
      <Button commandfor="command-target" command="--custom-event">
        Run command
      </Button>

      <div id="command-target">Command target</div>
    </>,
  );

  const button = component.getByRole('button');
  const target = component.locator('#command-target');

  await expect(button).toHaveAttribute('commandfor', 'command-target');
  await expect(button).toHaveAttribute('command', '--custom-event');

  const commandPromise = target.evaluate((element) => {
    return new Promise<string | undefined>((resolve) => {
      element.addEventListener('command', (event) => resolve((event as Event & { command?: string }).command), {
        once: true,
      });
    });
  });

  await button.click();

  await expect(commandPromise).resolves.toBe('--custom-event');
});

test('handles [formaction] correctly', async ({ mount, page }) => {
  const component = await mount(
    <form action="/default-action" method="get">
      <Button formAction="/button-action" type="submit">
        Submit
      </Button>
    </form>,
  );

  const button = component.getByRole('button', { name: 'Submit' });

  await expect(button).toHaveAttribute('formaction', '/button-action');

  const requestPromise = page.waitForRequest((request) => request.url().includes('/button-action'));

  await button.click();

  const request = await requestPromise;

  expect(request.url()).toContain('/button-action');

  await page.waitForLoadState('networkidle');
});
test('handles [formenctype] correctly', async ({ mount, page }) => {
  const component = await mount(
    <form action="/submit" method="post" encType="application/x-www-form-urlencoded">
      <input name="name" value="John" />

      <Button formEncType="multipart/form-data" type="submit">
        Submit
      </Button>
    </form>,
  );

  const button = component.getByRole('button', { name: 'Submit' });

  await expect(button).toHaveAttribute('formenctype', 'multipart/form-data');

  const requestPromise = page.waitForRequest((request) => request.url().includes('/submit'));

  await button.click();

  const request = await requestPromise;

  expect(request.postData()).toContain('John');
  expect(request.headers()['content-type']).toContain('multipart/form-data');

  await page.waitForLoadState('networkidle');
});
test('handles [formmethod="get"] correctly', async ({ mount, page }) => {
  const component = await mount(
    <form action="/submit" method="post">
      <input name="name" value="John" />
      <Button type="submit" formMethod="get">
        Submit
      </Button>
    </form>,
  );

  const button = component.getByRole('button', { name: 'Submit' });

  await expect(button).toHaveAttribute('formmethod', 'get');

  await button.click();

  await expect(page).toHaveURL(/\/submit\?name=John/);
  await page.waitForLoadState('networkidle');
});
test('handles [formmethod="dialog"] correctly', async ({ mount }) => {
  const component = await mount(
    <dialog open>
      <form>
        <Button formMethod="dialog" type="submit">
          Close dialog
        </Button>
      </form>
    </dialog>,
  );

  const button = component.getByRole('button', { name: 'Close dialog' });

  await expect(button).toHaveAttribute('formmethod', 'dialog');
  await expect(component).toBeVisible();

  await button.click();

  await expect(component).not.toBeVisible();
});
test('handles [formnovalidate] correctly', async ({ mount }) => {
  const component = await mount(
    <div>
      <form>
        <input name="email" type="email" required />
        <Button formNoValidate type="submit">
          Submit
        </Button>
      </form>
    </div>,
  );

  const button = component.getByRole('button', { name: 'Submit' });
  const form = component.locator('form');

  await expect(button).toHaveAttribute('formnovalidate');

  await form.evaluate((element) => {
    element.addEventListener('submit', (event) => {
      event.preventDefault();
      element.dataset['submitted'] = 'true';
    });
  });

  await button.click();

  await expect(form).toHaveAttribute('data-submitted', 'true');
});
test('handles [formtarget="_self"] correctly', async ({ mount, page }) => {
  const component = await mount(
    <div>
      <form action="/submit" method="get" target="_blank">
        <input name="name" value="John" />
        <Button formTarget="_self" type="submit">
          Submit
        </Button>
      </form>
    </div>,
  );

  const button = component.getByRole('button', { name: 'Submit' });

  await expect(button).toHaveAttribute('formtarget', '_self');

  const pagesBefore = page.context().pages().length;

  await button.click();

  await expect(page).toHaveURL(/\/submit\?name=John/);
  expect(page.context().pages()).toHaveLength(pagesBefore);
  await page.waitForLoadState('networkidle');
});
test('handles [formtarget="_blank"] correctly', async ({ mount, page }) => {
  const component = await mount(
    <div>
      <form action="/submit" method="get">
        <input name="name" value="John" />

        <Button formTarget="_blank" type="submit">
          Submit
        </Button>
      </form>
    </div>,
  );

  const button = component.getByRole('button', { name: 'Submit' });

  await expect(button).toHaveAttribute('formtarget', '_blank');

  const newPagePromise = page.waitForEvent('popup');

  await button.click();

  const newPage = await newPagePromise;

  await expect(newPage).toHaveURL(/\/submit\?name=John/);
});

// `_parent` and `_top` can't be exercised for real navigation here: the CT harness mounts
// components directly into the top-level page (no iframe), so there's no distinct ancestor
// frame to navigate. Only the attribute pass-through is verified.
for (const target of ['_parent', '_top'] as const) {
  test(`handles [formtarget="${target}"] correctly`, async ({ mount }) => {
    const component = await mount(
      <div>
        <form target={target}>
          <Button formTarget={target} type="submit">
            Submit
          </Button>
        </form>
      </div>,
    );

    const button = component.getByRole('button', { name: 'Submit' });

    await expect(button).toHaveAttribute('formtarget', target);
  });
}
test('handles [name] correctly', async ({ mount, page }) => {
  const component = await mount(
    <div>
      <form action="/submit" method="get">
        <Button name="action" value="save" type="submit">
          Save
        </Button>
      </form>
    </div>,
  );

  const button = component.getByRole('button', { name: 'Save' });

  await expect(button).toHaveAttribute('name', 'action');

  await button.click();

  await expect(page).toHaveURL(/\/submit\?action=save/);
  await page.waitForLoadState('networkidle');
});

test('handles [popovertarget] correctly', async ({ mount }) => {
  const component = await mount(
    <div>
      <Button popoverTarget="popover">Open popover</Button>

      <div id="popover" popover="">
        Popover content
      </div>
    </div>,
  );

  const button = component.getByRole('button', { name: 'Open popover' });
  const popover = component.locator('#popover');

  await expect(button).toHaveAttribute('popovertarget', 'popover');
  await expect(popover).not.toBeVisible();

  await button.click();

  await expect(popover).toBeVisible();
});
test('handles [popovertarget="id"][popovertargetaction="hide"] correctly', async ({ mount }) => {
  const component = await mount(
    <div>
      <button popoverTarget="popover" popoverTargetAction="show">
        Open popover
      </button>
      <Button popoverTarget="popover" popoverTargetAction="hide">
        Close popover
      </Button>
      <div id="popover" popover="">
        Popover content
      </div>
    </div>,
  );

  const openButton = component.getByRole('button', { name: 'Open popover' });
  const closeButton = component.getByRole('button', { name: 'Close popover' });
  const popover = component.locator('#popover');

  await expect(openButton).toHaveAttribute('popovertarget', 'popover');
  await expect(openButton).toHaveAttribute('popovertargetaction', 'show');

  await expect(closeButton).toHaveAttribute('popovertarget', 'popover');
  await expect(closeButton).toHaveAttribute('popovertargetaction', 'hide');

  await expect(popover).not.toBeVisible();

  await openButton.click();

  await expect(popover).toBeVisible();

  await closeButton.click();

  await expect(popover).not.toBeVisible();
});

const popoverTargetActions = [
  { action: 'show', label: 'Open popover', expectedVisibilityAfterClicks: [true] },
  { action: 'toggle', label: 'Toggle popover', expectedVisibilityAfterClicks: [true, false] },
] as const;

for (const { action, label, expectedVisibilityAfterClicks } of popoverTargetActions) {
  test(`handles [popovertarget="id"][popovertargetaction="${action}"] correctly`, async ({ mount }) => {
    const component = await mount(
      <div>
        <Button popoverTarget="popover" popoverTargetAction={action}>
          {label}
        </Button>
        <div id="popover" popover="">
          Popover content
        </div>
      </div>,
    );

    const button = component.getByRole('button', { name: label });
    const popover = component.locator('#popover');

    await expect(button).toHaveAttribute('popovertarget', 'popover');
    await expect(button).toHaveAttribute('popovertargetaction', action);

    await expect(popover).not.toBeVisible();

    for (const expectedVisible of expectedVisibilityAfterClicks) {
      await button.click();
      if (expectedVisible) await expect(popover).toBeVisible();
      else await expect(popover).not.toBeVisible();
    }
  });
}
