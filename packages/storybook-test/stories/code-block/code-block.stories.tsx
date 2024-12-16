import type { Meta, StoryObj } from '@storybook/react';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import packageJSON from '../../../components-react/code-block-react/package.json';
import { CodeBlock } from '../../../components-react/code-block-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import componentMarkdown from '../../../docs/code-block-docs/docs/component.md?raw';
import tokens from '../../../tokens/code-block-tokens/tokens.json';
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
  WCAG22_412_NAME_ROLE_VALUE,
  WCAG22_413_STATUS_MESSAGES,
} from '../../src/WcagAudit';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: CodeBlock,
  decorators: [ExampleBodyTextDecorator],

  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=13778-3553',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
    tokens,
    wcagAudit: {
      notApplicable: [
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_121_AUDIO_ONLY_AND_VIDEO_ONLY_PRERECORDED,
        WCAG22_122_CAPTIONS_PRERECORDED,
        WCAG22_123_AUDIO_DESCRIPTION_OR_MEDIA_ALTERNATIVE_PRERECORDED,
        WCAG22_124_CAPTIONS_LIVE,
        WCAG22_125_AUDIO_DESCRIPTION_PRERECORDED,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_134_ORIENTATION,
        WCAG22_135_IDENTIFY_INPUT_PURPOSE,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_1413_CONTENT_ON_HOVER_OR_FOCUS,
        WCAG22_142_AUDIO_CONTROL,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_212_NO_KEYBOARD_TRAP,
        WCAG22_214_CHARACTER_KEY_SHORTCUTS,
        WCAG22_221_TIMING_ADJUSTABLE,
        WCAG22_222_PAUSE_STOP_HIDE,
        WCAG22_231_THREE_FLASHES_OR_BELOW_THRESHOLD,
        WCAG22_241_BYPASS_BLOCKS,
        WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
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
        WCAG22_412_NAME_ROLE_VALUE,
        WCAG22_413_STATUS_MESSAGES,
      ],
    },
  },
  title: 'Componenten/Code Block',
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Code Block met 1 regel ECMAScript',
  args: {
    children: `import { Code } from '@nl-design-system/code-react';`,
  },
  decorators: [ExampleBodyTextDecorator],
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },

  parameters: {
    docs: {
      description: {
        story: `Een Code Block met een regel code van 53 tekens lang.

Op een klein scherm of bij 400% zoom past niet de hele regel op het scherm, dan moet je in de richting van de tekst scrollen om het einde van de regel te zien.`,
      },
    },
    status: { type: [] },
    wcagAudit: {
      author: 'Nomen Nescio',
      date: '2024-12-17',
      notTested: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1410_REFLOW,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_312_LANGUAGE_OF_PARTS,
      ],
      pass: [],
    },
  },
};

export const KorteRegel: Story = {
  name: 'Code Block met 1 kort Unix shell commando',
  args: {
    children: `npm install`,
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Code Block met een regel code van 11 tekens lang.

Op een klein scherm of bij 400% zoom past de tekst op 1 regel, dan scrollen is niet nodig om de hele tekst te zien.`,
      },
    },
    wcagAudit: {
      author: 'Nomen Nescio',
      date: '2024-12-17',
      notTested: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1410_REFLOW,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_312_LANGUAGE_OF_PARTS,
      ],
      pass: [],
    },
  },
};

export const LangeRegel: Story = {
  name: 'Code Block met 1 extra lange regel',
  args: {
    children: `<!DOCTYPE html>
<html lang="nl" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>wetten.nl - Regeling - Wet aanvulling Algemene wet bestuursrecht met een regeling over de behandeling van klachten door bestuursorganen</title>
  </head>
  <body>…</body>
</html>`,
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Code Block met een lange regel code van 155 tekens lang.

Code conventies gebruiken vaak een uiterste limiet van 120 tekens, maar soms zijn er toch langere regels.

De volledige inhoud van de Code Block moet leesbaar zijn, ook als de content heel lange regels bevat. De Code Block moet horizontaal kunnen scrollen.`,
      },
    },
    wcagAudit: {
      author: 'Nomen Nescio',
      date: '2024-12-17',
      notTested: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1410_REFLOW,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_312_LANGUAGE_OF_PARTS,
      ],
      pass: [],
    },
  },
};

