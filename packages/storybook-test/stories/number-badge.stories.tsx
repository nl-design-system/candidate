import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../components-react/number-badge-react/package.json';
import { NumberBadge } from '../../components-react/number-badge-react/src/css';

const ONE_THOUSAND = 1_000;
const ONE_MILLION = 1_000_000;

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
    children: ONE_THOUSAND,
    value: ONE_THOUSAND,
  },
};

export const OneMillion: Story = {
  name: 'Number Badge — miljoen',
  args: {
    children: ONE_MILLION,
    value: ONE_MILLION,
  },
};

export const FormattedNL_NL: Story = {
  name: 'Number Badge (nl-NL)',
  args: {
    children: new Intl.NumberFormat('nl-NL', { minimumFractionDigits: 2 }).format(ONE_THOUSAND),
    value: ONE_THOUSAND,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Number Badge met een Nederlands geformatteerd getal',
      },
    },
  },
};

export const FormattedEN_GB: Story = {
  name: 'Number Badge (en-GB)',
  args: {
    children: new Intl.NumberFormat('en-GB', { minimumFractionDigits: 2 }).format(ONE_THOUSAND),
    value: ONE_THOUSAND,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Number Badge met een Engels geformatteerd getal',
      },
    },
  },
};
