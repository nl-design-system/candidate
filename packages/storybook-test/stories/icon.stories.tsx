import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Link } from '@nl-design-system-candidate/link-react/css';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { IconCalendarEvent, IconChevronRight, IconExternalLink, IconSquareChevronRight } from '@tabler/icons-react';
import type { CSSProperties } from 'react';
import '../../components-css/icon-css/src/icon.scss';
import packageJSON from '../../components-react/icon-react/package.json';
import { Icon } from '../../components-react/icon-react/src/icon';
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

const meta = {
  args: {
    children: <IconCalendarEvent />,
  },
  argTypes: {
    appearance: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'em', 'ex'],
      table: { category: 'API' },
    },
    'aria-label': { table: { category: 'API' }, type: 'string' },
    'aria-labelledby': { table: { category: 'API' }, type: 'string' },
    bidiMirrored: { table: { category: 'API' }, type: 'boolean' },
    // Hide children as it's a React component which cannot be displayed nicely in the Storybook UI
    children: { table: { category: 'API', disable: true } },
    className: { table: { category: 'API' }, type: 'string' },
    role: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'img'],
      table: { category: 'API' },
    },
  },
  component: Icon,
  globals: {
    lang: 'en',
    dir: 'ltr',
  },
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/icon',
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
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_134_ORIENTATION,
        WCAG22_135_IDENTIFY_INPUT_PURPOSE,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_1413_CONTENT_ON_HOVER_OR_FOCUS,
        WCAG22_142_AUDIO_CONTROL,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
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
        WCAG22_245_MULTIPLE_WAYS,
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
        WCAG22_326_CONSISTENT_HELP,
        WCAG22_331_ERROR_IDENTIFICATION,
        WCAG22_333_ERROR_SUGGESTION,
        WCAG22_334_ERROR_PREVENTION_LEGAL_FINANCIAL_DATA,
        WCAG22_337_REDUNDANT_ENTRY,
        WCAG22_338_ACCESSIBLE_AUTHENTICATION_MINIMUM,
        WCAG22_412_NAME_ROLE_VALUE,
        WCAG22_413_STATUS_MESSAGES,
      ],
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
  title: 'Componenten/Icon',
} satisfies Meta<typeof Icon>;

const Circle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24">
    <circle cx="12" cy="12" r="12" fill="currentcolor" />
  </svg>
);

const CircleInset = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24">
    <circle cx="12" cy="12" r="10" fill="currentcolor" />
  </svg>
);

const Square = () => (
  <svg xmlns="http://www.w3.org" viewBox="0 0 24 24" height="24" width="24">
    <rect x="0" y="0" height="24" width="24" fill="currentcolor" />
  </svg>
);

const SquareInset = () => (
  <svg xmlns="http://www.w3.org" viewBox="0 0 24 24" height="24" width="24">
    <rect x="2" y="2" height="20" width="20" fill="currentcolor" />
  </svg>
);

const Diamond = () => (
  <svg xmlns="http://www.w3.org" viewBox="0 0 24 24" height="24" width="24">
    <path d="M12 0L24 12L12 24L0 12L12 0Z" fill="currentcolor" />;
  </svg>
);

const DiamondInset = () => (
  <svg xmlns="http://www.w3.org" viewBox="0 0 24 24" height="24" width="24">
    <path d="M12 2L22 12L12 22L2 12L12 2Z" fill="currentcolor" />;
  </svg>
);

const withFlexDecorator = (flexDirection: CSSProperties['flexDirection'] = 'row'): Decorator =>
  function FlexDecorator(Story) {
    const style: CSSProperties = {
      alignItems: 'center',
      display: 'flex',
      flexDirection,
      gap: '0.5rem',
    };

    return (
      <div style={style}>
        <Story />
      </div>
    );
  };

const withBoxDecorator = (inlineSize: CSSProperties['inlineSize'] = 'max-content'): Decorator =>
  function BoxDecorator(Story) {
    const style: CSSProperties = {
      border: '1px dashed',
      inlineSize,
      paddingBlock: '1rem',
      paddingInline: '0.5rem',
    };

    return (
      <div style={style}>
        <Story />
      </div>
    );
  };

export default meta;

type Story = StoryObj<typeof meta>;

