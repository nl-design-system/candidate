import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import '../../components-css/button-css/src/button.scss';
import '../../components-css/button-css/src/test.scss';
import packageJSON from '../../components-react/button-react/package.json';
import { Icon } from '../../components-react/icon-react/src/icon';
import { IconAccessible } from '@tabler/icons-react';
import { Button } from '../../components-react/button-react/src/button';
import componentMarkdown from '../../docs/button-docs/docs/component.md?raw';
// import tokens from '../../tokens/button-tokens/tokens.json';

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
    // tokens,
  },
  title: 'Componenten/Button',
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
        story: 'Een enkele Button.',
      },
    },
    status: { type: [] },
  },
};

export const Active: Story = {
  name: 'Button (active)',
  args: {
    children: 'Klik mij!',
    className: 'nl-button--active',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een focused Button.',
      },
    },
    status: { type: [] },
  },
};

export const FocusVisible: Story = {
  name: 'Button (focus visible)',
  args: {
    children: 'Klik mij!',
    className: 'nl-button--focus-visible',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een focused Button.',
      },
    },
    status: { type: [] },
  },
};

export const Hover: Story = {
  name: 'Button (hover)',
  args: {
    children: 'Klik mij!',
    className: 'nl-button--hover',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een hovered Button.',
      },
    },
    status: { type: [] },
  },
};

export const Disabled: Story = {
  name: 'Button (disabled)',
  args: {
    children: 'Klik mij!',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een disabled Button.',
      },
    },
    status: { type: [] },
  },
};

export const TogglePressed: Story = {
  name: 'Button (toggle pressed)',
  args: {
    children: 'Klik mij!',
    'aria-pressed': 'true',
    className: 'nl-button--pressed',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een pressed toggle Button.',
      },
    },
    status: { type: [] },
  },
};

export const ToggleUnpressed: Story = {
  name: 'Button (toggle unpressed)',
  args: {
    children: 'Klik mij!',
    'aria-pressed': 'false',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een unpressed toggle Button.',
      },
    },
    status: { type: [] },
  },
};

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

export const ButtonActions: Story = {
  name: 'Button actions',
  args: {
    children: 'Klik mij!',
    onClick: fn(),
    onFocus: fn(),
    onBlur: fn(),
    onKeyDown: fn(),
    onKeyUp: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: `De Button emits verschillende event, zoals:

* onClick
* onKeyDown
* onKeyUp
* onFocus
* onBlur
        `,
      },
    },
  },
};
