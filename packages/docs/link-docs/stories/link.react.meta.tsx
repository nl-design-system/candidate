import type { Meta } from '@storybook/react-vite';
import { Link } from '@nl-design-system-candidate/link-react/css';

const API = 'API';
const PASS_THROUGH = 'Pass through';
const OTHER = 'Overig';

const meta = {
  argTypes: {
    current: {
      control: { type: 'select', labels: { undefined: '(undefined)' } },
      options: [undefined, 'page', 'step', 'location', 'date', 'time', 'true', 'false'],
      description:
        'Alternatief voor `aria-current`. Markeert de Link als **het huidige element** in een set gerelateerde elementen. Gebruik de `current` prop in plaats van `aria-current` voor de juiste styling. [aria-current op MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)',
      table: {
        type: { summary: "AnchorHTMLAttributes['aria-current']" },
        category: API,
      },
    },
    inlineBox: {
      control: 'boolean',
      description:
        'Link om `inline-block`, `inline-flex` en `inline-grid` elementen zoals _image_ of _badge_. Het zetten van de `display` property van `inline` naar `inline-block` zorgt ervoor dat de focus ourline om de hele box getoond wordt in elke browser',
      table: {
        type: { summary: 'boolean' },
        category: API,
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Alternatief voor `aria-disabled`. Markeert de Link als **disabled**. Gebruik de `disabled` prop in plaats van `aria-current` zodat de juiste styling, `role`,`href` en `tabindex` gezet wordt. [aria-disabled op MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)',
      table: {
        type: { summary: 'boolean' },
        category: API,
      },
    },
    children: {
      description: 'De inhoud van de link.',
      table: { category: PASS_THROUGH, type: { summary: 'string' } },
      type: 'string',
    },
    href: {
      description:
        'De URL waar de Link naar verwijst. [href op MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#href)',
      type: { name: 'string', required: true },
      table: {
        category: PASS_THROUGH,
        type: { summary: "AnchorHTMLAttributes['href']" },
      },
    },
    target: {
      control: { type: 'select', labels: { undefined: '(undefined)' } },
      description:
        'Waar wordt de gelinkte URL weergegeven. [target op MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#target)',
      options: [undefined, '_blank', '_parent', '_self', '_top'],
      table: { category: PASS_THROUGH, type: { summary: "AnchorHTMLAttributes['target']" } },
    },
    rest: {
      name: '...rest',
      contole: false,
      description: 'Alle niet gebruikte props worden als attributen op het gerenderde `<a>` element geplaatst.',
      table: { category: OTHER, type: { summary: undefined } },
    },
  },
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
