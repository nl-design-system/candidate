import { CandidateCenteredDecorator } from '@nl-design-system-candidate/storybook-shared/src/CandidateCenteredDecorator';
import { createCustomPropertiesDecorator } from '@nl-design-system-candidate/storybook-shared/src/CustomPropertiesDecorator';
import { CandidateDisableCssDecorator } from '@nl-design-system-candidate/storybook-shared/src/CandidateDisableCssDecorator';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import { IconNumber1, IconNumber2 } from '@tabler/icons-react';
import '../../components-css/icon-css/src/icon.scss';
import '../../components-css/link-css/src/html/link.scss';
import '../../components-css/link-css/src/link.scss';
import '../../components-css/ordered-list-css/src/html/ordered-list.scss';
import '../../components-css/ordered-list-css/src/ordered-list.scss';
import '../../components-css/paragraph-css/src/html/paragraph.scss';
import '../../components-css/paragraph-css/src/paragraph.scss';
import { Icon } from '../../components-react/icon-react/src/icon';
import { Link } from '../../components-react/link-react/src/link';
import packageJSON from '../../components-react/ordered-list-react/package.json';
import { OrderedList, OrderedListItem } from '../../components-react/ordered-list-react/src/ordered-list';
import componentMarkdown from '../../docs/ordered-list-docs/docs/component.md?raw';
import reactMeta from '../../docs/ordered-list-docs/stories/ordered-list.react.meta';
import tokens from '../../tokens/ordered-list-tokens/tokens.json';
import { Paragraph } from '../../components-react/paragraph-react/src/paragraph';
import {
  LargeLetterSpacingDecorator,
  LargeLineHeightDecorator,
  LargeWordSpacingDecorator,
  UserPreference2rem,
} from '../src/TextDecorator';

// import { } from '../src/WcagTests'; // Vul aan door toegankelijkheidsexpert

const meta = {
  ...merge({
    ...reactMeta,
    args: { role: 'list' },
    component: OrderedList,
    subcomponents: { OrderedListItem },
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
  }),
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
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden</OrderedListItem>
      <OrderedListItem>Je oude paspoort</OrderedListItem>
      <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
    </OrderedList>
  ),
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
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>
        Verzamel de benodigde documenten
        <OrderedList role="list">
          <OrderedListItem>Geldig identiteitsbewijs</OrderedListItem>
          <OrderedListItem>Bewijs van inschrijving</OrderedListItem>
        </OrderedList>
      </OrderedListItem>
      <OrderedListItem>Dien de aanvraag in</OrderedListItem>
    </OrderedList>
  ),
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
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>
        Geef je keuze aan voor de afspraak. Je kunt kiezen uit:
        <ul role="list">
          <li>Online</li>
          <li>Bij de balie</li>
        </ul>
      </OrderedListItem>
      <OrderedListItem>Kies een datum en tijd</OrderedListItem>
    </OrderedList>
  ),
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
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>
        Fase 1: Voorbereiding
        <OrderedList role="list">
          <OrderedListItem>
            Verzamel documenten
            <OrderedList role="list">
              <OrderedListItem>Identiteitsbewijs</OrderedListItem>
              <OrderedListItem>Bewijs van inschrijving</OrderedListItem>
            </OrderedList>
          </OrderedListItem>
          <OrderedListItem>Plan een afspraak</OrderedListItem>
        </OrderedList>
      </OrderedListItem>
      <OrderedListItem>Fase 2: Uitvoering</OrderedListItem>
    </OrderedList>
  ),
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
  render: (args) => (
    <OrderedList {...args} start={4}>
      <OrderedListItem>Vangrails Looping</OrderedListItem>
      <OrderedListItem>Many sites</OrderedListItem>
      <OrderedListItem>De Aardbeien van Jan en Brigitte</OrderedListItem>
    </OrderedList>
  ),
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
  render: (args) => (
    <OrderedList {...args} reversed>
      <OrderedListItem>Vis op wielen</OrderedListItem>
      <OrderedListItem>Licht Piramide</OrderedListItem>
      <OrderedListItem>Berm</OrderedListItem>
    </OrderedList>
  ),
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
  render: (args) => (
    <OrderedList {...args} type="a">
      <OrderedListItem>Amsterdam</OrderedListItem>
      <OrderedListItem>Rotterdam</OrderedListItem>
      <OrderedListItem>Den Haag</OrderedListItem>
    </OrderedList>
  ),
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
// Ontwikkelfase notitie: de CSS-component stelt geen `list-style-type` in, zodat de browser de waarde
// rechtstreeks leest van het HTML-attribuut `type`. Daardoor werken `type="A"` en `type="a"` correct
// zonder extra CSS-selectors of extra class names.
// Original: Ordered List met hoofdletters (`type="A"`)
export const OrderedListUppercaseLetters: Story = {
  name: 'Ordered List met hoofdletters via HTML-attribuut type="A"',
  args: {},
  render: (args) => (
    <OrderedList {...args} type="A">
      <OrderedListItem>Aanvraag indienen</OrderedListItem>
      <OrderedListItem>Documenten uploaden</OrderedListItem>
      <OrderedListItem>Bevestiging afwachten</OrderedListItem>
    </OrderedList>
  ),
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
  render: (args) => (
    <OrderedList {...args} type="i">
      <OrderedListItem>Algemene bepalingen</OrderedListItem>
      <OrderedListItem>Duur van de overeenkomst</OrderedListItem>
      <OrderedListItem>Beëindiging</OrderedListItem>
    </OrderedList>
  ),
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
  render: (args) => (
    <OrderedList {...args} type="I">
      <OrderedListItem>Inleiding</OrderedListItem>
      <OrderedListItem>Doelstellingen</OrderedListItem>
      <OrderedListItem>Conclusie</OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met Romeinse cijfers hoofdletters (I, II, III) in plaats van de standaard nummers (1, 2, 3) om de items te ordenen.',
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list" lang="ar" dir="rtl">
//   <li class="nl-ordered-list__item">تحميل المستندات</li>
//   <li class="nl-ordered-list__item">تقديم الطلب</li>
//   <li class="nl-ordered-list__item">انتظار التأكيد</li>
// </ol>
// Original: Ordered List met Arabische nummering (`lang="ar"`)
// Original: Ordered List met HTML `lang` attribuut met `ar` waarde - met omschrijving van hoe je dat kan uitbreiden met andere talen - en waarom we arabic supporten
// Combined with "Ordered List met HTML `dir` attribuut" due to feedback https://github.com/nl-design-system/candidate/pull/1411#discussion_r4106782830
export const OrderedListArabicNumDirRTL: Story = {
  name: 'Ordered List met Arabische nummering via HTML-attribuut lang="ar" en schrijfrichting via HTML-attribuut dir="rtl"',
  globals: { lang: 'ar-iq', dir: 'rtl' },
  render: (args) => (
    <OrderedList {...args} lang="ar" dir="rtl">
      <OrderedListItem>تحميل المستندات</OrderedListItem>
      <OrderedListItem>تقديم الطلب</OrderedListItem>
      <OrderedListItem>انتظار التأكيد</OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Een geordende lijst die rechts-naar-links wordt weergegeven met Arabische tekst en Arabisch-Indische nummering.

De schrijfrichting is ingesteld via het HTML-attribuut \`dir="rtl"\`. De nummering staat aan de rechterkant en de tekst loopt van rechts naar links.

De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut \`lang="ar"\`. De NL Ordered List-component stemt de nummering af op de Arabische taal via styling, middels de CSS-eigenschap \`list-style-type: arabic-indic\`.

Dit wordt aangeboden vanuit de NL Ordered List-component naar aanleiding van gebruikersonderzoek op Gemeente Utrecht, waaruit naar voren is gekomen dat één procent van de bezoekers van de website de Arabische taal gebruikt.

Deze functionaliteit kan gemakkelijk uitgebreid worden voor andere talen middels dezelfde aanpak, via het HTML-attribuut \`lang\` en de CSS-eigenschap \`list-style-type\`.`,
      },
    },
  },
};

