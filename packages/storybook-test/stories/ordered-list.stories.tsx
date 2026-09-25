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

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">Paspoortfoto, niet ouder dan 6 maanden</li>
//   <li class="nl-ordered-list__item">Je oude paspoort</li>
//   <li class="nl-ordered-list__item">Je afspraakbevestiging</li>
// </ol>
// Original: Ordered List
export const OrderedListDefault: Story = {
  name: 'Ordered List',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met drie items. Elk item krijgt automatisch een oplopend nummer, beginnend bij 1. De lijst is visueel herkenbaar als een geordende lijst en screenreadergebruikers horen de items in de juiste volgorde voorgelezen.',
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">
//     Verzamel de benodigde documenten
//     <ol class="nl-ordered-list" role="list">
//       <li class="nl-ordered-list__item">Geldig identiteitsbewijs</li>
//       <li class="nl-ordered-list__item">Bewijs van inschrijving</li>
//     </ol>
//   </li>
//   <li class="nl-ordered-list__item">Dien de aanvraag in</li>
// </ol>
// Original: Ordered List met geneste Ordered List
export const OrderedListNestedOrderedList: Story = {
  name: 'Ordered List met geneste Ordered List',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met een geordende geneste lijst in een van de items. De geneste lijst begint opnieuw bij 1 en is visueel ingesprongen vergeleken met het item daarboven, zodat de verschillende niveaus goed te onderscheiden zijn.',
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">
//     Geef je keuze aan voor de afspraak. Je kunt kiezen uit:
//     <ul class="nl-unordered-list" role="list">
//       <li class="nl-unordered-list__item">Online</li>
//       <li class="nl-unordered-list__item">Bij de balie</li>
//     </ul>
//   </li>
//   <li class="nl-ordered-list__item">Kies een datum en tijd</li>
// </ol>
// Original: Ordered List met geneste Unordered List
export const OrderedListNestedUnorderedList: Story = {
  name: 'Ordered List met geneste Unordered List',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met een ongeordende geneste lijst in een van de items. De ongeordende lijst krijgt bolletjes in plaats van nummers als markers en is visueel ingesprongen vergeleken met het item daarboven, zodat de verschillende niveaus goed te onderscheiden zijn.',
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">
//     Fase 1: Voorbereiding
//     <ol class="nl-ordered-list" role="list">
//       <li class="nl-ordered-list__item">
//         Verzamel documenten
//         <ol role="list">
//           <li class="nl-ordered-list__item">Identiteitsbewijs</li>
//           <li class="nl-ordered-list__item">Bewijs van inschrijving</li>
//         </ol>
//       </li>
//       <li class="nl-ordered-list__item">Plan een afspraak</li>
//     </ol>
//   </li>
//   <li class="nl-ordered-list__item">Fase 2: Uitvoering</li>
// </ol>
// Original: Ordered List met minimaal drie niveaus nesting, met documentatie over hoe en wat
export const OrderedListThreeLevelsNesting: Story = {
  name: 'Ordered List van drie niveaus',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met drie niveaus. Het eerste niveau gebruikt de hoofdnummers, de geneste lijst begint opnieuw bij 1 en is visueel ingesprongen vergeleken met het item daarboven, zodat de verschillende niveaus goed te onderscheiden zijn.',
      },
    },
  },
};

// <p>Rotondekunstprijs eervolle vermeldingen:</p>
// <ol class="ordered-list" role="list" start="4">
//   <li class="nl-ordered-list__item">Vangrails Looping</li>
//   <li class="nl-ordered-list__item">Many sites</li>
//   <li class="nl-ordered-list__item">De Aardbeien van Jan en Brigitte</li>
// </ol>
// Original: Ordered List met startnummer anders dan 1
export const OrderedListStart: Story = {
  name: 'Ordered List met startnummer anders dan 1',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met een aangepast startnummer. De nummering begint niet bij 1, maar bij het opgegeven getal, zodat de volgorde past bij de context van de inhoud.',
      },
    },
  },
};

