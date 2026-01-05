import type { Meta } from '@storybook/react-vite';
import { Button } from '@nl-design-system-candidate/button-react/css';

const meta = {
  parameters: {
    docs: {
      description: {
        component: 'Als de `purpose` prop is gezet, kan er optioneel een `hint` mee gegeven worden',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'De content van de button',
      table: { category: 'Props' },
    },
    purpose: {
      control: 'select',
      description: 'Een optioneel doel van de button. Te veel primary buttons kunnen verwarrend zijn',
      options: [undefined, 'primary', 'secondary', 'subtle'],
      table: {
        category: 'Props',
        type: { summary: `'primary' | 'secondary' | 'subtle'` },
      },
    },
    hint: {
      control: 'select',
      description: `Een optionele hint van het resultaat van de button. Deze property werkt alleen als de \`purpose\` prop ook is gezet.

- \`positive\` hint op de bevestiging van iets
- \`positive\` hint op de verwijdering van iets
`,
      options: [undefined, 'positive', 'negative'],
      table: {
        category: 'Props',
        type: { summary: `'positive' | 'negative'` },
      },
    },
    disabled: {
      control: 'boolean',
      description: `Geeft aan dat de button disabled is. Een disabled button is zichtbaar, maar kan niet gebruikt worden. Het kan dus verwarrend zijn voor een gebruiker.

  \`aria-disabled="true"\` wordt hiervoor gebruikt. Op die manier kan de gebruikter de button nog steeds met een toetsenbord bereiken en erachter komen dat de button disabled is.

  De developer is echter wel verantwoordelijk voor het afhandelen van click events die nog steeds zullen werken!`,
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
      },
    },
    htmlDisabled: {
      control: false,
      description: `Als het absoluut noodzakelijk is om de html \`disabled\` attribute te gebruiken, dan kan dat met \`htmlDisabled\`. Bedenk dat dit voor toegankelijkheid problemen zorgt omdat de button helemaal niet meer met het toetsenbord te bereiken is en dus ook onzichtbaar is voor hulpsoftware`,
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
      },
    },
    pressed: {
      control: 'boolean',
      description:
        'Geeft aan dat de button is ingedrukt, ook als de gebruiker op dit moment niet met de button interacteert',
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
      },
    },
    iconOnly: {
      control: 'boolean',
      description: 'Laat alleen icons zien, verberg de tekst.',
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
      },
    },
    iconStart: {
      control: false,
      description: 'Een icon voor de content van de button',
      table: { category: 'Props', type: { summary: 'ReactNode' } },
    },
    iconEnd: {
      control: false,
      description: 'Een icon achter de content van de button',
      table: { category: 'Props', type: { summary: 'ReactNode' } },
    },
    toggle: {
      control: 'boolean',
      description:
        'Voor hulpsoftware wordt de button aangekondigd als Toggle Button, ook wanneer de button nog niet ingedrukt is.',
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
      },
    },
    // @ts-expect-error: The restProps are indeed not part of the accepted props, but included here for documentation purpose
    restProps: {
      name: '{...restProps}',
      control: false,
      description:
        'Alle props en attributes die hier niet bschreven zijn worden direct op het `<button>` element geplaatst. Dat betekent dat alle attributes van een html button als prop geplaatst kunnen worden',
      table: {
        category: 'Props',
        type: {
          summary: 'Examples',
          detail: 'command="show-dialog"\ncommandFor="dialog-id"\n\'aria-labelledby\'="label-id"',
        },
      },
    },
    children: {
      control: false,
      description: 'De content van de button',
      table: {
        category: 'API',
        type: { summary: 'ReactNode' },
      },
    },
  },
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
