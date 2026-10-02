import type { Decorator } from '@storybook/react-vite';
import type { CSSProperties } from 'react';

/* eslint-disable react/display-name */

/**
 * Decorator that sets CSS custom properties (for example design tokens) on an element around the story.
 *
 * @example
 * decorators: [createCustomPropertiesDecorator({ '--nl-ordered-list-color': '10px' })]
 */
export const createCustomPropertiesDecorator =
  (properties: Record<`--${string}`, string>): Decorator =>
  (Story) => (
    <div style={properties as CSSProperties}>
      <Story />
    </div>
  );
