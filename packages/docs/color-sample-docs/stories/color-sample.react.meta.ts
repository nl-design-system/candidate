import type { Meta } from '@storybook/react-vite';
import { ColorSample } from '@nl-design-system-candidate/color-sample-react';

const meta = {
  argTypes: {
    value: { control: 'color', table: { category: 'API' } },
  },
  component: ColorSample,
} satisfies Meta<typeof ColorSample>;

export default meta;
