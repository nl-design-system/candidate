import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
// import { useArgs } from 'storybook/preview-api';
import { Button, type ButtonProps } from '../../../components-react/button-react/src/button';
import { Icon } from '../../../components-react/icon-react/src/icon';

const meta = {
  args: {
    label: undefined,
  },
  title: 'Button components',
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
Wees spaarzaam met een primary button. Te veel primary buttons in het beeld kan verwarrend zijn voor de gebruiker.
Optioneel kan er een \`hint\` mee gegeven worden.

- \`"positive"\` geeft een positief of successvol resultaat aan. Bijvoorbeeld een creatie actie.
- \`"negative"\` geeft een negatief of destructief resultaat aan. Bijvoorbeeld een verwijder actie.
        `,
      },
    },
  },
  render: ({ label, ...props }: ButtonProps, { component }) => {
    const Button = component as React.ComponentType<ButtonProps>;
    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button {...props} label={label} purpose="primary" />
        <Button {...props} label={`${label} (positive)`} purpose="primary" hint="positive" />
        <Button {...props} label={`${label} (negative)`} purpose="primary" hint="negative" />
      </div>
    );
  },
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
Optioneel kan er een \`hint\` mee gegeven worden.

- \`"positive"\` geeft een positief of successvol resultaat aan. Bijvoorbeeld een creatie actie.
- \`"negative"\` geeft een negatief of destructief resultaat aan. Bijvoorbeeld een verwijder actie.
        `,
      },
    },
  },
  render: ({ label, ...props }: ButtonProps, { component }) => {
    const Button = component as React.ComponentType<ButtonProps>;
    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button {...props} label={label} purpose="secondary" />
        <Button {...props} label={`${label} (positive)`} purpose="secondary" hint="positive" />
        <Button {...props} label={`${label} (negative)`} purpose="secondary" hint="negative" />
      </div>
    );
  },
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
        story: `Een subtle button is een button die niet meteen de aandacht trekt. Optioneel kan er een \`hint\` mee gegeven worden.

- \`"positive"\` geeft een positief of successvol resultaat aan. Bijvoorbeeld een creatie actie.
- \`"negative"\` geeft een negatief of destructief resultaat aan. Bijvoorbeeld een verwijder actie.
        `,
      },
    },
  },
  render: ({ label, ...props }: ButtonProps, { component }) => {
    const Button = component as React.ComponentType<ButtonProps>;
    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button {...props} label={label} purpose="subtle" />
        <Button {...props} label={`${label} (positive)`} purpose="subtle" hint="positive" />
        <Button {...props} label={`${label} (negative)`} purpose="subtle" hint="negative" />
      </div>
    );
  },
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
    iconStart: <Icon>🦋</Icon>,
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
    iconEnd: <Icon>🦋</Icon>,
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
  parameters: {
    docs: {
      description: {
        story: `Een button waarin zowel een icon gebruikt wordt als markup in het label, wrapped het label in de gerenderde HTML. Dit omdat er ander een \`gap\` tussen de markup komt te staan.`,
      },
    },
  },
  args: {
    label: (
      <>
        Met icon en <u>geformatteerd</u> label
      </>
    ),
    iconStart: '❤️',
  },
};

export const ToggleButton: Story = {
  name: 'Toggle Button',
  args: {
    label: 'Toggle',
    children: undefined,
    pressed: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een icon achter het label`,
      },
    },
  },
  render: ({ label, ...props }: ButtonProps, context) => {
    const Button = context.component as React.ComponentType<ButtonProps>;
    let [pressed, setPressed] = React.useState(props.pressed);
    let disabled = props.disabled;

    let updateArgs = ({ pressed }: { pressed: boolean }) => {
      setPressed(pressed);
    };

    try {
      [{ pressed, disabled }, updateArgs] = useArgs();
      setPressed = undefined;
    } catch {
      pressed = props.pressed;
      disabled = props.disabled;
    }

    function onClick() {
      if (!disabled) {
        updateArgs({ pressed: !pressed });
      }
    }

    return (
      <Button
        {...props}
        label={`${label} (${props.pressed ? 'pressed' : 'unpressed'})`}
        pressed={props.pressed}
        onClick={onClick}
      />
    );
  },
};

export const FullWidth: Story = {
  name: 'Volle breedte',
  args: {
    label: 'Ik ben een button met een hele lange tekst',
    iconStart: <Icon>🦋</Icon>,
  },
  parameters: {
    docs: {
      description: {
        story: `De parent van een button kan de breedte van de button bepalen.`,
      },
    },
  },
  render: (props: ButtonProps, { component }) => {
    const Button = component as React.ComponentType<ButtonProps>;
    return (
      <div>
        <div style={{ display: 'flex', resize: 'both', overflow: 'auto' }}>
          <Button style={{ flex: 1 }} {...props} />
        </div>
        <br />
        <div style={{ display: 'flex', resize: 'both', overflow: 'auto', width: '300px' }}>
          <Button style={{ flex: 1 }} {...props} />
        </div>
      </div>
    );
  },
};