// <p>Rotondekunstprijs prijswinnaars:</p>
// <ol class="nl-ordered-list" role="list" reversed>
//   <li class="nl-ordered-list__item">Vis op wielen</li>
//   <li class="nl-ordered-list__item">Licht Piramide</li>
//   <li class="nl-ordered-list__item">Berm</li>
// </ol>
// Original: Ordered List met omgekeerde nummering (`reversed`)
export const OrderedListReversed: Story = {
  name: 'Ordered List met omgekeerde nummering via HTML-attribuut reversed',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met een aflopende nummering. De items worden van hoog naar laag genummerd, zodat de volgorde past bij de context van de inhoud.',
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list" type="a">
//   <li class="nl-ordered-list__item">Amsterdam</li>
//   <li class="nl-ordered-list__item">Rotterdam</li>
//   <li class="nl-ordered-list__item">Den Haag</li>
// </ol>
// Original: Ordered List met kleine letters (`type="a"`)
export const OrderedListLowercaseLetters: Story = {
  name: 'Ordered List met kleine letters via HTML-attribuut type="a"',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met kleine letters (a, b, c) in plaats van de standaard nummers (1, 2, 3) om de items te ordenen.',
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list" type="A">
//   <li class="nl-ordered-list__item">Aanvraag indienen</li>
//   <li class="nl-ordered-list__item">Documenten uploaden</li>
//   <li class="nl-ordered-list__item">Bevestiging afwachten</li>
// </ol>
// Original: Ordered List met hoofdletters (`type="A"`)
export const OrderedListUppercaseLetters: Story = {
  name: 'Ordered List met hoofdletters via HTML-attribuut type="A"',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met hoofdletters (A, B, C) in plaats van de standaard nummers (1, 2, 3) om de items te ordenen.',
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list" type="i">
//   <li class="nl-ordered-list__item">Algemene bepalingen</li>
//   <li class="nl-ordered-list__item">Duur van de overeenkomst</li>
//   <li class="nl-ordered-list__item">Beëindiging</li>
// </ol>
// Original: Ordered List met kleine Romeinse cijfers (`type="i"`)
export const OrderedListLowercaseRomanNum: Story = {
  name: 'Ordered List met kleine Romeinse cijfers via HTML-attribuut type="i"',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met Romeinse cijfers in kleine letters (i, ii, iii) in plaats van de standaard nummers (1, 2, 3) om de items te ordenen.',
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list" type="I">
//   <li class="nl-ordered-list__item">Inleiding</li>
//   <li class="nl-ordered-list__item">Doelstellingen</li>
//   <li class="nl-ordered-list__item">Conclusie</li>
// </ol>
// Original: Ordered List met hoofdletters Romeinse cijfers (`type="I"`)
export const OrderedListUppercaseRomanNum: Story = {
  name: 'Ordered List met hoofdletters Romeinse cijfers via HTML-attribuut type="I"',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met Romeinse cijfers hoofdletters (I, II, III) in plaats van de standaard nummers (1, 2, 3) om de items te ordenen.',
      },
    },
  },
};

// Let op: CSS moet nog toegepast worden voor juiste nummering, dat doen we enkel voor arabic-indic, dat selecteert op lang="ar"
// <ol class="nl-ordered-list" role="list" lang="ar">
//   <li class="nl-ordered-list__item">تحميل المستندات</li>
//   <li class="nl-ordered-list__item">تقديم الطلب</li>
//   <li class="nl-ordered-list__item">انتظار التأكيد</li>
// </ol>
// Original: Ordered List met Arabische nummering (`lang="ar"`)
// Original: Ordered List met HTML `lang` attribuut met `ar` waarde - met omschrijving van hoe je dat kan uitbreiden met andere talen - en waarom we arabic supporten
export const OrderedListArabicNum: Story = {
  name: 'Ordered List met Arabische nummering via HTML-attribuut lang="ar"',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een geordende lijst met Arabische tekst en Arabisch-Indische nummering.

        De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut \`lang="ar"\`. De NL Ordered List-component stemt de nummering af op de Arabische taal via styling, middels de CSS-eigenschap \`list-style-type: arabic-indic;\`.

        Dit wordt aangeboden vanuit de NL Ordered List-component naar aanleiding van gebruikersonderzoek op Gemeente Utrecht, waaruit naar voren is gekomen dat één procent van de bezoekers van de website de Arabische taal gebruikt.

        Deze functionaliteit kan gemakkelijk uitgebreid worden voor andere talen middels dezelfde aanpak, via het HTML-attribuut \`lang\` en de CSS-eigenschap \`list-style-type\`.`,
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list" lang="ar" type="i">
//   <li class="nl-ordered-list__item">تحميل المستندات</li>
//   <li class="nl-ordered-list__item">تقديم الطلب</li>
//   <li class="nl-ordered-list__item">انتظار التأكيد</li>
// </ol>
// Original: Type overschrijft Language (bouwnotitie: dit kan mogelijk met een not has type selector)
export const OrderedListTypeOverridesLanguage: Story = {
  name: 'Ordered List waarbij type de taal overschrijft',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een geordende lijst met Arabische tekst en Romeinse cijfers in kleine letters (i, ii, iii) voor de nummering.

        De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut \`lang="ar"\`. De nummering van de lijst wordt ingesteld op Romeinse cijfers in kleine letters via het HTML-attribuut \`type="i"\`.

        De NL Ordered List-component stemt de nummering af op de Arabische taal via styling, middels de CSS-eigenschap \`list-style-type: arabic-indic;\`.

        Dit wordt aangeboden vanuit de NL Ordered List-component naar aanleiding van gebruikersonderzoek op Gemeente Utrecht, waaruit naar voren is gekomen dat één procent van de bezoekers van de website de Arabische taal gebruikt.

        Het type krijgt voorrang op de taal, in dit geval worden dus kleine Romeinse cijfers getoond in plaats van de Arabisch-Indische nummers.
        `,
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
// Original: Ordered List met custom marker en toegankelijke naam via markerLabel (sr-only), met `aria-hidden="true"` op custom marker
export const OrderedListCustomMarkerLabel: Story = {
  name: 'Ordered List met Custom Marker en toegankelijke tekst die visueel verborgen is',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een geordende lijst met een icoon als marker. Het icoon is verborgen voor hulpsoftware. De betekenis van de marker wordt aangeboden als visueel verborgen tekst welke wordt opgelezen voor screenreadergebruikers. De boodschap van de icoon is toegankelijk voor alle bezoekers.`,
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-labelledby="label-id-1">
//         <IconOne />
//       </span>
//      <span aria-hidden="true" id="label-id-1">Stap 1.{" "}</span>
//     </span>
//     Verzamel documenten
//   </li>
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-labelledby="label-id-2">
//         <IconTwo />
//       </span>
//      <span aria-hidden="true" id="label-id-2">Stap 2.{" "}</span>
//     </span>
//     Maak een afspraak.
//    </li>
// </ol>
// Original: Ordered List met een toegankelijke custom marker met toegankelijk label (niet perfecte maar toegankelijke oplossing)
export const OrderedListCustomMarkerAriaLabelledby: Story = {
  name: 'Ordered List met Custom Marker en toegankelijk tekst via HTML-attribuut aria-labelledby',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een geordende lijst met een icoon als marker. Het icoon is verborgen voor hulpsoftware. De betekenis van de marker is aangeboden als tekst welke verborgen wordt voor alle bezoekers. De boodschap van de icoon is toegankelijk gemaakt voor screenreadergebruikers via het WAI-ARIA-attribuut \`aria-labelledby\` gekoppeld aan de marker. De boodschap van de icoon is toegankelijk voor alle bezoekers.`,
      },
    },
  },
};

