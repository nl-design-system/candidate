import type { Meta } from '@storybook/react-vite';
import { Alert } from '@nl-design-system-candidate/alert-react/css';

const meta = {
  parameters: {
    docs: {
      description: {
        // component: 'Als de `purpose` prop is gezet, kan er optioneel een `hint` mee gegeven worden',
      },
    },
  },
  argTypes: {
    // @ts-expect-error: The restProps are indeed not part of the accepted props, but included here for documentation purpose
    restProps: {
      name: '{...restProps}',
      control: false,
      description:
        'Alle props en attributes die hier niet bschreven zijn worden direct op het `<button>` element geplaatst. Dat betekent dat alle attributes van een html button als prop geplaatst kunnen worden',
      table: {
        category: 'Props',
        type: {
          summary: 'Examples',
          detail: 'command="show-dialog"\ncommandFor="dialog-id"\n\'aria-labelledby\'="label-id"',
        },
      },
    },
    children: {
      control: false,
      description: 'De content van de Alert.',
      table: {
        category: 'API',
        type: { summary: 'ReactNode' },
      },
    },
  },
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
