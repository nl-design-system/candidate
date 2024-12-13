import type { Decorator } from '@storybook/react';

export const StoryRootDecorator: Decorator = (Story, context) => {
  const { storyRootClassname } = context.globals;

  return (
    <div data-story-root className={storyRootClassname}>
      <Story />
    </div>
  );
};
