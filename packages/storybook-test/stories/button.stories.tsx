import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/icon-css/src/icon.scss';
import '../../components-css/button-css/src/button.scss';
import '../../components-css/button-css/src/test.scss';
import '@utrecht/icon-css/dist/index.css';
import packageJSON from '../../components-react/button-react/package.json';
import { Icon } from '../../components-react/icon-react/src/icon';
import { IconAccessible } from '@tabler/icons-react';
import { Button } from '../../components-react/button-react/src/button';
import componentMarkdown from '../../docs/button-docs/docs/component.md?raw';
import tokens from '../../tokens/button-tokens/tokens.json';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
  },
  args: {
    label: 'Klik mij nu!',
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Button van de dag',
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
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
    tokens,
  },
  title: 'Componenten/Button',
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonIconStart: Story = {
  name: 'Button met iconStart',
  args: {
    iconStart: (
      <Icon>
        <IconAccessible />
      </Icon>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een icon aan de linkerkant en tekst`,
      },
    },
  },
};

export const ButtonIconEnd: Story = {
  name: 'Button met iconEnd',
  args: {
    iconEnd: (
      <Icon>
        <IconAccessible />
      </Icon>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een icon aan de rechterkant en tekst`,
      },
    },
  },
};

export const ButtonUtrechtIconStart: Story = {
  name: 'Button met Utrecht iconStart',
  args: {
    iconStart: (
      <span className="utrecht-icon">
        <IconAccessible />
      </span>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een utrecht-icon aan de linkerkant en tekst`,
      },
    },
  },
};

export const ButtonUtrechtIconEnd: Story = {
  name: 'Button met Utrecht iconEnd',
  args: {
    iconEnd: (
      <span className="utrecht-icon">
        <IconAccessible />
      </span>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een utrecht-icon aan de rechterkant en tekst`,
      },
    },
  },
};

export const ButtonLargeText: Story = {
  name: 'Button 200% zoom',
  args: {
    className: 'nl-button--zoom-200',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Button waarvan de tekst 200% vergroot is.`,
      },
    },
  },
};

export const ButtonDifferentLanguage: Story = {
  name: 'Button in een andere taal',
  args: {
    label: 'Confirm',
    lang: 'en',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een knop in een andere taal',
      },
    },
    status: { type: [] },
  },
};

export const ButtonVeryLongName = {
  name: 'Button met een erg lange titel',
  args: {
    label: 'Klik nu hier en win de prijs die je anders nooit zou winnen',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een knop met een erg lange titel',
      },
    },
    status: { type: [] },
  },
};

export const ButtonRTL = {
  name: 'Button in Arabisch',
  args: {
    label: 'مثال على المجال',
    dir: 'rtl',
    lang: 'ar',
  },
  parameters: {
    docs: {
      description: {
        story: `Een enkele button in het Arabisch.

Het moet mogelijk zijn de \`lang\` en \`dir\` attribuut in te stellen.`,
      },
    },
  },
  status: { type: [] },
};

export const ButtonVerticalRL = {
  name: 'Button in Japans',
  args: {
    label: 'これはテストテキスト。日本語は楽しいです。',
    style: { writingMode: 'vertical-rl' },
    lang: 'ja',
  },
  parameters: {
    docs: {
      description: {
        story: `Een enkele button in het Japans.

Het moet mogelijk zijn het \`lang\` attribute en de \`writing-mode: 'vertical-rl';\` css rule in te stellen.`,
      },
    },
  },
  status: { type: [] },
};

export const ButtonReset: Story = {
  name: 'Reset Button',
  parameters: {
    docs: {
      description: {
        story: `Een Button die formuliervelden leegt`,
      },
    },
  },
  render: () => (
    <form>
      <input type="text" placeholder="Vul iets in en druk dan op de reset knop" />
      <br />
      <Button type="reset">Reset</Button>
    </form>
  ),
};

