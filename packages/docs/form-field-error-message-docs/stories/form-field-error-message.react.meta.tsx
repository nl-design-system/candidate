import type { Meta } from '@storybook/react-vite';
import { FormFieldErrorMessage } from '@nl-design-system-candidate/form-field-error-message-react/css';

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
          detail: 'command="show-dialog"\ncommandFor="dialog-id"\n\'aria-labelledby\'="label-id"',
        },
      },
    },
    children: {
      control: false,
      description:
        'Inhoud van de content-slot in de vorm van een `p` HTML-element of phrasing content met uitzondering van interactive content.',
      table: {
        category: API,
        type: { summary: 'ReactNode' },
      },
    },
    icon: {
      control: false,
      description:
        'Inhoud van de icon-slot in de vorm van een `p` HTML-element of phrasing content met uitzondering van interactive content.',
      table: {
        category: API,
        type: { summary: 'ReactNode' },
      },
    },
    contentId: {
      control: { type: 'text' },
      description:
        '`id` HTML-attribuut van de content-slot, zodat het met `aria-describedby` aan het input-element gekoppeld kan worden.',
      table: {
        category: PROPS,
        type: { summary: 'string' },
      },
    },
    contentRole: {
      control: { type: 'text' },
      description: '`role` HTML-attribuut van de content-slot, bijvoorbeeld `"alert"` bij client-side validatie.',
      table: {
        category: PROPS,
        type: { summary: 'string' },
      },
    },
  },
  component: FormFieldErrorMessage,
} satisfies Meta<typeof FormFieldErrorMessage>;

export default meta;