// Dus dat je niet de sr-text class gebruikt, maar de title in de SVG / aan de Icon word meegegeven zoals bijv <OrderedListItem marker={<Icon label="1." />} />
// Original: Ordered List met Custom Marker met Informatieve Icon met alternatieve tekst
export const OrderedListCustomMarkerInformativeIconAccessible: Story = {
  name: 'Ordered List met Custom Marker met informatieve icoon met alternatieve tekst',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met een icoon als marker. Het icoon is zichtbaar voor hulpsoftware en bevat zelf de tekst die de betekenis van de marker beschrijft. Deze tekst wordt door hulpsoftware gebruikt als alternatieve tekst van het icoon. De boodschap van het icoon is toegankelijk voor alle bezoekers.',
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-labelledby="label-id-1">
//         <svg><title>Number One Icon</title>...</svg>
//       </span>
//      <span aria-hidden="true" id="label-id-1">Stap 1.{" "}</span>
//     </span>
//     Verzamel documenten
//   </li>
// </ol>
// Original: Ordered List met Custom Marker met Informatieve Icon met foutieve alternatieve tekst maar overschreven door Custom Marker Label.
export const OrderedListCustomMarkerIconLabelOverride: Story = {
  name: 'Ordered List met Custom Marker met informatieve icoon met foutieve alternatieve tekst overschreven door Marker Label',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met een icoon als marker. Het icoon is zichtbaar voor hulpsoftware en bevat zelf de tekst die de betekenis van de marker beschrijft, echter deze tekst is ontoegankelijk. Deze ontoegankelijke tekst wordt overschreven door een visueel verborgen tekst, die wel toegankelijk is en in plaats van de ontoegankelijke tekst wordt gelezen voor screenreadergebruikers.',
      },
    },
  },
};