// <html lang="ar" dir="rtl">
// <ol class="nl-ordered-list" role="list">
//  <li class="nl-ordered-list__item">تحميل المستندات</li>
//  <li class="nl-ordered-list__item">تقديم الطلب</li>
//  <li class="nl-ordered-list__item">انتظار التأكيد</li>
// </ol>
// </html>
// Ontwikkelfase notitie: de html lang/dir is gezet via de globals in de story
// Ontwikkelfase notitie: hiermee test je ook een extra feature van de :lang() selector
// Original: Ordered List met Arabische tekst waarbij `dir` alleen op de `ol` staat
export const OrderedListLangDirOnHTML: Story = {
  name: 'Ordered List met Arabische tekst waarbij HTML-attributen lang en dir alleen op HTML-element html staat',
  globals: { lang: 'ar-iq', dir: 'rtl' },
  args: {},
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>تحميل المستندات</OrderedListItem>
      <OrderedListItem>تقديم الطلب</OrderedListItem>
      <OrderedListItem>انتظار التأكيد</OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Een geordende lijst die rechts-naar-links wordt weergegeven met Arabische tekst en Arabisch-Indische nummering.

De schrijfrichting is ingesteld via het HTML-attribuut \`dir="rtl"\` op het HTML-element \`html\`. De nummering staat aan de rechterkant en de tekst loopt van rechts naar links.

De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut \`lang="ar"\` op het HTML-element \`html\`. De NL Ordered List-component stemt de nummering af op de Arabische taal via styling, middels de CSS-eigenschap \`list-style-type: arabic-indic\`.

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
// Original: Type overschrijft Language
// Ontwikkelfase notitie: de CSS-eigenschap `list-style-type: arabic-indic` via `:lang(ar)` wint altijd
// van het HTML-attribuut `type`, omdat CSS altijd voorrang heeft op presentatie-attributen. Het
// HTML-attribuut `type` wordt alleen door de browser gelezen als er geen CSS `list-style-type` is
// ingesteld. De story beschrijft daarom dat de taal de nummering bepaalt, niet het `type`-attribuut.
export const OrderedListTypeOverridesLanguage: Story = {
  name: 'Ordered List waarbij lang de nummering bepaalt ondanks type-attribuut',
  globals: { lang: 'ar-iq', dir: 'rtl' },
  args: {},
  render: (args) => (
    <OrderedList {...args} lang="ar" type="i">
      <OrderedListItem>تحميل المستندات</OrderedListItem>
      <OrderedListItem>تقديم الطلب</OrderedListItem>
      <OrderedListItem>انتظار التأكيد</OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Een geordende lijst met Arabische tekst waarbij zowel het HTML-attribuut \`lang="ar"\` als het HTML-attribuut \`type="i"\` zijn ingesteld.

De CSS-eigenschap \`list-style-type: arabic-indic\` via de \`:lang(ar)\` selector heeft altijd voorrang op het HTML-attribuut \`type\`, omdat CSS altijd wint van presentatie-attributen. De lijst toont daardoor Arabisch-Indische nummering in plaats van kleine Romeinse cijfers.`,
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item nl-ordered-list__item--custom-marker">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <span class="nl-icon" aria-hidden="true"><svg class="tabler-icon tabler-icon-number-1">...</svg></span>
//       </span>
//       <span class="nl-ordered-list__marker-label">Stap 1. </span>
//     </span>
//     Verzamel documenten
//   </li>
//   <li class="nl-ordered-list__item nl-ordered-list__item--custom-marker">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <span class="nl-icon" aria-hidden="true"><svg class="tabler-icon tabler-icon-number-2">...</svg></span>
//       </span>
//       <span class="nl-ordered-list__marker-label">Stap 2. </span>
//     </span>
//     Maak een afspraak
//   </li>
// </ol>
// Original: Ordered List met custom marker en toegankelijke naam via markerLabel (nl-ordered-list__marker-label), met `aria-hidden="true"` op custom marker
export const OrderedListCustomMarkerLabel: Story = {
  name: 'Ordered List met Custom Marker en toegankelijke tekst die visueel verborgen is',
  args: {},
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem
        marker={
          <Icon>
            <IconNumber1 />
          </Icon>
        }
        markerLabel="Stap 1."
      >
        Verzamel documenten
      </OrderedListItem>
      <OrderedListItem
        marker={
          <Icon>
            <IconNumber2 />
          </Icon>
        }
        markerLabel="Stap 2."
      >
        Maak een afspraak
      </OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Een geordende lijst met een icoon als marker. Het icoon is verborgen voor hulpsoftware. De betekenis van de marker wordt aangeboden als visueel verborgen tekst welke wordt opgelezen voor screenreadergebruikers. De boodschap van de icoon is toegankelijk voor alle bezoekers.`,
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item nl-ordered-list__item--custom-marker">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span class="nl-icon" role="img" aria-label="Stap 1."><svg class="tabler-icon tabler-icon-number-1">...</svg></span>
//     </span>
//     Verzamel documenten
//   </li>
//   <li class="nl-ordered-list__item nl-ordered-list__item--custom-marker">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span class="nl-icon" role="img" aria-label="Stap 2."><svg class="tabler-icon tabler-icon-number-2">...</svg></span>
//     </span>
//     Maak een afspraak
//   </li>
// </ol>
// Ontwikkelfase notitie: geen visueel verborgen markerLabel, de alternatieve tekst staat op de Icon zelf via
// `role="img"` en `aria-label`.
// Ontwikkelfase notitie: OrderedListMarker verpakt de marker nu nog altijd in `aria-hidden="true"`, waardoor de
// alternatieve tekst van de Icon niet bij hulpsoftware aankomt. Deze story beschrijft het verwachte gedrag, zie
// issues/ordered-list-marker-informative-icon-hidden.md.
// Original: Ordered List met Custom Marker met Informatieve Icon met alternatieve tekst
export const OrderedListCustomMarkerInformativeIconAccessible: Story = {
  name: 'Ordered List met Custom Marker met informatieve icoon met alternatieve tekst',
  args: {},
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem
        marker={
          <Icon role="img" aria-label="Stap 1.">
            <IconNumber1 />
          </Icon>
        }
      >
        Verzamel documenten
      </OrderedListItem>
      <OrderedListItem
        marker={
          <Icon role="img" aria-label="Stap 2.">
            <IconNumber2 />
          </Icon>
        }
      >
        Maak een afspraak
      </OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met een icoon als marker. Het icoon is zichtbaar voor hulpsoftware en bevat zelf de tekst die de betekenis van de marker beschrijft. Deze tekst wordt door hulpsoftware gebruikt als alternatieve tekst van het icoon. De boodschap van het icoon is toegankelijk voor alle bezoekers.',
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
  render: (args) => (
    <OrderedList {...args} hidden>
      <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden</OrderedListItem>
      <OrderedListItem>Je oude paspoort</OrderedListItem>
      <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst die verborgen is voor bezoekers en voor screenreadergebruikers. De inhoud is aanwezig in de code, maar niet zichtbaar en niet voorleesbaar.',
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
  globals: { lang: 'ar-iq', dir: 'rtl' },
  render: (args) => (
    <OrderedList {...args} lang="ar" dir="rtl">
      <OrderedListItem>تحميل المستندات</OrderedListItem>
      <OrderedListItem>تقديم الطلب</OrderedListItem>
      <OrderedListItem>انتظار التأكيد</OrderedListItem>
    </OrderedList>
  ),
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
//     <li>Paspoortfoto, niet ouder dan 6 maanden</li>
//     <li>Je oude paspoort</li>
//     <li>Je afspraakbevestiging</li>
//   </ol>
// </div>
// Original: Ordered List binnen `nl-html--all`
export const OrderedListNLHTMLAll: Story = {
  name: 'Ordered List binnen `nl-html--all`',
  render: () => (
    <div className="nl-html nl-html--all">
      <ol role="list">
        <li>Paspoortfoto, niet ouder dan 6 maanden</li>
        <li>Je oude paspoort</li>
        <li>Je afspraakbevestiging</li>
      </ol>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een geordende lijst zonder classes binnen een NL HTML-component.

De styling wordt behouden door de NL HTML-component, deze past de styling van de NL Ordered List-component toe op alle \`ol\` HTML-elementen en onderliggende \`li\` HTML-elementen binnen een element met de \`nl-html--all\` class.

De semantiek wordt behouden door de HTML-attribuut \`role="list"\`.`,
      },
    },
  },
};

