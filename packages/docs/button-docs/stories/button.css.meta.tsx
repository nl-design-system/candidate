import type { Meta } from '@storybook/react-vite';
import { Button } from '@nl-design-system-candidate/button-react/css';

const CLASSES = 'classes';
const ATTRIBUTES = 'attributes';
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
    stylePressed: {
      name: 'nl-button--pressed',
      description: 'Geeft de button een ingedrukte styling',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    styleDisabled: {
      name: 'nl-button--disabled',
      description: 'Geeft de button een disabled styling',
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
    iconOnly: {
      name: 'nl-button--icon-only',
      description: 'Laat alleen icons zien, verberg de tekst.',
      control: 'boolean',
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    toggle: {
      name: 'aria-pressed',
      description:
        'Voor hulpsoftware wordt de button aangekondigd als Toggle Button, ook wanneer de button nog niet ingedrukt is.',
      control: 'select',
      table: {
        options: [undefined, 'true', 'false'],
        category: ATTRIBUTES,
        type: { summary: undefined },
      },
    },
    children: {
      name: 'content',
      description: 'De content van de button.',
      control: 'text',
      table: {
        category: CHILDREN,
        type: { summary: undefined },
      },
    },
    iconStart: {
      name: '.nl-button__icon-start',
      description: 'Een child element met daarin een icoon voor aan het begin.',
      control: false,
      table: {
        category: CHILDREN,
        type: { summary: undefined },
      },
    },
    iconEnd: {
      name: '.nl-button__icon-end',
      description: 'Een child element met daarin een icoon voor aan het eind.',
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
  component: ({
    label,
    children,
    className,
    purposeSubtle,
    purposeSecondary,
    purposePrimary,
    hintNegative,
    hintPositive,
    styleDisabled,
    stylePressed,
    ...props
  }) => {
    let purpose = props.purpose;
    purpose = purposeSubtle ? 'subtle' : purpose;
    purpose = purposeSecondary ? 'secondary' : purpose;
    purpose = purposePrimary ? 'primary' : purpose;

    let hint = props.hint;
    hint = hintNegative ? 'negative' : hint;
    hint = hintPositive ? 'positive' : hint;

    let classes = className || '';
    classes = styleDisabled ? `${classes} nl-button--disabled`.trim() : classes;
    classes = stylePressed ? `${classes} nl-button--pressed`.trim() : classes;

    return (
      <Button {...props} className={classes} purpose={purpose} hint={hint}>
        {label || children}
      </Button>
    );
  },
} satisfies Meta;

export default meta;
