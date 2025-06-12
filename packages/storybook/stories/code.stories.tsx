import type { Meta, StoryObj } from '@storybook/react-vite';
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
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=13778-1279',
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
