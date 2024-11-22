import type { Decorator } from '@storybook/react';

export const storyRootClassname = 'story-root';

export const StoryRoot: Decorator = (Story) => (
  <div className={storyRootClassname}>
    <Story />
  </div>
);
