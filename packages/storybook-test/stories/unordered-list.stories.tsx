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

// <ol class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item">Paspoortfoto, niet ouder dan 6 maanden</li>
//   <li class="nl-unordered-list__item">Je oude paspoort</li>
//   <li class="nl-unordered-list__item">Je afspraakbevestiging</li>
// </ol>
// Original: Unordered List
export const OrderedListDefault: Story = {
  name: 'Unordered List',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met drie items. Elk item krijgt automatisch een oplopend nummer, beginnend bij 1. De lijst is visueel herkenbaar als een ongeordende lijst en screenreadergebruikers horen de items in de juiste volgorde voorgelezen.',
      },
    },
  },
};

// <ol class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item">
//     Verzamel de benodigde documenten
//     <ol class="nl-unordered-list" role="list">
//       <li class="nl-unordered-list__item">Geldig identiteitsbewijs</li>
//       <li class="nl-unordered-list__item">Bewijs van inschrijving</li>
//     </ol>
//   </li>
//   <li class="nl-unordered-list__item">Dien de aanvraag in</li>
// </ol>
// Original: Unordered List met geneste Unordered List
export const OrderedListNestedOrderedList: Story = {
  name: 'Unordered List met geneste Unordered List',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met een ongeordende geneste lijst in een van de items. De geneste lijst begint opnieuw bij 1 en is visueel ingesprongen vergeleken met het item daarboven, zodat de verschillende niveaus goed te onderscheiden zijn.',
      },
    },
  },
};

// <ol class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item">
//     Geef je keuze aan voor de afspraak. Je kunt kiezen uit:
//     <ul class="nl-unordered-list" role="list">
//       <li class="nl-unordered-list__item">Online</li>
//       <li class="nl-unordered-list__item">Bij de balie</li>
//     </ul>
//   </li>
//   <li class="nl-unordered-list__item">Kies een datum en tijd</li>
// </ol>
// Original: Unordered List met geneste Unordered List
export const OrderedListNestedUnorderedList: Story = {
  name: 'Unordered List met geneste Unordered List',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met een ongeordende geneste lijst in een van de items. De ongeordende lijst krijgt bolletjes in plaats van nummers als markers en is visueel ingesprongen vergeleken met het item daarboven, zodat de verschillende niveaus goed te onderscheiden zijn.',
      },
    },
  },
};

// <ol class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item">
//     Fase 1: Voorbereiding
//     <ol class="nl-unordered-list" role="list">
//       <li class="nl-unordered-list__item">
//         Verzamel documenten
//         <ol role="list">
//           <li class="nl-unordered-list__item">Identiteitsbewijs</li>
//           <li class="nl-unordered-list__item">Bewijs van inschrijving</li>
//         </ol>
//       </li>
//       <li class="nl-unordered-list__item">Plan een afspraak</li>
//     </ol>
//   </li>
//   <li class="nl-unordered-list__item">Fase 2: Uitvoering</li>
// </ol>
// Original: Unordered List met minimaal drie niveaus nesting, met documentatie over hoe en wat
export const OrderedListThreeLevelsNesting: Story = {
  name: 'Unordered List van drie niveaus',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met drie niveaus. Het eerste niveau gebruikt de hoofdnummers, de geneste lijst begint opnieuw bij 1 en is visueel ingesprongen vergeleken met het item daarboven, zodat de verschillende niveaus goed te onderscheiden zijn.',
      },
    },
  },
};

// <p>Rotondekunstprijs eervolle vermeldingen:</p>
// <ol class="unordered-list" role="list" start="4">
//   <li class="nl-unordered-list__item">Vangrails Looping</li>
//   <li class="nl-unordered-list__item">Many sites</li>
//   <li class="nl-unordered-list__item">De Aardbeien van Jan en Brigitte</li>
// </ol>
// Original: Unordered List met startnummer anders dan 1
export const OrderedListStart: Story = {
  name: 'Unordered List met startnummer anders dan 1',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met een aangepast startnummer. De nummering begint niet bij 1, maar bij het opgegeven getal, zodat de volgorde past bij de context van de inhoud.',
      },
    },
  },
};