// <div class="nl-html nl-html--ordered-list">
//   <ol role="list">
//     <li>Paspoortfoto, niet ouder dan 6 maanden</li>
//     <li>Je oude paspoort</li>
//     <li>Je afspraakbevestiging</li>
//   </ol>
// </div>
// Original: Ordered List binnen `nl-html--ordered-list`
// Let op: role="list" is nodig!
export const OrderedListNLHTMLOrderedList: Story = {
  name: 'Ordered List binnen `nl-html--ordered-list`',
  render: () => (
    <div className="nl-html nl-html--ordered-list">
      <ol role="list">
        <li>Paspoortfoto, niet ouder dan 6 maanden</li>
        <li>Je oude paspoort</li>
        <li>Je afspraakbevestiging</li>
      </ol>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een geordende lijst zonder classes binnen een NL HTML-component.

De styling wordt behouden door de NL HTML-component, deze past de styling van de NL Ordered List-component toe op alle \`ol\` HTML-elementen en onderliggende \`li\` HTML-elementen binnen een element met de \`nl-html--ordered-list\` class.

De semantiek wordt behouden door de HTML-attribuut \`role="list"\`.`,
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
  render: () => (
    <div className="nl-ordered-list" role="list">
      <div className="nl-ordered-list__item" role="listitem">
        Paspoortfoto, niet ouder dan 6 maanden
      </div>
      <div className="nl-ordered-list__item" role="listitem">
        Je oude paspoort
      </div>
      <div className="nl-ordered-list__item" role="listitem">
        Je afspraakbevestiging
      </div>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst opgemaakt met meerdere HTML-elementen `div`. Deze elementen hebben niet de juiste semantiek voor een lijst met items, de HTML-attributen `role="list"` en `role="listitem"` worden gebruikt om de semantiek toe te voegen. De opmaak wordt dan nog steeds goed toegepast op de component en screenreadergebruikers krijgen nog steeds de juiste informatie, zoals wanneer de standaard HTML-elementen worden gebruikt.',
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
  render: () => (
    <span className="nl-ordered-list" role="list">
      <span className="nl-ordered-list__item" role="listitem">
        Paspoortfoto, niet ouder dan 6 maanden
      </span>
      <span className="nl-ordered-list__item" role="listitem">
        Je oude paspoort
      </span>
      <span className="nl-ordered-list__item" role="listitem">
        Je afspraakbevestiging
      </span>
    </span>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst opgemaakt met meerdere HTML-elementen `span`. Deze elementen hebben niet de juiste semantiek voor een lijst met items, de HTML-attributen `role="list"` en `role="listitem"` worden gebruikt om de semantiek toe te voegen. De opmaak wordt dan nog steeds goed toegepast op de component en screenreadergebruikers krijgen nog steeds de juiste informatie, zoals wanneer de standaard HTML-elementen worden gebruikt.',
      },
    },
  },
};

