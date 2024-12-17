/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from '@storybook/react';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import packageJSON from '../../../components-react/heading-react/package.json';
import { Heading } from '../../../components-react/heading-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import componentMarkdown from '../../../docs/heading-docs/docs/component.md?raw';
import tokens from '../../../tokens/heading-tokens/tokens.json';
import {
  WCAG22_111_NON_TEXT_CONTENT,
  WCAG22_121_AUDIO_ONLY_AND_VIDEO_ONLY_PRERECORDED,
  WCAG22_122_CAPTIONS_PRERECORDED,
  WCAG22_123_AUDIO_DESCRIPTION_OR_MEDIA_ALTERNATIVE_PRERECORDED,
  WCAG22_124_CAPTIONS_LIVE,
  WCAG22_125_AUDIO_DESCRIPTION_PRERECORDED,
  WCAG22_131_INFO_AND_RELATIONSHIPS,
  WCAG22_132_MEANINGFUL_SEQUENCE,
  WCAG22_133_SENSORY_CHARACTERISTICS,
  WCAG22_134_ORIENTATION,
  WCAG22_135_IDENTIFY_INPUT_PURPOSE,
  WCAG22_1410_REFLOW,
  WCAG22_1411_NON_TEXT_CONTRAST,
  WCAG22_1412_TEXT_SPACING,
  WCAG22_1413_CONTENT_ON_HOVER_OR_FOCUS,
  WCAG22_141_USE_OF_COLOR,
  WCAG22_142_AUDIO_CONTROL,
  WCAG22_143_CONTRAST_MINIMUM,
  WCAG22_144_RESIZE_TEXT,
  WCAG22_145_IMAGES_OF_TEXT,
  WCAG22_211_KEYBOARD,
  WCAG22_212_NO_KEYBOARD_TRAP,
  WCAG22_214_CHARACTER_KEY_SHORTCUTS,
  WCAG22_221_TIMING_ADJUSTABLE,
  WCAG22_222_PAUSE_STOP_HIDE,
  WCAG22_231_THREE_FLASHES_OR_BELOW_THRESHOLD,
  WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
  WCAG22_241_BYPASS_BLOCKS,
  WCAG22_242_PAGE_TITLED,
  WCAG22_243_FOCUS_ORDER,
  WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
  WCAG22_245_MULTIPLE_WAYS,
  WCAG22_246_HEADINGS_AND_LABELS,
  WCAG22_247_FOCUS_VISIBLE,
  WCAG22_251_POINTER_GESTURES,
  WCAG22_252_POINTER_CANCELLATION,
  WCAG22_253_LABEL_IN_NAME,
  WCAG22_254_MOTION_ACTUATION,
  WCAG22_257_DRAGGING_MOVEMENTS,
  WCAG22_258_TARGET_SIZE_MINIMUM,
  WCAG22_311_LANGUAGE_OF_PAGE,
  WCAG22_312_LANGUAGE_OF_PARTS,
  WCAG22_321_ON_FOCUS,
  WCAG22_322_ON_INPUT,
  WCAG22_323_CONSISTENT_NAVIGATION,
  WCAG22_324_CONSISTENT_IDENTIFICATION,
  WCAG22_326_CONSISTENT_HELP,
  WCAG22_331_ERROR_IDENTIFICATION,
  WCAG22_332_LABELS_OR_INSTRUCTIONS,
  WCAG22_333_ERROR_SUGGESTION,
  WCAG22_334_ERROR_PREVENTION_LEGAL_FINANCIAL_DATA,
  WCAG22_337_REDUNDANT_ENTRY,
  WCAG22_338_ACCESSIBLE_AUTHENTICATION_MINIMUM,
  WCAG22_411_PARSING,
  WCAG22_412_NAME_ROLE_VALUE,
  WCAG22_413_STATUS_MESSAGES,
} from '../../src/WcagTests';

