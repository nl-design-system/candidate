import type { ComponentType } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button as ButtonComponent, type ButtonProps } from '@nl-design-system-candidate/button-react';

const _meta = { component: ButtonComponent } satisfies Meta<typeof ButtonComponent>;

type Story = StoryObj<typeof _meta>;

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" />
    <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
  </svg>
);

export const Button: Story = {
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

export const PrimaryButton: Story = {
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
  render({ label, children: _children, ...props }, { component }) {
    const Button = component as ComponentType<ButtonProps>;

    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button {...props} label={label} purpose="primary" />
        <Button {...props} label={`${label} (positive)`} purpose="primary" hint="positive" />
        <Button {...props} label={`${label} (negative)`} purpose="primary" hint="negative" />
      </div>
    );
  },
};

export const SecondaryButton: Story = {
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
  render: ({ label, children: _children, ...props }, { component }) => {
    const Button = component as ComponentType<ButtonProps>;

    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button {...props} label={label} purpose="secondary" />
        <Button {...props} label={`${label} (positive)`} purpose="secondary" hint="positive" />
        <Button {...props} label={`${label} (negative)`} purpose="secondary" hint="negative" />
      </div>
    );
  },
};

export const SubtleButton: Story = {
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
  render: ({ label, children: _children, ...props }, { component }) => {
    const Button = component as ComponentType<ButtonProps>;

    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button {...props} label={label} purpose="subtle" />
        <Button {...props} label={`${label} (positive)`} purpose="subtle" hint="positive" />
        <Button {...props} label={`${label} (negative)`} purpose="subtle" hint="negative" />
      </div>
    );
  },
};

export const DisabledButton: Story = {
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
De styling komt van de \`.nl-button--disabled\` class.
`,
      },
    },
  },
};
export const IconVoorHetLabel: Story = {
  name: 'Icon voor het label',
  argTypes: {
    iconStart: {
      table: {
        disable: false,
      },
    },
  },
  args: {
    iconStart: <Icon />,
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

export const IconAchterHetLabel: Story = {
  name: 'Icon achter het label',
  argTypes: {
    iconEnd: {
      table: {
        disable: false,
      },
    },
  },
  args: {
    iconEnd: <Icon />,
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

export const GeformatteerdLabel: Story = {
  name: 'Geformatteerd label',
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
        story: 'Het label van de button bevat HTML elementen',
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

export const GeformatteerdLabelEnEenIcon: Story = {
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
        story:
          'Het label van de button bevat HTML elementen én een icon. De inhoud van de button wordt geplaatst in een element om gaten tussen de HTML elementen te voorkomen',
      },
    },
  },
  args: {
    label: (
      <>
        Met icon en <u>geformatteerd</u> label
      </>
    ),
    iconStart: <Icon />,
  },
};

export const ToggleButton: Story = {
  name: 'Toggle Button',
  args: {
    label: 'Ingedrukt',
    pressed: true,
    toggle: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Een ingedrukte button. De styling komt van de \`.nl-button--pressed\` class, de semantische role via \`aria-pressed="true"\`.`,
      },
    },
  },
};

export const VolleBreedte: Story = {
  name: 'Volle breedte',
  args: {
    label: 'Ik ben een button met een hele lange tekst',
    iconStart: <Icon />,
  },
  parameters: {
    parameters: {
      docs: {
        description: {
          story: 'Het label van de button bevat HTML elementen',
        },
      },
    },

    docs: {
      description: {
        story: `De parent van een button kan de breedte van de button bepalen. De button schaalt mee met de beschikbare ruimte.`,
      },
    },
  },
  render: (props, { component }) => {
    const Button = component as ComponentType<ButtonProps>;

    return (
      <>
        <div style={{ display: 'flex', resize: 'both', overflow: 'auto' }}>
          <Button style={{ flex: 1 }} {...props} />
        </div>
        <br />
        <div style={{ display: 'flex', resize: 'both', overflow: 'auto', width: '300px' }}>
          <Button style={{ flex: 1 }} {...props} />
        </div>
      </>
    );
  },
};

export const HTMLButton: Story = {
  name: 'HTML Button',
  args: {
    label: 'Klik mij!',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een `<button>` element gestyled als een Button',
      },
    },
  },
  render: (args: ButtonProps) => {
    const { label, children, ...rest } = args;
    return <button {...rest}>{children || label}</button>;
  },
};

export const HTMLInputButton: Story = {
  name: 'HTML Input Button',
  args: {
    label: 'Klik mij!',
    children: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een `<input>` element gestyled als een Button',
      },
    },
  },
  render: (args: ButtonProps) => {
    const { label, ...rest } = args;
    return <input type="button" {...rest} value={label} />;
  },
};