// Original: Ordered List met paragraphs (`p`) in list items
export const OrderedListHTMLParagraphsInListItem: Story = {
  name: 'Ordered List met HTML-elementen p',
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>
        Paspoortfoto, niet ouder dan 6 maanden
        <p>Je oude paspoort</p>
        <p>Je afspraakbevestiging</p>
      </OrderedListItem>
      <OrderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort
      </OrderedListItem>
      <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een geordende lijst waarvan het eerste item begint met platte tekst, gevolgd door twee alinea's in HTML-elementen \`p\`. De alinea's staan recht onder de tekst van het item, niet onder het nummer. De witruimte tussen de alinea's komt uit de alinea-witruimte van het thema. Screenreadergebruikers horen een lijst met drie items, waarbij beide alinea's bij het eerste item horen.`,
      },
    },
  },
};

// Original: Ordered List met NL Paragraph in list item
export const OrderedListNLParagraphsInListItem: Story = {
  name: 'Ordered List met NL Paragraph-componenten',
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>
        Paspoortfoto, niet ouder dan 6 maanden
        <Paragraph>Je oude paspoort</Paragraph>
        <Paragraph>Je afspraakbevestiging</Paragraph>
      </OrderedListItem>
      <OrderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort
      </OrderedListItem>
      <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Een geordende lijst waarvan het eerste item begint met platte tekst, gevolgd door twee NL Paragraph-componenten. De alinea's staan recht onder de tekst van het item, niet onder het nummer. De witruimte tussen de alinea's komt uit de alinea-witruimte van het thema. Screenreadergebruikers horen een lijst met drie items, waarbij beide alinea's bij het eerste item horen.",
      },
    },
  },
};

// Original: Ordered List in een column layout
export const OrderedListColumnLayout: Story = {
  name: 'Ordered List in column layout',
  render: (args) => (
    <div style={{ columns: 2 }}>
      <OrderedList {...args}>
        <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden</OrderedListItem>
        <OrderedListItem>Je oude paspoort</OrderedListItem>
        <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
        <OrderedListItem>
          Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort
        </OrderedListItem>
        <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
        <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden</OrderedListItem>
        <OrderedListItem>Je oude paspoort</OrderedListItem>
        <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
      </OrderedList>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst verdeeld over meerdere kolommen. De items worden van boven naar beneden gevuld en gaan door in de volgende kolom. De nummering blijft doorlopen: het eerste item van de tweede kolom krijgt niet opnieuw nummer 1, maar het nummer dat volgt op het laatste item van de eerste kolom.',
      },
    },
  },
};

// Original: Ordered List met een lang list item dat doorloopt naar een volgende kolom
export const OrderedListLongItemAcrossColumns: Story = {
  name: 'Ordered List met lange items welke doorlopen naar volgende kolom',
  render: (args) => (
    <div style={{ columns: 2, width: '300px' }}>
      <OrderedList {...args}>
        <OrderedListItem>
          Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort en moeten zelf aanwezig
          zijn bij zowel het aanvragen als het ophalen
        </OrderedListItem>
        <OrderedListItem>Je oude paspoort</OrderedListItem>
        <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
      </OrderedList>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst verdeeld over meerdere kolommen. De tekst van een item loopt door in de volgende kolom. Het nummer van het item blijft in de eerste kolom staan.',
      },
    },
  },
};

// Original: Ordered List met horizontaal scrollen op een klein scherm (mock mobiel) - hier zijn meerdere geneste niveaus nodig om te laten zien dat scrollen dan beter is dan wrappen omdat er anders maar een paar letters per regel blijven staan
export const OrderedListHorizontalScrollMobile: Story = {
  name: 'Ordered List met horizontaal scrollen op klein scherm',
  decorators: [
    (Story) => (
      <div
        className="example-scroll-container"
        role="region"
        aria-label="Verordening paspoortaanvraag"
        tabIndex={0}
        style={{ overflowX: 'auto' }}
      >
        <style>{'.example-scroll-container .nl-ordered-list__item { min-inline-size: 20ch; }'}</style>
        <Story />
      </div>
    ),
  ],
  globals: { viewport: { value: 'phone' } },
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>
        Hoofdstuk Aanvraag van een reisdocument
        <OrderedList role="list">
          <OrderedListItem>
            Afdeling Benodigde documenten
            <OrderedList role="list">
              <OrderedListItem>
                Paragraaf Identiteit van de aanvrager
                <OrderedList role="list">
                  <OrderedListItem>
                    Artikel Geldig identiteitsbewijs
                    <OrderedList role="list">
                      <OrderedListItem>
                        Lid Het identiteitsbewijs is niet ouder dan 10 jaar
                        <OrderedList role="list">
                          <OrderedListItem>Onderdeel Paspoort of identiteitskaart</OrderedListItem>
                          <OrderedListItem>Onderdeel Rijbewijs</OrderedListItem>
                        </OrderedList>
                      </OrderedListItem>
                      <OrderedListItem>Lid De pasfoto is niet ouder dan 6 maanden</OrderedListItem>
                    </OrderedList>
                  </OrderedListItem>
                </OrderedList>
              </OrderedListItem>
            </OrderedList>
          </OrderedListItem>
        </OrderedList>
      </OrderedListItem>
      <OrderedListItem>Hoofdstuk Afhalen van een reisdocument</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een geordende lijst met zes niveaus, weergegeven op een mobiel scherm. Elk niveau springt verder in, waardoor er op het diepste niveau maar weinig ruimte overblijft. In plaats van dat de tekst daar wordt afgebroken tot een paar letters per regel, krijgt elke regel minimaal ruimte voor ongeveer 20 tekens en kan de bezoeker de lijst horizontaal scrollen om de volledige breedte te bekijken.

Toetsenbordgebruikers kunnen het scrollgebied bereiken met de Tab-toets en daarna scrollen met de pijltjestoetsen. Screenreadergebruikers horen het gebied als "Verordening paspoortaanvraag" en daarna de lijst met de items in de juiste volgorde.`,
      },
    },
  },
};

