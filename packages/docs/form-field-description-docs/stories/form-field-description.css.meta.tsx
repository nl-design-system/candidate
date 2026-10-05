import type { Meta } from '@storybook/react-vite';
import { FormFieldDescription } from '@nl-design-system-candidate/form-field-description-react/css';

const CLASSES = 'classes';
const ATTRIBUTES = 'attributes';
const CHILDREN = 'children';

const meta = {
  argTypes: {
    nlFormFieldDescription: {
      name: 'nl-form-field-description',
      description: 'De basis class van de component.',
      control: false,
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    nlFormFieldDescriptionDisabled: {
      name: 'nl-form-field-description--disabled',
      description:
        'Voegt de CSS class `nl-form-field-description--disabled` toe om aan te geven dat het gekoppelde formulierelement is uitgeschakeld.',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    disabled: {
      description:
        'Voegt de CSS class `nl-form-field-description--disabled` toe om aan te geven dat het gekoppelde formulierelement is uitgeschakeld.',
      control: 'boolean',
      table: {
        category: ATTRIBUTES,
        type: { summary: 'boolean' },
      },
    },
    children: {
      name: 'content',
      description: 'De inhoud van de component.',
      control: 'text',
      table: {
        category: CHILDREN,
        type: { summary: undefined },
      },
    },
  },
  component: (props) => <FormFieldDescription {...props} />,
} satisfies Meta;

export default meta;
