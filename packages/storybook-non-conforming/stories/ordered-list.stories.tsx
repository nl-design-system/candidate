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
export const OrderedListNoRole: Story = {
  name: 'Fout: Ordered List zonder HTML-attribuut role="list"',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met custom marker zonder `role="list"`
export const OrderedListCustomMarkerNoRole: Story = {
  name: 'Fout: Ordered List met Custom Marker zonder HTML-attribuut role="list"',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met `tabindex`
export const OrderedListTabIndex: Story = {
  name: 'Fout: Ordered List met HTML-attribuut tabindex',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List zonder lijststyling (`list-style: none`) waardoor de ordening verloren gaat
export const OrderedListListStyleNoneNoRole: Story = {
  name: 'Fout: Ordered List zonder lijststyling (`list-style: none`) waardoor de ordening verloren gaat',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List zonder lijststyling met alleen `role="list"` (lijstsemantiek terug, maar ordening ontbreekt)
export const OrderedListListStyleNoneWithRole: Story = {
  name: 'Fout: Ordered List zonder lijststyling met alleen HTML-attribuut role="list" (lijstsemantiek terug, maar ordening ontbreekt)',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met `aria-posinset` en `aria-setsize`
export const OrderedListAriaPosSetSize: Story = {
  name: 'Fout: Ordered List met HTML-attributen aria-posinset en aria-setsize',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// <ol class="nl-ordered-list">
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         ❤
//       </span>
//     </span>
//     Foo Bar
//   </li>
// </ol>
// Original: Ordered List met custom marker (Unicode emoji) zonder toegankelijk alternatief
export const OrderedListEmojiNoAlt: Story = {
  name: 'Fout: Ordered List met custom marker (Unicode emoji) zonder toegankelijk alternatief',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met custom marker (Unicode emoji) via CSS `content`
export const OrderedListEmojiAltInCssContent: Story = {
  name: 'Fout: Ordered List met custom marker (Unicode emoji) via CSS-eigenschap content',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
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
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met custom markers via `counter-reset` / `counter-increment` in CSS `content`
export const STORY_CONST: Story = {
  name: 'Fout: Ordered List met custom markers via CSS-eigenschappen counter-reset / counter-increment in CSS0-eigenschap content',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met custom markers via `counter-reset` / `counter-increment` in een `span`
export const STORY_CONST: Story = {
  name: 'Fout: Ordered List met custom markers via CSS-eigenschappen counter-reset / counter-increment in een HTML-element span',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
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
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met Custom Marker met Decoratieve Icon. Voorbeeldcode: <OrderedListItem marker={<Icon />} /> waar de Icon bijvoorbeeld een bullet is (wat betekent dat je eigenlijk UnorderedList moet gebruiken).
export const STORY_CONST: Story = {
  name: 'Fout: Ordered List met Custom Marker met Decoratieve Icon. Voorbeeldcode: <OrderedListItem marker={<Icon />} /> waar de Icon bijvoorbeeld een bullet is (wat betekent dat je eigenlijk UnorderedList moet gebruiken).',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met Custom Marker met Informatieve Icon met foutieve alternatieve tekst. Voorbeeldcode: <OrderedListItem marker={<svg><title>Number One Icon</title>...</svg>} />
export const STORY_CONST: Story = {
  name: 'Fout: Ordered List met Custom Marker met Informatieve Icon met foutieve alternatieve tekst. Voorbeeldcode: <OrderedListItem marker={<svg><title>Number One Icon</title>...</svg>} />',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};