// <div class="nl-html nl-html--all">
//   <ol role="list">
//     <li>Paspoortfoto, niet ouder dan 6 maanden</li>
//     <li>
//       Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
//       <p>Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</p>
//     </li>
//     <li>Je afspraakbevestiging</li>
//   </ol>
// </div>
// Original: Story voor Rich Text Editors met `p`: Multiline vanuit Rich Text Editor
export const OrderedListRichTextEditorParagraph: Story = {
  name: 'Ordered List in Rich Text Editor met HTML-elementen p',
  render: () => (
    <div className="nl-html nl-html--all">
      <ol role="list">
        <li>Paspoortfoto, niet ouder dan 6 maanden</li>
        <li>
          Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
          <p>Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</p>
        </li>
        <li>Je afspraakbevestiging</li>
      </ol>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst zoals een Rich Text Editor die kan opslaan, zonder CSS classes binnen een element met de `nl-html--all` class. Het tweede item begint met platte tekst; na het indrukken van Enter volgt een alinea in het HTML-element `p`. De alinea staat recht onder de tekst van het item, niet onder het nummer. De witruimte boven en onder de alinea komt uit de alinea-witruimte van het thema; is die 0, dan sluit de alinea direct aan op de tekst ervoor en op het volgende item. Screenreadergebruikers horen een lijst met drie items, waarbij de alinea bij het tweede item hoort.',
      },
    },
  },
};

// <div class="nl-html nl-html--all">
//   <ol role="list">
//     <li>Paspoortfoto, niet ouder dan 6 maanden</li>
//     <li>
//       Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
//       <p class="nl-paragraph">Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</p>
//     </li>
//     <li>Je afspraakbevestiging</li>
//   </ol>
// </div>
// Original: Story voor Rich Text Editors met NL Paragraph - zelfde als bovenstaande maar dan met NL Paragraph component
export const OrderedListRichTextEditorNLParagraph: Story = {
  name: 'Ordered List in Rich Text Editor met NL Paragraph-componenten',
  render: () => (
    <div className="nl-html nl-html--all">
      <ol role="list">
        <li>Paspoortfoto, niet ouder dan 6 maanden</li>
        <li>
          Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
          <Paragraph>Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</Paragraph>
        </li>
        <li>Je afspraakbevestiging</li>
      </ol>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst zoals een Rich Text Editor die kan opslaan, zonder CSS classes binnen een element met de `nl-html--all` class. Het tweede item begint met platte tekst; na het indrukken van Enter volgt een alinea als NL Paragraph-component. De alinea staat recht onder de tekst van het item, niet onder het nummer. De witruimte boven en onder de alinea komt uit de alinea-witruimte van het thema; is die 0, dan sluit de alinea direct aan op de tekst ervoor en op het volgende item. Screenreadergebruikers horen een lijst met drie items, waarbij de alinea bij het tweede item hoort.',
      },
    },
  },
};

