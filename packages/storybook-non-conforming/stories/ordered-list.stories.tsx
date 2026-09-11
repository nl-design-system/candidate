import type { Meta } from '@storybook/react-vite';
import componentMarkdown from '../../docs/ordered-list-docs/docs/component.md?raw';
import '../../components-css/ordered-list-css/src/ordered-list.scss';
import packageJSON from '../../components-react/ordered-list-react/package.json';
import { OrderedList } from '../../components-react/ordered-list-react/src/ordered-list';

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: OrderedList,
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
        url: 'https://nldesignsystem.nl/ordered-list',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Ordered List',
} satisfies Meta<typeof OrderedList>;

export default meta;

// EXAMPLE CODE SNIPPET
// Original: Ordered List zonder `role="list"`
export const STORY_CONST: Story = {
  name: `Fout: Ordered List zonder \`role="list"\``,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `STORY_DESCRIPTION`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met inline marker zonder `role="list"`
export const STORY_CONST: Story = {
  name: `Fout: Ordered List met inline marker zonder \`role="list"\``,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `STORY_DESCRIPTION`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met `tabindex`
export const STORY_CONST: Story = {
  name: 'Fout: Ordered List met `tabindex`',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `STORY_DESCRIPTION`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List zonder lijststyling (`list-style: none`) waardoor de ordening verloren gaat
export const STORY_CONST: Story = {
  name: 'Fout: Ordered List zonder lijststyling (`list-style: none`) waardoor de ordening verloren gaat',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `STORY_DESCRIPTION`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List zonder lijststyling met alleen `role="list"` (lijstsemantiek terug, maar ordening ontbreekt)
export const STORY_CONST: Story = {
  name: `Fout: Ordered List zonder lijststyling met alleen \`role="list"\` (lijstsemantiek terug, maar ordening ontbreekt)`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `STORY_DESCRIPTION`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met `aria-posinset` en `aria-setsize`
export const STORY_CONST: Story = {
  name: 'Fout: Ordered List met `aria-posinset` en `aria-setsize`',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `STORY_DESCRIPTION`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met custom marker (Unicode emoji) zonder toegankelijk alternatief
export const STORY_CONST: Story = {
  name: 'Fout: Ordered List met custom marker (Unicode emoji) zonder toegankelijk alternatief',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `STORY_DESCRIPTION`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met custom marker (Unicode emoji) via CSS `content`
export const STORY_CONST: Story = {
  name: 'Fout: Ordered List met custom marker (Unicode emoji) via CSS `content`',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `STORY_DESCRIPTION`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met custom marker via `list-style-image` gecombineerd met `::marker`
export const STORY_CONST: Story = {
  name: 'Fout: Ordered List met custom marker via `list-style-image` gecombineerd met `::marker`',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `STORY_DESCRIPTION`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met custom markers via `counter-reset` / `counter-increment` in CSS `content`
export const STORY_CONST: Story = {
  name: 'Fout: Ordered List met custom markers via `counter-reset` / `counter-increment` in CSS `content`',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `STORY_DESCRIPTION`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met custom markers via `counter-reset` / `counter-increment` in een `span`
export const STORY_CONST: Story = {
  name: 'Fout: Ordered List met custom markers via `counter-reset` / `counter-increment` in een `span`',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `STORY_DESCRIPTION`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met SVG's als bullets zonder toegankelijke implementatie
export const STORY_CONST: Story = {
  name: "Fout: Ordered List met SVG's als bullets zonder toegankelijke implementatie",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `STORY_DESCRIPTION`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met Inline Marker met Decoratieve Icon. Voorbeeldcode: <OrderedListItem inlineMarker={<Icon />} /> waar de Icon bijvoorbeeld een bullet is (wat betekent dat je eigenlijk UnorderedList moet gebruiken).
export const STORY_CONST: Story = {
  name: 'Fout: Ordered List met Inline Marker met Decoratieve Icon. Voorbeeldcode: <OrderedListItem inlineMarker={<Icon />} /> waar de Icon bijvoorbeeld een bullet is (wat betekent dat je eigenlijk UnorderedList moet gebruiken).',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `STORY_DESCRIPTION`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met Inline Marker met Informatieve Icon met foutieve alternatieve tekst. Voorbeeldcode: <OrderedListItem inlineMarker={<svg><title>Number One Icon</title>...</svg>} />
export const STORY_CONST: Story = {
  name: 'Fout: Ordered List met Inline Marker met Informatieve Icon met foutieve alternatieve tekst. Voorbeeldcode: <OrderedListItem inlineMarker={<svg><title>Number One Icon</title>...</svg>} />',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `STORY_DESCRIPTION`,
      },
    },
  },
};
