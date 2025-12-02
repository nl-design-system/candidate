import type { StoryObj } from '@storybook/react-vite';
import type { CodeBlockProps } from '@nl-design-system-candidate/code-block-react';

type Story = StoryObj<CodeBlockProps>;

export const CodeBlock: Story = {
  name: 'Code Block',
  args: {
    children: `import { CodeBlock } from '@nl-design-system-candidate/code-block-react';`,
  },
};
