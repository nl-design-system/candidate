import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/button-css/src/button.scss';
import '../../components-css/button-css/src/test.scss';
import packageJSON from '../../components-react/button-react/package.json';
import { Button } from '../../components-react/button-react/src/button';
// import componentMarkdown from '../../docs/button-docs/docs/component.md?raw';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Button Primary',
  },
  component: Button,
  parameters: {
    // docs: {
    //   description: {
    //     component: componentMarkdown,
    //   },
    // },
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
  title: 'Componenten/Button/Primary',
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Button',
  args: {
    children: 'Klik mij!',
    className: 'nl-button--primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary Button.',
      },
    },
    status: { type: [] },
  },
};

export const Active: Story = {
  args: {
    children: 'Klik mij!',
    className: 'nl-button--primary nl-button--active',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary Button die actief is.',
      },
    },
    status: { type: [] },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Klik mij!',
    disabled: true,
    className: 'nl-button--primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary Button die disabled is.',
      },
    },
    status: { type: [] },
  },
};

export const Hover: Story = {
  args: {
    children: 'Klik mij!',
    className: 'nl-button--primary nl-button--hover',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary Button die gehovered is.',
      },
    },
    status: { type: [] },
  },
};

export const Pressed: Story = {
  args: {
    children: 'Klik mij!',
    'aria-pressed': 'true',
    className: 'nl-button--primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary Button die ingedrukt is.',
      },
    },
    status: { type: [] },
  },
};

export const Focused: Story = {
  name: 'Focused',
  args: {
    children: 'Klik mij!',
    className: 'nl-button--primary nl-button--focus-visible',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary Button die gefocused is.',
      },
    },
    status: { type: [] },
  },
};

export const Positive: Story = {
  name: 'Positive',
  args: {
    children: 'Klik mij!',
    className: 'nl-button--primary nl-button--positive',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary positive Button.',
      },
    },
    status: { type: [] },
  },
};

export const PositiveActive: Story = {
  args: {
    children: 'Klik mij!',
    className: 'nl-button--primary nl-button--positive nl-button--active',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary positive Button die actief is.',
      },
    },
    status: { type: [] },
  },
};

export const PositiveDisabled: Story = {
  args: {
    children: 'Klik mij!',
    disabled: true,
    className: 'nl-button--primary nl-button--positive',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary positive Button die disabled is.',
      },
    },
    status: { type: [] },
  },
};

export const PositiveHover: Story = {
  args: {
    children: 'Klik mij!',
    className: 'nl-button--primary nl-button--positive nl-button--hover',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary positive Button die gehovered is.',
      },
    },
    status: { type: [] },
  },
};

export const PositivePressed: Story = {
  args: {
    children: 'Klik mij!',
    'aria-pressed': 'true',
    className: 'nl-button--primary nl-button--positive',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary positive Button die ingedrukt is.',
      },
    },
    status: { type: [] },
  },
};

export const PositiveFocus: Story = {
  args: {
    children: 'Klik mij!',
    purpose: 'primary',
    hint: 'positive',
    className: 'nl-button--focus-visible',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary positive Button die gefocused is.',
      },
    },
    status: { type: [] },
  },
};

export const Negative: Story = {
  name: 'Negative',
  args: {
    children: 'Klik mij!',
    className: 'nl-button--primary nl-button--negative',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary negative Button.',
      },
    },
    status: { type: [] },
  },
};

export const NegativeActive: Story = {
  args: {
    children: 'Klik mij!',
    className: 'nl-button--primary nl-button--negative nl-button--active',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary negative Button die actief is.',
      },
    },
    status: { type: [] },
  },
};

export const NegativeDisabled: Story = {
  args: {
    children: 'Klik mij!',
    disabled: true,
    className: 'nl-button--primary nl-button--negative',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary negative Button die disabled is.',
      },
    },
    status: { type: [] },
  },
};

export const NegativeHover: Story = {
  args: {
    children: 'Klik mij!',
    className: 'nl-button--primary nl-button--negative nl-button--hover',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary negative Button die gehovered is.',
      },
    },
    status: { type: [] },
  },
};

export const NegativePressed: Story = {
  args: {
    children: 'Klik mij!',
    'aria-pressed': 'true',
    className: 'nl-button--primary nl-button--negative',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary negative Button die ingedrukt is.',
      },
    },
    status: { type: [] },
  },
};
export const NegativeFocus: Story = {
  args: {
    children: 'Klik mij!',
    purpose: 'primary',
    hint: 'negative',
    className: 'nl-button--focus-visible',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een primary positive Button die gefocused is.',
      },
    },
    status: { type: [] },
  },
};