// <p>Rotondekunstprijs prijswinnaars:</p>
// <ol class="nl-unordered-list" role="list" reversed>
//   <li class="nl-unordered-list__item">Vis op wielen</li>
//   <li class="nl-unordered-list__item">Licht Piramide</li>
//   <li class="nl-unordered-list__item">Berm</li>
// </ol>
// Original: Unordered List met omgekeerde nummering (`reversed`)
export const OrderedListReversed: Story = {
  name: 'Unordered List met omgekeerde nummering via HTML-attribuut reversed',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met een aflopende nummering. De items worden van hoog naar laag genummerd, zodat de volgorde past bij de context van de inhoud.',
      },
    },
  },
};

// <ol class="nl-unordered-list" role="list" type="a">
//   <li class="nl-unordered-list__item">Amsterdam</li>
//   <li class="nl-unordered-list__item">Rotterdam</li>
//   <li class="nl-unordered-list__item">Den Haag</li>
// </ol>
// Original: Unordered List met kleine letters (`type="a"`)
export const OrderedListLowercaseLetters: Story = {
  name: 'Unordered List met kleine letters via HTML-attribuut type="a"',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met kleine letters (a, b, c) in plaats van de standaard nummers (1, 2, 3) om de items te ordenen.',
      },
    },
  },
};

// <ol class="nl-unordered-list" role="list" type="A">
//   <li class="nl-unordered-list__item">Aanvraag indienen</li>
//   <li class="nl-unordered-list__item">Documenten uploaden</li>
//   <li class="nl-unordered-list__item">Bevestiging afwachten</li>
// </ol>
// Original: Unordered List met hoofdletters (`type="A"`)
export const OrderedListUppercaseLetters: Story = {
  name: 'Unordered List met hoofdletters via HTML-attribuut type="A"',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met hoofdletters (A, B, C) in plaats van de standaard nummers (1, 2, 3) om de items te ordenen.',
      },
    },
  },
};

// <ol class="nl-unordered-list" role="list" type="i">
//   <li class="nl-unordered-list__item">Algemene bepalingen</li>
//   <li class="nl-unordered-list__item">Duur van de overeenkomst</li>
//   <li class="nl-unordered-list__item">Beëindiging</li>
// </ol>
// Original: Unordered List met kleine Romeinse cijfers (`type="i"`)
export const OrderedListLowercaseRomanNum: Story = {
  name: 'Unordered List met kleine Romeinse cijfers via HTML-attribuut type="i"',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met Romeinse cijfers in kleine letters (i, ii, iii) in plaats van de standaard nummers (1, 2, 3) om de items te ordenen.',
      },
    },
  },
};

// <ol class="nl-unordered-list" role="list" type="I">
//   <li class="nl-unordered-list__item">Inleiding</li>
//   <li class="nl-unordered-list__item">Doelstellingen</li>
//   <li class="nl-unordered-list__item">Conclusie</li>
// </ol>
// Original: Unordered List met hoofdletters Romeinse cijfers (`type="I"`)
export const OrderedListUppercaseRomanNum: Story = {
  name: 'Unordered List met hoofdletters Romeinse cijfers via HTML-attribuut type="I"',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met Romeinse cijfers hoofdletters (I, II, III) in plaats van de standaard nummers (1, 2, 3) om de items te ordenen.',
      },
    },
  },
};