// <div class="nl-html nl-html--all">
//   <ol role="list">
//     <li>
//       Verzamel de benodigde documenten
//       <ol role="list">
//         <li>Geldig identiteitsbewijs</li>
//         <li>Pasfoto niet ouder dan 6 maanden</li>
//       </ol>
//     </li>
//     <li>Maak een afspraak via <a href="https://example.com/afspraak">de afsprakenpagina</a></li>
//     <li>
//       Kies hoe je het document ophaalt
//       <ul role="list">
//         <li>Bij de balie</li>
//         <li>Bij een afhaalpunt</li>
//       </ul>
//     </li>
//   </ol>
// </div>
// Original: Stories voor Rich Text Editors: textnode met nested lijst, textnode met link, etc (voorafgaand aan stories schrijven even bepalen welke combinaties we hierin willen meenemen)
export const OrderedListRichTextEditorNested: Story = {
  name: 'Ordered List in Rich Text Editor met meerdere niveaus',
  render: () => (
    <div className="nl-html nl-html--all">
      <ol role="list">
        <li>
          Verzamel de benodigde documenten
          <ol role="list">
            <li>Geldig identiteitsbewijs</li>
            <li>Pasfoto niet ouder dan 6 maanden</li>
          </ol>
        </li>
        <li>
          Maak een afspraak via <a href="https://example.com/afspraak">de afsprakenpagina</a>
        </li>
        <li>
          Kies hoe je het document ophaalt
          <ul role="list">
            <li>Bij de balie</li>
            <li>Bij een afhaalpunt</li>
          </ul>
        </li>
      </ol>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst zoals een Rich Text Editor die kan opslaan, zonder CSS classes binnen een element met de `nl-html--all` class. Items beginnen met platte tekst, gevolgd door een geneste geordende lijst, een link of een geneste ongeordende lijst. De geneste lijsten springen in onder de tekst van hun item, de geneste geordende lijst begint opnieuw bij 1 en de ongeordende lijst krijgt bolletjes, zodat de hiërarchie zichtbaar blijft. Screenreadergebruikers horen de geneste lijsten als lijsten binnen het bijbehorende item.',
      },
    },
  },
};

// NOTE: de CSS hiervoor is niet onderdeel van de CSS Component, het is een voorbeeld implementatie
// Original: Story voor het centreren van de Ordered List. Dit omdat dit beschikbaar is in community en we daar een oplossing voor moeten laten zien.
export const OrderedListCentered: Story = {
  name: 'Ordered List gecentreerd',
  decorators: [CandidateCenteredDecorator],
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden</OrderedListItem>
      <OrderedListItem>Je oude paspoort</OrderedListItem>
      <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een gecentreerde lijst. In plaats van links uitgelijnd, is de tekst in het midden uitgelijnd. Het nummer staat direct voor de tekst van elk item, zodat duidelijk blijft welk nummer bij welk item hoort. Screenreadergebruikers horen de lijst en de items in de juiste volgorde, net als bij een links uitgelijnde lijst.',
      },
    },
  },
};

// Original: Ordered List met vergrote tekstafstand
export const OrderedListIncreasedTextSpacing: Story = {
  name: 'Ordered List met vergrote tekstafstand',
  decorators: [LargeLetterSpacingDecorator, LargeWordSpacingDecorator, LargeLineHeightDecorator],
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden</OrderedListItem>
      <OrderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort
      </OrderedListItem>
      <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      // De decorator zet stijlen op `:root`; in een eigen iframe blijven die binnen deze story op de docs-pagina.
      story: { inline: false, iframeHeight: 240 },
      description: {
        story: `Een geordende lijst met vergrote tekstafstand, zoals bezoekers dit zelf kunnen instellen om tekst beter leesbaar te maken. De nummers en de tekst overlappen niet en er gaat geen content verloren.

De tekstafstand is vergroot volgens [WCAG Succescriterium 1.4.12 Tekstafstand](https://nldesignsystem.nl/wcag/1.4.12/):

- Regelafstand: minimaal 150% van de lettergrootte
- Letterafstand: minimaal 12% van de lettergrootte
- Woordafstand: minimaal 16% van de lettergrootte`,
      },
    },
  },
};

// Original: Ordered List met tekst vergroot naar 200%
export const OrderedList200PercentZoom: Story = {
  name: 'Ordered List met tekst vergroot naar 200%',
  decorators: [UserPreference2rem],
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden</OrderedListItem>
      <OrderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort
      </OrderedListItem>
      <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      // De decorator zet stijlen op `:root`; in een eigen iframe blijven die binnen deze story op de docs-pagina.
      story: { inline: false, iframeHeight: 240 },
      description: {
        story:
          'Een geordende lijst waarvan de tekst 200% vergroot is, zoals een bezoeker dat kan instellen als standaard lettergrootte in de browser. De nummers groeien mee met de tekst en de inspringing groeit mee, zodat de nummers niet over de tekst heen vallen. Er gaat geen content verloren en er hoeft niet horizontaal gescrold te worden om de tekst te kunnen lezen.',
      },
    },
  },
};

