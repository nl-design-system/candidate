import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/button-css/src/button.scss';
import '../../components-css/button-css/src/test.scss';
import packageJSON from '../../components-react/button-react/package.json';
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
  title: 'Componenten/Button/Default',
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
        story: 'Een standaard Button.',
      },
    },
    status: { type: [] },
  },
};

export const Active: Story = {
  args: {
    children: 'Klik mij!',
    className: 'nl-button--active',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een standaard Button die actief is.',
      },
    },
    status: { type: [] },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Klik mij!',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een standaard Button die disabled is.',
      },
    },
    status: { type: [] },
  },
};

export const Hover: Story = {
  args: {
    children: 'Klik mij!',
    className: 'nl-button--hover',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een standaard Button die gehoverd is.',
      },
    },
    status: { type: [] },
  },
};

export const Pressed: Story = {
  args: {
    children: 'Klik mij!',
    'aria-pressed': 'true',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een standaard Button die ingedrukt is.',
      },
    },
    status: { type: [] },
  },
};

export const Focused: Story = {
  name: 'Focused',
  args: {
    children: 'Klik mij!',
    className: 'nl-button--focus-visible',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een standaard Button die gefocused is.',
      },
    },
    status: { type: [] },
  },
};
