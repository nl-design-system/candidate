import type { Meta } from '@storybook/react-vite';
import { Button } from '@nl-design-system-candidate/button-react/css';

const CLASSES = 'classes';
const ATTRIBUTES = 'arrtibutes';
const CHILDREN = 'children';

const meta = {
  parameters: {
    docs: {
      description: {
        // component: 'Als er '
      },
    },
  },
  argTypes: {
    label: { table: { disable: true } },
    nlButton: {
      name: 'nl-button',
      description: 'De basis class van dit component',
      control: false,
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    purposePrimary: {
      name: 'nl-button--primary',
      description: 'Maakt van de button een primary button',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    purposeSecondary: {
      name: 'nl-button--secondary',
      description: 'Maakt van de button een secondary button',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    purposeSubtle: {
      name: 'nl-button--subtle',
      description: 'Maakt van de button een subtle button',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    hintPositive: {
      name: 'nl-button--positive',
      description:
        'Markeert het resultaat van de actie als positief. Enkel in combinate met `nl-button--primary`, `nl-button--secondary`, `nl-button--subtle`',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    hintNegative: {
      name: 'nl-button--negative',
      description:
        'Markeert het resultaat van de actie als negatief. Enkel in combinate met `nl-button--primary`, `nl-button--secondary`, `nl-button--subtle`',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    pressed: {
      name: 'aria-pressed',
      description: 'Markeert de button als ingedrukt.',
      control: 'boolean',
      table: {
        category: ATTRIBUTES,
        type: { summary: 'aria-pressed="true"' },
        defaultValue: { summary: 'undefined' },
      },
    },
    disabled: {
      name: 'aria-disabled',
      description:
        'Markeert de button als disabled. Gebruik dit attribute inplaats van de `disabled` attribute. Dit omdat een element met `disabled` niet meer focusbaar is',
      control: 'boolean',
      table: {
        category: ATTRIBUTES,
        type: { summary: 'aria-disabled="true"' },
        defaultValue: { summary: 'undefined' },
      },
    },
    children: {
      name: 'content',
      description: 'De inhoud van de button.',
      control: 'text',
      table: {
        category: CHILDREN,
        type: { summary: undefined },
      },
    },
    icon: {
      name: '.nl-button__icon',
      description: 'Een child element met daarin een icoon.',
      control: false,
      table: {
        category: CHILDREN,
        type: { summary: undefined },
      },
    },
    labelElement: {
      name: '.nl-button__label',
      description:
        'Een child element waarin de inhoud geplaats kan worden. Gebruik dit child element wanneer er geformatteerde markup als inhoud gebruikt wordt in combinatie met een `.nl-button--icon` element',
      control: false,
      table: {
        category: CHILDREN,
        type: { summary: undefined },
      },
    },
  },
  args: {
    nlButton: undefined,
    pressed: false,
    disabled: false,
    children: 'Klik mij!',
  },
  component: ({ label, children, ...props }) => {
    let purpose;
    purpose = props.purposeSubtle ? 'subtle' : purpose;
    purpose = props.purposeSecondary ? 'secondary' : purpose;
    purpose = props.purposePrimary ? 'primary' : purpose;

    let hint;
    hint = props.hintNegative ? 'negative' : hint;
    hint = props.hintPositive ? 'positive' : hint;

    return (
      <Button {...props} purpose={purpose} hint={hint}>
        {label || children}
      </Button>
    );
  },
} satisfies Meta;

export default meta;
