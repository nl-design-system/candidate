import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import '../../components-css/icon-css/src/icon.scss';
import '../../components-css/button-css/src/button.scss';
import '../../components-css/button-css/src/test.scss';
import packageJSON from '../../components-react/button-react/package.json';
import { Button } from '../../components-react/button-react/src/button';
import { Icon } from '../../components-react/icon-react/src/icon';
import { IconAccessible } from '@tabler/icons-react';

const meta = {
  argTypes: {
    label: {
      control: 'text',
      table: { category: 'Props' },
    },
    purpose: {
      control: 'select',
      options: [undefined, 'primary', 'secondary', 'subtle'],
      table: {
        category: 'Props',
        type: { summary: `'primary' | 'secondary' | 'subtle'` },
        defaultValue: { summary: 'undefined' },
      },
    },
    hint: {
      control: 'select',
      options: [undefined, 'positive', 'negative'],
      table: {
        category: 'Props',
        type: { summary: `'positive' | 'nagative'` },
        defaultValue: { summary: 'undefined' },
      },
    },
    disabled: { control: 'boolean', table: { category: 'Props', defaultValue: { summary: 'false' } } },
    htmlDisabled: { control: false, table: { category: 'Props', defaultValue: { summary: 'false' } } },
    pressed: { control: 'boolean', table: { category: 'Props', defaultValue: { summary: 'false' } } },
    iconStart: {
      control: false,
      table: { category: 'Props', disable: true },
    },
    iconEnd: {
      control: false,
      table: { category: 'Props', disable: true },
    },
    // @ts-expect-error: The restProps are indeed not part of the accepted props, but included here for documentation purpose
    restProps: {
      name: '{...restProps}',
      control: false,
      description:
        'All props not listed here are passed directly to the rendered `<button>` element. This means that all attributes available on a html button can be added as prop',
      table: {
        category: 'Props',
        type: {
          summary: 'Examples',
          detail: 'command="show-dialog"\ncommandFor="dialog-id"\n\'aria-labelledby\'="label-id"',
        },
      },
    },
    children: { control: false, table: { category: 'API' } },
  },
  args: {
    purpose: undefined,
    hint: undefined,
    disabled: false,
    pressed: false,
    children: undefined as never,
  },
  component: Button,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/button',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Button',
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Button',
  args: {
    label: 'Klik mij!',
  },
  parameters: {
    docs: {
      description: {
        story: `Een standaard Button`,
      },
    },
  },
};

export const Primary: Story = {
  name: 'Primary Button',
  args: {
    label: 'Primary Button',
    purpose: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: `Button die een primaire actie aanduid. Een primaire actie is de meest logische keuze in een flow.
Wees spaarzaam met een primary button. Te veel primary buttons in beeld kan verwarrend zijn voor de gebruiker.
Optioneel kan er een hint mee gegeven worden.

- \`hint="positive"\` geeft een positief of successvol resultaat aan. Bijvoorbeeld een creatie actie.
- \`hint="negative"\` geeft een negatief of destructief resultaat aan. Bijvoorbeeld een verwijder actie.
        `,
      },
    },
  },
  render: ({ label, ...props }) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button {...props} label={label} purpose="primary" />
      <Button {...props} label={`${label} (positive)`} purpose="primary" hint="positive" />
      <Button {...props} label={`${label} (negative)`} purpose="primary" hint="negative" />
    </div>
  ),
};

export const Secondary: Story = {
  name: 'Secondary Button',
  args: {
    label: 'Secondary Button',
    purpose: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: `Button die een secondare actie aanduid. De secondaire actie wordt gebruikt als alternatief voor de primaire actie.
Optioneel kan er een hint mee gegeven worden.

- \`hint="positive"\` geeft een positief of successvol resultaat aan. Bijvoorbeeld een creatie actie.
- \`hint="negative"\` geeft een negatief of destructief resultaat aan. Bijvoorbeeld een verwijder actie.
        `,
      },
    },
  },
  render: ({ label, ...props }) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button {...props} label={label} purpose="secondary" />
      <Button {...props} label={`${label} (positive)`} purpose="secondary" hint="positive" />
      <Button {...props} label={`${label} (negative)`} purpose="secondary" hint="negative" />
    </div>
  ),
};

