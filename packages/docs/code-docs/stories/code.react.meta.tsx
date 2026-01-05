import type { Meta } from '@storybook/react-vite';
import { Code } from '@nl-design-system-candidate/code-react';

const meta = {
  argTypes: {
    children: {
      control: 'text',
      description: 'De te tonen computercode',
      table: {
        category: 'API',
        type: { summary: 'ReactNode' },
      },
    },
  },
  component: Code,
} satisfies Meta<typeof Code>;

export default meta;
