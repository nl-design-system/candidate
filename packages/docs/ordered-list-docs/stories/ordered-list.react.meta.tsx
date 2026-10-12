import type { Meta } from '@storybook/react-vite';
import { OrderedList, OrderedListItem } from '@nl-design-system-candidate/ordered-list-react/css';

const PROPS = 'Props';
const API = 'API';

const meta = {
  argTypes: {
    restProps: {
      name: '{...restProps}',
      control: false,
      description:
        'Alle props en attributes die hier niet beschreven zijn worden direct op het HTML-element geplaatst. Dat betekent dat alle attributes van een HTML-element als prop geplaatst kunnen worden.',
      table: {
        category: PROPS,
        type: {
          summary: 'Examples',
          detail: 'role="list"\nreversed\nstart={4}\ntype="A"\nlang="ar"',
        },
      },
    },
    children: {
      control: false,
      description: 'Eén of meer `OrderedListItem` componenten.',
      table: {
        category: API,
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: 'text',
      description: 'Optionele extra className voor het component.',
      table: {
        category: PROPS,
        type: { summary: 'string' },
      },
    },
    ref: {
      control: false,
      description: 'Ref naar het `ol` HTML-element.',
      table: {
        category: PROPS,
        type: { summary: 'Ref<HTMLOListElement>' },
      },
    },
  },
  component: OrderedList,
  subcomponents: { OrderedListItem },
} satisfies Meta<typeof OrderedList>;

export default meta;
