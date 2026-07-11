import type { Meta } from '@storybook/react-vite';
import { Heading } from '@nl-design-system-candidate/heading-react/css';

const meta = {
  parameters: {
    docs: {
      description: {
        component:
          'Het uiterlijk van de heading hoeft niet overeen te komen met de semantische waarde van de heading. Een heading kan een semantisch level 2 hebben (door het gebruik van de `level` prop), maar visueel weer gegeven worden als een level 1 door het gebruik van de `appearance` prop',
      },
    },
  },
  argTypes: {
    level: {
      type: { name: 'other', value: 'select', required: true },
      description: 'Zet het semantische niveau van de heading',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      table: { category: 'API', type: { summary: '1 | 2 | 3 | 4 | 5 | 6' } },
    },
    appearance: {
      description: 'Geeft de heading een uiterlijk dat afwijkt van het semantische niveau',
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6'],
      table: {
        category: 'API',
        type: { summary: '"level-1" | "level-2" | "level-3" | "level-4" | "level-5" | "level-6"' },
      },
    },
    children: {
      description: 'De inhoud van de heading',
      type: { value: 'text', required: true },
      table: { category: 'API', type: { summary: 'ReactNode' } },
    },
  },
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
