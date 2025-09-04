import type { Meta, StoryObj } from '@storybook/react';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import { useId } from 'react';
import packageJSON from '../../../components-react/color-sample-react/package.json';
import { ColorSample } from '../../../components-react/color-sample-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import componentMarkdown from '../../../docs/color-sample-docs/docs/component.md?raw';
import tokens from '../../../tokens/color-sample-tokens/tokens.json';
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
} from '../../src/WcagTests';

const meta = {
  argTypes: {
    'aria-labelledby': { control: 'text', table: { category: 'API' } },
    value: { control: 'color', table: { category: 'API' } },
  },
  component: ColorSample,
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
        url: 'https://nldesignsystem.nl/color-sample',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
    testResult: {
      notApplicable: [
        WCAG22_121_AUDIO_ONLY_AND_VIDEO_ONLY_PRERECORDED,
        WCAG22_122_CAPTIONS_PRERECORDED,
        WCAG22_123_AUDIO_DESCRIPTION_OR_MEDIA_ALTERNATIVE_PRERECORDED,
        WCAG22_124_CAPTIONS_LIVE,
        WCAG22_125_AUDIO_DESCRIPTION_PRERECORDED,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_134_ORIENTATION,
        WCAG22_135_IDENTIFY_INPUT_PURPOSE,
        WCAG22_1410_REFLOW,
        WCAG22_1413_CONTENT_ON_HOVER_OR_FOCUS,
        WCAG22_142_AUDIO_CONTROL,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1412_TEXT_SPACING,
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
      ],
      notTested: [
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_1411_NON_TEXT_CONTRAST,
      ],
    },
    tokens,
  },

  title: 'Componenten/Color Sample',
} satisfies Meta<typeof ColorSample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Color Sample voor een huisstijlkleur',
  args: { value: '#154273' },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Huisstijlkleuren',
  },
  parameters: {
    ariaLabelledBy: 'De kleur "lintblauw".',
    docs: {
      description: {
        story: `Een kleurstaal met beschrijving voor een doelgroep die gewend is met kleurcodes te werken.

De Color Sample en de tekst staan in dezelfde Paragraph, dus het is duidelijk dat ze bij elkaar horen.`,
      },
    },
    testResult: {
      date: '2025-08-29',
      notTested: [
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_1411_NON_TEXT_CONTRAST,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
    status: { type: [] },
  },
  render(props, context) {
    const id = useId();

    return (
      <Paragraph>
        <ColorSample {...props} aria-labelledby={id} /> <span id={id}>{context.parameters['ariaLabelledBy']}</span>
      </Paragraph>
    );
  },
};

export const SoloColorSample: Story = {
  name: 'Color Sample als zelfstandige afbeelding met toegankelijke naam',
  args: {
    ['aria-label']: 'De kleur "#154273".',
    value: '#154273',
  },
  decorators: [
    (Story, context) => (
      <>
        <Paragraph>{Story()}</Paragraph>
        <Paragraph> {context.args['aria-label']}</Paragraph>
      </>
    ),
    ...meta.decorators,
  ],
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'De kleur "#154273".',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een kleurstaal met expliciete beschrijving in een `aria-label` attribuut, die helemaal los staat in een element staat die bedoeld is om gerelateerde inhoud te groeperen, zoals een Paragraph, Table Cell of List Item. Deze vorm mag alleen gebruikt worden als de kleur elders in de context toegelicht is.',
      },
    },
    testResult: {
      date: '2025-08-29',
      notTested: [
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_1411_NON_TEXT_CONTRAST,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
    status: { type: [] },
  },
};

