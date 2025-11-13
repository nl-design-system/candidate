/* eslint-disable react/no-unescaped-entities */
import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import '../../components-css/number-badge-css/src/number-badge.scss';
import '../../components-css/number-badge-css/src/test.scss';
import packageJSON from '../../components-react/number-badge-react/package.json';
import { NumberBadge } from '../../components-react/number-badge-react/src/number-badge';
import componentMarkdown from '../../docs/number-badge-docs/docs/component.md?raw';
import tokens from '../../tokens/number-badge-tokens/tokens.json';

const meta = {
  argTypes: {
    children: { table: { category: 'API' } },
    label: { table: { category: 'API' } },
    value: {
      control: 'number',
      table: { category: 'API' },
    },
  },
  component: NumberBadge,
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/number-badge',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
    tokens,
  },
  title: 'Componenten/Number Badge',
} satisfies Meta<typeof NumberBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Number Badge',
  args: {
    children: 1000,
    value: 1000,
  },
  globals: {
    dir: 'ltr',
    lang: 'en',
    title: 'HowManyEmailsUntilInboxZero.com',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Number Badge met de waarde 1000.',
      },
    },
  },
};

export const OneMillion: Story = {
  name: 'Number Badge — miljoen',
  args: {
    children: 1_000_000,
    value: 1_000_000,
  },
  globals: {
    ...Default.globals,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Number Badge met de waarde 1 miljoen.',
      },
    },
    status: { type: [] },
  },
};

export const FormattedNL_NL: Story = {
  name: 'Number Badge (nl-NL)',
  args: {
    children: new Intl.NumberFormat('nl-NL', { minimumFractionDigits: 2 }).format(1000),
    lang: 'nl',
    value: 1000,
  },
  globals: {
    dir: 'ltr',
    lang: 'en',
    title: 'HoeveelMailsTotInboxZero.nl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Number Badge met de waarde 1000, op Nederlandse wijze geformatteerd.',
      },
    },
    status: { type: [] },
  },
};

export const FormattedEN_GB: Story = {
  name: 'Number Badge (en-GB)',
  args: {
    children: new Intl.NumberFormat('en-GB', { minimumFractionDigits: 2 }).format(1000),
    lang: 'en',
    value: 1000,
  },
  globals: {
    ...Default.globals,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Number Badge met de waarde 1000, op Britse wijze geformatteerd.',
      },
    },
    status: { type: [] },
  },
};

export const FlexboxContainerRow: Story = {
  name: 'Number Badge in een flexbox',
  args: {
    children: '42',
    label: '42 ongelezen berichten',
    value: 42,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flex: '1',
          flexDirection: 'row',
          maxInlineSize: '10em',
        }}
      >
        <span
          style={{
            flexGrow: '1',
          }}
        >
          Inbox
        </span>
        <Story />
      </div>
    ),
  ],
  globals: {
    ...Default.globals,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Number Badge in een CSS flexbox, met links de tekst "Inbox" en rechts het getal "42".',
      },
    },
  },
};

export const FlexboxContainerColumn: Story = {
  name: 'Number Badge in een flexbox',
  args: {
    children: '42',
    label: '42 ongelezen berichten',
    value: 42,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxInlineSize: '10em',
        }}
      >
        <span
          style={{
            flexGrow: '1',
          }}
        >
          Inbox
        </span>
        <Story />
      </div>
    ),
  ],
  globals: {
    ...Default.globals,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Number Badge in een CSS flexbox, met boven de tekst "Inbox" en onder het getal "42".',
      },
    },
  },
};

export const NoWrap: Story = {
  name: 'Number Badge in een smalle container',
  args: {
    children: '1 000 000',
    lang: 'de',
    value: 1e6,
  },
  decorators: [
    (Story) => (
      <div style={{ maxInlineSize: '1px' }}>
        <Story />
      </div>
    ),
  ],
  globals: {
    dir: 'ltr',
    lang: 'de',
    title: 'WieVieleEmailBisPosteingangLeerIst.de',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Number Badge met getal miljoen, op Duitse wijze geformatteerd met spaties als scheidingsteken bij duizendtallen.

Het container element heeft een breedte van 1px, dus als line wrap niet tegengehouden wordt dan zou het getal over 3 regels verdeeld worden.

Een Number Badge moet nooit wrappen over twee regels. De inhoud mag nooit zo lang zijn dat de tekst zoveel ruimte inneemt bij 400% zoom dat het nodig is om horizontaal scrollen.`,
      },
    },
  },
};

export const DivWrap: Story = {
  name: 'Number Badge met een div HTML-element',
  args: {
    children: '42',
    value: 42,
  },
  globals: {
    ...Default.globals,
  },
  parameters: {
    docs: {
      description: {
        story: `Een Number Badge met het getal 42.

Een \`div\` element is niet de ideale HTML-opmaak, maar de Number Badge moet er goed uitzien ongeacht het HTML-element.`,
      },
    },
  },
  render: ({ children }) => <div className="nl-number-badge">{children}</div>,
};

export const Center: Story = {
  name: 'Number Badge text centreren',
  args: {
    children: '42',
    style: {
      '--nl-number-badge-font-size': '3rem',
      '--nl-number-badge-min-block-size': '10rem',
      '--nl-number-badge-min-inline-size': '10rem',
    } as CSSProperties,
    value: 42,
  },
  globals: {
    ...Default.globals,
  },
  parameters: {
    docs: {
      description: {
        story: `Een Number Badge met het getal 42, die in een 5 keer zo grote cirkel staat met een 3 keer zo groot lettertype.

De tekst van de number badge moet horizintaal en verticaal gecentreerd zijn.`,
      },
    },
  },
};

