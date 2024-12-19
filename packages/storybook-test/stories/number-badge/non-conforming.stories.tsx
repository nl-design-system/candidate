import type { Meta, StoryObj } from '@storybook/react';
import '../../../components-css/number-badge-css/dist/test.css';
import packageJSON from '../../../components-react/number-badge-react/package.json';
import { NumberBadge } from '../../../components-react/number-badge-react/src/css';
import componentMarkdown from '../../../docs/number-badge-docs/docs/component.md?raw';
import tokens from '../../../tokens/number-badge-tokens/tokens.json';

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
    tokens,
  },
  title: 'Componenten/Number Badge/Fout',
} satisfies Meta<typeof NumberBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoWrap: Story = {
  name: 'Number Badge in een smalle container',
  args: {
    children:
      '10,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000',
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
  globals: {
    dir: 'ltr',
    lang: 'en',
    title: 'HowManyEmailsUntilInboxZero.com',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Number Badge met het getal [googol](https://nl.wikipedia.org/wiki/Googol). Een Number Badge moet nooit wrappen over twee regels, de pagina moet scrollen om ruimte te maken.',
      },
    },
  },
};