const meta = {
  argTypes: {
    appearance: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6'],
      table: { category: 'API' },
    },
    children: { table: { category: 'API' } },
    dir: {
      control: { type: 'select' },
      options: [undefined, 'auto', 'ltr', 'rtl'],
      table: { category: 'API' },
    },
    lang: {
      control: { type: 'text' },
      table: { category: 'API' },
    },
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      table: { category: 'API' },
    },
  },
  component: Heading,
  decorators: ExampleBodyTextDecorator,
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=153-1039',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
    testResult: {
      notApplicable: [
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_121_AUDIO_ONLY_AND_VIDEO_ONLY_PRERECORDED,
        WCAG22_122_CAPTIONS_PRERECORDED,
        WCAG22_123_AUDIO_DESCRIPTION_OR_MEDIA_ALTERNATIVE_PRERECORDED,
        WCAG22_124_CAPTIONS_LIVE,
        WCAG22_125_AUDIO_DESCRIPTION_PRERECORDED,
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_134_ORIENTATION,
        WCAG22_135_IDENTIFY_INPUT_PURPOSE,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_142_AUDIO_CONTROL,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_1413_CONTENT_ON_HOVER_OR_FOCUS,
        WCAG22_211_KEYBOARD,
        WCAG22_212_NO_KEYBOARD_TRAP,
        WCAG22_214_CHARACTER_KEY_SHORTCUTS,
        WCAG22_221_TIMING_ADJUSTABLE,
        WCAG22_222_PAUSE_STOP_HIDE,
        WCAG22_231_THREE_FLASHES_OR_BELOW_THRESHOLD,
        WCAG22_241_BYPASS_BLOCKS,
        WCAG22_242_PAGE_TITLED,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_245_MULTIPLE_WAYS,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_251_POINTER_GESTURES,
        WCAG22_252_POINTER_CANCELLATION,
        WCAG22_253_LABEL_IN_NAME,
        WCAG22_254_MOTION_ACTUATION,
        WCAG22_311_LANGUAGE_OF_PAGE,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_321_ON_FOCUS,
        WCAG22_322_ON_INPUT,
        WCAG22_323_CONSISTENT_NAVIGATION,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_331_ERROR_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
        WCAG22_333_ERROR_SUGGESTION,
        WCAG22_334_ERROR_PREVENTION_LEGAL_FINANCIAL_DATA,
        WCAG22_412_NAME_ROLE_VALUE,
        WCAG22_413_STATUS_MESSAGES,
        WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
        WCAG22_257_DRAGGING_MOVEMENTS,
        WCAG22_258_TARGET_SIZE_MINIMUM,
        WCAG22_326_CONSISTENT_HELP,
        WCAG22_337_REDUNDANT_ENTRY,
        WCAG22_338_ACCESSIBLE_AUTHENTICATION_MINIMUM,
      ],
      notTested: [WCAG22_1410_REFLOW, WCAG22_312_LANGUAGE_OF_PARTS],
      pass: [],
    },
    tokens,
  },
  title: 'Componenten/Heading',
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadingLevel1: Story = {
  name: 'Heading 1',
  args: {
    children: 'Civiel recht in Nederland',
    level: 1,
  },
  decorators: (Story) => (
    <>
      {Story()}
      <Paragraph>
        Civiel recht, burgerlijk recht of privaatrecht bestaat uit een materieel en een formeel gedeelte. Het materiële
        gedeelte stelt regels ten aanzien van de verhoudingen tussen burgers onderling en tussen burgers en goederen.
        Het formeel privaatrecht is het burgerlijk procesrecht: het geeft regels over de handhaving van de materiële
        regels.
      </Paragraph>
    </>
  ),
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Civiel Recht in Nederland',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Heading (level 1) met daarna een Paragraph met bijbehorende tekst.

Bron: [Civiel recht (Nederlands) - Wikipedia](https://nl.wikipedia.org/wiki/Civiel_recht_(Nederland))`,
      },
    },
    status: { type: [] },
    testResult: {
      date: '2024-12-17',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_411_PARSING,
      ],
    },
  },
};

