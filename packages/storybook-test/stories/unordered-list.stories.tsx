import { CandidateCenteredDecorator } from '@nl-design-system-candidate/storybook-shared/src/CandidateCenteredDecorator';
import { createCustomPropertiesDecorator } from '@nl-design-system-candidate/storybook-shared/src/CustomPropertiesDecorator';
import { CandidateDisableCssDecorator } from '@nl-design-system-candidate/storybook-shared/src/CandidateDisableCssDecorator';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import { IconAlertCircle, IconCheck, IconPointFilled, IconX } from '@tabler/icons-react';
import '../../components-css/icon-css/src/icon.scss';
import '../../components-css/link-css/src/html/link.scss';
import '../../components-css/link-css/src/link.scss';
import '../../components-css/paragraph-css/src/html/paragraph.scss';
import '../../components-css/paragraph-css/src/paragraph.scss';
import '../../components-css/unordered-list-css/src/html/unordered-list.scss';
import '../../components-css/unordered-list-css/src/unordered-list.scss';
import { Icon } from '../../components-react/icon-react/src/icon';
import { Link } from '../../components-react/link-react/src/link';
import { Paragraph } from '../../components-react/paragraph-react/src/paragraph';
import packageJSON from '../../components-react/unordered-list-react/package.json';
import { UnorderedList, UnorderedListItem } from '../../components-react/unordered-list-react/src/unordered-list';
import componentMarkdown from '../../docs/unordered-list-docs/docs/component.md?raw';
import reactMeta from '../../docs/unordered-list-docs/stories/unordered-list.react.meta';
import tokens from '../../tokens/unordered-list-tokens/tokens.json';
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
    component: UnorderedList,
    subcomponents: { UnorderedListItem },
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
  }),
  title: 'Componenten/Unordered List',
} satisfies Meta<typeof UnorderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

// <ul class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item">Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.</li>
//   <li class="nl-unordered-list__item">Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.</li>
//   <li class="nl-unordered-list__item">Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</li>
// </ul>
// Original: Unordered List
export const UnorderedListDefault: Story = {
  name: 'Unordered List',
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
      </UnorderedListItem>
      <UnorderedListItem>
        Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
      </UnorderedListItem>
      <UnorderedListItem>Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met drie items. Elk item krijgt een bolletje als marker. De lijst is visueel herkenbaar als een ongeordende lijst en screenreadergebruikers horen dat het een lijst met drie items is.',
      },
    },
  },
};

// <ul class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item">
//     Verzamel de benodigde documenten
//     <ul class="nl-unordered-list" role="list">
//       <li class="nl-unordered-list__item">Geldig identiteitsbewijs</li>
//       <li class="nl-unordered-list__item">Bewijs van inschrijving</li>
//     </ul>
//   </li>
//   <li class="nl-unordered-list__item">Dien de aanvraag in</li>
// </ul>
// Original: Unordered List met geneste Unordered List
export const UnorderedListNestedUnorderedList: Story = {
  name: 'Unordered List met geneste Unordered List',
  args: {},
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>
        Verzamel de benodigde documenten
        <UnorderedList role="list">
          <UnorderedListItem>Geldig identiteitsbewijs</UnorderedListItem>
          <UnorderedListItem>Bewijs van inschrijving</UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>
      <UnorderedListItem>Dien de aanvraag in</UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met een ongeordende geneste lijst in een van de items. De geneste lijst krijgt een andere marker dan de lijst daarboven en is visueel ingesprongen vergeleken met het item daarboven, zodat de verschillende niveaus goed te onderscheiden zijn.',
      },
    },
  },
};

// <ul class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item">
//     Wilt u het document op kantoor ophalen? Maak dan een afspraak:
//     <ol role="list">
//       <li>Geef je keuze aan voor de afspraak.</li>
//       <li>Kies een datum en tijd.</li>
//     </ol>
//   </li>
//   <li class="nl-unordered-list__item">U kunt het document ook laten bezorgen. Is uw paspoort of ID-kaart gestolen? Dan kan het ophalen langer duren.</li>
// </ul>
// Original: Unordered List met geneste Ordered List
export const UnorderedListNestedOrderedList: Story = {
  name: 'Unordered List met geneste Ordered List',
  args: {},
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>
        Wilt u het document op kantoor ophalen? Maak dan een afspraak:
        <ol role="list">
          <li>Geef je keuze aan voor de afspraak.</li>
          <li>Kies een datum en tijd.</li>
        </ol>
      </UnorderedListItem>
      <UnorderedListItem>
        U kunt het document ook laten bezorgen. Is uw paspoort of ID-kaart gestolen? Dan kan het ophalen langer duren.
      </UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met een geordende geneste lijst in een van de items. De geordende lijst krijgt nummers in plaats van bolletjes als markers en is visueel ingesprongen vergeleken met het item daarboven, zodat de verschillende niveaus goed te onderscheiden zijn.',
      },
    },
  },
};