// Let op: CSS moet nog toegepast worden voor juiste nummering, dat doen we enkel voor arabic-indic, dat selecteert op lang="ar"
// <ol class="nl-unordered-list" role="list" lang="ar">
//   <li class="nl-unordered-list__item">تحميل المستندات</li>
//   <li class="nl-unordered-list__item">تقديم الطلب</li>
//   <li class="nl-unordered-list__item">انتظار التأكيد</li>
// </ol>
// Original: Unordered List met Arabische nummering (`lang="ar"`)
// Original: Unordered List met HTML `lang` attribuut met `ar` waarde - met omschrijving van hoe je dat kan uitbreiden met andere talen - en waarom we arabic supporten
export const OrderedListArabicNum: Story = {
  name: 'Unordered List met Arabische nummering via HTML-attribuut lang="ar"',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst met Arabische tekst en Arabisch-Indische nummering.

De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut \`lang="ar"\`. De NL Unordered List-component stemt de nummering af op de Arabische taal via styling, middels de CSS-eigenschap \`list-style-type: arabic-indic\`.

Dit wordt aangeboden vanuit de NL Unordered List-component naar aanleiding van gebruikersonderzoek op Gemeente Utrecht, waaruit naar voren is gekomen dat één procent van de bezoekers van de website de Arabische taal gebruikt.

Deze functionaliteit kan gemakkelijk uitgebreid worden voor andere talen middels dezelfde aanpak, via het HTML-attribuut \`lang\` en de CSS-eigenschap \`list-style-type\`.`,
      },
    },
  },
};

// <ol class="nl-unordered-list" role="list" lang="ar" type="i">
//   <li class="nl-unordered-list__item">تحميل المستندات</li>
//   <li class="nl-unordered-list__item">تقديم الطلب</li>
//   <li class="nl-unordered-list__item">انتظار التأكيد</li>
// </ol>
// Original: Type overschrijft Language (bouwnotitie: dit kan mogelijk met een not has type selector)
export const OrderedListTypeOverridesLanguage: Story = {
  name: 'Unordered List waarbij type de taal overschrijft',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst met Arabische tekst en Romeinse cijfers in kleine letters (i, ii, iii) voor de nummering.

De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut \`lang="ar"\`. De nummering van de lijst wordt ingesteld op Romeinse cijfers in kleine letters via het HTML-attribuut \`type="i"\`.

De NL Unordered List-component stemt de nummering af op de Arabische taal via styling, middels de CSS-eigenschap \`list-style-type: arabic-indic\`.

Dit wordt aangeboden vanuit de NL Unordered List-component naar aanleiding van gebruikersonderzoek op Gemeente Utrecht, waaruit naar voren is gekomen dat één procent van de bezoekers van de website de Arabische taal gebruikt.

Het type krijgt voorrang op de taal, in dit geval worden dus kleine Romeinse cijfers getoond in plaats van de Arabisch-Indische nummers.`,
      },
    },
  },
};

// <ol class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconOne />
//       </span>
//      <span class="sr-only">Stap 1.{" "}</span>
//     </span>
//     Verzamel documenten
//   </li>
//   <li class="nl-unordered-list__item">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconTwo />
//       </span>
//      <span class="sr-only">Stap 2.{" "}</span>
//     </span>
//     Maak een afspraak.
//    </li>
// </ol>
// Original: Unordered List met custom marker en toegankelijke naam via markerLabel (sr-only), met `aria-hidden="true"` op custom marker
export const OrderedListCustomMarkerLabel: Story = {
  name: 'Unordered List met Custom Marker en toegankelijke tekst die visueel verborgen is',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst met een icoon als marker. Het icoon is verborgen voor hulpsoftware. De betekenis van de marker wordt aangeboden als visueel verborgen tekst welke wordt opgelezen voor screenreadergebruikers. De boodschap van de icoon is toegankelijk voor alle bezoekers.`,
      },
    },
  },
};

// <ol class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-labelledby="label-id-1">
//         <IconOne />
//       </span>
//      <span aria-hidden="true" id="label-id-1">Stap 1.{" "}</span>
//     </span>
//     Verzamel documenten
//   </li>
//   <li class="nl-unordered-list__item">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-labelledby="label-id-2">
//         <IconTwo />
//       </span>
//      <span aria-hidden="true" id="label-id-2">Stap 2.{" "}</span>
//     </span>
//     Maak een afspraak.
//    </li>
// </ol>
// Original: Unordered List met een toegankelijke custom marker met toegankelijk label (niet perfecte maar toegankelijke oplossing)
export const OrderedListCustomMarkerAriaLabelledby: Story = {
  name: 'Unordered List met Custom Marker en toegankelijk tekst via HTML-attribuut aria-labelledby',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst met een icoon als marker. Het icoon is verborgen voor hulpsoftware. De betekenis van de marker is aangeboden als tekst welke verborgen wordt voor alle bezoekers. De boodschap van de icoon is toegankelijk gemaakt voor screenreadergebruikers via het WAI-ARIA-attribuut \`aria-labelledby\` gekoppeld aan de marker. De boodschap van de icoon is toegankelijk voor alle bezoekers.`,
      },
    },
  },
};

