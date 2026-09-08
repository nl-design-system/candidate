import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/unordered-list-css/src/unordered-list.scss';
import packageJSON from '../../components-react/unordered-list-react/package.json';
import { UnorderedList } from '../../components-react/unordered-list-react/src/unordered-list';
import componentMarkdown from '../../docs/unordered-list-docs/docs/component.md?raw';
import tokens from '../../tokens/unordered-list-tokens/tokens.json';
// import { } from '../src/WcagTests'; // Vul aan door toegankelijkheidsexpert

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: UnorderedList,
  decorators: ExampleBodyTextDecorator,
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
    testResult: {
      notApplicable: [
        // Vul aan door toegankelijkheidsexpert
      ],
      notTested: [
        // Vul aan door toegankelijkheidsexpert
      ],
      pass: [],
    },
    tokens,
  },
  title: 'Componenten/Unordered List',
} satisfies Meta<typeof UnorderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

// EXAMPLE CODE SNIPPET
// Original: Unordered List
export const STORY_CONST: Story = {
  name: 'Unordered List',
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
// Original: Unordered List met geneste Unordered List
export const STORY_CONST: Story = {
  name: 'Unordered List met geneste Unordered List',
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
// Original: Unordered List met geneste Ordered List
export const STORY_CONST: Story = {
  name: 'Unordered List met geneste Ordered List',
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
// Original: Unordered List met minimaal drie niveaus nesting, met documentatie over hoe en wat
export const STORY_CONST: Story = {
  name: 'Unordered List met minimaal drie niveaus nesting, met documentatie over hoe en wat',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// <ul class="nl-unordered-list">
//   <li class="nl-unordered-list--item">
//     <span class="nl-unordered-list--inline-marker">
//       <span aria-hidden="true">
//         <Icon />
//       </span>
//     </span>
//     Foo Bar
//   </li>
// </ul>
// Original: Unordered List met decoratieve inline marker zonder inlineMarkerLabel en `aria-hidden="true"` op inline marker
export const STORY_CONST: Story = {
  name: 'Unordered List met decoratieve inline marker zonder inlineMarkerLabel en `aria-hidden="true"` op inline marker',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// <ul class="nl-unordered-list">
//   <li class="nl-unordered-list--item">
//     <span class="nl-unordered-list--inline-marker">
//      <span aria-hidden="true">
//        <Icon />
//      </span>
//      <span class="sr-only">Informatieve label{" "}</span>
//     </span>
//     Foo Bar
//   </li>
// </ul>
// Original: Unordered List met inline marker en toegankelijke naam via inlineMarkerLabel (sr-only), met `aria-hidden="true"` op inline marker
export const STORY_CONST: Story = {
  name: 'Unordered List met inline marker en toegankelijke naam via inlineMarkerLabel (sr-only), met `aria-hidden="true"` op inline marker',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// <ul>
//   <li>
//     <span>
//      <span aria-hidden="true">
//        <Icon />
//      </span>
//      <span class="sr-only">Informatieve label{" "}</span>
//     </span>
//     Foo Bar
//   </li>
// </ul>
// Original: Unordered List met een toegankelijke custom marker met toegankelijk label (niet perfecte maar toegankelijke oplossing)
export const STORY_CONST: Story = {
  name: 'Unordered List met een toegankelijke custom marker met toegankelijk label (niet perfecte maar toegankelijke oplossing)',
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
// Original: Unordered List met HTML `hidden` attribuut
export const STORY_CONST: Story = {
  name: 'Unordered List met HTML `hidden` attribuut',
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
// Original: Unordered List met HTML `lang` attribuut (right-to-left tekst)
export const STORY_CONST: Story = {
  name: 'Unordered List met HTML `lang` attribuut (right-to-left tekst)',
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
// Original: Unordered List met HTML `lang` attribuut met `ar` waarde - met omschrijving van hoe je dat kan uitbreiden met andere talen - en waarom we arabic supporten
export const STORY_CONST: Story = {
  name: 'Unordered List met HTML `lang` attribuut met `ar` waarde - met omschrijving van hoe je dat kan uitbreiden met andere talen - en waarom we arabic supporten',
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
// Original: Unordered List met HTML `dir` attribuut
export const STORY_CONST: Story = {
  name: 'Unordered List met HTML `dir` attribuut',
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
// Original: Unordered List met Arabische tekst waarbij `dir` alleen op de `ul` staat
export const STORY_CONST: Story = {
  name: 'Unordered List met Arabische tekst waarbij `dir` alleen op de `ul` staat',
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
// Let op: role="list" en role="listitem" is nodig!
// Original: Unordered List binnen `nl-html--all`
export const STORY_CONST: Story = {
  name: 'Unordered List binnen `nl-html--all`',
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
// Let op: role="list" en role="listitem" is nodig!
// Original: Unordered List binnen `nl-html--unordered-list`
export const STORY_CONST: Story = {
  name: 'Unordered List binnen `nl-html--unordered-list`',
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
// Let op: role="list" en role="listitem" is nodig!
// Original: Unordered List opgebouwd met `div` elementen
export const STORY_CONST: Story = {
  name: 'Unordered List opgebouwd met `div` elementen',
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
// Let op: role="list" en role="listitem" is nodig!
// Original: Unordered List opgebouwd met `span` elementen
export const STORY_CONST: Story = {
  name: 'Unordered List opgebouwd met `span` elementen',
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
// Original: Unordered List met paragraphs in list items
export const STORY_CONST: Story = {
  name: 'Unordered List met paragraphs in list items',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
- Unordered List met paragraphs in list items
  - bevat een korte paragraph
  - bevat een lange paragraph die wrapped
  - bevat twee paragraphs waarbij de spacing correct blijft
        `,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Unordered List met NL Paragraph in list item
export const STORY_CONST: Story = {
  name: 'Unordered List met NL Paragraph in list item',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
- Unordered List met NL Paragraph in list item
  - bevat een korte NL Paragraph
  - bevat een lange NL Paragraph die wrapped
  - bevat twee NL Paragraphs waarbij de spacing correct blijft
        `,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Unordered List in een column layout
export const STORY_CONST: Story = {
  name: 'Unordered List in een column layout',
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
// Original: Unordered List met een lang list item dat doorloopt naar een volgende kolom
export const STORY_CONST: Story = {
  name: 'Unordered List met een lang list item dat doorloopt naar een volgende kolom',
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
// Original: Unordered List met horizontaal scrollen op een klein scherm (mock mobiel)
export const STORY_CONST: Story = {
  name: 'Unordered List met horizontaal scrollen op een klein scherm (mock mobiel)',
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
// Original: Story voor Rich Text Editors: Multiline vanuit Rich Text Editor
export const STORY_CONST: Story = {
  name: 'Story voor Rich Text Editors: Multiline vanuit Rich Text Editor',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
- Story voor Rich Text Editors:
    - Story naam: Multiline vanuit Rich Text Editor
    - Code Snippet voorbeeld:
                <li>
                foo
                <p>bar</p>
                </li>
     - Code snippet verduidelijking: Rich Text Editors voegen meestal pas een paragraph toe zodra je enter hebt gedaan. Dit betekent dat je eerst een textnode hebt, en dan een paragraph element. Deze story laat zien dat de spacing dan nog steeds goed gaat.
        `,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Story voor Rich Text Editors met NL Paragraph - zelfde als bovenstaande maar dan met NL Paragraph component
export const STORY_CONST: Story = {
  name: 'Story voor Rich Text Editors met NL Paragraph - zelfde als bovenstaande maar dan met NL Paragraph component',
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
// Original: Stories voor Rich Text Editors: textnode met nested lijst, textnode met link, etc (voorafgaand aan stories schrijven even bepalen welke combinaties we hierin willen meenemen)
export const STORY_CONST: Story = {
  name: 'Stories voor Rich Text Editors: textnode met nested lijst, textnode met link, etc (voorafgaand aan stories schrijven even bepalen welke combinaties we hierin willen meenemen)',
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
// Original: Story voor het centreren van de Unordered List.
export const STORY_CONST: Story = {
  name: 'Story voor het centreren van de Unordered List.',
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
// Original: Unordered List met vergrote tekstafstand
export const STORY_CONST: Story = {
  name: 'Unordered List met vergrote tekstafstand',
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
// Original: Unordered List met tekst vergroot naar 200%
export const STORY_CONST: Story = {
  name: 'Unordered List met tekst vergroot naar 200%',
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
// Original: Unordered List in Forced Colors modus
export const STORY_CONST: Story = {
  name: 'Unordered List in Forced Colors modus',
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
// Original: Unordered List zonder markers, zoals de community dit kan implementeren
export const STORY_CONST: Story = {
  name: 'Unordered List zonder markers, zoals de community dit kan implementeren',
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
// Original: Unordered List met 1 list item
export const STORY_CONST: Story = {
  name: 'Unordered List met 1 list item',
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
// Original: Unordered List met zeer veel list items (meer dan geadviseerde 3)
export const STORY_CONST: Story = {
  name: 'Unordered List met zeer veel list items (meer dan geadviseerde 3)',
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
// Original: Unordered List op een breed scherm (in tegenstelling tot de mobiele test)
export const STORY_CONST: Story = {
  name: 'Unordered List op een breed scherm (in tegenstelling tot de mobiele test)',
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
// Original: Unordered List met Link in list items (ie een soort Link List? is dat een goed idee? nav component icm andere componenten)
export const STORY_CONST: Story = {
  name: 'Unordered List met Link in list items (ie een soort Link List? is dat een goed idee? nav component icm andere componenten)',
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
// Original: Unordered List met tabel in een list item (is dat een goed idee? nav component icm andere componenten / uitgebreide use cases)
export const STORY_CONST: Story = {
  name: 'Unordered List met tabel in een list item (is dat een goed idee? nav component icm andere componenten / uitgebreide use cases)',
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
// Original: Eentje met CSS reset voor de Component
export const STORY_CONST: Story = {
  name: 'Eentje met CSS reset voor de Component',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
Ziet disabled er nog uit als disabled
Gaat spacing nog goed
Blijft minimum target size goed
`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Wel de component CSS maar niet de thema CSS.
export const STORY_CONST: Story = {
  name: 'Wel de component CSS maar niet de thema CSS.',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
Ziet disabled er nog uit als disabled
Gaat spacing nog goed
Blijft minimum target size goed
`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Eentje waar alle CSS naar een invalid value word gezet, wat betekent dat user-agent dan ook niet meer lekker gaat.
export const STORY_CONST: Story = {
  name: 'Eentje waar alle CSS naar een invalid value word gezet, wat betekent dat user-agent dan ook niet meer lekker gaat.',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};