// <ul class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item">
//     Dit neemt u mee naar de afspraak:
//     <ul class="nl-unordered-list" role="list">
//       <li class="nl-unordered-list__item">
//         Alle reisdocumenten die u nu hebt, ook als ze zijn verlopen.
//         <ul class="nl-unordered-list" role="list">
//           <li class="nl-unordered-list__item">Paspoort.</li>
//           <li class="nl-unordered-list__item">ID-kaart.</li>
//         </ul>
//       </li>
//       <li class="nl-unordered-list__item">Een kleurenpasfoto die voldoet aan de eisen voor pasfoto’s. De goedgelijkende pasfoto mag maximaal 6 maanden oud zijn op het moment van de aanvraag.</li>
//       <li class="nl-unordered-list__item">Een bankpas of contant geld. U betaalt direct bij de aanvraag aan de balie.</li>
//     </ul>
//   </li>
// </ul>
// Original: Unordered List met minimaal drie niveaus nesting, met documentatie over hoe en wat
export const UnorderedListThreeLevelsNesting: Story = {
  name: 'Unordered List van drie niveaus',
  args: {},
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>
        Dit neemt u mee naar de afspraak:
        <UnorderedList role="list">
          <UnorderedListItem>
            Alle reisdocumenten die u nu hebt, ook als ze zijn verlopen.
            <UnorderedList role="list">
              <UnorderedListItem>Paspoort.</UnorderedListItem>
              <UnorderedListItem>ID-kaart.</UnorderedListItem>
            </UnorderedList>
          </UnorderedListItem>
          <UnorderedListItem>
            Een kleurenpasfoto die voldoet aan de eisen voor pasfoto’s. De goedgelijkende pasfoto mag maximaal 6 maanden
            oud zijn op het moment van de aanvraag.
          </UnorderedListItem>
          <UnorderedListItem>
            Een bankpas of contant geld. U betaalt direct bij de aanvraag aan de balie.
          </UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met drie niveaus. Elk niveau heeft een ander leesteken als marker en is visueel ingesprongen vergeleken met het item daarboven, zodat de verschillende niveaus goed te onderscheiden zijn.',
      },
    },
  },
};

// <ul class="nl-unordered-list" role="list" lang="ar" dir="rtl">
//   <li class="nl-unordered-list__item">تحميل المستندات</li>
//   <li class="nl-unordered-list__item">تقديم الطلب</li>
//   <li class="nl-unordered-list__item">انتظار التأكيد</li>
// </ul>
// Combined with "Unordered List met HTML `dir` attribuut" due to feedback https://github.com/nl-design-system/candidate/pull/1411#discussion_r4106782830
export const UnorderedListLangDir: Story = {
  name: 'Unordered List met taal ingesteld via HTML-attribuut lang="ar" en schrijfrichting via HTML-attribuut dir="rtl"',
  globals: { lang: 'ar', dir: 'rtl' },
  args: {},
  render: (args) => (
    <UnorderedList {...args} lang="ar" dir="rtl">
      <UnorderedListItem>تحميل المستندات</UnorderedListItem>
      <UnorderedListItem>تقديم الطلب</UnorderedListItem>
      <UnorderedListItem>انتظار التأكيد</UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst die rechts-naar-links wordt weergegeven met Arabische tekst.

De schrijfrichting is ingesteld via het HTML-attribuut \`dir="rtl"\`. De leestekens staan aan de rechterkant en de tekst loopt van rechts naar links.

De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut \`lang="ar"\`.`,
      },
    },
  },
};

// <html lang="ar" dir="rtl">
// <ul class="nl-unordered-list" role="list">
//  <li class="nl-unordered-list__item">تحميل المستندات</li>
//  <li class="nl-unordered-list__item">تقديم الطلب</li>
//  <li class="nl-unordered-list__item">انتظار التأكيد</li>
// </ul>
// </html>
// Ontwikkelfase notitie: de html lang/dir is gezet via de globals in de story
// Original: Unordered List met Arabische tekst waarbij `lang` en `dir` alleen op de `html` staan
export const UnorderedListLangDirOnHTML: Story = {
  name: 'Unordered List met Arabische tekst waarbij HTML-attributen lang en dir alleen op HTML-element html staat',
  globals: { lang: 'ar', dir: 'rtl' },
  args: {},
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>تحميل المستندات</UnorderedListItem>
      <UnorderedListItem>تقديم الطلب</UnorderedListItem>
      <UnorderedListItem>انتظار التأكيد</UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst die rechts-naar-links wordt weergegeven met Arabische tekst.

De schrijfrichting is ingesteld via het HTML-attribuut \`dir="rtl"\` op het HTML-element \`html\`. De leestekens staan aan de rechterkant en de tekst loopt van rechts naar links.

De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut \`lang="ar"\` op het HTML-element \`html\`.`,
      },
    },
  },
};

// <ul class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true">
//         <span class="nl-icon" aria-hidden="true"><svg class="tabler-icon tabler-icon-point-filled">...</svg></span>
//       </span>
//     </span>
//     Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
//   </li>
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true">
//         <span class="nl-icon" aria-hidden="true"><svg class="tabler-icon tabler-icon-point-filled">...</svg></span>
//       </span>
//     </span>
//     Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
//   </li>
// </ul>
// Original: Unordered List met Custom Marker zonder toegankelijke tekst
export const UnorderedListCustomMarkerNoLabel: Story = {
  name: 'Unordered List met Custom Marker zonder toegankelijke tekst die visueel verborgen is',
  args: {},
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem
        marker={
          <Icon>
            <IconPointFilled />
          </Icon>
        }
      >
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
      </UnorderedListItem>
      <UnorderedListItem
        marker={
          <Icon>
            <IconPointFilled />
          </Icon>
        }
      >
        Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
      </UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst met een icoon als marker. Het icoon is verborgen voor hulpsoftware. Het icoon is decoratief, dus er is geen betekenis van de marker die aan screenreadergebruikers aangeboden hoeft te worden.`,
      },
    },
  },
};

// <ul class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true">
//         <span class="nl-icon" aria-hidden="true"><svg class="tabler-icon tabler-icon-alert-circle">...</svg></span>
//       </span>
//       <span class="nl-unordered-list__marker-label">Let op. </span>
//     </span>
//     Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
//   </li>
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true">
//         <span class="nl-icon" aria-hidden="true"><svg class="tabler-icon tabler-icon-alert-circle">...</svg></span>
//       </span>
//       <span class="nl-unordered-list__marker-label">Let op. </span>
//     </span>
//     Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
//   </li>
// </ul>
// Original: Unordered List met custom marker en toegankelijke naam via markerLabel (nl-unordered-list__marker-label), met `aria-hidden="true"` op custom marker
export const UnorderedListCustomMarkerLabel: Story = {
  name: 'Unordered List met Custom Marker en toegankelijke tekst die visueel verborgen is',
  args: {},
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem
        marker={
          <Icon>
            <IconAlertCircle />
          </Icon>
        }
        markerLabel="Let op."
      >
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
      </UnorderedListItem>
      <UnorderedListItem
        marker={
          <Icon>
            <IconAlertCircle />
          </Icon>
        }
        markerLabel="Let op."
      >
        Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
      </UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst met een icoon als marker. Het icoon is verborgen voor hulpsoftware. De betekenis van de marker wordt aangeboden als visueel verborgen tekst welke wordt opgelezen voor screenreadergebruikers. De boodschap van de icoon is toegankelijk voor alle bezoekers.`,
      },
    },
  },
};

