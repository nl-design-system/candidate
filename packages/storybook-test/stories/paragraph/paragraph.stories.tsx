import type { Meta, StoryObj } from '@storybook/react';
import { CSSProperties } from 'react';
import packageJSON from '../../../components-react/paragraph-react/package.json';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import componentMarkdown from '../../../docs/paragraph-docs/docs/component.md?raw';
import tokens from '../../../tokens/paragraph-tokens/tokens.json';
import {
  WCAG22_111_NON_TEXT_CONTENT,
  WCAG22_121_AUDIO_ONLY_AND_VIDEO_ONLY_PRERECORDED,
  WCAG22_122_CAPTIONS_PRERECORDED,
  WCAG22_123_AUDIO_DESCRIPTION_OR_MEDIA_ALTERNATIVE_PRERECORDED,
  WCAG22_124_CAPTIONS_LIVE,
  WCAG22_125_AUDIO_DESCRIPTION_PRERECORDED,
  WCAG22_126_SIGN_LANGUAGE_PRERECORDED,
  WCAG22_127_EXTENDED_AUDIO_DESCRIPTION_PRERECORDED,
  WCAG22_128_MEDIA_ALTERNATIVE_PRERECORDED,
  WCAG22_129_AUDIO_ONLY_LIVE,
  WCAG22_131_INFO_AND_RELATIONSHIPS,
  WCAG22_132_MEANINGFUL_SEQUENCE,
  WCAG22_133_SENSORY_CHARACTERISTICS,
  WCAG22_134_ORIENTATION,
  WCAG22_135_IDENTIFY_INPUT_PURPOSE,
  WCAG22_136_IDENTIFY_PURPOSE,
  WCAG22_141_USE_OF_COLOR,
  WCAG22_142_AUDIO_CONTROL,
  WCAG22_143_CONTRAST_MINIMUM,
  WCAG22_144_RESIZE_TEXT,
  WCAG22_145_IMAGES_OF_TEXT,
  WCAG22_146_CONTRAST_ENHANCED,
  WCAG22_147_LOW_OR_NO_BACKGROUND_AUDIO,
  WCAG22_148_VISUAL_PRESENTATION,
  WCAG22_149_IMAGES_OF_TEXT_NO_EXCEPTION,
  WCAG22_1410_REFLOW,
  WCAG22_1411_NON_TEXT_CONTRAST,
  WCAG22_1412_TEXT_SPACING,
  WCAG22_1413_CONTENT_ON_HOVER_OR_FOCUS,
  WCAG22_211_KEYBOARD,
  WCAG22_212_NO_KEYBOARD_TRAP,
  WCAG22_213_KEYBOARD_NO_EXCEPTION,
  WCAG22_214_CHARACTER_KEY_SHORTCUTS,
  WCAG22_221_TIMING_ADJUSTABLE,
  WCAG22_222_PAUSE_STOP_HIDE,
  WCAG22_223_NO_TIMING,
  WCAG22_224_INTERRUPTIONS,
  WCAG22_225_RE_AUTHENTICATING,
  WCAG22_226_TIMEOUTS,
  WCAG22_231_THREE_FLASHES_OR_BELOW_THRESHOLD,
  WCAG22_232_THREE_FLASHES,
  WCAG22_233_ANIMATION_FROM_INTERACTIONS,
  WCAG22_241_BYPASS_BLOCKS,
  WCAG22_242_PAGE_TITLED,
  WCAG22_243_FOCUS_ORDER,
  WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
  WCAG22_245_MULTIPLE_WAYS,
  WCAG22_246_HEADINGS_AND_LABELS,
  WCAG22_247_FOCUS_VISIBLE,
  WCAG22_248_LOCATION,
  WCAG22_249_LINK_PURPOSE_LINK_ONLY,
  WCAG22_2410_SECTION_HEADINGS,
  WCAG22_251_POINTER_GESTURES,
  WCAG22_252_POINTER_CANCELLATION,
  WCAG22_253_LABEL_IN_NAME,
  WCAG22_254_MOTION_ACTUATION,
  WCAG22_255_TARGET_SIZE,
  WCAG22_256_CONCURRENT_INPUT_MECHANISMS,
  WCAG22_311_LANGUAGE_OF_PAGE,
  WCAG22_312_LANGUAGE_OF_PARTS,
  WCAG22_313_UNUSUAL_WORDS,
  WCAG22_314_ABBREVIATIONS,
  WCAG22_315_READING_LEVEL,
  WCAG22_316_PRONUNCIATION,
  WCAG22_321_ON_FOCUS,
  WCAG22_322_ON_INPUT,
  WCAG22_323_CONSISTENT_NAVIGATION,
  WCAG22_324_CONSISTENT_IDENTIFICATION,
  WCAG22_325_CHANGE_ON_REQUEST,
  WCAG22_331_ERROR_IDENTIFICATION,
  WCAG22_332_LABELS_OR_INSTRUCTIONS,
  WCAG22_333_ERROR_SUGGESTION,
  WCAG22_334_ERROR_PREVENTION_LEGAL_FINANCIAL_DATA,
  WCAG22_335_HELP,
  WCAG22_336_ERROR_PREVENTION_ALL,
  WCAG22_411_PARSING,
  WCAG22_412_NAME_ROLE_VALUE,
  WCAG22_413_STATUS_MESSAGES,
} from '../../src/WcagAudit';