export const HeadingLevel2: Story = {
  name: 'Heading 2 in een koppenstructuur',
  args: {
    children: 'Burgerlijk Wetboek',
    level: 2,
  },
  decorators: (Story) => (
    <>
      <Heading level={1}>Civiel recht in Nederland</Heading>
      {Story()}
      <Paragraph>Wijziging(en) op nader te bepalen datum(s); laatste bekendgemaakt in 2018.</Paragraph>
    </>
  ),
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Civiel Recht in Nederland (fragment uit het Burgerlijk Wetboek)',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Heading (level 2) over "Burgerlijk Wetboek", die volgt op een hoofdkop, met daarna een Paragraph met bijbehorende tekst.`,
      },
    },
    status: { type: [] },
    testResult: {
      date: '2024-12-17',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_411_PARSING,
      ],
    },
  },
};

export const HeadingLevel3: Story = {
  name: 'Heading 3 in een koppenstructuur',
  args: {
    children: 'Boek 1, Personen- en familierecht',
    level: 3,
  },
  decorators: (Story) => (
    <>
      <Heading level={1}>Civiel recht in Nederland</Heading>
      <Heading level={2}>Burgerlijk Wetboek</Heading>
      {Story()}
      <Paragraph>Dit boek bestaat uit Titel 1 tot en met Titel 20.</Paragraph>
    </>
  ),
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Civiel Recht in Nederland (fragment uit het Burgerlijk Wetboek)',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Heading (level 3) over "Boek 1, Personen- en familierecht", die volgt op Headings level 1 en 2, met daarna een Paragraph met bijbehorende tekst.`,
      },
    },
    status: { type: [] },
    testResult: {
      date: '2024-12-17',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_411_PARSING,
      ],
    },
  },
};

export const HeadingLevel4: Story = {
  name: 'Heading 4 in een koppenstructuur',
  args: {
    children: 'Titel 5. Het Huwelijk',
    level: 4,
  },
  decorators: (Story) => (
    <>
      <Heading level={1}>Civiel recht in Nederland</Heading>
      <Heading level={2}>Burgerlijk Wetboek</Heading>
      <Heading level={3}>Boek 1, Personen- en familierecht</Heading>
      {Story()}
      <Paragraph>
        Dit hoofdstuk bestaat uit een Algemene bepaling, gevolgd door Afdeling 1 tot en met Afdeling 5.
      </Paragraph>
    </>
  ),
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Civiel Recht in Nederland (fragment uit het Burgerlijk Wetboek)',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Heading (level 4) over "Titel 5. Het Huwelijk", die volgt op Headings level 1 tot en met 3, met daarna een Paragraph met bijbehorende tekst.`,
      },
    },
    status: { type: [] },
    testResult: {
      date: '2024-12-17',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_411_PARSING,
      ],
    },
  },
};

export const HeadingLevel5: Story = {
  name: 'Heading 5 in een koppenstructuur',
  args: {
    children: 'Afdeling 1. Vereisten tot het aangaan van een huwelijk',
    level: 5,
  },
  decorators: (Story) => (
    <>
      <Heading level={1}>Civiel recht in Nederland</Heading>
      <Heading level={2}>Burgerlijk Wetboek</Heading>
      <Heading level={3}>Boek 1, Personen- en familierecht</Heading>
      <Heading level={4}>Titel 5. Het huwelijk</Heading>
      {Story()}
      <Paragraph>Dit hoofdstuk bestaat uit Artikel 31 tot en met Artikel 42.</Paragraph>
    </>
  ),
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Civiel Recht in Nederland (fragment uit het Burgerlijk Wetboek)',
  },
  parameters: {
    status: { type: [] },
    testResult: {
      date: '2024-12-17',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_411_PARSING,
      ],
    },
  },
};

export const HeadingLevel6: Story = {
  name: 'Heading 6 in een koppenstructuur',
  args: {
    children: 'Artikel 42',
    level: 6,
  },
  decorators: (Story) => (
    <>
      <Heading level={1}>Civiel recht in Nederland</Heading>
      <Heading level={2}>Burgerlijk Wetboek</Heading>
      <Heading level={3}>Boek 1, Personen- en familierecht</Heading>
      <Heading level={4}>Titel 5. Het huwelijk</Heading>
      <Heading level={5}>Afdeling 1. Vereisten tot het aangaan van een huwelijk</Heading>
      <Heading level={6}>{Story()}</Heading>
      <Paragraph>
        Zij die met elkander een huwelijk willen aangaan, mogen niet tegelijkertijd een geregistreerd partnerschap zijn
        aangegaan.
      </Paragraph>
    </>
  ),
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Civiel Recht in Nederland (fragment uit het Burgerlijk Wetboek)',
  },
  parameters: {
    docs: {
      description: {
        story: `Bron: [Artikel 42 Burgerlijk Wetboek Boek 1](https://wetten.overheid.nl/jci1.3:c:BWBR0002656&boek=1&titeldeel=5&afdeling=1&artikel=42&z=2024-01-01&g=2024-01-01)`,
      },
    },
    status: { type: [] },
    testResult: {
      date: '2024-12-17',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_411_PARSING,
      ],
    },
  },
};