// <ul class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span class="nl-icon" role="img" aria-label="Voldaan."><svg class="tabler-icon tabler-icon-check">...</svg></span>
//     </span>
//     Minimaal 10 karakters lang.
//   </li>
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span class="nl-icon" role="img" aria-label="Niet voldaan."><svg class="tabler-icon tabler-icon-x">...</svg></span>
//     </span>
//     Minimaal één speciaal karakter.
//   </li>
// </ul>
// Ontwikkelfase notitie: geen visueel verborgen markerLabel, de alternatieve tekst staat op de Icon zelf via
// `role="img"` en `aria-label`.
// Ontwikkelfase notitie: UnorderedListMarker verpakt de marker nu nog altijd in `aria-hidden="true"`, waardoor de
// alternatieve tekst van de Icon niet bij hulpsoftware aankomt. Deze story beschrijft het verwachte gedrag; hetzelfde
// speelt bij de Ordered List.
// Original: Unordered List met Custom Marker met Informatieve Icon met alternatieve tekst
export const UnorderedListCustomMarkerInformativeIconAccessible: Story = {
  name: 'Unordered List met Custom Marker met informatieve icoon met alternatieve tekst',
  args: {},
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem
        marker={
          <Icon role="img" aria-label="Voldaan.">
            <IconCheck />
          </Icon>
        }
      >
        Minimaal 10 karakters lang.
      </UnorderedListItem>
      <UnorderedListItem
        marker={
          <Icon role="img" aria-label="Niet voldaan.">
            <IconX />
          </Icon>
        }
      >
        Minimaal één speciaal karakter.
      </UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met een icoon als marker. Het icoon is zichtbaar voor hulpsoftware en bevat zelf de tekst die de betekenis van de marker beschrijft. Deze tekst wordt door hulpsoftware gebruikt als alternatieve tekst van het icoon. De boodschap van het icoon is toegankelijk voor alle bezoekers.',
      },
    },
  },
};

// <ul class="nl-unordered-list" role="list" hidden>
//   <li class="nl-unordered-list__item">Paspoortfoto, niet ouder dan 6 maanden</li>
//   <li class="nl-unordered-list__item">Je oude paspoort</li>
//   <li class="nl-unordered-list__item">Je afspraakbevestiging</li>
// </ul>
// Original: Unordered List met HTML `hidden` attribuut
export const UnorderedListHidden: Story = {
  name: 'Unordered List verstopt via HTML-attribuut hidden',
  args: {},
  render: (args) => (
    <UnorderedList {...args} hidden>
      <UnorderedListItem>Paspoortfoto, niet ouder dan 6 maanden</UnorderedListItem>
      <UnorderedListItem>Je oude paspoort</UnorderedListItem>
      <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst die verborgen is voor bezoekers en voor screenreadergebruikers. De inhoud is aanwezig in de code, maar niet zichtbaar en niet voorleesbaar.',
      },
    },
  },
};

// <ul class="nl-unordered-list" role="list" lang="ar" dir="rtl">
//  <li class="nl-unordered-list__item">تحميل المستندات</li>
//  <li class="nl-unordered-list__item">تقديم الطلب</li>
//  <li class="nl-unordered-list__item">انتظار التأكيد</li>
// </ul>
// Original: Unordered List met Arabische tekst waarbij `dir` alleen op de `ul` staat
export const UnorderedListDirParentOnly: Story = {
  name: 'Unordered List met Arabische tekst waarbij HTML-attribuut dir alleen op HTML-element ul staat',
  render: (args) => (
    <UnorderedList {...args} lang="ar" dir="rtl">
      <UnorderedListItem>تحميل المستندات</UnorderedListItem>
      <UnorderedListItem>تقديم الطلب</UnorderedListItem>
      <UnorderedListItem>انتظار التأكيد</UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst met Arabische tekst, de markers staan aan de rechterkant en de tekst loopt van rechts naar links. De taal van de lijst wordt ingesteld op Arabisch via het HTML-attribuut `lang="ar"`. De schrijfrichting is ingesteld via het HTML-attribuut `dir="rtl"`.',
      },
    },
  },
};

// <div class="nl-html nl-html--all">
//   <ul role="list">
//     <li>Paspoortfoto, niet ouder dan 6 maanden</li>
//     <li>Je oude paspoort</li>
//     <li>Je afspraakbevestiging</li>
//   </ul>
// </div>
// Original: Unordered List binnen `nl-html--all`
// Let op: role="list" is nodig!
export const UnorderedListNLHTMLAll: Story = {
  name: 'Unordered List binnen `nl-html--all`',
  render: () => (
    <div className="nl-html nl-html--all">
      <ul role="list">
        <li>Paspoortfoto, niet ouder dan 6 maanden</li>
        <li>Je oude paspoort</li>
        <li>Je afspraakbevestiging</li>
      </ul>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst zonder classes binnen een NL HTML-component.

De styling wordt behouden door de NL HTML-component, deze past de styling van de NL Unordered List-component toe op alle \`ul\` HTML-elementen en onderliggende \`li\` HTML-elementen binnen een element met de \`nl-html--all\` class.

De semantiek wordt behouden door de HTML-attribuut \`role="list"\`.`,
      },
    },
  },
};

