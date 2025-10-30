import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/button-css/src/button.scss';
import '../../components-css/button-css/src/test.scss';
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
  name: 'Button met icon Links',
  args: {
    children: 'Klik mij!',
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
  name: 'Button met icon rechts',
  args: {
    children: 'Klik mij!',
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

export const ButtonLargeText: Story = {
  name: 'Button 200% zoom',
  args: { children: 'Klik mij!', className: 'nl-button--zoom-200' },
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
    children: 'Confirm',
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
    children: 'Klik nu hier en win de prijs die je anders nooit zou winnen',
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
    children: 'مثال على المجال',
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

export const ButtonMenuClosed: Story = {
  name: 'Button Menu Closed',
  args: {
    children: 'Menu',
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
    children: 'Menu',
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
    children: 'Afsluiten',
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
    children: 'Afsluiten',
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
