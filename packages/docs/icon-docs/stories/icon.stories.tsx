import type { StoryObj } from '@storybook/react-vite';
import type { IconProps } from '@nl-design-system-candidate/icon-react';

type Story = StoryObj<IconProps>;

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="m10 16.5 2-3 2 3m-2-3v-2l3-1m-6 0 3 1" />
    <circle cx="12" cy="7.5" r=".5" fill="currentcolor" />
  </svg>
);

export const Default: Story = {
  args: {
    children: <Icon />,
  },
};
