import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import '../../components-css/button-css/src/button.scss';
import '../../components-css/button-css/src/test.scss';
import packageJSON from '../../components-react/button-react/package.json';
import { Button } from '../../components-react/button-react/src/button';
import { Icon } from '../../components-react/icon-react/src/icon';
import { IconAccessible } from '@tabler/icons-react';

const meta = {
  argTypes: {
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
      if: { arg: 'purpose', truthy: true },
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
    children: { control: 'text', table: { category: 'API' } },
  },
  args: {
    purpose: undefined,
    hint: undefined,
    disabled: false,
    pressed: false,
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
    children: 'Klik mij!',
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
    children: 'Primary Button',
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
  render: ({ children, ...props }) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button {...props} purpose="primary">
        {children}
      </Button>

      <Button {...props} purpose="primary" hint="positive">
        {children} (positive)
      </Button>

      <Button {...props} purpose="primary" hint="negative">
        {children} (negative)
      </Button>
    </div>
  ),
};

export const Secondary: Story = {
  name: 'Secondary Button',
  args: {
    children: 'Secondary Button',
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
  render: ({ children, ...props }) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button {...props} purpose="secondary">
        {children}
      </Button>

      <Button {...props} purpose="secondary" hint="positive">
        {children} (positive)
      </Button>

      <Button {...props} purpose="secondary" hint="negative">
        {children} (negative)
      </Button>
    </div>
  ),
};

export const Subtle: Story = {
  name: 'Subtle Button',
  args: {
    children: 'Subtle Button',
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
  render: ({ children, ...props }) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button {...props} purpose="subtle">
        {children}
      </Button>

      <Button {...props} purpose="subtle" hint="positive">
        {children} (positive)
      </Button>

      <Button {...props} purpose="subtle" hint="negative">
        {children} (negative)
      </Button>
    </div>
  ),
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
    children: 'Klik mij!',
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
    children: 'Klik mij!',
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een icon achter het label`,
      },
    },
  },
};

export const ToggleButton: Story = {
  name: 'Toggle Button',
  args: {
    children: 'Toggle',
  },
  parameters: {
    docs: {
      description: {
        story: `Een toggle button blijft ingedrukt na dat de gebruiker er op klikt`,
      },
    },
  },
  render: ({ children, ...props }) => {
    const [{ pressed, disabled }, updateArgs] = useArgs();

    function onClick() {
      if (disabled === false) {
        updateArgs({ pressed: !pressed });
      }
    }

    return (
      <Button {...props} pressed={pressed} onClick={onClick}>
        {children} ({pressed ? 'pressed' : 'unpressed'})
      </Button>
    );
  },
};
