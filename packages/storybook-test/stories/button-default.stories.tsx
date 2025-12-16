import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/button-css/src/button.scss';
import '../../components-css/button-css/src/test.scss';
import packageJSON from '../../components-react/button-react/package.json';
import { Button } from '../../components-react/button-react/src/button';
import componentMarkdown from '../../docs/button-docs/docs/component.md?raw';
import allTokens from '../../tokens/button-tokens/tokens.json';

const { primary, secondary, subtle, default: defaultTokens, ...tokens } = allTokens.nl.button;

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
  },
  args: {
    label: 'Klik mij!',
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
    tokens: { nl: { button: { ...tokens, default: defaultTokens } } },
  },
  title: 'Componenten/Button/Default',
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Button',
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
    pressed: true,
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

export const PressedActive: Story = {
  args: {
    pressed: true,
    className: 'nl-button--active',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een standaaard Button die ingedrukt die al pressed is.',
      },
    },
    status: { type: [] },
  },
};

export const PressedHover: Story = {
  args: {
    pressed: true,
    className: 'nl-button--hover',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een standaaard Button die ingedrukt die al pressed is.',
      },
    },
    status: { type: [] },
  },
};

export const PressedDisabled: Story = {
  args: {
    pressed: true,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een standaaard Button die ingedrukt die al pressed is.',
      },
    },
    status: { type: [] },
  },
};

export const Focused: Story = {
  name: 'Focused',
  args: {
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
