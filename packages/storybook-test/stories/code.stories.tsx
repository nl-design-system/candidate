import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/code-css/src/code.scss';
import packageJSON from '../../components-react/code-react/package.json';
import { Code } from '../../components-react/code-react/src/code';
import componentMarkdown from '../../docs/code-docs/docs/component.md?raw';
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
} from '../src/WcagTests';
import tokens from '../../tokens/code-tokens/tokens.json';
import { Heading } from '../../components-react/heading-react/src/heading';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: Code,
  decorators: [ExampleBodyTextDecorator],
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/code',
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
      notTested: [WCAG22_1410_REFLOW, WCAG22_1411_NON_TEXT_CONTRAST, WCAG22_312_LANGUAGE_OF_PARTS],
    },
    tokens,
  },
  title: 'Componenten/Code',
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Code',
  args: {
    children: `import { Code } from '@nl-design-system-candidate/code-react';`,
  },
  parameters: {
    status: { type: [] },
    testResult: {
      date: '2024-12-17',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1412_TEXT_SPACING,
      ],
    },
  },
};

export const BodyText: Story = {
  name: 'Code in Body Text',
  args: {
    children: `parseFloat()`,
    lang: 'en',
  },
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'en',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een fragment Code in een Paragraph met Engelstalige tekst, die visueel onderscheidbaar is door een monospace lettertype.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2024-12-17',
      notTested: [WCAG22_1410_REFLOW, WCAG22_1411_NON_TEXT_CONTRAST, WCAG22_312_LANGUAGE_OF_PARTS],
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1412_TEXT_SPACING,
      ],
    },
  },
  render: ({ children }) => (
    <Paragraph>
      The <Code>{children}</Code> function parses a string argument and returns a floating point number.
    </Paragraph>
  ),
};

export const BodyTextRightToLeft: Story = {
  name: 'Code in Body Text in Arabische taal',
  args: {
    children: `parseFloat()`,
  },
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'rtl',
    lang: 'ar',
  },
  parameters: {
    docs: {
      description: {
        story: `Een fragment Code in een Paragraph met Arabische tekst, die visueel onderscheidbaar is door een monospace lettertype.

De ronde haakjes in de code na "parseFloat" worden aan rechts van "parseFloat" getoond. In tegenstelling tot de lopende tekst die van rechts naar links wordt geschreven, wordt de code van links naar rechts geschreven.`,
      },
    },
    status: { type: [] },
    testResult: {
      date: '2024-12-17',
      notTested: [WCAG22_1410_REFLOW, WCAG22_1411_NON_TEXT_CONTRAST, WCAG22_312_LANGUAGE_OF_PARTS],
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1412_TEXT_SPACING,
      ],
    },
  },
  render: ({ children }) => (
    <Paragraph>
      تقوم الدالة <Code>{children}</Code> بتحليل وسيطة سلسلة وإرجاع رقم فاصل عشري.
    </Paragraph>
  ),
};

export const HypenatedBodyText: Story = {
  name: 'Code zonder "hyphenation" in Body Text met "hyphenation"',
  args: {
    children: `InternalFrameInternalFrameTitlePaneInternalFrameTitlePaneMaximizeButtonWindowNotFocusedState`,
  },
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een lang stuk code dat niet op de regel past, wordt zodat de tekst volledig leesbaar is. Het woord word niet afgebroken met een koppelstreepje (hyphen), zodat er geen onduidelijkheid is of het koppelstreepje onderdeel is van de code.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2024-12-17',
      notTested: [WCAG22_1410_REFLOW, WCAG22_1411_NON_TEXT_CONTRAST, WCAG22_312_LANGUAGE_OF_PARTS],
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1412_TEXT_SPACING,
      ],
    },
  },
  render: ({ children }) => (
    <Paragraph>
      De <Code>sun.swing.plaf.nimbus</Code> package heeft één van de langste class names in Java:{' '}
      <Code>{children}</Code>.
    </Paragraph>
  ),
};

export const WhiteSpaceCharacters: Story = {
  name: 'Code met meerdere spaties achter elkaar',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een fragment Code waarbij vier spaties aan witruimte zichtbaar is. De witruimte is niet samengevoegd tot 1 spatie.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2024-12-17',
      notTested: [WCAG22_1410_REFLOW, WCAG22_1411_NON_TEXT_CONTRAST, WCAG22_312_LANGUAGE_OF_PARTS],
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1412_TEXT_SPACING,
      ],
    },
  },
  render: () => (
    <Paragraph>
      Gebruik het derde argument van deze functie om de hoeveelheid spaties voor inspringing te bepalen:{' '}
      <Code>{'JSON.stringify(json, null, "    ");'}</Code>
    </Paragraph>
  ),
};

export const CodeInHeading1: Story = {
  name: 'Code in Heading 1',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Code component kan voorkomen in een Heading 1.',
      },
    },
  },
  render: () => (
    <Heading level={1}>
      <Code>margin-trim</Code> is geweldig!
    </Heading>
  ),
};

export const CodeInHeading2: Story = {
  name: 'Code in Heading 2',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Code component kan voorkomen in een Heading 2.',
      },
    },
  },
  render: () => (
    <>
      <Heading level={1}>Mijn eerste website</Heading>
      <Heading level={2}>
        <Code>margin-trim</Code> is geweldig!
      </Heading>
    </>
  ),
};

export const CodeInHeading3: Story = {
  name: 'Code in Heading 3',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Code component kan voorkomen in een Heading 3.',
      },
    },
  },
  render: () => (
    <>
      <Heading level={1}>Mijn eerste website</Heading>
      <Heading level={2}>Archief blog posts</Heading>
      <Heading level={3}>
        <Code>margin-trim</Code> is geweldig!
      </Heading>
    </>
  ),
};

export const CodeInHeading4: Story = {
  name: 'Code in Heading 4',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Code component kan voorkomen in een Heading 4.',
      },
    },
  },
  render: () => (
    <>
      <Heading level={1}>Mijn eerste website</Heading>
      <Heading level={2}>Archief blog posts</Heading>
      <Heading level={3}>2025</Heading>
      <Heading level={4}>
        <Code>margin-trim</Code> is geweldig!
      </Heading>
    </>
  ),
};

export const CodeInHeading5: Story = {
  name: 'Code in Heading 5',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Code component kan voorkomen in een Heading 5.',
      },
    },
  },
  render: () => (
    <>
      <Heading level={1}>Mijn eerste website</Heading>
      <Heading level={2}>Archief blog posts</Heading>
      <Heading level={3}>2025</Heading>
      <Heading level={4}>januari 2025</Heading>
      <Heading level={5}>
        <Code>margin-trim</Code> is geweldig!
      </Heading>
    </>
  ),
};

export const CodeInHeading6: Story = {
  name: 'Code in Heading 6',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Code component kan voorkomen in een Heading 6.',
      },
    },
  },
  render: () => (
    <>
      <Heading level={1}>Mijn eerste website</Heading>
      <Heading level={2}>Archief blog posts</Heading>
      <Heading level={3}>2025</Heading>
      <Heading level={4}>januari 2025</Heading>
      <Heading level={5}>24 januari 2025</Heading>
      <Heading level={6}>
        <Code>margin-trim</Code> is geweldig!
      </Heading>
    </>
  ),
};