export const Subtle: Story = {
  name: 'Subtle Button',
  args: {
    label: 'Subtle Button',
    purpose: 'subtle',
  },
  parameters: {
    docs: {
      description: {
        story: `Een subtle button is een button die niet meteen de aandacht trekt.
Optioneel kan er een hint mee gegeven worden.

- \`hint="positive"\` geeft een positief of successvol resultaat aan. Bijvoorbeeld een creatie actie.
- \`hint="negative"\` geeft een negatief of destructief resultaat aan. Bijvoorbeeld een verwijder actie.
        `,
      },
    },
  },
  render: ({ label, ...props }) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button {...props} label={label} purpose="subtle" />
      <Button {...props} label={`${label} (positive)`} purpose="subtle" hint="positive" />
      <Button {...props} label={`${label} (negative)`} purpose="subtle" hint="negative" />
    </div>
  ),
};

export const Disabled: Story = {
  name: 'Disabled Button',
  args: {
    label: 'Klik mij!',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Een button die (tijdelijk) niet bruikbaar is. Hoewel dit patroon vaak gebruikt wordt, kan het verwarrend zijn voor gebruikers.

Om de button focusbaar te houden voor screenreaders, wordt er \`aria-disabled="true"\` op de button geplaatst om aan te geven dat deze disabled is.
Dat betekend dat de \`onClick\` handlers blijven werken, en dat de developer verantwoordelijk is om een melding te geven waarom de button disabled is.
`,
      },
    },
  },
};

export const IconStart: Story = {
  name: 'Icon voor het label',
  argTypes: {
    iconStart: {
      table: {
        disable: false,
      },
    },
  },
  args: {
    iconStart: (
      <Icon>
        <IconAccessible />
      </Icon>
    ),
    label: 'Klik mij!',
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een icon voor het label`,
      },
    },
  },
};

export const IconEnd: Story = {
  name: 'Icon achter het label',
  argTypes: {
    iconEnd: {
      table: {
        disable: false,
      },
    },
  },
  args: {
    iconEnd: (
      <Icon>
        <IconAccessible />
      </Icon>
    ),
    label: 'Klik mij!',
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een icon achter het label`,
      },
    },
  },
};

export const FormattedLabel: Story = {
  name: 'Geformatteerd label',
  argTypes: {
    label: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    label: (
      <>
        Dit is een <em>button</em> met een <u>geformatteerd</u> label
      </>
    ),
  },
};

export const FormattedLabelWithIcon: Story = {
  name: 'Geformatteerd label en een Icon',
  argTypes: {
    label: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    label: (
      <>
        {' '}
        Met icon en <u>geformatteerd</u> label
      </>
    ),
    iconStart: (
      <Icon>
        <IconAccessible />
      </Icon>
    ),
  },
};

export const ToggleButton: Story = {
  name: 'Toggle Button',
  args: {
    label: 'Toggle',
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een icon achter het label`,
      },
    },
  },
  render: ({ label, ...props }) => {
    const [{ pressed, disabled }, updateArgs] = useArgs();

    function onClick() {
      if (disabled === false) {
        updateArgs({ pressed: !pressed });
      }
    }

    return (
      <Button
        {...props}
        label={`${label} (${pressed ? 'pressed' : 'unpressed'})`}
        pressed={pressed}
        onClick={onClick}
      ></Button>
    );
  },
};

export const FullWidth: Story = {
  name: 'Volle breedte',
  args: {
    label: 'Ik ben een button met een hele lange tekst',
    iconStart: (
      <Icon>
        <IconAccessible />
      </Icon>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `De parent van een button kan de breedte van de button bepalen.`,
      },
    },
  },
  render: (props) => (
    <>
      <div style={{ display: 'flex', resize: 'both', overflow: 'auto' }}>
        <Button style={{ flex: 1 }} {...props} />
      </div>
      <br />
      <div style={{ display: 'flex', resize: 'both', overflow: 'auto', width: '300px' }}>
        <Button style={{ flex: 1 }} {...props} />
      </div>
    </>
  ),
};
