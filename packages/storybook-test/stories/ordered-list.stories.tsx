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

// <ol role="list">
//   <li>Paspoortfoto, niet ouder dan 6 maanden</li>
//   <li>Je oude paspoort</li>
//   <li>Je afspraakbevestiging</li>
// </ol>
// Original: Ordered List
export const OrderedListDefault: Story = {
  name: 'Ordered List',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Een standaard genummerde lijst. Elk item krijgt automatisch een oplopend nummer, beginnend bij 1.',
      },
    },
  },
};

// <ol role="list">
//   <li>
//     Verzamel de benodigde documenten
//     <ol role="list">
//       <li>Geldig identiteitsbewijs</li>
//       <li>Bewijs van inschrijving</li>
//     </ol>
//   </li>
//   <li>Dien de aanvraag in</li>
// </ol>

// Original: Ordered List met geneste Ordered List
export const OrderedListNestedOrderedList: Story = {
  name: 'Ordered List met geneste Ordered List',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met een geordende lijst in een van de items. De sublijst begint opnieuw bij 1, los van de nummering van de hoofdlijst. Visueel is de sublijst ingesprongen vergeleken met het item daarboven.',
      },
    },
  },
};

// <ol role="list">
//   <li>
//     Geef je keuze aan voor de afspraak. Je kunt kiezen uit:
//     <ul role="list">
//       <li>Online</li>
//       <li>Bij de balie</li>
//     </ul>
//   </li>
//   <li>Kies een datum en tijd</li>
// </ol>
// Original: Ordered List met geneste Unordered List
export const OrderedListNestedUnorderedList: Story = {
  name: 'Ordered List met geneste Unordered List',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met een ongeordende lijst in een van de items. De sublijst krijgt bolletjes in plaats van cijfers en is visueel ingesprongen vergeleken met het item daarboven.',
      },
    },
  },
};

// <ol role="list">
//   <li>
//     Fase 1: Voorbereiding
//     <ol role="list">
//       <li>
//         Verzamel documenten
//         <ol role="list">
//           <li>Identiteitsbewijs</li>
//           <li>Bewijs van inschrijving</li>
//         </ol>
//       </li>
//       <li>Plan een afspraak</li>
//     </ol>
//   </li>
//   <li>Fase 2: Uitvoering</li>
// </ol>
// Original: Ordered List met minimaal drie niveaus nesting, met documentatie over hoe en wat
export const OrderedListThreeLevelsNesting: Story = {
  name: 'Ordered List met minimaal drie niveaus nesting, met documentatie over hoe en wat',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// <p>Rotondekunstprijs eervolle vermeldingen:</p>
// <ol role="list" start="4">
//   <li>Vangrails Looping</li>
//   <li>Many sites</li>
//   <li>De Aardbeien van Jan en Brigitte</li>
// </ol>
// Original: Ordered List met startnummer anders dan 1
export const STORY_CONST: Story = {
  name: 'Ordered List met startnummer anders dan 1',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Deze lijst is wel geordend, maar de content zorgt ervoor dat het niet logisch is om bij 1 te starten. De nummering loopt vanaf het startnummer door zoals normaal.',
      },
    },
  },
};

// <p>Rotondekunstprijs prijswinnaars:</p>
// <ol role="list" reversed>
//   <li>Vis op wielen</li>
//   <li>Licht Piramide</li>
//   <li>Berm</li>
// </ol>
// Original: Ordered List met omgekeerde nummering (`reversed`)
export const OrderedListReversed: Story = {
  name: 'Ordered List met omgekeerde nummering (`reversed`)',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Deze lijst is wel geordend, maar de content zorgt ervoor dat het niet logisch is om oplopend te nummeren. Daarom is de nummering omgedraaid.',
      },
    },
  },
};

