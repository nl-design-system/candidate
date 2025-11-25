import type { Meta } from '@storybook/react-vite';
import { ColorSample } from '@nl-design-system-candidate/color-sample-react/css';

const meta = {
  argTypes: {
    value: {
      control: 'color',
      type: { required: true },
      table: { category: 'API', type: { summary: "CSSProperties['color']" } },
    },
    label: { control: 'text', table: { type: { summary: 'string' } } },
  },
  component: ColorSample,
} satisfies Meta<typeof ColorSample>;

export default meta;
