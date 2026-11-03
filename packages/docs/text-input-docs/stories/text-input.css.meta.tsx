import type { Meta } from '@storybook/react-vite';
import { TextInput } from '@nl-design-system-candidate/text-input-react/css';

const CLASSES = 'classes';
const ATTRIBUTES = 'attributes';

const meta = {
  argTypes: {
    nlTextInput: {
      name: 'nl-text-input',
      description: 'De basis class van de component.',
      control: false,
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    styleInvalid: {
      name: 'nl-text-input--invalid',
      description: 'Geeft de Text Input een invalid styling. Zet ook het `aria-invalid="true"` HTML-attribuut.',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    styleDisabled: {
      name: 'nl-text-input--disabled',
      description: 'Geeft de Text Input een disabled styling. `<input disabled>` krijgt deze styling ook zonder class.',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    styleReadOnly: {
      name: 'nl-text-input--read-only',
      description:
        'Geeft de Text Input een read-only styling. `<input readonly>` krijgt deze styling ook zonder class.',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    styleSize: {
      name: 'nl-text-input--{size}',
      description:
        'Bepaalt de breedte van de Text Input: `nl-text-input--xs`, `nl-text-input--sm`, `nl-text-input--md`, `nl-text-input--lg`, `nl-text-input--xl` of `nl-text-input--stretch`.',
      control: 'select',
      options: [undefined, 'xs', 'sm', 'md', 'lg', 'xl', 'stretch'],
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    styleNumeric: {
      name: 'nl-text-input--numeric',
      description:
        'Voor getallen: alle cijfers zijn even hoog en even breed. Wordt automatisch toegevoegd bij `type="tel"`, `inputmode="numeric"`, `inputmode="decimal"` en `inputmode="tel"`.',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    styleUrl: {
      name: 'nl-text-input--url',
      description:
        'Voor een webadres of e-mailadres: geen ligaturen. Wordt automatisch toegevoegd bij `type="url"` en `type="email"`.',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    stylePasswordVisible: {
      name: 'nl-text-input--password-visible',
      description:
        'Voor een wachtwoord dat zichtbaar gemaakt is met `type="text"`: dezelfde styling als `nl-text-input--password`.',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    type: {
      description: 'Het `type` HTML-attribuut.',
      control: 'select',
      options: ['text', 'email', 'url', 'tel', 'search', 'password'],
      table: {
        category: ATTRIBUTES,
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    value: {
      description: 'De waarde van de Text Input.',
      control: 'text',
      table: {
        category: ATTRIBUTES,
        type: { summary: 'string' },
      },
    },
    placeholder: {
      description: 'Een voorbeeld van de waarde. Gebruik geen placeholder als vervanging van een label of instructie.',
      control: 'text',
      table: {
        category: ATTRIBUTES,
        type: { summary: 'string' },
      },
    },
    disabled: {
      description: 'Het `disabled` HTML-attribuut.',
      control: 'boolean',
      table: {
        category: ATTRIBUTES,
        type: { summary: 'boolean' },
      },
    },
    readOnly: {
      name: 'readonly',
      description: 'Het `readonly` HTML-attribuut.',
      control: 'boolean',
      table: {
        category: ATTRIBUTES,
        type: { summary: 'boolean' },
      },
    },
    required: {
      description: 'Het `required` HTML-attribuut.',
      control: 'boolean',
      table: {
        category: ATTRIBUTES,
        type: { summary: 'boolean' },
      },
    },
    'aria-invalid': {
      description: 'Het `aria-invalid` HTML-attribuut. Gebruik `"true"` samen met `nl-text-input--invalid`.',
      control: 'select',
      options: [undefined, 'true', 'false'],
      table: {
        category: ATTRIBUTES,
        type: { summary: 'string' },
      },
    },
    invalid: { table: { disable: true } },
    size: { table: { disable: true } },
  },
  component: ({
    className,
    styleDisabled,
    styleInvalid,
    styleNumeric,
    stylePasswordVisible,
    styleReadOnly,
    styleSize,
    styleUrl,
    ...props
  }) => {
    const classes = [
      className,
      styleInvalid && 'nl-text-input--invalid',
      styleDisabled && 'nl-text-input--disabled',
      styleReadOnly && 'nl-text-input--read-only',
      styleSize && `nl-text-input--${styleSize}`,
      styleNumeric && 'nl-text-input--numeric',
      styleUrl && 'nl-text-input--url',
      stylePasswordVisible && 'nl-text-input--password-visible',
    ]
      .filter(Boolean)
      .join(' ');

    return <TextInput {...props} className={classes || undefined} />;
  },
} satisfies Meta;

export default meta;
