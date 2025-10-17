import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/button-css/src/button.scss';
import packageJSON from '../../components-react/button-react/package.json';
import { Button } from '../../components-react/button-react/src/button';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: Button,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/button',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Button',
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Button',
  args: {
    children: `Klik mij!`,
  },
};
