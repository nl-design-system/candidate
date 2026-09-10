import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/ordered-list-css/src/ordered-list.scss';
import packageJSON from '../../components-react/ordered-list-react/package.json';
import { OrderedList } from '../../components-react/ordered-list-react/src/ordered-list';
import componentMarkdown from '../../docs/ordered-list-docs/docs/component.md?raw';
import tokens from '../../tokens/ordered-list-tokens/tokens.json';
// import { } from '../src/WcagTests'; // Vul aan door toegankelijkheidsexpert

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: OrderedList,
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
        url: 'https://nldesignsystem.nl/ordered-list',
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
  title: 'Componenten/Ordered List',
} satisfies Meta<typeof OrderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

// EXAMPLE CODE SNIPPET
// Original: Ordered List
export const STORY_CONST: Story = {
  name: 'Ordered List',
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
// Original: Ordered List met geneste Ordered List
export const STORY_CONST: Story = {
  name: 'Ordered List met geneste Ordered List',
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
// Original: Ordered List met geneste Unordered List
export const STORY_CONST: Story = {
  name: 'Ordered List met geneste Unordered List',
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
// Original: Ordered List met minimaal drie niveaus nesting, met documentatie over hoe en wat
export const STORY_CONST: Story = {
  name: 'Ordered List met minimaal drie niveaus nesting, met documentatie over hoe en wat',
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
// Original: Ordered List met startnummer anders dan 1
export const STORY_CONST: Story = {
  name: 'Ordered List met startnummer anders dan 1',
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
// Original: Ordered List met omgekeerde nummering (`reversed`)
export const STORY_CONST: Story = {
  name: 'Ordered List met omgekeerde nummering (`reversed`)',
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
// Original: Ordered List met kleine letters (`type="a"`)
export const STORY_CONST: Story = {
  name: `Ordered List met kleine letters (\`type="a"\`)`,
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
// Original: Ordered List met hoofdletters (`type="A"`)
export const STORY_CONST: Story = {
  name: `Ordered List met hoofdletters (\`type="A"\`)`,
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
// Original: Ordered List met kleine Romeinse cijfers (`type="i"`)
export const STORY_CONST: Story = {
  name: `Ordered List met kleine Romeinse cijfers (\`type="i"\`)`,
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
// Original: Ordered List met hoofdletters Romeinse cijfers (`type="I"`)
export const STORY_CONST: Story = {
  name: `Ordered List met hoofdletters Romeinse cijfers (\`type="I"\`)`,
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
// Original: Ordered List met Arabische nummering (`lang="ar"`)
export const STORY_CONST: Story = {
  name: `Ordered List met Arabische nummering (\`lang="ar"\`)`,
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
// Original: Type overschrijft Language (bouwnotitie: dit kan mogelijk met een not has type selector)
export const STORY_CONST: Story = {
  name: 'Type overschrijft Language (bouwnotitie: dit kan mogelijk met een not has type selector)',
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
// <ol class="nl-ordered-list">
//   <li class="nl-ordered-list--item">
//     <span class="nl-ordered-list--inline-marker">
//       <span aria-hidden="true">
//         <Icon />
//       </span>
//     </span>
//     Foo Bar
//   </li>
// </ol>
// Original: Ordered List met decoratieve inline marker zonder inlineMarkerLabel en `aria-hidden="true"` op inline marker
export const STORY_CONST: Story = {
  name: `Ordered List met decoratieve inline marker zonder inlineMarkerLabel en \`aria-hidden="true"\` op inline marker`,
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
// <ol class="nl-ordered-list">
//   <li class="nl-ordered-list--item">
//     <span class="nl-ordered-list--inline-marker">
//       <span aria-hidden="true">
//         <Icon />
//       </span>
//      <span class="sr-only">Informatieve label{" "}</span>
//    </span>
//    Foo Bar
//  </li>
// </ol>
// Original: Ordered List met inline marker en toegankelijke naam via inlineMarkerLabel (sr-only), met `aria-hidden="true"` op inline marker
export const STORY_CONST: Story = {
  name: `Ordered List met inline marker en toegankelijke naam via inlineMarkerLabel (sr-only), met \`aria-hidden="true"\` op inline marker`,
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
// <ol class="nl-ordered-list">
//   <li class="nl-ordered-list--item">
//     <span class="nl-ordered-list--inline-marker">
//       <span aria-labelledby="label-id">
//         <Icon />
//       </span>
//      <span aria-hidden="true" id="label-id">Informatieve label</span>
//    </span>
//    Foo Bar
//  </li>
// </ol>
// Original: Ordered List met een toegankelijke custom marker met toegankelijk label (niet perfecte maar toegankelijke oplossing)
export const STORY_CONST: Story = {
  name: 'Ordered List met een toegankelijke custom marker met toegankelijk label (niet perfecte maar toegankelijke oplossing)',
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
// Original: Ordered List met HTML `hidden` attribuut
export const STORY_CONST: Story = {
  name: 'Ordered List met HTML `hidden` attribuut',
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
// Original: Ordered List met HTML `lang` attribuut (right-to-left tekst)
export const STORY_CONST: Story = {
  name: 'Ordered List met HTML `lang` attribuut (right-to-left tekst)',
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
// Original: Ordered List met HTML `lang` attribuut met `ar` waarde - met omschrijving van hoe je dat kan uitbreiden met andere talen - en waarom we arabic supporten
export const STORY_CONST: Story = {
  name: 'Ordered List met HTML `lang` attribuut met `ar` waarde - met omschrijving van hoe je dat kan uitbreiden met andere talen - en waarom we arabic supporten',
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
// Original: Ordered List met HTML `dir` attribuut
export const STORY_CONST: Story = {
  name: 'Ordered List met HTML `dir` attribuut',
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
// Original: Ordered List met Arabische tekst waarbij `dir` alleen op de `ol` staat
export const STORY_CONST: Story = {
  name: 'Ordered List met Arabische tekst waarbij `dir` alleen op de `ol` staat',
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
// Original: Ordered List binnen `nl-html--all`
// Let op: role="list" en role="listitem" is nodig!
export const STORY_CONST: Story = {
  name: 'Ordered List binnen `nl-html--all`',
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
// Original: Ordered List binnen `nl-html--ordered-list`
// Let op: role="list" en role="listitem" is nodig!
export const STORY_CONST: Story = {
  name: 'Ordered List binnen `nl-html--ordered-list`',
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
// Original: Ordered List opgebouwd met `div` elementen
// Let op: role="list" en role="listitem" is nodig!
export const STORY_CONST: Story = {
  name: 'Ordered List opgebouwd met `div` elementen',
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
// Original: Ordered List opgebouwd met `span` elementen
// Let op: role="list" en role="listitem" is nodig!
export const STORY_CONST: Story = {
  name: 'Ordered List opgebouwd met `span` elementen',
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
// Original: Ordered List met paragraphs (`p`) in list items
export const STORY_CONST: Story = {
  name: 'Ordered List met paragraphs (`p`) in list items',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
  - bevat een korte paragraph
  - bevat een lange paragraph die wrapped
  - bevat twee paragraphs waarbij de spacing correct blijft
          `,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met NL Paragraph in list item
export const STORY_CONST: Story = {
  name: 'Ordered List met NL Paragraph in list item',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
  - bevat een korte NL Paragraph
  - bevat een lange NL Paragraph die wrapped
  - bevat twee NL Paragraphs waarbij de spacing correct blijft
          `,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List in een column layout
export const STORY_CONST: Story = {
  name: 'Ordered List in een column layout',
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
// Original: Ordered List met een lang list item dat doorloopt naar een volgende kolom
export const STORY_CONST: Story = {
  name: 'Ordered List met een lang list item dat doorloopt naar een volgende kolom',
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
// Original: Ordered List met horizontaal scrollen op een klein scherm (mock mobiel) - hier zijn meerdere geneste niveaus nodig om te laten zien dat scrollen dan beter is dan wrappen omdat er anders maar een paar letters per regel blijven staan
export const STORY_CONST: Story = {
  name: 'Ordered List met horizontaal scrollen op een klein scherm (mock mobiel) - hier zijn meerdere geneste niveaus nodig om te laten zien dat scrollen dan beter is dan wrappen omdat er anders maar een paar letters per regel blijven staan',
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
// Original: Story voor Rich Text Editors met `p`: Multiline vanuit Rich Text Editor
export const STORY_CONST: Story = {
  name: 'Story voor Rich Text Editors met `p`: Multiline vanuit Rich Text Editor',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
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
        story: `STORY_DESCRIPTION`,
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
        story: `STORY_DESCRIPTION`,
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Story voor het centreren van de Ordered List. Dit omdat dit beschikbaar is in community en we daar een oplossing voor moeten laten zien.
export const STORY_CONST: Story = {
  name: 'Story voor het centreren van de Ordered List. Dit omdat dit beschikbaar is in community en we daar een oplossing voor moeten laten zien.',
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
// Original: Ordered List met vergrote tekstafstand
export const STORY_CONST: Story = {
  name: 'Ordered List met vergrote tekstafstand',
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
// Original: Ordered List met tekst vergroot naar 200%
export const STORY_CONST: Story = {
  name: 'Ordered List met tekst vergroot naar 200%',
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
// Original: Ordered List in Forced Colors modus
export const STORY_CONST: Story = {
  name: 'Ordered List in Forced Colors modus',
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
// Original: Ordered List die met een ander startnummer begint dan 1 wordt goed voorgelezen
export const STORY_CONST: Story = {
  name: 'Ordered List die met een ander startnummer begint dan 1 wordt goed voorgelezen',
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
// Original: Ordered List met alfabetische nummering wordt goed voorgelezen
export const STORY_CONST: Story = {
  name: 'Ordered List met alfabetische nummering wordt goed voorgelezen',
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
// Original: Ordered List met Romeinse nummering wordt goed voorgelezen
export const STORY_CONST: Story = {
  name: 'Ordered List met Romeinse nummering wordt goed voorgelezen',
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
// Original: Ordered List met 1 list item
export const STORY_CONST: Story = {
  name: 'Ordered List met 1 list item',
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
// Original: Ordered List met zeer veel list items (meer dan geadviseerde 3)
export const STORY_CONST: Story = {
  name: 'Ordered List met zeer veel list items (meer dan geadviseerde 3)',
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
// Original: Ordered List op een breed scherm (in tegenstelling tot de mobiele test)
export const STORY_CONST: Story = {
  name: 'Ordered List op een breed scherm (in tegenstelling tot de mobiele test)',
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
// Original: Ordered List met Link in list items (ie een soort Link List? is dat een goed idee? nav component icm andere componenten)
export const STORY_CONST: Story = {
  name: 'Ordered List met Link in list items (ie een soort Link List? is dat een goed idee? nav component icm andere componenten)',
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
// Original: Ordered List met tabel in een list item (is dat een goed idee? nav component icm andere componenten / uitgebreide use cases)
export const STORY_CONST: Story = {
  name: 'Ordered List met tabel in een list item (is dat een goed idee? nav component icm andere componenten / uitgebreide use cases)',
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
// Original: Ordered List met reversed en start
export const STORY_CONST: Story = {
  name: 'Ordered List met reversed en start',
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
// Original: Ordered List met type="A" en start
export const STORY_CONST: Story = {
  name: `Ordered List met type="A" en start`,
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
// Original: Ordered List met lang="ar" en reversed
export const STORY_CONST: Story = {
  name: `Ordered List met lang="ar" en reversed`,
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
// Original: Ordered List met Inline Marker met Informatieve Icon met alternatieve tekst. Voorbeeldcode: <OrderedListItem inlineMarker={<Icon label="1." />} />
export const STORY_CONST: Story = {
  name: `Ordered List met Inline Marker met Informatieve Icon met alternatieve tekst. Voorbeeldcode: <OrderedListItem inlineMarker={<Icon label="1." />} />`,
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
// Original: Ordered List met Inline Marker met Informatieve Icon zonder alternatieve tekst en met Inline Marker Label. Voorbeeldcode: <OrderedListItem inlineMarker={<Icon />} inlineMarkerLabel="1." />
export const STORY_CONST: Story = {
  name: `Ordered List met Inline Marker met Informatieve Icon zonder alternatieve tekst en met Inline Marker Label. Voorbeeldcode: <OrderedListItem inlineMarker={<Icon />} inlineMarkerLabel="1." />`,
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
// Original: Ordered List met Inline Marker met Informatieve Icon met foutieve alternatieve tekst maar overschreven door Inline Marker Label. Voorbeeldcode: <OrderedListItem inlineMarker={<svg><title>Number One Icon</title>...</svg>} inlineMarkerLabel="1." />
export const STORY_CONST: Story = {
  name: `Ordered List met Inline Marker met Informatieve Icon met foutieve alternatieve tekst maar overschreven door Inline Marker Label. Voorbeeldcode: <OrderedListItem inlineMarker={<svg><title>Number One Icon</title>...</svg>} inlineMarkerLabel="1." />`,
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