// Dus dat je niet de sr-text class gebruikt, maar de title in de SVG / aan de Icon word meegegeven zoals bijv <OrderedListItem marker={<Icon label="1." />} />
// Original: Unordered List met Custom Marker met Informatieve Icon met alternatieve tekst
export const OrderedListCustomMarkerInformativeIconAccessible: Story = {
  name: 'Unordered List met Custom Marker met informatieve icoon met alternatieve tekst',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met een icoon als marker. Het icoon is zichtbaar voor hulpsoftware en bevat zelf de tekst die de betekenis van de marker beschrijft. Deze tekst wordt door hulpsoftware gebruikt als alternatieve tekst van het icoon. De boodschap van het icoon is toegankelijk voor alle bezoekers.',
      },
    },
  },
};

// <ol class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-labelledby="label-id-1">
//         <svg><title>Number One Icon</title>...</svg>
//       </span>
//      <span aria-hidden="true" id="label-id-1">Stap 1.{" "}</span>
//     </span>
//     Verzamel documenten
//   </li>
// </ol>
// Original: Unordered List met Custom Marker met Informatieve Icon met foutieve alternatieve tekst maar overschreven door Custom Marker Label.
export const OrderedListCustomMarkerIconLabelOverride: Story = {
  name: 'Unordered List met Custom Marker met informatieve icoon met foutieve alternatieve tekst overschreven door Marker Label',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met een icoon als marker. Het icoon is zichtbaar voor hulpsoftware en bevat zelf de tekst die de betekenis van de marker beschrijft, echter deze tekst is ontoegankelijk. Deze ontoegankelijke tekst wordt overschreven door een visueel verborgen tekst, die wel toegankelijk is en in plaats van de ontoegankelijke tekst wordt gelezen voor screenreadergebruikers.',
      },
    },
  },
};

// <ol class="nl-unordered-list" hidden>
//   <li class="nl-unordered-list__item">Paspoortfoto, niet ouder dan 6 maanden</li>
//   <li class="nl-unordered-list__item">Je oude paspoort</li>
//   <li class="nl-unordered-list__item">Je afspraakbevestiging</li>
// </ol>
// Original: Unordered List met HTML `hidden` attribuut
export const OrderedListHidden: Story = {
  name: 'Unordered List verstopt via HTML-attribuut hidden',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst die verborgen is voor bezoekers en voor screenreadergebruikers. De inhoud is aanwezig in de code, maar niet zichtbaar en niet voorleesbaar.',
      },
    },
  },
};

// <ol class="nl-unordered-list" role="list" lang="ar">
//   <li class="nl-unordered-list__item">تحميل المستندات</li>
//   <li class="nl-unordered-list__item">تقديم الطلب</li>
//   <li class="nl-unordered-list__item">انتظار التأكيد</li>
// </ol>
// Original: Unordered List met HTML `lang` attribuut (right-to-left tekst)
export const OrderedListLangRTL: Story = {
  name: 'Unordered List met rechts-naar-links schrijfrichting via Arabische taal via HTML-attribuut lang="ar"',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met Arabische tekst, dit is een taal die van rechts naar links wordt gelezen. De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut `lang="ar"`.',
      },
    },
  },
};

