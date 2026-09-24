import type { Meta, StoryObj } from '@storybook/react-vite';
import componentMarkdown from '../../docs/ordered-list-docs/docs/component.md?raw';
import '../../components-css/ordered-list-css/src/ordered-list.scss';
import packageJSON from '../../components-react/ordered-list-react/package.json';
import { OrderedList, type OrderedListProps } from '../../components-react/ordered-list-react/src/ordered-list';

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

type Story = StoryObj<OrderedListProps>;

// <ol class="nl-ordered-list">
//   <li class="nl-ordered-list__item">Paspoortfoto, niet ouder dan 6 maanden</li>
//   <li class="nl-ordered-list__item">Je oude paspoort</li>
//   <li class="nl-ordered-list__item">Je afspraakbevestiging</li>
// </ol>
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

// <ol class="nl-ordered-list">
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconOne />
//       </span>
//      <span class="sr-only">Stap 1.{" "}</span>
//     </span>
//     Verzamel documenten
//   </li>
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconTwo />
//       </span>
//      <span class="sr-only">Stap 2.{" "}</span>
//     </span>
//     Maak een afspraak.
//    </li>
// </ol>
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

// Original: Ordered List zonder lijststyling (`list-style: none`) waardoor de ordening verloren gaat
export const OrderedListListStyleNoneNoRole: Story = {
  name: 'Fout: Ordered List zonder lijststyling (`list-style: none`) zonder role="list" waardoor de lijstsemantiek en ordening verloren gaat',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

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

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         1️⃣
//       </span>
//     </span>
//     Verzamel documenten
//   </li>
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         2️⃣
//       </span>
//     </span>
//     Plan een afspraak
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

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconOne />
//       </span>
//     </span>
//     Verzamel documenten
//   </li>
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconTwo />
//       </span>
//     </span>
//     Maak een afspraak.
//    </li>
// </ol>
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

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconBullet />
//       </span>
//     </span>
//     Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
//   </li>
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconBullet />
//       </span>
//     </span>
//     Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
//    </li>
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconBullet />
//       </span>
//     </span>
//     Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.
//    </li>
// </ol>
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

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span>
//         <svg><title>Number One Icon</title>...</svg>
//       </span>
//     </span>
//     Verzamel documenten
//   </li>
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconTwo title="Number Two Icon" />
//       </span>
//     </span>
//     Maak een afspraak.
//    </li>
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconTwo />
//       </span>
//      <span class="sr-only">Number Three Icon.{" "}</span>
//     </span>
//     Haal uw nieuwe paspoort op.
//    </li>
// </ol>
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