// <div class="nl-html nl-html--unordered-list">
//   <ul role="list">
//     <li>Paspoortfoto, niet ouder dan 6 maanden</li>
//     <li>Je oude paspoort</li>
//     <li>Je afspraakbevestiging</li>
//   </ul>
// </div>
// Original: Unordered List binnen `nl-html--unordered-list`
// Let op: role="list" is nodig!
export const UnorderedListNLHTMLUnorderedList: Story = {
  name: 'Unordered List binnen `nl-html--unordered-list`',
  render: () => (
    <div className="nl-html nl-html--unordered-list">
      <ul role="list">
        <li>Paspoortfoto, niet ouder dan 6 maanden</li>
        <li>Je oude paspoort</li>
        <li>Je afspraakbevestiging</li>
      </ul>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst zonder classes binnen een NL HTML-component.

De styling wordt behouden door de NL HTML-component, deze past de styling van de NL Unordered List-component toe op alle \`ul\` HTML-elementen en onderliggende \`li\` HTML-elementen binnen een element met de \`nl-html--unordered-list\` class.

De semantiek wordt behouden door de HTML-attribuut \`role="list"\`.`,
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
export const UnorderedListAlternativeHTMLDivs: Story = {
  name: 'Unordered List opgebouwd met HTML-elementen div',
  render: () => (
    <div className="nl-unordered-list" role="list">
      <div className="nl-unordered-list__item" role="listitem">
        Paspoortfoto, niet ouder dan 6 maanden
      </div>
      <div className="nl-unordered-list__item" role="listitem">
        Je oude paspoort
      </div>
      <div className="nl-unordered-list__item" role="listitem">
        Je afspraakbevestiging
      </div>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst opgemaakt met meerdere HTML-elementen `div`. Deze elementen hebben niet de juiste semantiek voor een lijst met items, de HTML-attributen `role="list"` en `role="listitem"` worden gebruikt om de semantiek toe te voegen. Screenreadergebruikers krijgen daardoor de juiste informatie: een lijst met drie items. Visueel staan de items onder elkaar en krijgen ze de typografie en inspringing van de component, maar zonder bolletjes. Alleen de HTML-elementen `ul` en `li` krijgen bolletjes van de browser.',
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
export const UnorderedListAlternativeHTMLSpans: Story = {
  name: 'Unordered List opgebouwd met HTML-elementen span',
  render: () => (
    <span className="nl-unordered-list" role="list">
      <span className="nl-unordered-list__item" role="listitem">
        Paspoortfoto, niet ouder dan 6 maanden
      </span>
      <span className="nl-unordered-list__item" role="listitem">
        Je oude paspoort
      </span>
      <span className="nl-unordered-list__item" role="listitem">
        Je afspraakbevestiging
      </span>
    </span>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst opgemaakt met meerdere HTML-elementen `span`. Deze elementen hebben niet de juiste semantiek voor een lijst met items, de HTML-attributen `role="list"` en `role="listitem"` worden gebruikt om de semantiek toe te voegen. Screenreadergebruikers krijgen daardoor de juiste informatie: een lijst met drie items. Visueel ziet het er niet uit als een lijst: de items lopen zonder bolletjes achter elkaar door als één doorlopende tekst, omdat het HTML-element `span` een inline element is. Alleen de HTML-elementen `ul` en `li` krijgen bolletjes van de browser.',
      },
    },
  },
};

// Original: Unordered List met paragraphs (`p`) in list items
export const UnorderedListHTMLParagraphsInListItem: Story = {
  name: 'Unordered List met HTML-elementen p',
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>
        Paspoortfoto, niet ouder dan 6 maanden
        <p>Je oude paspoort</p>
        <p>Je afspraakbevestiging</p>
      </UnorderedListItem>
      <UnorderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort
      </UnorderedListItem>
      <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst waarvan het eerste item begint met platte tekst, gevolgd door twee alinea's in HTML-elementen \`p\`. De alinea's staan recht onder de tekst van het item, niet onder het bolletje. De witruimte tussen de alinea's komt uit de alinea-witruimte van het thema. Screenreadergebruikers horen een lijst met drie items, waarbij beide alinea's bij het eerste item horen.`,
      },
    },
  },
};

// Original: Unordered List met NL Paragraph in list item
export const UnorderedListNLParagraphsInListItem: Story = {
  name: 'Unordered List met NL Paragraph-componenten',
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>
        Paspoortfoto, niet ouder dan 6 maanden
        <Paragraph>Je oude paspoort</Paragraph>
        <Paragraph>Je afspraakbevestiging</Paragraph>
      </UnorderedListItem>
      <UnorderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort
      </UnorderedListItem>
      <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Een ongeordende lijst waarvan het eerste item begint met platte tekst, gevolgd door twee NL Paragraph-componenten. De alinea's staan recht onder de tekst van het item, niet onder het bolletje. De witruimte tussen de alinea's komt uit de alinea-witruimte van het thema. Screenreadergebruikers horen een lijst met drie items, waarbij beide alinea's bij het eerste item horen.",
      },
    },
  },
};

// Original: Unordered List in een column layout
export const UnorderedListColumnLayout: Story = {
  name: 'Unordered List in column layout',
  render: (args) => (
    <div style={{ columns: 2 }}>
      <UnorderedList {...args}>
        <UnorderedListItem>Paspoortfoto, niet ouder dan 6 maanden</UnorderedListItem>
        <UnorderedListItem>Je oude paspoort</UnorderedListItem>
        <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
        <UnorderedListItem>
          Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort
        </UnorderedListItem>
        <UnorderedListItem>Een bankpas of contant geld</UnorderedListItem>
        <UnorderedListItem>Een kleurenpasfoto</UnorderedListItem>
        <UnorderedListItem>Een uittreksel uit de Basisregistratie Personen</UnorderedListItem>
        <UnorderedListItem>Een machtiging</UnorderedListItem>
      </UnorderedList>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst verdeeld over meerdere kolommen. De items worden van boven naar beneden gevuld en gaan door in de volgende kolom. De logische volgorde van de items blijft onveranderd.',
      },
    },
  },
};

// Original: Unordered List met een lang list item dat doorloopt naar een volgende kolom
export const UnorderedListLongItemAcrossColumns: Story = {
  name: 'Unordered List met lange items welke doorlopen naar volgende kolom',
  render: (args) => (
    <div style={{ columns: 2, width: '300px' }}>
      <UnorderedList {...args}>
        <UnorderedListItem>
          Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort en moeten zelf aanwezig
          zijn bij zowel het aanvragen als het ophalen
        </UnorderedListItem>
        <UnorderedListItem>Je oude paspoort</UnorderedListItem>
        <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
      </UnorderedList>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst verdeeld over meerdere kolommen. De tekst van een item loopt door in de volgende kolom. De marker van het item blijft in de eerste kolom staan.',
      },
    },
  },
};

// Original: Unordered List met horizontaal scrollen op een klein scherm (mock mobiel) - hier zijn meerdere geneste niveaus nodig om te laten zien dat scrollen dan beter is dan wrappen omdat er anders maar een paar letters per regel blijven staan
export const UnorderedListHorizontalScrollMobile: Story = {
  name: 'Unordered List met horizontaal scrollen op klein scherm',
  decorators: [
    (Story) => (
      <div
        className="example-scroll-container"
        role="region"
        aria-label="Benodigdheden paspoortaanvraag"
        tabIndex={0}
        style={{ overflowX: 'auto' }}
      >
        <style>{'.example-scroll-container .nl-unordered-list__item { min-inline-size: 20ch; }'}</style>
        <Story />
      </div>
    ),
  ],
  globals: { viewport: { value: 'phone' } },
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>
        Reisdocumenten
        <UnorderedList role="list">
          <UnorderedListItem>
            Nederlandse reisdocumenten
            <UnorderedList role="list">
              <UnorderedListItem>
                Paspoorten
                <UnorderedList role="list">
                  <UnorderedListItem>
                    Nationaal paspoort
                    <UnorderedList role="list">
                      <UnorderedListItem>
                        Paspoort voor volwassenen
                        <UnorderedList role="list">
                          <UnorderedListItem>Paspoort met 34 pagina&apos;s</UnorderedListItem>
                          <UnorderedListItem>Zakenpaspoort met 66 pagina&apos;s</UnorderedListItem>
                        </UnorderedList>
                      </UnorderedListItem>
                      <UnorderedListItem>Paspoort voor kinderen</UnorderedListItem>
                    </UnorderedList>
                  </UnorderedListItem>
                </UnorderedList>
              </UnorderedListItem>
            </UnorderedList>
          </UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>
      <UnorderedListItem>Rijbewijzen</UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst met zes niveaus, weergegeven op een mobiel scherm. Elk niveau springt verder in, waardoor er op het diepste niveau maar weinig ruimte overblijft. In plaats van dat de tekst daar wordt afgebroken tot een paar letters per regel, krijgt elke regel minimaal ruimte voor ongeveer 20 tekens en kan de bezoeker de lijst horizontaal scrollen om de volledige breedte te bekijken.

Toetsenbordgebruikers kunnen het scrollgebied bereiken met de Tab-toets en daarna scrollen met de pijltjestoetsen. Screenreadergebruikers horen het gebied als "Benodigdheden paspoortaanvraag" en daarna de lijst met de items.`,
      },
    },
  },
};