// <ol class="nl-unordered-list" role="list" dir="rtl">
//   <li class="nl-unordered-list__item">Paspoortfoto, niet ouder dan 6 maanden</li>
//   <li class="nl-unordered-list__item">Je oude paspoort</li>
//   <li class="nl-unordered-list__item">Je afspraakbevestiging</li>
// </ol>
// Original: Unordered List met HTML `dir` attribuut
export const OrderedListDirRTL: Story = {
  name: 'Unordered List met schrijfrichting via HTML-attribuut dir="rtl"',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst die rechts-naar-links wordt weergegeven. De schrijfrichting is ingesteld via het HTML-attribuut `dir="rtl"`. De nummering staat aan de rechterkant en de tekst loopt van rechts naar links.',
      },
    },
  },
};

// <ol class="nl-unordered-list" role="list" lang="ar" dir="rtl">
//  <li class="nl-unordered-list__item">تحميل المستندات</li>
//  <li class="nl-unordered-list__item">تقديم الطلب</li>
//  <li class="nl-unordered-list__item">انتظار التأكيد</li>
// </ol>
// Original: Unordered List met Arabische tekst waarbij `dir` alleen op de `ol` staat
export const OrderedListDirParentOnly: Story = {
  name: 'Unordered List met Arabische tekst waarbij HTML-attribuut dir alleen op HTML-element ol staat',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met Arabische tekst, de nummering start aan de rechterkant en de tekst loopt van rechts naar links. De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut `lang="ar"`. De schrijfrichting is ingesteld via het HTML-attribuut `dir="rtl"`.',
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
// Original: Unordered List binnen `nl-html--all`
// Let op: role="list" en role="listitem" is nodig!
export const OrderedListNLHTMLAll: Story = {
  name: 'Unordered List binnen `nl-html--all`',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst zonder classes binnen een NL HTML-component.

De styling wordt behouden door de NL HTML-component, deze past de styling van de NL Unordered List-component toe op alle \`ol\` HTML-elementen en onderliggende \`li\` HTML-elementen binnen een element met de \`nl-html--all\` class.

De semantiek wordt behouden door de HTML-attributen \`role="list"\` en \`role="listitem"\`.`,
      },
    },
  },
};

// <div class="nl-html nl-html--unordered-list">
//   <ol role="list">
//     <li role="listitem">Paspoortfoto, niet ouder dan 6 maanden</li>
//     <li role="listitem">Je oude paspoort</li>
//     <li role="listitem">Je afspraakbevestiging</li>
//   </ol>
// </div>
// Original: Unordered List binnen `nl-html--unordered-list`
// Let op: role="list" en role="listitem" is nodig!
export const OrderedListNLHTMLOrderedList: Story = {
  name: 'Unordered List binnen `nl-html--unordered-list`',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst zonder classes binnen een NL HTML-component.

De styling wordt behouden door de NL HTML-component, deze past de styling van de NL Unordered List-component toe op alle \`ol\` HTML-elementen en onderliggende \`li\` HTML-elementen binnen een element met de \`nl-html--unordered-list\` class.

De semantiek wordt behouden door de HTML-attributen \`role="list"\` en \`role="listitem"\`.`,
      },
    },
  },
};

// <div class="nl-unordered-list" role="list">
//   <div class="nl-unordered-list__item" role="listitem">Paspoortfoto, niet ouder dan 6 maanden</div>
//   <div class="nl-unordered-list__item" role="listitem">Je oude paspoort</div>
//   <div class="nl-unordered-list__item" role="listitem">Je afspraakbevestiging</div>
// </div>
// Original: Unordered List opgebouwd met `div` elementen
// Let op: role="list" en role="listitem" is nodig!
export const OrderedListAlternativeHTMLDivs: Story = {
  name: 'Unordered List opgebouwd met HTML-elementen div',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst opgemaakt met meerdere HTML-elementen `div`. Deze elementen hebben niet de juiste semantiek voor een lijst met items, de HTML-attributen `role="list"` en `role="listitem"` worden gebruikt om de semantiek toe te voegen. De opmaak wordt dan nog steeds goed toegepast op de component en screenreadergebruikers krijgen nog steeds de juiste informatie, zoals wanneer de standaard HTML-elementen worden gebruikt.',
      },
    },
  },
};

