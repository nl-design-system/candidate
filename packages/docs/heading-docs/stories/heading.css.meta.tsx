import type { Meta } from '@storybook/react-vite';
import { Heading } from '@nl-design-system-candidate/heading-react/css';

const CLASSES = 'classes';
const API = 'api';

const meta = {
  parameters: {
    docs: {
      description: {
        component:
          'Het uiterlijk van de heading hoeft niet overeen te komen met de semantische waarde van de heading. Een heading kan een semantisch level 2 hebben (door het gebruik van een `<h2>` element), maar visueel weer gegeven worden als een level 1 door het gebruik van de class `nl-heading--level-1`',
      },
    },
  },
  argTypes: {
    nlHeading: {
      name: 'nl-heading',
      description: 'De basis class van dit component',
      control: false,
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    appearance1: {
      name: 'nl-heading--level-1',
      description: 'Geeft de heading het uiterlijk van een hoofdkop.',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    appearance2: {
      name: 'nl-heading--level-2',
      description: 'Geeft de heading het uiterlijk van een koptekst van het tweede niveau.',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    appearance3: {
      name: 'nl-heading--level-3',
      description: 'Geeft de heading het uiterlijk van een koptekst van het derde niveau.',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    appearance4: {
      name: 'nl-heading--level-4',
      description: 'Geeft de heading het uiterlijk van een koptekst van het vierde niveau.',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    appearance5: {
      name: 'nl-heading--level-5',
      description: 'Geeft de heading het uiterlijk van een koptekst van het vijfde niveau.',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    appearance6: {
      name: 'nl-heading--level-6',
      description: 'Geeft de heading het uiterlijk van een koptekst van het zesde niveau.',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    children: {
      name: 'content',
      description: 'De inhoud van de heading.',
      control: 'text',
      table: {
        category: API,
        type: { summary: undefined },
      },
    },
    level: {
      name: 'element',
      control: { type: 'select', labels: { 1: '<h1>', 2: '<h2>', 3: '<h3>', 4: '<h4>', 5: '<h5>', 6: '<h6>' } },
      description: 'Het element van de heading',
      options: [1, 2, 3, 4, 5, 6],
      table: {
        category: API,
        type: { summary: undefined },
      },
    },
  },
  args: {
    nlHeading: true,
    level: 1,
  },
  component: (props) => {
    let appearance = props.appearance1 ? 1 : props.level;
    appearance = props.appearance2 ? 2 : appearance;
    appearance = props.appearance3 ? 3 : appearance;
    appearance = props.appearance4 ? 4 : appearance;
    appearance = props.appearance5 ? 5 : appearance;
    appearance = props.appearance6 ? 6 : appearance;

    return <Heading {...props} appearance={`level-${appearance}`} level={props.level} />;
  },
} satisfies Meta;

export default meta;
