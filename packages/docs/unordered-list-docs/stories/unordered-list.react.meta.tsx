import type { Meta } from '@storybook/react-vite';
import { UnorderedList, UnorderedListItem } from '@nl-design-system-candidate/unordered-list-react/css';

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
          detail: 'lang="ar"\ndir="rtl"\nhidden',
        },
      },
    },
    children: {
      control: false,
      description: 'De inhoud van de lijst, doorgaans één of meer `UnorderedListItem` componenten.',
      table: {
        category: API,
        type: { summary: 'ReactNode' },
      },
    },
  },
  component: UnorderedList,
  subcomponents: { UnorderedListItem },
} satisfies Meta<typeof UnorderedList>;

export default meta;