// <div class="nl-html nl-html--all">
//   <ul role="list">
//     <li>Paspoortfoto, niet ouder dan 6 maanden</li>
//     <li>
//       Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
//       <p>Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</p>
//     </li>
//     <li>Je afspraakbevestiging</li>
//   </ul>
// </div>
// Original: Story voor Rich Text Editors met `p`: Multiline vanuit Rich Text Editor
export const UnorderedListRichTextEditorParagraph: Story = {
  name: 'Unordered List in Rich Text Editor met HTML-elementen p',
  render: () => (
    <div className="nl-html nl-html--all">
      <ul role="list">
        <li>Paspoortfoto, niet ouder dan 6 maanden</li>
        <li>
          Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
          <p>Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</p>
        </li>
        <li>Je afspraakbevestiging</li>
      </ul>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst zoals een Rich Text Editor die kan opslaan, zonder CSS classes binnen een element met de `nl-html--all` class. Het tweede item begint met platte tekst; na het indrukken van Enter volgt een alinea in het HTML-element `p`. De alinea staat recht onder de tekst van het item, niet onder het bolletje. De witruimte boven en onder de alinea komt uit de alinea-witruimte van het thema; is die 0, dan sluit de alinea direct aan op de tekst ervoor en op het volgende item. Screenreadergebruikers horen een lijst met drie items, waarbij de alinea bij het tweede item hoort.',
      },
    },
  },
};

