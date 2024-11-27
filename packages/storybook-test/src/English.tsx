import type { Decorator } from '@storybook/react';

export const English: Decorator = (Story) => (
  <div lang="en" dir="ltr">
    <Story />
  </div>
);