export const ButtonSubmit: Story = {
  name: 'Verzend Button',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een Button die een formulier verstuurt`,
      },
    },
  },
  render: () => (
    <form
      action="/"
      onSubmit={(event) => {
        event.preventDefault();
        // @ts-expect-error: Use alert to give user feedback
        alert('Verzonden'); // eslint-disable-line
      }}
    >
      <input type="text" placeholder="Vul iets in en druk dan op de verzend knop" />
      <br />
      <Button type="submit">Verzenden</Button>
    </form>
  ),
};

export const NoLabel: Story = {
  name: 'Button zonder label',
  args: {
    label: undefined,
    'aria-label': 'Button zonder label',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een button zonder label',
      },
    },
    status: { type: [] },
  },
};

export const SmallLabel: Story = {
  name: 'Button met klein label',
  args: {
    label: 'a',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een button zonder label',
      },
    },
    status: { type: [] },
  },
};

export const ButtonMenuClosed: Story = {
  name: 'Button Menu Closed',
  args: {
    label: 'Menu',
    'aria-expanded': 'false',
    'aria-haspopup': 'menu',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een menu knop (gesloten)',
      },
    },
    status: { type: [] },
  },
};

export const ButtonMenuOpened: Story = {
  name: 'Button Menu Opend',
  args: {
    label: 'Menu',
    'aria-expanded': 'true',
    'aria-haspopup': 'menu',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een menu knop (geopend)',
      },
    },
    status: { type: [] },
  },
};

export const ButtonDialogClosed: Story = {
  name: 'Button Dialog Closed',
  args: {
    label: 'Afsluiten',
    'aria-expanded': 'false',
    'aria-haspopup': 'dialog',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een knop die een dialoog opend',
      },
    },
    status: { type: [] },
  },
};

export const ButtonDialogOpened: Story = {
  name: 'Button Dialog Opened',
  args: {
    label: 'Afsluiten',
    'aria-expanded': 'true',
    'aria-haspopup': 'dialog',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een knop die een dialoog sluit',
      },
    },
    status: { type: [] },
  },
};

export const WithChildren: Story = {
  name: 'Children ipv label',
  args: {
    label: undefined,
    style: { '--nl-button-column-gap': '3em' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Een knop die children gebruikt ipv de label prop',
      },
    },
    status: { type: [] },
  },
  render: ({ ...props }) => <Button {...props}>Klik mij!</Button>,
};

export const WithChildrenIcon: Story = {
  name: 'Children ipv label met een icon',
  args: {
    label: undefined,
    style: { '--nl-button-column-gap': '3em' },
    iconEnd: (
      <Icon>
        <IconAccessible />
      </Icon>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Een knop die children gebruikt ipv de label prop inclusief icon',
      },
    },
    status: { type: [] },
  },
  render: ({ ...props }) => <Button {...props}>Klik mij!</Button>,
};

export const WithFormattedChildren: Story = {
  name: 'Children formatted ipv label',
  args: {
    label: undefined,
    style: { '--nl-button-column-gap': '3em' },
  },
  parameters: {
    docs: {
      description: {
        story: 'De content is geformat met extra markup',
      },
    },
    status: { type: [] },
  },
  render: ({ ...props }) => (
    <Button {...props}>
      Klik <u>mij</u> nu!
    </Button>
  ),
};

export const WithFormattedChildrenAndIcon: Story = {
  name: 'Children formatted ipv label met een icon',
  args: {
    label: undefined,
    style: { '--nl-button-column-gap': '3em' },
    iconEnd: (
      <Icon>
        <IconAccessible />
      </Icon>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Geformatteerde content als children mee gegeven. Merk op dat, in de gerenderde html, de children gewrapped zijn in een `<span>` nu er ook een Icon aanwezig is.',
      },
    },
    status: { type: [] },
  },

  render: ({ ...props }) => (
    <Button {...props}>
      Klik <u>mij</u> nu!
    </Button>
  ),
};

export const FullWidth: Story = {
  name: 'Volle breedte',
  args: {
    label: 'Ik ben een button met een hele lange tekst',
  },
  parameters: {
    docs: {
      description: {
        story: `De parent van een button kan de breedte van de button bepalen.`,
      },
    },
  },
  render: ({ label, ...props }) => (
    <>
      <div style={{ display: 'flex', resize: 'both', overflow: 'auto' }}>
        <Button style={{ flex: 1 }} {...props} label={label} />
      </div>
      <br />
      <div style={{ display: 'flex', resize: 'both', overflow: 'auto' }}>
        <Button style={{ flex: 1 }} {...props}>
          {label}
        </Button>
      </div>
      <br />
      <div style={{ display: 'flex', resize: 'both', overflow: 'auto', width: '300px' }}>
        <Button style={{ flex: 1 }} {...props} label={label} />
      </div>
      <br />
      <div style={{ display: 'flex', resize: 'both', overflow: 'auto', width: '300px' }}>
        <Button style={{ flex: 1 }} {...props}>
          {label}
        </Button>
      </div>
    </>
  ),
};
export const FullWidthWithIcon: Story = {
  name: 'Volle breedte met icon',
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
  render: ({ label, ...props }) => (
    <>
      <div style={{ display: 'flex', resize: 'both', overflow: 'auto' }}>
        <Button style={{ flex: 1 }} {...props} label={label} />
      </div>
      <br />
      <div style={{ display: 'flex', resize: 'both', overflow: 'auto' }}>
        <Button style={{ flex: 1 }} {...props}>
          {label}
        </Button>
      </div>
      <br />
      <div style={{ display: 'flex', resize: 'both', overflow: 'auto', width: '300px' }}>
        <Button style={{ flex: 1 }} {...props} label={label} />
      </div>
      <br />
      <div style={{ display: 'flex', resize: 'both', overflow: 'auto', width: '300px' }}>
        <Button style={{ flex: 1 }} {...props}>
          {label}
        </Button>
      </div>
    </>
  ),
};

export const NotEnoughSpace: Story = {
  name: 'Content loopt uit tekst',
  args: {
    label: 'Ik ben een button met een heel erg lange tekst en ik pas niet in de ruimte, owja, css is awesome',
  },
  parameters: {
    docs: {
      description: {
        story:
          'De tekst van de button is te lang voor de ruimte die beschikbaar is. Daarom loopt de tekst uit de button. Om toch genoeg contrast te hebben, moet de achtergrond van de button achter de button door blijven lopen',
      },
    },
  },
  render: (props) => (
    <div style={{ display: 'flex', height: '100svh', alignItems: 'center' }}>
      <div>
        <Button {...props} style={{ maxWidth: '100px', maxHeight: '100px' }} />
        <button className="nl-button" style={{ maxWidth: '100px', maxHeight: '100px' }}>
          {props.label}
        </button>
      </div>
      <div style={{ maxWidth: '100px', maxHeight: '100px' }}>
        <Button {...props} />
      </div>
      <div style={{ maxWidth: '100px', maxHeight: '100px' }}>
        <button className="nl-button">{props.label}</button>
      </div>
    </div>
  ),
};
