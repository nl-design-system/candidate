import type { StoryObj } from '@storybook/react-vite';
import type { CodeProps } from '@nl-design-system-candidate/code-react';

type Story = StoryObj<CodeProps>;

export const Code: Story = {
  name: 'Code',
  args: {
    children: `import { Code } from '@nl-design-system-candidate/code-react';`,
  },
};
