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
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=13781-17931',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Color Sample',
} satisfies Meta<typeof ColorSample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Color Sample',
  args: {
    value: 'deeppink',
  },
};
