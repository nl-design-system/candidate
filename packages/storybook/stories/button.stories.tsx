import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/button-css/src/button.scss';
import packageJSON from '../../components-react/button-react/package.json';
import { Button } from '../../components-react/button-react/src/button';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
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

export const ButtonDefault: Story = {
  name: 'Standaard Button',
  args: { children: 'Klik mij!' },
  parameters: {
    docs: {
      description: {
        story: `Een standaard Button`,
      },
    },
  },
};

// TODO: Nog niet geimplementeerd
export const ButtonClosedMenu: Story = {
  name: 'Button met gesloten menu',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een Button die een menu opent. Het menu is gesloten`,
      },
    },
  },
};

// TODO: Nog niet geimplementeerd
export const ButtonOpenMenu: Story = {
  name: 'Button met open menu',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een Button die een menu opent. Het menu is open`,
      },
    },
  },
};

// TODO: Nog niet geimplementeerd
export const ButtonClosedDialog: Story = {
  name: 'Button met gesloten dialoogvenster',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een Button die een dialoogvenster opent. Het dialoogvenster is gesloten`,
      },
    },
  },
};

// TODO: Nog niet geimplementeerd
export const ButtonOpenDialog: Story = {
  name: 'Button met open dialoogvenster',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een Button die een dialoogvenster opent. Het dialoogvenster is open`,
      },
    },
  },
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
    <form action="/">
      <input type="text" placeholder="Vul iets in en druk dan op de verzend knop" />
      <br />
      <Button type="submit">Verzenden</Button>
    </form>
  ),
};