export const White: Story = {
  name: 'Color Sample voor de kleur wit',
  args: { value: '#FFFFFF' },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Huisstijlkleuren',
  },
  parameters: {
    ariaLabelledBy: 'De kleur "wit".',
    docs: {
      description: {
        story:
          'Een kleurstaal met voor de kleur "wit". De kleurstaal is te herkennen op een lichte achtergrondkleur door een border-color met voldoende contrast.',
      },
    },
    testResult: {
      date: '2025-08-29',
      notTested: [
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_1411_NON_TEXT_CONTRAST,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
    status: { type: [] },
  },
  render(props, context) {
    const id = useId();

    return (
      <Paragraph>
        <ColorSample {...props} aria-labelledby={id} /> <span id={id}>{context.parameters['ariaLabelledBy']}</span>
      </Paragraph>
    );
  },
};

export const Black: Story = {
  name: 'Color Sample voor de kleur zwart',
  args: { value: '#000000' },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Huisstijlkleuren',
  },
  parameters: {
    ariaLabelledBy: 'De kleur "zwart".',
    docs: {
      description: {
        story: 'Een kleurstaal met voor de kleur "zwart".',
      },
    },
    testResult: {
      date: '2025-08-29',
      notTested: [
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_1411_NON_TEXT_CONTRAST,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
    status: { type: [] },
  },
  render(props, context) {
    const id = useId();

    return (
      <Paragraph>
        <ColorSample {...props} aria-labelledby={id} /> <span id={id}>{context.parameters['ariaLabelledBy']}</span>
      </Paragraph>
    );
  },
};

export const CssColorCode: Story = {
  name: 'Color Sample voor CSS-kleurcode van "deep pink"',
  args: { value: '#ff1493' },
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    ariaLabelledBy: 'De kleur "#ff1493".',
    docs: {
      description: {
        story: 'Een kleurstaal met beschrijving voor een doelgroep die gewend is met kleurcodes te werken.',
      },
    },
    testResult: {
      date: '2025-08-29',
      notTested: [
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_1411_NON_TEXT_CONTRAST,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
    status: { type: [] },
  },
  render(props, context) {
    const id = useId();

    return (
      <Paragraph>
        <ColorSample {...props} aria-labelledby={id} /> <span id={id}>{context.parameters['ariaLabelledBy']}</span>
      </Paragraph>
    );
  },
};

export const TransparentColorSample: Story = {
  name: 'Color Sample met een 100% transparante kleur',
  args: { value: '#ffffff00' },
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    ariaLabelledBy: 'De 100% transparante kleur "#ffffff00".',
    docs: {
      description: {
        story:
          'Een kleurstaal met een 100% transparante kleur en beschrijving, voor een doelgroep die gewend is [alpha-transparantie](https://en.wikipedia.org/wiki/Alpha_compositing) te beoordelen met een checkerboard pattern. De 8-cijferige hexadecimale kleurcode maakt ook duidelijk dat er transparantie is.',
      },
    },
    testResult: {
      date: '2025-08-29',
      notTested: [
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_1411_NON_TEXT_CONTRAST,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
    status: { type: [] },
  },
  render(props, context) {
    const id = useId();

    return (
      <Paragraph>
        <ColorSample {...props} aria-labelledby={id} /> <span id={id}>{context.parameters['ariaLabelledBy']}</span>
      </Paragraph>
    );
  },
};

export const SemiTransparentColorSample: Story = {
  name: 'Color Sample met semi-transparente "deep pink"',
  args: { value: '#ff14937f' },
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    ariaLabelledBy: 'De semi-transparante kleur "#ff14937f".',
    docs: {
      description: {
        story:
          'Een kleurstaal met een semitransparante kleur en beschrijving, voor een doelgroep die gewend is [alpha-transparantie](https://en.wikipedia.org/wiki/Alpha_compositing) te beoordelen met een checkerboard pattern. De 8-cijferige hexadecimale kleurcode maakt ook duidelijk dat er transparantie is.',
      },
    },
    testResult: {
      date: '2025-08-29',
      notTested: [
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_1411_NON_TEXT_CONTRAST,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
    status: { type: [] },
  },
  render(props, context) {
    const id = useId();

    return (
      <Paragraph>
        <ColorSample {...props} aria-labelledby={id} /> <span id={id}>{context.parameters['ariaLabelledBy']}</span>
      </Paragraph>
    );
  },
};

export const Arabic: Story = {
  name: 'Color Sample met beschrijving in Arabisch',
  args: { value: 'rgb(58 131 73)' },
  globals: {
    dir: 'rtl',
    lang: 'ar',
    title: 'أخضر',
  },
  parameters: {
    ariaLabelledBy: 'أخضر',
    docs: {
      description: {
        story:
          'Een kleurstaal met beschrijving in Arabisch, voor de kleur groen (["أخضر" in Arabisch](https://ar.wikipedia.org/wiki/أخضر)).',
      },
    },
    testResult: {
      date: '2025-08-29',
      notTested: [
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_1411_NON_TEXT_CONTRAST,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
    status: { type: [] },
  },
  render(props, context) {
    const id = useId();

    return (
      <Paragraph>
        <ColorSample {...props} aria-labelledby={id} /> <span id={id}>{context.parameters['ariaLabelledBy']}</span>
      </Paragraph>
    );
  },
};

export const Japanese: Story = {
  name: 'Color Sample met beschrijving in het Japans',
  args: { value: '#00B16B' },
  globals: {
    dir: 'ltr',
    lang: 'ja',
    title: '緑',
    writingMode: 'vertical-rl',
  },
  parameters: {
    ariaLabelledBy: '緑',
    docs: {
      description: {
        story:
          'Een kleurstaal met beschrijving in het Japans, voor de kleur groen (["緑" in Japans](https://ja.wikipedia.org/wiki/緑)).',
      },
    },
    testResult: {
      date: '2025-08-29',
      notTested: [
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_1411_NON_TEXT_CONTRAST,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
    status: { type: [] },
  },
  render(props, context) {
    const id = useId();

    return (
      <Paragraph>
        <ColorSample {...props} aria-labelledby={id} /> <span id={id}>{context.parameters['ariaLabelledBy']}</span>
      </Paragraph>
    );
  },
};