const meta = {
  argTypes: {
    children: { name: 'text', table: { category: 'API' } },
    purpose: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'lead'],
      table: { category: 'API' },
      type: 'string',
    },
    style: {
      control: 'object',
      table: { category: 'API' },
    },
  },
  component: Paragraph,
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=150-734',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
    tokens,
    wcagAudit: {
      baseline: 'http://nldesignsystem.nl/wcag/baseline#2024-12',
      cannotTell: [],
      date: '2024-12-12',
      fail: [],
      notApplicable: [WCAG22_121_AUDIO_ONLY_AND_VIDEO_ONLY_PRERECORDED],
      notTested: [
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_121_AUDIO_ONLY_AND_VIDEO_ONLY_PRERECORDED,
        WCAG22_122_CAPTIONS_PRERECORDED,
        WCAG22_123_AUDIO_DESCRIPTION_OR_MEDIA_ALTERNATIVE_PRERECORDED,
        WCAG22_124_CAPTIONS_LIVE,
        WCAG22_125_AUDIO_DESCRIPTION_PRERECORDED,
        WCAG22_126_SIGN_LANGUAGE_PRERECORDED,
        WCAG22_127_EXTENDED_AUDIO_DESCRIPTION_PRERECORDED,
        WCAG22_128_MEDIA_ALTERNATIVE_PRERECORDED,
        WCAG22_129_AUDIO_ONLY_LIVE,
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_134_ORIENTATION,
        WCAG22_135_IDENTIFY_INPUT_PURPOSE,
        WCAG22_136_IDENTIFY_PURPOSE,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_142_AUDIO_CONTROL,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_146_CONTRAST_ENHANCED,
        WCAG22_147_LOW_OR_NO_BACKGROUND_AUDIO,
        WCAG22_148_VISUAL_PRESENTATION,
        WCAG22_149_IMAGES_OF_TEXT_NO_EXCEPTION,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_1413_CONTENT_ON_HOVER_OR_FOCUS,
        WCAG22_211_KEYBOARD,
        WCAG22_212_NO_KEYBOARD_TRAP,
        WCAG22_213_KEYBOARD_NO_EXCEPTION,
        WCAG22_214_CHARACTER_KEY_SHORTCUTS,
        WCAG22_221_TIMING_ADJUSTABLE,
        WCAG22_222_PAUSE_STOP_HIDE,
        WCAG22_223_NO_TIMING,
        WCAG22_224_INTERRUPTIONS,
        WCAG22_225_RE_AUTHENTICATING,
        WCAG22_226_TIMEOUTS,
        WCAG22_231_THREE_FLASHES_OR_BELOW_THRESHOLD,
        WCAG22_232_THREE_FLASHES,
        WCAG22_233_ANIMATION_FROM_INTERACTIONS,
        WCAG22_241_BYPASS_BLOCKS,
        WCAG22_242_PAGE_TITLED,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_245_MULTIPLE_WAYS,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_248_LOCATION,
        WCAG22_249_LINK_PURPOSE_LINK_ONLY,
        WCAG22_2410_SECTION_HEADINGS,
        WCAG22_251_POINTER_GESTURES,
        WCAG22_252_POINTER_CANCELLATION,
        WCAG22_253_LABEL_IN_NAME,
        WCAG22_254_MOTION_ACTUATION,
        WCAG22_255_TARGET_SIZE,
        WCAG22_256_CONCURRENT_INPUT_MECHANISMS,
        WCAG22_311_LANGUAGE_OF_PAGE,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_313_UNUSUAL_WORDS,
        WCAG22_314_ABBREVIATIONS,
        WCAG22_315_READING_LEVEL,
        WCAG22_316_PRONUNCIATION,
        WCAG22_321_ON_FOCUS,
        WCAG22_322_ON_INPUT,
        WCAG22_323_CONSISTENT_NAVIGATION,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_325_CHANGE_ON_REQUEST,
        WCAG22_331_ERROR_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
        WCAG22_333_ERROR_SUGGESTION,
        WCAG22_334_ERROR_PREVENTION_LEGAL_FINANCIAL_DATA,
        WCAG22_335_HELP,
        WCAG22_336_ERROR_PREVENTION_ALL,
        WCAG22_411_PARSING,
        WCAG22_412_NAME_ROLE_VALUE,
        WCAG22_413_STATUS_MESSAGES,
      ],
      pass: [WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  title: 'Componenten/Paragraph',
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Paragraph',
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    purpose: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een paragraaf bestaand uit één alinea.',
      },
    },
    status: { type: [] },
  },
};