// <span class="nl-unordered-list" role="list">
//   <span class="nl-unordered-list__item" role="listitem">Paspoortfoto, niet ouder dan 6 maanden</span>
//   <span class="nl-unordered-list__item" role="listitem">Je oude paspoort</span>
//   <span class="nl-unordered-list__item" role="listitem">Je afspraakbevestiging</span>
// </span>
// Original: Unordered List opgebouwd met `span` elementen
// Let op: role="list" en role="listitem" is nodig!
export const OrderedListAlternativeHTMLSpans: Story = {
  name: 'Unordered List opgebouwd met HTML-elementen span',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst opgemaakt met meerdere HTML-elementen `span`. Deze elementen hebben niet de juiste semantiek voor een lijst met items, de HTML-attributen `role="list"` en `role="listitem"` worden gebruikt om de semantiek toe te voegen. De opmaak wordt dan nog steeds goed toegepast op de component en screenreadergebruikers krijgen nog steeds de juiste informatie, zoals wanneer de standaard HTML-elementen worden gebruikt.',
      },
    },
  },
};

// Original: Unordered List met paragraphs (`p`) in list items
export const OrderedListHTMLParagraphsInListItem: Story = {
  name: 'Unordered List met HTML-elementen p',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst met meerdere alinea's in een enkele item. De eerste alinea is kort, de tweede alinea is langer. De tekst blijft goed leesbaar en de opmaak blijft consistent.`,
      },
    },
  },
};

// Original: Unordered List met NL Paragraph in list item
export const OrderedListNLParagraphsInListItem: Story = {
  name: 'Unordered List met NL Paragraph-componenten',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met NL Paragraph-componenten in een enkele item. De eerste alinea is kort, de tweede alinea is langer. De tekst blijft goed leesbaar en de opmaak blijft consistent.',
      },
    },
  },
};

// Original: Unordered List in een column layout
export const OrderedListColumnLayout: Story = {
  name: 'Unordered List in column layout',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst verdeeld over meerdere kolommen. De items worden van boven naar beneden gevuld en gaan door in de volgende kolom. De nummering blijft doorlopen: het eerste item van de tweede kolom krijgt niet opnieuw nummer 1, maar het nummer dat volgt op het laatste item van de eerste kolom.',
      },
    },
  },
};

// Original: Unordered List met een lang list item dat doorloopt naar een volgende kolom
export const OrderedListLongItemAcrossColumns: Story = {
  name: 'Unordered List met lange items welke doorlopen naar volgende kolom',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst verdeeld over meerdere kolommen. De tekst van een item loopt door in de volgende kolom. Het nummer van het item blijft in de eerste kolom staan.',
      },
    },
  },
};

// Original: Unordered List met horizontaal scrollen op een klein scherm (mock mobiel) - hier zijn meerdere geneste niveaus nodig om te laten zien dat scrollen dan beter is dan wrappen omdat er anders maar een paar letters per regel blijven staan
export const OrderedListHorizontalScrollMobile: Story = {
  name: 'Unordered List met horizontaal scrollen op klein scherm',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met items die zelf weer een lijst bevatten. De lijst wordt weergegeven op een klein scherm, waarbij de inhoud breder is dan de beschikbare ruimte. In plaats van dat de tekst gedwongen wordt afgebroken tot een paar letters per regel, kan de bezoeker de lijst horizontaal scrollen om de volledige breedte te bekijken.',
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
  name: 'Unordered List in Rich Text Editor met HTML-elementen p',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst die de structuur van een lijst met een alinea in een Rich Text Editor laat zien. Het begin van de inhoud van het item bestaat uit platte tekst, en pas na het indrukken van Enter in de Rich Text Editor volgt het HTML-element `p`. De tekst blijft goed uitgelijnd. Rich Text Editors voegen meestal pas een alinea toe zodra Enter is ingedrukt. Deze story laat zien dat de witruimte ook dan nog goed gaat.',
      },
    },
  },
};