export const HeadingMultiline: Story = {
  name: 'Heading 1 met meerdere regels tekst',
  args: {
    children: (
      <>
        When the pawn hits the conflicts he thinks like a king
        <br />
        What he knows throws the blows when he goes to the fight
        <br />
        And he'll win the whole thing 'fore he enters the ring
        <br />
        There's no body to batter when your mind is your might
        <br />
        So when you go solo, you hold your own hand
        <br />
        And remember that depth is the greatest of heights
        <br />
        And if you know where you stand, then you know where to land
        <br />
        And if you fall it won't matter, cuz you'll know that you're right
      </>
    ),
    level: 1,
  },
  decorators: (Story) => (
    <>
      {Story()}
      <Paragraph>
        "When the Pawn..." is the second studio album by the American singer-songwriter Fiona Apple. Released by Epic
        Records in the United States on November 9, 1999, When the Pawn... was wholly written by Apple, with production
        by Jon Brion.
      </Paragraph>
      <Paragraph>
        Upon its release, "When the Pawn..." broke the record for longest album title at 444 characters (previously held
        by a volume in "The Best... Album in the World...Ever!"), though this record was subsequently broken.
      </Paragraph>
    </>
  ),
  globals: {
    dir: 'ltr',
    lang: 'en',
    title: 'When the Pawn...',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Heading (level 1) met een tekst die met line breaks over meerder regels is verdeeld.

Bron: [When the Pawn... - Wikipedia](https://en.wikipedia.org/wiki/When_the_Pawn...)`,
      },
    },
    status: { type: [] },
    testResult: {
      date: '2024-12-17',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_411_PARSING,
      ],
    },
  },
};

export const HeadingWordBreak: Story = {
  name: 'Heading 1 met meerdere regels tekst',
  args: {
    children: 'Burgerservicenummer is geen onderdeel van vreemdelingendocumenten zoals het vreemdelingenpaspoort',
    level: 1,
  },
  decorators: (Story) => (
    <>
      {Story()}
      <Paragraph>
        Op uw vreemdelingen document staat wel uw V-nummer: onderaan de verblijfsvergunning staan de tien cijfers van uw
        V-nummer. Dat nummer staat achter de letters VNR. Uw V-nummer staat ook in brieven die u van de IND ontvangt.
      </Paragraph>
    </>
  ),
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Burgerservicenummer en uw vreemdelingendocument',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Heading (level 1) met lange woorden die niet op 1 regel passen, die door CSS zijn afgebroken met koppelstreepjes.',
      },
    },
    status: { type: [] },
  },
};

export const HeadingArabic: Story = {
  name: 'Heading met Arabisch schrift in een Nederlandstalige pagina',
  args: {
    children: 'عيد الفطر (Suikerfeest)',
    dir: 'rtl',
    lang: 'ar',
    level: 2,
  },
  decorators: (Story) => (
    <>
      <Heading level={1}>Relevante Arabische termen</Heading>
      {Story()}
      <Paragraph>
        Het Suikerfeest, Ramadanfeest of Eid-al-fitr (einde ramadan, Arabisch: عيد الفطر) is een islamitische feestdag
        waarop het einde van de vastenmaand ramadan gevierd wordt.
      </Paragraph>
    </>
  ),
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Relevante Arabische termen',
  },
  parameters: {
    docs: {
      description: {
        story: `Bron: [Suikerfeest - Wikipedia](https://nl.wikipedia.org/wiki/Suikerfeest)

Het moet mogelijk zijn een andere taal en tekstrichting in te stellen voor een heading, met het \`lang\` en \`dir\` attribuut. Bijvoorbeeld de taal Arabisch met \`lang="ar"\` en de right-to-left textrichting met \`dir="rtl"\`.`,
      },
    },
    status: { type: [] },
    testResult: {
      date: '2024-12-17',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_411_PARSING,
      ],
    },
  },
};

