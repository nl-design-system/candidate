import type { Meta } from '@storybook/react-vite';
import { UnorderedList } from '@nl-design-system-candidate/unordered-list-react/css';

const CLASSES = 'classes';
const CHILDREN = 'children';

const meta = {
  argTypes: {
    nlUnorderedList: {
      name: 'nl-unordered-list',
      description: 'De basis class van de component.',
      control: false,
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    nlUnorderedListItem: {
      name: 'nl-unordered-list__item',
      description: 'De class voor elk item, op het HTML-element `li`.',
      control: false,
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    nlUnorderedListMarker: {
      name: 'nl-unordered-list__marker',
      description:
        'De Custom Marker, op een HTML-element `span` als direct child van het item. Het item verbergt dan het standaard leesteken. Het icoon erin is verborgen voor hulpsoftware met het HTML-attribuut `aria-hidden="true"`.',
      control: false,
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    nlUnorderedListMarkerLabel: {
      name: 'nl-unordered-list__marker-label',
      description:
        'De visueel verborgen tekst van de Custom Marker, op een HTML-element `span`. Gebruik deze wanneer de Custom Marker betekenis toevoegt.',
      control: false,
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    children: {
      name: 'content',
      description: 'Eén of meer HTML-elementen `li` met de class `nl-unordered-list__item`.',
      control: false,
      table: {
        category: CHILDREN,
        type: { summary: undefined },
      },
    },
    // TODO: Ontwikkelfase: aanvullen adhv acceptance-criteria
  },
  component: (props) => <UnorderedList {...props} />,
} satisfies Meta;

export default meta;
