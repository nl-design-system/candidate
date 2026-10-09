import type { Decorator } from '@storybook/react-vite';
import './unordered-list-example-markers.css';

/**
 * Loads the incorrect example CSS for Custom Markers (`nl-unordered-list--example-*` modifiers), used by the
 * non-conforming Unordered List stories. Not part of the Unordered List component.
 */
export const UnorderedListExampleMarkersDecorator: Decorator = (Story) => <Story />;