// Original: Story voor Rich Text Editors met NL Paragraph - zelfde als bovenstaande maar dan met NL Paragraph component
export const OrderedListRichTextEditorNLParagraph: Story = {
  name: 'Unordered List in Rich Text Editor met NL Paragraph-componenten',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst die de structuur van een lijst met een alinea in een Rich Text Editor laat zien. Het begin van de inhoud van het item bestaat uit platte tekst, en pas na het indrukken van Enter in de Rich Text Editor volgt het NL Paragraph-component. De tekst blijft goed uitgelijnd. Rich Text Editors voegen meestal pas een alinea toe zodra Enter is ingedrukt. Deze story laat zien dat de witruimte ook dan nog goed gaat.',
      },
    },
  },
};

// Original: Stories voor Rich Text Editors: textnode met nested lijst, textnode met link, etc (voorafgaand aan stories schrijven even bepalen welke combinaties we hierin willen meenemen)
export const OrderedListRichTextEditorNested: Story = {
  name: 'Unordered List in Rich Text Editor met meerdere niveaus',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst in een Rich Text Editor met meerdere niveaus. De inhoud blijft goed uitgelijnd en de nesting blijft zichtbaar, zodat bezoekers de hiërarchie in de lijst gemakkelijk kunnen volgen.',
      },
    },
  },
};

// NOTE: de CSS hiervoor is niet onderdeel van de CSS Component, het is een voorbeeld implementatie
// Original: Story voor het centreren van de Unordered List. Dit omdat dit beschikbaar is in community en we daar een oplossing voor moeten laten zien.
export const OrderedListCentered: Story = {
  name: 'Unordered List gecentreerd',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Een gecentreerde lijst. In plaats van links uitgelijnd, is de tekst in het midden uitgelijnd.',
      },
    },
  },
};

// Original: Unordered List met vergrote tekstafstand
export const OrderedListIncreasedTextSpacing: Story = {
  name: 'Unordered List met vergrote tekstafstand',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met vergrote tekstafstand (regelafstand, letterspatiëring en woordspatiëring), zoals bezoekers dit zelf kunnen instellen om tekst beter leesbaar te maken. De lijst en de nummering blijven ook met deze aangepaste afstanden goed leesbaar en er gaat geen content verloren.',
      },
    },
  },
};

// Original: Unordered List met tekst vergroot naar 200%
export const OrderedList200PercentZoom: Story = {
  name: 'Unordered List met tekst vergroot naar 200%',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst waarvan de tekst 200% vergroot is. De lijst blijft ook op deze grotere tekstgrootte goed leesbaar: er gaat geen content verloren en er hoeft niet horizontaal gescrold te worden om de tekst te kunnen lezen.',
      },
    },
  },
};

// Original: Unordered List in Forced Colors modus
export const OrderedListForcedColors: Story = {
  name: 'Unordered List in Forced Colors modus',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst in forced colors modus. Forced colors is een instelling waarbij het besturingssysteem van de bezoeker een eigen kleurenschema afdwingt op alle content, bijvoorbeeld voor mensen met een visuele beperking die veel baat hebben bij hoog contrast. De nummers en tekst van de lijst blijven ook in dit kleurenschema goed zichtbaar en onderscheidend van elkaar.',
      },
    },
  },
};

// <ol class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item">Doet u uw aanvraag op een werkdag voor 14.00 uur? U kunt uw paspoort of ID-kaart de werkdag na uw aanvraag ophalen vanaf 12.00 uur.</li>
// </ol>
// Original: Unordered List met 1 list item
export const OrderedListOneItem: Story = {
  name: 'Unordered List met één item',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst bestaande uit één item. Ook met één item wordt de lijst als lijst herkend door screenreaders en krijgt het item het nummer 1.',
      },
    },
  },
};

// Original: Unordered List met zeer veel list items (meer dan geadviseerde 3)
export const OrderedListSoManyItems: Story = {
  name: 'Unordered List met zeer veel items',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Een ongeordende lijst bestaande uit 30 items. Ook met heel veel items blijft de opmaak goed toegepast.',
      },
    },
  },
};

