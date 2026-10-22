import type { Meta } from '@storybook/react-vite';
import { OrderedList, OrderedListItem } from '@nl-design-system-candidate/ordered-list-react/css';

const PROPS = 'Props';
const API = 'API';

const meta = {
  argTypes: {
    // @ts-expect-error: The restProps are indeed not part of the accepted props, but included here for documentation purpose
    restProps: {
      name: '{...restProps}',
      control: false,
      description:
        'Alle props en attributes die hier niet beschreven zijn worden direct op het HTML-element geplaatst. Dat betekent dat alle attributes van een HTML-element als prop geplaatst kunnen worden.',
      table: {
        category: PROPS,
        type: {
          summary: 'Examples',
          detail: 'id="my-element"\nlang="nl"\ndir="ltr"',
        },
      },
    },
    children: {
      control: false,
      description: 'De inhoud van de lijst, doorgaans één of meer `OrderedListItem` componenten.',
      table: {
        category: API,
        type: { summary: 'ReactNode' },
      },
    },
  },
  component: OrderedList,
  subcomponents: { OrderedListItem },
} satisfies Meta<typeof OrderedList>;

export default meta;
