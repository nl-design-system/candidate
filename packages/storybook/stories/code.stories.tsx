import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../components-react/code-react/package.json';
import { Code } from '../../components-react/code-react/src/css';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: Code,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/code',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Code',
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Code',
  args: {
    children: `import { Code } from '@nl-design-system-candidate/code-react';`,
  },
};
