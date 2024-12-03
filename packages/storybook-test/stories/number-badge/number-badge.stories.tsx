import type { Meta, StoryObj } from '@storybook/react';
import '../../../components-css/number-badge-css/dist/test.css';
import packageJSON from '../../../components-react/number-badge-react/package.json';
import { NumberBadge } from '../../../components-react/number-badge-react/src/css';
import componentMarkdown from '../../../docs/number-badge-docs/docs/component.md?raw';

const meta = {
  argTypes: {
    children: { table: { category: 'API' } },
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
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=1233-4271',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
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
          Label
        </span>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Een Number Badge in een flexbox zou normale afmetingen moeten hebben',
      },
    },
  },
};

export const FlexboxContainerColumn: Story = {
  name: 'Number Badge in een flexbox',
  args: {
    children: '42',
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
          Label
        </span>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Een Number Badge in een flexbox zou normale afmetingen moeten hebben',
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
      <div style={{ maxInlineSize: '1' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Een Number Badge moet nooit wrappen over twee regels',
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
  parameters: {
    docs: {
      description: {
        story: 'Het is niet ideaal, maar de Number Badge moet er goed uitzien ongeacht het HTML-element.',
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
    },
    value: 42,
  },
  parameters: {
    docs: {
      description: {
        story: 'De tekst van de number badge moet horizintaal en verticaal gecentreerd zijn.',
      },
    },
  },
};

export const FontRelative: Story = {
  name: 'Number Badge in tekst met grote letters',
  args: {
    children: '42',
    style: {
      '--nl-number-badge-font-size': '0.6em',
      '--nl-number-badge-padding-block': '0.2em',
      '--nl-number-badge-padding-inline': '0.2em',
    },
    value: 42,
  },
  decorators: [
    (Story) => (
      <>
        <h1>
          Fouten in kleurcontrast <Story />
        </h1>
        <h2>
          Fouten in kleurcontrast <Story />
        </h2>
        <h3>
          Fouten in kleurcontrast <Story />
        </h3>
      </>
    ),
  ],
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
    style: {
      '--nl-number-badge-font-size': '0.6em',
      '--nl-number-badge-padding-block': '0.2em',
      '--nl-number-badge-padding-inline': '0.2em',
    },
    value: 42,
  },
  decorators: [
    (Story) => (
      <>
        <p>
          Fouten in kleurcontrast <Story />
        </p>
      </>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'De tekst van Number Badge moet niet per ongeluk kleiner worden dan 16px. Dat is met name een risico wanneer een relatieve font-size wordt gebruikt.',
      },
    },
  },
};

export const NumberBadgeLink: Story = {
  name: 'Number Badge moet niet onderstreept zijn',
  args: {
    children: '42',
    value: 42,
  },
  decorators: [
    (Story) => (
      <a href="https://example.com/inbox">
        Inbox <Story />
      </a>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'De tekst van Number Badge moet niet onderstreept worden, bijvoorbeeld wanneer die in een link staat.',
      },
    },
  },
};

export const NumberBadgeBorder: Story = {
  name: 'Number Badge moet een border kunnen hebben',
  args: {
    children: '42',
    style: {
      '--nl-number-badge-background-color': 'whitesmoke',
      '--nl-number-badge-border-color': 'dimgray',
      '--nl-number-badge-border-width': '0.25em',
      '--nl-number-badge-color': 'black',
    },
    value: 42,
  },
  parameters: {
    docs: {
      description: {
        story: 'De tekst van Number Badge moet een border kunnen hebben.',
      },
    },
  },
};

export const NumberBadgeForcedColorsLink: Story = {
  name: 'Number Badge moet er in forced colors mode uitzien als een link',
  args: {
    children: '42',
    className: 'nl-number-badge--forced-colors',
    value: 42,
  },
  decorators: [
    (Story) => (
      <a href="https://example.com/inbox">
        Inbox <Story />
      </a>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'In forced colors mode moet de tekst en border de `LinkText` kleur hebben. Lees op MDN meer over [system-color](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color).',
      },
    },
  },
};

export const NumberBadgeFontStyle: Story = {
  name: 'Number Badge moet niet de font-style overnemen van de parent',
  args: {
    children: '1',
    style: {
      '--nl-number-badge-font-size': '0.6em',
      '--nl-number-badge-padding-block': '0.2em',
      '--nl-number-badge-padding-inline': '0.2em',
    },
    value: 1,
  },
  decorators: [
    (Story) => (
      <h2>
        <i>
          Breaking news: er is een story over italic tekst <Story />
        </i>
      </h2>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'De Number Badge moet geen italic tekst hebben, zelfs als de context wel italic tekst heeft.',
      },
    },
  },
};
