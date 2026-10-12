import type { Meta } from '@storybook/react-vite';
import { OrderedList } from '@nl-design-system-candidate/ordered-list-react/css';

const CLASSES = 'classes';
const CHILDREN = 'children';

const meta = {
  argTypes: {
    nlOrderedList: {
      name: 'nl-ordered-list',
      description: 'De basis class van de component.',
      control: false,
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    nlOrderedListItem: {
      name: 'nl-ordered-list__item',
      description: 'De class voor elk item, op het HTML-element `li`.',
      control: false,
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    nlOrderedListItemCustomMarker: {
      name: 'nl-ordered-list__item--custom-marker',
      description: 'Verbergt het standaard nummer van een item met een Custom Marker.',
      control: false,
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    nlOrderedListMarkerCustom: {
      name: 'nl-ordered-list__marker nl-ordered-list__marker--custom',
      description:
        'De Custom Marker, op een HTML-element `span` in het item. Het icoon erin is verborgen voor hulpsoftware met het HTML-attribuut `aria-hidden="true"`.',
      control: false,
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    nlOrderedListMarkerLabel: {
      name: 'nl-ordered-list__marker-label',
      description:
        'De visueel verborgen tekst van de Custom Marker, op een HTML-element `span`. Verplicht bij een Custom Marker.',
      control: false,
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    children: {
      name: 'content',
      description: 'Eén of meer HTML-elementen `li` met de class `nl-ordered-list__item`.',
      control: false,
      table: {
        category: CHILDREN,
        type: { summary: undefined },
      },
    },
  },
  component: (props) => <OrderedList {...props} />,
} satisfies Meta;

export default meta;
