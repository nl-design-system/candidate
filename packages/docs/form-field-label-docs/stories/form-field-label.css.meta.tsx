import type { Meta } from '@storybook/react-vite';
import { FormFieldLabel } from '@nl-design-system-candidate/form-field-label-react/css';

const CLASSES = 'classes';
const ATTRIBUTES = 'attributes';
const CHILDREN = 'children';

const meta = {
  argTypes: {
    nlFormFieldLabel: {
      name: 'nl-form-field-label',
      description: 'De basis class van de component.',
      control: false,
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    nlFormFieldLabelOption: {
      name: 'nl-form-field-label--option',
      description:
        'Voegt de CSS class `nl-form-field-label--option` toe om aan te geven dat het gekoppelde formulierelement een radio, checkbox of switch is.',
      control: false,
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    nlFormFieldLabelDisabled: {
      name: 'nl-form-field-label--disabled',
      description:
        'Voegt de CSS class `nl-form-field-label--disabled` toe om aan te geven dat het gekoppelde formulierelement is uitgeschakeld.',
      control: false,
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    nlFormFieldLabelInherit: {
      name: 'nl-form-field-label--inherit',
      description:
        'Voegt de CSS class `nl-form-field-label--inherit` toe om alle styling van het parent-element over te nemen, bijvoorbeeld wanneer je de component binnen een HTML `h1` element gebruikt.',
      control: false,
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    htmlFor: {
      name: 'for',
      description: 'Koppelt de Form Field Label met het HTML `id` attribuut aan het input-element.',
      control: 'text',
      table: {
        category: ATTRIBUTES,
        type: { summary: 'string' },
      },
    },
    children: {
      name: 'content',
      description: 'Inhoud in de vorm van phrasing content met uitzondering van interactive content.',
      control: 'text',
      table: {
        category: CHILDREN,
        type: { summary: undefined },
      },
    },
  },
  component: (props) => <FormFieldLabel {...props} />,
} satisfies Meta;

export default meta;
