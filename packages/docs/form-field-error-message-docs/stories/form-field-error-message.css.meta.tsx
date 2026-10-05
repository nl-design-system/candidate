import type { Meta } from '@storybook/react-vite';
import { FormFieldErrorMessage } from '@nl-design-system-candidate/form-field-error-message-react/css';

const CLASSES = 'classes';
const ATTRIBUTES = 'attributes';
const CHILDREN = 'children';

const meta = {
  argTypes: {
    nlFormFieldErrorMessage: {
      control: false,
      name: 'nl-form-field-error-message',
      description: 'De basis class van de component.',
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    children: {
      name: 'content',
      description:
        'Inhoud van de content-slot in de vorm van een `p` HTML-element of phrasing content met uitzondering van interactive content.',
      control: 'text',
      table: {
        category: CHILDREN,
        type: { summary: undefined },
      },
    },
    nlFormFieldErrorMessageIcon: {
      control: false,
      name: '.nl-form-field-error-message__icon',
      description: 'Een child element met daarin een icoon.',
      type: { name: 'other', value: 'string' },
      table: {
        category: CHILDREN,
        type: { summary: undefined },
      },
    },
    nlFormFieldErrorMessageContent: {
      control: false,
      name: '.nl-form-field-error-message__content',
      description: 'Een child element waarin de inhoud geplaatst word.',
      type: { name: 'other', value: 'string' },
      table: {
        category: CHILDREN,
        type: { summary: undefined },
      },
    },
    id: {
      control: { type: 'text' },
      description:
        '`id` HTML-attribuut van de content-slot, zodat het met `aria-describedby` aan het input-element gekoppeld kan worden.',
      table: {
        category: ATTRIBUTES,
        type: { summary: 'string' },
      },
    },
    role: {
      control: { type: 'text' },
      description: '`role` HTML-attribuut van de content-slot, bijvoorbeeld `"alert"` bij client-side validatie.',
      table: {
        category: ATTRIBUTES,
        type: { summary: 'string' },
      },
    },
  },
  component: (props) => {
    const { children, id, role } = props;
    return (
      <FormFieldErrorMessage contentId={id} contentRole={role}>
        {children}
      </FormFieldErrorMessage>
    );
  },
} satisfies Meta;

export default meta;
