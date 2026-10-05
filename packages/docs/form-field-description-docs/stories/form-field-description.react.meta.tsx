import type { Meta } from '@storybook/react-vite';
import { FormFieldDescription } from '@nl-design-system-candidate/form-field-description-react/css';

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
        'Inhoud in de vorm van een HTML `p` element of phrasing content met uitzondering van interactive content.',
      table: {
        category: API,
        type: { summary: 'ReactNode' },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Voegt de CSS class `nl-form-field-description--disabled` toe om aan te geven dat het gekoppelde formulierelement is uitgeschakeld.',
      table: {
        category: PROPS,
        type: { summary: 'boolean' },
      },
    },
  },
  component: FormFieldDescription,
} satisfies Meta<typeof FormFieldDescription>;

export default meta;