export const ParagraphLead: Story = {
  name: 'Paragraph Lead',
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    purpose: 'lead',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een lead paragraaf bestaand uit één alinea.',
      },
    },
    status: { type: [] },
  },
};

export const LongParagraph: Story = {
  name: 'Paragraph (lang)',
  args: {
    children:
      'In de laatste dagen, toen ik uit Italië naar Engeland terugkeerde, besloot ik, liever dan al den tijd, dien ik te paard moest zitten, met smakelooze en onwetenschappelijke praatjes te slijten, zoo nu en dan of bij mij zelf over een onderwerp uit onze gemeenschappelijke letteroefeningen na te denken of mij te vermeien in de herinnering aan de even geleerde als dierbare vrienden, die ik hier had achtergelaten. Onder dezen kwam uw beeld, mijn beste Morus, mij zeker het allereerst voor den geest en de herinnering aan U, ofschoon wij ver van elkander waren, was mij even aangenaam, als uw omgang was, toen ik U nog van aangezicht tot aangezicht placht te zien, het aangenaamste—ik mag sterven, als het niet waar is—van al wat mij ooit in mijn leven te beurt is gevallen. Daarom vatte ik, omdat ik meende in allen gevalle iets te moeten doen en die tijd mij weinig geschikt voorkwam om een ernstig onderwerp te overdenken, het plan op een boertige lofrede op Moria (de Zotheid) te houden. “Welke Pallas heeft U op die gedachte gebracht?” zult ge zeggen. Vooreerst deed uw geslachtsnaam Morus mij dit plan opvatten, die even dicht bij het woord Moria komt, als gij ver van de zaak af zijt of liever, volgens aller eenstemmig getuigenis, daarmede volstrekt niets gemeen hebt. Verder vermoedde ik, dat deze speling van ons vernuft bovenal uw goedkeuring zou wegdragen, omdat gij in dergelijke jokkernijen, waarbij, zoo ik goed zie, nergens geleerdheid en geest kan gemist worden, bijzonder veel smaak vindt en in het dagelijksche leven als een Democritus pleegt op te treden. Ofschoon gij door uw buitengewone scherpzinnigheid gewoonlijk hemelsbreed in gevoelen van het gemeene volk verschilt, zijt gij toch door de ongeloofelijke zachtheid en meegaandheid van uw karakter niet alleen in staat om met allerlei menschen in alle omstandigheden des levens om te gaan, maar vindt gij er ook een genot in. Deze kleine verhandeling zult gij daarom gaarne aannemen als een aandenken van uw vriend en gij zult ook haar verdediging gaarne aanvaarden, want zij is u toegewijd en daarom voortaan Uw eigendom, niet het mijne.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een lange paragraaf die over meerdere regels gaat zodat duidelijk is dat de `line-height` van de paragraaf adequaat is. (fragment uit “De Lof der Zotheid” van Desiderius Erasmus)',
      },
    },
    status: { type: [] },
  },
};

export const ParagraphLeadPlusParagraph: Story = {
  name: 'Paragraph Lead + Paragraph',
  args: {
    children:
      'Ditmaal hebben wij het in Friesland gezocht, en ik mag wel zeggen, wij hebben het er gevonden ook. Want dat gewest geeft een afwisseling van velerlei moois te water en te land, oud en nieuw.',
    purpose: 'lead',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een fragment uit “Friesland” door Jac. P. Thijsse, gesplitst in een lead paragraaf en een gewone paragraaf.',
      },
    },
    status: { type: [] },
  },
  render({ children, ...restProps }) {
    return (
      <>
        <Paragraph {...restProps}>{children}</Paragraph>
        <Paragraph>
          Wij hebben er heel wat rondgezworven, maar zijn er zeker van, dat we nog menig mooi en belangrijk plekje
          gemist hebben. Dat is maar goed ook; nu hebben wij een reden, om nog dikwijls terug te keeren naar de
          plaatsen, waar het ons zoo goed bevallen is en waar wij nu nog nieuwe en frissche dingen kunnen ontdekken.
          Indien gij daar ook aan wilt doen, zult ge het u niet beklagen.
        </Paragraph>
      </>
    );
  },
};

