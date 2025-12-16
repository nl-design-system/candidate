import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/button-css/src/button.scss';
import '../../components-css/button-css/src/test.scss';
import packageJSON from '../../components-react/button-react/package.json';
import { Button } from '../../components-react/button-react/src/button';
import allTokens from '../../tokens/button-tokens/tokens.json';

const { primary, secondary, subtle, default: defaultTokens, ...tokens } = allTokens.nl.button;

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
  },
  args: {
    label: 'Klik mij!',
    purpose: 'secondary',
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Button Secondary',
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
    tokens: { nl: { button: { ...tokens, secondary } } },
  },
  title: 'Componenten/Button/Secondary',
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Button',
  parameters: {
    docs: {
      description: {
        story: 'Een secondary Button.',
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
        story: 'Een secondary Button die actief is.',
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
        story: 'Een secondary Button die disabled is.',
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
        story: 'Een secondary Button die gehovered is.',
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
        story: 'Een secondary Button die ingedrukt is.',
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
        story: 'Een secondary Button die ingedrukt die al pressed is.',
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
        story: 'Een secondary Button die ingedrukt die al pressed is.',
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
        story: 'Een secondary Button die ingedrukt die al pressed is.',
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
        story: 'Een secondary Button die gefocused is.',
      },
    },
    status: { type: [] },
  },
};

export const Positive: Story = {
  name: 'Positive',
  args: {
    hint: 'positive',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary positive Button.',
      },
    },
    status: { type: [] },
  },
};

export const PositiveActive: Story = {
  args: {
    hint: 'positive',
    className: 'nl-button--active',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary positive Button die actief is.',
      },
    },
    status: { type: [] },
  },
};

export const PositiveDisabled: Story = {
  args: {
    hint: 'positive',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary positive Button die disabled is.',
      },
    },
    status: { type: [] },
  },
};

export const PositiveHover: Story = {
  args: {
    hint: 'positive',
    className: 'nl-button--hover',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary positive Button die gehovered is.',
      },
    },
    status: { type: [] },
  },
};

export const PositivePressed: Story = {
  args: {
    hint: 'positive',
    pressed: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary positive Button die ingedrukt is.',
      },
    },
    status: { type: [] },
  },
};

export const PositivePressedActive: Story = {
  args: {
    pressed: true,
    hint: 'positive',
    className: 'nl-button--active',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary positive Button die ingedrukt die al pressed is.',
      },
    },
    status: { type: [] },
  },
};

export const PositivePressedHover: Story = {
  args: {
    pressed: true,
    hint: 'positive',
    className: 'nl-button--hover',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary positive Button die ingedrukt die al pressed is.',
      },
    },
    status: { type: [] },
  },
};

export const PositivePressedDisabled: Story = {
  args: {
    pressed: true,
    hint: 'positive',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary positive Button die ingedrukt die al pressed is.',
      },
    },
    status: { type: [] },
  },
};

export const PositiveFocused: Story = {
  args: {
    hint: 'positive',
    className: 'nl-button--focus-visible',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary positive Button die gefocused is.',
      },
    },
    status: { type: [] },
  },
};

export const Negative: Story = {
  name: 'Negative',
  args: {
    hint: 'negative',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary negative Button.',
      },
    },
    status: { type: [] },
  },
};

export const NegativeActive: Story = {
  args: {
    hint: 'negative',
    className: 'nl-button--active',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary negative Button die actief is.',
      },
    },
    status: { type: [] },
  },
};

export const NegativeDisabled: Story = {
  args: {
    hint: 'negative',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary negative Button die disabled is.',
      },
    },
    status: { type: [] },
  },
};

export const NegativeHover: Story = {
  args: {
    hint: 'negative',
    className: 'nl-button--hover',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary negative Button die gehovered is.',
      },
    },
    status: { type: [] },
  },
};

export const NegativePressed: Story = {
  args: {
    hint: 'negative',
    pressed: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary negative Button die ingedrukt is.',
      },
    },
    status: { type: [] },
  },
};

export const NegativePressedActive: Story = {
  args: {
    pressed: true,
    hint: 'negative',
    className: 'nl-button--active',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary negative Button die ingedrukt die al pressed is.',
      },
    },
    status: { type: [] },
  },
};

export const NegativePressedHover: Story = {
  args: {
    pressed: true,
    hint: 'negative',
    className: 'nl-button--hover',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary negative Button die ingedrukt die al pressed is.',
      },
    },
    status: { type: [] },
  },
};

export const NegativePressedDisabled: Story = {
  args: {
    pressed: true,
    hint: 'negative',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary negative Button die ingedrukt die al pressed is.',
      },
    },
    status: { type: [] },
  },
};

export const NegativeFocused: Story = {
  args: {
    hint: 'negative',
    className: 'nl-button--focus-visible',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een secondary negative Button die gefocused is.',
      },
    },
    status: { type: [] },
  },
};
