import type { Meta, StoryObj } from '@storybook/react';
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
  name: 'Code Block',
  args: {
    children: `import { CodeBlock } from '@nl-design-system-candidate/code-block-react';`,
  },
  parameters: {
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
  name: 'Korte regel',
  args: {
    children: `npm install`,
  },
  parameters: {
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
  name: 'Lange regel',
  args: {
    children: `class ProjectContractChargingPeriodProjectAccountReferenceVM extends AbstractProjectContractChargingPeriodProjectAccountReferenceVM implements ProjectContractChargingPeriodProjectAccountReferenceVMInterface {
    /* todo */
}`,
  },
  parameters: {
    docs: {
      description: {
        story:
          'De volledige inhoud van de code block moet leesbaar zijn, ook als de content heel lange regels bevat. De code block moet horizontaal kunnen scrollen.',
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
  name: 'Default font',
  args: {
    children: `De Code Block moet visueel onderscheidbaar zijn.`,
  },
  parameters: {
    docs: {
      description: {
        story: 'De Code Block moet visueel onderscheidbaar zijn, ook als er geen font design token is ingesteld.',
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
  name: 'Fallback font',
  args: {
    children: `De Code Block moet visueel onderscheidbaar zijn.`,
    style: {
      '--nl-code-block-font-family': '""',
    } as CSSProperties,
  },
  parameters: {
    docs: {
      description: {
        story: `De Code Block moet visueel onderscheidbaar zijn, ook wanneer de in de design token ingestelde code font niet geladen kan worden.`,
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
  parameters: {
    docs: {
      description: {
        story: 'Een Code Block met een codevoorbeeld voor Nederlandstalige lezers.',
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
  parameters: {
    docs: {
      description: {
        story: 'Een Code Block met een codevoorbeeld voor Engelstalig lezers.',
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
  name: 'Code Block in Engelse taal geplaatst binnen Arabische rechts-naar-links tekst',
  args: {
    children: `var numberA = 7;
var numberB = 6;
var answer = numberA * numberB;`,
    lang: 'en',
  },
  decorators: [
    (Story) => (
      <div lang="ar" dir="rtl">
        <Paragraph>في المثال التالي سوف نحسب 7 مرات 6</Paragraph>
        {Story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Een Code Block met een codevoorbeeld voor Engelstalig lezers.',
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
