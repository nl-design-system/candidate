import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../components-react/color-sample-react/package.json';
import { ColorSample } from '../../components-react/color-sample-react/src/css';

const meta = {
  argTypes: {
    value: { control: 'color', table: { category: 'API' } },
  },
  component: ColorSample,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/color-sample',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Color Sample',
} satisfies Meta<typeof ColorSample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Color Sample',
  args: {
    value: 'deeppink',
  },
};
