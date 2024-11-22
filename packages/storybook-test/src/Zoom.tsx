import type { Decorator } from '@storybook/react';

export const DEFAULT_ZOOM = 1;

export const Zoom: Decorator = (Story, context) => (
  <div style={{ zoom: context.globals['zoom'] || DEFAULT_ZOOM }}>
    <Story />
  </div>
);