export const FontRelative: Story = {
  name: 'Number Badge in tekst met grote letters',
  args: {
    children: '1',
  },
  decorators: [
    (Story) => (
      <div
        style={
          {
            '--nl-number-badge-font-size': '0.6em',
            '--nl-number-badge-padding-block': '0.25em',
            '--nl-number-badge-padding-inline': '0.25em',
          } as CSSProperties
        }
      >
        <Heading level={1}>Kopniveau {Story()}</Heading>
        <Paragraph>Er zijn 6 kopniveau's in HTML, die kun je op deze pagina zien.</Paragraph>
        <Heading level={2}>
          Kopniveau <NumberBadge>2</NumberBadge>
        </Heading>
        <Heading level={3}>
          Kopniveau <NumberBadge>3</NumberBadge>
        </Heading>
        <Heading level={4}>
          Kopniveau <NumberBadge>4</NumberBadge>
        </Heading>
        <Heading level={5}>
          Kopniveau <NumberBadge>5</NumberBadge>
        </Heading>
        <Heading level={6}>
          Kopniveau <NumberBadge>6</NumberBadge>
        </Heading>
        <Paragraph>Niveau 6 is het laatste kopniveau in HTML.</Paragraph>
      </div>
    ),
  ],
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: "Alle kopniveau's van HTML",
  },
  parameters: {
    docs: {
      description: {
        story:
          'De Number Badge zou in afmeting en tekstgrootte zich moeten kunnen aanpassen aan de context, door gebruik van relatieve CSS units.',
      },
    },
  },
};

export const FontSizeMinimum: Story = {
  name: 'Number Badge moet niet te klein worden',
  args: {
    children: '42',
    label: '42 ongelezen berichten',
    style: {
      '--nl-number-badge-font-size': '0.6em',
      '--nl-number-badge-padding-block': '0.2em',
      '--nl-number-badge-padding-inline': '0.2em',
    } as CSSProperties,
    value: 42,
  },
  decorators: [
    (Story) => (
      <small>
        Inbox <Story />
      </small>
    ),
  ],
  globals: {
    ...Default.globals,
  },
  parameters: {
    docs: {
      description: {
        story: `Een Number Badge met het getal 42, naast een tekst met een font-size kleiner dan 16px. De Number Badge nog steeds een font-size van 16px.

De tekst van Number Badge moet niet per ongeluk kleiner worden dan 16px. Dat is met name een risico wanneer een relatieve font-size wordt gebruikt.`,
      },
    },
  },
};

export const NumberBadgeLink: Story = {
  name: 'Number Badge moet niet onderstreept zijn',
  args: {
    children: '42',
    label: '42 ongelezen berichten',
    value: 42,
  },
  decorators: [
    (Story) => (
      <a href="https://example.com/inbox">
        Inbox <Story />
      </a>
    ),
  ],
  globals: {
    ...Default.globals,
  },
  parameters: {
    docs: {
      description: {
        story: `Een Number Badge met het getal 42, in een link naar Inbox. De linktekst is onderstreept, maar het getal in de Number Badge niet.

De tekst van Number Badge moet niet onderstreept worden, bijvoorbeeld wanneer die in een link staat.`,
      },
    },
  },
};

export const NumberBadgeBorder: Story = {
  name: 'Number Badge moet een border kunnen hebben',
  args: {
    children: '42',
    style: {
      '--nl-number-badge-border-width': '0.25em',
      '--nl-number-badge-background-color': 'whitesmoke',
      '--nl-number-badge-border-color': 'dimgray',
      '--nl-number-badge-color': 'black',
    } as CSSProperties,
    value: 42,
  },
  globals: {
    ...Default.globals,
  },
  parameters: {
    docs: {
      description: {
        story: `Een Number Badget met het getal 42, in een cirkel met een dikke rand.

De Number Badge moet een border kunnen hebben, die je kan instellen met een design token.`,
      },
    },
  },
};

export const NumberBadgeForcedColorsLink: Story = {
  name: 'Number Badge moet er in forced colors mode uitzien als een link',
  args: {
    children: '42',
    className: 'nl-number-badge--forced-colors',
    label: '42 ongelezen berichten',
    value: 42,
  },
  decorators: [
    (Story) => (
      <a href="https://example.com/inbox">
        Inbox <Story />
      </a>
    ),
  ],
  globals: {
    ...Default.globals,
  },
  parameters: {
    docs: {
      description: {
        story: `Een Number Badge met het getal 42 in een Link naar Inbox. De Number Badge heeft een dikke rand, en de rand en de tekst hebbe dezelfde kleur als de link.

In forced colors mode moet de tekst en border de \`LinkText\` kleur hebben. Lees op MDN meer over [system-color](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color).`,
      },
    },
  },
};

export const NumberBadgeFontStyle: Story = {
  name: 'Number Badge moet niet de font-style overnemen van de parent',
  args: {
    children: '0',
    style: {
      '--nl-number-badge-font-size': '0.6em',
      '--nl-number-badge-padding-block': '0.2em',
      '--nl-number-badge-padding-inline': '0.2em',
    } as CSSProperties,
    value: 0,
  },
  decorators: [
    (Story) => (
      <>
        <Heading level={1}>
          <i>
            Groot nieuws: de inbox heeft <Story /> ongelezen berichten
          </i>
        </Heading>
        <Paragraph>Het heeft even geduurd, maar "Inbox Zero" is bereikt!</Paragraph>
      </>
    ),
  ],
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Groot nieuws: de inbox heeft 0 ongelezen berichten',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Number Badge met het getal 0, als onderdeel van een Heading met de tekst "Groot nieuws: de inbox heeft 0 ongelezen berichten".

De Number Badge moet geen italic tekst hebben, zelfs als de context wel italic tekst heeft.`,
      },
    },
  },
};
