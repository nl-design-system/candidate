import type { Meta } from '@storybook/react-vite';
import { TextInput as TextInputComponent } from '@nl-design-system-candidate/text-input-react/css';

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
          detail: 'id="name"\nname="name"\nautoComplete="name"\naria-describedby="name-description"',
        },
      },
    },
    type: {
      description:
        'Komt overeen met het `type` HTML-attribuut. Voegt de class `nl-text-input--password` toe bij `password`, `nl-text-input--url` bij `url` en `email`, en `nl-text-input--numeric` bij `tel` en `number`.',
      control: 'select',
      options: [
        'text',
        'email',
        'url',
        'tel',
        'search',
        'password',
        'number',
        'date',
        'month',
        'week',
        'time',
        'datetime-local',
      ],
      table: {
        category: API,
        type: {
          summary:
            "'text' | 'email' | 'url' | 'tel' | 'search' | 'password' | 'number' | 'date' | 'month' | 'week' | 'time' | 'datetime-local'",
        },
        defaultValue: { summary: 'text' },
      },
    },
    size: {
      description: 'Bepaalt de breedte van de Text Input. Voegt de class `nl-text-input--{size}` toe.',
      control: 'select',
      options: [undefined, 'xs', 'sm', 'md', 'lg', 'xl', 'stretch'],
      table: {
        category: API,
        type: { summary: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'stretch'" },
      },
    },
    invalid: {
      description:
        'Voegt de class `nl-text-input--invalid` toe en zet het `aria-invalid="true"` HTML-attribuut. Wordt genegeerd als `disabled` gezet is.',
      control: 'boolean',
      table: {
        category: API,
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      description: 'Voegt de class `nl-text-input--disabled` toe en zet het `disabled` HTML-attribuut.',
      control: 'boolean',
      table: {
        category: API,
        type: { summary: 'boolean' },
      },
    },
    readOnly: {
      description:
        'Voegt de class `nl-text-input--read-only` toe en zet het `readonly` HTML-attribuut. Wordt genegeerd als `disabled` gezet is.',
      control: 'boolean',
      table: {
        category: API,
        type: { summary: 'boolean' },
      },
    },
    required: {
      description: 'Zet het `required` HTML-attribuut.',
      control: 'boolean',
      table: {
        category: API,
        type: { summary: 'boolean' },
      },
    },
    dir: {
      description:
        'Richting van de tekstinvoer. Standaard `auto`, zodat een waarde in een ander schrift goed getoond wordt.',
      control: 'select',
      options: ['auto', 'ltr', 'rtl'],
      table: {
        category: API,
        type: { summary: "'auto' | 'ltr' | 'rtl'" },
        defaultValue: { summary: 'auto' },
      },
    },
    'aria-invalid': {
      description:
        'Gebruik `invalid` tenzij de visuele styling en de toegankelijke invalid-state bewust los van elkaar beheerd moeten worden.',
      control: 'select',
      options: [undefined, 'true', 'false', 'grammar', 'spelling'],
      table: {
        category: PROPS,
        type: { summary: "boolean | 'true' | 'false' | 'grammar' | 'spelling'" },
      },
    },
    value: {
      description: 'De waarde van de Text Input.',
      control: 'text',
      table: {
        category: PROPS,
        type: { summary: 'string' },
      },
    },
    placeholder: {
      description: 'Een voorbeeld van de waarde. Gebruik geen placeholder als vervanging van een label of instructie.',
      control: 'text',
      table: {
        category: PROPS,
        type: { summary: 'string' },
      },
    },
  },
  component: TextInputComponent,
} satisfies Meta<typeof TextInputComponent>;

export default meta;