// <div class="nl-html nl-html--all">
//   <ul role="list">
//     <li>Paspoortfoto, niet ouder dan 6 maanden</li>
//     <li>
//       Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
//       <p class="nl-paragraph">Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</p>
//     </li>
//     <li>Je afspraakbevestiging</li>
//   </ul>
// </div>
// Original: Story voor Rich Text Editors met NL Paragraph - zelfde als bovenstaande maar dan met NL Paragraph component
export const UnorderedListRichTextEditorNLParagraph: Story = {
  name: 'Unordered List in Rich Text Editor met NL Paragraph-componenten',
  render: () => (
    <div className="nl-html nl-html--all">
      <ul role="list">
        <li>Paspoortfoto, niet ouder dan 6 maanden</li>
        <li>
          Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
          <Paragraph>Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</Paragraph>
        </li>
        <li>Je afspraakbevestiging</li>
      </ul>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst zoals een Rich Text Editor die kan opslaan, zonder CSS classes binnen een element met de `nl-html--all` class. Het tweede item begint met platte tekst; na het indrukken van Enter volgt een alinea als NL Paragraph-component. De alinea staat recht onder de tekst van het item, niet onder het bolletje. De witruimte boven en onder de alinea komt uit de alinea-witruimte van het thema; is die 0, dan sluit de alinea direct aan op de tekst ervoor en op het volgende item. Screenreadergebruikers horen een lijst met drie items, waarbij de alinea bij het tweede item hoort.',
      },
    },
  },
};

// <div class="nl-html nl-html--all">
//   <ul role="list">
//     <li>
//       Neem een geldig identiteitsbewijs mee
//       <ul role="list">
//         <li>Paspoort</li>
//         <li>Identiteitskaart</li>
//       </ul>
//     </li>
//     <li>Bekijk de <a href="https://example.com/pasfoto">eisen voor pasfoto's</a></li>
//     <li>
//       Maak een afspraak
//       <ol role="list">
//         <li>Kies een locatie</li>
//         <li>Kies een datum en tijd</li>
//       </ol>
//     </li>
//   </ul>
// </div>
// Original: Stories voor Rich Text Editors: textnode met nested lijst, textnode met link, etc (voorafgaand aan stories schrijven even bepalen welke combinaties we hierin willen meenemen)
export const UnorderedListRichTextEditorNested: Story = {
  name: 'Unordered List in Rich Text Editor met meerdere niveaus',
  render: () => (
    <div className="nl-html nl-html--all">
      <ul role="list">
        <li>
          Neem een geldig identiteitsbewijs mee
          <ul role="list">
            <li>Paspoort</li>
            <li>Identiteitskaart</li>
          </ul>
        </li>
        <li>
          Bekijk de <a href="https://example.com/pasfoto">eisen voor pasfoto&apos;s</a>
        </li>
        <li>
          Maak een afspraak
          <ol role="list">
            <li>Kies een locatie</li>
            <li>Kies een datum en tijd</li>
          </ol>
        </li>
      </ul>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst zoals een Rich Text Editor die kan opslaan, zonder CSS classes binnen een element met de `nl-html--all` class. Items beginnen met platte tekst, gevolgd door een geneste ongeordende lijst, een link of een geneste geordende lijst. De geneste lijsten springen in onder de tekst van hun item, de geneste ongeordende lijst krijgt een ander leesteken en de geordende lijst krijgt nummers, zodat de hiërarchie zichtbaar blijft. Screenreadergebruikers horen de geneste lijsten als lijsten binnen het bijbehorende item.',
      },
    },
  },
};

// NOTE: de CSS hiervoor is niet onderdeel van de CSS Component, het is een voorbeeld implementatie
// Original: Story voor het centreren van de Unordered List. Dit omdat dit beschikbaar is in community en we daar een oplossing voor moeten laten zien.
export const UnorderedListCentered: Story = {
  name: 'Unordered List gecentreerd',
  decorators: [CandidateCenteredDecorator],
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>Paspoortfoto, niet ouder dan 6 maanden</UnorderedListItem>
      <UnorderedListItem>Je oude paspoort</UnorderedListItem>
      <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een gecentreerde lijst. In plaats van links uitgelijnd, is de tekst in het midden uitgelijnd. Het bolletje staat direct voor de tekst van elk item, zodat duidelijk blijft welk bolletje bij welk item hoort. Screenreadergebruikers horen de lijst en de items, net als bij een links uitgelijnde lijst.',
      },
    },
  },
};

// Original: Unordered List met vergrote tekstafstand
export const UnorderedListIncreasedTextSpacing: Story = {
  name: 'Unordered List met vergrote tekstafstand',
  decorators: [LargeLetterSpacingDecorator, LargeWordSpacingDecorator, LargeLineHeightDecorator],
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>Paspoortfoto, niet ouder dan 6 maanden</UnorderedListItem>
      <UnorderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort
      </UnorderedListItem>
      <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      // De decorator zet stijlen op `:root`; in een eigen iframe blijven die binnen deze story op de docs-pagina.
      story: { inline: false, iframeHeight: 240 },
      description: {
        story: `Een ongeordende lijst met vergrote tekstafstand, zoals bezoekers dit zelf kunnen instellen om tekst beter leesbaar te maken. De markers en de tekst overlappen niet en er gaat geen content verloren.

De tekstafstand is vergroot volgens [WCAG Succescriterium 1.4.12 Tekstafstand](https://nldesignsystem.nl/wcag/1.4.12/):

- Regelafstand: minimaal 150% van de lettergrootte
- Letterafstand: minimaal 12% van de lettergrootte
- Woordafstand: minimaal 16% van de lettergrootte`,
      },
    },
  },
};

// Original: Unordered List met tekst vergroot naar 200%
export const UnorderedList200PercentZoom: Story = {
  name: 'Unordered List met tekst vergroot naar 200%',
  decorators: [UserPreference2rem],
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>Paspoortfoto, niet ouder dan 6 maanden</UnorderedListItem>
      <UnorderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort
      </UnorderedListItem>
      <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      // De decorator zet stijlen op `:root`; in een eigen iframe blijven die binnen deze story op de docs-pagina.
      story: { inline: false, iframeHeight: 240 },
      description: {
        story:
          'Een ongeordende lijst waarvan de tekst 200% vergroot is, zoals een bezoeker dat kan instellen als standaard lettergrootte in de browser. De markers groeien mee met de tekst en de inspringing groeit mee, zodat de markers niet over de tekst heen vallen. Er gaat geen content verloren en er hoeft niet horizontaal gescrold te worden om de tekst te kunnen lezen.',
      },
    },
  },
};