// <ol class="nl-ordered-list" hidden>
//   <li class="nl-ordered-list__item">Paspoortfoto, niet ouder dan 6 maanden</li>
//   <li class="nl-ordered-list__item">Je oude paspoort</li>
//   <li class="nl-ordered-list__item">Je afspraakbevestiging</li>
// </ol>
// Original: Ordered List met HTML `hidden` attribuut
export const OrderedListHidden: Story = {
  name: 'Ordered List verstopt via HTML-attribuut hidden',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst die verborgen is voor bezoekers en voor screenreadergebruikers. De inhoud is aanwezig in de code, maar niet zichtbaar en niet voorleesbaar.',
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list" lang="ar">
//   <li class="nl-ordered-list__item">تحميل المستندات</li>
//   <li class="nl-ordered-list__item">تقديم الطلب</li>
//   <li class="nl-ordered-list__item">انتظار التأكيد</li>
// </ol>
// Original: Ordered List met HTML `lang` attribuut (right-to-left tekst)
export const OrderedListLangRTL: Story = {
  name: 'Ordered List met rechts-naar-links schrijfrichting via Arabische taal via HTML-attribuut lang="ar"',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met Arabische tekst, dit is een taal die van rechts naar links wordt gelezen. De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut `lang="ar"`.',
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list" dir="rtl">
//   <li class="nl-ordered-list__item">Paspoortfoto, niet ouder dan 6 maanden</li>
//   <li class="nl-ordered-list__item">Je oude paspoort</li>
//   <li class="nl-ordered-list__item">Je afspraakbevestiging</li>
// </ol>
// Original: Ordered List met HTML `dir` attribuut
export const OrderedListDirRTL: Story = {
  name: 'Ordered List met schrijfrichting via HTML-attribuut dir="rtl"',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst die rechts-naar-links wordt weergegeven. De schrijfrichting is ingesteld via het HTML-attribuut `dir="rtl"`. De nummering staat aan de rechterkant en de tekst loopt van rechts naar links.',
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list" lang="ar" dir="rtl">
//  <li class="nl-ordered-list__item">تحميل المستندات</li>
//  <li class="nl-ordered-list__item">تقديم الطلب</li>
//  <li class="nl-ordered-list__item">انتظار التأكيد</li>
// </ol>
// Original: Ordered List met Arabische tekst waarbij `dir` alleen op de `ol` staat
export const OrderedListDirParentOnly: Story = {
  name: 'Ordered List met Arabische tekst waarbij HTML-attribuut dir alleen op HTML-element ol staat',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met Arabische tekst, de nummering start aan de rechterkant en de tekst loopt van rechts naar links. De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut `lang="ar"`. De schrijfrichting is ingesteld via het HTML-attribuut `dir="rtl"`.',
      },
    },
  },
};

// <div class="nl-html nl-html--all">
//   <ol role="list">
//     <li role="listitem">Paspoortfoto, niet ouder dan 6 maanden</li>
//     <li role="listitem">Je oude paspoort</li>
//     <li role="listitem">Je afspraakbevestiging</li>
//   </ol>
// </div>
// Original: Ordered List binnen `nl-html--all`
// Let op: role="list" en role="listitem" is nodig!
export const OrderedListNLHTMLAll: Story = {
  name: 'Ordered List binnen `nl-html--all`',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een geordende lijst zonder classes binnen een NL HTML-component.
        De styling wordt behouden door de NL HTML-component, deze past de styling van de NL Ordered List-component toe op alle \`ol\` HTML-elementen en onderliggende \`li\` HTML-elementen binnen een element met de \`nl-html--all\` class.
        De semantiek wordt behouden door de HTML-attributen \`role="list"\ en \`role="listitem"\`.`,
      },
    },
  },
};

