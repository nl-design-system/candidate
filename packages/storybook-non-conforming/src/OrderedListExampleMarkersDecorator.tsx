import type { Decorator } from '@storybook/react-vite';
import './ordered-list-example-markers.css';

/**
 * Loads the incorrect example CSS for Custom Markers (`nl-ordered-list--example-*` modifiers), used by the
 * non-conforming Ordered List stories. Not part of the Ordered List component.
 */
export const OrderedListExampleMarkersDecorator: Decorator = (Story) => <Story />;
