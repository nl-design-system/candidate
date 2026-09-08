import type { Meta, StoryObj } from '@storybook/react-vite';
import componentMarkdown from '../../docs/unordered-list-docs/docs/component.md?raw';
import '../../components-css/unordered-list-css/src/unordered-list.scss';
import packageJSON from '../../components-react/unordered-list-react/package.json';
import { UnorderedList } from '../../components-react/unordered-list-react/src/unordered-list';

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: UnorderedList,
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
      source: {
        type: 'dynamic',
      },
    },
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/unordered-list',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Unordered List',
} satisfies Meta<typeof UnorderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

// EXAMPLE CODE SNIPPET
export const STORY_CONST: Story = {
  name: `Fout: STORY_NAME`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Unordered List zonder `role="list"`
export const STORY_CONST: Story = {
  name: "Fout: Unordered List zonder `role="list"`",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Unordered List met `tabindex`
export const STORY_CONST: Story = {
  name: "Fout: Unordered List met `tabindex`",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Unordered List met custom marker (Unicode emoji) zonder toegankelijk alternatief
export const STORY_CONST: Story = {
  name: "Fout: Unordered List met custom marker (Unicode emoji) zonder toegankelijk alternatief",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Unordered List met custom marker (Unicode emoji) via CSS `content`
export const STORY_CONST: Story = {
  name: "Fout: Unordered List met custom marker (Unicode emoji) via CSS `content`",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Unordered List met custom marker via `list-style-image` gecombineerd met `::marker`
export const STORY_CONST: Story = {
  name: "Fout: Unordered List met custom marker via `list-style-image` gecombineerd met `::marker`",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Unordered List met custom markers via `counter-reset` / `counter-increment` in CSS `content`
export const STORY_CONST: Story = {
  name: "Fout: Unordered List met custom markers via `counter-reset` / `counter-increment` in CSS `content`",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Unordered List met custom markers via `counter-reset` / `counter-increment` in een `span`
export const STORY_CONST: Story = {
  name: "Fout: Unordered List met custom markers via `counter-reset` / `counter-increment` in een `span`",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Unordered List met SVG's als bullets zonder toegankelijke implementatie
export const STORY_CONST: Story = {
  name: "Fout: Unordered List met SVG's als bullets zonder toegankelijke implementatie",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