export const ParagraphArabic: Story = {
  name: 'Paragraph (Arabic)',
  args: {
    children: 'هذه فقرة نصية. وهي ليست فقرة نصية طويلة جدًا، ولكنها فقرة نصية على أية حال.',
    dir: 'rtl',
    lang: 'ar',
    purpose: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een paragraaf met één alinea Arabische tekst.',
      },
    },
    status: { type: [] },
  },
};

export const ParagraphLeadArabic: Story = {
  name: 'Paragraph Lead (Arabic)',
  args: {
    children: 'هذه فقرة نصية. وهي ليست فقرة نصية طويلة جدًا، ولكنها فقرة نصية على أية حال.',
    dir: 'rtl',
    lang: 'ar',
    purpose: 'lead',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een lead paragraaf met één alinea Arabische tekst.',
      },
    },
    status: { type: [] },
  },
};

export const ParagraphZoom200: Story = {
  name: 'Paragraph (zoom 200%)',
  args: {
    children: 'Knappekoppenbestuursoverlegorgaannotulen',
    purpose: undefined,
  },
  globals: {
    viewport: { value: undefined },
    zoom: '400%',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een paragraaf met een heel lang woord, gezoomed naar 200%.',
      },
    },
    status: { type: [] },
  },
};

export const ParagraphZoom400: Story = {
  name: 'Paragraph (zoom 400%)',
  args: {
    children: 'Knappekoppenbestuursoverlegorgaannotulen',
    purpose: undefined,
  },
  globals: {
    viewport: { value: undefined },
    zoom: '400%',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een paragraaf met een heel lang woord, gezoomed naar 400%.',
      },
    },
    status: { type: [] },
  },
};

export const ParagraphSmallViewport: Story = {
  name: 'Paragraph (small viewport)',
  args: {
    children: 'Knappekoppenbestuursoverlegorgaannotulen',
    purpose: undefined,
  },
  globals: {
    viewport: { value: 'phone' },
    zoom: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een paragraaf met een heel lang woord, in een kleine viewport.',
      },
    },
    status: { type: [] },
  },
};

export const ParagraphZoom200SmallViewport: Story = {
  name: 'Paragraph (zoom 200%, small viewport)',
  args: {
    children: 'Knappekoppenbestuursoverlegorgaannotulen',
    purpose: undefined,
  },
  globals: {
    viewport: { value: 'phone' },
    zoom: '200%',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een paragraaf met een heel lang woord, gezoomed naar 200%.',
      },
    },
    status: { type: [] },
  },
};

export const ParagraphZoom200SmallViewportSpacingOnly: Story = {
  name: 'Paragraph (zoom 200%, small viewport)',
  args: {
    children: 'Knappekoppenbestuursoverlegorgaannotulen',
    purpose: undefined,
    style: {
      'letter-spacing': '0.12em',
      'word-spacing': '0.16em',
    } as CSSProperties,
  },
  globals: {
    viewport: { value: 'phone' },
    zoom: '200%',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een paragraaf met een heel lang woord, gezoomed naar 200%.',
      },
    },
    status: { type: [] },
  },
};

export const ParagraphZoom200SmallViewportSpacingAndWordBreak: Story = {
  name: 'Paragraph (zoom 200%, small viewport)',
  args: {
    children: 'Knappekoppenbestuursoverlegorgaannotulen',
    purpose: undefined,
    style: {
      letterSpacing: '0.12em',
      wordBreak: 'break-word',
      wordSpacing: '0.16em',
    },
  },
  globals: {
    viewport: { value: 'phone' },
    zoom: '200%',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een paragraaf met een heel lang woord, gezoomed naar 200%.',
      },
    },
    status: { type: [] },
  },
};

export const ParagraphZoom400SmallViewport: Story = {
  name: 'Paragraph (zoom 400%, small viewport)',
  args: {
    children: 'Knappekoppenbestuursoverlegorgaannotulen',
    purpose: undefined,
  },
  globals: {
    viewport: { value: 'phone' },
    zoom: '400%',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een paragraaf met een heel lang woord, gezoomed naar 400%.',
      },
    },
    status: { type: [] },
  },
};

export const ParagraphWithLetterAndWordSpacing: Story = {
  name: 'Paragraph (letter-spacing + word-spacing)',
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    style: {
      letterSpacing: '0.12em',
      wordSpacing: '0.16em',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Een paragraaf bestaand uit één alinea.',
      },
    },
    status: {
      type: [],
    },
  },
};