// Original: Ordered List in Forced Colors modus
export const OrderedListForcedColors: Story = {
  name: 'Ordered List in Forced Colors modus',
  globals: { forcedColors: 'active' },
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden</OrderedListItem>
      <OrderedListItem>Je oude paspoort</OrderedListItem>
      <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst in forced colors modus. Forced colors is een instelling waarbij het besturingssysteem van de bezoeker een eigen kleurenschema afdwingt op alle content, bijvoorbeeld voor mensen met een visuele beperking die veel baat hebben bij hoog contrast. De nummers en de tekst van de lijst krijgen allebei de tekstkleur van dat kleurenschema, zodat ze goed zichtbaar blijven.',
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
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>
        Doet u uw aanvraag op een werkdag voor 14.00 uur? U kunt uw paspoort of ID-kaart de werkdag na uw aanvraag
        ophalen vanaf 12.00 uur.
      </OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst bestaande uit één item. Ook met één item wordt de lijst als lijst herkend door screenreaders en krijgt het item het nummer 1.',
      },
    },
  },
};

// Original: Ordered List met zeer veel list items (meer dan geadviseerde 3)
export const OrderedListSoManyItems: Story = {
  name: 'Ordered List met zeer veel items',
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>Amsterdam</OrderedListItem>
      <OrderedListItem>Rotterdam</OrderedListItem>
      <OrderedListItem>Den Haag</OrderedListItem>
      <OrderedListItem>Utrecht</OrderedListItem>
      <OrderedListItem>Eindhoven</OrderedListItem>
      <OrderedListItem>Groningen</OrderedListItem>
      <OrderedListItem>Tilburg</OrderedListItem>
      <OrderedListItem>Almere</OrderedListItem>
      <OrderedListItem>Breda</OrderedListItem>
      <OrderedListItem>Nijmegen</OrderedListItem>
      <OrderedListItem>Apeldoorn</OrderedListItem>
      <OrderedListItem>Haarlem</OrderedListItem>
      <OrderedListItem>Arnhem</OrderedListItem>
      <OrderedListItem>Enschede</OrderedListItem>
      <OrderedListItem>Haarlemmermeer</OrderedListItem>
      <OrderedListItem>Amersfoort</OrderedListItem>
      <OrderedListItem>Zaanstad</OrderedListItem>
      <OrderedListItem>&apos;s-Hertogenbosch</OrderedListItem>
      <OrderedListItem>Zwolle</OrderedListItem>
      <OrderedListItem>Leiden</OrderedListItem>
      <OrderedListItem>Zoetermeer</OrderedListItem>
      <OrderedListItem>Leeuwarden</OrderedListItem>
      <OrderedListItem>Ede</OrderedListItem>
      <OrderedListItem>Maastricht</OrderedListItem>
      <OrderedListItem>Dordrecht</OrderedListItem>
      <OrderedListItem>Westland</OrderedListItem>
      <OrderedListItem>Alphen aan den Rijn</OrderedListItem>
      <OrderedListItem>Alkmaar</OrderedListItem>
      <OrderedListItem>Emmen</OrderedListItem>
      <OrderedListItem>Delft</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst bestaande uit 30 items. Ook met heel veel items blijft de opmaak goed toegepast: de nummers met twee cijfers passen in de inspringing en de tekst van alle items begint op dezelfde plek. Screenreadergebruikers horen dat de lijst 30 items bevat.',
      },
    },
  },
};

// Original: Ordered List op een breed scherm (in tegenstelling tot de mobiele test)
export const OrderedListVeryLargeScreen: Story = {
  name: 'Ordered List op breed scherm',
  globals: { viewport: { value: 'desktop' } },
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden</OrderedListItem>
      <OrderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort
      </OrderedListItem>
      <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst, weergegeven op een heel breed scherm (1920 pixels). Ook op een breed scherm wordt de opmaak goed toegepast: de nummers blijven dicht bij de tekst staan en de inspringing wordt niet breder.',
      },
    },
  },
};

// Original: Ordered List met Link in list items (ie een soort Link List? is dat een goed idee? nav component icm andere componenten)
export const OrderedListLinkInItem: Story = {
  name: 'Ordered List met NL Link-componenten',
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>
        <Link href="https://example.com/afspraak">Maak een afspraak</Link>
      </OrderedListItem>
      <OrderedListItem>
        <Link href="https://example.com/formulier">Vul het aanvraagformulier in</Link>
      </OrderedListItem>
      <OrderedListItem>
        <Link href="https://example.com/ophalen">Haal je paspoort op</Link>
      </OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst waarin elk item een link bevat. De nummers zelf zijn geen onderdeel van de link en niet klikbaar. Toetsenbordgebruikers gaan met de Tab-toets van link naar link, in de volgorde van de lijst; de lijst zelf krijgt geen focus.',
      },
    },
  },
};