// <ol role="list" type="a">
//   <li>Amsterdam</li>
//   <li>Rotterdam</li>
//   <li>Den Haag</li>
// </ol>
// Original: Ordered List met kleine letters (`type="a"`)
export const OrderedListLowercaseLetters: Story = {
  name: 'Ordered List met kleine letters (type="a")',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// <ol  role="list" type="A">
//   <li>Aanvraag indienen</li>
//   <li>Documenten uploaden</li>
//   <li>Bevestiging afwachten</li>
// </ol>
// Original: Ordered List met hoofdletters (`type="A"`)
export const OrderedListUppercaseLetters: Story = {
  name: 'Ordered List met hoofdletters (\`type="A"\`)',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// <ol role="list" type="i">
//   <li>Algemene bepalingen</li>
//   <li>Duur van de overeenkomst</li>
//   <li>Beëindiging</li>
// </ol>
// Original: Ordered List met kleine Romeinse cijfers (`type="i"`)
export const STORY_CONST: Story = {
  name: 'Ordered List met kleine Romeinse cijfers (\`type="i"\`)',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// <ol role="list" type="I">
//   <li>Inleiding</li>
//   <li>Doelstellingen</li>
//   <li>Conclusie</li>
// </ol>
// Original: Ordered List met hoofdletters Romeinse cijfers (`type="I"`)
export const OrderedListUppercaseRomanNum: Story = {
  name: 'Ordered List met hoofdletters Romeinse cijfers (\`type="I"\`)',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// Let op: CSS moet nog toegepast worden voor juiste nummering
// <ol role="list" lang="ar">
//   <li>تحميل المستندات</li>
//   <li>تقديم الطلب</li>
//   <li>انتظار التأكيد</li>
// </ol>
// Original: Ordered List met Arabische nummering (`lang="ar"`)
export const OrderedListArabicNum: Story = {
  name: 'Ordered List met Arabische nummering (\`lang="ar"\`)',
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
// Original: Type overschrijft Language (bouwnotitie: dit kan mogelijk met een not has type selector)
export const OrderedListTypeOverridesLanguage: Story = {
  name: 'Type overschrijft Language (bouwnotitie: dit kan mogelijk met een not has type selector)',
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
export const OrderedListInlineMarkerDecorative: Story = {
  name: 'Ordered List met decoratieve inline marker zonder inlineMarkerLabel en HTML-attribuut aria-hidden="true" op inline marker',
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
  name: 'Ordered List met inline marker en toegankelijke naam via inlineMarkerLabel (sr-only), met HTML-attribuut aria-hidden="true" op inline marker',
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
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met HTML `hidden` attribuut
export const STORY_CONST: Story = {
  name: 'Ordered List met HTML-attribuut hidden',
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
// Original: Ordered List met HTML `lang` attribuut (right-to-left tekst)
export const OrderedListLangRTL: Story = {
  name: 'Ordered List met HTML-attribuut lang (right-to-left tekst)',
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
// Original: Ordered List met HTML `lang` attribuut met `ar` waarde - met omschrijving van hoe je dat kan uitbreiden met andere talen - en waarom we arabic supporten
export const OrderedListLangAr: Story = {
  name: 'Ordered List met HTML-attribuut lang="ar" - met omschrijving van hoe je dat kan uitbreiden met andere talen - en waarom we arabic supporten',
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
// Original: Ordered List met HTML `dir` attribuut
export const OrderedListDirRTL: Story = {
  name: 'Ordered List met HTML-attribuut dir',
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
// Original: Ordered List met Arabische tekst waarbij `dir` alleen op de `ol` staat
export const OrderedListDirParentOnly: Story = {
  name: 'Ordered List met Arabische tekst waarbij HTML-attribuut dir alleen op HTML-element ol staat',
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
// Original: Ordered List binnen `nl-html--all`
// Let op: role="list" en role="listitem" is nodig!
export const OrderedListNLHTMLAll: Story = {
  name: 'Ordered List binnen `nl-html--all`',
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
// Original: Ordered List binnen `nl-html--ordered-list`
// Let op: role="list" en role="listitem" is nodig!
export const OrderedListNLHTMLOrderedList: Story = {
  name: 'Ordered List binnen `nl-html--ordered-list`',
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
// Original: Ordered List opgebouwd met `div` elementen
// Let op: role="list" en role="listitem" is nodig!
export const OrderedListAlternativeHTMLDivs: Story = {
  name: 'Ordered List opgebouwd met HTML-elementen div',
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
// Original: Ordered List opgebouwd met `span` elementen
// Let op: role="list" en role="listitem" is nodig!
export const OrderedListAlternativeHTMLSpans: Story = {
  name: 'Ordered List opgebouwd met HTML-elementen span',
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
// Original: Ordered List met paragraphs (`p`) in list items
export const OrderedListHTMLParagraphsInListItem: Story = {
  name: 'Ordered List met paragraphs (`p`) in list items',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'In deze geordende lijst worden HTML paragrafen in een lijst-item gebruikt. De eerste alinea is erg kort, de tweede alinea is heel lang. De tekst blijft goed leesbaar en de opmaak blijft goed',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met NL Paragraph in list item
export const OrderedListNLParagraphsInListItem: Story = {
  name: 'Ordered List met NL Paragraph in list item',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'In deze geordende lijst worden NL Paragraph componenten in een lijst-item gebruikt. De eerste alinea is erg kort, de tweede alinea is heel lang. De tekst blijft goed leesbaar en de opmaak blijft goed',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List in een column layout
export const OrderedListColumnLayout: Story = {
  name: 'Ordered List in een column layout',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Deze geordende lijst is verdeeld in meerdere kolommen. De items worden van boven naar beneden gevuld en gaan verder in de volgende kolom. De nummering blijft doorlopen: het eerste item van de tweede kolom krijgt niet opnieuw nummer 1, maar het nummer dat volgt op het laatste item van de eerste kolom.',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met een lang list item dat doorloopt naar een volgende kolom
export const OrderedListLongItemAcrossColumns: Story = {
  name: 'Ordered List met een lang list item dat doorloopt naar een volgende kolom',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Deze geordende lijst is verdeeld in meerdere kolommen. De tekst van een item loopt door in de volgende kolom. Het nummer van het item blijft in de eerste kolom blijft staan.',
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
        story:
          'In deze geordende lijst staan items waarin als content een nieuwe lijst staat. De lijst wordt weergegeven op een klein scherm waarbij de lijst breder is dan de beschikbare ruimte. In plaats van dat de tekst noodgedwongen wordt afgebroken tot een paar letters per regel, kan de bezoeker de lijst horizontaal scrollen om de volledige breedte te bekijken.',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Story voor Rich Text Editors met `p`: Multiline vanuit Rich Text Editor
export const OrderedListRichTextEditorParagraph: Story = {
  name: 'Story voor Rich Text Editors met `p`: Multiline vanuit Rich Text Editor',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Deze geordende lijst laat de structuur van een lijst met een paragraaf zien in een Rich Text Editor: eerst bestaat de inhoud van het item uit platte tekst, en pas na het indrukken van enter volgt het HTML-element \`p\`. De tekst blijft goed uitgelijnd',
        // - Code Snippet voorbeeld:
    //             <li>
    //             foo
    //             <p>bar</p>
    //             </li>
    //  - Code snippet verduidelijking: Rich Text Editors voegen meestal pas een paragraph toe zodra je enter hebt gedaan. Dit betekent dat je eerst een textnode hebt, en dan een paragraph element. Deze story laat zien dat de spacing dan nog steeds goed gaat.
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Story voor Rich Text Editors met NL Paragraph - zelfde als bovenstaande maar dan met NL Paragraph component
export const OrderedListRichTextEditorNLParagraph: Story = {
  name: 'Story voor Rich Text Editors met NL Paragraph - zelfde als bovenstaande maar dan met NL Paragraph component',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Deze geordende lijst laat de structuur van een lijst met een paragraaf zien in een Rich Text Editor: eerst bestaat de inhoud van het item uit platte tekst, en pas na het indrukken van enter volgt de NL Paragraph component. De tekst blijft goed uitgelijnd.',
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
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Story voor het centreren van de Ordered List. Dit omdat dit beschikbaar is in community en we daar een oplossing voor moeten laten zien.
export const OrderedListCentered: Story = {
  name: 'Story voor het centreren van de Ordered List. Dit omdat dit beschikbaar is in community en we daar een oplossing voor moeten laten zien.',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Een gecentreerde lijst. In plaats van links uitgelijnd, is de tekst in het midden uitgelijnd.',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met vergrote tekstafstand
export const OrderedListIncreasedTextSpacing: Story = {
  name: 'Ordered List met vergrote tekstafstand',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Een lijst met vergrote tekstafstand (regelafstand, letterspatiëring en woordspatiëring), zoals bezoekers dit zelf kunnen instellen om tekst beter leesbaar te maken. De lijst en de nummering blijven ook met deze aangepaste afstanden goed leesbaar en er gaat geen content verloren.',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met tekst vergroot naar 200%
export const OrderedList200PercentZoom: Story = {
  name: 'Ordered List met tekst vergroot naar 200%',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Een lijst waarvan de tekst 200% vergroot is. De lijst blijft ook op deze grotere tekstgrootte goed leesbaar: er gaat geen content verloren en er hoeft niet horizontaal gescrold te worden om de tekst te kunnen lezen.',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List in Forced Colors modus
export const OrderedListForcedColors: Story = {
  name: 'Ordered List in Forced Colors modus',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Een lijst in forced colors modus. Forced colors is een instelling waarbij het besturingssysteem van de bezoeker een eigen kleurenschema afdwingt op alle content, bijvoorbeeld voor mensen met een visuele beperking die veel baat hebben bij hoog contrast. De nummers en tekst van de lijst blijven ook in dit kleurenschema goed zichtbaar en onderscheidend van elkaar.',
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
        story: 'STORY_DESCRIPTION',
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
        story: 'STORY_DESCRIPTION',
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
        story: 'STORY_DESCRIPTION',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met 1 list item
export const OrderedListOneItem: Story = {
  name: 'Ordered List met 1 list item',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Deze geordende lijst bestaat uit maar één item. Ook met maar één item wordt de lijst als lijst herkend door screenreaders, en krijgt het item het nummer 1.',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met zeer veel list items (meer dan geadviseerde 3)
export const OrderedListSoManyItems: Story = {
  name: 'Ordered List met zeer veel list items (meer dan geadviseerde 3)',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Deze geordende lijst bestaat uit 30 items. Ook met heel veel items wordt de opmaak goed toegepast',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List op een breed scherm (in tegenstelling tot de mobiele test)
export const OrderedListVeryLargeScreen: Story = {
  name: 'Ordered List op een breed scherm (in tegenstelling tot de mobiele test)',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst, weergegeven op een heel breed scherm. Ook op een breed scherm wordt de opmaak goed toegepast.',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met Link in list items (ie een soort Link List? is dat een goed idee? nav component icm andere componenten)
export const OrderedListLinkInItem: Story = {
  name: 'Ordered List met Link in list items (ie een soort Link List? is dat een goed idee? nav component icm andere componenten)',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'In deze geordende lijst staat in ieder lijst-item een link.',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met tabel in een list item (is dat een goed idee? nav component icm andere componenten / uitgebreide use cases)
export const OrderedListTableInItem: Story = {
  name: 'Ordered List met tabel in een list item (is dat een goed idee? nav component icm andere componenten / uitgebreide use cases)',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'In deze geordende lijst staat in een van de lijst-items een tabel.',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met reversed en start
export const OrderedListReversedAndStart: Story = {
  name: 'Ordered List met reversed en start',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Deze geordende lijst heeft een aflopende nummering en heeft een aangepast startnummer.',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met type="A" en start
export const OrderedListUpperCaseAlphabeticAndStart: Story = {
  name: 'Ordered List met type="A" en start',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'In deze geordende lijst worden de items geordend met hoofdletters. Omdat het startgetal 4 is, start de lijst met D.',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met lang="ar" en reversed
export const OrderedListLangArabicReversed: Story = {
  name: 'Ordered List met lang="ar" en reversed',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Deze lijst is geordend met Arabisch-Indische cijfers en loopt af in plaats van op.',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Ordered List met Inline Marker met Informatieve Icon met alternatieve tekst. Voorbeeldcode: <OrderedListItem inlineMarker={<Icon label="1." />} />
export const STORY_CONST: Story = {
  name: 'Ordered List met Inline Marker met Informatieve Icon met alternatieve tekst. Voorbeeldcode: <OrderedListItem inlineMarker={<Icon label="1." />} />',
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
// Original: Ordered List met Inline Marker met Informatieve Icon zonder alternatieve tekst en met Inline Marker Label. Voorbeeldcode: <OrderedListItem inlineMarker={<Icon />} inlineMarkerLabel="1." />
export const OrderedListInLineMarkerLabel: Story = {
  name: 'Ordered List met Inline Marker met Informatieve Icon zonder alternatieve tekst en met Inline Marker Label. Voorbeeldcode: <OrderedListItem inlineMarker={<Icon />} inlineMarkerLabel="1." />',
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
// Original: Ordered List met Inline Marker met Informatieve Icon met foutieve alternatieve tekst maar overschreven door Inline Marker Label. Voorbeeldcode: <OrderedListItem inlineMarker={<svg><title>Number One Icon</title>...</svg>} inlineMarkerLabel="1." />
export const OrderedListInlineMarkerIconLabelOverride: Story = {
  name: 'Ordered List met Inline Marker met Informatieve Icon met foutieve alternatieve tekst maar overschreven door Inline Marker Label. Voorbeeldcode: <OrderedListItem inlineMarker={<svg><title>Number One Icon</title>...</svg>} inlineMarkerLabel="1." />',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'In deze geordende lijst begint ieder item met een icoon. De iconen hebben een verkeerde alternatieve tekst. De eigenschap \`inlineMarkerLabel\` overschrijft de verkeerde tekst,, zodat screenreadergebruikers alsnog de juiste betekenis van het icoon horen.',
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Eentje met CSS reset voor de Component
export const OrderedListCssReset: Story = {
  name: 'Eentje met CSS reset voor de Component',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'In deze geordende lijst wordt de CSS niet toegepast. De uitlijning gaat nog steeds goed',
        // Ziet disabled er nog uit als disabled
        // Gaat spacing nog goed
        // Blijft minimum target size goed
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Wel de component CSS maar niet de thema CSS.
export const OrderedListComponentCssNoThemeCss: Story = {
  name: 'Wel de component CSS maar niet de thema CSS.',
  args: {},
  parameters: {
    docs: {
      description: {
        story: '',
        // Ziet disabled er nog uit als disabled
        // Gaat spacing nog goed
        // Blijft minimum target size goed
      },
    },
  },
};

// EXAMPLE CODE SNIPPET
// Original: Eentje waar alle CSS naar een invalid value word gezet, wat betekent dat user-agent dan ook niet meer lekker gaat.
export const OrderedListInvalidCssValues: Story = {
  name: 'Eentje waar alle CSS naar een invalid value word gezet, wat betekent dat user-agent dan ook niet meer lekker gaat.',
  args: {},
  parameters: {
    docs: {
      description: {
        story: '...',
      },
    },
  },
};
