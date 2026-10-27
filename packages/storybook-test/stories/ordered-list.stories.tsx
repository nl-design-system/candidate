import { createCustomPropertiesDecorator } from '@nl-design-system-candidate/storybook-shared/src/CustomPropertiesDecorator';
import { CandidateDisableCssDecorator } from '@nl-design-system-candidate/storybook-shared/src/CandidateDisableCssDecorator';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import { IconNumber1 as ExampleIconStep1, IconNumber2 as ExampleIconStep2 } from '@tabler/icons-react';
import '../../components-css/icon-css/src/icon.scss';
import '../../components-css/link-css/src/html/link.scss';
import '../../components-css/link-css/src/link.scss';
import '../../components-css/ordered-list-css/src/html/ordered-list.scss';
import '../../components-css/ordered-list-css/src/ordered-list.scss';
import '../../components-css/paragraph-css/src/html/paragraph.scss';
import '../../components-css/paragraph-css/src/paragraph.scss';
import '../../components-css/ordered-list-css/src/test.scss';
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
    component: OrderedList,
    subcomponents: { OrderedListItem },
    decorators: ExampleBodyTextDecorator,
    parameters: {
      // TODO: When component is implemented, enable Chromatic
      chromatic: { disableSnapshot: true },
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

export const OrderedListNestedOrderedList: Story = {
  name: 'Ordered List met geneste Ordered List',
  args: {},
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>
        Verzamel de benodigde documenten
        <OrderedList>
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

export const OrderedListThreeLevelsNesting: Story = {
  name: 'Ordered List van drie niveaus',
  args: {},
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>
        Fase 1: Voorbereiding
        <OrderedList>
          <OrderedListItem>
            Verzamel documenten
            <OrderedList>
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

export const OrderedListStart: Story = {
  name: 'Ordered List met startnummer anders dan 1',
  args: {},
  render: (args) => (
    <>
      <p>Rotondekunstprijs eervolle vermeldingen:</p>
      <OrderedList {...args} start={4}>
        <OrderedListItem>Vangrails Looping</OrderedListItem>
        <OrderedListItem>Many sites</OrderedListItem>
        <OrderedListItem>De Aardbeien van Jan en Brigitte</OrderedListItem>
      </OrderedList>
    </>
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

export const OrderedListReversed: Story = {
  name: 'Ordered List met omgekeerde nummering via HTML-attribuut reversed',
  args: {},
  render: (args) => (
    <>
      <p>Rotondekunstprijs prijswinnaars:</p>
      <OrderedList {...args} reversed>
        <OrderedListItem>Vis op wielen</OrderedListItem>
        <OrderedListItem>Licht Piramide</OrderedListItem>
        <OrderedListItem>Berm</OrderedListItem>
      </OrderedList>
    </>
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

export const OrderedListArabicNumDirRTL: Story = {
  name: 'Ordered List met Arabische nummering via HTML-attribuut lang="ar" en schrijfrichting via HTML-attribuut dir="rtl"',
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

export const OrderedListLangDirOnHTML: Story = {
  name: 'Ordered List met Arabische tekst waarbij HTML-attributen lang en dir alleen op HTML-element html staat',
  globals: { lang: 'ar', dir: 'rtl' },
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

export const OrderedListTypeOverridesLanguage: Story = {
  name: 'Ordered List waarbij lang de nummering bepaalt ondanks type-attribuut',
  globals: { lang: 'ar', dir: 'rtl' },
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

export const OrderedListCustomMarkerLabel: Story = {
  name: 'Ordered List met Custom Marker en toegankelijke tekst die visueel verborgen is',
  args: {},
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem
        marker={
          <Icon>
            <ExampleIconStep1 />
          </Icon>
        }
        markerLabel="Stap 1."
      >
        Verzamel documenten
      </OrderedListItem>
      <OrderedListItem
        marker={
          <Icon>
            <ExampleIconStep2 />
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
        story: `Een geordende lijst met een icoon als marker. Het icoon is verborgen voor hulpsoftware. De betekenis van de marker wordt aangeboden als visueel verborgen tekst welke wordt opgelezen voor screenreadergebruikers. De boodschap van het icoon is toegankelijk voor alle bezoekers.`,
      },
    },
  },
};

export const OrderedListCustomMarkerInformativeIconAccessible: Story = {
  name: 'Ordered List met Custom Marker met informatief icoon met alternatieve tekst',
  args: {},
  render: (args) => (
    <OrderedList {...args}>
      {/* @ts-expect-error markerLabel ontbreekt bewust: de alternatieve tekst staat als aria-label op de Icon */}
      <OrderedListItem
        marker={
          <Icon role="img" aria-label="Stap 1.">
            <ExampleIconStep1 />
          </Icon>
        }
      >
        Verzamel documenten
      </OrderedListItem>
      {/* @ts-expect-error markerLabel ontbreekt bewust: de alternatieve tekst staat als aria-label op de Icon */}
      <OrderedListItem
        marker={
          <Icon role="img" aria-label="Stap 2.">
            <ExampleIconStep2 />
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

export const OrderedListDirParentOnly: Story = {
  name: 'Ordered List met Arabische tekst waarbij HTML-attribuut dir alleen op HTML-element ol staat',
  globals: { lang: 'ar', dir: 'rtl' },
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

export const OrderedListNLHTMLAll: Story = {
  name: 'Ordered List binnen `nl-html--all`',
  render: () => (
    <div className="nl-html nl-html--all">
      <ol>
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

De styling wordt behouden door de NL HTML-component, deze past de styling van de NL Ordered List-component toe op alle \`ol\` HTML-elementen en onderliggende \`li\` HTML-elementen binnen een element met de \`nl-html--all\` class.`,
      },
    },
  },
};

export const OrderedListNLHTMLOrderedList: Story = {
  name: 'Ordered List binnen `nl-html--ordered-list`',
  render: () => (
    <div className="nl-html nl-html--ordered-list">
      <ol>
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

De styling wordt behouden door de NL HTML-component, deze past de styling van de NL Ordered List-component toe op alle \`ol\` HTML-elementen en onderliggende \`li\` HTML-elementen binnen een element met de \`nl-html--ordered-list\` class.`,
      },
    },
  },
};

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
          'Een geordende lijst opgemaakt met meerdere HTML-elementen `div`. Deze elementen hebben niet de juiste semantiek voor een lijst met items, de HTML-attributen `role="list"` en `role="listitem"` worden gebruikt om de semantiek toe te voegen. Screenreadergebruikers krijgen daardoor de juiste informatie: een lijst met drie items. Visueel staan de items onder elkaar en krijgen ze de typografie en inspringing van de component, maar zonder nummers. Alleen de HTML-elementen `ol` en `li` krijgen nummers van de browser.',
      },
    },
  },
};

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
          'Een geordende lijst opgemaakt met meerdere HTML-elementen `span`. Deze elementen hebben niet de juiste semantiek voor een lijst met items, de HTML-attributen `role="list"` en `role="listitem"` worden gebruikt om de semantiek toe te voegen. Screenreadergebruikers krijgen daardoor de juiste informatie: een lijst met drie items. Visueel ziet het er niet uit als een lijst: de items lopen zonder nummers achter elkaar door als één doorlopende tekst, omdat het HTML-element `span` een inline element is. Alleen de HTML-elementen `ol` en `li` krijgen nummers van de browser.',
      },
    },
  },
};

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
        <OrderedList>
          <OrderedListItem>
            Afdeling Benodigde documenten
            <OrderedList>
              <OrderedListItem>
                Paragraaf Identiteit van de aanvrager
                <OrderedList>
                  <OrderedListItem>
                    Artikel Geldig identiteitsbewijs
                    <OrderedList>
                      <OrderedListItem>
                        Lid Het identiteitsbewijs is niet ouder dan 10 jaar
                        <OrderedList>
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

export const OrderedListCentered: Story = {
  name: 'Ordered List gecentreerd',
  render: (args) => (
    <OrderedList {...args} className="nl-ordered-list--example-center">
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

export const OrderedListReversedAndStart: Story = {
  name: 'Ordered List met HTML-attributen reversed en start',
  render: (args) => (
    <>
      <p>Rotondekunstprijs prijswinnaars pagina 2 van 3:</p>
      <OrderedList {...args} reversed start={10}>
        <OrderedListItem>Vis op wielen</OrderedListItem>
        <OrderedListItem>Licht Piramide</OrderedListItem>
        <OrderedListItem>Berm</OrderedListItem>
      </OrderedList>
    </>
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