// Original: Unordered List in Forced Colors modus
export const UnorderedListForcedColors: Story = {
  name: 'Unordered List in Forced Colors modus',
  globals: { forcedColors: 'active' },
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>Paspoortfoto, niet ouder dan 6 maanden</UnorderedListItem>
      <UnorderedListItem>Je oude paspoort</UnorderedListItem>
      <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst in forced colors modus. Forced colors is een instelling waarbij het besturingssysteem van de bezoeker een eigen kleurenschema afdwingt op alle content, bijvoorbeeld voor mensen met een visuele beperking die veel baat hebben bij hoog contrast. De markers en de tekst van de lijst krijgen allebei de tekstkleur van dat kleurenschema, zodat ze goed zichtbaar blijven.',
      },
    },
  },
};

// <ul class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item">Doet u uw aanvraag op een werkdag voor 14.00 uur? U kunt uw paspoort of ID-kaart de werkdag na uw aanvraag ophalen vanaf 12.00 uur.</li>
// </ul>
// Original: Unordered List met 1 list item
export const UnorderedListOneItem: Story = {
  name: 'Unordered List met één item',
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>
        Doet u uw aanvraag op een werkdag voor 14.00 uur? U kunt uw paspoort of ID-kaart de werkdag na uw aanvraag
        ophalen vanaf 12.00 uur.
      </UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst bestaande uit één item. Ook met één item wordt de lijst als lijst herkend door screenreaders en krijgt het item een marker.',
      },
    },
  },
};

// Original: Unordered List met zeer veel list items (meer dan geadviseerde 3)
export const UnorderedListSoManyItems: Story = {
  name: 'Unordered List met zeer veel items',
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>Amsterdam</UnorderedListItem>
      <UnorderedListItem>Rotterdam</UnorderedListItem>
      <UnorderedListItem>Den Haag</UnorderedListItem>
      <UnorderedListItem>Utrecht</UnorderedListItem>
      <UnorderedListItem>Eindhoven</UnorderedListItem>
      <UnorderedListItem>Groningen</UnorderedListItem>
      <UnorderedListItem>Tilburg</UnorderedListItem>
      <UnorderedListItem>Almere</UnorderedListItem>
      <UnorderedListItem>Breda</UnorderedListItem>
      <UnorderedListItem>Nijmegen</UnorderedListItem>
      <UnorderedListItem>Apeldoorn</UnorderedListItem>
      <UnorderedListItem>Haarlem</UnorderedListItem>
      <UnorderedListItem>Arnhem</UnorderedListItem>
      <UnorderedListItem>Enschede</UnorderedListItem>
      <UnorderedListItem>Haarlemmermeer</UnorderedListItem>
      <UnorderedListItem>Amersfoort</UnorderedListItem>
      <UnorderedListItem>Zaanstad</UnorderedListItem>
      <UnorderedListItem>&apos;s-Hertogenbosch</UnorderedListItem>
      <UnorderedListItem>Zwolle</UnorderedListItem>
      <UnorderedListItem>Leiden</UnorderedListItem>
      <UnorderedListItem>Zoetermeer</UnorderedListItem>
      <UnorderedListItem>Leeuwarden</UnorderedListItem>
      <UnorderedListItem>Ede</UnorderedListItem>
      <UnorderedListItem>Maastricht</UnorderedListItem>
      <UnorderedListItem>Dordrecht</UnorderedListItem>
      <UnorderedListItem>Westland</UnorderedListItem>
      <UnorderedListItem>Alphen aan den Rijn</UnorderedListItem>
      <UnorderedListItem>Alkmaar</UnorderedListItem>
      <UnorderedListItem>Emmen</UnorderedListItem>
      <UnorderedListItem>Delft</UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst bestaande uit 30 items. Ook met heel veel items blijft de opmaak goed toegepast en begint de tekst van alle items op dezelfde plek. Screenreadergebruikers horen dat de lijst 30 items bevat.',
      },
    },
  },
};

// Original: Unordered List op een breed scherm (in tegenstelling tot de mobiele test)
export const UnorderedListVeryLargeScreen: Story = {
  name: 'Unordered List op breed scherm',
  globals: { viewport: { value: 'desktop' } },
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>Paspoortfoto, niet ouder dan 6 maanden</UnorderedListItem>
      <UnorderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een paspoort
      </UnorderedListItem>
      <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst, weergegeven op een heel breed scherm (1920 pixels). Ook op een breed scherm wordt de opmaak goed toegepast: de markers blijven dicht bij de tekst staan en de inspringing wordt niet breder.',
      },
    },
  },
};

// Original: Unordered List met Link in list items (ie een soort Link List? is dat een goed idee? nav component icm andere componenten)
export const UnorderedListLinkInItem: Story = {
  name: 'Unordered List met NL Link-componenten',
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>
        <Link href="https://example.com/paspoort">Paspoort aanvragen</Link>
      </UnorderedListItem>
      <UnorderedListItem>
        <Link href="https://example.com/id-kaart">ID-kaart aanvragen</Link>
      </UnorderedListItem>
      <UnorderedListItem>
        <Link href="https://example.com/rijbewijs">Rijbewijs verlengen</Link>
      </UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst waarin elk item een link bevat. De markers zelf zijn geen onderdeel van de link en niet klikbaar. Toetsenbordgebruikers gaan met de Tab-toets van link naar link, in de volgorde van de lijst; de lijst zelf krijgt geen focus.',
      },
    },
  },
};

