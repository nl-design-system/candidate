import type { StoryObj } from '@storybook/react-vite';
import type { SkipLinkProps } from '@nl-design-system-candidate/skip-link-react';

type Story = StoryObj<SkipLinkProps>;

export const SkipLink: Story = {
  name: 'Skip Link',
  args: {
    children: 'Naar de inhoud',
    href: '#inhoud',
  },
};
