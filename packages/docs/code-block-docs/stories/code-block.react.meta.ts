import type { Meta } from '@storybook/react-vite';
import { CodeBlock } from '@nl-design-system-candidate/code-block-react/css';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
    overflow: {
      control: 'radio',
      options: ['wrap', 'nowrap', 'overflow'],
      table: { type: { summary: 'union' } },
    },
  },
  component: CodeBlock,
} satisfies Meta<typeof CodeBlock>;

export default meta;
