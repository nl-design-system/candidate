import type { Meta } from '@storybook/react-vite';
import { Code } from '@nl-design-system-candidate/code-react';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: Code,
} satisfies Meta<typeof Code>;

export default meta;