// Original: Unordered List met tabel in een list item (is dat een goed idee? nav component icm andere componenten / uitgebreide use cases)
export const UnorderedListTableInItem: Story = {
  name: 'Unordered List met tabel',
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>Paspoortfoto, niet ouder dan 6 maanden</UnorderedListItem>
      <UnorderedListItem>
        Je oude reisdocument, als dat nog geldig is:
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
      </UnorderedListItem>
      <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst waarin een van de items een tabel bevat. De tabel staat onder de tekst van het item en springt mee in, zodat duidelijk is dat de tabel bij dat item hoort. Screenreadergebruikers horen de tabel met haar bijschrift binnen het tweede item.',
      },
    },
  },
};

// Original: Eentje met CSS reset voor alles
export const UnorderedListCssResetFull: Story = {
  name: 'Unordered List met CSS reset op component en thema',
  decorators: [CandidateDisableCssDecorator],
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>Paspoortfoto, niet ouder dan 6 maanden</UnorderedListItem>
      <UnorderedListItem>Je oude paspoort</UnorderedListItem>
      <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst waarin de styling van de component en het thema niet worden toegepast. De browser toont de lijst met zijn eigen lettertype, bolletjes en inspringing. De combinatie van de HTML en de browser styling houdt de lijst visueel bruikbaar en toegankelijk.',
      },
    },
  },
};

// Original: Eentje met CSS reset voor de Component
export const UnorderedListCssResetComponent: Story = {
  name: 'Unordered List met CSS reset op component',
  render: () => (
    <ul role="list">
      <li>Paspoortfoto, niet ouder dan 6 maanden</li>
      <li>Je oude paspoort</li>
      <li>Je afspraakbevestiging</li>
    </ul>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst zonder de CSS classes van de component, binnen een pagina waarop het thema wel actief is. Het thema levert alleen design tokens; zonder component classes gebruikt de lijst die niet, dus de lijst krijgt het lettertype, de bolletjes en de inspringing van de browser. De combinatie van de HTML en de browser styling houdt de lijst visueel bruikbaar en toegankelijk.',
      },
    },
  },
};

// Original: Wel de component CSS maar niet de thema CSS.
export const UnorderedListCssResetTheme: Story = {
  name: 'Unordered List met CSS reset op thema',
  globals: { storyRootClassname: '' },
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>Paspoortfoto, niet ouder dan 6 maanden</UnorderedListItem>
      <UnorderedListItem>Je oude paspoort</UnorderedListItem>
      <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
    </UnorderedList>
  ),
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
export const UnorderedListInvalidCssValues: Story = {
  name: 'Unordered List met ongeldige CSS voor alle properties',
  decorators: [
    createCustomPropertiesDecorator({
      '--nl-unordered-list-color': '10px',
      '--nl-unordered-list-font-family': '10px',
      '--nl-unordered-list-font-size': 'red',
      '--nl-unordered-list-item-margin-block-end': 'red',
      '--nl-unordered-list-item-margin-block-start': 'red',
      '--nl-unordered-list-item-padding-inline-start': 'red',
      '--nl-unordered-list-line-height': 'red',
      '--nl-unordered-list-margin-block-end': 'red',
      '--nl-unordered-list-margin-block-start': 'red',
      '--nl-unordered-list-marker-color': '10px',
      '--nl-unordered-list-padding-inline-start': 'red',
    }),
  ],
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>Paspoortfoto, niet ouder dan 6 maanden</UnorderedListItem>
      <UnorderedListItem>Je oude paspoort</UnorderedListItem>
      <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Een ongeordende lijst waarvan alle design tokens een ongeldige waarde hebben, bijvoorbeeld een kleur van `10px` of een inspringing van `red`. De browser negeert die waarden en valt terug op de overgeërfde of standaardwaarde van elke eigenschap. De lijst blijft visueel bruikbaar en toegankelijk.',
      },
    },
  },
};

// <style>
//   .nl-unordered-list--example-no-markers > .nl-unordered-list__item { list-style-type: ""; }
// </style>
// <ul class="nl-unordered-list nl-unordered-list--example-no-markers" role="list">
//   <li class="nl-unordered-list__item">Paspoortfoto, niet ouder dan 6 maanden</li>
//   <li class="nl-unordered-list__item">Je oude paspoort</li>
//   <li class="nl-unordered-list__item">Je afspraakbevestiging</li>
// </ul>
// NOTE: de CSS hiervoor is niet onderdeel van de CSS Component, het is een voorbeeld implementatie
// Original: Unordered List zonder markers (community implementatie)
export const UnorderedListNoMarkers: Story = {
  name: 'Unordered List zonder markers',
  decorators: [
    (Story) => (
      <>
        <style>{'.nl-unordered-list--example-no-markers > .nl-unordered-list__item { list-style-type: ""; }'}</style>
        <Story />
      </>
    ),
  ],
  render: (args) => (
    <UnorderedList {...args} className="nl-unordered-list--example-no-markers">
      <UnorderedListItem>Paspoortfoto, niet ouder dan 6 maanden</UnorderedListItem>
      <UnorderedListItem>Je oude paspoort</UnorderedListItem>
      <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
    </UnorderedList>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een ongeordende lijst zonder markers. Dit is een Community implementatie; in deze story is te zien hoe dit geïmplementeerd kan worden met de NL Unordered List-component.

De markers zijn verborgen met de CSS-eigenschap \`list-style-type: ""\` in plaats van \`none\`, en de lijst heeft het HTML-attribuut \`role="list"\`. Zo blijft de lijst ook in WebKit-browsers herkenbaar als lijst en horen screenreadergebruikers dat het een lijst met drie items is.`,
      },
    },
  },
};
