import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../components-react/skip-link-react/package.json';
import { SkipLink } from '../../components-react/skip-link-react/src/css';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
    href: { table: { category: 'API' } },
  },
  component: SkipLink,
  parameters: {
    docs: {
      description: {
        component: 'Component beschrijving',
      },
    },
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=2217-10122',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Skip Link',
} satisfies Meta<typeof SkipLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Skip Link',
  args: {
    children: 'naar de inhoud',
    href: '#',
  },
  parameters: {
    docs: {
      description: {
        story: 'Story beschrijving',
      },
    },
  },
};