export const DefaultFont: Story = {
  name: 'Code Block waar geen design token voor font-family is ingesteld',
  args: {
    children: `De Code Block moet visueel onderscheidbaar zijn.`,
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    storyRootClassname: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'De Code Block moet visueel onderscheidbaar zijn, ook als er geen font design tokens is ingesteld.',
      },
    },
    wcagAudit: {
      author: 'Nomen Nescio',
      date: '2024-12-17',
      notTested: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1410_REFLOW,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_312_LANGUAGE_OF_PARTS,
      ],
      pass: [],
    },
  },
};

export const FallbackFont: Story = {
  name: 'Code Block met fallback font-family',
  args: {
    children: `De Code Block moet visueel onderscheidbaar zijn.`,
    style: {
      '--nl-code-block-font-family': '""',
    } as CSSProperties,
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    storyRootClassname: '',
  },
  parameters: {
    docs: {
      description: {
        story: `De Code Block moet visueel onderscheidbaar zijn, ook wanneer de in de design token ingestelde font-family niet geladen kan worden.`,
      },
    },
    wcagAudit: {
      author: 'Nomen Nescio',
      date: '2024-12-17',
      notTested: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1410_REFLOW,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_312_LANGUAGE_OF_PARTS,
      ],
      pass: [],
    },
  },
};

export const Nederlands: Story = {
  name: 'Code met Nederlandse taal',
  args: {
    children: `// In dit voorbeeld berekenen we 7 keer 6.
var nummerA = 7;
var nummerB = 6;
var antwoord = nummerA * nummerB;`,
    lang: 'nl',
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Code Block met een codevoorbeeld voor Nederlandstalige lezers, met namen van variabelen en commentaar in het Nederlands.',
      },
    },
    wcagAudit: {
      author: 'Nomen Nescio',
      date: '2024-12-17',
      notTested: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1410_REFLOW,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_312_LANGUAGE_OF_PARTS,
      ],
      pass: [],
    },
  },
};

export const Engels: Story = {
  name: 'Code met Engelse taal',
  args: {
    children: `// In this example we'll calculate 7 times 6.
var numberA = 7;
var numberB = 6;
var answer = numberA * numberB;`,
    lang: 'en',
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Code Block met een codevoorbeeld voor Engelstalig lezers, met namen van variabelen en commentaar in het Engels.',
      },
    },
    wcagAudit: {
      author: 'Nomen Nescio',
      date: '2024-12-17',
      notTested: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1410_REFLOW,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_312_LANGUAGE_OF_PARTS,
      ],
      pass: [],
    },
  },
};

export const ArabicContext: Story = {
  name: 'Code Block in Engelse taal geplaatst binnen Arabische rechts-naar-links pagina',
  args: {
    children: `var numberA = 7;
var numberB = 6;
var answer = numberA * numberB;`,
    lang: 'en',
  },
  decorators: [
    (Story) => (
      <>
        <Paragraph>في المثال التالي سوف نحسب 7 مرات 6</Paragraph>
        {Story()}
      </>
    ),
  ],
  globals: {
    dir: 'rtl',
    lang: 'ar',
    title: 'Code Block باللغة الإنجليزية منشور في الصفحة العربية من اليمين إلى اليسار',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Code Block in een codevoorbeeld voor lezers van Arabisch, met namen van variabelen en commentaar in het Engels. De hele pagina is rechts uitegelijnd, maar de tekst van het Code Block is links uitgelijnd.',
      },
    },
    wcagAudit: {
      author: 'Nomen Nescio',
      date: '2024-12-17',
      notTested: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1410_REFLOW,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_312_LANGUAGE_OF_PARTS,
      ],
      pass: [],
    },
  },
};