// Original: Ordered List met tabel in een list item (is dat een goed idee? nav component icm andere componenten / uitgebreide use cases)
export const OrderedListTableInItem: Story = {
  name: 'Ordered List met tabel',
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>Kies het reisdocument dat je wilt aanvragen</OrderedListItem>
      <OrderedListItem>
        Controleer hoe lang het document geldig is:
        <table>
          <caption>Geldigheid van reisdocumenten</caption>
          <thead>
            <tr>
              <th scope="col">Reisdocument</th>
              <th scope="col">Geldig</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Paspoort, 18 jaar of ouder</th>
              <td>10 jaar</td>
            </tr>
            <tr>
              <th scope="row">Paspoort, jonger dan 18 jaar</th>
              <td>5 jaar</td>
            </tr>
            <tr>
              <th scope="row">Identiteitskaart, 18 jaar of ouder</th>
              <td>10 jaar</td>
            </tr>
          </tbody>
        </table>
      </OrderedListItem>
      <OrderedListItem>Maak een afspraak</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst waarin een van de items een tabel bevat. De tabel staat onder de tekst van het item en springt mee in, zodat duidelijk is dat de tabel bij dat item hoort. Screenreadergebruikers horen de tabel met haar bijschrift binnen het tweede item.',
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
  render: (args) => (
    <OrderedList {...args} reversed start={10}>
      <OrderedListItem>Vis op wielen</OrderedListItem>
      <OrderedListItem>Licht Piramide</OrderedListItem>
      <OrderedListItem>Berm</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met een aflopende nummering en een aangepast startnummer. De nummering begint bij 10 en loopt af naar 8, zodat de lijst kan aansluiten op een vorige pagina met resultaten.',
      },
    },
  },
};

// Original: Ordered List met type="A" en start
export const OrderedListUpperCaseAlphabeticAndStart: Story = {
  name: 'Ordered List met HTML-attributen type="A" en start',
  render: (args) => (
    <OrderedList {...args} type="A" start={4}>
      <OrderedListItem>Aanvraag indienen</OrderedListItem>
      <OrderedListItem>Documenten uploaden</OrderedListItem>
      <OrderedListItem>Bevestiging afwachten</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met hoofdletters als nummering. Omdat het startgetal 4 is, begint de lijst met D en loopt door tot F.',
      },
    },
  },
};

// Original: Ordered List met lang="ar" en reversed
export const OrderedListLangArabicReversed: Story = {
  name: 'Ordered List met HTML-attributen lang="ar" en reversed',
  render: (args) => (
    <OrderedList {...args} lang="ar" dir="rtl" reversed>
      <OrderedListItem>تحميل المستندات</OrderedListItem>
      <OrderedListItem>تقديم الطلب</OrderedListItem>
      <OrderedListItem>انتظار التأكيد</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst met Arabische tekst, die is geordend met Arabisch-Indische cijfers en afloopt in plaats van oploopt (٣, ٢, ١). De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut `lang="ar"`, de schrijfrichting via het HTML-attribuut `dir="rtl"`. De richting van de ordening wordt omgedraaid met het HTML-attribuut `reversed`.',
      },
    },
  },
};

// Original: Eentje met CSS reset voor alles
export const OrderedListCssResetFull: Story = {
  name: 'Ordered List met CSS reset op component en thema',
  decorators: [CandidateDisableCssDecorator],
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden</OrderedListItem>
      <OrderedListItem>Je oude paspoort</OrderedListItem>
      <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst waarin de styling van de component en het thema niet worden toegepast. De browser toont de lijst met zijn eigen lettertype, nummers en inspringing. De combinatie van de HTML en de browser styling houdt de lijst visueel bruikbaar en toegankelijk.',
      },
    },
  },
};

// Original: Eentje met CSS reset voor de Component
export const OrderedListCssResetComponent: Story = {
  name: 'Ordered List met CSS reset op component',
  render: () => (
    <ol role="list">
      <li>Paspoortfoto, niet ouder dan 6 maanden</li>
      <li>Je oude paspoort</li>
      <li>Je afspraakbevestiging</li>
    </ol>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst zonder de CSS classes van de component, binnen een pagina waarop het thema wel actief is. Het thema levert alleen design tokens; zonder component classes gebruikt de lijst die niet, dus de lijst krijgt het lettertype, de nummers en de inspringing van de browser. De combinatie van de HTML en de browser styling houdt de lijst visueel bruikbaar en toegankelijk.',
      },
    },
  },
};

// Original: Wel de component CSS maar niet de thema CSS.
export const OrderedListCssResetTheme: Story = {
  name: 'Ordered List met CSS reset op thema',
  globals: { storyRootClassname: '' },
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden</OrderedListItem>
      <OrderedListItem>Je oude paspoort</OrderedListItem>
      <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst waarin de styling van de component wel wordt toegepast, maar de styling van het thema niet. De combinatie van de HTML, de browser styling en de component styling houdt de lijst visueel bruikbaar en toegankelijk.',
      },
    },
  },
};

// Original: Eentje waar alle CSS naar een invalid value word gezet, wat betekent dat user-agent dan ook niet meer lekker gaat.
export const OrderedListInvalidCssValues: Story = {
  name: 'Ordered List met ongeldige CSS voor alle properties',
  decorators: [
    createCustomPropertiesDecorator({
      '--nl-ordered-list-color': '10px',
      '--nl-ordered-list-font-family': '10px',
      '--nl-ordered-list-font-size': 'red',
      '--nl-ordered-list-item-margin-block-end': 'red',
      '--nl-ordered-list-item-margin-block-start': 'red',
      '--nl-ordered-list-item-padding-inline-start': 'red',
      '--nl-ordered-list-line-height': 'red',
      '--nl-ordered-list-margin-block-end': 'red',
      '--nl-ordered-list-margin-block-start': 'red',
      '--nl-ordered-list-marker-color': '10px',
      '--nl-ordered-list-padding-inline-start': 'red',
    }),
  ],
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden</OrderedListItem>
      <OrderedListItem>Je oude paspoort</OrderedListItem>
      <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
    </OrderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een geordende lijst waarvan alle design tokens een ongeldige waarde hebben, bijvoorbeeld een kleur van `10px` of een inspringing van `red`. De browser negeert die waarden en valt terug op de overgeërfde of standaardwaarde van elke eigenschap. De lijst blijft visueel bruikbaar en toegankelijk.',
      },
    },
  },
};