// <div class="nl-html nl-html--ordered-list">
//   <ol role="list">
//     <li role="listitem">Paspoortfoto, niet ouder dan 6 maanden</li>
//     <li role="listitem">Je oude paspoort</li>
//     <li role="listitem">Je afspraakbevestiging</li>
//   </ol>
// </div>
// Original: Ordered List binnen `nl-html--ordered-list`
// Let op: role="list" en role="listitem" is nodig!
export const OrderedListNLHTMLOrderedList: Story = {
  name: 'Ordered List binnen `nl-html--ordered-list`',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een geordende lijst zonder classes binnen een NL HTML-component.
        De styling wordt behouden door de NL HTML-component, deze past de styling van de NL Ordered List-component toe op alle \`ol\` HTML-elementen en onderliggende \`li\` HTML-elementen binnen een element met de \`nl-html--ordered-list\` class.
        De semantiek wordt behouden door de HTML-attributen \`role="list"\ en \`role="listitem"\`.`,
      },
    },
  },
};

// <div class="nl-ordered-list" role="list">
//   <div class="nl-ordered-list__item" role="listitem">Paspoortfoto, niet ouder dan 6 maanden</div>
//   <div class="nl-ordered-list__item" role="listitem">Je oude paspoort</div>
//   <div class="nl-ordered-list__item" role="listitem">Je afspraakbevestiging</div>
// </div>
// Original: Ordered List opgebouwd met `div` elementen
// Let op: role="list" en role="listitem" is nodig!
export const OrderedListAlternativeHTMLDivs: Story = {
  name: 'Ordered List opgebouwd met HTML-elementen div',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst opgemaakt met meerdere HTML-elementen `div`. De opmaak wordt dan nog steeds goed toegepast op de component en screenreadergebruikers krijgen nog steeds de juiste informatie, zoals wanneer de standaard HTML-elementen worden gebruikt.',
      },
    },
  },
};

// <span class="nl-ordered-list" role="list">
//   <span class="nl-ordered-list__item" role="listitem">Paspoortfoto, niet ouder dan 6 maanden</span>
//   <span class="nl-ordered-list__item" role="listitem">Je oude paspoort</span>
//   <span class="nl-ordered-list__item" role="listitem">Je afspraakbevestiging</span>
// </span>
// Original: Ordered List opgebouwd met `span` elementen
// Let op: role="list" en role="listitem" is nodig!
export const OrderedListAlternativeHTMLSpans: Story = {
  name: 'Ordered List opgebouwd met HTML-elementen span',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst is opgemaakt met meerdere HTML-elementen `span`. De opmaak wordt dan nog steeds goed toegepast op de component en screenreadergebruikers krijgen nog steeds de juiste informatie, zoals wanneer de standaard HTML-elementen worden gebruikt.',
      },
    },
  },
};

// Original: Ordered List met paragraphs (`p`) in list items
export const OrderedListHTMLParagraphsInListItem: Story = {
  name: 'Ordered List met HTML-elementen p',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `In deze geordende lijst worden alinea's in een lijst-item gebruikt. De eerste alinea is erg kort, de tweede alinea is heel lang. De tekst blijft goed leesbaar en de opmaak blijft goed.`,
      },
    },
  },
};

// Original: Ordered List met NL Paragraph in list item
export const OrderedListNLParagraphsInListItem: Story = {
  name: 'Ordered List met NL Paragraph-componenten',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'In deze geordende lijst worden NL Paragraph-componenten in een lijst-item gebruikt. De eerste alinea is erg kort, de tweede alinea is heel lang. De tekst blijft goed leesbaar en de opmaak blijft goed.',
      },
    },
  },
};

// TODO_EXAMPLE CODE SNIPPET
// Original: Ordered List in een column layout
export const OrderedListColumnLayout: Story = {
  name: 'Ordered List in column layout',
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

// Original: Ordered List met een lang list item dat doorloopt naar een volgende kolom
export const OrderedListLongItemAcrossColumns: Story = {
  name: 'Ordered List met lange items welke doorlopen naar volgende kolom',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Deze geordende lijst is verdeeld in meerdere kolommen. De tekst van een item loopt door in de volgende kolom. Het nummer van het item blijft staan in de eerste kolom.',
      },
    },
  },
};

