import type { Meta } from '@storybook/react-vite';
import { Note } from '@nl-design-system-candidate/note-react/css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PROPS = 'Props';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          detail: 'command="show-dialog"\ncommandFor="dialog-id"\n\'aria-labelledby\'="label-id"',
        },
      },
    },
    // TODO: Ontwikkelfase: moet de children verstopt? Doe dan `children: { table: { disable: true } }`
    children: {
      control: false,
      description: 'De content van de component.',
      table: {
        category: API,
        type: { summary: 'ReactNode' },
      },
    },
    // TODO: Ontwikkelfase: aanvullen adhv acceptance-criteria
  },
  component: Note,
} satisfies Meta<typeof Note>;

export default meta;
