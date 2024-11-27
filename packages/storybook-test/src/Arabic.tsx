import type { Decorator } from '@storybook/react';

export const Arabic: Decorator = (Story) => (
  <div lang="ar" dir="rtl">
    <Story />
  </div>
);