// Original: Ordered List met horizontaal scrollen op een klein scherm (mock mobiel) - hier zijn meerdere geneste niveaus nodig om te laten zien dat scrollen dan beter is dan wrappen omdat er anders maar een paar letters per regel blijven staan
export const OrderedListHorizontalScrollMobile: Story = {
  name: 'Ordered List met horizontaal scrollen op klein scherm',
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

// <div class="nl-html nl-html--all">
//   <ol role="list">
//     <li role="listitem">Paspoortfoto, niet ouder dan 6 maanden</li>
//     <li role="listitem">
//       Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
//       <p>Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</p>
//     </li>
//     <li role="listitem">Je afspraakbevestiging</li>
//   </ol>
// </div>
// Original: Story voor Rich Text Editors met `p`: Multiline vanuit Rich Text Editor
export const OrderedListRichTextEditorParagraph: Story = {
  name: 'Ordered List in Rich Text Editor met HTML-elementen p',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Deze geordende lijst laat de structuur van een lijst met een alinea zien in een Rich Text Editor: eerst bestaat de inhoud van het item uit platte tekst, en pas na het indrukken van enter volgt het HTML-element \`p\`. De tekst blijft goed uitgelijnd. Code snippet verduidelijking: Rich Text Editors voegen meestal pas een paragraph toe zodra je enter hebt gedaan. Dit betekent dat je eerst een textnode hebt, en dan een paragraph element. Deze story laat zien dat de spacing dan nog steeds goed gaat.',
      },
    },
  },
};

// Original: Story voor Rich Text Editors met NL Paragraph - zelfde als bovenstaande maar dan met NL Paragraph component
export const OrderedListRichTextEditorNLParagraph: Story = {
  name: 'Ordered List in Rich Text Editor met NL Paragraph-componenten',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Deze geordende lijst laat de structuur van een lijst met een alinea zien in een Rich Text Editor: eerst bestaat de inhoud van het item uit platte tekst, en pas na het indrukken van enter volgt de NL Paragraph component. De tekst blijft goed uitgelijnd.',
      },
    },
  },
};

// TODO_EXAMPLE CODE SNIPPET
// Original: Stories voor Rich Text Editors: textnode met nested lijst, textnode met link, etc (voorafgaand aan stories schrijven even bepalen welke combinaties we hierin willen meenemen)
export const OrderedListRichTextEditorNested: Story = {
  name: 'Ordered List in Rich Text Editor met meerdere niveaus',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst in een Rich Text Editor met meerdere niveaus. De inhoud blijft goed uitgelijnd en de nesting blijft zichtbaar, zodat bezoekers de hiërarchie in de lijst gemakkelijk kunnen volgen.',
      },
    },
  },
};

// NOTE: de CSS hiervoor is niet onderdeel van de CSS Component, het is een voorbeeld implementatie
// Original: Story voor het centreren van de Ordered List. Dit omdat dit beschikbaar is in community en we daar een oplossing voor moeten laten zien.
export const OrderedListCentered: Story = {
  name: 'Ordered List gecentreerd',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Een gecentreerde lijst. In plaats van links uitgelijnd, is de tekst in het midden uitgelijnd.',
      },
    },
  },
};

// Original: Ordered List met vergrote tekstafstand
export const OrderedListIncreasedTextSpacing: Story = {
  name: 'Ordered List met vergrote tekstafstand',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een lijst met vergrote tekstafstand (regelafstand, letterspatiëring en woordspatiëring), zoals bezoekers dit zelf kunnen instellen om tekst beter leesbaar te maken. De lijst en de nummering blijven ook met deze aangepaste afstanden goed leesbaar en er gaat geen content verloren.',
      },
    },
  },
};

// Original: Ordered List met tekst vergroot naar 200%
export const OrderedList200PercentZoom: Story = {
  name: 'Ordered List met tekst vergroot naar 200%',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een lijst waarvan de tekst 200% vergroot is. De lijst blijft ook op deze grotere tekstgrootte goed leesbaar: er gaat geen content verloren en er hoeft niet horizontaal gescrold te worden om de tekst te kunnen lezen.',
      },
    },
  },
};

// Original: Ordered List in Forced Colors modus
export const OrderedListForcedColors: Story = {
  name: 'Ordered List in Forced Colors modus',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een lijst in forced colors modus. Forced colors is een instelling waarbij het besturingssysteem van de bezoeker een eigen kleurenschema afdwingt op alle content, bijvoorbeeld voor mensen met een visuele beperking die veel baat hebben bij hoog contrast. De nummers en tekst van de lijst blijven ook in dit kleurenschema goed zichtbaar en onderscheidend van elkaar.',
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">Doet u uw aanvraag op een werkdag voor 14.00 uur? U kunt uw paspoort of ID-kaart de werkdag na uw aanvraag ophalen vanaf 12.00 uur.</li>
// </ol>
// Original: Ordered List met 1 list item
export const OrderedListOneItem: Story = {
  name: 'Ordered List met één item',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Deze geordende lijst bestaat uit maar één item. Ook met maar één item wordt de lijst als lijst herkend door screenreaders, en krijgt het item het nummer 1.',
      },
    },
  },
};

// Original: Ordered List met zeer veel list items (meer dan geadviseerde 3)
export const OrderedListSoManyItems: Story = {
  name: 'Ordered List met zeer veel items',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Deze geordende lijst bestaat uit 30 items. Ook met heel veel items wordt de opmaak goed toegepast.',
      },
    },
  },
};

// Original: Ordered List op een breed scherm (in tegenstelling tot de mobiele test)
export const OrderedListVeryLargeScreen: Story = {
  name: 'Ordered List op breed scherm',
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

// TODO_EXAMPLE CODE SNIPPET
// Original: Ordered List met Link in list items (ie een soort Link List? is dat een goed idee? nav component icm andere componenten)
export const OrderedListLinkInItem: Story = {
  name: 'Ordered List met NL Link-componenten',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'In deze geordende lijst staat in elk lijst-item een link.',
      },
    },
  },
};

// TODO_EXAMPLE CODE SNIPPET
// Original: Ordered List met tabel in een list item (is dat een goed idee? nav component icm andere componenten / uitgebreide use cases)
export const OrderedListTableInItem: Story = {
  name: 'Ordered List met tabel',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'In deze geordende lijst staat in een van de lijst-items een tabel.',
      },
    },
  },
};

// <p>Rotondekunstprijs prijswinnaars pagina 2 van 3:</p>
// <ol class="nl-ordered-list" role="list" reversed start="10">
//   <li class="nl-ordered-list__item">Vis op wielen</li>
//   <li class="nl-ordered-list__item">Licht Piramide</li>
//   <li class="nl-ordered-list__item">Berm</li>
// </ol>
// Original: Ordered List met reversed en start
export const OrderedListReversedAndStart: Story = {
  name: 'Ordered List met HTML-attributen reversed en start',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Deze geordende lijst heeft een aflopende nummering en heeft een aangepast startnummer.',
      },
    },
  },
};

// Original: Ordered List met type="A" en start
export const OrderedListUpperCaseAlphabeticAndStart: Story = {
  name: 'Ordered List met HTML-attributen type="A" en start',
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

// Original: Ordered List met lang="ar" en reversed
export const OrderedListLangArabicReversed: Story = {
  name: 'Ordered List met HTML-attributen lang="ar" en reversed',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met Arabische tekst, is geordend met Arabisch-Indische cijfers en loopt af in plaats van op. De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut `lang="ar"`. De richting van de ordening wordt omgedraaid met het HTML-attribuut `reversed`.',
      },
    },
  },
};

// Original: Eentje met CSS reset voor de Component
export const OrderedListCssReset: Story = {
  name: 'Ordered List met CSS reset op component',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'In deze geordende lijst wordt de CSS niet toegepast. De uitlijning gaat nog steeds goed.'
        // Ziet disabled er nog uit als disabled
        // Gaat spacing nog goed
        // Blijft minimum target size goed
      },
    },
  },
};

// Original: Wel de component CSS maar niet de thema CSS.
export const OrderedListComponentCssNoThemeCss: Story = {
  name: 'Ordered List met CSS reset op thema',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met de stijl van het thema toegepast, maar zonder de component-CSS. De lijst blijft leesbaar en de hoofdlijnen van de opmaak blijven behouden, zodat het effect van de thema-styling zichtbaar is.',
        // Ziet disabled er nog uit als disabled
        // Gaat spacing nog goed
        // Blijft minimum target size goed
      },
    },
  },
};

// Original: Eentje waar alle CSS naar een invalid value word gezet, wat betekent dat user-agent dan ook niet meer lekker gaat.
export const OrderedListInvalidCssValues: Story = {
  name: 'Ordered List met ongeldige CSS voor alle properties',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met ongeldige CSS-waarden voor de stijleigenschappen. De visuele weergave is bewust verstoord, zodat zichtbaar is hoe de component reageert wanneer de browser geen geldige stijl meer kan toepassen. Ondanks de ongeldige CSS-waarden blijft de component visueel bruikbaar en toegankelijk.',
      },
    },
  },
};
