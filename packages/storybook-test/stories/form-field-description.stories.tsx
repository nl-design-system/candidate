import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import { UnorderedList } from '../../components-react/unordered-list-react/src/unordered-list';
import '../../components-css/unordered-list-css/src/unordered-list.scss';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/form-field-description-css/src/form-field-description.scss';
import packageJSON from '../../components-react/form-field-description-react/package.json';
import { FormFieldDescription } from '../../components-react/form-field-description-react/src/form-field-description';
import componentMarkdown from '../../docs/form-field-description-docs/docs/component.md?raw';
import tokens from '../../tokens/form-field-description-tokens/tokens.json';
import { LargeLetterSpacingDecorator, LargeLineHeightDecorator, LargeWordSpacingDecorator } from '../src/TextDecorator';
import type { PropsWithChildren } from 'react';
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

const AlternativeHTMLFormFieldDescription = ({
  children,
  Component = 'div',
  ...restProps
}: PropsWithChildren<{ Component: keyof JSX.IntrinsicElements }>) => (
  <Component className="nl-form-field-description" {...restProps}>
    {children}
  </Component>
);

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
    disabled: { control: 'boolean', table: { category: 'API' } },
  },
  component: FormFieldDescription,
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
        url: 'https://nldesignsystem.nl/form-field-description',
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
        WCAG22_134_ORIENTATION,
        WCAG22_135_IDENTIFY_INPUT_PURPOSE,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_1413_CONTENT_ON_HOVER_OR_FOCUS,
        WCAG22_142_AUDIO_CONTROL,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_212_NO_KEYBOARD_TRAP,
        WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
        WCAG22_214_CHARACTER_KEY_SHORTCUTS,
        WCAG22_221_TIMING_ADJUSTABLE,
        WCAG22_222_PAUSE_STOP_HIDE,
        WCAG22_231_THREE_FLASHES_OR_BELOW_THRESHOLD,
        WCAG22_241_BYPASS_BLOCKS,
        WCAG22_242_PAGE_TITLED,
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
        WCAG22_333_ERROR_SUGGESTION,
        WCAG22_334_ERROR_PREVENTION_LEGAL_FINANCIAL_DATA,
        WCAG22_337_REDUNDANT_ENTRY,
        WCAG22_338_ACCESSIBLE_AUTHENTICATION_MINIMUM,
        WCAG22_412_NAME_ROLE_VALUE,
        WCAG22_413_STATUS_MESSAGES,
      ],
    },
    tokens,
  },
  title: 'Componenten/Form Field Description',
} satisfies Meta<typeof FormFieldDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FormFieldDescriptionWithParagraphElement: Story = {
  name: 'Form Field Description met een HTML-element p',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '2136D6F3-2B4C-4195-9DFB-CCF8B69AAE53';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          <p>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.</p>
        </FormFieldDescription>
        <div>
          <input
            id={POSTCODE_INPUT_ID}
            aria-describedby={POSTCODE_DESCRIPTION_ID}
            type="text"
            autoComplete="postal-code"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'De kleur en typografie van de tekst komen overeen met het design van de Form Field Description.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-09-25',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionWithMultipleParagraphElements: Story = {
  name: 'Form Field Description met meerdere HTML p elementen',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '9EDD0F53-98EC-4E12-BE15-00E9053CEEEA';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          <p>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters.</p>
          <p>Bijvoorbeeld: 1234 AB.</p>
        </FormFieldDescription>
        <div>
          <input
            id={POSTCODE_INPUT_ID}
            aria-describedby={POSTCODE_DESCRIPTION_ID}
            type="text"
            autoComplete="postal-code"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De kleur en typografie van alle alinea’s komen overeen met het design van de Form Field Description, en er is passende ruimte tussen de alinea’s.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-09-25',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionWithParagraphComponent: Story = {
  name: 'Form Field Description met NL Paragraph component',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '801BDACF-97F6-4F1F-90EB-280927C0777F';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          <Paragraph>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.</Paragraph>
        </FormFieldDescription>
        <div>
          <input
            id={POSTCODE_INPUT_ID}
            aria-describedby={POSTCODE_DESCRIPTION_ID}
            type="text"
            autoComplete="postal-code"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De kleur en typografie van de tekst in de NL Paragraph component komen overeen met het design van de Form Field Description.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-09-25',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionWithMultipleParagraphComponents: Story = {
  name: 'Form Field Description met meerdere NL Paragraph componenten',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '38C1CAFA-554C-4670-918B-3E231F3F7BBE';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          <Paragraph>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters.</Paragraph>
          <Paragraph>Bijvoorbeeld: 1234 AB.</Paragraph>
        </FormFieldDescription>
        <div>
          <input
            id={POSTCODE_INPUT_ID}
            aria-describedby={POSTCODE_DESCRIPTION_ID}
            type="text"
            autoComplete="postal-code"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De kleur en typografie van alle alinea’s in de NL Paragraph componenten komen overeen met het design van de Form Field Description.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-09-25',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionWithMultipleParagraphComponentsLead: Story = {
  name: 'Form Field Description met meerdere NL Paragraph componenten met Lead variant',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '38C1CAFA-554C-4670-918B-3E231F3F7BBE';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          <Paragraph purpose="lead">Een postcode bestaat uit 4 cijfers, een spatie en 2 letters.</Paragraph>
          <Paragraph>Bijvoorbeeld: 1234 AB.</Paragraph>
        </FormFieldDescription>
        <div>
          <input
            id={POSTCODE_INPUT_ID}
            aria-describedby={POSTCODE_DESCRIPTION_ID}
            type="text"
            autoComplete="postal-code"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De kleur en typografie van alle alinea’s in de NL Paragraph componenten komen overeen met het design van de Form Field Description.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-10-01',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionWithPhrasingContent: Story = {
  name: 'Form Field Description met phrasing content',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '79B14573-CAE4-40B8-BB27-03B676494DE5';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          <span>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.</span>
        </FormFieldDescription>
        <div>
          <input
            id={POSTCODE_INPUT_ID}
            aria-describedby={POSTCODE_DESCRIPTION_ID}
            type="text"
            autoComplete="postal-code"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De tekst in het `span` element krijgt de kleur van de Form Field Description en wordt inline weergegeven, zonder extra witruimte boven of onder.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-09-25',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionRelationWithInput: Story = {
  name: 'Form Field Description gekoppeld aan HTML input element via aria-describedby',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = 'f973b468-8178-43b6-9b69-666c4a567cf3';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
        </FormFieldDescription>
        <div>
          <input
            id={POSTCODE_INPUT_ID}
            aria-describedby={POSTCODE_DESCRIPTION_ID}
            type="text"
            autoComplete="postal-code"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Form Field Description gekoppeld aan een HTML input element via het `aria-describedby` attribuut. De Form Field Description wordt voorgelezen door een screenreader bij focus op het input element.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-09-25',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionAsParagraph: Story = {
  name: 'Form Field Description als een HTML-element p in plaats van div',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'E37AE1FB-858C-4998-B2C7-44DD3DA42659';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Postcode</label>
        <AlternativeHTMLFormFieldDescription Component="p" id={DESCRIPTION_ID}>
          Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
        </AlternativeHTMLFormFieldDescription>
        <div>
          <input id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De kleur en typografie van de tekst komen overeen met het design van de Form Field Description. De witruimte boven en onder de Form Field Description is niet anders, dan wanneer het HTML-element div wordt gebruikt.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-09-25',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionAboveTextInput: Story = {
  name: 'Form Field Description boven de Text Input in de Form Field',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = 'EDE17C81-2F3E-4DF1-8F3C-C9165FDF114E';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
        </FormFieldDescription>
        <div>
          <input
            id={POSTCODE_INPUT_ID}
            aria-describedby={POSTCODE_DESCRIPTION_ID}
            type="text"
            autoComplete="postal-code"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Form Field Description die boven de Text Input in de Form Field staat, tussen het label en het invoerveld.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-09-25',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionBelowTextInputViaStyling: Story = {
  name: 'Form Field Description onder de Text Input in de Form Field via styling',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = 'DA409064-5394-4BD7-8DC0-6DDF40436040';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID} style={{ order: 2 }}>
          Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
        </FormFieldDescription>
        <div>
          <input
            id={POSTCODE_INPUT_ID}
            aria-describedby={POSTCODE_DESCRIPTION_ID}
            type="text"
            autoComplete="postal-code"
            style={{ order: 1 }}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Form Field Description die onder de Text Input in de Form Field staat door middel van CSS styling. De Form Field Description staat in de DOM-volgorde boven het invoerveld, maar wordt visueel eronder geplaatst.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-09-25',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionWithUnorderedList: Story = {
  name: 'Form Field Description met een ongeordende lijst',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = 'CD860B9E-5D14-4BBF-BF47-5FC95DA2E4C5';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Wachtwoord</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          <UnorderedList>
            <ul>
              <li>Minimaal 8 tekens.</li>
              <li>Minimaal één hoofdletter.</li>
              <li>Minimaal één cijfer.</li>
            </ul>
          </UnorderedList>
        </FormFieldDescription>
        <div>
          <input
            id={POSTCODE_INPUT_ID}
            aria-describedby={POSTCODE_DESCRIPTION_ID}
            type="password"
            autoComplete="new-password"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Elk lijstitem heeft een opsommingsteken (bullet) aan het begin, en de kleur en typografie van de lijstitems komen overeen met het design van de Form Field Description. Voor screenreaders wordt de lijst herkend als een lijst met het juiste aantal items.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-09-25',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionWithParagraphAndUnorderedList: Story = {
  name: 'Form Field Description met een alinea en een ongeordende lijst',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = 'CB125EEC-271F-4036-8A32-D160C67D7A4D';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Wachtwoord</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          <Paragraph>Uw wachtwoord moet voldoen aan de volgende eisen:</Paragraph>
          <UnorderedList>
            <ul>
              <li>Minimaal 8 tekens.</li>
              <li>Minimaal één hoofdletter.</li>
              <li>Minimaal één cijfer.</li>
            </ul>
          </UnorderedList>
        </FormFieldDescription>
        <div>
          <input
            id={POSTCODE_INPUT_ID}
            aria-describedby={POSTCODE_DESCRIPTION_ID}
            type="password"
            autoComplete="new-password"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Er is een alinea met 1 zin gevolgd door een opsomming met drie items. De alinea en de items in de opsomming hebben voldoende leestekens, waardoor de informatie als platte tekst even duidelijk is als met de Unordered List. Een screenreader leest bijvoorbeeld: "Uw wachtwoord moet voldoen aan de volgende eisen: Minimaal 8 tekens. Minimaal één hoofdletter. Minimaal één cijfer." Dat is voldoende, visueel is niet meer informatie beschikbaar. De opsomming is visueel herkenbaar als Unordered List. De Paragraph en de Unordered List hebben een design dat past bij de Form Field Description, wat betreft kleur en lettertype.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-09-25',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionDisabled: Story = {
  name: 'Form Field Description disabled',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'A1B2C3D4-0001-0001-0001-A1B2C3D4E5F6';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Postcode</label>
        <FormFieldDescription id={DESCRIPTION_ID} disabled>
          Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
        </FormFieldDescription>
        <div>
          <input id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" disabled />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'De tekst heeft de kleur van een disabled Form Field Description.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-09-25',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionDisabledWithParagraphElement: Story = {
  name: 'Form Field Description disabled met HTML-element p',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'A1B2C3D4-0002-0002-0002-A1B2C3D4E5F6';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Postcode</label>
        <FormFieldDescription id={DESCRIPTION_ID} disabled>
          <p>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.</p>
        </FormFieldDescription>
        <div>
          <input id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" disabled />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'De tekst in het `p` element heeft de kleur van een disabled Form Field Description.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-09-25',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionDisabledWithParagraphComponent: Story = {
  name: 'Form Field Description disabled met NL Paragraph component',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'A1B2C3D4-0003-0003-0003-A1B2C3D4E5F6';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Postcode</label>
        <FormFieldDescription id={DESCRIPTION_ID} disabled>
          <Paragraph>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.</Paragraph>
        </FormFieldDescription>
        <div>
          <input id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" disabled />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De tekst in de NL Paragraph component krijgt nog niet de disabled kleur. Visueel is daardoor geen verschil zichtbaar tussen een actieve en een disabled Form Field Description met een NL Paragraph.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-09-25',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionTextSpacing: Story = {
  name: 'Form Field Description met vergrootte tekstafstand',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  decorators: [LargeLetterSpacingDecorator, LargeWordSpacingDecorator, LargeLineHeightDecorator],
  render: () => {
    const INPUT_ID = '18E35B1D-57D3-414C-9485-5C8542FC962D1';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Probleem</label>
        <FormFieldDescription id={DESCRIPTION_ID}>
          Beschrijf het probleem zo specifiek mogelijk. Vermeld in ieder geval de foutcode (indien bekend), wanneer het
          probleem voor het eerst optrad en welke stappen je al hebt ondernomen. (Max. 500 woorden).
        </FormFieldDescription>
        <div>
          <textarea id={INPUT_ID} aria-describedby={DESCRIPTION_ID} />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Een Form Field Description met vergrootte tekstafstand. De tekst overlapt niet met andere onderdelen van de content of componenten.

De tekstafstand is vergroot volgens [WCAG Succescriterium 1.4.12 Tekstafstand](https://nldesignsystem.nl/wcag/1.4.12/):

- Regelafstand: minimaal 150% van de lettergrootte
- Letterafstand: minimaal 12% van de lettergrootte
- Woordafstand: minimaal 16% van de lettergrootte`,
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-09-25',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionLangLTR: Story = {
  name: 'Form Field Description in het Engels',
  globals: {
    dir: 'ltr',
    lang: 'en',
  },
  render: () => {
    const INPUT_ID = '18E35B1D-57D3-414C-9485-5C8542FC962D2';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Postcode</label>
        </div>
        <FormFieldDescription id={DESCRIPTION_ID} lang="en">
          A postal code consists of 4 digits, a space, and 2 letters. For example: 1234 AB.
        </FormFieldDescription>
        <div>
          <input id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De ondersteunende tekst staat in het Engels, terwijl de rest van de pagina in het Nederlands is. De afwijkende taal is expliciet aangegeven, zodat de tekst correct wordt uitgesproken door een screenreader. De afwijkende taal is aangegeven met het HTML-attribuut `lang`.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-10-01',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionLangRTL: Story = {
  name: 'Form Field Description in het Arabisch',
  globals: {
    dir: 'ltr',
    lang: 'ar',
  },
  render: () => {
    const INPUT_ID = '18E35B1D-57D3-414C-9485-5C8542FC962D109876543';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <div lang="ar" dir="rtl">
          <label htmlFor={INPUT_ID}>رمز بريدي</label>
        </div>
        <FormFieldDescription id={DESCRIPTION_ID} lang="ar" dir="rtl">
          يتكون الرمز البريدي من 4 أرقام، ومسافة، وحرفين.
        </FormFieldDescription>
        <div lang="ar" dir="rtl">
          <input id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De ondersteunende tekst is in het Arabisch, een taal met een andere schrijf- en leesrichting. De richting van de tekst past bij de de taal. De taal is aangegeven met het HTML-attribuut `lang`. De richting is aangegeven met het HTML-attribuut `dir`, zodat de tekst van rechts naar links wordt weergegeven.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-10-01',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionVerticalText: Story = {
  name: 'Form Field Description in het Japans',
  globals: {
    dir: 'ltr',
    lang: 'ja',
    writingMode: 'vertical-rl',
  },
  render: () => {
    const INPUT_ID = '18E35B1D-57D3-414C-9485-5C8542FC962D10987654';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>郵便番号</label>
        </div>
        <FormFieldDescription id={DESCRIPTION_ID} lang="ja">
          郵便番号は、4桁の数字、スペース、2文字のアルファベットで構成されています。例：1234 AB。
        </FormFieldDescription>
        <div>
          <input id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De hele pagina staat in verticale tekstrichting, aangezet via de CSS-eigenschap `writingMode`. Het label, de ondersteunende tekst en het invoerveld passen zich allemaal aan de verticale richting aan. De taal is aangegeven met het HTML-attribuut `lang`.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-10-01',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionLargeText: Story = {
  name: 'Form Field Description met 200% pagina-zoom',
  render: () => {
    const INPUT_ID = '18E35B1D-57D3-414C-9485-5C8542FC962D109876';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Postcode</label>
        </div>
        <FormFieldDescription id={DESCRIPTION_ID}>
          Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
        </FormFieldDescription>
        <div>
          <input id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  globals: { zoom: 2 },
  parameters: {
    docs: {
      description: {
        story:
          'De pagina is gezoomd naar 200% via de browser (paginazoom), waardoor zowel de tekst als het invoerveld twee keer zo groot worden. De ondersteunende tekst blijft goed leesbaar en loopt niet buiten de ruimte van het element.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-10-01',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
      fail: [WCAG22_1410_REFLOW],
    },
  },
};

export const FormFieldDescriptionTextZoom: Story = {
  name: 'Form Field Description met 200% tekstgrootte',
  render: () => {
    const INPUT_ID = '18E35B1D-57D3-414C-9485-5C8542FC962D10987';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Postcode</label>
        </div>
        <FormFieldDescription id={DESCRIPTION_ID}>
          Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
        </FormFieldDescription>
        <div>
          <input id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  globals: { fontSize: '32px' },
  parameters: {
    docs: {
      description: {
        story:
          'De standaard tekstgrootte van de pagina is vergroot van 16px naar 32px, zoals bij een gebruikersvoorkeur voor grotere tekst (WCAG-criterium 1.4.4, "Herschalen van tekst"). Alleen de tekst, die in `rem` is opgegeven, wordt hierdoor groter; het invoerveld schaalt niet automatisch mee. De ondersteunende tekst blijft goed leesbaar en loopt niet buiten de ruimte van het element. Deze story is alleen los te bekijken, niet op de documentatiepagina, omdat de tekstgrootte op paginaniveau wordt ingesteld.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-10-01',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionWordBreak: Story = {
  name: 'Form Field Description met woorden die niet op 1 regel passen',
  render: () => {
    const INPUT_ID = '18E35B1D-57D3-414C-9485-5C8542FC962D1098';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        <FormFieldDescription id={DESCRIPTION_ID}>
          Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB. De
          onvolledigheidscontrolemechanismevalidatieprocedure kan constateren dat het veld Poostcode niet is ingevuld.
          Dit resulteert dan in een onacceptabele gegevensverwerkingsfoutmelding binnen ons geïntegreerde
          automatiseringsplatform voor klantgegevensbeheer.
        </FormFieldDescription>
        <div>
          <input id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De ondersteunende tekst bevat buitengewoon lange woorden. Woorden worden afgebroken aan het einde van de regel en vervolgd op de volgende regel.  Tekst valt niet buiten beeld.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-10-01',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionSmallViewport: Story = {
  name: 'Form Field Description in een kleine viewport',
  globals: { viewport: { value: 'wcag400' } },
  render: () => {
    const INPUT_ID = '18E35B1D-57D3-414C-9485-5C8542FC962D109';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        <FormFieldDescription id={DESCRIPTION_ID}>
          Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB. Er is een probleem
          opgetreden bij het verwerken van uw gegevens. Het veld Naam is verplicht en mag niet leeg blijven. Vul het
          veld Naam in met uw volledige voor- en achternaam (bijv. Jan de Vries). Controleer of er geen onbedoelde
          spaties of leestekens in het veld staan.
        </FormFieldDescription>
        <div>
          <input id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De lange foutmelding is in een kleine viewport te zien zonder dat er tekst buiten het beeld valt. De boodschap blijft leesbaar omdat deze over meerdere regels wordt verdeeld. De kleine viewport is vergelijkbaar met 400% zoom. Er valt geen tekst buiten beeld aan de rechterkant, en aan de onderkant is scrollen mogelijk.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-10-01',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};

export const FormFieldDescriptionForcedColorsMode: Story = {
  name: 'Form Field Description in Forced Colors mode',
  globals: { forcedColors: 'active' },
  render: () => {
    const INPUT_ID = '18E35B1D-57D3-414C-9485-5C8542FC962D10';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        <FormFieldDescription id={DESCRIPTION_ID}>
          Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
        </FormFieldDescription>
        <div>
          <input id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De ondersteunende tekst blijft goed leesbaar in de modus voor hoge contrastkleurinstellingen. De tekstkleur past zich aan de systeemkleuren aan, zodat de boodschap ook in deze weergave duidelijk te zien is. Dit is een gesimuleerde weergave binnen Storybook (via de toolbar-knop "Forced Colors"), controleer voor definitieve verificatie ook de echte Forced Colors mode via de browser DevTools of het besturingssysteem.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2026-10-01',
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_211_KEYBOARD,
        WCAG22_243_FOCUS_ORDER,
        WCAG22_132_MEANINGFUL_SEQUENCE,
        WCAG22_133_SENSORY_CHARACTERISTICS,
        WCAG22_141_USE_OF_COLOR,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_1410_REFLOW,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_332_LABELS_OR_INSTRUCTIONS,
      ],
    },
  },
};