export const HeadingLevelColors: Story = {
  name: 'Heading lettertypes en kleuren',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 6,
  },
  parameters: {
    docs: {
      description: {
        story: `Elk heading niveau moet een onderscheidend lettertype en kleur kunnen hebben, door middel van design tokens.`,
      },
    },
    testResult: {
      date: '2024-12-17',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_411_PARSING,
      ],
    },
  },
  render: () => (
    <div
      style={{
        '--nl-heading-level-1-color': 'midnightblue',
        '--nl-heading-level-1-font-family': 'serif',
        '--nl-heading-level-2-color': 'maroon',
        '--nl-heading-level-2-font-family': 'sans-serif',
        '--nl-heading-level-3-color': 'green',
        '--nl-heading-level-3-font-family': 'serif',
        '--nl-heading-level-4-color': 'royalblue',
        '--nl-heading-level-4-font-family': 'sans-serif',
        '--nl-heading-level-5-color': 'rebeccapurple',
        '--nl-heading-level-5-font-family': 'serif',
        '--nl-heading-level-6-color': 'black',
        '--nl-heading-level-6-font-family': 'sans-serif',
        backgroundColor: 'white',
      }}
    >
      <Heading level={1}>Civiel recht in Nederland</Heading>
      <Heading level={2}>Burgerlijk Wetboek</Heading>
      <Heading level={3}>Boek 1, Personen- en familierecht</Heading>
      <Heading level={4}>Titel 5. Het huwelijk</Heading>
      <Heading level={5}>Afdeling 1. Vereisten tot het aangaan van een huwelijk</Heading>
      <Heading level={6}>Artikel 42</Heading>
      <Paragraph>
        Zij die met elkander een huwelijk willen aangaan, mogen niet tegelijkertijd een geregistreerd partnerschap zijn
        aangegaan.
      </Paragraph>
    </div>
  ),
};

export const HeadingLevelSize: Story = {
  name: 'Heading met visueel design voor lettergrootte en line-height per heading level',
  args: {
    children: '',
    level: 1,
  },
  parameters: {
    docs: {
      description: {
        story: `Elk heading niveau moet een eigen font-size en bijpassende line-height kunnen hebben. Vaak geldt: hoe groter de font-size, hoe kleiner de line-height.`,
      },
    },
    testResult: {
      date: '2024-12-17',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_411_PARSING,
      ],
    },
  },
  render: () => (
    <div
      style={{
        '--nl-heading-level-1-font-size': '4em',
        '--nl-heading-level-1-line-height': '1.3',
        '--nl-heading-level-2-font-size': '3em',
        '--nl-heading-level-2-line-height': '1.4',
        '--nl-heading-level-3-font-size': '2em',
        '--nl-heading-level-3-line-height': '1.5',
        '--nl-heading-level-4-font-size': '1.6em',
        '--nl-heading-level-4-line-height': '1.6',
        '--nl-heading-level-5-font-size': '1.4em',
        '--nl-heading-level-5-line-height': '1.7',
        '--nl-heading-level-6-font-size': '1.2em',
        '--nl-heading-level-6-line-height': '1.8',
      }}
    >
      <Heading level={1}>Civiel recht in Nederland</Heading>
      <Heading level={2}>Burgerlijk Wetboek</Heading>
      <Heading level={3}>Boek 1, Personen- en familierecht</Heading>
      <Heading level={4}>Titel 5. Het huwelijk</Heading>
      <Heading level={5}>Afdeling 1. Vereisten tot het aangaan van een huwelijk</Heading>
      <Heading level={6}>Artikel 42</Heading>
      <Paragraph>
        Zij die met elkander een huwelijk willen aangaan, mogen niet tegelijkertijd een geregistreerd partnerschap zijn
        aangegaan.
      </Paragraph>
    </div>
  ),
};
