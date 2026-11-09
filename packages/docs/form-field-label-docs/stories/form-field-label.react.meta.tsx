import type { Meta } from '@storybook/react-vite';
import { FormFieldLabel } from '@nl-design-system-candidate/form-field-label-react/css';

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
          detail: 'htmlFor="my-input"\nid="my-element"\nlang="nl"',
        },
      },
    },
    children: {
      control: false,
      description: 'Inhoud in de vorm van phrasing content met uitzondering van interactive content.',
      table: {
        category: API,
        type: { summary: 'ReactNode' },
      },
    },
    type: {
      control: 'select',
      options: [undefined, 'option', 'inherit'],
      description:
        'Voegt de CSS class `nl-form-field-label--option` toe om aan te geven dat het gekoppelde formulierelement een radio, checkbox of switch is. Gebruik `inherit` om alle styling van het parent-element over te nemen, bijvoorbeeld wanneer je de component binnen een HTML `h1` element gebruikt.',
      table: {
        category: PROPS,
        type: { summary: "'option' | 'inherit'" },
      },
    },
    input: {
      control: false,
      description:
        'Inhoud in de vorm van een radio, checkbox of switch. Verplicht bij `type="option"`, en niet toegestaan bij andere waarden van `type`.',
      table: {
        category: PROPS,
        type: { summary: 'ReactNode' },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Voegt de CSS class `nl-form-field-label--disabled` toe om aan te geven dat het gekoppelde formulierelement is uitgeschakeld. Niet toegestaan bij `type="inherit"`.',
      table: {
        category: PROPS,
        type: { summary: 'boolean' },
      },
    },
  },
  component: FormFieldLabel,
} satisfies Meta<typeof FormFieldLabel>;

export default meta;
