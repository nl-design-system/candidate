import type { Decorator } from '@storybook/react';

export const German: Decorator = (Story) => (
  <div lang="de" dir="ltr">
    <Story />
  </div>
);