// Original: Unordered List op een breed scherm (in tegenstelling tot de mobiele test)
export const OrderedListVeryLargeScreen: Story = {
  name: 'Unordered List op breed scherm',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst, weergegeven op een heel breed scherm. Ook op een breed scherm wordt de opmaak goed toegepast.',
      },
    },
  },
};

// Original: Unordered List met Link in list items (ie een soort Link List? is dat een goed idee? nav component icm andere componenten)
export const OrderedListLinkInItem: Story = {
  name: 'Unordered List met NL Link-componenten',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Een ongeordende lijst waarin elke item een link bevat.',
      },
    },
  },
};

// Original: Unordered List met tabel in een list item (is dat een goed idee? nav component icm andere componenten / uitgebreide use cases)
export const OrderedListTableInItem: Story = {
  name: 'Unordered List met tabel',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Een ongeordende lijst waarin een van de items een tabel bevat.',
      },
    },
  },
};

// <p>Rotondekunstprijs prijswinnaars pagina 2 van 3:</p>
// <ol class="nl-unordered-list" role="list" reversed start="10">
//   <li class="nl-unordered-list__item">Vis op wielen</li>
//   <li class="nl-unordered-list__item">Licht Piramide</li>
//   <li class="nl-unordered-list__item">Berm</li>
// </ol>
// Original: Unordered List met reversed en start
export const OrderedListReversedAndStart: Story = {
  name: 'Unordered List met HTML-attributen reversed en start',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Een ongeordende lijst met een aflopende nummering en een aangepast startnummer.',
      },
    },
  },
};

// Original: Unordered List met type="A" en start
export const OrderedListUpperCaseAlphabeticAndStart: Story = {
  name: 'Unordered List met HTML-attributen type="A" en start',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Een ongeordende lijst met hoofdletters als nummering. Omdat het startgetal 4 is, begint de lijst met D.',
      },
    },
  },
};

// Original: Unordered List met lang="ar" en reversed
export const OrderedListLangArabicReversed: Story = {
  name: 'Unordered List met HTML-attributen lang="ar" en reversed',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met Arabische tekst, is geordend met Arabisch-Indische cijfers en loopt af in plaats van op. De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut `lang="ar"`. De richting van de ordening wordt omgedraaid met het HTML-attribuut `reversed`.',
      },
    },
  },
};

// Original: Eentje met CSS reset voor alles
export const OrderedListCssResetFull: Story = {
  name: 'Unordered List met CSS reset op component',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst waarin de styling de component en het thema niet worden toegepast. De combinatie van de HTML en de browser styling houdt de lijst visueel bruikbaar en toegankelijk.',
      },
    },
  },
};

// Original: Eentje met CSS reset voor de Component
export const OrderedListCssResetComponent: Story = {
  name: 'Unordered List met CSS reset op component',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst waarin de styling van de component niet wordt toegepast, maar de styling van het thema wel. De combinatie van de HTML, de browser styling en de thema styling houdt de lijst visueel bruikbaar en toegankelijk.',
      },
    },
  },
};

// Original: Wel de component CSS maar niet de thema CSS.
export const OrderedListCssResetTheme: Story = {
  name: 'Unordered List met CSS reset op thema',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst waarin de styling van de component wel wordt toegepast, maar de styling van het thema niet. De combinatie van de HTML, de browser styling en de component styling houdt de lijst visueel bruikbaar en toegankelijk.',
      },
    },
  },
};

// Original: Eentje waar alle CSS naar een invalid value word gezet, wat betekent dat user-agent dan ook niet meer lekker gaat.
export const OrderedListInvalidCssValues: Story = {
  name: 'Unordered List met ongeldige CSS voor alle properties',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met ongeldige CSS-waarden voor de stijleigenschappen. De visuele weergave is bewust verstoord, zodat zichtbaar is hoe de component reageert wanneer de browser geen geldige stijl meer kan toepassen. Ondanks de ongeldige CSS-waarden blijft de component visueel bruikbaar en toegankelijk.',
      },
    },
  },
};