export const SVGIcon: Story = {
  name: 'Een SVG Icon',
  parameters: {
    docs: {
      description: {
        story: 'Een SVG kan gebruikt worden als Icon.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
};

export const SVGIconWithFill: Story = {
  name: 'Een SVG Icon met Fill',
  args: {
    style: {
      '--nl-icon-color': 'tomato',
    } as CSSProperties,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een SVG die fill gebruikt voor kleur kan gebruikt worden als Icon.',
      },
    },
    testResult: {},
  },
  render(props) {
    return (
      <Icon {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tabler-icon tabler-icon-chevron-right"
        >
          <path
            d="M8.67 5.061c-.222.081-.42.248-.542.455-.092.156-.108.229-.107.484 0 .212.022.341.074.44.04.077 1.291 1.36 2.779 2.85L13.579 12l-2.705 2.71c-1.488 1.49-2.739 2.773-2.779 2.85-.052.099-.074.228-.074.44-.001.258.015.327.112.492.13.222.369.409.603.473.202.054.53.024.709-.066.185-.092 6.292-6.192 6.428-6.419.091-.152.107-.226.107-.48s-.016-.328-.107-.48c-.061-.103-1.442-1.512-3.22-3.285-2.836-2.828-3.131-3.11-3.31-3.17a1.015 1.015 0 0 0-.673-.004"
            fillRule="evenodd"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      </Icon>
    );
  },
};

export const SVGAsIcon: Story = {
  name: 'SVG als Icon',
  args: { children: null },
  parameters: {
    docs: {
      description: {
        story: 'Een SVG met alleen de `.nl-icon` class name in te stellen.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_131_INFO_AND_RELATIONSHIPS],
      fail: [WCAG22_111_NON_TEXT_CONTENT],
    },
  },
  render() {
    return <IconCalendarEvent className="nl-icon" />;
  },
};

export const EmojiIcon: Story = {
  name: 'Een emoji Icon',
  args: { children: '📅' },
  parameters: {
    docs: {
      description: {
        story: 'Een emoji kan gebruikt worden als Icon.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
};

export const SVGIconWithAriaHidden: Story = {
  name: 'Decoratief icoon met aria-hidden',
  parameters: {
    docs: {
      description: {
        story:
          'Een decoratief icoon, dat door het `aria-hidden="true"` attribuut niet voorkomt in de accessibility tree.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
};

export const SVGIconWithRoleImg: Story = {
  name: 'Icoon met afbeelding rol',
  args: {
    role: 'img',
    'aria-label': 'Icoon',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een icoon dat door de toevoeging `role="img"` als afbeelding zichtbaar is in de accessibility tree.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
};

export const SVGIconWithAriaLabel: Story = {
  name: 'Icoon met aria-label',
  args: {
    role: 'img',
    'aria-label': 'Icoon',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een icoon dat door middel van het `aria-label` attribuut een toegankelijke naam heeft die zichtbaar is in de accessibility tree.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
};

export const SVGIconWithAriaLabelledby: Story = {
  name: 'Icoon met aria-labelledby',
  args: {
    role: 'img',
    'aria-labelledby': 'paragraph',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een icoon dat door middel van het `aria-labelledby` attribuut, dat verwijst naar een ander element, een toegankelijke naam heeft die zichtbaar is in de accessibility tree.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <>
        <Paragraph id="paragraph">Symbool van een kalender evenement </Paragraph>
        <Paragraph>
          <Icon {...props} />
        </Paragraph>
      </>
    );
  },
};

export const SVGIconDefaultApperance: Story = {
  name: 'SVG Icon default appearance',
  parameters: {
    docs: {
      description: {
        story: 'Een SVG Icon is standaard ingesteld op 1× de `line-height` (`1lh`) als `inline-size` en `block-size`.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconDefaultAppearanceInCustomLineHeight: Story = {
  name: 'SVG Icon default appearance met custom line-height',
  parameters: {
    docs: {
      description: {
        story:
          'Een Icon is standaard ingesteld op 1× de `line-height` (`1lh`) als de `inline-size` en `block-size` ook als de huidige `line-height` een afwijkende waarde heeft.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    const style = {
      '--nl-paragraph-line-height': '4',
    } as CSSProperties;
    return (
      <Paragraph style={style}>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconAppearanceLh: Story = {
  name: 'SVG Icon appearance lh',
  args: { appearance: 'lh' },
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan expliciet worden ingesteld op 1× de `line-height` (`1lh`) als `inline-size` en `block-size`.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconAppearanceLhInCustomLineHeight: Story = {
  name: 'SVG Icon appearance lh met custom line-height',
  args: { appearance: 'lh' },
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan expliciet worden ingesteld op 1× de `line-height` (`1lh`) als `inline-size` en `block-size` ook als de huidige `line-height` een afwijkende waarde heeft.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Paragraph style={{ '--nl-paragraph-line-height': 4 } as CSSProperties}>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconAppearanceEm: Story = {
  name: 'SVG Icon appearance em',
  args: { appearance: 'em' },
  parameters: {
    docs: {
      description: {
        story:
          'Een Icon kan expliciet worden ingesteld op 1× de `font-size` (`1em`) als `inline-size` en `block-size`.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconAppearanceEmInParagraphWithCustomFontSize: Story = {
  name: 'SVG Icon appearance em in custom font-size',
  args: { appearance: 'em' },
  parameters: {
    docs: {
      description: {
        story:
          'Een Icon kan worden ingesteld op 1× de `font-size` (`1em`) als de `inline-size` en `block-size` ook als de huidige `font-size` een afwijkende waarde heeft.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    const style = {
      '--nl-paragraph-font-size': '3rem',
    } as CSSProperties;
    return (
      <Paragraph style={style}>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconAppearanceCap: Story = {
  name: 'SVG Icon appearance cap',
  args: { appearance: 'cap' },
  parameters: {
    docs: {
      description: {
        story:
          'Een Icon kan expliciet worden ingesteld om 1× de cap-hoogte (`1cap`) als zowel `inline-size` als `block-size` te krijgen.',
      },
    },
  },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconAppearanceCapInParagraphWithCustomFontSize: Story = {
  name: 'SVG Icon appearance cap',
  args: { appearance: 'cap' },
  parameters: {
    docs: {
      description: {
        story:
          'Een Icon kan expliciet worden ingesteld om 1× de cap-hoogte (`1cap`) als zowel `inline-size` als `block-size` te krijgen.',
      },
    },
  },
  render(props) {
    const style = {
      '--nl-paragraph-font-size': '3rem',
    } as CSSProperties;
    return (
      <Paragraph style={style}>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconAppearanceEx: Story = {
  name: 'SVG Icon appearance ex',
  args: { appearance: 'ex' },
  parameters: {
    docs: {
      description: {
        story:
          'Een Icon kan expliciet worden ingesteld om 1× de x-hoogte (`1ex`) als zowel `inline-size` als `block-size` te krijgen.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconAppearanceExInParagraphWithCustomFontSize: Story = {
  name: 'SVG Icon appearance ex met custom font-size',
  args: { appearance: 'ex' },
  parameters: {
    docs: {
      description: {
        story:
          'Een Icon kan worden ingesteld op 1× de `font-size` (`1ex`) als de `inline-size` en `block-size` ook als de huidige `font-size` een afwijkende waarde heeft.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    const style = {
      '--nl-paragraph-font-size': '3rem',
    } as CSSProperties;
    return (
      <Paragraph style={style}>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconUsingBidiMirroredInRTLParagraph: Story = {
  name: 'SVG Icon bidiMirrored in RTL',
  args: { bidiMirrored: true, children: <IconChevronRight /> },
  globals: {
    lang: 'ar',
    dir: 'rtl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Met de `bidiMirrored` prop kan een Icon worden ingesteld om mee te spiegelen met de richting van de taal zoals die is aangegeven met het `dir` attribuut in een right-to-left taal zoals Arabisch.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> طلب جواز سفر
      </Paragraph>
    );
  },
};

export const SVGIconUsingBidiMirroredInLTRParagraph: Story = {
  name: 'SVG Icon bidiMirrored in LTR',
  args: { bidiMirrored: true, children: <IconChevronRight /> },
  globals: {
    lang: 'nl',
    dir: 'ltr',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Met de `bidiMirrored` prop kan een Icon worden ingesteld om mee te spiegelen met de richting van de taal zoals die is aangegeven met het `dir` attribuut in een left-to-right taal zoals Nederlands.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> Een paspoort aanvragen
      </Paragraph>
    );
  },
};

export const SVGIconWithInheritedColor: Story = {
  name: 'SVG Icon met inherited color',
  parameters: {
    docs: {
      description: {
        story: 'Als de kleur niet expliciet is ingesteld zal het SVG Icon de kleur overnemen van een parent element.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={1} style={{ color: 'tomato' }}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconWithExplicitColor: Story = {
  name: 'SVG Icon met expliciete kleur',
  args: {
    style: {
      '--nl-icon-color': 'tomato',
    } as CSSProperties,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Als de kleur expliciet is ingesteld met de `--nl-icon-color` design token neemt het SVG Icon niet langer de kleur over van een parent element.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={1}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconInHeadingLevel1: Story = {
  name: 'SVG Icon in Heading level 1',
  parameters: {
    docs: {
      description: {
        story: 'Een SVG Icon kan worden weergegeven in een Heading met level 1',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={1}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconInHeadingLevel2: Story = {
  name: 'SVG Icon in Heading level 2',
  parameters: {
    docs: {
      description: {
        story: 'Een SVG Icon kan worden weergegeven in een Heading met level 2',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={2}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconInHeadingLevel3: Story = {
  name: 'SVG Icon in Heading level 3',
  parameters: {
    docs: {
      description: {
        story: 'Een SVG Icon kan worden weergegeven in een Heading met level 3',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={3}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconInHeadingLevel4: Story = {
  name: 'SVG Icon in Heading level 4',
  parameters: {
    docs: {
      description: {
        story: 'Een SVG Icon kan worden weergegeven in een Heading met level 4',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={4}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconInHeadingLevel5: Story = {
  name: 'SVG Icon in Heading level 5',
  parameters: {
    docs: {
      description: {
        story: 'Een SVG Icon kan worden weergegeven in een Heading met level 5',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={5}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconInHeadingLevel6: Story = {
  name: 'SVG Icon in Heading level 6',
  parameters: {
    docs: {
      description: {
        story: 'Een SVG Icon kan worden weergegeven in een Heading met level 6',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={6}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconInNarrowHeadingLevel1: Story = {
  name: 'SVG Icon in Heading level 1 in container',
  decorators: [withBoxDecorator('16rem')],
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan worden weergegeven in een Heading met level 1 in een smalle container waarin de Heading wordt afgebroken. Het SVG Icon staat dan inline met de rest van de Heading.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={1}>
        <Icon {...props} /> Een afspraak maken bij de Gemeente Voorbeeld
      </Heading>
    );
  },
};

export const EmojiIconInHeadingLevel1: Story = {
  name: 'Emoji Icon in Heading level 1',
  args: { children: '📅' },
  parameters: {
    docs: {
      description: {
        story: 'Een emoji Icon kan worden weergegeven in een Heading met level 1',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={1}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const EmojiIconInHeadingLevel2: Story = {
  name: 'Emoji Icon in Heading level 2',
  args: { children: '📅' },
  parameters: {
    docs: {
      description: {
        story: 'Een emoji Icon kan worden weergegeven in een Heading met level 2',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={2}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const EmojiIconInHeadingLevel3: Story = {
  name: 'Emoji Icon in Heading level 3',
  args: { children: '📅' },
  parameters: {
    docs: {
      description: {
        story: 'Een emoji Icon kan worden weergegeven in een Heading met level 3',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={3}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const EmojiIconInHeadingLevel4: Story = {
  name: 'Emoji Icon in Heading level 4',
  args: { children: '📅' },
  parameters: {
    docs: {
      description: {
        story: 'Een emoji Icon kan worden weergegeven in een Heading met level 4',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={4}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const EmojiIconInHeadingLevel5: Story = {
  name: 'Emoji Icon in Heading level 5',
  args: { children: '📅' },
  parameters: {
    docs: {
      description: {
        story: 'Een emoji Icon kan worden weergegeven in een Heading met level 5',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={5}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const EmojiIconInHeadingLevel6: Story = {
  name: 'Emoji Icon in Heading level 6',
  args: { children: '📅' },
  parameters: {
    docs: {
      description: {
        story: 'Een emoji Icon kan worden weergegeven in een Heading met level 6',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={6}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const EmojiIconInNarrowHeadingLevel1: Story = {
  name: 'Emoji Icon in Heading level 1 in container',
  args: { children: '📅' },
  decorators: [withBoxDecorator('16rem')],
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan worden weergegeven in een Heading met level 1 in een smalle container waarin de Heading wordt afgebroken. Het SVG Icon staat dan inline met de rest van de Heading.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Heading level={1}>
        <Icon {...props} /> Een afspraak maken bij de Gemeente Voorbeeld
      </Heading>
    );
  },
};

export const SVGIconInLinkInParagraph: Story = {
  name: 'SVG Icon in een Link in een Paragraph',
  args: { children: <IconExternalLink /> },
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan worden weergegeven in een Link in een Paragraaf. Het SVG Icon krijgt hierbij de kleur van de Link.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Paragraph>
        Bezoek{' '}
        <Link href="https://gebruikersonderzoeken.nl">
          gebruikersonderzoeken.nl <Icon {...props} />
        </Link>
        .
      </Paragraph>
    );
  },
};

export const SVGIconAppearanceCapInLinkInParagraph: Story = {
  name: 'SVG Icon appearance cap in een Link in een Paragraph',
  args: {
    children: <IconExternalLink />,
    appearance: 'cap',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan met appearance em worden weergegeven in een Link in een Paragraaf. Het SVG Icon krijgt hierbij de kleur van de Link.',
      },
    },
  },
  render(props) {
    return (
      <Paragraph>
        Bezoek{' '}
        <Link href="https://gebruikersonderzoeken.nl">
          gebruikersonderzoeken.nl <Icon {...props} />
        </Link>
        .
      </Paragraph>
    );
  },
};

export const SVGIconAppearanceEmInLinkInParagraph: Story = {
  name: 'SVG Icon appearance em in een Link in een Paragraph',
  args: {
    children: <IconExternalLink />,
    appearance: 'em',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan met appearance em worden weergegeven in een Link in een Paragraaf. Het SVG Icon krijgt hierbij de kleur van de Link.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Paragraph>
        Bezoek{' '}
        <Link href="https://gebruikersonderzoeken.nl">
          gebruikersonderzoeken.nl <Icon {...props} />
        </Link>
        .
      </Paragraph>
    );
  },
};

export const SVGIconAppearanceExInLinkInParagraph: Story = {
  name: 'SVG Icon appearance ex in een Link in een Paragraph',
  args: {
    children: <IconExternalLink />,
    appearance: 'ex',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan met appearance ex worden weergegeven in een Link in een Paragraaf. Het SVG Icon krijgt hierbij de kleur van de Link.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Paragraph>
        Bezoek{' '}
        <Link href="https://gebruikersonderzoeken.nl">
          gebruikersonderzoeken.nl <Icon {...props} />
        </Link>
        .
      </Paragraph>
    );
  },
};

export const SVGIconInButtonInParagraph: Story = {
  name: 'SVG Icon in een button in een Paragraph',
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan worden weergegeven in een `<button>` in een Paragraaf. Het SVG Icon krijgt hierbij de kleur van de `<button>`',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Paragraph>
        <button type="button">
          <Icon {...props} /> Een afspraak maken
        </button>
      </Paragraph>
    );
  },
};

export const SVGIconInDisabledButtonInParagraph: Story = {
  name: 'SVG Icon in disabled button in een Paragraph',
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan worden weergegeven in een disabled `<button>` in een Paragraaf. Het SVG Icon krijgt hierbij de kleur van de disabled `<button>`',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Paragraph>
        <button type="button" disabled>
          <Icon {...props} /> Een afspraak maken
        </button>
      </Paragraph>
    );
  },
};

export const SVGIconInParagraphWithLetterAndWordSpacing: Story = {
  name: 'SVG Icon in Paragraph met grote letter en word spacing',
  parameters: {
    docs: {
      description: {
        story: 'Een SVG Icon kan worden weergegeven in een Paragraph met grote letter en word spacing.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <Paragraph style={{ letterSpacing: '0.12em', wordSpacing: '0.16em' }}>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconInAFlexboxRow: Story = {
  name: 'SVG Icon in een smalle flex row container',
  decorators: [withFlexDecorator(), withBoxDecorator('10rem')],
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan worden weergegeven in een net iets te smalle flex container. Het SVG Icon wordt hierbij niet in elkaar gedrukt.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    const style = {
      '--nl-icon-color': 'white',
      backgroundColor: 'black',
    } as CSSProperties;

    return (
      <>
        <Icon {...props} style={style} />
        <Paragraph>Een afspraak maken</Paragraph>
      </>
    );
  },
};

export const SVGIconInAFlexboxColumn: Story = {
  name: 'SVG Icon in een flex column container',
  args: {
    style: {
      '--nl-icon-color': 'white',
      backgroundColor: 'black',
    } as CSSProperties,
  },
  decorators: [withFlexDecorator('column'), withBoxDecorator()],
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan worden weergegeven in een net iets te smalle flex container. Het SVG Icon wordt neemt hierbij niet de volledige breedte van de container aan.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <>
        <Icon {...props} />
        <Paragraph>Een afspraak maken</Paragraph>
      </>
    );
  },
};

export const CustomSizeIcon: Story = {
  name: 'SVG Icon met custom size',
  args: {
    style: {
      '--nl-icon-block-size': '5rem',
      '--nl-icon-inline-size': '5rem',
      border: '1px dashed',
    } as CSSProperties,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan met de design tokens `--nl-icon-block-size` en `--nl-icon-inline-size` worden ingesteld op een volledig custom size.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
};

export const CustomSizeIconWide: Story = {
  name: 'SVG Icon met custom size breed',
  args: {
    style: {
      '--nl-icon-block-size': '2.5rem',
      '--nl-icon-inline-size': '5rem',
      border: '1px dashed',
    } as CSSProperties,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan met de design tokens `--nl-icon-block-size` en `--nl-icon-inline-size` worden ingesteld op een volledig custom size, ook als dit breder dan hoog is. Een vierkante SVG wordt dan gecentreerd weergegeven.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
};

export const CustomSizeIconTall: Story = {
  name: 'SVG Icon met custom size hoog',
  args: {
    style: {
      '--nl-icon-block-size': '5rem',
      '--nl-icon-inline-size': '2.55rem',
      border: '1px dashed',
    } as CSSProperties,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan met de design tokens `--nl-icon-block-size` en `--nl-icon-inline-size` worden ingesteld op een volledig custom size, ook als dit hoger dan breed is. Een vierkante SVG wordt dan gecentreerd weergegeven.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
};

export const SVGIconAndParagraphInFlexbox: Story = {
  name: 'SVG Icon met Paragraph in flex container',
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan met flexbox in het midden worden uitgelijnd als het staat naast een Paragraph in een flex container.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1ch' }}>
        <Icon {...props} />
        <Paragraph>Een afspraak maken.</Paragraph>
      </div>
    );
  },
};

export const SVGIconAndParagraphInNarrowFlexbox: Story = {
  decorators: [withBoxDecorator('10rem')],
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan met flexbox bovenin worden uitgelijnd als het staat naast een Paragraph in een smalle flex container.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <div style={{ display: 'flex', alignItems: 'start', gap: '1ch' }}>
        <Icon {...props} />
        <Paragraph>Een afspraak maken bij de Gemeente Voorbeeld.</Paragraph>
      </div>
    );
  },
};

export const SVGIconCustomSizeAndParagraphInFlexbox: Story = {
  name: 'SVG Icon met custom size in Paragraaf in flex container',
  args: {
    style: {
      '--nl-icon-block-size': '5rem',
      '--nl-icon-inline-size': '5rem',
    } as CSSProperties,
  },
  decorators: [withBoxDecorator()],
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan met de design tokens `--nl-icon-block-size` en `--nl-icon-inline-size` worden ingesteld op een volledig custom size. Het kan dan gecentreerd worden weergegeven in een flex container.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1ch' }}>
        <Icon {...props} />
        <Paragraph>Een afspraak maken.</Paragraph>
      </div>
    );
  },
};

export const SVGIconsInList: Story = {
  name: 'SVG Icons met verschillende groottes onder elkaar',
  args: {
    appearance: 'em',
    style: {
      '--nl-icon-color': 'white',
      backgroundColor: 'black',
    } as CSSProperties,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Voorbeeld van meerdere SVG Icons onder elkaar. Het laatste SVG Icon heeft een afwijkende `--nl-icon-inline-size` en lijnt daardoor niet uit met de andere SVG Icons.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    const customIconStyle = {
      '--nl-icon-inline-size': '0.5em',
      '--nl-icon-color': 'white',
      backgroundColor: 'black',
    } as CSSProperties;
    return (
      <>
        <Paragraph>
          <Icon {...props}>
            <IconChevronRight />
          </Icon>{' '}
          Een afspraak maken
        </Paragraph>
        <Paragraph>
          <Icon {...props}>
            <IconSquareChevronRight />
          </Icon>{' '}
          Een afspraak maken
        </Paragraph>
        <Paragraph>
          <Icon {...props} style={customIconStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="24"
              viewBox="0 0 12 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6l6 6l-6 6" />
            </svg>
          </Icon>{' '}
          Een afspraak maken
        </Paragraph>
      </>
    );
  },
};

export const SVGIconInAComposition: Story = {
  name: 'SVG Icon in een compositie',
  decorators: [withBoxDecorator('16rem')],
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan ingesteld worden op een grootte en met een kleur in een compositie waarbij gebruik gemaakt worden design tokens van een ander component in de compositie zoals hier een Heading level 3.',
      },
    },
    testResult: {
      date: '2025-08-22',
      notTested: [
        WCAG22_141_USE_OF_COLOR,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      pass: [WCAG22_111_NON_TEXT_CONTENT, WCAG22_131_INFO_AND_RELATIONSHIPS],
    },
  },
  render(props) {
    return (
      <div
        style={
          {
            '--nl-icon-block-size': 'var(--nl-heading-level-3-line-height)',
            '--nl-icon-color': 'var(--nl-heading-level-3-color)',
            '--nl-icon-inline-size': 'var(--nl-heading-level-3-line-height)',
            alignItems: 'start',
            display: 'grid',
            gap: '0.5rem',
            gridTemplateColumns:
              'calc(var(--nl-heading-level-3-line-height) * var(--nl-heading-level-3-font-size)) 1fr',
          } as CSSProperties
        }
      >
        <Icon {...props} />
        <Heading level={3}>Een afspraak maken met de Gemeente Voorbeeld</Heading>
      </div>
    );
  },
};

export const SVGIconCircle: Story = {
  args: { children: <Circle /> },
  render(props) {
    return (
      <>
        <Paragraph>
          <Icon {...props} /> inline zonder extra props
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="ex" /> inline met appearance ex
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="cap" /> inline met appearance cap
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="em" /> inline met appearance em
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="lh" /> inline met appearance lh
        </Paragraph>
      </>
    );
  },
};

export const SVGIconCircleInset: Story = {
  args: { children: <CircleInset /> },
  render(props) {
    return (
      <>
        <Paragraph>
          <Icon {...props} /> inline zonder extra props
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="ex" /> inline met appearance ex
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="cap" /> inline met appearance cap
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="em" /> inline met appearance em
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="lh" /> inline met appearance lh
        </Paragraph>
      </>
    );
  },
};

export const SVGIconSquare: Story = {
  args: { children: <Square /> },
  render(props) {
    return (
      <>
        <Paragraph>
          <Icon {...props} /> inline zonder extra props
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="ex" /> inline met appearance ex
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="cap" /> inline met appearance cap
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="em" /> inline met appearance em
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="lh" /> inline met appearance lh
        </Paragraph>
      </>
    );
  },
};

export const SVGIconSquareInset: Story = {
  args: { children: <SquareInset /> },
  render(props) {
    return (
      <>
        <Paragraph>
          <Icon {...props} /> inline zonder extra props
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="ex" /> inline met appearance ex
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="cap" /> inline met appearance cap
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="em" /> inline met appearance em
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="lh" /> inline met appearance lh
        </Paragraph>
      </>
    );
  },
};

export const SVGIconDiamond: Story = {
  args: { children: <Diamond /> },
  render(props) {
    return (
      <>
        <Paragraph>
          <Icon {...props} /> inline zonder extra props
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="ex" /> inline met appearance ex
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="cap" /> inline met appearance cap
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="em" /> inline met appearance em
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="lh" /> inline met appearance lh
        </Paragraph>
      </>
    );
  },
};

export const SVGIconDiamondInset: Story = {
  args: { children: <DiamondInset /> },
  render(props) {
    return (
      <>
        <Paragraph>
          <Icon {...props} /> inline zonder extra props
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="ex" /> inline met appearance ex
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="cap" /> inline met appearance cap
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="em" /> inline met appearance em
        </Paragraph>
        <Paragraph>
          <Icon {...props} appearance="lh" /> inline met appearance lh
        </Paragraph>
      </>
    );
  },
};
